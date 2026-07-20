import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
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

    return Response.json(makes);
  } catch (error) {
    console.error("GET /api/admin/makes error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
