import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const q = request.nextUrl.searchParams.get("q") || "";

    const where = q
      ? {
          OR: [
            { nameEn: { contains: q } },
            { nameAr: { contains: q } },
          ],
        }
      : {};

    const variants = await prisma.variant.findMany({
      where,
      include: {
        model: {
          include: {
            make: true,
          },
        },
      },
      orderBy: [{ year: "desc" }, { nameEn: "asc" }],
    });

    const data = variants.map((v: any) => ({
      id: v.id,
      nameEn: v.nameEn,
      nameAr: v.nameAr,
      slug: v.slug,
      year: v.year,
      modelName: v.model.nameEn,
      makeName: v.model.make.nameEn,
    }));

    return Response.json(data);
  } catch (error) {
    console.error("GET /api/variants error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
