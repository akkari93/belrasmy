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

export default function CarModelPage({
  params,
}: {
  params: Promise<{ makeSlug: string; modelSlug: string }>;
}) {
  const resolved = use(params);
  const { t, locale } = useLocale();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    getSubmissions({ make: resolved.makeSlug, model: resolved.modelSlug })
      .then((data) => setSubmissions(data || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [resolved.makeSlug, resolved.modelSlug]);

  const firstSubmission = submissions[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Car Info */}
      {firstSubmission && (
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-dark">
            {locale === 'ar'
              ? `${firstSubmission.variant.model.make.nameAr} ${firstSubmission.variant.model.nameAr}`
              : `${firstSubmission.variant.model.make.nameEn} ${firstSubmission.variant.model.nameEn}`
            }
          </h1>
          <p className="text-gray-text mt-1">
            {submissions.length} {t('تقرير', 'report(s)')}
          </p>
        </div>
      )}

      {!loading && !error && submissions.length === 0 && (
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold text-dark mb-2">
            {resolved.makeSlug} {resolved.modelSlug}
          </h1>
          <p className="text-gray-text mb-6">
            {t('لا توجد تقارير لهذه السيارة بعد', 'No reports for this car yet')}
          </p>
          <Link
            href="/submit"
            className="inline-block px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors no-underline"
          >
            {t('أضف تقريراً', 'Add a Report')}
          </Link>
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
          {submissions.map((s) => {
            const timingColor = s.deliveryTiming
              ? DELIVERY_TIMING_COLORS[s.deliveryTiming] || 'bg-gray-100 text-gray-800'
              : 'bg-gray-100 text-gray-800';
            const timingLabel = s.deliveryTiming && DELIVERY_TIMING_LABELS[s.deliveryTiming]
              ? (locale === 'ar' ? DELIVERY_TIMING_LABELS[s.deliveryTiming][0] : DELIVERY_TIMING_LABELS[s.deliveryTiming][1])
              : s.deliveryTiming || '';

            return (
              <div key={s.id} className="bg-white rounded-xl border border-border-light shadow-sm p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary-light text-primary">
                      {s.variant.year}
                    </span>
                    {s.variant.engine && (
                      <span className="text-xs text-gray-text">{s.variant.engine}</span>
                    )}
                  </div>
                  <Link
                    href={`/dealer/${s.dealer.slug}`}
                    className="font-semibold text-dark hover:text-primary transition-colors no-underline mt-1 block"
                  >
                    {locale === 'ar' ? s.dealer.nameAr : s.dealer.nameEn}
                    {s.dealer.city && <span className="text-gray-text font-normal"> — {s.dealer.city}</span>}
                  </Link>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-xl font-bold text-dark">{formatPrice(s.purchasePrice)}</span>
                    {s.officialPrice && (
                      <span className="text-sm line-through text-gray-text">{formatPrice(s.officialPrice)}</span>
                    )}
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
          })}
        </div>
      )}
    </div>
  );
}
