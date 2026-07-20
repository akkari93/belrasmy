import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { reason, description, reporterPhone, deviceFingerprint } = body;

    if (!reason || typeof reason !== "string") {
      return Response.json(
        { error: "reason is required" },
        { status: 400 }
      );
    }

    // Check submission exists
    const submission = await prisma.submission.findUnique({
      where: { id },
    });
    if (!submission) {
      return Response.json(
        { error: "Submission not found" },
        { status: 404 }
      );
    }

    // Get IP from x-forwarded-for header
    const headersList = await headers();
    const ipAddress = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || null;

    // Create the report
    const report = await prisma.report.create({
      data: {
        submissionId: id,
        reason,
        description: description || null,
        reporterPhone: reporterPhone || null,
        deviceFingerprint: deviceFingerprint || null,
        ipAddress,
        status: "PENDING",
      },
    });

    // Count all PENDING reports for this submission
    const pendingCount = await prisma.report.count({
      where: {
        submissionId: id,
        status: "PENDING",
      },
    });

    // Update reportCount on submission
    await prisma.submission.update({
      where: { id },
      data: { reportCount: pendingCount },
    });

    // Check report threshold
    const thresholdSetting = await prisma.setting.findUnique({
      where: { key: "report_threshold" },
    });
    const threshold = thresholdSetting ? parseInt(thresholdSetting.value, 10) : 3;

    if (pendingCount >= threshold) {
      await prisma.submission.update({
        where: { id },
        data: {
          status: "HIDDEN",
          autoHiddenAt: new Date(),
        },
      });
    }

    return Response.json(
      { success: true, reportCount: pendingCount },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/submissions/[id]/report error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
