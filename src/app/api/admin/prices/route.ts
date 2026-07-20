import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { variantId, amount, source, sourceUrl, sourceDate, isActive } = body;

    if (!variantId || amount === undefined || amount === null || !source) {
      return Response.json(
        { error: "variantId, amount, and source are required" },
        { status: 400 }
      );
    }

    if (typeof amount !== "number" || amount <= 0) {
      return Response.json(
        { error: "amount must be a positive number" },
        { status: 400 }
      );
    }

    // Verify variant exists
    const variant = await prisma.variant.findUnique({
      where: { id: variantId },
    });
    if (!variant) {
      return Response.json(
        { error: "Variant not found" },
        { status: 400 }
      );
    }

    const price = await prisma.price.create({
      data: {
        variantId,
        amount,
        source,
        sourceUrl: sourceUrl || null,
        sourceDate: sourceDate ? new Date(sourceDate) : new Date(),
        isActive: isActive ?? true,
      },
    });

    return Response.json(price, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/prices error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
