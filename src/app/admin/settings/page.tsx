'use client';

import { useEffect, useState, useCallback } from 'react';

interface Setting {
  id: string;
  key: string;
  value: string;
}

const settingLabels: Record<string, { ar: string; en: string }> = {
  report_threshold: { ar: 'حد التبليغ', en: 'Report Threshold' },
};

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Record<string, string>>({});
  const [savingKey, setSavingKey] = useState<string | null>(null);

  const fetchSettings = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/settings');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setSettings(data.settings);
      const editMap: Record<string, string> = {};
      data.settings.forEach((s: Setting) => { editMap[s.id] = s.value; });
      setEditing(editMap);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  async function handleSave(id: string, key: string) {
    setSavingKey(id);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value: editing[id] }),
      });
      if (res.ok) {
        fetchSettings();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSavingKey(null);
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
          <h1 className="text-2xl font-bold text-gray-900">الإعدادات</h1>
          <p className="text-sm text-gray-500">Settings</p>
        </div>
      </div>

      {settings.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500">لا توجد إعدادات</p>
          <p className="text-sm text-gray-400 mt-1">No settings yet</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-right p-3 font-medium text-gray-600">المفتاح / Key</th>
                  <th className="text-right p-3 font-medium text-gray-600">الوصف / Description</th>
                  <th className="text-right p-3 font-medium text-gray-600">القيمة / Value</th>
                  <th className="text-center p-3 font-medium text-gray-600">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {settings.map((setting) => (
                  <tr key={setting.id} className="hover:bg-gray-50">
                    <td className="p-3">
                      <code className="px-2 py-0.5 bg-gray-100 rounded text-xs font-mono text-gray-700">
                        {setting.key}
                      </code>
                    </td>
                    <td className="p-3">
                      <p className="text-gray-700">{settingLabels[setting.key]?.ar || setting.key}</p>
                      <p className="text-xs text-gray-400">{settingLabels[setting.key]?.en || ''}</p>
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={editing[setting.id] ?? ''}
                        onChange={(e) => setEditing({ ...editing, [setting.id]: e.target.value })}
                        className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm w-32 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleSave(setting.id, setting.key)}
                        disabled={savingKey === setting.id}
                        className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        {savingKey === setting.id ? '...' : 'حفظ / Save'}
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
