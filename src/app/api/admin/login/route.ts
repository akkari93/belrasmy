import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import crypto from "node:crypto";
import { ADMIN_SESSION_TTL_SECONDS, adminTokenExpiry, hashAdminToken } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return Response.json(
        { success: false, error: "Username and password are required" },
        { status: 400 }
      );
    }

    const admin = await prisma.adminUser.findUnique({
      where: { username },
    });

    if (!admin || !admin.isActive) {
      return Response.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const valid = await bcrypt.compare(password, admin.passwordHash);
    if (!valid) {
      return Response.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = crypto.randomBytes(32).toString('hex');
    const tokenHash = hashAdminToken(token);
    await prisma.$transaction([
      prisma.setting.upsert({
        where: { key: "admin_token" },
        update: { value: tokenHash },
        create: { key: "admin_token", value: tokenHash },
      }),
      prisma.setting.upsert({
        where: { key: "admin_token_expires_at" },
        update: { value: adminTokenExpiry() },
        create: { key: "admin_token_expires_at", value: adminTokenExpiry() },
      }),
    ]);

    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_token", token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure:
        request.nextUrl.protocol === 'https:' ||
        request.headers.get('x-forwarded-proto')?.split(',')[0].trim() === 'https',
      maxAge: ADMIN_SESSION_TTL_SECONDS,
    });

    return res;
  } catch (error) {
    console.error("POST /api/admin/login error:", error);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
