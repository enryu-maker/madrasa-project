"use client";

import { createContext, useContext, useCallback, useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LANGUAGES, type Language } from "@/lib/site";

interface LanguageContextValue {
  lang: Language;
  t: (en: string, ur: string, hi: string) => string;
  dir: "ltr" | "rtl";
  path: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "/";
  const lang: Language = LANGUAGES.find(l => l !== "en" && new RegExp(`^/${l}(/|$)`).test(pathname)) ?? "en";
  const path = lang === "en" ? pathname : pathname.slice(3) || "/";

  const t = useCallback((en: string, ur: string, hi: string) => ({ en, ur, hi })[lang], [lang]);
  const dir = lang === "ur" ? "rtl" : "ltr";

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
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
