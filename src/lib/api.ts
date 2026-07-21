export interface Submission {
  id: string;
  purchasePrice: number;
  officialPrice: number | null;
  purchaseDate: string;
  deliveryDate: string | null;
  deliveryTiming: string | null;
  phone: string | null;
  evidenceUrl: string | null;
  notes: string | null;
  purchaserName: string | null;
  status: 'PENDING' | 'PUBLISHED' | 'HIDDEN' | 'REMOVED';
  createdAt: string;
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

export interface Make {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  models?: Model[];
}

export interface Model {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  variants?: Variant[];
}

export interface Variant {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  year: number;
  engine: string | null;
}

export interface Dealer {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  city: string | null;
  governorate: string | null;
  phone: string | null;
  brands: string | null;
}

export async function getSubmissions(filters?: { make?: string; model?: string; dealer?: string }): Promise<Submission[]> {
  const params = new URLSearchParams();
  if (filters?.make) params.set('make', filters.make);
  if (filters?.model) params.set('model', filters.model);
  if (filters?.dealer) params.set('dealer', filters.dealer);
  const res = await fetch('/api/submissions?' + params.toString());
  if (!res.ok) throw new Error('Failed to fetch submissions');
  return res.json();
}

export async function getMakes(): Promise<Make[]> {
  const res = await fetch('/api/makes');
  if (!res.ok) throw new Error('Failed to fetch makes');
  return res.json();
}

export async function getDealers(): Promise<Dealer[]> {
  const res = await fetch('/api/dealers');
  if (!res.ok) throw new Error('Failed to fetch dealers');
  return res.json();
}

type ApiPayload = Record<string, unknown>;
type CreateSubmissionResult = { id: string; [key: string]: unknown };

function getApiError(payload: unknown, fallback: string): string {
  if (payload && typeof payload === 'object' && 'error' in payload) {
    const error = payload.error;
    if (typeof error === 'string') return error;
  }
  return fallback;
}

export async function createSubmission(data: ApiPayload): Promise<CreateSubmissionResult> {
  const res = await fetch('/api/submissions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err: unknown = await res.json().catch(() => ({ error: 'Submission failed' }));
    throw new Error(getApiError(err, 'Submission failed'));
  }
  return res.json();
}

export async function reportSubmission(id: string, data: ApiPayload): Promise<ApiPayload> {
  const res = await fetch('/api/submissions/' + id + '/report', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err: unknown = await res.json().catch(() => ({ error: 'Report failed' }));
    throw new Error(getApiError(err, 'Report failed'));
  }
  return res.json();
}
