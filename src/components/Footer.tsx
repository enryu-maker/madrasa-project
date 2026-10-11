"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle, PlayCircle, Globe, ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('Home', 'ہوم') },
    { path: '/about', label: t('About Us', 'ہمارے بارے میں') },
    { path: '/our-institution', label: t('Our Institution', 'ہمارا ادارہ') },
    { path: '/admission', label: t('Admissions', 'داخلہ') },
    { path: '/online-classes', label: t('Online Classes', 'آن لائن کلاسز') },
    { path: '/gallery', label: t('Gallery', 'گیلری') },
    { path: '/donation', label: t('Donation', 'عطیہ') },
    { path: '/contact', label: t('Contact', 'رابطہ') },
  ];

  const socials = [
    { icon: MessageCircle, label: 'WhatsApp', bg: 'bg-[#25D366]', href: 'https://wa.me/916306866039' },
    { icon: PlayCircle, label: 'YouTube', bg: 'bg-[#FF0000]', href: '#' },
    { icon: Globe, label: 'Website', bg: 'bg-[#1E5DBB]', href: '#' },
  ];

  return (
    <footer className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(160deg, #0B3D91 0%, #1E5DBB 60%, #0d4eaa 100%)' }}>
      {/* Islamic pattern overlay */}
      <div className="absolute inset-0 islamic-geo-bg opacity-100 pointer-events-none"></div>
      {/* Green top accent stripe */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, #53B32E, #7ED321, #F28C28, #53B32E)' }}></div>

      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white flex items-center justify-center border-2 border-white/30 group-hover:scale-105 transition-transform overflow-hidden shrink-0 shadow-2xl">
                <Image
                  src="/logo.jpg"
                  alt="Abu Bakar Foundation Logo"
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight">
                  {t('Abu Bakar Foundation', 'ابوبکر فاؤنڈیشن')}
                </h3>
                <p className="text-[#7ED321] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-1">
                  {t('Our Mission Our Identity', 'ہمارا مشن ہماری پہچان')}
                </p>
              </div>
            </Link>

            <p className="text-blue-100/80 text-base leading-relaxed max-w-sm font-medium">
              {t(
                'A trusted Islamic educational institution dedicated to nurturing Deen, character, Quran, and academic excellence for the next generation.',
                'ایک قابل اعتماد اسلامی تعلیمی ادارہ جو اگلی نسل کے لیے دین، کردار، قرآن اور تعلیمی فضیلت کو پروان چڑھانے کے لیے وقف ہے۔'
              )}
            </p>

            {/* Social Links */}
            <div>
              <p className="text-blue-200/60 text-xs font-bold uppercase tracking-widest mb-4">{t('Connect With Us', 'ہم سے جڑیں')}</p>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className={`w-11 h-11 rounded-xl ${social.bg} flex items-center justify-center shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all group`}
                    title={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Donation CTA */}
            <Link href="/donation">
              <div className="inline-flex items-center gap-3 bg-[#F28C28] hover:bg-[#d4720f] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-orange-900/30 hover:-translate-y-0.5">
                <Heart className="h-4 w-4" />
                {t('Make a Donation', 'عطیہ دیں')}
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-[#7ED321] text-xs font-black uppercase tracking-[0.3em] mb-8">
              {t('Quick Links', 'فوری روابط')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-blue-100/70 hover:text-white transition-all text-sm font-semibold flex items-center justify-between group py-1.5 border-b border-white/5 hover:border-[#53B32E]/50"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[#7ED321] text-xs font-black uppercase tracking-[0.3em] mb-8">
              {t('Contact Info', 'رابطہ معلومات')}
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#53B32E] transition-colors mt-0.5">
                  <MapPin className="h-4 w-4 text-[#27B5E8] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-[#7ED321] font-bold uppercase tracking-widest mb-1">{t('Campus Address', 'کیمپس پتہ')}</p>
                  <p className="text-blue-100/80 text-xs font-medium leading-relaxed">
                    {t(
                      'Plot No: 39, Gat No: 8A/8B, Kedarnath Colony, Virat Sankul, Sanjiv Nagar, Ambad Link Road, Nashik, Maharashtra, India',
                      'پلاٹ نمبر: 39، گٹ نمبر: 8A/8B، کیدارناتھ کالونی، وراٹ سنکل، سنجے ناگر، امباد لنک روڈ، ناشک، ایم ایچ، بھارت'
                    )}
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#25D366] transition-colors">
                  <Phone className="h-4 w-4 text-[#27B5E8] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-[#7ED321] font-bold uppercase tracking-widest mb-1">{t('WhatsApp', 'واٹس ایپ')}</p>
                  <a href="https://wa.me/916306866039" className="text-white font-bold text-base hover:text-[#7ED321] transition-colors">
                    +91 6306866039
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#1E5DBB] transition-colors">
                  <Mail className="h-4 w-4 text-[#27B5E8] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-[#7ED321] font-bold uppercase tracking-widest mb-1">{t('Email', 'ای میل')}</p>
                  <a href="mailto:info@abubakarfoundation.org" className="text-blue-100/80 font-semibold text-sm hover:text-white transition-colors">
                    info@abubakarfoundation.org
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
                  <Globe className="h-4 w-4 text-[#27B5E8]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#7ED321] font-bold uppercase tracking-widest mb-1">{t('Office Hours', 'دفتری اوقات')}</p>
                  <p className="text-blue-100/80 text-xs font-medium">{t('Monday – Saturday: 9:00 AM – 6:00 PM', 'پیر تا ہفتہ: صبح 9 تا شام 6')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-100/40 text-xs font-bold tracking-widest uppercase text-center">
            © {new Date().getFullYear()} {t('Abu Bakar Foundation. All rights reserved.', 'ابوبکر فاؤنڈیشن۔ جملہ حقوق محفوظ ہیں۔')}
          </p>
          <div className="flex gap-6 text-xs font-bold text-blue-100/30 uppercase tracking-widest">
            <Link href="#" className="hover:text-[#7ED321] transition-colors">{t('Privacy Policy', 'رازداری')}</Link>
            <Link href="#" className="hover:text-[#7ED321] transition-colors">{t('Terms of Service', 'شرائط')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
