'use client';

import { Suspense } from 'react';
import { useLocale } from '@/lib/locale-context';
import Link from 'next/link';

function SuccessContent() {
  const { t } = useLocale();

  return (
    <div className="max-w-lg mx-auto px-4 py-16 text-center">
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-dark mb-3">
        {t('تم الإرسال بنجاح', 'Submission Successful')}
      </h1>

      <p className="text-gray-text text-lg mb-8">
        {t('شكراً لمشاركتك! تقريرك سيساعد الآخرين', 'Thank you for sharing! Your report will help others')}
      </p>

      <Link
        href="/"
        className="inline-block px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors no-underline"
      >
        {t('العودة للرئيسية', 'Back to Homepage')}
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="flex justify-center py-16"><div className="spinner" /></div>}>
      <SuccessContent />
    </Suspense>
  );
}
