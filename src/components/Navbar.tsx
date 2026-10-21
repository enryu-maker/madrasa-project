"use client";

import { useState } from 'react';
import NextLink from 'next/link';
import Link from '@/components/Link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LANGUAGES, localize } from '@/lib/site';

// Each language's name, written in that language.
const LANGUAGE_NAMES = { en: 'English', ur: 'اردو', hi: 'हिन्दी' };

const Navbar = () => {
  const { t, lang, path } = useLanguage();
  const others = LANGUAGES.filter(l => l !== lang);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/', label: t('Home', 'ہوم', 'होम') },
    { path: '/about', label: t('About', 'ہمارے بارے میں', 'हमारे बारे में') },
    { path: '/our-institution', label: t('Our Institution', 'ہمارا ادارہ', 'हमारी संस्था') },
    { path: '/admission', label: t('Admissions', 'داخلہ', 'दाख़िला') },
    { path: '/gallery', label: t('Gallery', 'گیلری', 'गैलरी') },
    { path: '/contact', label: t('Contact', 'رابطہ', 'संपर्क') },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="wrap flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <Image src="/logo.png" alt="" width={512} height={468} className="h-10 w-10 shrink-0 rounded-md object-contain" priority />
          <div className="flex flex-col justify-center min-w-0">
            <span className="display text-[0.875rem] leading-tight text-navy sm:text-[0.9375rem] font-bold">
              {t('Jamia Siddhiqe Akbar Ahale Sunnat Trust', 'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ', 'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट')}
            </span>
            <span className="text-[10px] sm:text-[11px] text-emerald font-bold tracking-wide mt-0.5">
              {t('Our Mission Our Identity', 'ہمارا مشن ہماری پہچان', 'हमारा मिशन हमारी पहचान')}
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {links.map(link => (
            <Link
              key={link.path}
              href={link.path}
              aria-current={path === link.path ? 'page' : undefined}
              className={cn(
                "rounded-xl px-3 py-1.5 text-[0.8125rem] font-medium transition-all duration-200",
                path === link.path
                  ? "bg-emerald text-white shadow-md font-semibold"
                  : "text-navy/85 hover:bg-chalk hover:text-emerald"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {others.map(l => (
            <NextLink
              key={l}
              href={localize(path, l)}
              hrefLang={l}
              lang={l}
              className="hidden min-h-11 items-center rounded-lg px-2 text-sm font-semibold text-emerald hover:bg-chalk sm:flex"
            >
              {LANGUAGE_NAMES[l]}
            </NextLink>
          ))}
          <Link href="/donation" className="btn btn-gold min-h-11 px-5" onClick={() => setIsOpen(false)}>
            {t('Donate', 'عطیہ دیں', 'दान दें')}
          </Link>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-chalk xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t('Menu', 'مینو', 'मेन्यू')}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="wrap border-t border-line pb-4 xl:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {links.map(link => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                aria-current={path === link.path ? 'page' : undefined}
                className={cn(
                  "block rounded-xl px-3.5 py-2 text-[0.875rem] font-medium transition-all duration-200",
                  path === link.path
                    ? "bg-emerald text-white shadow-sm font-semibold"
                    : "text-navy/85 hover:bg-chalk hover:text-emerald"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex gap-6 sm:hidden">
            {others.map(l => (
              <NextLink
                key={l}
                href={localize(path, l)}
                hrefLang={l}
                lang={l}
                onClick={() => setIsOpen(false)}
                className="flex min-h-11 items-center font-semibold text-emerald"
              >
                {LANGUAGE_NAMES[l]}
              </NextLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
