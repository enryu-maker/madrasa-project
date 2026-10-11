"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion, Variants } from 'framer-motion';
import {
  BookOpen, Users, GraduationCap, Globe, Shield, Heart, Sparkles, Award,
  CheckCircle, ArrowRight, Target, Eye, Building2, Wifi, BookMarked,
  Landmark, MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, Star, Layers,
  Quote, Leaf, Zap, Trophy, UserCheck
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }),
};

const FAQ_ITEMS = (t: (en: string, ur: string) => string) => [
  {
    q: t('Who can enroll in Abu Bakar Foundation?', 'ابوبکر فاؤنڈیشن میں کون داخلہ لے سکتا ہے؟'),
    a: t('We welcome students of all ages — children, youth, and adults. Both male and female students are admitted with separate facilities for sisters.', 'ہم تمام عمر کے طلباء کا خیرمقدم کرتے ہیں — بچے، نوجوان اور بڑے۔ مرد اور خواتین دونوں طلباء کو علیحدہ سہولیات کے ساتھ داخل کیا جاتا ہے۔')
  },
  {
    q: t('Is online learning available?', 'کیا آن لائن تعلیم دستیاب ہے؟'),
    a: t('Yes! We offer live and recorded classes online for students who cannot attend campus. Our online portal is available 24/7.', 'جی ہاں! ہم ان طلباء کے لیے آن لائن لائیو اور ریکارڈ شدہ کلاسز پیش کرتے ہیں جو کیمپس نہیں آ سکتے۔ ہمارا آن لائن پورٹل 24/7 دستیاب ہے۔')
  },
  {
    q: t('Do your teachers hold authentic Ijazah?', 'کیا آپ کے اساتذہ کے پاس مستند اجازت نامہ ہے؟'),
    a: t('All of our faculty members hold verified Ijazah chains directly linked to the traditions of the Prophet ﷺ. This is a core standard at our institution.', 'ہمارے تمام اساتذہ کے پاس تصدیق شدہ اسناد ہیں جو براہ راست نبی ﷺ کی روایات سے جڑی ہیں۔ یہ ہمارے ادارے کا بنیادی معیار ہے۔')
  },
  {
    q: t('Is the institution safe for female students?', 'کیا ادارہ طالبات کے لیے محفوظ ہے؟'),
    a: t('Absolutely. We have a fully separate, dedicated female department with female staff. The environment is strictly maintained for comfort and safety.', 'بالکل۔ ہمارے پاس خواتین عملے کے ساتھ مکمل طور پر علیحدہ، مخصوص شعبہ طالبات ہے۔ ماحول کو آرام اور حفاظت کے لیے سختی سے برقرار رکھا جاتا ہے۔')
  },
  {
    q: t('What programs are offered?', 'کون سے پروگرام دستیاب ہیں؟'),
    a: t('We offer Hifz-ul-Quran, Tajweed, Dars-e-Nizami (8-year Aalim course), Hadith sciences, Fiqh, Aalimah course for sisters, and online Quran classes.', 'ہم حفظ القرآن، تجوید، درسِ نظامی (8 سالہ عالم کورس)، علوم حدیث، فقہ، بہنوں کے لیے عالمہ کورس اور آن لائن قرآن کلاسز پیش کرتے ہیں۔')
  },
  {
    q: t('How do I apply for admission?', 'داخلے کے لیے کیسے درخواست دیں؟'),
    a: t('Visit our Admissions page or contact us on WhatsApp at +91 6306866039. Our admissions team will guide you through every step.', 'ہمارا داخلہ صفحہ ملاحظہ کریں یا ہم سے واٹس ایپ پر +91 6306866039 پر رابطہ کریں۔ ہماری داخلہ ٹیم آپ کو ہر قدم پر رہنمائی کرے گی۔')
  },
];

