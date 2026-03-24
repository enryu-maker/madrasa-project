"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, Variants } from 'framer-motion';
import { BookOpen, Users, Award, GraduationCap, Star, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Fixed variant type by using numeric cubic-bezier for easing to ensure TS compatibility
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { 
      delay: i * 0.15, 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }),
};

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, value: '25+', label: t('Years of Excellence', 'سال کی فضیلت') },
    { icon: Users, value: '2000+', label: t('Active Students', 'زیرِ تعلیم طلباء') },
    { icon: BookOpen, value: '15+', label: t('Curriculums', 'نصابی پروگرام') },
    { icon: GraduationCap, value: '500+', label: t('Graduated Alumni', 'فارغ التحصیل') },
  ];

  const features = [
    t("Authentic Teachings", "مستند تعلیمات"),
    t("Expert Faculty", "ماہر اساتذہ"),
    t("Modern Facilities", "جدید سہولیات"),
    t("Character Building", "کردار سازی"),
  ];

  const featuredCourses = [
    {
      icon: BookOpen,
      title: t('Quran & Tajweed', 'قرآن اور تجوید'),
      desc: t('Master the art of recitation with perfect pronunciation.', 'درست تلفظ کے ساتھ تلاوتِ کلام پاک میں مہارت حاصل کریں۔'),
      tag: t('Beginner', 'ابتدائی')
    },
    {
      icon: Star,
      title: t('Hifz-ul-Quran', 'حفظ القرآن'),
      desc: t('Structured memorization with dedicated personal tutors.', 'ذاتی اساتذہ کی نگرانی میں حفظِ قرآن کا منظم پروگرام۔'),
      tag: t('Popular', 'مقبول')
    },
    {
      icon: GraduationCap,
      title: t('Islamic Scholarship', 'اسلامی اسکالرشپ'),
      desc: t('In-depth study of Hadith, Fiqh, and Arabic Literature.', 'حدیث، فقہ اور عربی ادب کا گہرا مطالعہ۔'),
      tag: t('Advanced', 'اعلیٰ')
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/madrasa-campus.jpg" 
            alt="Al-Noor Madrasa Campus" 
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-linear-to-b from-emerald-950/90 via-emerald-900/60 to-emerald-950/95" />
          {/* Grain Effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay islamic-pattern-bg"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism text-amber-400 text-sm font-semibold tracking-wider uppercase border border-amber-400/20 shadow-lg mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
              </span>
              {t("Admissions Open 2026", "داخلہ جات جاری ہیں 2026")}
            </span>
            
            <p className="font-arabic text-2xl md:text-3xl text-amber-500/90 mb-4 animate-float">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
              {t('Al-Noor Madrasa', 'مدرسہ النور')}<br />
              <span className="text-amber-400">{t('Center of Excellence', 'اعلیٰ تعلیمی مرکز')}</span>
            </h1>
            
            <p className="text-emerald-50/90 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              {t(
                "Nurturing the generation of tomorrow through the timeless wisdom of Quran and Sunnah since 1999.",
                "1999 سے قرآن و سنت کی لازوال حکمت کے ذریعے مستقبل کی نسل کی پرورش کر رہا ہے۔"
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/admission">
                <Button size="lg" className="gradient-gold text-white font-bold text-lg px-12 h-16 rounded-2xl shadow-2xl shadow-amber-500/20 hover:scale-105 transition-transform active:scale-95">
                  {t('Apply Now', 'ابھی داخلہ لیں')}
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="outline" size="lg" className="border-white/20 text-white glassmorphism hover:bg-white/10 text-lg px-12 h-16 rounded-2xl backdrop-blur-md">
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  {t('Our Programs', 'ہمارے پروگرام')}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Quick Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-emerald-100/70 text-sm md:text-base bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <CheckCircle2 className="h-4 w-4 text-amber-500" />
                {feature}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative -mt-24 z-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white dark:bg-zinc-900 glass-card rounded-3xl p-8 text-center shadow-2xl border border-white/50 dark:border-zinc-800 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500"></div>
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <stat.icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-4xl md:text-5xl font-black text-foreground font-display mb-2">{stat.value}</p>
                <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with modern split */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div className="absolute -left-12 -top-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="relative rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700 aspect-square md:aspect-video lg:aspect-square">
                 <Image src="/madrasa-campus.jpg" alt="About Al-Noor" fill className="object-cover" />
                 <div className="absolute inset-0 bg-linear-to-t from-emerald-900/60 to-transparent"></div>
                 <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white text-xl md:text-2xl font-display leading-relaxed italic">
                      {t(
                        '"The best among you is the one who learns Quran and teaches it."',
                        '"تم میں سے بہترین وہ ہے جو قرآن سیکھے اور سکھائے۔"'
                      )}
                    </p>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="space-y-8"
            >
              <div>
                <h3 className="text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4">
                  {t('Our Legacy', 'ہماری روایت')}
                </h3>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  {t('Welcome to Al-Noor Madrasa', 'مدرسہ النور میں خوش آمدید')}
                </h2>
              </div>
              
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                {t(
                  'Founded in 1999, we have spent over two decades bridging the gap between traditional Islamic scholarship and modern educational needs. Our campus is not just a school, but a spiritual haven where character is forged and faith is strengthened.',
                  '1999 میں قائم ہوا، ہم نے دو دہائیوں سے زائد عرصہ روایتی اسلامی علم اور جدید تعلیمی ضروریات کے درمیان فرق کو ختم کرنے میں گزارا ہے۔ ہمارا کیمپس صرف ایک سکول نہیں، بلکہ ایک روحانی پناہ گاہ ہے جہاں کردار کو نکھارا جاتا ہے اور ایمان کو مضبوط کیا جاتا ہے۔'
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/about">
                  <Button variant="outline" className="h-14 px-8 rounded-xl border-emerald-600 text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950 font-semibold group">
                    {t('Read Our History', 'ہماری تاریخ پڑھیں')} 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <div className="flex items-center -space-x-3 rtl:space-x-reverse overflow-hidden">

                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="inline-flex h-10 w-10 rounded-full ring-2 ring-background bg-zinc-100 items-center justify-center text-[10px] font-bold">ST</div>
                  ))}
                  <span className="ml-4 rtl:mr-4 text-sm font-medium text-muted-foreground">{t('Join 2,000+ Students', '2,000 سے زائد طلباء میں شامل ہوں')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses with Premium Cards */}
      <section className="section-padding bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern-bg opacity-5 -z-10"></div>
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('Explore Our Programs', 'ہمارے پروگرام دیکھیں')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('From foundation levels to advanced Islamic sciences, find the path that matches your spiritual journey.', 'بنیادی سطح سے لے کر جدید اسلامی علوم تک، وہ راستہ تلاش کریں جو آپ کے روحانی سفر سے مطابقت رکھتا ہو۔')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map((course, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card glass-card rounded-4xl p-10 border border-white/40 dark:border-zinc-800 hover:shadow-2xl transition-all group relative animate-in zoom-in duration-500"
              >
                <div className="absolute top-6 right-8 text-[10px] font-bold uppercase tracking-widest text-emerald-600/50">{course.tag}</div>
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                  <course.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{course.desc}</p>
                <div className="pt-6 border-t border-border">
                  <Link href="/courses" className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2 text-sm group-hover:underline">
                    {t('View Curriculum', 'نصاب دیکھیں')} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/courses">
              <Button size="lg" className="rounded-2xl h-14 px-10 gradient-primary text-white shadow-xl shadow-emerald-700/20">
                {t('Discover All Courses', 'تمام کورسز دریافت کریں')} 
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Newsletter/CTA Section */}
      <section className="section-padding p-6">
        <div className="container mx-auto">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             variants={fadeUp}
             className="relative rounded-4xl md:rounded-[3rem] overflow-hidden gradient-primary text-white p-12 md:p-20 text-center shadow-3xl shadow-emerald-900/40"
          >
            <div className="absolute inset-0 islamic-pattern-bg opacity-10"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">
                {t('Begin Your Spiritual Journey of Knowledge Today', 'آج ہی اپنے علم کے روحانی سفر کا آغاز کریں')}
              </h2>
              <p className="text-emerald-50/80 text-xl md:text-2xl mb-12 font-light">
                {t('Admissions are now open for the 2026 academic year. Limited seats available for campus and online programs.', 'تعلیمی سال 2026 کے لیے داخلے اب کھلے ہیں۔ کیمپس اور آن لائن پروگراموں کے لیے محدود نشستیں دستیاب ہیں۔')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/admission">
                  <Button size="lg" className="h-16 px-12 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-lg shadow-2xl">
                    {t('Apply for Admission', 'داخلے کے لیے درخواست دیں')}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="h-16 px-12 rounded-2xl border-white/30 text-white hover:bg-white/10 font-bold text-lg backdrop-blur-sm">
                    {t('Request Prospectus', 'پراسپیکٹس طلب کریں')}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
