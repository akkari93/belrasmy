import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const dealers = await prisma.dealer.findMany({
      where: { isActive: true },
      select: {
        id: true,
        nameEn: true,
        nameAr: true,
        slug: true,
        city: true,
        governorate: true,
      },
      orderBy: { nameEn: "asc" },
    });

    return Response.json(dealers);
  } catch (error) {
    console.error("GET /api/dealers error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
