"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle, PlayCircle, Globe, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { path: '/about', label: t('About Us', 'ہمارے بارے میں') },
    { path: '/courses', label: t('Courses', 'کورسز') },
    { path: '/teachers', label: t('Our Faculty', 'ہمارے اساتذہ') },
    { path: '/admission', label: t('Admission', 'داخلہ') },
    { path: '/online-classes', label: t('Digital Campus', 'ڈیجیٹل کیمپس') },
    { path: '/donation', label: t('Donation', 'عطیہ') },
    { path: '/contact', label: t('Contact', 'رابطہ') },
  ];

  const socials = [
    { icon: MessageCircle, label: 'WhatsApp', color: 'bg-green-600' },
    { icon: PlayCircle, label: 'YouTube', color: 'bg-rose-600' },
    { icon: Globe, label: 'Website', color: 'bg-blue-600' },
  ];

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute inset-0 islamic-pattern-bg opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 gradient-primary opacity-50"></div>
      
      <div className="container mx-auto px-8 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-black flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform overflow-hidden shrink-0 shadow-xl">
                <Image 
                  src="/logofaiz.jpeg" 
                  alt="Faiz ul Hasnain Foundation Logo" 
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                  {t('Faiz ul Hasnain Foundation', 'فیض الحسنین فاؤنڈیشن')}
                </h3>
                <p className="text-sky-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-1">
                  {t('Our Mission Our Identity', 'ہمارا مشن ہماری پہچان')}
                </p>
              </div>
            </Link>
            
            <p className="text-sky-50/60 text-lg leading-relaxed max-w-md font-medium">
              {t(
                'Nurturing hearts and minds through the authentic teachings of the Quran and Sunnah. Join our global community of scholars and seekers.',
                'قرآن و سنت کی مستند تعلیمات کے ذریعے دلوں اور ذہنوں کو پروان چڑھانا۔ علماء اور متلاشیوں کی ہماری عالمی برادری میں شامل ہوں۔'
              )}
            </p>

            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-12 h-12 rounded-2xl ${social.color} flex items-center justify-center shadow-xl hover:-translate-y-2 transition-all group`}
                  title={social.label}
                >
                  <social.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sky-400 text-xs font-black uppercase tracking-[0.3em] mb-10">
              {t('Quick Exploration', 'فوری تلاش')}
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {links.map(link => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sky-50/70 hover:text-white transition-all text-sm font-bold flex items-center justify-between group py-1 border-b border-white/5 hover:border-sky-500/50">
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h4 className="text-sky-400 text-xs font-black uppercase tracking-[0.3em] mb-10">
                {t('Connect Directly', 'براہِ راست جڑیں')}
              </h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-sky-600 transition-colors">
                     <MapPin className="h-5 w-5 text-sky-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-sky-400 font-bold uppercase tracking-widest mb-1">{t('Main Campus', 'مین کیمپس')}</p>
                    <p className="text-sm font-bold text-sky-50/90 leading-relaxed">{t('Plot No: 39, Gat No: 8A/8B, Kedarnath Colony, Virat Sankul, Sanjiv Nagar, Ambad Link Road, Nashik, M.H , India', 'پلاٹ نمبر: 39، گٹ نمبر: 8A/8B، کیدارناتھ کالونی، وراٹ سنکل، سنجے ناگر، امباد لنک روڈ، ناشک، م۔ھ، بھارت')}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-sky-600 transition-colors">
                     <Phone className="h-5 w-5 text-sky-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-sky-400 font-bold uppercase tracking-widest mb-1">{t('WhatsApp Only', 'صرف واٹس ایپ')}</p>
                    <p className="text-lg font-black text-sky-50/90">6306866039</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-sky-600 transition-colors">
                     <Mail className="h-5 w-5 text-sky-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-sky-400 font-bold uppercase tracking-widest mb-1">{t('Academic Enquiries', 'تعلیمی استفسارات')}</p>
                    <p className="text-sm font-bold text-sky-50/90">info@faizulhasnain.org</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sky-50/20 text-xs font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} {t('Faiz ul Hasnain Foundation. All rights reserved.', 'فیض الحسنین فاؤنڈیشن۔ جملہ حقوق محفوظ ہیں۔')}
          </p>
          <div className="flex gap-8 text-xs font-bold text-sky-50/20 uppercase tracking-widest">
             <Link href="#" className="hover:text-sky-400 transition-colors">{t('Privacy Policy', 'رازداری کی پالیسی')}</Link>
             <Link href="#" className="hover:text-sky-400 transition-colors">{t('Terms of Service', 'سروس کی شرائط')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
