import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  try {
    const unauthorized = await requireAdmin();
    if (unauthorized) return unauthorized;

    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get("status");
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = {};
    if (status) {
      where.status = status;
    }

    const [submissions, total] = await Promise.all([
      prisma.submission.findMany({
        where,
        include: {
          variant: {
            include: {
              model: {
                include: {
                  make: true,
                },
              },
            },
          },
          dealer: {
            select: {
              id: true,
              nameEn: true,
              nameAr: true,
              slug: true,
            },
          },
          _count: {
            select: { reports: true },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.submission.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    const data = submissions.map((s: any) => ({
      id: s.id,
        purchasePrice: s.purchasePrice,
        officialPrice: s.officialPrice,
        purchaseDate: s.purchaseDate,
        status: s.status,
        reportCount: s.reportCount,
        createdAt: s.createdAt,
        dealer: s.dealer,
        variant: {
          id: s.variant.id,
          nameEn: s.variant.nameEn,
          nameAr: s.variant.nameAr,
          year: s.variant.year,
          model: {
            id: s.variant.model.id,
            nameEn: s.variant.model.nameEn,
            nameAr: s.variant.model.nameAr,
            make: {
              id: s.variant.model.make.id,
              nameEn: s.variant.model.make.nameEn,
              nameAr: s.variant.model.make.nameAr,
            },
          },
        },
        _count: s._count,
      }));

    return Response.json({
      submissions: data,
      total,
      page,
      totalPages,
    });
  } catch (error) {
    console.error("GET /api/admin/submissions error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
