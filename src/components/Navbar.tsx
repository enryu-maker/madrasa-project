"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const { t, toggleLang, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { path: '/about', label: t('About', 'ہمارے بارے میں') },
    { path: '/our-institution', label: t('Our Institution', 'ہمارا ادارہ') },
    { path: '/admission', label: t('Admissions', 'داخلہ') },
    { path: '/gallery', label: t('Gallery', 'گیلری') },
    { path: '/contact', label: t('Contact', 'رابطہ') },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="wrap flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image src="/logo.png" alt="" width={512} height={468} className="h-11 w-11 shrink-0 rounded-md object-contain" priority />
          <span className="display text-base leading-[1.15] text-navy sm:text-lg">
            {t('Siddique Akbar Trust', 'صدیق اکبر ٹرسٹ')}
          </span>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {links.map(link => (
            <Link
              key={link.path}
              href={link.path}
              aria-current={pathname === link.path ? 'page' : undefined}
              className={cn(
                "border-b-2 py-1 text-[0.9375rem] font-medium transition-colors hover:text-emerald",
                pathname === link.path ? "border-gold text-emerald" : "border-transparent"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={toggleLang}
            className="hidden min-h-11 rounded-lg px-3 text-sm font-semibold text-emerald hover:bg-chalk sm:block"
            lang={lang === 'en' ? 'ur' : 'en'}
          >
            {lang === 'en' ? 'اردو' : 'English'}
          </button>
          <Link href="/donation" className="btn btn-gold min-h-11 px-5" onClick={() => setIsOpen(false)}>
            {t('Donate', 'عطیہ دیں')}
          </Link>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-chalk xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t('Menu', 'مینو')}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="wrap border-t border-line pb-4 xl:hidden">
          {links.map(link => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              aria-current={pathname === link.path ? 'page' : undefined}
              className={cn(
                "block border-b border-line py-3 font-medium",
                pathname === link.path && "text-emerald"
              )}
            >
              {link.label}
            </Link>
          ))}
          <button onClick={toggleLang} className="mt-3 min-h-11 font-semibold text-emerald sm:hidden">
            {lang === 'en' ? 'اردو میں پڑھیں' : 'Read in English'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
