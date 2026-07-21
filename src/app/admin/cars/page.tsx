'use client';

import { useEffect, useState, useCallback } from 'react';

interface Price {
  id: string;
  amount: number;
  source: string;
  sourceDate: string;
  isActive: boolean;
}

interface Variant {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  year: number;
  engine: string | null;
  prices: Price[];
}

interface Model {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  variants: Variant[];
}

interface Make {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  models: Model[];
}

export default function AdminCarsPage() {
  const [makes, setMakes] = useState<Make[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedMake, setExpandedMake] = useState<string | null>(null);
  const [expandedModel, setExpandedModel] = useState<string | null>(null);
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  // Form states
  const [showMakeForm, setShowMakeForm] = useState(false);
  const [showModelForm, setShowModelForm] = useState(false);
  const [showVariantForm, setShowVariantForm] = useState(false);
  const [showPriceForm, setShowPriceForm] = useState(false);

  const [makeForm, setMakeForm] = useState({ nameEn: '', nameAr: '', slug: '' });
  const [modelForm, setModelForm] = useState({ nameEn: '', nameAr: '', slug: '', makeId: '', yearStart: '', yearEnd: '' });
  const [variantForm, setVariantForm] = useState({ nameEn: '', nameAr: '', slug: '', modelId: '', year: '', engine: '' });
  const [priceForm, setPriceForm] = useState({ variantId: '', amount: '', source: 'admin', sourceDate: '' });

  const [saving, setSaving] = useState(false);

  const fetchMakes = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/makes');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setMakes(data.makes);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMakes();
  }, [fetchMakes]);

  async function handleAddMake(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch('/api/admin/makes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'make', ...makeForm }),
      });
      setMakeForm({ nameEn: '', nameAr: '', slug: '' });
      setShowMakeForm(false);
      fetchMakes();
    } catch (err) { console.error(err); }
    finally { setSaving(false); }
  }

  async function handleAddModel(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch('/api/admin/models', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'model',
          ...modelForm,
          yearStart: modelForm.yearStart ? parseInt(modelForm.yearStart) : null,
          yearEnd: modelForm.yearEnd ? parseInt(modelForm.yearEnd) : null,
        }),
      });
      setModelForm({ nameEn: '', nameAr: '', slug: '', makeId: '', yearStart: '', yearEnd: '' });
      setShowModelForm(false);
      fetchMakes();
    } catch (err) { console.error(err); }
    finally { setSaving(false); }
  }

  async function handleAddVariant(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch('/api/admin/variants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'variant',
          ...variantForm,
          year: parseInt(variantForm.year),
        }),
      });
      setVariantForm({ nameEn: '', nameAr: '', slug: '', modelId: '', year: '', engine: '' });
      setShowVariantForm(false);
      fetchMakes();
    } catch (err) { console.error(err); }
    finally { setSaving(false); }
  }

  async function handleAddPrice(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch('/api/admin/prices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'price',
          variantId: priceForm.variantId,
          amount: parseFloat(priceForm.amount),
          source: priceForm.source,
          sourceDate: priceForm.sourceDate || undefined,
        }),
      });
      setPriceForm({ variantId: '', amount: '', source: 'admin', sourceDate: '' });
      setShowPriceForm(false);
      fetchMakes();
    } catch (err) { console.error(err); }
    finally { setSaving(false); }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">السيارات</h1>
          <p className="text-sm text-gray-500">Cars Management</p>
        </div>
        <button
          onClick={() => setShowMakeForm(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          + إضافة ماركة / Add Make
        </button>
      </div>

      {/* Add Make Form */}
      {showMakeForm && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <h2 className="text-sm font-bold text-gray-900 mb-3">إضافة ماركة جديدة / Add New Make</h2>
          <form onSubmit={handleAddMake} className="flex flex-wrap gap-3 items-end">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Name (EN)</label>
              <input type="text" value={makeForm.nameEn} onChange={(e) => setMakeForm({ ...makeForm, nameEn: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })} className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">الاسم (AR)</label>
              <input type="text" value={makeForm.nameAr} onChange={(e) => setMakeForm({ ...makeForm, nameAr: e.target.value })} className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Slug</label>
              <input type="text" value={makeForm.slug} onChange={(e) => setMakeForm({ ...makeForm, slug: e.target.value })} className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
            </div>
            <div className="flex gap-2">
              <button type="submit" disabled={saving} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-sm font-medium rounded-lg transition-colors">
                {saving ? '...' : 'إضافة / Add'}
              </button>
              <button type="button" onClick={() => setShowMakeForm(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors">
                إلغاء
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Makes List */}
      {makes.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500">لا توجد ماركات</p>
          <p className="text-sm text-gray-400 mt-1">No makes yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {makes.map((make) => (
            <div key={make.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Make Header */}
              <button
                onClick={() => setExpandedMake(expandedMake === make.id ? null : make.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-right"
              >
                <div className="flex items-center gap-3">
                  <span className={`transform transition-transform ${expandedMake === make.id ? 'rotate-90' : ''}`}>
                    ◀
                  </span>
                  <div>
                    <span className="font-bold text-gray-900">{make.nameAr}</span>
                    <span className="text-gray-400 mx-2">/</span>
                    <span className="text-gray-600">{make.nameEn}</span>
                    <span className="text-xs text-gray-400 mr-3">({make.models.length} موديل)</span>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setModelForm({ ...modelForm, makeId: make.id }); setShowModelForm(true); }}
                  className="px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-xs font-medium rounded-lg transition-colors"
                >
                  + إضافة موديل / Add Model
                </button>
              </button>

              {/* Models */}
              {expandedMake === make.id && (
                <div className="border-t border-gray-100 bg-gray-50">
                  {make.models.length === 0 ? (
                    <p className="p-4 text-sm text-gray-400 text-center">لا توجد موديلات / No models</p>
                  ) : (
                    make.models.map((model) => (
                      <div key={model.id}>
                        {/* Model Header */}
                        <button
                          onClick={() => setExpandedModel(expandedModel === model.id ? null : model.id)}
                          className="w-full flex items-center justify-between p-3 pr-8 hover:bg-gray-100 transition-colors text-right border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center gap-2">
                            <span className={`transform transition-transform text-xs ${expandedModel === model.id ? 'rotate-90' : ''}`}>
                              ◀
                            </span>
                            <span className="font-medium text-gray-800">{model.nameAr}</span>
                            <span className="text-gray-400 mx-1">/</span>
                            <span className="text-gray-500 text-sm">{model.nameEn}</span>
                            <span className="text-xs text-gray-400 mr-2">({model.variants.length} فئة)</span>
                          </div>
                          <button
                            onClick={(e) => { e.stopPropagation(); setVariantForm({ ...variantForm, modelId: model.id }); setShowVariantForm(true); }}
                            className="px-2 py-0.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-xs font-medium rounded-lg transition-colors"
                          >
                            + إضافة فئة / Add Variant
                          </button>
                        </button>

                        {/* Variants */}
                        {expandedModel === model.id && (
                          <div className="bg-white border-t border-gray-100">
                            {model.variants.length === 0 ? (
                              <p className="p-3 pr-12 text-sm text-gray-400">لا توجد فئات / No variants</p>
                            ) : (
                              model.variants.map((variant) => (
                                <div key={variant.id}>
                                  {/* Variant Header */}
                                  <button
                                    onClick={() => setExpandedVariant(expandedVariant === variant.id ? null : variant.id)}
                                    className="w-full flex items-center justify-between p-3 pr-12 hover:bg-gray-50 transition-colors text-right border-b border-gray-100"
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className={`transform transition-transform text-xs ${expandedVariant === variant.id ? 'rotate-90' : ''}`}>
                                        ◀
                                      </span>
                                      <span className="text-gray-800">{variant.nameAr}</span>
                                      <span className="text-gray-400 mx-1">/</span>
                                      <span className="text-gray-500 text-sm">{variant.nameEn}</span>
                                      <span className="text-xs text-gray-400">({variant.year})</span>
                                      {variant.engine && <span className="text-xs text-gray-400">- {variant.engine}</span>}
                                    </div>
                                    <button
                                      onClick={(e) => { e.stopPropagation(); setPriceForm({ ...priceForm, variantId: variant.id, sourceDate: new Date().toISOString().split('T')[0] }); setShowPriceForm(true); }}
                                      className="px-2 py-0.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-xs font-medium rounded-lg transition-colors"
                                    >
                                      + إضافة سعر / Add Price
                                    </button>
                                  </button>

                                  {/* Prices */}
                                  {expandedVariant === variant.id && (
                                    <div className="border-t border-gray-100 bg-gray-50 p-3 pr-16">
                                      {variant.prices.length === 0 ? (
                                        <p className="text-sm text-gray-400">لا توجد أسعار / No prices</p>
                                      ) : (
                                        <div className="space-y-1">
                                          {variant.prices.map((price) => (
                                            <div key={price.id} className="flex items-center gap-3 text-sm">
                                              <span className="font-medium text-gray-900">{price.amount.toLocaleString()} ج.م</span>
                                              <span className="text-xs text-gray-400">({price.source})</span>
                                              <span className="text-xs text-gray-400">
                                                {new Date(price.sourceDate).toLocaleDateString('ar-EG')}
                                              </span>
                                              {price.isActive ? (
                                                <span className="text-xs text-green-600">نشط</span>
                                              ) : (
                                                <span className="text-xs text-red-500">غير نشط</span>
                                              )}
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))
                            )}
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Add Model Modal */}
      {showModelForm && (
        <FormModal title="إضافة موديل جديد / Add New Model" onClose={() => setShowModelForm(false)} onSubmit={handleAddModel} saving={saving}>
          <input type="hidden" value={modelForm.makeId} />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Name (EN)</label>
              <input type="text" value={modelForm.nameEn} onChange={(e) => setModelForm({ ...modelForm, nameEn: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" required />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">الاسم (AR)</label>
              <input type="text" value={modelForm.nameAr} onChange={(e) => setModelForm({ ...modelForm, nameAr: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" required />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Slug</label>
            <input type="text" value={modelForm.slug} onChange={(e) => setModelForm({ ...modelForm, slug: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" required />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Year Start</label>
              <input type="number" value={modelForm.yearStart} onChange={(e) => setModelForm({ ...modelForm, yearStart: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Year End</label>
              <input type="number" value={modelForm.yearEnd} onChange={(e) => setModelForm({ ...modelForm, yearEnd: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
            </div>
          </div>
        </FormModal>
      )}

      {/* Add Variant Modal */}
      {showVariantForm && (
        <FormModal title="إضافة فئة جديدة / Add New Variant" onClose={() => setShowVariantForm(false)} onSubmit={handleAddVariant} saving={saving}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Name (EN)</label>
              <input type="text" value={variantForm.nameEn} onChange={(e) => setVariantForm({ ...variantForm, nameEn: e.target.value, slug: e.target.value.toLowerCase().replace(/[\s.]+/g, '-') })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" required />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">الاسم (AR)</label>
              <input type="text" value={variantForm.nameAr} onChange={(e) => setVariantForm({ ...variantForm, nameAr: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" required />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Slug</label>
            <input type="text" value={variantForm.slug} onChange={(e) => setVariantForm({ ...variantForm, slug: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" required />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Year</label>
              <input type="number" value={variantForm.year} onChange={(e) => setVariantForm({ ...variantForm, year: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" required />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Engine</label>
              <input type="text" value={variantForm.engine} onChange={(e) => setVariantForm({ ...variantForm, engine: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
            </div>
          </div>
        </FormModal>
      )}

      {/* Add Price Modal */}
      {showPriceForm && (
        <FormModal title="إضافة سعر جديد / Add New Price" onClose={() => setShowPriceForm(false)} onSubmit={handleAddPrice} saving={saving}>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Amount (EGP)</label>
            <input type="number" value={priceForm.amount} onChange={(e) => setPriceForm({ ...priceForm, amount: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" required />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Source</label>
            <input type="text" value={priceForm.source} onChange={(e) => setPriceForm({ ...priceForm, source: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Source Date</label>
            <input type="date" value={priceForm.sourceDate} onChange={(e) => setPriceForm({ ...priceForm, sourceDate: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </FormModal>
      )}
    </div>
  );
}

function FormModal({
  title,
  children,
  onClose,
  onSubmit,
  saving,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  saving: boolean;
}) {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
        <form onSubmit={onSubmit} className="space-y-3">
          {children}
          <div className="flex gap-2 pt-2">
            <button type="submit" disabled={saving} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-sm font-medium rounded-lg transition-colors">
              {saving ? '...' : 'حفظ / Save'}
            </button>
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors">
              إلغاء / Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
