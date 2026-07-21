import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const unauthorized = await requireAdmin();
    if (unauthorized) return unauthorized;

    const { id } = await params;
    const body = await request.json();

    const dealer = await prisma.dealer.findUnique({
      where: { id },
    });

    if (!dealer) {
      return Response.json(
        { error: "Dealer not found" },
        { status: 404 }
      );
    }

    // Build update data from allowed fields
    const updateData: Record<string, unknown> = {};
    const allowedFields = [
      "nameEn",
      "nameAr",
      "slug",
      "city",
      "governorate",
      "phone",
      "website",
      "brands",
      "isActive",
    ];

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    }

    const updated = await prisma.dealer.update({
      where: { id },
      data: updateData,
    });

    return Response.json(updated);
  } catch (error) {
    console.error("PUT /api/admin/dealers/[id] error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
