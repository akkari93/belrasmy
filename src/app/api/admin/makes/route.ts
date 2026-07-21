import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export async function GET() {
  try {
    const unauthorized = await requireAdmin();
    if (unauthorized) return unauthorized;

    const makes = await prisma.make.findMany({
      include: {
        models: {
          include: {
            variants: {
              include: {
                prices: {
                  select: {
                    id: true,
                    amount: true,
                    source: true,
                    sourceUrl: true,
                    sourceDate: true,
                    isActive: true,
                  },
                  orderBy: { createdAt: "desc" },
                },
              },
            },
          },
        },
      },
      orderBy: { nameEn: "asc" },
    });

    return Response.json({ makes });
  } catch (error) {
    console.error("GET /api/admin/makes error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const unauthorized = await requireAdmin();
    if (unauthorized) return unauthorized;

    const { nameEn, nameAr, slug } = await request.json();
    if (!nameEn || !nameAr || !slug) {
      return Response.json(
        { error: "nameEn, nameAr, and slug are required" },
        { status: 400 }
      );
    }

    const make = await prisma.make.create({
      data: { nameEn, nameAr, slug },
    });

    return Response.json(make, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/makes error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
