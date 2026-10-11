"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion, Variants } from 'framer-motion';
import {
  History, Target, Eye, Quote, ArrowRight, ShieldCheck, Heart, Sparkles,
  BookOpen, Users, GraduationCap, Building2, Globe, CheckCircle, Landmark
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }),
};

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: ShieldCheck, title: t('Authenticity', 'صداقت'), desc: t('Traditional teachings with pure chains of transmission (Isnad).', 'خالص اسناد کے ساتھ روایتی تعلیمات۔'), color: '#1E5DBB' },
    { icon: Heart, title: t('Compassion', 'شفقت'), desc: t('Nurturing environment for spiritual and mental growth of every student.', 'ہر طالب علم کی روحانی اور ذہنی نشوونما کے لیے پرورش بخش ماحول۔'), color: '#53B32E' },
    { icon: Sparkles, title: t('Excellence', 'فضیلت'), desc: t('Striving for the highest academic and spiritual standards in both worlds.', 'دونوں جہانوں میں اعلیٰ ترین تعلیمی اور روحانی معیار کے لیے جدوجہد۔'), color: '#F28C28' },
  ];

  const achievements = [
    { value: '2024', label: t('Year Founded', 'قیام کا سال'), color: '#1E5DBB' },
    { value: '2,000+', label: t('Active Students', 'فعال طلباء'), color: '#53B32E' },
    { value: '50+', label: t('Qualified Faculty', 'مستند اساتذہ'), color: '#F28C28' },
    { value: '500+', label: t('Alumni Graduated', 'فارغ التحصیل'), color: '#0B3D91' },
    { value: '15+', label: t('Programs Offered', 'دستیاب پروگرام'), color: '#27B5E8' },
    { value: '100%', label: t('Certified Ijazah', 'مستند اجازت'), color: '#53B32E' },
  ];

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden gradient-brand">
        <div className="absolute inset-0 islamic-geo-bg opacity-100 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#27B5E8]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/30 text-[#7ED321] text-sm font-bold tracking-widest uppercase mb-6">
              {t('About Our Institution', 'ہمارے ادارے کے بارے میں')}
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6">
              {t('Faith, Knowledge,', 'ایمان، علم،')} <br />
              <span className="text-[#27B5E8]">{t('& Legacy', 'اور روایت')}</span>
            </h1>
            <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              {t(
                'A journey of spiritual enlightenment and academic excellence that began in 2024.',
                'روحانی روشنی اور تعلیمی فضیلت کا ایک سفر جو 2024 میں شروع ہوا۔'
              )}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L1440 50L1440 15C1200 50 960 0 720 15C480 30 240 0 0 15L0 50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((a, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-center py-5 px-3 rounded-2xl bg-[#E9EEF4] border border-[#d0dce8]">
                <p className="text-2xl md:text-3xl font-black mb-1" style={{ color: a.color }}>{a.value}</p>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">{a.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy & History */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="relative">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#27B5E8]/10 rounded-full blur-3xl opacity-50"></div>
              <div className="relative space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 gap-1 flex">
                    <div className="w-8 h-full bg-[#1E5DBB] rounded-full"></div>
                    <div className="w-2 h-full bg-[#27B5E8] rounded-full"></div>
                  </div>
                  <span className="font-bold text-[#1E5DBB] tracking-wider uppercase text-sm">{t('Founded 2024', 'قائم شدہ 2024')}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0B3D91] leading-tight">
                  {t('A New Chapter in Islamic Excellence', 'اسلامی فضیلت میں ایک نیا باب')}
                </h2>
                <div className="space-y-5 text-zinc-600 text-lg leading-relaxed">
                  <p>{t('Abu Bakar Foundation was established with the vision of providing a comprehensive Islamic education that meets the challenges of the modern world without compromising on traditional values.', 'ابوبکر فاؤنڈیشن اس وژن کے ساتھ قائم کیا گیا تھا کہ ایک جامع اسلامی تعلیم فراہم کی جائے جو روایتی اقدار پر سمجھوتہ کیے بغیر جدید دنیا کے چیلنجوں کا مقابلہ کر سکے۔')}</p>
                  <p>{t('Since our founding, we have grown into a recognized center for Islamic scholarship, hosting students from all walks of life, including both on-campus and online learners across the globe.', 'اپنے قیام کے بعد سے، ہم اسلامی علم کے تسلیم شدہ مرکز بن گئے ہیں، جن میں کیمپس اور آن لائن — دونوں قسم کے طلباء شامل ہیں۔')}</p>
                  <p>{t('Our qualified faculty members hold authentic Ijazahs (chains of transmission) connecting them directly to the Prophet ﷺ, ensuring that every student receives the most authentic knowledge.', 'ہمارے مستند اساتذہ کے پاس حقیقی اجازتیں ہیں جو انہیں براہِ راست نبی ﷺ سے جوڑتی ہیں۔')}</p>
                </div>
                <div className="pt-2">
                  <Link href="/gallery">
                    <button className="btn-primary text-sm py-3 px-8 rounded-xl">
                      {t('View Our Gallery', 'ہماری گیلری دیکھیں')}
                      <ArrowRight className="inline ml-2 h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="relative group">
              <div className="absolute inset-0 bg-[#1E5DBB] rounded-3xl rotate-3 group-hover:rotate-0 transition-transform -z-10"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white aspect-square">
                <Image src="/madrasa-campus.jpg" alt="Madrasa Interior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#E9EEF4] relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-12 rounded-3xl border border-[#d0dce8] shadow-xl hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-[#1E5DBB] flex items-center justify-center mb-8">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6 text-[#0B3D91]">{t('Our Mission', 'ہمارا مشن')}</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                {t('To empower students with authentic Islamic knowledge and high moral character, preparing them to be compassionate leaders and beneficial citizens of the global community.', 'طلباء کو مستند اسلامی علم اور اعلیٰ اخلاقی کردار کے ساتھ بااختیار بنانا، انہیں عالمی برادری کے ہمدرد رہنما اور مفید شہری بننے کے لیے تیار کرنا۔')}
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-12 rounded-3xl border border-[#d0dce8] shadow-xl hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-[#53B32E] flex items-center justify-center mb-8">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6 text-[#0B3D91]">{t('Our Vision', 'ہمارا وژن')}</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                {t('To become a leading light of Islamic scholarship where traditional wisdom meets contemporary relevance, nurturing generations of believers who thrive in faith and intellect.', 'اسلامی اسکالرشپ کا ایک اہم نور بننا جہاں روایتی حکمت معاصر مطابقت رکھتی ہے، مومنین کی ان نسلوں کی پرورش کرنا جو ایمان اور عقل میں ترقی کرتی ہیں۔')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6 text-[#0B3D91]">
              {t('Core Values That Guide Us', 'بنیادی اقدار جو ہماری رہنمائی کرتی ہیں')}
            </h2>
            <div className="h-1.5 w-24 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #1E5DBB, #53B32E)' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group p-10 rounded-3xl border border-[#d0dce8] bg-[#E9EEF4] hover:bg-white hover:shadow-2xl transition-all text-center"
              >
                <div className="w-14 h-14 rounded-2xl text-white flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform" style={{ backgroundColor: v.color }}>
                  <v.icon className="h-7 w-7" />
                </div>
                <h4 className="font-display text-2xl font-bold mb-4 text-[#0B3D91]">{v.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding relative overflow-hidden gradient-brand text-white">
        <div className="absolute inset-0 islamic-geo-bg opacity-100 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative mx-auto lg:mx-0">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl border-8 border-white/10 overflow-hidden shadow-2xl bg-[#0B3D91] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 rounded-full bg-[#1E5DBB] flex items-center justify-center text-4xl font-black mx-auto mb-4">MA</div>
                    <p className="font-bold text-blue-200 text-sm">{t('Principal', 'پرنسپل')}</p>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-[#F28C28] rounded-2xl flex items-center justify-center shadow-xl">
                  <Quote className="h-9 w-9 text-white fill-current" />
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
                <h3 className="text-[#7ED321] font-black uppercase tracking-[0.2em] text-sm">{t("Principal's Message", "پرنسپل کا پیغام")}</h3>
                <p className="text-2xl md:text-3xl font-display leading-[1.6] italic text-blue-50">
                  {t('"Our commitment at Abu Bakar Foundation is to cultivate not just minds, but hearts. We believe that true success lies in the balance between rigorous academic pursuit and deep spiritual connection."', '"ابوبکر فاؤنڈیشن میں ہمارا عزم صرف ذہنوں کو نہیں بلکہ دلوں کو پروان چڑھانا ہے۔ ہمارا ماننا ہے کہ حقیقی کامیابی سخت تعلیمی جدوجہد اور گہرے روحانی تعلق کے درمیان توازن میں مضمر ہے۔"')}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xl font-bold">{t('Sheikh Maulana Ahmed Ali', 'شیخ مولانا احمد علی')}</p>
                  <p className="text-[#27B5E8] font-medium">{t('Principal & Senior Scholar, Abu Bakar Foundation', 'پرنسپل اور سینئر عالم، ابوبکر فاؤنڈیشن')}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6 text-[#0B3D91]">
              {t('Become Part of Our Learning Community', 'ہماری سیکھنے والی برادری کا حصہ بنیں')}
            </h2>
            <p className="text-zinc-500 text-lg mb-10">
              {t('Join thousands of students already benefitting from our world-class Islamic education programs.', 'ہزاروں طلباء میں شامل ہوں جو پہلے سے ہمارے اسلامی تعلیمی پروگراموں سے مستفید ہو رہے ہیں۔')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admission">
                <button className="btn-green text-base py-4 px-10 rounded-xl">
                  {t('Apply for Admission', 'داخلے کے لیے درخواست دیں')}
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-primary text-base py-4 px-10 rounded-xl">
                  {t('Get in Touch', 'رابطہ کریں')}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
