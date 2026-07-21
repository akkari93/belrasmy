'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { href: '/admin', labelAr: 'لائحة الشكاوى', labelEn: 'Reports' },
  { href: '/admin/submissions', labelAr: 'التقارير', labelEn: 'Submissions' },
  { href: '/admin/dealers', labelAr: 'الوكلاء', labelEn: 'Dealers' },
  { href: '/admin/cars', labelAr: 'السيارات', labelEn: 'Cars' },
  { href: '/admin/settings', labelAr: 'الإعدادات', labelEn: 'Settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    // Don't check auth on the login page itself
    if (pathname === '/admin/login') {
      setAuthed(true);
      return;
    }

    fetch('/api/admin/check')
      .then(async (res) => {
        const data = await res.json().catch(() => null);
        if (!res.ok || data?.authenticated !== true) {
          throw new Error('Not authenticated');
        }
        setAuthed(true);
      })
      .catch(() => {
        setAuthed(false);
        router.replace('/admin/login');
      });
  }, [pathname, router]);

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (authed !== true) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-50" dir="rtl">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-l border-gray-200 flex flex-col shrink-0">
        <div className="p-5 border-b border-gray-200">
          <Link href="/admin" className="text-lg font-bold text-emerald-700">
            بلرسمي
          </Link>
          <p className="text-xs text-gray-400 mt-0.5">Admin Panel</p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span>{item.labelAr}</span>
                <span className="text-xs text-gray-400">{item.labelEn}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            العودة إلى الموقع / Back to Site
          </Link>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
