import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("admin_token");

    if (!tokenCookie) {
      return NextResponse.json({ authenticated: false });
    }

    const storedSetting = await prisma.setting.findUnique({
      where: { key: "admin_token" },
    });

    if (!storedSetting || storedSetting.value !== tokenCookie.value) {
      return NextResponse.json({ authenticated: false });
    }

    return NextResponse.json({ authenticated: true });
  } catch (error) {
    console.error("GET /api/admin/check error:", error);
    return NextResponse.json({ authenticated: false });
  }
}
