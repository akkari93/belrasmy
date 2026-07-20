import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import crypto from "node:crypto";

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

    // Generate token and store it
    const token = crypto.randomUUID();
    await prisma.setting.upsert({
      where: { key: "admin_token" },
      update: { value: token },
      create: { key: "admin_token", value: token },
    });

    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_token", token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 86400, // 24 hours
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
