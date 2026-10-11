"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { ADDRESS, EMAIL, HOURS, PHONE, UPI_ID, whatsapp } from '@/lib/site';

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { path: '/about', label: t('About', 'ہمارے بارے میں') },
    { path: '/our-institution', label: t('Our Institution', 'ہمارا ادارہ') },
    { path: '/admission', label: t('Admissions', 'داخلہ') },
    { path: '/gallery', label: t('Gallery', 'گیلری') },
    { path: '/donation', label: t('Donate', 'عطیہ دیں') },
    { path: '/contact', label: t('Contact', 'رابطہ') },
  ];

  return (
    <footer className="relative border-t border-gold/50 bg-[#051f1a] text-white/75">
      {/* The logo's star sits on the gold line, where the page ends and the footer begins */}
      <span className="khatam absolute -top-[0.4375rem] left-1/2 h-3.5 w-3.5 -translate-x-1/2" aria-hidden="true" />

      <div className="wrap py-14 md:py-16">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-10 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Image src="/logo.jpg" alt="" width={64} height={64} className="h-16 w-16 rounded-lg bg-white object-contain" />
            <span>
              <span className="display block text-2xl text-white md:text-3xl">{t('Abu Bakar Foundation', 'ابوبکر فاؤنڈیشن')}</span>
              <span className="block text-gold">{t('Our Mission, Our Identity', 'ہمارا مشن ہماری پہچان')}</span>
            </span>
          </Link>
          <div className="flex flex-wrap gap-3">
            <Link href="/donation" className="btn btn-gold">{t('Donate', 'عطیہ دیں')}</Link>
            <Link href="/admission" className="btn btn-line text-white">{t('Apply for admission', 'داخلے کے لیے درخواست دیں')}</Link>
          </div>
        </div>

        <div className="grid gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label={t('Footer', 'فوٹر')}>
            <h2 className="eyebrow text-gold">{t('Pages', 'صفحات')}</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {links.map(link => (
                <li key={link.path}>
                  <Link href={link.path} className="hover:text-gold">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h2 className="eyebrow text-gold">{t('Visit us', 'تشریف لائیں')}</h2>
            <p className="mt-4">{t(...ADDRESS)}</p>
            <p className="mt-3 text-white/60">{t(...HOURS)}</p>
          </address>

          <div>
            <h2 className="eyebrow text-gold">{t('Talk to us', 'ہم سے بات کریں')}</h2>
            <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="display mt-4 block text-2xl text-white hover:text-gold rtl:text-right" dir="ltr">
              {PHONE}
            </a>
            <p className="text-white/60">{t('WhatsApp or call', 'واٹس ایپ یا کال')}</p>
            <a href={`mailto:${EMAIL}`} className="mt-3 block break-words hover:text-gold rtl:text-right" dir="ltr">{EMAIL}</a>
          </div>

          <div>
            <h2 className="eyebrow text-gold">{t('Donate by UPI', 'یو پی آئی سے عطیہ')}</h2>
            <p className="mt-4 break-all font-semibold text-white rtl:text-right" dir="ltr">{UPI_ID}</p>
            <Link href="/donation#bank" className="mt-3 inline-block underline decoration-gold underline-offset-4 hover:text-gold">
              {t('Bank transfer details', 'بینک ٹرانسفر کی تفصیلات')}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="wrap py-5 pr-24 text-sm text-white/55">
          © {new Date().getFullYear()} {t('Abu Bakar Foundation, Nashik. All rights reserved.', 'ابوبکر فاؤنڈیشن، ناشک۔ جملہ حقوق محفوظ ہیں۔')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
