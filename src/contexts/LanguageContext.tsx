"use client";

import React, { createContext, useContext, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { localize, type Language } from '@/lib/site';



interface LanguageContextType {
  lang: Language;
  t: (en: string, ur: string) => string;
  dir: 'ltr' | 'rtl';
  /** The current page without the /ur prefix, e.g. '/about'. */
  path: string;
  /** The same page in the other language. */
  switchHref: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Urdu pages live under /ur, so the language comes from the URL and the server renders the right one.
  const pathname = usePathname() ?? '/';
  const lang: Language = /^\/ur(\/|$)/.test(pathname) ? 'ur' : 'en';
  const path = lang === 'ur' ? pathname.slice(3) || '/' : pathname;
  const switchHref = lang === 'ur' ? path : localize(path, 'ur');

  const t = useCallback((en: string, ur: string) => lang === 'en' ? en : ur, [lang]);
  const dir = lang === 'ur' ? 'rtl' : 'ltr';

  // Screen readers and the browser's own translation prompt read the language from <html>.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t, dir, path, switchHref }}>
      <div dir={dir} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
