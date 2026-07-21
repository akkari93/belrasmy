import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const unauthorized = await requireAdmin();
    if (unauthorized) return unauthorized;

    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    // Validate status is a valid ReportStatus
    const validStatuses = ["PENDING", "DISMISSED", "ACTIONED"];
    if (!status || !validStatuses.includes(status)) {
      return Response.json(
        { error: `Invalid status. Must be one of: ${validStatuses.join(", ")}` },
        { status: 400 }
      );
    }

    const report = await prisma.report.findUnique({
      where: { id },
    });

    if (!report) {
      return Response.json(
        { error: "Report not found" },
        { status: 404 }
      );
    }

    const updated = await prisma.report.update({
      where: { id },
      data: { status },
    });

    return Response.json(updated);
  } catch (error) {
    console.error("PUT /api/admin/reports/[id] error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
