'use client';

import { useEffect, useState, use } from 'react';
import { useLocale } from '@/lib/locale-context';
import { getSubmissions } from '@/lib/api';
import Link from 'next/link';
import type { Submission } from '@/lib/api';

const DELIVERY_TIMING_COLORS: Record<string, string> = {
  'immediate': 'bg-green-100 text-green-800',
  '1-2 weeks': 'bg-yellow-100 text-yellow-800',
  '1 month': 'bg-orange-100 text-orange-800',
  '2-3 months': 'bg-red-100 text-red-800',
  '3+ months': 'bg-red-200 text-red-900',
};

const DELIVERY_TIMING_LABELS: Record<string, [string, string]> = {
  'immediate': ['فوري', 'Immediate'],
  '1-2 weeks': ['1-2 أسبوع', '1-2 Weeks'],
  '1 month': ['شهر', '1 Month'],
  '2-3 months': ['2-3 أشهر', '2-3 Months'],
  '3+ months': ['3+ أشهر', '3+ Months'],
};

function formatDate(dateStr: string, locale: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
    });
  } catch { return dateStr; }
}

function formatPrice(price: number): string {
  return price.toLocaleString('en-US') + ' EGP';
}

function SubmissionRow({ s, locale }: { s: Submission; locale: string }) {
  const timingColor = s.deliveryTiming
    ? DELIVERY_TIMING_COLORS[s.deliveryTiming] || 'bg-gray-100 text-gray-800'
    : 'bg-gray-100 text-gray-800';
  const timingLabel = s.deliveryTiming && DELIVERY_TIMING_LABELS[s.deliveryTiming]
    ? (locale === 'ar' ? DELIVERY_TIMING_LABELS[s.deliveryTiming][0] : DELIVERY_TIMING_LABELS[s.deliveryTiming][1])
    : s.deliveryTiming || '';

  return (
    <div className="bg-white rounded-xl border border-border-light shadow-sm p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div className="min-w-0 flex-1">
        <Link
          href={`/car/${s.variant.model.make.slug}/${s.variant.model.slug}`}
          className="font-semibold text-dark hover:text-primary transition-colors no-underline"
        >
          {locale === 'ar'
            ? `${s.variant.model.make.nameAr} ${s.variant.model.nameAr} - ${s.variant.nameAr}`
            : `${s.variant.model.make.nameEn} ${s.variant.model.nameEn} - ${s.variant.nameEn}`
          }
        </Link>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary-light text-primary">
            {s.variant.year}
          </span>
          <span className="text-sm font-bold text-dark">{formatPrice(s.purchasePrice)}</span>
          <span className="text-xs text-gray-text">{formatDate(s.purchaseDate, locale)}</span>
          {s.deliveryTiming && (
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${timingColor}`}>
              {timingLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DealerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolved = use(params);
  const { t, locale } = useLocale();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    getSubmissions({ dealer: resolved.slug })
      .then((data) => setSubmissions(data || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [resolved.slug]);

  const dealer = submissions[0]?.dealer;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Dealer Info */}
      {dealer && (
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-dark">
            {locale === 'ar' ? dealer.nameAr : dealer.nameEn}
          </h1>
          {(dealer.city || dealer.governorate) && (
            <p className="text-gray-text mt-1">
              {[dealer.city, dealer.governorate].filter(Boolean).join(' - ')}
            </p>
          )}
          <p className="text-sm text-gray-text mt-1">
            {submissions.length} {t('تقرير', 'report(s)')}
          </p>
        </div>
      )}

      {!dealer && !loading && !error && (
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold text-dark mb-2">
            {resolved.slug}
          </h1>
          <p className="text-gray-text">{t('لا توجد تقارير لهذا التاجر', 'No reports for this dealer')}</p>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center py-16">
          <div className="spinner" />
          <p className="mt-4 text-gray-text text-sm">{t('جاري التحميل...', 'Loading...')}</p>
        </div>
      )}

      {error && (
        <div className="text-center py-16">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {!loading && !error && submissions.length > 0 && (
        <div className="flex flex-col gap-3">
          {submissions.map((s) => (
            <SubmissionRow key={s.id} s={s} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
