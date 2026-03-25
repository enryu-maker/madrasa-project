"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion, Variants } from 'framer-motion';
import { Video, Clock, Calendar, BookOpen, Play, Users, Layout, VideoIcon, Monitor, Wifi, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: Number(i) * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }),
};

const OnlineClasses = () => {
  const { t } = useLanguage();

  const schedule = [
    {
      day: t('Monday - Wednesday', 'پیر - بدھ'),
      classes: [
        { time: '9:00 AM - 10:30 AM', title: t('Quran Nazra (Beginners)', 'قرآن ناظرہ (ابتدائی)'), teacher: t('Qari Abdullah', 'قاری عبداللہ') },
        { time: '11:00 AM - 12:30 PM', title: t('Hifz-ul-Quran', 'حفظ القرآن'), teacher: t('Hafiz Usman', 'حافظ عثمان') },
        { time: '2:00 PM - 3:30 PM', title: t('Islamic Fiqh', 'اسلامی فقہ'), teacher: t('Mufti Ahmad', 'مفتی احمد') },
      ],
    },
    {
      day: t('Thursday - Saturday', 'جمعرات - ہفتہ'),
      classes: [
        { time: '9:00 AM - 10:30 AM', title: t('Hadith Studies', 'حدیث کی تعلیم'), teacher: t('Sheikh Bilal', 'شیخ بلال') },
        { time: '11:00 AM - 12:30 PM', title: t('Tafseer-ul-Quran', 'تفسیر القرآن'), teacher: t('Maulana Tariq', 'مولانا طارق') },
        { time: '2:00 PM - 3:30 PM', title: t('Arabic Language', 'عربی زبان'), teacher: t('Ustadh Khalid', 'استاد خالد') },
      ],
    },
  ];

  const lectures = [
    {
      title: t('Introduction to Tajweed', 'تجوید کا تعارف'),
      teacher: t('Qari Abdullah', 'قاری عبداللہ'),
      duration: '45:20',
      thumbnail: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&h=225&fit=crop',
    },
    {
      title: t('Surah Al-Fatiha Tafseer', 'سورۃ الفاتحہ کی تفسیر'),
      teacher: t('Maulana Tariq', 'مولانا طارق'),
      duration: '1:02:15',
      thumbnail: 'https://images.unsplash.com/photo-1585036156171-384164a8c159?w=400&h=225&fit=crop',
    },
    {
      title: t('Pillars of Islam', 'اسلام کے ارکان'),
      teacher: t('Mufti Ahmad', 'مفتی احمد'),
      duration: '38:45',
      thumbnail: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&h=225&fit=crop',
    },
  ];

  return (
    <div className="flex flex-col">
       {/* High-End Soft Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute inset-0 bg-linear-to-b from-sky-50/50 to-white dark:from-sky-950/20 -z-10"></div>
        <div className="container mx-auto px-6 text-center">
           <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <div className="w-16 h-16 rounded-3xl bg-blue-100 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-400/20">
                 <VideoIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-black text-sky-900 dark:text-white mb-6">
                 {t('Faiz ul Hasnain Digital', 'فیض الحسنین ڈیجیٹل')}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                {t(
                  "Access world-class Islamic education from anywhere in the world. Join our live virtual campus today.",
                  "دنیا کے کسی بھی کونے سے عالمی معیار کی اسلامی تعلیم حاصل کریں۔ آج ہی ہمارے لائیو ورچوئل کیمپس میں شامل ہوں۔"
                )}
              </p>
           </motion.div>
        </div>
      </section>

      {/* Interactive Tabs with Pills */}
      <section className="section-padding py-0">
        <div className="container mx-auto">
          <Tabs defaultValue="schedule" className="w-full">
            <div className="flex justify-center mb-16">
               <TabsList className="h-16 inline-flex bg-zinc-100 dark:bg-zinc-800 p-1.5 rounded-4xl border border-zinc-200 dark:border-zinc-700 shadow-lg">
                  <TabsTrigger value="schedule" className="px-8 rounded-3xl font-bold text-sm data-[state=active]:bg-sky-600 data-[state=active]:text-white data-[state=active]:shadow-xl transition-all h-full flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {t('Live Schedule', 'لائیو شیڈول')}
                  </TabsTrigger>
                  <TabsTrigger value="lectures" className="px-8 rounded-3xl font-bold text-sm data-[state=active]:bg-sky-600 data-[state=active]:text-white data-[state=active]:shadow-xl transition-all h-full flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    {t('Recorded Lectures', 'ریکارڈ شدہ لیکچرز')}
                  </TabsTrigger>
               </TabsList>
            </div>

            {/* Schedule Tab Content */}
            <TabsContent value="schedule" className="space-y-12">
               {schedule.map((block, i) => (
                 <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="relative"
                 >
                    <div className="flex items-center gap-4 mb-8">
                       <div className="h-1.5 w-12 gradient-primary rounded-full"></div>
                       <h3 className="font-display text-2xl font-black text-sky-900 dark:text-white uppercase tracking-tight">
                         {block.day}
                       </h3>
                    </div>

                    <div className="grid gap-6">
                       {block.classes.map((cls, j) => (
                         <div
                           key={j}
                           className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row md:items-center gap-6 shadow-2xl shadow-zinc-200/50 dark:shadow-none hover:shadow-sky-700/5 transition-all group"
                         >
                            <div className="flex items-center gap-3 gradient-primary px-6 py-3 rounded-2xl text-white shadow-xl shadow-sky-400/20 group-hover:scale-105 transition-transform">
                               <Clock className="h-5 w-5" />
                               <span className="font-black text-sm">{cls.time}</span>
                            </div>
                            <div className="flex-1">
                               <p className="font-display text-2xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">{cls.title}</p>
                               <div className="flex items-center gap-2 text-zinc-500 text-sm font-semibold">
                                  <Users className="h-4 w-4 text-amber-500" />
                                  <span>{cls.teacher}</span>
                               </div>
                            </div>
                            <Button className="h-14 px-8 rounded-2xl border-sky-600/20 text-sky-700 bg-sky-50 hover:bg-sky-600 hover:text-white font-black text-sm shadow-xl hover:shadow-sky-600/20 active:scale-95 transition-all">
                               {t('Join Virtual Room', 'کمرہِ جماعت میں شامل ہوں')}
                               <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                         </div>
                       ))}
                    </div>
                 </motion.div>
               ))}
               
               {/* Help Section */}
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-zinc-50 dark:bg-zinc-900/50 p-10 rounded-[3rem] text-center border border-dashed border-zinc-200 dark:border-zinc-700">
                  <Monitor className="h-12 w-12 text-zinc-400 mx-auto mb-4" />
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{t('How to Join Live Classes?', 'لائیو کلاسز میں کیسے شامل ہوں؟')}</h4>
                  <p className="text-sm text-zinc-500 max-w-lg mx-auto leading-relaxed">
                    {t(
                      'All live classes are conducted via Faiz ul Hasnain Zoom for Education. Make sure you have a stable internet connection and have completed your digital orientation session.',
                      'تمام لائیو کلاسز فیض الحسنین ایجوکیشن زوم کے ذریعے منعقد کی جاتی ہیں۔ یقینی بنائیں کہ آپ کے پاس مستحکم انٹرنیٹ کنکشن ہے اور آپ نے اپنا ڈیجیٹل آگاہی اجلاس مکمل کر لیا ہے۔'
                    )}
                  </p>
                  <div className="flex justify-center gap-6 mt-6">
                     <div className="flex items-center gap-2 text-xs font-bold text-sky-600"><Wifi className="h-4 w-4" /> Stable Connection</div>
                     <div className="flex items-center gap-2 text-xs font-bold text-blue-600"><GraduationCap className="h-4 w-4" /> Registration Required</div>
                  </div>
               </motion.div>
            </TabsContent>

            {/* Lectures Tab Content */}
            <TabsContent value="lectures" className="space-y-12">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {lectures.map((lecture, i) => (
                    <motion.div
                       key={i}
                       custom={i}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true }}
                       variants={fadeUp}
                       className="group bg-white dark:bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-2xl hover:shadow-sky-700/10 transition-all"
                    >
                       <div className="relative aspect-video overflow-hidden">
                          <Image src={lecture.thumbnail} alt={lecture.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-sky-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                             <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-2xl shadow-sky-400/40 scale-0 group-hover:scale-100 transition-transform">
                                <Play className="h-8 w-8 text-white fill-current ml-1" />
                             </div>
                          </div>
                          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold tracking-widest uppercase">
                             {lecture.duration}
                          </div>
                       </div>
                       <div className="p-8">
                          <h4 className="font-display text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-sky-700 transition-colors uppercase tracking-tight">
                            {lecture.title}
                          </h4>
                          <p className="text-zinc-500 font-bold text-sm flex items-center gap-2 mb-6">
                             <Users className="h-4 w-4 text-sky-600" />
                             {lecture.teacher}
                          </p>
                          <Button variant="ghost" className="w-full h-12 rounded-xl group-hover:bg-sky-50 dark:group-hover:bg-sky-950/50 text-sky-700 dark:text-sky-400 font-black text-sm">
                             {t('Start Learning', 'سیکھنا شروع کریں')}
                          </Button>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Large Digital CTA */}
      <section className="section-padding bg-white dark:bg-zinc-950 text-center">
        <div className="container mx-auto">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto py-20 px-10 rounded-4xl gradient-primary text-white shadow-3xl shadow-sky-900/40 relative group overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity border-4 border-dashed border-white/20 m-4 rounded-[3.5rem]"></div>
              <div className="relative z-10">
                 <h2 className="font-display text-4xl md:text-6xl font-black mb-10 leading-tight">
                   {t('Digital Scholars of the Future Start Here', 'مستقبل کے ڈیجیٹل اسکالرز کا آغاز یہاں سے ہوتا ہے')}
                 </h2>
                 <p className="text-sky-50 text-xl md:text-2xl mb-12 font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
                   {t('Register for our online admission test for the upcoming global batch. Limited virtual seats available.', 'عالمی سطح پر آنے والے بیچ کے لیے ہمارے آن لائن داخلہ ٹیسٹ کے لیے رجسٹر ہوں۔ ورچوئل نشستیں محدود ہیں۔')}
                 </p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <Link href="/admission">
                       <Button size="lg" className="h-16 px-12 rounded-2xl bg-white text-sky-900 hover:bg-sky-50 font-bold text-lg shadow-2xl">
                         {t('Begin Digital Admission', 'ڈیجیٹل داخلہ شروع کریں')}
                       </Button>
                    </Link>
                    <Link href="/contact">
                       <Button variant="outline" size="lg" className="h-16 px-12 rounded-2xl border-white/30 text-white hover:bg-white/10 font-bold text-lg backdrop-blur-md">
                         {t('View Demo Session', 'ڈیمو سیشن دیکھیں')}
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

export default OnlineClasses;
