'use client';

import { useLocale } from "@/lib/locale-context";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

export default function AppShellClient({ children }: { children: ReactNode }) {
  const { t, dir, locale, setLocale } = useLocale();
  const pathname = usePathname();

  const toggleLocale = () => {
    setLocale(locale === 'ar' ? 'en' : 'ar');
  };

  const navLinks = [
    { href: '/', labelAr: 'الرئيسية', labelEn: 'Home' },
    { href: '/submit', labelAr: 'إضافة تقرير', labelEn: 'Submit' },
    { href: '/admin', labelAr: 'الإدارة', labelEn: 'Admin' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-border-light shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between" dir={dir}>
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="text-2xl font-bold text-primary">{t('بلرسمي', 'Belrasmy')}</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors no-underline ${
                    isActive ? 'text-primary' : 'text-gray-text hover:text-dark'
                  }`}
                >
                  {t(link.labelAr, link.labelEn)}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={toggleLocale}
            className="px-3 py-1.5 text-sm font-medium rounded-lg border border-border-light bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {t('EN', 'AR')}
          </button>
        </div>

        {/* Mobile nav */}
        <div className="sm:hidden flex items-center justify-center gap-4 pb-3 px-4" dir={dir}>
          {navLinks.map((link) => {
            const isActive = link.href === '/'
              ? pathname === '/'
              : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors no-underline ${
                  isActive ? 'text-primary' : 'text-gray-text hover:text-dark'
                }`}
              >
                {t(link.labelAr, link.labelEn)}
              </Link>
            );
          })}
        </div>
      </header>

      <main className="flex-1" dir={dir}>
        {children}
      </main>

      <footer className="bg-gray-50 border-t border-border-light py-8" dir={dir}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-text text-sm">
            {t(
              'بلرسمي - مجتمع لمكافحة المغالاة في أسعار السيارات',
              'Belrasmy - Community fighting car price gouging'
            )}
          </p>
          <p className="text-gray-text text-xs mt-2">
            {t('جميع الحقوق محفوظة © 2025', 'All rights reserved © 2025')}
          </p>
        </div>
      </footer>
    </>
  );
}
