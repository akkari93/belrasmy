'use client';

import { useEffect, useState, useCallback } from 'react';

interface Dealer {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  city: string | null;
  governorate: string | null;
  phone: string | null;
  website: string | null;
  brands: string | null;
  isActive: boolean;
  _count: { submissions: number };
}

const emptyForm = {
  nameEn: '',
  nameAr: '',
  slug: '',
  city: '',
  governorate: '',
  phone: '',
  website: '',
  brands: '',
};

export default function AdminDealersPage() {
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const fetchDealers = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/dealers');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setDealers(data.dealers);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDealers();
  }, [fetchDealers]);

  function resetForm() {
    setForm(emptyForm);
    setEditId(null);
    setShowForm(false);
  }

  function openEdit(dealer: Dealer) {
    setForm({
      nameEn: dealer.nameEn,
      nameAr: dealer.nameAr,
      slug: dealer.slug,
      city: dealer.city || '',
      governorate: dealer.governorate || '',
      phone: dealer.phone || '',
      website: dealer.website || '',
      brands: dealer.brands || '',
    });
    setEditId(dealer.id);
    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      if (editId) {
        await fetch('/api/admin/dealers', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editId, ...form }),
        });
      } else {
        await fetch('/api/admin/dealers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      }
      resetForm();
      fetchDealers();
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  }

  async function toggleActive(dealer: Dealer) {
    try {
      await fetch('/api/admin/dealers', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: dealer.id, isActive: !dealer.isActive }),
      });
      fetchDealers();
    } catch (err) {
      console.error(err);
    }
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
          <h1 className="text-2xl font-bold text-gray-900">الوكلاء</h1>
          <p className="text-sm text-gray-500">Dealers</p>
        </div>
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          + إضافة وكيل جديد / Add New Dealer
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center" onClick={resetForm}>
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 w-full max-w-lg mx-4" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {editId ? 'تعديل الوكيل / Edit Dealer' : 'إضافة وكيل جديد / Add New Dealer'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Name (EN)</label>
                  <input type="text" value={form.nameEn} onChange={(e) => setForm({ ...form, nameEn: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">الاسم (AR)</label>
                  <input type="text" value={form.nameAr} onChange={(e) => setForm({ ...form, nameAr: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Slug</label>
                <input type="text" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">City</label>
                  <input type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Governorate</label>
                  <input type="text" value={form.governorate} onChange={(e) => setForm({ ...form, governorate: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Phone</label>
                  <input type="text" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Website</label>
                  <input type="text" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Brands (comma separated)</label>
                <input type="text" value={form.brands} onChange={(e) => setForm({ ...form, brands: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="flex gap-2 pt-2">
                <button type="submit" disabled={saving} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-sm font-medium rounded-lg transition-colors">
                  {saving ? 'جاري الحفظ...' : editId ? 'تحديث / Update' : 'إضافة / Add'}
                </button>
                <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors">
                  إلغاء / Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Dealers Table */}
      {dealers.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500">لا يوجد وكلاء</p>
          <p className="text-sm text-gray-400 mt-1">No dealers yet</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-right p-3 font-medium text-gray-600">الاسم / Name</th>
                  <th className="text-right p-3 font-medium text-gray-600">المدينة / City</th>
                  <th className="text-right p-3 font-medium text-gray-600">المحافظة</th>
                  <th className="text-right p-3 font-medium text-gray-600">العلامات / Brands</th>
                  <th className="text-center p-3 font-medium text-gray-600">نشط / Active</th>
                  <th className="text-center p-3 font-medium text-gray-600">التقارير</th>
                  <th className="text-center p-3 font-medium text-gray-600">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dealers.map((dealer) => (
                  <tr key={dealer.id} className="hover:bg-gray-50">
                    <td className="p-3">
                      <p className="font-medium text-gray-900">{dealer.nameEn}</p>
                      <p className="text-xs text-gray-500">{dealer.nameAr}</p>
                    </td>
                    <td className="p-3 text-gray-600">{dealer.city || '-'}</td>
                    <td className="p-3 text-gray-600">{dealer.governorate || '-'}</td>
                    <td className="p-3 text-gray-600">{dealer.brands || '-'}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => toggleActive(dealer)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          dealer.isActive
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        }`}
                      >
                        {dealer.isActive ? 'نعم / Yes' : 'لا / No'}
                      </button>
                    </td>
                    <td className="p-3 text-center text-gray-600">{dealer._count.submissions}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => openEdit(dealer)}
                        className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs font-medium rounded-lg transition-colors"
                      >
                        تعديل / Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
