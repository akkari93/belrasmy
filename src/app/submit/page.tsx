'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from '@/lib/locale-context';
import { getMakes, getDealers, createSubmission } from '@/lib/api';
import { getDeviceFingerprint } from '@/lib/fingerprint';
import type { Make, Dealer, Model, Variant } from '@/lib/api';

const DELIVERY_TIMING_OPTIONS: [string, string, string][] = [
  ['immediate', 'فوري', 'Immediate'],
  ['1-2 weeks', '1-2 أسبوع', '1-2 Weeks'],
  ['1 month', 'شهر', '1 Month'],
  ['2-3 months', '2-3 أشهر', '2-3 Months'],
  ['3+ months', '3+ أشهر', '3+ Months'],
];

const TOTAL_STEPS = 3;

export default function SubmitPage() {
  const { t, locale } = useLocale();
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [makes, setMakes] = useState<Make[]>([]);
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  // Step 1: Car + Dealer
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedDealer, setSelectedDealer] = useState('');

  // Step 2: Purchase details
  const [purchasePrice, setPurchasePrice] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [deliveryTiming, setDeliveryTiming] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  // Step 3: Confirmation
  const [hasPurchased, setHasPurchased] = useState(false);
  const [phone, setPhone] = useState('');
  const [purchaserName, setPurchaserName] = useState('');
  const [evidenceUrl, setEvidenceUrl] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([getMakes(), getDealers()])
      .then(([makesData, dealersData]) => {
        setMakes(makesData);
        setDealers(dealersData);
      })
      .catch(() => setError('Failed to load data'))
      .finally(() => setLoadingData(false));
  }, []);

  const selectedMakeData = makes.find((m) => m.id === selectedMake);
  const selectedModelData = selectedMakeData?.models?.find((m) => m.id === selectedModel);
  const selectedVariantData = selectedModelData?.variants?.find((v) => v.id === selectedVariant);

  const today = new Date().toISOString().split('T')[0];

  const validateStep1 = () => {
    if (!selectedMake) return t('الرجاء اختيار الماركة', 'Please select a make');
    if (!selectedModel) return t('الرجاء اختيار الموديل', 'Please select a model');
    if (!selectedVariant) return t('الرجاء اختيار الفئة', 'Please select a variant');
    if (!selectedDealer) return t('الرجاء اختيار التاجر', 'Please select a dealer');
    return '';
  };

  const validateStep2 = () => {
    if (!purchasePrice || isNaN(Number(purchasePrice)) || Number(purchasePrice) <= 0)
      return t('الرجاء إدخال سعر صحيح', 'Please enter a valid price');
    if (!purchaseDate) return t('الرجاء إدخال تاريخ الشراء', 'Please enter purchase date');
    return '';
  };

  const validateStep3 = () => {
    if (!hasPurchased) return t('الرجاء تأكيد شراء السيارة', 'Please confirm your purchase');
    return '';
  };

  const handleNext = () => {
    let err = '';
    if (step === 1) err = validateStep1();
    else if (step === 2) err = validateStep2();
    if (err) { setError(err); return; }
    setError('');
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const handleBack = () => {
    setError('');
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async () => {
    const err = validateStep3();
    if (err) { setError(err); return; }
    setSubmitting(true);
    setError('');

    try {
      const result = await createSubmission({
        variantId: selectedVariant,
        dealerId: selectedDealer,
        purchasePrice: Number(purchasePrice),
        purchaseDate,
        deliveryTiming: deliveryTiming || undefined,
        deliveryDate: deliveryDate || undefined,
        phone: phone || undefined,
        purchaserName: purchaserName || undefined,
        evidenceUrl: evidenceUrl || undefined,
        hasPurchased,
        deviceFingerprint: getDeviceFingerprint(),
      });
      router.push('/submit/success?id=' + result.id);
    } catch (err: any) {
      setError(err.message || t('حدث خطأ في الإرسال', 'Submission failed'));
    } finally {
      setSubmitting(false);
    }
  };

  const makeModels = selectedMakeData?.models || [];
  const modelVariants = selectedModelData?.variants || [];

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-dark text-center mb-2">
        {t('إضافة تقرير سعر', 'Add a Price Report')}
      </h1>
      <p className="text-gray-text text-sm text-center mb-8">
        {t('شارك سعر سيارتك الحقيقي لمساعدة الآخرين', 'Share your real car price to help others')}
      </p>

      {/* Progress Indicator */}
      <div className="flex items-center gap-2 mb-8" dir="ltr">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((s) => (
          <div key={s} className="flex-1 flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                s <= step
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-text'
              }`}
            >
              {s}
            </div>
            {s < TOTAL_STEPS && (
              <div
                className={`flex-1 h-1 rounded transition-colors ${
                  s < step ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="flex justify-between text-xs text-gray-text mb-6 px-1">
        <span className={step >= 1 ? 'text-primary font-medium' : ''}>
          {t('السيارة والتاجر', 'Car & Dealer')}
        </span>
        <span className={step >= 2 ? 'text-primary font-medium' : ''}>
          {t('التفاصيل', 'Details')}
        </span>
        <span className={step >= 3 ? 'text-primary font-medium' : ''}>
          {t('التأكيد', 'Confirmation')}
        </span>
      </div>

      {error && (
        <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
          {error}
        </div>
      )}

      {loadingData ? (
        <div className="flex justify-center py-12">
          <div className="spinner" />
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-border-light p-6">
          {/* Step 1: Car + Dealer */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              {/* Make */}
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('الماركة', 'Make')} *
                </label>
                <select
                  value={selectedMake}
                  onChange={(e) => {
                    setSelectedMake(e.target.value);
                    setSelectedModel('');
                    setSelectedVariant('');
                  }}
                  className="w-full px-3 py-2.5 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                >
                  <option value="">{t('اختر الماركة...', 'Select make...')}</option>
                  {makes.map((make) => (
                    <option key={make.id} value={make.id}>
                      {locale === 'ar' ? make.nameAr : make.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Model */}
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('الموديل', 'Model')} *
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => {
                    setSelectedModel(e.target.value);
                    setSelectedVariant('');
                  }}
                  disabled={!selectedMake}
                  className="w-full px-3 py-2.5 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white disabled:bg-gray-50 disabled:text-gray-400"
                >
                  <option value="">{t('اختر الموديل...', 'Select model...')}</option>
                  {makeModels.map((model) => (
                    <option key={model.id} value={model.id}>
                      {locale === 'ar' ? model.nameAr : model.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Variant */}
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('الفئة', 'Variant')} *
                </label>
                <select
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                  disabled={!selectedModel}
                  className="w-full px-3 py-2.5 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white disabled:bg-gray-50 disabled:text-gray-400"
                >
                  <option value="">{t('اختر الفئة...', 'Select variant...')}</option>
                  {modelVariants.map((variant) => (
                    <option key={variant.id} value={variant.id}>
                      {locale === 'ar' ? variant.nameAr : variant.nameEn} ({variant.year})
                      {variant.engine ? ` - ${variant.engine}` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dealer */}
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('التاجر', 'Dealer')} *
                </label>
                <select
                  value={selectedDealer}
                  onChange={(e) => setSelectedDealer(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                >
                  <option value="">{t('اختر التاجر...', 'Select dealer...')}</option>
                  {dealers.map((dealer) => (
                    <option key={dealer.id} value={dealer.id}>
                      {locale === 'ar' ? dealer.nameAr : dealer.nameEn}
                      {dealer.city ? ` - ${dealer.city}` : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors cursor-pointer"
                >
                  {t('التالي', 'Next')}
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Purchase Details */}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              {/* Purchase Price */}
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('سعر الشراء', 'Purchase Price')} *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 start-0 flex items-center ps-3 text-sm text-gray-text">
                    EGP
                  </span>
                  <input
                    type="number"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(e.target.value)}
                    min="1"
                    step="1"
                    className="w-full ps-12 px-3 py-2.5 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="0"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Purchase Date */}
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('تاريخ الشراء', 'Purchase Date')} *
                </label>
                <input
                  type="date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                  min="2025-01-01"
                  max={today}
                  className="w-full px-3 py-2.5 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Delivery Timing */}
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('مدة التسليم', 'Delivery Timing')}
                </label>
                <select
                  value={deliveryTiming}
                  onChange={(e) => setDeliveryTiming(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                >
                  <option value="">{t('اختر...', 'Select...')}</option>
                  {DELIVERY_TIMING_OPTIONS.map(([val, ar, en]) => (
                    <option key={val} value={val}>
                      {locale === 'ar' ? ar : en}
                    </option>
                  ))}
                </select>
              </div>

              {/* Delivery Date (optional) */}
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('تاريخ التسليم (اختياري)', 'Delivery Date (optional)')}
                </label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  min="2025-01-01"
                  className="w-full px-3 py-2.5 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={handleBack}
                  className="px-6 py-2.5 rounded-lg text-sm font-medium border border-border-light hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {t('السابق', 'Back')}
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors cursor-pointer"
                >
                  {t('التالي', 'Next')}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              {/* Summary */}
              {selectedMakeData && selectedModelData && selectedVariantData && (
                <div className="bg-gray-50 rounded-lg p-4 text-sm">
                  <h3 className="font-semibold text-dark mb-2">
                    {t('ملخص التقرير', 'Report Summary')}
                  </h3>
                  <div className="space-y-1 text-gray-text">
                    <p>
                      <span className="text-dark font-medium">
                        {t('السيارة:', 'Car:')}
                      </span>{' '}
                      {locale === 'ar'
                        ? `${selectedMakeData.nameAr} ${selectedModelData.nameAr} - ${selectedVariantData.nameAr} (${selectedVariantData.year})`
                        : `${selectedMakeData.nameEn} ${selectedModelData.nameEn} - ${selectedVariantData.nameEn} (${selectedVariantData.year})`
                      }
                    </p>
                    <p>
                      <span className="text-dark font-medium">
                        {t('السعر:', 'Price:')}
                      </span>{' '}
                      {Number(purchasePrice).toLocaleString('en-US')} EGP
                    </p>
                    <p>
                      <span className="text-dark font-medium">
                        {t('تاريخ الشراء:', 'Purchase Date:')}
                      </span>{' '}
                      {purchaseDate}
                    </p>
                  </div>
                </div>
              )}

              {/* Confirm purchase */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPurchased}
                  onChange={(e) => setHasPurchased(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border-light text-primary focus:ring-primary"
                />
                <span className="text-sm text-dark">
                  {t(
                    'أؤكد أنني اشتريت هذه السيارة بهذا السعر',
                    'I confirm I purchased this car at this price'
                  )}
                  {' *'}
                </span>
              </label>

              {/* Phone (optional) */}
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('رقم الهاتف (اختياري)', 'Phone (optional)')}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+20..."
                  dir="ltr"
                />
                <p className="text-xs text-gray-text mt-1">
                  {t('للتأكد من صحة التقرير إذا لزم الأمر', 'For verification if needed')}
                </p>
              </div>

              {/* Name (optional) */}
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('الاسم (اختياري)', 'Name (optional)')}
                </label>
                <input
                  type="text"
                  value={purchaserName}
                  onChange={(e) => setPurchaserName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t('الاسم الأول فقط', 'First name only')}
                />
              </div>

              {/* Evidence URL (optional) */}
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  {t('رابط الإثبات (اختياري)', 'Evidence URL (optional)')}
                </label>
                <input
                  type="url"
                  value={evidenceUrl}
                  onChange={(e) => setEvidenceUrl(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="https://..."
                  dir="ltr"
                />
                <p className="text-xs text-gray-text mt-1">
                  {t('رابط لصورة الفاتورة أو الإعلان', 'Link to invoice image or ad')}
                </p>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={handleBack}
                  className="px-6 py-2.5 rounded-lg text-sm font-medium border border-border-light hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {t('السابق', 'Back')}
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {submitting
                    ? t('جاري الإرسال...', 'Submitting...')
                    : t('إرسال التقرير', 'Submit Report')}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
