"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion, Variants } from 'framer-motion';
import { BookOpen, Star, GraduationCap, Clock, CheckCircle2, ArrowRight, Video, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }),
};

const Courses = () => {
  const { t } = useLanguage();

  const courseList = [
    {
      id: 1,
      icon: BookOpen,
      title: t('Quran Reading & Tajweed', 'قرآن ناظرہ اور تجوید'),
      duration: t('6-12 Months', '6-12 ماہ'),
      level: t('Beginner', 'ابتدائی'),
      desc: t('Focus on correct pronunciation and articulation from the foundational Noorani Qaida.', 'نورانی قاعدہ سے بنیادی تلفظ اور ادائیگی پر توجہ۔'),
      features: [t('Small Class Sizes', 'مختصر کلاسیں'), t('Personalized Feedback', 'انفرادی توجہ'), t('Daily Progress Report', 'روزانہ کی رپورٹ')],
      cta: t('Enroll Now', 'رپورٹ کریں'),
      color: 'emerald'
    },
    {
      id: 2,
      icon: Star,
      title: t('Hifz-ul-Quran', 'حفظ القرآن'),
      duration: t('2-4 Years', '2-4 سال'),
      level: t('Intermediate', 'متوسط'),
      desc: t('A comprehensive program for the memorization of the Holy Quran with review management.', 'نظرِ ثانی کے انتظام کے ساتھ قرآن پاک کو حفظ کرنے کا ایک جامع پروگرام۔'),
      features: [t('Review Management', 'دہرائی کا انتظام'), t('Voice Modulation', 'صوتی لہجہ'), t('Spiritual Counseling', 'روحانی مشاورت')],
      cta: t('Join Program', 'پروگرام میں شامل ہوں'),
      color: 'amber'
    },
    {
      id: 3,
      icon: GraduationCap,
      title: t('Islamic Studies (Aalim)', 'عالم کورس'),
      duration: t('8 Years', '8 سال'),
      level: t('Advanced', 'اعلیٰ'),
      desc: t('In-depth academic study of Hadith, Tafseer, Fiqh, and Arabic Literature.', 'حدیث، تفسیر، فقہ اور عربی ادب کا گہرا تعلیمی مطالعہ۔'),
      features: [t('Sarf & Nahw', 'صرف و نحو'), t('Usul-ul-Hadith', 'اصولِ حدیث'), t('Historical Research', 'تاریخی تحقیق')],
      cta: t('Apply Admission', 'داخلہ لیں'),
      color: 'blue'
    },
    {
      id: 4,
      icon: Video,
      title: t('Online Short Courses', 'آن لائن مختصر کورسز'),
      duration: t('3-6 Months', '3-6 ماہ'),
      level: t('All Levels', 'تمام سطحیں'),
      desc: t('Fatawa, Islamic History, and Seerah accessible globally via live streaming.', 'فتویٰ، اسلامی تاریخ اور سیرت لائیو سٹریمنگ کے ذریعے عالمی سطح پر دستیاب ہیں۔'),
      features: [t('Flexible Timings', 'لچکدار اوقات'), t('Recorded Lectures', 'ریکارڈ شدہ لیکچرز'), t('Certificates', 'اسناد')],
      cta: t('Enroll Online', 'آن لائن رجسٹر ہوں'),
      color: 'purple'
    },
    {
      id: 5,
      icon: Languages,
      title: t('Arabic Language Program', 'عربی زبان کا پروگرام'),
      duration: t('12 Months', '12 ماہ'),
      level: t('All Levels', 'تمام سطحیں'),
      desc: t('Master modern and classical Arabic for speaking and understanding Quran with ease.', 'بول چال اور قرآن کو آسانی سے سمجھنے کے لیے جدید اور کلاسیکی عربی میں مہارت۔'),
      features: [t('Conversation Practice', 'گفتگو کی مشق'), t('Translation Skills', 'ترجمے کی مہارت'), t('Poetry Analysis', 'شاعری کا تجزیہ')],
      cta: t('Join Course', 'کورس میں شامل ہوں'),
      color: 'rose'
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Soft Header with Glow */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-emerald-50/50 to-transparent dark:from-emerald-950/20 -z-10"></div>
        <div className="container mx-auto px-6 text-center">
           <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <h1 className="font-display text-5xl md:text-7xl font-black text-emerald-900 dark:text-white mb-6">
                {t('Our Programs', 'ہمارے پروگرام')}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {t(
                  'Choose from a variety of courses designed to enrich your soul and sharpen your mind.',
                  'ایسے مختلف کورسز میں سے انتخاب کریں جو آپ کی روح کو مالامال اور آپ کے ذہن کو تیز کرنے کے لیے بنائے گئے ہیں۔'
                )}
              </p>
           </motion.div>
        </div>
      </section>

      {/* Grid of Course Pills */}
      <section className="section-padding py-0">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-x-10 gap-y-16">
            {courseList.map((course, i) => (
              <motion.div
                key={course.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative bg-white dark:bg-zinc-900 rounded-[3rem] p-8 md:p-12 border border-zinc-100 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-none hover:-translate-y-2 hover:shadow-emerald-700/5 transition-all"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-10 -translate-y-1/2 w-20 h-20 rounded-3xl bg-emerald-600 flex items-center justify-center shadow-xl shadow-emerald-400/30 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                   <course.icon className="h-10 w-10 text-white" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="font-display text-3xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-emerald-600 dark:text-emerald-500 font-bold text-sm tracking-widest uppercase">
                       <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {course.duration}</span>
                       <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                       <span>{course.level}</span>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-10">
                   {course.desc}
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-10">
                   {course.features.map((f, idx) => (
                     <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-emerald-50 dark:bg-emerald-950/30 px-4 py-2 rounded-xl border border-emerald-100 dark:border-emerald-800/50 scale-100 group-hover:scale-105 transition-transform duration-500" style={{ transitionDelay: `${idx * 100}ms` }}>
                       <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                       {f}
                     </div>
                   ))}
                </div>

                <div className="pt-8 border-t border-zinc-50 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-6">
                   <Link href="/admission" className="flex-1 min-w-[200px]">
                      <Button size="lg" className="w-full gradient-primary text-white font-bold h-14 rounded-2xl shadow-xl shadow-emerald-700/10 group-active:scale-95 transition-transform">
                        {course.cta}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                   </Link>
                   <Button variant="outline" size="lg" className="px-8 h-14 rounded-2xl border-zinc-200 text-zinc-700 hover:bg-zinc-50 font-bold">
                     {t('Download Syllabus', 'نصاب ڈاؤن لوڈ کریں')}
                   </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Accreditations */}
      <section className="section-padding bg-zinc-50/50 dark:bg-zinc-900/50">
         <div className="container mx-auto">
            <div className="bg-white dark:bg-zinc-900 rounded-[4rem] p-12 md:p-20 text-center border border-zinc-100 dark:border-zinc-800 shadow-3xl">
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <h2 className="font-display text-4xl md:text-5xl font-black mb-8 text-zinc-900 dark:text-white">
                    {t('Why Study with Us?', 'ہمارے ساتھ کیوں پڑھیں؟')}
                  </h2>
                  <div className="grid md:grid-cols-3 gap-12 mt-16">
                     <div>
                        <div className="text-4xl font-black text-amber-500 mb-2">25+</div>
                        <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">{t('Years of Excellence', 'سال کی فضیلت')}</p>
                     </div>
                     <div>
                        <div className="text-4xl font-black text-emerald-600 mb-2">Qualified</div>
                        <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">{t('Al-Azhar Certification', 'الازہر سند')}</p>
                     </div>
                     <div>
                        <div className="text-4xl font-black text-emerald-600 mb-2">Modern</div>
                        <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">{t('Digital Labs', 'ڈیجیٹل لیبز')}</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Detailed Program CTA */}
      <section className="section-padding bg-white dark:bg-zinc-950 text-center">
        <div className="container mx-auto">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto py-12 px-8 rounded-[4rem] gradient-primary text-white shadow-3xl shadow-emerald-900/30 overflow-hidden relative">
              <div className="absolute inset-0 islamic-pattern-bg opacity-10"></div>
              <div className="relative z-10">
                 <h2 className="font-display text-4xl md:text-6xl font-black mb-10 leading-tight">
                   {t('Ready to Start Your Journey of Knowledge?', 'سفرِ علم شروع کرنے کے لیے تیار ہیں؟')}
                 </h2>
                 <p className="text-emerald-50 text-xl md:text-2xl mb-12 font-medium opacity-90">
                   {t('Contact our admission counseling team for a personalized course plan today.', 'آج ہی ذاتی تعلیمی منصوبے کے لیے ہماری داخلہ مشاورتی ٹیم سے رابطہ کریں۔')}
                 </p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <Link href="/contact">
                       <Button size="lg" className="h-16 px-12 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-lg">
                         {t('Talk to an Expert', 'ماہر سے بات کریں')}
                       </Button>
                    </Link>
                    <Link href="/admission">
                       <Button variant="outline" size="lg" className="h-16 px-12 rounded-2xl border-white/30 text-white hover:bg-white/10 font-bold text-lg backdrop-blur-md">
                         {t('View Requirements', 'ضروریات دیکھیں')}
                       </Button>
                    </Link>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
