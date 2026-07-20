import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const make = searchParams.get("make");
    const model = searchParams.get("model");
    const dealer = searchParams.get("dealer");

    const where: Record<string, unknown> = {
      status: "PUBLISHED",
    };

    // Build the filter using the variant->model->make chain
    const variantFilter: Record<string, unknown> = {};
    if (make) {
      variantFilter.model = { make: { slug: make } };
    }
    if (model) {
      variantFilter.model = {
        ...(variantFilter.model as Record<string, unknown>),
        slug: model,
      };
    }
    if (Object.keys(variantFilter).length > 0) {
      where.variant = variantFilter;
    }
    if (dealer) {
      where.dealer = { slug: dealer };
    }

    const submissions = await prisma.submission.findMany({
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
        dealer: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const data = submissions.map((s) => ({
      id: s.id,
      makeName: s.variant.model.make.nameEn,
      modelName: s.variant.model.nameEn,
      variantName: s.variant.nameEn,
      dealerName: s.dealer.nameEn,
      purchasePrice: s.purchasePrice,
      purchaseDate: s.purchaseDate,
      deliveryTiming: s.deliveryTiming,
      createdAt: s.createdAt,
    }));

    return Response.json(data);
  } catch (error) {
    console.error("GET /api/submissions error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      dealerId,
      variantId,
      purchasePrice,
      purchaseDate,
      deliveryDate,
      deliveryTiming,
      phone,
      evidenceUrl,
      notes,
      purchaserName,
      hasPurchased,
      deviceFingerprint,
    } = body;

    // Validate purchasePrice
    if (!purchasePrice || typeof purchasePrice !== "number" || purchasePrice <= 0) {
      return Response.json(
        { error: "purchasePrice must be a positive number" },
        { status: 400 }
      );
    }

    // Validate purchaseDate year
    const parsedPurchaseDate = new Date(purchaseDate);
    if (isNaN(parsedPurchaseDate.getTime())) {
      return Response.json(
        { error: "Invalid purchaseDate" },
        { status: 400 }
      );
    }
    const year = parsedPurchaseDate.getFullYear();
    if (year !== 2025 && year !== 2026) {
      return Response.json(
        { error: "purchaseDate year must be 2025 or 2026" },
        { status: 400 }
      );
    }

    // Validate dealer exists and is active
    const dealer = await prisma.dealer.findUnique({
      where: { id: dealerId },
    });
    if (!dealer) {
      return Response.json(
        { error: "Dealer not found" },
        { status: 400 }
      );
    }
    if (!dealer.isActive) {
      return Response.json(
        { error: "Dealer is not active" },
        { status: 400 }
      );
    }

    // Validate variant exists
    const variant = await prisma.variant.findUnique({
      where: { id: variantId },
    });
    if (!variant) {
      return Response.json(
        { error: "Variant not found" },
        { status: 400 }
      );
    }

    const submission = await prisma.submission.create({
      data: {
        dealerId,
        variantId,
        purchasePrice,
        purchaseDate: parsedPurchaseDate,
        deliveryDate: deliveryDate ? new Date(deliveryDate) : null,
        deliveryTiming: deliveryTiming || null,
        phone: phone || null,
        evidenceUrl: evidenceUrl || null,
        notes: notes || null,
        purchaserName: purchaserName || null,
        hasPurchased: hasPurchased ?? true,
        deviceFingerprint: deviceFingerprint || null,
        status: "PUBLISHED",
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
      },
    });

    return Response.json(submission, { status: 201 });
  } catch (error) {
    console.error("POST /api/submissions error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
