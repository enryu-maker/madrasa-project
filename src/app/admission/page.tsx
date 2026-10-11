"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion, Variants } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { User, Phone, Mail, Book, MessageSquare, Send, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: Number(i) * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }),
};

const AdmissionPage = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast.success(t('Application Submitted Successfully!', 'درخواست کامیابی کے ساتھ جمع کر دی گئی ہے!'), {
      description: t('Our representative will contact you shortly.', 'ہمارا نمائندہ جلد ہی آپ سے رابطہ کرے گا۔'),
    });
    reset();
  };

  return (
    <div className="flex flex-col">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute inset-0 bg-linear-to-b from-sky-50/50 to-white dark:from-sky-950/20 -z-10"></div>
        <div className="container mx-auto px-6 text-center">
           <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-amber-100 text-amber-700 text-xs font-black tracking-widest uppercase mb-6 border border-amber-200">
                {t('Enrolling for 2026', 'برائے سال 2026')}
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-black text-sky-900 dark:text-white mb-6">
                {t('Join Abu Bakar Foundation', 'ابوبکر فاؤنڈیشن میں شامل ہوں')}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                {t(
                  'Begin your spiritual and academic journey today. Fill out the form below to start your application process.',
                  'آج ہی اپنا روحانی اور تعلیمی سفر شروع کریں۔ اپنا درخواست کا عمل شروع کرنے کے لیے نیچے والا فارم پُر کریں۔'
                )}
              </p>
           </motion.div>
        </div>
      </section>

      <section className="section-padding bg-zinc-50/50 dark:bg-zinc-900/30 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/50">
                   <h3 className="font-display text-2xl font-bold mb-6 text-zinc-900 dark:text-white">{t('Admission Process', 'داخلہ کا طریقہ کار')}</h3>
                   <div className="space-y-6">
                      {[
                        { title: t('Online Registration', 'آن لائن رجسٹریشن'), desc: t('Submit the form on this page.', 'اس صفحے پر فارم جمع کروائیں۔') },
                        { title: t('Initial Interview', 'ابتدائی انٹرویو'), desc: t('Short online assessment with faculty.', 'فیکلٹی کے ساتھ مختصر آن لائن جائزہ۔') },
                        { title: t('Verification', 'تصدیق'), desc: t('Submission of required documents.', 'مطلوبہ دستاویزات کی جمع آوری۔') },
                        { title: t('Orientation', 'آگاہی پروگرام'), desc: t('Welcome to the Abu Bakar Foundation family.', 'ابوبکر فاؤنڈیشن خاندان میں خوش آمدید۔') },
                      ].map((step, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                              {i+1}
                           </div>
                           <div>
                              <p className="font-bold text-zinc-900 dark:text-white text-sm">{step.title}</p>
                              <p className="text-xs text-zinc-500">{step.desc}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="bg-white dark:bg-zinc-900 p-10 md:p-16 rounded-4xl border border-zinc-100 dark:border-zinc-800 shadow-3xl shadow-zinc-200/50">
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="fullName" className="font-bold text-zinc-700 dark:text-zinc-300 ml-1">{t('Full Name', 'مکمل نام')}</Label>
                      <Input id="fullName" {...register('fullName', { required: true })} className="h-14 rounded-2xl border-zinc-100 bg-zinc-50/50 dark:bg-zinc-800" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="fatherName" className="font-bold text-zinc-700 dark:text-zinc-300 ml-1">{t("Father's Name", 'والد کا نام')}</Label>
                      <Input id="fatherName" {...register('fatherName', { required: true })} className="h-14 rounded-2xl border-zinc-100 bg-zinc-50/50 dark:bg-zinc-800" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="font-bold text-zinc-700 dark:text-zinc-300 ml-1">{t('WhatsApp Number', 'واٹس ایپ نمبر')}</Label>
                      <Input id="phone" {...register('phone', { required: true })} className="h-14 rounded-2xl border-zinc-100 bg-zinc-50/50" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="font-bold text-zinc-700 dark:text-zinc-300 ml-1">{t('Email Address', 'ای میل ایڈریس')}</Label>
                      <Input id="email" type="email" {...register('email')} className="h-14 rounded-2xl border-zinc-100 bg-zinc-50/50" />
                    </div>
                  </div>
                  <div className="pt-6">
                    <Button disabled={isSubmitting} className="w-full h-16 rounded-4xl gradient-primary text-white font-bold text-lg">
                      {isSubmitting ? t('Processing...', 'عمل ہو رہا ہے...') : t('Submit Application', 'درخواست جمع کروائیں')}
                    </Button>
                  </div>
               </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;
