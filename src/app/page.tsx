'use client';

import { useEffect, useState, useCallback } from 'react';
import { useLocale } from '@/lib/locale-context';
import { getSubmissions, getMakes, reportSubmission } from '@/lib/api';
import { getDeviceFingerprint } from '@/lib/fingerprint';
import Link from 'next/link';
import type { Submission, Make } from '@/lib/api';

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

const REPORT_REASONS: [string, string, string][] = [
  ['wrong_price', 'سعر خاطئ', 'Wrong price'],
  ['no_stock', 'لا يوجد مخزون', 'No stock available'],
  ['overprice_charged', 'تمت المغالاة في السعر', 'Overprice charged'],
  ['fake', 'تقرير مزيف', 'Fake report'],
  ['other', 'أخرى', 'Other'],
];

function formatDate(dateStr: string, locale: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function formatPrice(price: number): string {
  return price.toLocaleString('en-US') + ' EGP';
}

function SubmissionCard({
  submission,
  onReport,
  locale,
  t,
}: {
  submission: Submission;
  onReport: (id: string) => void;
  locale: string;
  t: (ar: string, en: string) => string;
}) {
  const s = submission;
  const timingColor = s.deliveryTiming
    ? DELIVERY_TIMING_COLORS[s.deliveryTiming] || 'bg-gray-100 text-gray-800'
    : 'bg-gray-100 text-gray-800';
  const timingLabel = s.deliveryTiming && DELIVERY_TIMING_LABELS[s.deliveryTiming]
    ? (locale === 'ar' ? DELIVERY_TIMING_LABELS[s.deliveryTiming][0] : DELIVERY_TIMING_LABELS[s.deliveryTiming][1])
    : s.deliveryTiming || '';

  return (
    <div className="bg-white rounded-xl border border-border-light shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-3">
      {/* Make + Model + Variant */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-semibold text-dark text-base leading-tight truncate">
            {locale === 'ar'
              ? `${s.variant.model.make.nameAr} ${s.variant.model.nameAr} - ${s.variant.nameAr}`
              : `${s.variant.model.make.nameEn} ${s.variant.model.nameEn} - ${s.variant.nameEn}`
            }
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary-light text-primary">
              {s.variant.year}
            </span>
            {s.variant.engine && (
              <span className="text-xs text-gray-text">{s.variant.engine}</span>
            )}
          </div>
        </div>
      </div>

      {/* Dealer */}
      <div className="text-sm text-gray-text">
        <span className="font-medium text-dark">
          {locale === 'ar' ? s.dealer.nameAr : s.dealer.nameEn}
        </span>
        {s.dealer.city && (
          <span> — {locale === 'ar' ? s.dealer.city : s.dealer.city}</span>
        )}
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-dark">{formatPrice(s.purchasePrice)}</span>
        {s.officialPrice && (
          <span className="text-sm line-through text-gray-text">
            {formatPrice(s.officialPrice)}
          </span>
        )}
      </div>

      {/* Purchase date + Delivery */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-text">
        <span>
          {t('تاريخ الشراء:', 'Purchased:')} {formatDate(s.purchaseDate, locale)}
        </span>
        {s.deliveryTiming && (
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${timingColor}`}>
            {timingLabel}
          </span>
        )}
      </div>

      {/* Report link */}
      <button
        onClick={() => onReport(s.id)}
        className="text-xs text-gray-text hover:text-red-600 transition-colors self-start mt-auto pt-2 cursor-pointer"
      >
        {t('الإبلاغ عن هذا التقرير', 'Report this submission')}
      </button>
    </div>
  );
}

function ReportModal({
  submissionId,
  onClose,
}: {
  submissionId: string;
  onClose: () => void;
}) {
  const { t, locale } = useLocale();
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason) return;
    setSubmitting(true);
    setError('');
    try {
      await reportSubmission(submissionId, {
        reason,
        description: description || undefined,
        deviceFingerprint: getDeviceFingerprint(),
      });
      setSuccess(true);
      setTimeout(onClose, 1500);
    } catch (err: any) {
      setError(err.message || 'Failed to submit report');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        {success ? (
          <div className="text-center py-4">
            <span className="text-3xl">✓</span>
            <p className="mt-2 font-medium text-green-700">
              {t('تم الإبلاغ بنجاح، شكراً لك', 'Report submitted, thank you')}
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-dark mb-4">
              {t('الإبلاغ عن تقرير', 'Report a Submission')}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('السبب', 'Reason')} *
                </label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                >
                  <option value="">{t('اختر سبباً...', 'Select a reason...')}</option>
                  {REPORT_REASONS.map(([val, ar, en]) => (
                    <option key={val} value={val}>
                      {locale === 'ar' ? ar : en}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('وصف (اختياري)', 'Description (optional)')}
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder={t('أضف تفاصيل إضافية...', 'Add additional details...')}
                />
              </div>
              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium rounded-lg border border-border-light hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {t('إلغاء', 'Cancel')}
                </button>
                <button
                  type="submit"
                  disabled={!reason || submitting}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? t('جاري الإرسال...', 'Sending...') : t('إرسال', 'Submit')}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function HomePage() {
  const { t, locale } = useLocale();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [makes, setMakes] = useState<Make[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [reportId, setReportId] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const filters: { make?: string; model?: string } = {};
      if (selectedModel) filters.model = selectedModel;
      else if (selectedMake) filters.make = selectedMake;
      const data = await getSubmissions(filters);
      setSubmissions(data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load submissions');
    } finally {
      setLoading(false);
    }
  }, [selectedMake, selectedModel]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  useEffect(() => {
    getMakes().then(setMakes).catch(() => {});
  }, []);

  const selectedMakeData = makes.find((m) => m.slug === selectedMake);

  // Search filter
  const filteredSubmissions = submissions.filter((s) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const nameEn = `${s.variant.model.make.nameEn} ${s.variant.model.nameEn} ${s.variant.nameEn}`.toLowerCase();
    const nameAr = `${s.variant.model.make.nameAr} ${s.variant.model.nameAr} ${s.variant.nameAr}`.toLowerCase();
    const dealerEn = s.dealer.nameEn.toLowerCase();
    const dealerAr = s.dealer.nameAr.toLowerCase();
    return nameEn.includes(q) || nameAr.includes(q) || dealerEn.includes(q) || dealerAr.includes(q);
  });

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-light to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-dark leading-tight">
            {t('هل تبحث عن سعر سيارة؟', 'Looking for a car price?')}
          </h1>
          <p className="mt-3 text-gray-text text-lg">
            {t(
              'ابحث عن تقارير حقيقية لأسعار السيارات من مشترين حقيقيين',
              'Search real car price reports from actual buyers'
            )}
          </p>

          {/* Search */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('ابحث عن ماركة أو موديل...', 'Search by make or model...')}
              className="w-full px-5 py-3.5 rounded-xl border border-border-light shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
            />
          </div>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="max-w-6xl mx-auto px-4 mt-6">
        <div className="flex items-center gap-2 overflow-x-auto custom-scroll pb-2">
          <button
            onClick={() => { setSelectedMake(''); setSelectedModel(''); }}
            className={`shrink-0 px-4 py-2 text-sm font-medium rounded-full border transition-colors cursor-pointer ${
              !selectedMake
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-text border-border-light hover:border-primary'
            }`}
          >
            {t('الكل', 'All')}
          </button>
          {makes.map((make) => (
            <button
              key={make.id}
              onClick={() => {
                setSelectedMake(make.slug === selectedMake ? '' : make.slug);
                setSelectedModel('');
              }}
              className={`shrink-0 px-4 py-2 text-sm font-medium rounded-full border transition-colors cursor-pointer ${
                selectedMake === make.slug
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-text border-border-light hover:border-primary'
              }`}
            >
              {locale === 'ar' ? make.nameAr : make.nameEn}
            </button>
          ))}
        </div>

        {/* Model sub-filters */}
        {selectedMakeData && selectedMakeData.models && selectedMakeData.models.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto custom-scroll pb-2 mt-2">
            <button
              onClick={() => setSelectedModel('')}
              className={`shrink-0 px-3 py-1.5 text-xs font-medium rounded-full border transition-colors cursor-pointer ${
                !selectedModel
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'bg-white text-gray-text border-border-light hover:border-gray-800'
              }`}
            >
              {t('كل الموديلات', 'All Models')}
            </button>
            {selectedMakeData.models.map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model.slug === selectedModel ? '' : model.slug)}
                className={`shrink-0 px-3 py-1.5 text-xs font-medium rounded-full border transition-colors cursor-pointer ${
                  selectedModel === model.slug
                    ? 'bg-gray-800 text-white border-gray-800'
                    : 'bg-white text-gray-text border-border-light hover:border-gray-800'
                }`}
              >
                {locale === 'ar' ? model.nameAr : model.nameEn}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Results Section */}
      <section className="max-w-6xl mx-auto px-4 mt-8 pb-16">
        <h2 className="text-xl font-bold text-dark mb-6">
          {t('آخر التقارير المؤكدة', 'Latest Verified Reports')}
        </h2>

        {loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="spinner" />
            <p className="mt-4 text-gray-text text-sm">
              {t('جاري التحميل...', 'Loading...')}
            </p>
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-16">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={fetchSubmissions}
              className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors cursor-pointer"
            >
              {t('إعادة المحاولة', 'Retry')}
            </button>
          </div>
        )}

        {!loading && !error && filteredSubmissions.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <span className="text-5xl">🚗</span>
            <h3 className="mt-4 text-xl font-semibold text-dark">
              {t('لا توجد تقارير بعد', 'No reports yet')}
            </h3>
            <p className="mt-2 text-gray-text">
              {t(
                'كن أول من يضيف تقريراً عن سعر سيارة!',
                'Be the first to add a car price report!'
              )}
            </p>
            <Link
              href="/submit"
              className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors no-underline"
            >
              {t('إضافة تقرير', 'Add Report')}
            </Link>
          </div>
        )}

        {!loading && !error && filteredSubmissions.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSubmissions.map((submission) => (
              <SubmissionCard
                key={submission.id}
                submission={submission}
                onReport={setReportId}
                locale={locale}
                t={t}
              />
            ))}
          </div>
        )}
      </section>

      {/* Report Modal */}
      {reportId && (
        <ReportModal
          submissionId={reportId}
          onClose={() => setReportId(null)}
        />
      )}
    </div>
  );
}