export default function OurInstitution() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const coreValues = [
    { icon: BookOpen, title: t('Faith (Iman)', 'ایمان'), desc: t('Building strong, unwavering Iman in every student.', 'ہر طالب علم میں مضبوط، ثابت قدم ایمان کی تعمیر۔'), color: '#1E5DBB' },
    { icon: Star, title: t('Knowledge (Ilm)', 'علم'), desc: t('Authentic Islamic and academic knowledge acquisition.', 'مستند اسلامی اور تعلیمی علم کا حصول۔'), color: '#53B32E' },
    { icon: Heart, title: t('Respect (Adab)', 'ادب'), desc: t('Teaching proper manners, respect for self and others.', 'مناسب آداب، اپنے اور دوسروں کے احترام کی تعلیم۔'), color: '#F28C28' },
    { icon: Shield, title: t('Discipline (Nizam)', 'نظم'), desc: t('A structured and disciplined environment for focused learning.', 'مرکوز تعلیم کے لیے منظم اور نظم و ضبط والا ماحول۔'), color: '#0B3D91' },
    { icon: UserCheck, title: t('Integrity (Amanah)', 'امانت'), desc: t('Developing honest, trustworthy and reliable character.', 'ایماندار، قابل اعتماد اور قابل بھروسہ کردار کی نشوونما۔'), color: '#27B5E8' },
    { icon: Leaf, title: t('Compassion (Rahma)', 'رحمت'), desc: t('Cultivating mercy, empathy and care for all of creation.', 'تمام مخلوق کے لیے رحم، ہمدردی اور خیال کی پرورش۔'), color: '#53B32E' },
    { icon: Trophy, title: t('Excellence (Ihsan)', 'احسان'), desc: t('Striving for perfection in worship, study and character.', 'عبادت، تعلیم اور کردار میں کمال کے لیے جدوجہد۔'), color: '#1E5DBB' },
    { icon: Users, title: t('Service (Khidmah)', 'خدمت'), desc: t("Instilling the spirit of serving one's community and Ummah.", 'اپنی کمیونٹی اور امت کی خدمت کا جذبہ پیدا کرنا۔'), color: '#F28C28' },
  ];

  const differences = [
    { icon: BookOpen, title: t('Islamic + Modern Education', 'اسلامی + جدید تعلیم'), desc: t('We balance traditional Islamic knowledge with modern academic support.', 'ہم روایتی اسلامی علم کو جدید تعلیمی معاونت کے ساتھ متوازن کرتے ہیں۔') },
    { icon: GraduationCap, title: t('Qualified, Certified Faculty', 'تعلیم یافتہ، مستند اساتذہ'), desc: t('Every teacher holds verified Ijazah with authenticated chains of transmission.', 'ہر استاد کے پاس تصدیق شدہ اسناد کے ساتھ تصدیق شدہ اجازت نامہ ہے۔') },
    { icon: Shield, title: t('Safe & Structured Campus', 'محفوظ اور منظم کیمپس'), desc: t('A strictly maintained, family-friendly environment for all students.', 'تمام طلباء کے لیے سختی سے برقرار، خاندان دوست ماحول۔') },
    { icon: Users, title: t('Parent Involvement', 'والدین کی شمولیت'), desc: t('Regular communication, updates and community engagement with families.', 'خاندانوں کے ساتھ باقاعدہ رابطہ، اپ ڈیٹس اور کمیونٹی مشغولیت۔') },
    { icon: Heart, title: t('Student Support', 'طلبا کی معاونت'), desc: t('Personalized attention and mentoring for every student\'s growth.', 'ہر طالب علم کی ترقی کے لیے ذاتی توجہ اور رہنمائی۔') },
    { icon: Wifi, title: t('Online + Offline Learning', 'آن لائن + آف لائن تعلیم'), desc: t('Flexible study options — attend campus or study from home globally.', 'لچکدار مطالعہ کے اختیارات — کیمپس آئیں یا گھر سے دنیا بھر میں پڑھیں۔') },
    { icon: Sparkles, title: t('Character Development', 'کردار سازی'), desc: t('Tarbiyah programs that build Akhlaq, confidence and leadership.', 'تربیتی پروگرام جو اخلاق، اعتماد اور قیادت بناتے ہیں۔') },
    { icon: Star, title: t('Quran & Sunnah Focus', 'قرآن اور سنت فوکس'), desc: t('Every aspect of education is rooted in the Quran and Prophetic tradition.', 'تعلیم کا ہر پہلو قرآن اور نبوی روایت میں جڑا ہوا ہے۔') },
  ];

  const facilities = [
    { icon: Building2, title: t('Modern Classrooms', 'جدید کلاس رومز'), desc: t('Well-equipped, comfortable classrooms for focused learning.', 'مرکوز تعلیم کے لیے بخوبی لیس، آرام دہ کلاس رومز۔'), color: '#1E5DBB' },
    { icon: Heart, title: t('Prayer Area', 'نماز کا علاقہ'), desc: t('Dedicated Musalla for five daily prayers and spiritual reflection.', 'پانچ روزانہ نمازوں اور روحانی غور و فکر کے لیے مخصوص مصلہ۔'), color: '#53B32E' },
    { icon: BookOpen, title: t('Quran Learning Space', 'قرآن سیکھنے کی جگہ'), desc: t('Quiet, focused rooms dedicated to Quran memorization and recitation.', 'قرآن حفظ اور تلاوت کے لیے خاموش، مرکوز کمرے۔'), color: '#F28C28' },
    { icon: BookMarked, title: t('Library (5,000+ Books)', 'لائبریری (5,000 سے زائد کتابیں)'), desc: t('Extensive Islamic and academic library for research and learning.', 'تحقیق اور تعلیم کے لیے وسیع اسلامی اور تعلیمی لائبریری۔'), color: '#0B3D91' },
    { icon: Wifi, title: t('Digital Learning Portal', 'ڈیجیٹل لرننگ پورٹل'), desc: t('24/7 online portal with recorded lectures, resources and tests.', '24/7 آن لائن پورٹل ریکارڈ شدہ لیکچرز، وسائل اور ٹیسٹ کے ساتھ۔'), color: '#27B5E8' },
    { icon: Shield, title: t('Safe Campus', 'محفوظ کیمپس'), desc: t('Secured, monitored premises with separate blocks for male and female students.', 'محفوظ، نگرانی شدہ احاطہ مرد اور خواتین طلباء کے لیے علیحدہ بلاکس کے ساتھ۔'), color: '#53B32E' },
  ];

  const developmentCards = [
    { icon: Sparkles, title: t('Spiritual Growth', 'روحانی نشوونما'), color: '#1E5DBB' },
    { icon: GraduationCap, title: t('Academic Excellence', 'تعلیمی فضیلت'), color: '#53B32E' },
    { icon: Zap, title: t('Confidence Building', 'اعتماد کی تعمیر'), color: '#F28C28' },
    { icon: Trophy, title: t('Leadership Skills', 'قیادت کی مہارتیں'), color: '#0B3D91' },
    { icon: Users, title: t('Communication', 'مواصلات'), color: '#27B5E8' },
    { icon: Shield, title: t('Discipline & Focus', 'نظم و ضبط'), color: '#53B32E' },
  ];

  const milestones = [
    { year: '2024', label: t('Foundation Established', 'ادارہ قائم ہوا'), detail: t('Abu Bakar Foundation officially launched in Nashik with its first batch.', 'ابوبکر فاؤنڈیشن باضابطہ طور پر ناشک میں اپنے پہلے بیچ کے ساتھ شروع ہوئی۔') },
    { year: '2024', label: t('Hifz Department Opened', 'شعبہ حفظ کا آغاز'), detail: t('A dedicated Hifz ul Quran program with qualified Huffaz teachers established.', 'مستند حافظ اساتذہ کے ساتھ مخصوص حفظ القرآن پروگرام قائم ہوا۔') },
    { year: '2025', label: t('Online Classes Launched', 'آن لائن کلاسز کا آغاز'), detail: t('Extended reach globally through live and recorded online Islamic education.', 'لائیو اور ریکارڈ شدہ آن لائن اسلامی تعلیم کے ذریعے عالمی رسائی میں اضافہ۔') },
    { year: '2025', label: t('Female Department Added', 'شعبہ طالبات'), detail: t('A fully equipped, separate female department inaugurated with female faculty.', 'خواتین اساتذہ کے ساتھ مکمل طور پر لیس، علیحدہ شعبہ طالبات کا افتتاح۔') },
    { year: '2026', label: t('2,000+ Students Reached', '2,000 سے زائد طلباء'), detail: t('Major milestone of 2,000+ active students enrolled across campus and online.', 'کیمپس اور آن لائن میں 2,000 سے زائد فعال طلباء کی بڑی کامیابی۔') },
  ];

  const approachItems = [
    { title: t('Quran Recitation & Memorization', 'قرآن تلاوت اور حفظ'), desc: t('Structured Hifz programs with daily revision, Tajweed mastery, and personal attention from expert Huffaz.', 'روزانہ مراجعت، تجوید میں مہارت اور ماہر حفاظ کی ذاتی توجہ کے ساتھ منظم حفظ پروگرام۔') },
    { title: t('Islamic Understanding (Fiqh & Hadith)', 'اسلامی فہم (فقہ اور حدیث)'), desc: t('Deep study of classical texts, Islamic law, Hadith sciences and Aqeedah to build robust Islamic knowledge.', 'مضبوط اسلامی علم بنانے کے لیے کلاسیکی متون، اسلامی قانون، علوم حدیث اور عقیدے کا گہرا مطالعہ۔') },
    { title: t('Akhlaq Training (Character)', 'اخلاق کی تربیت (کردار)'), desc: t('Character-building integrated into daily teaching with emphasis on Adab, honesty, and respect.', 'آداب، ایمانداری اور احترام پر زور دے کر روزانہ تعلیم میں کردار سازی کو شامل کرنا۔') },
    { title: t('Language Development', 'زبان کی ترقی'), desc: t('Arabic, Urdu, and English development to equip students for religious and worldly communication.', 'دینی اور دنیوی مواصلات کے لیے طلباء کو تیار کرنے کے لیے عربی، اردو اور انگریزی کی ترقی۔') },
    { title: t('Life Skills & Modern Knowledge', 'زندگی کی مہارتیں اور جدید علم'), desc: t('Practical real-world skills alongside Islamic studies to prepare balanced, capable graduates.', 'متوازن، قابل فارغ التحصیل تیار کرنے کے لیے اسلامی علوم کے ساتھ عملی حقیقی دنیا کی مہارتیں۔') },
  ];

  const faqs = FAQ_ITEMS(t);
  const galleryImages = [
    '/madrasa-campus.jpg',
    '/hero-mosque.jpg',
    '/jashn-e-gous-ul-wara.png',
    '/shaheedain-conference.png',
    '/urs-vakeel-ahmad-shah.png',
    '/madrasa-hero-vibrant.png',
  ];

  return (
    <div className="flex flex-col">

      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden gradient-brand">
        <div className="absolute inset-0 islamic-geo-bg opacity-100 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#27B5E8]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#53B32E]/20 border border-[#53B32E]/40 text-[#7ED321] text-sm font-bold tracking-wider uppercase mb-8">
              <Building2 className="h-4 w-4" />
              {t('Abu Bakar Foundation', 'ابوبکر فاؤنڈیشن')}
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              {t('Our', '')} <span className="text-[#27B5E8]">{t('Institution', 'ہمارا ادارہ')}</span>
            </h1>
            <p className="text-blue-100/85 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
              {t(
                'A Place of Islamic Learning, Character Building, and Academic Growth',
                'اسلامی تعلیم، کردار سازی اور تعلیمی ترقی کی جگہ'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admission">
                <button className="btn-orange text-base py-4 px-10 rounded-xl font-bold hover:scale-105 transition-transform">
                  {t('Admissions Open', 'داخلہ جاری ہے')}
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white/10 border border-white/30 text-white text-base py-4 px-10 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-sm">
                  {t('Contact Us', 'ہم سے رابطہ کریں')}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L1440 50L1440 15C1200 50 960 0 720 15C480 30 240 0 0 15L0 50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ============ QUICK STATS ============ */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { v: '2024', l: t('Est.', 'قیام'), color: '#1E5DBB' },
              { v: '2000+', l: t('Students', 'طلباء'), color: '#53B32E' },
              { v: '50+', l: t('Faculty', 'اساتذہ'), color: '#F28C28' },
              { v: '500+', l: t('Alumni', 'فارغین'), color: '#0B3D91' },
              { v: '15+', l: t('Programs', 'پروگرام'), color: '#27B5E8' },
              { v: '100%', l: t('Ijazah', 'مستند'), color: '#53B32E' },
            ].map((s, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-center py-5 px-3 rounded-2xl bg-[#E9EEF4] border border-[#d0dce8]">
                <p className="text-2xl md:text-3xl font-black mb-1" style={{ color: s.color }}>{s.v}</p>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT THE INSTITUTION ============ */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="space-y-7">
              <div>
                <span className="text-[#53B32E] font-bold tracking-widest uppercase text-xs block mb-3">{t('Who We Are', 'ہم کون ہیں')}</span>
                <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] leading-tight mb-5">
                  {t('About Our Institution', 'ہمارے ادارے کے بارے میں')}
                </h2>
              </div>
              <div className="space-y-5 text-zinc-600 text-base leading-relaxed">
                <p>{t('Abu Bakar Foundation was established in 2024 in Nashik, Maharashtra, India, with the vision of providing authentic and comprehensive Islamic education to students of all backgrounds.', 'ابوبکر فاؤنڈیشن 2024 میں ناشک، مہاراشٹرا، ہندوستان میں تمام پس منظر کے طلباء کو مستند اور جامع اسلامی تعلیم فراہم کرنے کے وژن کے ساتھ قائم کی گئی۔')}</p>
                <p>{t('Our educational philosophy is rooted in the beautiful balance between Deen and Dunya — nurturing students who are spiritually grounded, academically capable, and morally strong.', 'ہمارا تعلیمی فلسفہ دین اور دنیا کے درمیان خوبصورت توازن میں جڑا ہوا ہے — ایسے طلباء کی پرورش کرنا جو روحانی طور پر مضبوط، تعلیمی طور پر قابل اور اخلاقی طور پر مضبوط ہوں۔')}</p>
                <p>{t('We are deeply committed to Tarbiyah — the holistic development of the student as a Muslim, a human being, and a contributor to society.', 'ہم تربیت کے لیے گہری وابستگی رکھتے ہیں — ایک مسلمان، ایک انسان اور معاشرے میں شراکت دار کے طور پر طالب علم کی جامع ترقی۔')}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  t('Quran & Hafiz Programs', 'قرآن اور حفظ پروگرام'),
                  t('Dars-e-Nizami (Aalim Course)', 'درسِ نظامی'),
                  t('Online Learning Available', 'آن لائن تعلیم'),
                  t('Female Department', 'شعبہ طالبات'),
                  t('Character Development', 'کردار سازی'),
                  t('Certified Ijazah Faculty', 'مستند اجازت نامہ اساتذہ'),
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#53B32E] shrink-0" />
                    <span className="text-zinc-600 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="relative group">
              <div className="absolute inset-0 bg-[#1E5DBB] rounded-3xl rotate-3 group-hover:rotate-0 transition-transform -z-10"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white aspect-[4/3]">
                <Image src="/madrasa-campus.jpg" alt="Abu Bakar Foundation Campus" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ HISTORY / MILESTONE TIMELINE ============ */}
      <section className="section-padding bg-[#E9EEF4] relative overflow-hidden">
        <div className="absolute inset-0 islamic-geo-bg opacity-50 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-[#1E5DBB] font-bold tracking-widest uppercase text-xs block mb-3">{t('Our Journey', 'ہمارا سفر')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] mb-4">{t('History & Milestones', 'تاریخ اور سنگِ میل')}</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#1E5DBB]/20"></div>
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="relative pl-20">
                  <div className="absolute left-0 top-1 w-16 h-16 rounded-2xl flex items-center justify-center font-black text-white text-sm shadow-lg"
                    style={{ background: i % 2 === 0 ? '#1E5DBB' : '#53B32E' }}>
                    {m.year}
                  </div>
                  <div className="bg-white rounded-2xl p-7 border border-[#d0dce8] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-[#53B32E]" />
                      <h4 className="font-bold text-[#0B3D91] text-base">{m.label}</h4>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">{m.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ VISION & MISSION ============ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="rounded-3xl p-10 border-2 border-[#1E5DBB]/20 bg-gradient-to-br from-[#E9EEF4] to-white hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#1E5DBB] flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-3xl font-black text-[#0B3D91] mb-5">{t('Our Vision', 'ہمارا وژن')}</h3>
              <p className="text-zinc-600 text-base leading-relaxed">
                {t(
                  'To become a globally recognized center of Islamic scholarship where the light of Quran and Sunnah guides students to become compassionate, knowledgeable leaders and servants of Allah and His creation.',
                  'ایک عالمی سطح پر تسلیم شدہ اسلامی اسکالرشپ کا مرکز بننا جہاں قرآن و سنت کی روشنی طلباء کو ہمدرد، علم دار رہنما اور اللہ اور اس کی مخلوق کے خادم بننے کی رہنمائی کرے۔'
                )}
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="rounded-3xl p-10 border-2 border-[#53B32E]/20 bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#53B32E] flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-3xl font-black text-[#0B3D91] mb-5">{t('Our Mission', 'ہمارا مشن')}</h3>
              <p className="text-zinc-600 text-base leading-relaxed">
                {t(
                  'To provide authentic, comprehensive Islamic education that develops Iman, Akhlaq, and intellect — empowering every student to excel in their Deen, family, and society with knowledge and character.',
                  'مستند، جامع اسلامی تعلیم فراہم کرنا جو ایمان، اخلاق اور عقل کو پروان چڑھائے — ہر طالب علم کو علم اور کردار کے ساتھ اپنے دین، خاندان اور معاشرے میں بہترین ہونے کے لیے بااختیار بنانا۔'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ CORE VALUES ============ */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0B3D91, #1E5DBB 60%, #27B5E8)' }}>
        <div className="absolute inset-0 islamic-geo-bg opacity-100 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-[#7ED321] font-bold tracking-widest uppercase text-xs block mb-3">{t('What We Stand For', 'ہم کس بات کے لیے کھڑے ہیں')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4">{t('Core Values', 'بنیادی اقدار')}</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {coreValues.map((v, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <v.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-white text-sm mb-2">{v.title}</h4>
                <p className="text-blue-100/60 text-xs leading-relaxed">{v.desc}</p>
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

      {/* ============ WHAT MAKES US DIFFERENT ============ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-[#53B32E] font-bold tracking-widest uppercase text-xs block mb-3">{t('Our Edge', 'ہماری خصوصیت')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] mb-4">{t('What Makes Us Different', 'ہمیں کیا خاص بناتا ہے')}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {differences.map((d, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group bg-[#E9EEF4] hover:bg-white rounded-2xl p-6 border border-[#d0dce8] hover:border-[#1E5DBB]/30 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#1E5DBB] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <d.icon className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-[#0B3D91] text-sm mb-2">{d.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FACILITIES ============ */}
      <section className="section-padding bg-[#E9EEF4] relative overflow-hidden">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-[#1E5DBB] font-bold tracking-widest uppercase text-xs block mb-3">{t('Campus', 'کیمپس')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] mb-4">{t('Our Facilities', 'ہماری سہولیات')}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
                className="bg-white rounded-2xl p-8 border border-[#d0dce8] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white" style={{ backgroundColor: f.color }}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-[#0B3D91] text-base mb-2">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EDUCATIONAL APPROACH ============ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-[#53B32E] font-bold tracking-widest uppercase text-xs block mb-3">{t('How We Teach', 'ہم کیسے پڑھاتے ہیں')}</span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] mb-8 leading-tight">
                {t('Our Educational Approach', 'ہمارا تعلیمی طریقہ')}
              </h2>
              <div className="space-y-6">
                {approachItems.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#1E5DBB] flex items-center justify-center text-white text-sm font-black shrink-0 mt-1">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B3D91] mb-1">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] border-4 border-white">
                <Image src="/hero-mosque.jpg" alt="Islamic Education" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/30">
                    <p className="text-white font-bold text-sm">{t('"Seek knowledge, for seeking it is worship of Allah."', '"علم حاصل کرو، کیونکہ علم حاصل کرنا اللہ کی عبادت ہے۔"')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ STUDENT DEVELOPMENT ============ */}
      <section className="section-padding bg-[#E9EEF4] overflow-hidden relative">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-[#F28C28] font-bold tracking-widest uppercase text-xs block mb-3">{t('Growth', 'ترقی')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] mb-4">{t('Student Development', 'طلبا کی ترقی')}</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {developmentCards.map((c, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
                className="bg-white rounded-2xl p-7 text-center border border-[#d0dce8] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-white" style={{ backgroundColor: c.color }}>
                  <c.icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-[#0B3D91] text-sm">{c.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARENTS TRUST SECTION ============ */}
      <section className="section-padding gradient-green relative overflow-hidden">
        <div className="absolute inset-0 islamic-geo-bg opacity-50 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6">
                {t('Parents Trust Us', 'والدین ہم پر بھروسہ کرتے ہیں')}
              </h2>
              <p className="text-green-50/85 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                {t(
                  'We understand the trust you place in us when you enroll your child. We ensure every student is safe, nurtured, respected, and given the best Islamic and academic guidance.',
                  'جب آپ اپنے بچے کا داخلہ کراتے ہیں تو ہم اس اعتماد کو سمجھتے ہیں جو آپ ہم پر رکھتے ہیں۔ ہم یقینی بناتے ہیں کہ ہر طالب علم محفوظ، پرورش یافتہ، معزز اور بہترین اسلامی اور تعلیمی رہنمائی دیا جائے۔'
                )}
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  t('Regular Parent-Teacher Communication', 'باقاعدہ والدین-اساتذہ مواصلات'),
                  t('Safe, monitored environment', 'محفوظ، نگرانی شدہ ماحول'),
                  t('Progress reports & updates', 'ترقی کی رپورٹس اور اپ ڈیٹس'),
                ].map((item, i) => (
                  <div key={i} className="bg-white/20 rounded-xl px-5 py-4 text-white text-sm font-semibold border border-white/20">
                    <CheckCircle className="h-4 w-4 inline mr-2 text-[#7ED321]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ GALLERY PREVIEW ============ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="text-[#1E5DBB] font-bold tracking-widest uppercase text-xs block mb-3">{t('Gallery', 'گیلری')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] mb-4">{t('Life at Our Institution', 'ہمارے ادارے میں زندگی')}</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all">
                <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#0B3D91]/0 group-hover:bg-[#0B3D91]/30 transition-all"></div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery">
              <button className="btn-primary text-sm py-3 px-8 rounded-xl">
                {t('View Full Gallery', 'مکمل گیلری دیکھیں')}
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section-padding bg-[#E9EEF4]">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-[#53B32E] font-bold tracking-widest uppercase text-xs block mb-3">{t('FAQ', 'اکثر پوچھے گئے سوالات')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] mb-4">{t('Common Questions', 'عام سوالات')}</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white rounded-2xl border border-[#d0dce8] overflow-hidden shadow-sm">
                <button
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-[#0B3D91] hover:bg-[#E9EEF4] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm md:text-base pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="h-5 w-5 text-[#1E5DBB] shrink-0" /> : <ChevronDown className="h-5 w-5 text-[#1E5DBB] shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-zinc-600 text-sm leading-relaxed border-t border-[#E9EEF4]">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT / LOCATION ============ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-[#F28C28] font-bold tracking-widest uppercase text-xs block mb-3">{t('Find Us', 'ہمیں تلاش کریں')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0B3D91] mb-4">{t('Contact & Location', 'رابطہ اور مقام')}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: t('Main Campus', 'مین کیمپس'),
                content: t('Plot No: 39, Gat No: 8A/8B, Kedarnath Colony, Virat Sankul, Sanjiv Nagar, Ambad Link Road, Nashik, MH, India', 'پلاٹ نمبر: 39، گٹ نمبر: 8A/8B، کیدارناتھ کالونی، وراٹ سنکل، سنجے ناگر، امباد لنک روڈ، ناشک، ایم ایچ، ہندوستان'),
                color: '#1E5DBB', link: null
              },
              {
                icon: Phone,
                title: t('WhatsApp', 'واٹس ایپ'),
                content: '+91 6306866039',
                color: '#53B32E', link: 'https://wa.me/916306866039'
              },
              {
                icon: Mail,
                title: t('Email', 'ای میل'),
                content: 'info@abubakarfoundation.org',
                color: '#F28C28', link: 'mailto:info@abubakarfoundation.org'
              },
              {
                icon: Clock,
                title: t('Office Hours', 'دفتری اوقات'),
                content: t('Mon–Sat: 9 AM – 6 PM\nSunday: Closed', 'پیر تا ہفتہ: صبح 9 تا شام 6\nاتوار: بند'),
                color: '#0B3D91', link: null
              },
            ].map((item, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-[#E9EEF4] rounded-2xl p-7 border border-[#d0dce8] hover:shadow-md transition-all group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-white" style={{ backgroundColor: item.color }}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#0B3D91] text-sm mb-2">{item.title}</h4>
                {item.link ? (
                  <a href={item.link} className="text-zinc-600 text-sm leading-relaxed hover:text-[#1E5DBB] transition-colors font-medium" target="_blank" rel="noopener noreferrer">
                    {item.content}
                  </a>
                ) : (
                  <p className="text-zinc-600 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ADMISSION CTA ============ */}
      <section className="section-padding gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 islamic-geo-bg opacity-100 pointer-events-none"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-[#7ED321] font-bold tracking-widest uppercase text-xs mb-4">{t('Enroll Today', 'آج داخلہ لیں')}</p>
            <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6">
              {t('Ready to Join Our Family?', 'ہماری فیملی میں شامل ہونے کے لیے تیار ہیں؟')}
            </h2>
            <p className="text-blue-100/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              {t('Admissions are open. Join thousands of students already on the path of knowledge and faith.', 'داخلے جاری ہیں۔ علم اور ایمان کی راہ پر پہلے سے موجود ہزاروں طلباء میں شامل ہوں۔')}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/admission">
                <button className="btn-orange text-base py-4 px-12 rounded-xl font-bold hover:scale-105 transition-transform">
                  {t('Apply for Admission', 'داخلے کے لیے درخواست دیں')}
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white/15 border border-white/30 text-white font-bold text-base py-4 px-12 rounded-xl hover:bg-white/25 transition-all">
                  {t('Contact Us', 'ہم سے رابطہ کریں')}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
