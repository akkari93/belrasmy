'use client';

import { useEffect, useState, useCallback } from 'react';

interface Submission {
  id: string;
  status: string;
  reportCount: number;
  purchasePrice: number;
  officialPrice: number | null;
  purchaseDate: string;
  dealer: { id: string; nameEn: string; nameAr: string };
  variant: {
    id: string;
    nameEn: string;
    nameAr: string;
    year: number;
    model: {
      id: string;
      nameEn: string;
      nameAr: string;
      make: { id: string; nameEn: string; nameAr: string };
    };
  };
  _count: { reports: number };
}

const statuses = ['ALL', 'PENDING', 'PUBLISHED', 'HIDDEN', 'REMOVED'];

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(page) });
      if (statusFilter !== 'ALL') params.set('status', statusFilter);
      const res = await fetch(`/api/admin/submissions?${params}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setSubmissions(data.submissions);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, statusFilter]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  async function changeStatus(submissionId: string, status: string) {
    try {
      const res = await fetch(`/api/admin/submissions/${submissionId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ submissionId, status }),
      });
      if (res.ok) fetchSubmissions();
    } catch (err) {
      console.error(err);
    }
  }

  function getStatusBadge(status: string) {
    const styles: Record<string, string> = {
      PENDING: 'bg-yellow-100 text-yellow-800',
      PUBLISHED: 'bg-green-100 text-green-800',
      HIDDEN: 'bg-gray-100 text-gray-800',
      REMOVED: 'bg-red-100 text-red-800',
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">التقارير</h1>
        <p className="text-sm text-gray-500">Submissions</p>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-gray-700">تصفية حسب الحالة / Filter by Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {statuses.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full" />
        </div>
      ) : submissions.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500">لا توجد تقارير</p>
          <p className="text-sm text-gray-400 mt-1">No submissions found</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-right p-3 font-medium text-gray-600">ID</th>
                  <th className="text-right p-3 font-medium text-gray-600">السيارة / Car</th>
                  <th className="text-right p-3 font-medium text-gray-600">الوكيل / Dealer</th>
                  <th className="text-right p-3 font-medium text-gray-600">السعر / Price</th>
                  <th className="text-right p-3 font-medium text-gray-600">تاريخ الشراء</th>
                  <th className="text-right p-3 font-medium text-gray-600">الحالة / Status</th>
                  <th className="text-right p-3 font-medium text-gray-600">الشكاوى</th>
                  <th className="text-right p-3 font-medium text-gray-600">تغيير الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {submissions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-gray-50">
                    <td className="p-3 text-gray-500 font-mono text-xs">{sub.id.slice(0, 8)}...</td>
                    <td className="p-3">
                      <p className="font-medium text-gray-900">{sub.variant.model.make.nameAr} {sub.variant.model.nameAr}</p>
                      <p className="text-xs text-gray-500">{sub.variant.nameAr} ({sub.variant.year})</p>
                    </td>
                    <td className="p-3 text-gray-700">{sub.dealer.nameAr}</td>
                    <td className="p-3">
                      <p className="font-medium">{sub.purchasePrice.toLocaleString()} ج.م</p>
                      {sub.officialPrice && (
                        <p className="text-xs text-gray-400">الرسمي: {sub.officialPrice.toLocaleString()} ج.م</p>
                      )}
                    </td>
                    <td className="p-3 text-gray-600 text-xs">
                      {new Date(sub.purchaseDate).toLocaleDateString('ar-EG')}
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(sub.status)}`}>
                        {sub.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                        sub._count.reports > 0 ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {sub._count.reports}
                      </span>
                    </td>
                    <td className="p-3">
                      <select
                        value={sub.status}
                        onChange={(e) => changeStatus(sub.id, e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      >
                        {['PENDING', 'PUBLISHED', 'HIDDEN', 'REMOVED'].map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 p-4 border-t border-gray-200">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm disabled:opacity-50 hover:bg-gray-50 transition-colors"
              >
                السابق / Prev
              </button>
              <span className="text-sm text-gray-600">
                {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm disabled:opacity-50 hover:bg-gray-50 transition-colors"
              >
                التالي / Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
