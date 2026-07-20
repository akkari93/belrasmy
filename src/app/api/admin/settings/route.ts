import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const settings = await prisma.setting.findMany();
    const data: Record<string, string> = {};
    for (const s of settings) {
      data[s.key] = s.value;
    }
    return Response.json(data);
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
    const { key, value } = await request.json();

    if (!key || value === undefined || value === null) {
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
