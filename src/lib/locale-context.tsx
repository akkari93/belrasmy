'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type Locale = 'ar' | 'en';

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (ar: string, en: string) => string;
  dir: 'rtl' | 'ltr';
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'ar', setLocale: () => {}, t: (ar) => ar, dir: 'rtl'
});

export function LocaleProvider({ children, defaultLocale = 'ar' }: { children: ReactNode; defaultLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const t = (ar: string, en: string) => locale === 'ar' ? ar : en;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  return <LocaleContext.Provider value={{ locale, setLocale, t, dir }}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);
