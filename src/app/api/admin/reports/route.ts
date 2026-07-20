import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const submissions = await prisma.submission.findMany({
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
    });

    const data = submissions.map((s) => ({
      id: s.id,
      makeName: s.variant.model.make.nameEn,
      modelName: s.variant.model.nameEn,
      variantName: s.variant.nameEn,
      dealerName: s.dealer.nameEn,
      purchasePrice: s.purchasePrice,
      purchaseDate: s.purchaseDate,
      status: s.status,
      reportCount: s.reportCount,
      reports: s.reports,
    }));

    return Response.json(data);
  } catch (error) {
    console.error("GET /api/admin/reports error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
