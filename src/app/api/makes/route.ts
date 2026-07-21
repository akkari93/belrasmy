import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const makes = await prisma.make.findMany({
      include: {
        models: {
          include: {
            variants: {
              select: {
                id: true,
                nameEn: true,
                nameAr: true,
                slug: true,
                year: true,
                engine: true,
              },
            },
          },
        },
      },
      orderBy: { nameEn: "asc" },
    });

    return Response.json(makes);
  } catch (error) {
    console.error("GET /api/makes error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
