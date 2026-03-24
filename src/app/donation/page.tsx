"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion, Variants } from 'framer-motion';
import { Heart, Building2, CreditCard, QrCode, Copy, CheckCircle, ArrowRight, Wallet, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }),
};

const Donation = () => {
  const { t } = useLanguage();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(t('Copied to clipboard!', 'کلپ بورڈ پر کاپی ہو گیا!'), {
       icon: <CheckCircle className="h-5 w-5 text-emerald-600" />
    });
  };

  const programs = [
    { title: t('Zakat & Sadaqah', 'زکوٰۃ اور صدقات'), desc: t('Support deserving students and faculty members.', 'مستحق طلباء اور فیکلٹی ممبران کی مدد کریں۔'), icon: Heart },
    { title: t('Building Fund', 'تعمیراتی فنڈ'), desc: t('Expand our campus and facilities for more students.', 'مزید طلباء کے لیے کیمپس اور سہولیات میں اضافہ کریں۔'), icon: Building2 },
    { title: t('Endowment (Waqf)', 'وقف (صدقہ جاریہ)'), desc: t('Establish a permanent legacy for Islamic education.', 'اسلامی تعلیم کے لیے ایک مستقل روایت قائم کریں۔'), icon: ShieldCheck },
  ];

  const bankDetails = [
    { label: t('Bank Name', 'بینک کا نام'), value: 'Meezan Bank Ltd.' },
    { label: t('Account Name', 'اکاؤنٹ کا نام'), value: 'Jamia Al-Noor Education' },
    { label: t('Account Number', 'اکاؤنٹ نمبر'), value: '0123-4567-8901-2345' },
    { label: t('IBAN', 'آئی بی اے این'), value: 'PK00MEZN0123456789012345' },
  ];

  return (
    <div className="flex flex-col">
       {/* Premium Soft Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute inset-0 bg-linear-to-b from-emerald-50/50 to-white dark:from-emerald-950/20 -z-10"></div>
        <div className="container mx-auto px-6 text-center">
           <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 flex items-center justify-center mx-auto mb-6 scale-110 shadow-lg shadow-emerald-400/20">
                 <Heart className="h-8 w-8 text-emerald-600 fill-current" />
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-black text-emerald-900 dark:text-white mb-6">
                 {t('Your Support Matters', 'آپ کا تعاون اہم ہے')}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                {t(
                  "Help us spread the light of knowledge and nurture the future of Islamic scholarship.",
                  "علم کی روشنی پھیلانے اور اسلامی اسکالرشپ کے مستقبل کی آبیاری کرنے میں ہماری مدد کریں۔"
                )}
              </p>
           </motion.div>
        </div>
      </section>

      {/* Contribution Pillars - Stylized Rounded Cards */}
      <section className="section-padding py-0">
         <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
               {programs.map((p, i) => (
                 <motion.div
                   key={i}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   variants={fadeUp}
                   custom={i}
                   className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 hover:shadow-emerald-700/5 transition-all text-center group"
                 >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                       <p.icon className="h-7 w-7 text-emerald-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-4 text-emerald-900 dark:text-white">{p.title}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">{p.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Payment Details Section */}
      <section className="section-padding bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Bank Transfer Card - Premium Pill Style */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white dark:bg-zinc-900 p-10 md:p-14 rounded-4xl border border-zinc-100 dark:border-zinc-800 shadow-3xl shadow-zinc-200/50">
                 <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white">
                       <CreditCard className="h-6 w-6" />
                    </div>
                    <h2 className="font-display text-3xl font-black text-emerald-900 dark:text-white">{t('Bank Transfer', 'بینک ٹرانسفر')}</h2>
                 </div>

                 <div className="space-y-6">
                    {bankDetails.map((detail, i) => (
                      <div key={i} className="group relative">
                        <Label className="text-zinc-400 text-xs font-bold uppercase tracking-widest block mb-2 px-1">{detail.label}</Label>
                        <div className="flex items-center justify-between gap-4 p-5 rounded-3xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 transition-all hover:bg-zinc-100/50">
                           <p className="font-bold text-zinc-900 dark:text-white font-mono">{detail.value}</p>
                           <button 
                             onClick={() => handleCopy(detail.value)} 
                             className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-xl shadow-emerald-400/20 active:scale-90 transition-transform"
                             title="Copy"
                           >
                             <Copy className="h-4 w-4" />
                           </button>
                        </div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="mt-10 flex items-center gap-4 p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-800">
                    <HeartHandshake className="h-6 w-6 text-amber-600 shrink-0" />
                    <p className="text-sm font-bold text-amber-800 dark:text-amber-400 leading-relaxed">
                       {t('Every contribution, no matter how small, counts towards the Sadaqah Jariyah.', 'ہر تعاون، چاہے کتنا ہی چھوٹا کیوں نہ ہو، صدقہ جاریہ میں شمار ہوتا ہے۔')}
                    </p>
                 </div>
              </motion.div>

              {/* QR & Mobile Wallet Section */}
              <div className="space-y-10">
                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center lg:text-left">
                    <h2 className="font-display text-4xl md:text-5xl font-black mb-6 text-emerald-900 dark:text-white">
                      {t('E-Wallets & Quick Pay', 'ای والٹس اور کوئیک پے')}
                    </h2>
                    <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-md">
                      {t('Scan the QR code or use the wallet details below for a faster contribution.', 'تیز تر تعاون کے لیے کیو آر کوڈ اسکین کریں یا نیچے والٹ کی تفصیلات استعمال کریں۔')}
                    </p>
                 </motion.div>

                 <div className="grid sm:grid-cols-2 gap-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 text-center shadow-2xl">
                       <div className="relative aspect-square bg-zinc-50 dark:bg-zinc-800 rounded-3xl flex items-center justify-center p-6 border-2 border-dashed border-emerald-100 dark:border-zinc-700 mb-6 group overflow-hidden">
                          <QrCode className="h-full w-full text-emerald-600/20 group-hover:scale-110 transition-transform opacity-50" />
                          <div className="absolute inset-0 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm flex items-center justify-center">
                             <div className="text-zinc-500 font-bold text-xs uppercase tracking-widest">{t('Coming Soon', 'جلد آ رہا ہے')}</div>
                          </div>
                       </div>
                       <p className="font-bold text-emerald-900 dark:text-white uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                         <QrCode className="h-4 w-4" />
                         {t('JazzCash / EasyPaisa', 'جاز کیش / ایزی پیسہ')}
                       </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-zinc-950 p-8 rounded-3xl text-white flex flex-col justify-center relative overflow-hidden group">
                       <div className="absolute inset-0 bg-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                       <Wallet className="h-10 w-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
                       <h4 className="font-bold text-lg mb-2">{t('Global Portals', 'عالمی پورٹلز')}</h4>
                       <p className="text-xs text-zinc-400 mb-8 leading-relaxed">{t('International donors can use Western Union or RIA for direct transfers.', 'بین الاقوامی عطیہ دہندگان براہ راست منتقلی کے لیے ویسٹرن یونین یا ریا استعمال کر سکتے ہیں۔')}</p>
                       <Button variant="outline" className="h-12 border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-xl font-bold">
                          {t('Request Details', 'تفصیلات طلب کریں')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                       </Button>
                    </motion.div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Rewards & Spiritual CTA */}
      <section className="section-padding bg-white dark:bg-zinc-950 text-center">
        <div className="container mx-auto">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto py-16 px-10 rounded-4xl gradient-primary text-white shadow-3xl shadow-emerald-900/40 overflow-hidden relative">
              <div className="absolute inset-0 islamic-pattern-bg opacity-10"></div>
              <div className="relative z-10">
                 <div className="w-20 h-20 rounded-full border-4 border-white/20 mx-auto flex items-center justify-center mb-8">
                    <Heart className="h-10 w-10 text-white animate-pulse" />
                 </div>
                 <h2 className="font-display text-4xl md:text-6xl font-black mb-10 leading-tight">
                   {t('Spread the Light of Knowledge Together', 'آئیے مل کر علم کی روشنی پھیلائیں')}
                 </h2>
                 <p className="text-emerald-50 text-xl md:text-2xl mb-12 font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
                   {t('Your contribution supports the education of future Islamic scholars and the spread of authentic teachings.', 'آپ کا تعاون مستقبل کے اسلامی اسکالرز کی تعلیم اور مستند تعلیمات کے پھیلاؤ کی حمایت کرتا ہے۔')}
                 </p>
                 <div className="flex justify-center">
                    <Link href="/contact">
                       <Button size="lg" className="h-16 px-12 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-lg shadow-2xl">
                         {t('Ask for More Ways to Support', 'مدد کے مزید طریقوں کے لیے پوچھیں')}
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

export default Donation;
