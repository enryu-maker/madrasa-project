"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const { t, toggleLang, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile && isOpen) setIsOpen(false);
  }, [isMobile, isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', label: t('Home', 'ہوم') },
    { path: '/about', label: t('About', 'ہمارے بارے میں') },
    { path: '/our-institution', label: t('Our Institution', 'ہمارا ادارہ') },
    { path: '/admission', label: t('Admissions', 'داخلہ') },
    { path: '/online-classes', label: t('Online Classes', 'آن لائن کلاسز') },
    { path: '/donation', label: t('Donation', 'عطیہ') },
    { path: '/contact', label: t('Contact', 'رابطہ') },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled
        ? "bg-white/97 backdrop-blur-md shadow-md border-b border-[#E9EEF4] py-2"
        : "bg-white/90 backdrop-blur-sm py-3"
    )}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform bg-white shrink-0 border border-[#E9EEF4]">
              <Image
                src="/logo.jpg"
                alt="Abu Bakar Foundation Logo"
                fill
                sizes="(max-width: 768px) 48px, 56px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-display font-extrabold text-base md:text-lg text-[#0B3D91] leading-tight">
                {t('Abu Bakar Foundation', 'ابوبکر فاؤنڈیشن')}
              </h1>
              <p className="text-[9px] md:text-[11px] text-[#53B32E] font-bold tracking-wide uppercase mt-0.5">
                {t('Our Mission Our Identity', 'ہمارا مشن ہماری پہچان')}
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-0.5">
            {links.map(link => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "bg-[#1E5DBB] text-white shadow-md"
                      : "text-[#111111] hover:text-[#1E5DBB] hover:bg-[#E9EEF4]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleLang}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#d0dce8] text-[#1E5DBB] bg-[#E9EEF4] hover:bg-[#1E5DBB] hover:text-white transition-all text-xs font-bold"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{lang === 'en' ? 'اردو' : 'EN'}</span>
            </button>

            <Link href="/admission" className="hidden lg:block">
              <button className="btn-orange text-sm px-5 py-2 rounded-xl font-bold shadow-md">
                {t('Apply Now', 'ابھی درخواست دیں')}
              </button>
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="xl:hidden p-2 rounded-lg bg-[#E9EEF4] text-[#0B3D91]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "xl:hidden overflow-hidden transition-all duration-400 ease-in-out",
          isOpen ? "max-h-[700px] border-t border-[#E9EEF4] mt-3 py-4 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="grid gap-1">
            {links.map(link => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                  pathname === link.path
                    ? "bg-[#1E5DBB] text-white"
                    : "text-[#111111] hover:bg-[#E9EEF4] hover:text-[#1E5DBB]"
                )}
              >
                <span>{link.label}</span>
                <ChevronRight className="h-4 w-4 opacity-50" />
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t border-[#E9EEF4] flex flex-col gap-2">
              <button
                onClick={toggleLang}
                className="w-full flex items-center justify-center gap-2 h-11 rounded-xl border border-[#d0dce8] text-[#1E5DBB] font-bold text-sm bg-[#E9EEF4]"
              >
                <Globe className="h-4 w-4" />
                <span>{lang === 'en' ? 'Switch to Urdu / اردو' : 'Switch to English'}</span>
              </button>
              <Link href="/admission" onClick={() => setIsOpen(false)}>
                <button className="w-full h-11 rounded-xl btn-orange text-sm font-bold">
                  {t('Apply Now — Admissions Open', 'ابھی درخواست دیں — داخلہ جاری ہے')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
