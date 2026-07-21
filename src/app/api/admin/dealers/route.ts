import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export async function GET() {
  try {
    const unauthorized = await requireAdmin();
    if (unauthorized) return unauthorized;

    const dealers = await prisma.dealer.findMany({
      include: {
        _count: {
          select: { submissions: true },
        },
      },
      orderBy: { nameEn: "asc" },
    });

    return Response.json({ dealers });
  } catch (error) {
    console.error("GET /api/admin/dealers error:", error);
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

    const body = await request.json();
    const { nameEn, nameAr, slug, city, governorate, phone, website, brands, isActive } = body;

    if (!nameEn || !nameAr || !slug) {
      return Response.json(
        { error: "nameEn, nameAr, and slug are required" },
        { status: 400 }
      );
    }

    const dealer = await prisma.dealer.create({
      data: {
        nameEn,
        nameAr,
        slug,
        city: city || null,
        governorate: governorate || null,
        phone: phone || null,
        website: website || null,
        brands: brands || null,
        isActive: isActive ?? true,
      },
    });

    return Response.json(dealer, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/dealers error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
