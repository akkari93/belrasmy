import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
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
      makeName: s.variant.model.make.nameEn,
      modelName: s.variant.model.nameEn,
      variantName: s.variant.nameEn,
      dealerName: s.dealer.nameEn,
      dealer: s.dealer,
      purchasePrice: s.purchasePrice,
      purchaseDate: s.purchaseDate,
      deliveryTiming: s.deliveryTiming,
      phone: s.phone,
      purchaserName: s.purchaserName,
      status: s.status,
      reportCount: s.reportCount,
      createdAt: s.createdAt,
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
