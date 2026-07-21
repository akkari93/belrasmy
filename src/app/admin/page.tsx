'use client';

import { useEffect, useState, useCallback } from 'react';

interface Report {
  id: string;
  reason: string;
  description: string | null;
  status: string;
  createdAt: string;
}

interface Submission {
  id: string;
  status: string;
  reportCount: number;
  purchasePrice: number;
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
  reports: Report[];
}

export default function AdminDashboardPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [threshold, setThreshold] = useState(3);
  const [newThreshold, setNewThreshold] = useState('3');
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchReports = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/reports');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setSubmissions(data.submissions);
      setThreshold(data.threshold);
      setNewThreshold(String(data.threshold));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  async function handleAction(submissionId: string, action: string) {
    try {
      const statusByAction: Record<string, string> = {
        hide: 'HIDDEN',
        publish: 'PUBLISHED',
        remove: 'REMOVED',
      };
      const res = await fetch(`/api/admin/submissions/${submissionId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: statusByAction[action] }),
      });
      if (res.ok) {
        fetchReports();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleReportAction(reportId: string, action: string) {
    try {
      const statusByAction: Record<string, string> = {
        dismiss: 'DISMISSED',
        action: 'ACTIONED',
      };
      const res = await fetch(`/api/admin/reports/${reportId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: statusByAction[action] }),
      });
      if (res.ok) {
        fetchReports();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function saveThreshold() {
    setSaving(true);
    try {
      await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'report_threshold', value: newThreshold }),
      });
      setThreshold(parseInt(newThreshold));
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
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
        <h1 className="text-2xl font-bold text-gray-900">لائحة الشكاوى</h1>
        <p className="text-sm text-gray-500">Reports Queue</p>
      </div>

      {/* Threshold Setting */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-700">
            حد التبليغ / Report Threshold:
          </label>
          <input
            type="number"
            value={newThreshold}
            onChange={(e) => setNewThreshold(e.target.value)}
            className="w-20 px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
            min="1"
          />
          <button
            onClick={saveThreshold}
            disabled={saving}
            className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-sm font-medium rounded-lg transition-colors"
          >
            {saving ? 'جاري الحفظ...' : 'حفظ / Save'}
          </button>
        </div>
      </div>

      {/* Reports List */}
      {submissions.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500">لا توجد شكاوى حالياً</p>
          <p className="text-sm text-gray-400 mt-1">No reports at this time</p>
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((sub) => {
            const isOverThreshold = sub.reportCount >= threshold;
            return (
              <div key={sub.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {/* Main row */}
                <div className="p-4 flex items-center gap-4">
                  {/* Car info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">
                      {sub.variant.model.make.nameAr} {sub.variant.model.nameAr} - {sub.variant.nameAr}
                    </p>
                    <p className="text-sm text-gray-500">
                      {sub.variant.model.make.nameEn} {sub.variant.model.nameEn} - {sub.variant.nameEn} ({sub.variant.year})
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {sub.dealer.nameAr} / {sub.dealer.nameEn}
                    </p>
                  </div>

                  {/* Report count */}
                  <div className="text-center">
                    <span
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold ${
                        isOverThreshold
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {sub.reportCount}
                    </span>
                    <p className="text-xs text-gray-400 mt-0.5">شكوى</p>
                  </div>

                  {/* Status */}
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(sub.status)}`}
                  >
                    {sub.status}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {sub.status !== 'HIDDEN' && (
                      <button
                        onClick={() => handleAction(sub.id, 'hide')}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors"
                      >
                        إخفاء / Hide
                      </button>
                    )}
                    {sub.status !== 'PUBLISHED' && (
                      <button
                        onClick={() => handleAction(sub.id, 'publish')}
                        className="px-3 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-xs font-medium rounded-lg transition-colors"
                      >
                        نشر / Publish
                      </button>
                    )}
                    {sub.status !== 'REMOVED' && (
                      <button
                        onClick={() => handleAction(sub.id, 'remove')}
                        className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-medium rounded-lg transition-colors"
                      >
                        حذف / Remove
                      </button>
                    )}
                    <button
                      onClick={() => setExpandedId(expandedId === sub.id ? null : sub.id)}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors"
                    >
                      {expandedId === sub.id ? 'إخفاء' : 'عرض'} / {expandedId === sub.id ? 'Hide' : 'View'}
                    </button>
                  </div>
                </div>

                {/* Expanded reports */}
                {expandedId === sub.id && (
                  <div className="border-t border-gray-100 bg-gray-50 p-4 space-y-3">
                    {sub.reports.length === 0 ? (
                      <p className="text-sm text-gray-400 text-center py-2">No individual report details</p>
                    ) : (
                      sub.reports.map((report) => (
                        <div key={report.id} className="bg-white rounded-lg border border-gray-200 p-3 flex items-start gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">{report.reason}</p>
                            {report.description && (
                              <p className="text-sm text-gray-500 mt-0.5">{report.description}</p>
                            )}
                            <p className="text-xs text-gray-400 mt-1">
                              {new Date(report.createdAt).toLocaleDateString('ar-EG')} - {report.status}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            {report.status === 'PENDING' && (
                              <>
                                <button
                                  onClick={() => handleReportAction(report.id, 'dismiss')}
                                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-medium rounded-lg transition-colors"
                                >
                                  تجاهل / Dismiss
                                </button>
                                <button
                                  onClick={() => handleReportAction(report.id, 'action')}
                                  className="px-3 py-1 bg-amber-100 hover:bg-amber-200 text-amber-700 text-xs font-medium rounded-lg transition-colors"
                                >
                                  اتخاذ إجراء / Action
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
