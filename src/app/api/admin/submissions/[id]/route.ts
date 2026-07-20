import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    // Validate status is a valid SubmissionStatus
    const validStatuses = ["PENDING", "PUBLISHED", "HIDDEN", "REMOVED"];
    if (!status || !validStatuses.includes(status)) {
      return Response.json(
        {
          error: `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const submission = await prisma.submission.findUnique({
      where: { id },
    });

    if (!submission) {
      return Response.json(
        { error: "Submission not found" },
        { status: 404 }
      );
    }

    const updated = await prisma.submission.update({
      where: { id },
      data: { status },
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

    return Response.json(updated);
  } catch (error) {
    console.error("PUT /api/admin/submissions/[id] error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
