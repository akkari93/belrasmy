export type SubmissionStatus = 'PENDING' | 'PUBLISHED' | 'HIDDEN' | 'REMOVED';

export interface SubmissionWithRelations {
  id: string;
  purchasePrice: number;
  officialPrice: number | null;
  purchaseDate: Date;
  deliveryDate: Date | null;
  deliveryTiming: string | null;
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
    dealer: {
      id: submission.dealer.id,
      nameEn: submission.dealer.nameEn,
      nameAr: submission.dealer.nameAr,
      slug: submission.dealer.slug,
      city: submission.dealer.city,
      governorate: submission.dealer.governorate,
    },
    variant: {
      id: submission.variant.id,
      nameEn: submission.variant.nameEn,
      nameAr: submission.variant.nameAr,
      slug: submission.variant.slug,
      year: submission.variant.year,
      engine: submission.variant.engine,
      model: {
        id: submission.variant.model.id,
        nameEn: submission.variant.model.nameEn,
        nameAr: submission.variant.model.nameAr,
        slug: submission.variant.model.slug,
        make: {
          id: submission.variant.model.make.id,
          nameEn: submission.variant.model.make.nameEn,
          nameAr: submission.variant.model.make.nameAr,
          slug: submission.variant.model.make.slug,
        },
      },
    },
  };
}
