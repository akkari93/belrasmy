import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export async function GET() {
  try {
    const unauthorized = await requireAdmin();
    if (unauthorized) return unauthorized;

    const [submissions, thresholdSetting] = await Promise.all([
      prisma.submission.findMany({
      where: {
        reportCount: { gt: 0 },
      },
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
        dealer: true,
        reports: {
          select: {
            id: true,
            reason: true,
            description: true,
            reporterPhone: true,
            createdAt: true,
            status: true,
          },
          orderBy: { createdAt: "desc" },
        },
      },
        orderBy: { reportCount: "desc" },
      }),
      prisma.setting.findUnique({ where: { key: "report_threshold" } }),
    ]);

    const data = submissions.map((s: any) => ({
      id: s.id,
      purchasePrice: s.purchasePrice,
      purchaseDate: s.purchaseDate,
      status: s.status,
      reportCount: s.reportCount,
      dealer: {
        id: s.dealer.id,
        nameEn: s.dealer.nameEn,
        nameAr: s.dealer.nameAr,
      },
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
      reports: s.reports,
    }));

    return Response.json({
      submissions: data,
      threshold: Number.parseInt(thresholdSetting?.value || "3", 10) || 3,
    });
  } catch (error) {
    console.error("GET /api/admin/reports error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
