import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { makeId, nameEn, nameAr, slug, yearStart, yearEnd } = body;

    if (!makeId || !nameEn || !nameAr || !slug) {
      return Response.json(
        { error: "makeId, nameEn, nameAr, and slug are required" },
        { status: 400 }
      );
    }

    // Verify make exists
    const make = await prisma.make.findUnique({
      where: { id: makeId },
    });
    if (!make) {
      return Response.json(
        { error: "Make not found" },
        { status: 400 }
      );
    }

    const model = await prisma.model.create({
      data: {
        makeId,
        nameEn,
        nameAr,
        slug,
        yearStart: yearStart ?? null,
        yearEnd: yearEnd ?? null,
      },
    });

    return Response.json(model, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/models error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
