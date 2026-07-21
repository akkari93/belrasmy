import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  try {
    const unauthorized = await requireAdmin();
    if (unauthorized) return unauthorized;

    const body = await request.json();
    const { modelId, nameEn, nameAr, slug, year, engine } = body;

    if (!modelId || !nameEn || !nameAr || !slug || year === undefined || year === null) {
      return Response.json(
        { error: "modelId, nameEn, nameAr, slug, and year are required" },
        { status: 400 }
      );
    }

    if (typeof year !== "number" || year < 1900 || year > 2030) {
      return Response.json(
        { error: "year must be a valid year between 1900 and 2030" },
        { status: 400 }
      );
    }

    // Verify model exists
    const model = await prisma.model.findUnique({
      where: { id: modelId },
    });
    if (!model) {
      return Response.json(
        { error: "Model not found" },
        { status: 400 }
      );
    }

    const variant = await prisma.variant.create({
      data: {
        modelId,
        nameEn,
        nameAr,
        slug,
        year,
        engine: engine || null,
      },
    });

    return Response.json(variant, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/variants error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
