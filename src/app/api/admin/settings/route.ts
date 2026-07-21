import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export async function GET() {
  try {
    const unauthorized = await requireAdmin();
    if (unauthorized) return unauthorized;

    const settings = await prisma.setting.findMany({
      where: { key: { not: "admin_token" } },
      orderBy: { key: "asc" },
    });
    return Response.json({ settings });
  } catch (error) {
    console.error("GET /api/admin/settings error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const unauthorized = await requireAdmin();
    if (unauthorized) return unauthorized;

    const { key, value } = await request.json();

    if (!key || key === "admin_token" || value === undefined || value === null) {
      return Response.json(
        { error: "key and value are required" },
        { status: 400 }
      );
    }

    await prisma.setting.upsert({
      where: { key },
      update: { value: String(value) },
      create: { key, value: String(value) },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("PUT /api/admin/settings error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
