"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion, Variants } from 'framer-motion';
import { Award, GraduationCap, History, Star, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }),
};

const Teachers = () => {
  const { t } = useLanguage();

  const teachers = [
    {
      id: 1,
      name: t('Maulana Muhammad Ahmed', 'مولانا محمد احمد'),
      role: t('Principal & Senior Scholar', 'پرنسپل اور سینئر عالم'),
      qualification: t('Dars-e-Nizami, Al-Azhar University', 'درس نظامی، جامعہ الازہر'),
      experience: t('20+ Years', '20+ سال'),
      specialization: t('Hadith & Tafseer', 'حدیث اور تفسیر'),
      bio: t('Leading the institution with over two decades of experience in Islamic jurisprudence.', 'اسلامی فقہ میں دو دہائیوں سے زیادہ کے تجربے کے ساتھ ادارے کی قیادت کر رہے ہیں۔'),
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: t('Qari Abdul Rahman', 'قاری عبدالرحمٰن'),
      role: t('Head of Hifz Department', 'شعبہ حفظ کے سربراہ'),
      qualification: t('Hafiz-e-Quran, Tajweed Specialist', 'حافظ قرآن، ماہر تجوید'),
      experience: t('15+ Years', '15+ سال'),
      specialization: t('Quranic Recitation', 'قرآنی تلاوت'),
      bio: t('Specializing in the art of Tajweed and mentoring hundreds of Hafiz-e-Quran.', 'فنِ تجوید میں مہارت اور سینکڑوں حفاظِ قرآن کی رہنمائی۔'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: t('Mufti Hassan Ali', 'مفتی حسن علی'),
      role: t('Fiqh & Islamic Law', 'فقہ اور اسلامی قانون'),
      qualification: t('Dars-e-Nizami, Mufti Certification', 'درس نظامی، تخصص فی الافتاء'),
      experience: t('18+ Years', '18+ سال'),
      specialization: t('Islamic Finance & Jurisprudence', 'اسلامی فنانس اور فقہ'),
      bio: t('Expert in contemporary Fiqh issues and guiding students through classical texts.', 'عصرِ حاضر کے فقہی مسائل کے ماہر اور کلاسیکی متون کے ذریعے طلباء کی رہنمائی۔'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: t('Ustadha Fatima Zahra', 'استاذہ فاطمہ زہرا'),
      role: t('Female Students Department', 'شعبہ طالبات'),
      qualification: t('Aalimah Course, MA Arabic', 'عالمہ کورس، ایم اے عربی'),
      experience: t('10+ Years', '10+ سال'),
      specialization: t('Female Jurisprudence', 'خواتین کا فقہ'),
      bio: t('Dedicated to nurturing the faith and character of our female students.', 'ہماری طالبات کے ایمان اور کردار کی پرورش کے لیے وقف۔'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: t('Maulana Yusuf Khan', 'مولانا یوسف خان'),
      role: t('Hadith & Arabic Philology', 'حدیث اور عربی لغت'),
      qualification: t('PhD in Islamic Studies', 'پی ایچ ڈی اسلامیات'),
      experience: t('12+ Years', '12+ سال'),
      specialization: t('Classical Arabic Poetry', 'کلاسیکی عربی شاعری'),
      bio: t('Exploring the linguistic depth of Quranic Arabic with advanced students.', 'اعلیٰ درجے کے طلباء کے ساتھ قرآنی عربی کی لسانی گہرائی کو تلاش کرنا۔'),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Soft Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-sky-50/50 to-white dark:from-sky-950/20 -z-10"></div>
        <div className="container mx-auto px-6 text-center">
           <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-sky-100 dark:bg-sky-950/50 text-sky-700 dark:text-sky-400 text-sm font-bold tracking-widest uppercase mb-6 border border-sky-200 dark:border-sky-800">
                {t('Our Respected Faculty', 'ہمارے معزز اساتذہ')}
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-black text-sky-900 dark:text-white mb-6">
                {t('Learn from the Best', 'بہترین سے سیکھیں')}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                {t(
                  'Distinguished scholars and experts dedicated to nurturing the next generation of Muslims.',
                  'ممتاز علماء اور ماہرین جو مسلمانوں کی اگلی نسل کی پرورش کے لیے وقف ہیں۔'
                )}
              </p>
           </motion.div>
        </div>
      </section>

      {/* Grid of Profile Cards */}
      <section className="section-padding py-0">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teachers.map((teacher, i) => (
              <motion.div
                key={teacher.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative bg-white dark:bg-zinc-900 rounded-[3.5rem] p-10 border border-zinc-100 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-none hover:-translate-y-2 hover:shadow-sky-700/5 transition-all text-center"
              >
                {/* Profile Image with Ring */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                   <div className="absolute inset-0 rounded-full gradient-primary rotate-12 group-hover:rotate-0 transition-transform opacity-10 group-hover:opacity-20 scale-110"></div>
                   <div className="relative w-full h-full rounded-full border-8 border-white dark:border-zinc-800 overflow-hidden shadow-2xl">
                      <Image src={teacher.image} alt={teacher.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                   </div>
                   <div className="absolute -bottom-2 right-4 w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/30 border-4 border-white dark:border-zinc-900 z-10 group-hover:rotate-12 transition-transform">
                      <Star className="h-6 w-6 text-white fill-current" />
                   </div>
                </div>

                <div className="space-y-4">
                   <h3 className="font-display text-3xl font-black text-sky-900 dark:text-white">
                     {teacher.name}
                   </h3>
                   <div className="text-sky-700 dark:text-sky-400 font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2">
                      <Award className="h-4 w-4" />
                      {teacher.role}
                   </div>
                   
                   <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 italic">
                     {teacher.bio}
                   </p>

                   <div className="pt-6 border-t border-zinc-50 dark:border-zinc-800 space-y-3">
                      <div className="flex items-center gap-3 justify-center text-sm font-bold text-zinc-700 dark:text-zinc-300">
                         <GraduationCap className="h-4 w-4 text-sky-600" />
                         {teacher.qualification}
                      </div>
                      <div className="flex items-center gap-3 justify-center text-sm font-bold text-zinc-700 dark:text-zinc-300">
                         <History className="h-4 w-4 text-sky-600" />
                         {t('Experience:', 'تجربہ:')} {teacher.experience}
                      </div>
                   </div>

                   <div className="pt-8">
                      <Button variant="outline" className="w-full h-12 rounded-2xl border-sky-600/20 text-sky-700 hover:bg-sky-600 hover:text-white transition-all font-bold">
                         {t('View Research', 'تحقیق دیکھیں')}
                         <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with Pill Design */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto">
           <div className="grid md:grid-cols-3 gap-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-sky-50 dark:bg-sky-950/30 p-10 rounded-[3rem] text-center border border-sky-100 dark:border-sky-800">
                 <Users className="h-10 w-10 text-sky-600 mx-auto mb-4" />
                 <h4 className="text-4xl font-black text-sky-900 dark:text-white mb-2">50+</h4>
                 <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">{t('Scholar Faculty', 'علماء فیکلٹی')}</p>
              </motion.div>
              <div className="bg-amber-50 dark:bg-amber-950/30 p-10 rounded-[3rem] text-center border border-amber-100 dark:border-amber-800">
                 <History className="h-10 w-10 text-amber-600 mx-auto mb-4" />
                 <h4 className="text-4xl font-black text-amber-900 dark:text-white mb-2">25+</h4>
                 <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">{t('Years Teaching', 'تدریس کے سال')}</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/30 p-10 rounded-[3rem] text-center border border-blue-100 dark:border-blue-800">
                 <GraduationCap className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                 <h4 className="text-4xl font-black text-blue-900 dark:text-white mb-2">100%</h4>
                 <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">{t('Qualified Ijazah', 'مستند اجازت نامہ')}</p>
              </div>
           </div>
        </div>
      </section>

      {/* Faculty CTA */}
      <section className="section-padding bg-white dark:bg-zinc-950 text-center">
        <div className="container mx-auto">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto py-16 px-10 rounded-[4rem] bg-zinc-900 text-white shadow-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-sky-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative z-10">
                 <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-tight">
                   {t('Join our Global Network of Islamic Scholars', 'اسلامی علماء کے عالمی نیٹ ورک میں شامل ہوں')}
                 </h2>
                 <p className="text-zinc-400 text-xl md:text-2xl mb-12 font-medium">
                   {t('Are you a qualified Aalim or Hafiz? Join our mission to spread the light of Faiz ul Hasnain world-wide.', 'کیا آپ مستند عالم یا حافظ ہیں؟ دنیا بھر میں فیض الحسنین کی روشنی پھیلانے کے ہمارے مشن میں شامل ہوں۔')}
                 </p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <Link href="/contact">
                       <Button size="lg" className="h-16 px-12 rounded-2xl bg-white text-zinc-900 hover:bg-sky-50 font-bold text-lg shadow-2xl transition-all">
                         {t('Apply as Faculty', 'فیکلٹی کے طور پر درخواست دیں')}
                         <ArrowRight className="ml-2 h-5 w-5" />
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

export default Teachers;
