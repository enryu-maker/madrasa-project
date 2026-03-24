"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';


type Language = 'en' | 'ur';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (en: string, ur: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'en' ? 'ur' : 'en');
  }, []);

  const t = useCallback((en: string, ur: string) => lang === 'en' ? en : ur, [lang]);
  const dir = lang === 'ur' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, dir }}>
      <div dir={dir} className={lang === 'ur' ? 'font-arabic' : 'font-body'}>
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
