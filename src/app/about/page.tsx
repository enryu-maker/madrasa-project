"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion, Variants } from 'framer-motion';
import { History, Target, Eye, Quote, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';
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

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: ShieldCheck, title: t('Authenticity', 'صداقت'), desc: t('Traditional teachings with pure chains of transmission.', 'خالص اسناد کے ساتھ روایتی تعلیمات۔') },
    { icon: Heart, title: t('Compassion', 'شفقت'), desc: t('Nurturing environment for spiritual and mental growth.', 'روحانی اور ذہنی نشوونما کے لیے ایک پرورش پانے والا ماحول۔') },
    { icon: Sparkles, title: t('Excellence', 'فضیلت'), desc: t('Striving for the highest standards in both worlds.', 'دونوں جہانوں میں اعلیٰ ترین معیار کے لیے کوشاں۔') },
  ];

  return (
    <div className="flex flex-col">
      {/* Premium Hero with Soft Theme */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/madrasa-campus.jpg" 
          alt="Faiz ul Hasnain Heritage" 
          fill 
          className="object-cover opacity-20 dark:opacity-10 scale-110 blur-sm"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-sky-50/40 to-white dark:from-zinc-950 dark:to-zinc-950" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
             <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-sky-100 dark:bg-sky-950/50 text-sky-700 dark:text-sky-400 text-sm font-black tracking-widest uppercase mb-6 border border-sky-200 dark:border-sky-800">
               {t('About Our Institution', 'ہمارے ادارے کے بارے میں')}
             </span>
             <h1 className="font-display text-5xl md:text-7xl font-black text-sky-900 dark:text-white mb-6">
               {t('Faith, Knowledge,', 'ایمان، علم،')} <br />
               <span className="text-amber-500">{t('& Legacy', 'اور روایت')}</span>
             </h1>
             <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                {t(
                 'A journey of spiritual enlightenment and academic excellence that began in 2024.',
                 'روحانی روشنی اور تعلیمی فضیلت کا ایک سفر جو 2024 میں شروع ہوا۔'
               )}
             </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy & History Section */}
      <section className="section-padding bg-white dark:bg-zinc-950">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="relative">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 gap-1 flex">
                    <div className="w-8 h-full bg-sky-600 rounded-full"></div>
                    <div className="w-2 h-full bg-sky-300 rounded-full"></div>
                  </div>
                  <span className="font-bold text-sky-600 tracking-wider uppercase text-sm">{t('Founded 2024', 'قائم شدہ 2024')}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
                  {t('Decades of Spiritual Guidance', 'روحانی رہنمائی کی دہائیاں')}
                </h2>
                <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  <p>
                    {t(
                      'Faiz ul Hasnain Foundation was established with the vision of providing a comprehensive Islamic education that meets the challenges of the modern world without compromising on traditional values.',
                      'فیض الحسنین فاؤنڈیشن اس وژن کے ساتھ قائم کیا گیا تھا کہ ایک جامع اسلامی تعلیم فراہم کی جائے جو روایتی اقدار پر سمجھوتہ کیے بغیر جدید دنیا کے چیلنجوں کا مقابلہ کر سکے۔'
                    )}
                  </p>
                  <p>
                    {t(
                      'Since our founding, we have grown into a globally recognized center for Islamic scholarship, hosting students from all walks of life.',
                      'اپنے قیام کے بعد سے، ہم اسلامی علم کے عالمی سطح پر تسلیم شدہ مرکز بن گئے ہیں، جس میں زندگی کے تمام شعبوں سے تعلق رکھنے والے طلباء موجود ہیں۔'
                    )}
                  </p>
                </div>
                <div className="pt-6">
                   <Link href="/gallery">
                     <Button className="gradient-primary text-white rounded-2xl h-14 px-10 font-bold shadow-xl shadow-sky-700/20">
                       {t('View Our Gallery', 'ہماری گیلری دیکھیں')}
                     </Button>
                   </Link>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="relative group">
              <div className="absolute inset-0 bg-sky-600 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform -z-10"></div>
              <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white dark:border-zinc-800 aspect-square">
                 <Image src="/madrasa-campus.jpg" alt="Madrasa Interior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-linear-to-t from-sky-950/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Pill Style Cards */}
      <section className="section-padding bg-zinc-50/50 dark:bg-zinc-900/50 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white dark:bg-zinc-900 p-12 rounded-[3.5rem] border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none hover:-translate-y-2 transition-transform"
            >
              <div className="w-16 h-16 rounded-3xl bg-sky-100 dark:bg-sky-950 flex items-center justify-center mb-8">
                <Target className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6 text-zinc-900 dark:text-white">{t('Our Mission', 'ہمارا مشن')}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                {t(
                  'To empower students with authentic Islamic knowledge and high moral character, preparing them to be compassionate leaders and beneficial citizens of the global community.',
                  'طلباء کو مستند اسلامی علم اور اعلیٰ اخلاقی کردار کے ساتھ بااختیار بنانا، انہیں عالمی برادری کے ہمدرد رہنما اور مفید شہری بننے کے لیے تیار کرنا۔'
                )}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white dark:bg-zinc-900 p-12 rounded-[3.5rem] border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none hover:-translate-y-2 transition-transform"
            >
              <div className="w-16 h-16 rounded-3xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center mb-8">
                <Eye className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6 text-zinc-900 dark:text-white">{t('Our Vision', 'ہمارا وژن')}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                {t(
                  'To become a leading light of Islamic scholarship where traditional wisdom meets contemporary relevance, nurturing generations of believers who thrive in faith and intellect.',
                  'اسلامی اسکالرشپ کا ایک اہم نور بننا جہاں روایتی حکمت معاصر مطابقت رکھتی ہے، مومنین کی ان نسلوں کی پرورش کرنا جو ایمان اور عقل میں ترقی کرتی ہیں۔'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-white dark:bg-zinc-950 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6 text-zinc-900 dark:text-white">
              {t('Core Values That Guide Us', 'بنیادی اقدار جو ہماری رہنمائی کرتی ہیں')}
            </h2>
            <div className="h-1.5 w-24 gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-2xl transition-all text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center mx-auto mb-8 shadow-lg shadow-sky-400/20 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <v.icon className="h-7 w-7" />
                </div>
                <h4 className="font-display text-2xl font-bold mb-4 text-zinc-900 dark:text-white">{v.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message - Premium Stylized Quote */}
      <section className="section-padding bg-sky-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern-bg opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative mx-auto lg:mx-0">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-[4rem] border-8 border-white/10 overflow-hidden shadow-3xl">
                    <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" fill alt="Principal" className="object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 gradient-gold rounded-3xl flex items-center justify-center shadow-xl">
                    <Quote className="h-10 w-10 text-white fill-current" />
                  </div>
               </motion.div>

               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
                  <h3 className="text-amber-400 font-black uppercase tracking-[0.2em] text-sm">{t("Principal's Message", "پرنسپل کا پیغام")}</h3>
                  <div className="relative">
                     <p className="text-2xl md:text-3xl font-display leading-[1.6] italic text-sky-50">
                        {t(
                          '"Our commitment at Faiz ul Hasnain Foundation is to cultivate not just minds, but hearts. We believe that true success lies in the balance between rigorous academic pursuit and deep spiritual connection."',
                          '"فیض الحسنین فاؤنڈیشن میں ہمارا عزم صرف ذہنوں کو نہیں بلکہ دلوں کو پروان چڑھانا ہے۔ ہمارا ماننا ہے کہ حقیقی کامیابی سخت تعلیمی جدوجہد اور گہرے روحانی تعلق کے درمیان توازن میں مضمر ہے۔"'
                        )}
                     </p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xl font-bold">{t('Sheikh Maulana Ahmed Ali', 'شیخ مولانا احمد علی')}</p>
                    <p className="text-sky-400/80 font-medium">{t('Principal & Senior Scholar', 'پرنسپل اور سینئر عالم')}</p>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white dark:bg-zinc-950 text-center">
        <div className="container mx-auto max-w-3xl">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-display text-4xl md:text-5xl font-black mb-8 text-zinc-900 dark:text-white">
                {t('Become Part of Our Learning Community', 'ہماری سیکھنے والی برادری کا حصہ بنیں')}
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/admission">
                  <Button size="lg" className="gradient-primary text-white h-16 px-10 rounded-2xl font-bold text-lg shadow-2xl shadow-sky-700/20">
                    {t('Apply for Admission', 'داخلے کے لیے درخواست دیں')}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-sky-600 text-sky-700 hover:bg-sky-50 font-bold text-lg">
                    {t('Get in Touch', 'رابطہ کریں')}
                  </Button>
                </Link>
              </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
