"use client";

import React, { createContext, useContext, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { LANGUAGES, type Language } from '@/lib/site';



interface LanguageContextType {
  lang: Language;
  t: (en: string, ur: string, hi: string) => string;
  dir: 'ltr' | 'rtl';
  /** The current page without the /ur or /hi prefix, e.g. '/about'. */
  path: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Urdu and Hindi pages live under /ur and /hi, so the language comes from the URL and the server renders the right one.
  const pathname = usePathname() ?? '/';
  const lang: Language = LANGUAGES.find(l => l !== 'en' && new RegExp(`^/${l}(/|$)`).test(pathname)) ?? 'en';
  const path = lang === 'en' ? pathname : pathname.slice(3) || '/';

  const t = useCallback((en: string, ur: string, hi: string) => ({ en, ur, hi })[lang], [lang]);
  const dir = lang === 'ur' ? 'rtl' : 'ltr';

  // Screen readers and the browser's own translation prompt read the language from <html>.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t, dir, path }}>
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
