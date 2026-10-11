"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, Variants } from 'framer-motion';
import {
  BookOpen, Users, Award, GraduationCap, Star, ArrowRight, CheckCircle,
  Heart, Globe, Shield, Sparkles, Quote, ChevronRight, Play, Wifi, BookMarked, Landmark
} from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }),
};

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '2,000+', label: t('Active Students', 'فعال طلباء'), color: 'text-[#1E5DBB]', bg: 'bg-blue-50 border-blue-100' },
    { icon: GraduationCap, value: '50+', label: t('Qualified Faculty', 'مستند اساتذہ'), color: 'text-[#53B32E]', bg: 'bg-green-50 border-green-100' },
    { icon: Award, value: '500+', label: t('Alumni Graduated', 'فارغ التحصیل'), color: 'text-[#F28C28]', bg: 'bg-orange-50 border-orange-100' },
    { icon: Globe, value: '15+', label: t('Programs Offered', 'دستیاب پروگرام'), color: 'text-[#27B5E8]', bg: 'bg-sky-50 border-sky-100' },
  ];

  const programs = [
    {
      icon: BookOpen,
      title: t('Quran Learning', 'قرآن سیکھنا'),
      desc: t('Hifz, Tajweed, Qiraat and Quran understanding for all age groups.', 'تمام عمر کے گروہوں کے لیے حفظ، تجوید، قرأت اور فہم قرآن۔'),
      tag: t('Core', 'بنیادی'),
      color: '#1E5DBB',
    },
    {
      icon: Star,
      title: t('Islamic Studies', 'اسلامی تعلیمات'),
      desc: t('Hadith, Fiqh, Aqeedah, Seerah and deep Islamic sciences.', 'حدیث، فقہ، عقیدہ، سیرت اور گہرے اسلامی علوم۔'),
      tag: t('Popular', 'مشہور'),
      color: '#53B32E',
    },
    {
      icon: Heart,
      title: t('Character Building', 'کردار سازی'),
      desc: t('Tarbiyah, Akhlaq, discipline and moral excellence develop strong Muslims.', 'تربیت، اخلاق، نظم و ضبط اور اخلاقی فضیلت مضبوط مسلمان بناتی ہے۔'),
      tag: t('Essential', 'ضروری'),
      color: '#F28C28',
    },
    {
      icon: BookMarked,
      title: t('Academic Support', 'تعلیمی معاونت'),
      desc: t('Urdu, Arabic, and English language development alongside core Islamic studies.', 'اردو، عربی اور انگریزی زبان کی ترقی کے ساتھ اسلامی تعلیم۔'),
      tag: t('Holistic', 'جامع'),
      color: '#0B3D91',
    },
    {
      icon: Wifi,
      title: t('Online Learning', 'آن لائن تعلیم'),
      desc: t('Live and recorded classes for students globally at their own pace.', 'دنیا بھر کے طلباء کے لیے براہ راست اور ریکارڈ شدہ کلاسز۔'),
      tag: t('Global', 'عالمی'),
      color: '#27B5E8',
    },
    {
      icon: Landmark,
      title: t('Dars-e-Nizami', 'درسِ نظامی'),
      desc: t('8-year comprehensive traditional Aalim course covering all Islamic sciences.', '8 سالہ جامع روایتی عالم کورس جو تمام اسلامی علوم کا احاطہ کرتا ہے۔'),
      tag: t('Advanced', 'اعلیٰ'),
      color: '#53B32E',
    },
  ];

  const whyChooseUs = [
    { icon: Shield, title: t('Trusted & Authentic', 'قابل اعتماد اور مستند'), desc: t('All faculty hold authentic Ijazah chains traced to the Prophet ﷺ.', 'تمام اساتذہ کے پاس نبی ﷺ تک پہنچنے والی اسناد ہیں۔'), color: '#1E5DBB' },
    { icon: Users, title: t('Safe Environment', 'محفوظ ماحول'), desc: t('Structured, safe, and family-friendly campus for all students.', 'تمام طلباء کے لیے منظم، محفوظ اور خاندان دوست کیمپس۔'), color: '#53B32E' },
    { icon: Globe, title: t('Online & Offline', 'آن لائن اور آف لائن'), desc: t('Flexible learning modes — attend campus or join from anywhere.', 'لچکدار تعلیمی طریقے — کیمپس آئیں یا کہیں سے بھی شامل ہوں۔'), color: '#27B5E8' },
    { icon: Heart, title: t('Holistic Tarbiyah', 'جامع تربیت'), desc: t('Beyond academics — we build character, Akhlaq and spiritual strength.', 'تعلیم سے آگے — ہم کردار، اخلاق اور روحانی طاقت بناتے ہیں۔'), color: '#F28C28' },
    { icon: BookOpen, title: t('Modern + Islamic', 'جدید + اسلامی'), desc: t('Balancing traditional Islamic education with modern skills and knowledge.', 'روایتی اسلامی تعلیم کو جدید مہارتوں کے ساتھ متوازن بنانا۔'), color: '#1E5DBB' },
    { icon: Sparkles, title: t('Proven Excellence', 'ثابت شدہ فضیلت'), desc: t('Hundreds of alumni serving their communities with knowledge & character.', 'سینکڑوں فارغ التحصیل علم و کردار کے ساتھ اپنی کمیونٹیز کی خدمت کر رہے ہیں۔'), color: '#53B32E' },
  ];

  const testimonials = [
    {
      name: t('Muhammad Arshad', 'محمد ارشد'),
      role: t('Parent of a Student', 'طالب علم کے والد'),
      text: t("The institution has transformed my son's life. His Quran recitation and character have improved beyond expectations.", 'ادارے نے میرے بیٹے کی زندگی بدل دی۔ اس کی قرآن تلاوت اور کردار توقع سے بہتر ہوا ہے۔'),
      initials: 'MA',
      color: 'bg-[#1E5DBB]',
    },
    {
      name: t('Fatima Begum', 'فاطمہ بیگم'),
      role: t('Online Student', 'آن لائن طالبہ'),
      text: t('I am from a different city and the online classes have made quality Islamic education accessible for me.', 'میں دوسرے شہر سے ہوں اور آن لائن کلاسز نے میرے لیے معیاری اسلامی تعلیم قابل رسائی بنا دی ہے۔'),
      initials: 'FB',
      color: 'bg-[#53B32E]',
    },
    {
      name: t('Haji Rashid Ahmed', 'حاجی راشد احمد'),
      role: t('Community Leader', 'کمیونٹی رہنما'),
      text: t('Abu Bakar Foundation is a blessing for our community. The students here are disciplined, knowledgeable and full of Adab.', 'ابوبکر فاؤنڈیشن ہماری کمیونٹی کے لیے نعمت ہے۔ یہاں کے طلباء منظم، علم دار اور ادب سے بھرپور ہیں۔'),
      initials: 'HR',
      color: 'bg-[#F28C28]',
    },
  ];

  return (
    <div className="flex flex-col">

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden gradient-brand">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 islamic-geo-bg opacity-100 pointer-events-none"></div>
        {/* Soft radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#27B5E8]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto"
          >


            {/* Bismillah */}
            <p className="text-[#27B5E8] text-2xl md:text-3xl mb-4 font-arabic animate-float">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>

            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#53B32E]/20 border border-[#53B32E]/40 text-[#7ED321] text-sm font-bold tracking-wider uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ED321] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7ED321]"></span>
              </span>
              {t('Admissions Open 2026', 'داخلہ جات جاری ہیں 2026')}
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              {t('Empowering Faith,', 'ایمان، علم اور')} <span className="text-[#7ED321]">{t('Knowledge &', 'مستقبل')}</span><br />
              <span className="text-[#27B5E8]">{t('Future', 'کو مضبوط بنانا')}</span>
            </h1>

            <p className="text-blue-100/85 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              {t(
                'A trusted Islamic educational institution dedicated to nurturing Deen, character, and academic excellence for the next generation.',
                'ایک قابل اعتماد اسلامی تعلیمی ادارہ جو اگلی نسل کے لیے دین، کردار اور تعلیمی فضیلت کی پرورش کے لیے وقف ہے۔'
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admission">
                <button className="btn-orange text-base px-10 py-4 rounded-xl font-bold shadow-2xl shadow-orange-900/30 hover:scale-105 transition-transform">
                  {t('Apply Now', 'ابھی درخواست دیں')}
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link href="/our-institution">
                <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white text-base px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                  <Play className="inline mr-2 h-5 w-5" />
                  {t('Explore Our Institution', 'ہمارا ادارہ دیکھیں')}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ===================== STATS SECTION ===================== */}
      <section className="relative -mt-2 z-10 pb-0 bg-white">
        <div className="container mx-auto px-6 pb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`${stat.bg} border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1`}
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <p className={`text-3xl md:text-4xl font-black ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT PREVIEW ===================== */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="relative"
            >
              <div className="absolute -left-8 -top-8 w-48 h-48 bg-[#27B5E8]/10 rounded-full blur-3xl"></div>
              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E9EEF4] text-[#1E5DBB] text-xs font-bold uppercase tracking-widest">
                  <Landmark className="h-3.5 w-3.5" />
                  {t('Est. 2024 — Nashik, India', 'قائم شدہ 2024 — ناشک، ہندوستان')}
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] leading-tight">
                  {t('Welcome to', 'ابوبکر')} <span className="text-[#53B32E]">{t('Abu Bakar', 'فاؤنڈیشن میں')}</span><br />{t('Foundation', 'خوش آمدید')}
                </h2>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  {t(
                    'Founded with the vision of providing comprehensive Islamic education that bridges traditional scholarship with the needs of the modern world. Our institution is a place of Quran, knowledge, character and community.',
                    'ایک ایسی جامع اسلامی تعلیم فراہم کرنے کے وژن کے ساتھ قائم کیا گیا جو روایتی علم کو جدید دنیا کی ضروریات سے جوڑتی ہے۔ ہمارا ادارہ قرآن، علم، کردار اور کمیونٹی کی جگہ ہے۔'
                  )}
                </p>
                <div className="space-y-3">
                  {[
                    t('Authentic Islamic education with certified Ijazah', 'مستند اجازت نامے کے ساتھ اصیل اسلامی تعلیم'),
                    t('Dedicated Hifz & Dars-e-Nizami programs', 'مخصوص حفظ اور درسِ نظامی پروگرام'),
                    t('Online classes available for students globally', 'دنیا بھر کے طلباء کے لیے آن لائن کلاسز'),
                    t('Separate & safe female department', 'علیحدہ اور محفوظ شعبہ طالبات'),
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#53B32E] shrink-0" />
                      <span className="text-zinc-700 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/about">
                    <button className="btn-primary text-sm py-3 px-7 rounded-xl">
                      {t('Read Our Story', 'ہماری کہانی پڑھیں')}
                      <ArrowRight className="inline ml-2 h-4 w-4" />
                    </button>
                  </Link>
                  <Link href="/our-institution">
                    <button className="btn-green text-sm py-3 px-7 rounded-xl">
                      {t('Our Institution', 'ہمارا ادارہ')}
                      <ChevronRight className="inline ml-1 h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#1E5DBB] rounded-3xl rotate-3 -z-10"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white aspect-[4/3]">
                <Image src="/madrasa-campus.jpg" alt="Abu Bakar Foundation Campus" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/30">
                    <p className="text-white font-bold text-sm">{t('"The best among you is the one who learns Quran and teaches it."', '"تم میں سے بہترین وہ ہے جو قرآن سیکھے اور سکھائے۔"')}</p>
                    <p className="text-[#7ED321] text-xs font-bold mt-1">— {t('Prophet Muhammad ﷺ', 'حضور نبی اکرم ﷺ')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== OUR INSTITUTION PREVIEW ===================== */}
      <section className="section-padding bg-[#E9EEF4] overflow-hidden relative">
        <div className="absolute inset-0 islamic-geo-bg opacity-50 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block text-[#53B32E] font-bold tracking-widest uppercase text-xs mb-3">{t('Discover More', 'مزید دریافت کریں')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] mb-4">
              {t('Our Institution', 'ہمارا ادارہ')}
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              {t('A place of Islamic learning, character building, academic growth and spiritual development.', 'اسلامی تعلیم، کردار سازی، تعلیمی ترقی اور روحانی نشوونما کی جگہ۔')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: BookOpen, title: t('Quran & Hafiz Program', 'قرآن اور حفظ پروگرام'), desc: t('Dedicated Hifz program with expert teachers and Tajweed focus.', 'ماہر اساتذہ اور تجوید فوکس کے ساتھ مخصوص حفظ پروگرام۔'), color: '#1E5DBB' },
              { icon: Users, title: t('50+ Qualified Faculty', '50+ مستند اساتذہ'), desc: t('All faculty are certified scholars with authentic Ijazah chains.', 'تمام اساتذہ مستند علماء ہیں جن کے پاس اصلی اسناد ہیں۔'), color: '#53B32E' },
              { icon: Globe, title: t('Campus & Online', 'کیمپس اور آن لائن'), desc: t('Study on campus in Nashik or join globally through our online portal.', 'ناشک میں کیمپس پر پڑھیں یا آن لائن پورٹل کے ذریعے شامل ہوں۔'), color: '#F28C28' },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="bg-white rounded-2xl p-8 border border-[#d0dce8] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white" style={{ backgroundColor: item.color }}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl text-[#0B3D91] mb-3">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/our-institution">
              <button className="btn-primary text-base py-4 px-10 rounded-xl">
                {t('Learn More About Our Institution', 'ہمارے ادارے کے بارے میں مزید جانیں')}
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== PROGRAMS / EDUCATION HIGHLIGHTS ===================== */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block text-[#1E5DBB] font-bold tracking-widest uppercase text-xs mb-3">{t('Education', 'تعلیم')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] mb-4">
              {t('Programs & Education Highlights', 'پروگرام اور تعلیمی جھلکیاں')}
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              {t('From foundational Quran learning to advanced Islamic sciences — find your path here.', 'بنیادی قرآن تعلیم سے لے کر جدید اسلامی علوم تک — یہاں اپنا راستہ تلاش کریں۔')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative bg-white rounded-2xl p-8 border border-[#E9EEF4] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full -mr-8 -mt-8 opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: prog.color }}></div>
                <div className="absolute top-5 right-5 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: prog.color }}>
                  {prog.tag}
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white" style={{ backgroundColor: prog.color }}>
                  <prog.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl text-[#0B3D91] mb-3 group-hover:text-[#1E5DBB] transition-colors">{prog.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0B3D91, #1E5DBB 60%, #27B5E8)' }}>
        <div className="absolute inset-0 islamic-geo-bg opacity-100 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block text-[#7ED321] font-bold tracking-widest uppercase text-xs mb-3">{t('Why Us', 'ہمیں کیوں')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
              {t('Why Choose Abu Bakar Foundation?', 'ابوبکر فاؤنڈیشن کیوں چنیں؟')}
            </h2>
            <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
              {t("Our institution stands apart through our commitment to authentic Islamic education and holistic student development.", "ہمارا ادارہ مستند اسلامی تعلیم اور جامع طلبا کی ترقی کے لیے اپنے عزم کے ذریعے الگ نظر آتا ہے۔")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-blue-100/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L1440 50L1440 15C1200 50 960 0 720 15C480 30 240 0 0 15L0 50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block text-[#53B32E] font-bold tracking-widest uppercase text-xs mb-3">{t('Community Voice', 'کمیونٹی کی آواز')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] mb-4">
              {t('What Families Say', 'خاندان کیا کہتے ہیں')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t_item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#E9EEF4] rounded-2xl p-8 border border-[#d0dce8] hover:shadow-lg transition-all"
              >
                <Quote className="h-8 w-8 text-[#1E5DBB] mb-5 opacity-40" />
                <p className="text-zinc-700 text-base leading-relaxed mb-6 font-medium italic">"{t_item.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#d0dce8]">
                  <div className={`w-10 h-10 rounded-full ${t_item.color} flex items-center justify-center text-white text-xs font-black`}>
                    {t_item.initials}
                  </div>
                  <div>
                    <p className="font-bold text-[#0B3D91] text-sm">{t_item.name}</p>
                    <p className="text-zinc-400 text-xs">{t_item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DONATION SECTION ===================== */}
      <section className="section-padding bg-[#E9EEF4] relative overflow-hidden">
        <div className="absolute inset-0 islamic-geo-bg opacity-50 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border border-[#d0dce8]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F28C28] flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-[#0B3D91] mb-6">
                {t('Support Islamic Education', 'اسلامی تعلیم کی حمایت کریں')}
              </h2>
              <p className="text-zinc-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {t(
                  'Your donation helps us provide quality Islamic education to deserving students. Every contribution counts.',
                  'آپ کا عطیہ ہمیں مستحق طلباء کو معیاری اسلامی تعلیم فراہم کرنے میں مدد کرتا ہے۔ ہر تعاون اہمیت رکھتا ہے۔'
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/donation">
                  <button className="btn-orange text-base py-4 px-10 rounded-xl font-bold">
                    <Heart className="inline mr-2 h-5 w-5" />
                    {t('Make a Donation', 'عطیہ دیں')}
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="btn-primary text-base py-4 px-10 rounded-xl font-bold">
                    {t('Contact Us', 'ہم سے رابطہ کریں')}
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== ADMISSION CTA ===================== */}
      <section className="section-padding gradient-green relative overflow-hidden">
        <div className="absolute inset-0 islamic-geo-bg opacity-100 pointer-events-none"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6">
              {t('Begin Your Journey of Knowledge', 'علم کا سفر شروع کریں')}
            </h2>
            <p className="text-green-50/85 text-xl mb-10 max-w-3xl mx-auto">
              {t(
                'Admissions are open for 2026. Limited seats available for campus and online programs. Join our growing community of learners today.',
                '2026 کے لیے داخلے جاری ہیں۔ کیمپس اور آن لائن پروگراموں کے لیے محدود نشستیں دستیاب ہیں۔ آج ہماری بڑھتی ہوئی طلباء برادری میں شامل ہوں۔'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/admission">
                <button className="bg-white text-[#53B32E] font-black text-lg py-4 px-12 rounded-xl hover:bg-green-50 transition-all shadow-2xl hover:scale-105">
                  {t('Apply for Admission', 'داخلے کے لیے درخواست دیں')}
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white/15 border border-white/40 text-white font-bold text-lg py-4 px-12 rounded-xl hover:bg-white/25 transition-all backdrop-blur-sm">
                  {t('Ask a Question', 'سوال پوچھیں')}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
