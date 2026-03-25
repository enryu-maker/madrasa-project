"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const { t, toggleLang, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', label: t('Home', 'ہوم') },
    { path: '/about', label: t('About', 'ہمارے بارے میں') },
    { path: '/courses', label: t('Courses', 'کورسز') },
    { path: '/teachers', label: t('Teachers', 'اساتذہ') },
    { path: '/admission', label: t('Admission', 'داخلہ') },
    { path: '/online-classes', label: t('Online Classes', 'آن لائن کلاسز') },
    { path: '/donation', label: t('Donation', 'عطیہ') },
    { path: '/contact', label: t('Contact', 'رابطہ') },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled
        ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-sm border-b border-zinc-200/50 dark:border-zinc-800/50 py-2"
        : "bg-white/80 backdrop-blur-sm py-4"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform bg-black shrink-0 border border-zinc-200 dark:border-zinc-800">
              <Image 
                src="/logofaiz.jpeg" 
                alt="Faiz ul Hasnain Foundation Logo" 
                fill
                sizes="(max-width: 768px) 64px, 80px"
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-display font-bold text-lg md:text-xl text-sky-950 dark:text-sky-100 leading-tight">
                {t('Faiz ul Hasnain Foundation', 'فیض الحسنین فاؤنڈیشن')}
              </h1>
              <p className="text-[10px] md:text-xs text-zinc-500 font-medium tracking-wide uppercase mt-0.5">
                {t('Our Mission Our Identity', 'ہمارا مشن ہماری پہچان')}
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-1 bg-zinc-100/50 dark:bg-zinc-900/50 p-1 rounded-full border border-zinc-200/50 dark:border-zinc-800/50">
            {links.map(link => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                    isActive
                      ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-sky-600 hover:bg-sky-50 dark:hover:bg-sky-900/20"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLang}
              className="hidden md:flex items-center gap-2 rounded-full border-sky-600/20 text-sky-700 bg-white/50 backdrop-blur-md hover:bg-sky-600 hover:text-white transition-all font-bold"
            >
              <Globe className="h-4 w-4" />
              <span>{lang === 'en' ? 'اردو' : 'English'}</span>
            </Button>

            <Link href="/admission" className="hidden lg:block">
              <Button size="sm" className="gradient-gold text-white font-bold rounded-full px-6 shadow-lg shadow-amber-500/20">
                {t('Join Us', 'شامل ہوں')}
              </Button>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "xl:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isOpen ? "max-h-[600px] border-t border-zinc-100 dark:border-zinc-800 mt-4 py-6 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="grid gap-2">
            {links.map(link => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-6 py-3 rounded-2xl text-base font-semibold transition-all",
                  pathname === link.path
                    ? "bg-sky-600 text-white"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-3">
              <Button
                variant="outline"
                onClick={toggleLang}
                className="w-full justify-between h-12 rounded-xl border-sky-600/20 px-6 font-bold"
              >
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <span>{lang === 'en' ? 'Switch to Urdu' : 'English میں تبدیل کریں'}</span>
                </div>
                <span className="text-sky-600">{lang === 'en' ? 'اردو' : 'EN'}</span>
              </Button>
              <Link href="/admission" className="w-full">
                <Button className="w-full h-12 rounded-xl gradient-primary text-white font-bold border-0 hover:shadow-lg hover:shadow-sky-500/20">
                  {t('Join Online Class', 'آن لائن کلاس میں شامل ہوں')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
