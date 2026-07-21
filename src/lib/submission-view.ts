export type SubmissionStatus = 'PENDING' | 'PUBLISHED' | 'HIDDEN' | 'REMOVED';

export interface SubmissionWithRelations {
  id: string;
  purchasePrice: number;
  officialPrice: number | null;
  purchaseDate: Date;
  deliveryDate: Date | null;
  deliveryTiming: string | null;
  phone: string | null;
  evidenceUrl: string | null;
  notes: string | null;
  purchaserName: string | null;
  status: SubmissionStatus;
  createdAt: Date;
  dealer: {
    id: string;
    nameEn: string;
    nameAr: string;
    slug: string;
    city: string | null;
    governorate: string | null;
  };
  variant: {
    id: string;
    nameEn: string;
    nameAr: string;
    slug: string;
    year: number;
    engine: string | null;
    model: {
      id: string;
      nameEn: string;
      nameAr: string;
      slug: string;
      make: {
        id: string;
        nameEn: string;
        nameAr: string;
        slug: string;
      };
    };
  };
}

export function serializeSubmission(submission: SubmissionWithRelations) {
  return {
    id: submission.id,
    purchasePrice: submission.purchasePrice,
    officialPrice: submission.officialPrice,
    purchaseDate: submission.purchaseDate,
    deliveryDate: submission.deliveryDate,
    deliveryTiming: submission.deliveryTiming,
    status: submission.status,
    createdAt: submission.createdAt,
    dealer: submission.dealer,
    variant: submission.variant,
  };
}
