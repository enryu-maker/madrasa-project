"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion, Variants } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, HelpCircle, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }),
};

const Contact = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Contact Form Data:', data);
    toast.success(t('Message Sent Successfully!', 'پیغام کامیابی کے ساتھ بھیج دیا گیا ہے!'), {
      icon: <CheckCircle className="h-5 w-5 text-sky-600" />
    });
    reset();
  };

  const contactInfo = [
    { icon: Phone, label: t('Call Us', 'ہمیں کال کریں'), value: '+91 6306866039', desc: t('Mon-Sat, 9am-6pm', 'پیر تا ہفتہ، صبح 9 بجے سے شام 6 بجے تک') },
    { icon: Mail, label: t('Email Us', 'ہمیں ای میل کریں'), value: 'info@alnoormadrasa.edu', desc: t('We reply within 24 hours', 'ہم 24 گھنٹوں کے اندر جواب دیتے ہیں') },
    { icon: MapPin, label: t('Our Location', 'ہمارا مقام'), value: t('Plot No: 39, Gat No: 8A/8B, Kedarnath Colony, Virat Sankul, Sanjiv Nagar, Ambad Link Road, Nashik, Maharashtra, India', 'پلاٹ نمبر: 39، گٹ نمبر: 8A/8B، کیدارناتھ کالونی، وراٹ سنکل، سنجے ناگر، امباد لنک روڈ، ناشک، ایم ایچ، بھارت'), desc: t('Visit our main campus', 'ہمارے مین کیمپس کا دورہ کریں') },
  ];

  return (
    <div className="flex flex-col">
       {/* High-End Soft Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute inset-0 bg-linear-to-b from-sky-50/50 to-white dark:from-sky-950/20 -z-10"></div>
        <div className="container mx-auto px-6 text-center">
           <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <div className="w-16 h-16 rounded-3xl bg-amber-100 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-400/20">
                 <MessageCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-black text-sky-900 dark:text-white mb-6">
                 {t('Connect with Us', 'ہمارے ساتھ جڑیں')}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-bold tracking-tight">
                {t(
                  "Have questions about our programs or admissions? Our team is here to guide you.",
                  "ہمارے پروگراموں یا داخلوں کے بارے میں سوالات ہیں؟ ہماری ٹیم آپ کی رہنمائی کے لیے حاضر ہے۔"
                )}
              </p>
           </motion.div>
        </div>
      </section>

      {/* Main Contact Grid - Premium Split Layout */}
      <section className="section-padding py-0">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-start">
            
            {/* Sidebar Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
                {contactInfo.map((item, i) => (
                  <div key={i} className="group bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 hover:shadow-sky-700/5 transition-all">
                     <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-sky-600 flex items-center justify-center text-white shadow-xl shadow-sky-400/20 group-hover:rotate-12 transition-transform shrink-0">
                           <item.icon className="h-6 w-6" />
                        </div>
                        <div>
                           <p className="text-xs font-black text-sky-600 uppercase tracking-widest mb-1">{item.label}</p>
                           <p className="text-xl md:text-2xl font-black text-sky-900 dark:text-white mb-1">{item.value}</p>
                           <p className="text-xs text-zinc-500 font-medium">{item.desc}</p>
                        </div>
                     </div>
                  </div>
                ))}

                <div className="bg-sky-950 p-10 rounded-[3rem] text-white relative overflow-hidden">
                   <div className="absolute inset-0 islamic-pattern-bg opacity-10"></div>
                   <div className="relative z-10">
                      <Clock className="h-10 w-10 text-amber-500 mb-6" />
                      <h4 className="font-display text-2xl font-black mb-4">{t('Operating Hours', 'آپریشنل اوقات')}</h4>
                      <div className="space-y-3 text-sm font-medium">
                         <div className="flex justify-between border-b border-sky-900 pb-2">
                           <span className="text-sky-100/60 uppercase tracking-tighter">{t('Mon - Fri', 'پیر تا جمعہ')}</span>
                           <span className="font-bold">9:00 AM - 6:00 PM</span>
                         </div>
                         <div className="flex justify-between border-b border-sky-900 pb-2">
                           <span className="text-sky-100/60 uppercase tracking-tighter">{t('Saturday', 'ہفتہ')}</span>
                           <span className="font-bold">10:00 AM - 4:00 PM</span>
                         </div>
                         <div className="flex justify-between pb-2">
                           <span className="text-sky-100/60 uppercase tracking-tighter">{t('Sunday', 'اتوار')}</span>
                           <span className="text-amber-500 font-bold">{t('Closed', 'بند')}</span>
                         </div>
                      </div>
                   </div>
                </div>
            </motion.div>

            {/* Premium Message Form Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white dark:bg-zinc-900 p-10 md:p-16 rounded-[4rem] border border-zinc-100 dark:border-zinc-800 shadow-3xl shadow-zinc-200/50">
               <div className="mb-12">
                  <h2 className="font-display text-4xl font-black text-sky-900 dark:text-white mb-3">
                    {t('Send a Message', 'پیغام بھیجیں')}
                  </h2>
                  <p className="text-zinc-500 font-medium">{t('We will get back to you across all channels.', 'ہم تمام ذرائع سے آپ سے رابطہ کریں گے۔')}</p>
               </div>

               <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="group space-y-3">
                        <Label htmlFor="name" className="text-xs font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-widest ml-1">{t('Your Name', 'آپ کا نام')}</Label>
                        <Input 
                          id="name" 
                          {...register('name', { required: true })} 
                          className="h-14 px-6 rounded-2xl border-zinc-100 bg-zinc-50/50 dark:bg-zinc-800 focus:ring-sky-600 focus:border-sky-600 font-bold" 
                          placeholder={t('Enter Name', 'نام درج کریں')}
                        />
                     </div>
                     <div className="group space-y-3">
                        <Label htmlFor="email" className="text-xs font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-widest ml-1">{t('Email Address', 'ای میل ایڈریس')}</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          {...register('email', { required: true })} 
                          className="h-14 px-6 rounded-2xl border-zinc-100 bg-zinc-50/50 dark:bg-zinc-800 focus:ring-sky-600 font-bold" 
                          placeholder={t('Enter Email', 'ای میل درج کریں')}
                        />
                     </div>
                  </div>

                  <div className="group space-y-3">
                      <Label htmlFor="phone" className="text-xs font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-widest ml-1">{t('WhatsApp / Phone', 'واٹس ایپ / فون')}</Label>
                      <Input 
                        id="phone" 
                        {...register('phone')} 
                        className="h-14 px-6 rounded-2xl border-zinc-100 bg-zinc-50/50 dark:bg-zinc-800 focus:ring-sky-600 font-bold" 
                        placeholder={t('e.g. +91 6306866039', 'مثلاً 6306866039 91+')}
                      />
                  </div>

                  <div className="group space-y-3">
                      <Label htmlFor="message" className="text-xs font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-widest ml-1">{t('Your Message', 'آپ کا پیغام')}</Label>
                      <Textarea 
                        id="message" 
                        {...register('message', { required: true })} 
                        className="min-h-[160px] px-6 py-5 rounded-4xl border-zinc-100 bg-zinc-50/50 dark:bg-zinc-800 focus:ring-sky-600 font-medium leading-relaxed" 
                        placeholder={t('How can we help you?', 'ہم آپ کی کس طرح مدد کر سکتے ہیں؟')}
                      />
                  </div>

                  <div className="pt-6">
                     <Button 
                       disabled={isSubmitting} 
                       className="w-full h-16 rounded-4xl gradient-primary text-white font-black text-lg shadow-2xl shadow-sky-700/20 active:scale-95 transition-all group"
                     >
                       {isSubmitting ? (
                          <div className="flex items-center gap-3">
                             <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                             {t('Sending Message...', 'پیغام بھیجا جا رہا ہے...')}
                          </div>
                       ) : (
                          <div className="flex items-center gap-3">
                             {t('Submit Your Enquiry', 'اپنی انکوائری جمع کروائیں')}
                             <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                       )}
                     </Button>
                  </div>
               </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section with Pills */}
      <section className="section-padding bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="container mx-auto">
           <div className="bg-white dark:bg-zinc-900 p-4 pb-0 rounded-[4rem] border border-zinc-100 dark:border-zinc-800 shadow-3xl overflow-hidden">
              <div className="flex flex-wrap items-center justify-between p-6 md:p-10">
                 <div className="space-y-1">
                    <h3 className="font-display text-3xl font-black text-sky-900 dark:text-white uppercase tracking-tight">{t('Visit Our Campus', 'ہمارے کیمپس کا دورہ کریں')}</h3>
                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest ml-1">{t('Experience our spiritual environment first-hand', 'فرسٹ ہینڈ ہمارے روحانی ماحول کا تجربہ کریں')}</p>
                 </div>
                 <div className="flex items-center gap-3 bg-sky-50 dark:bg-sky-950/40 px-6 py-3 rounded-full border border-sky-100 dark:border-sky-800 mt-4 md:mt-0">
                    <Globe className="h-5 w-5 text-sky-600" />
                    <span className="text-sm font-black text-sky-900 dark:text-sky-100 tracking-tight uppercase">Nashik, Maharashtra</span>
                 </div>
              </div>
              <div className="aspect-video w-full grayscale-[0.5] contrast-[1.2] hover:grayscale-0 transition-all duration-700 rounded-b-[3.5rem] overflow-hidden">
                <iframe 
                  src="https://maps.google.com/maps?q=Nashik,+Maharashtra,+India&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
           </div>
        </div>
      </section>

      {/* Global Outreach CTA */}
      <section className="section-padding bg-white dark:bg-zinc-950 text-center">
        <div className="container mx-auto">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto py-20 px-10 rounded-[4rem] gradient-primary text-white shadow-3xl shadow-sky-900/40 relative group overflow-hidden">
              <div className="absolute inset-0 islamic-pattern-bg opacity-10"></div>
              <div className="relative z-10">
                 <HelpCircle className="h-16 w-16 text-white mx-auto mb-10 opacity-50" />
                 <h2 className="font-display text-4xl md:text-6xl font-black mb-10 leading-tight">
                   {t('Still Have Questions?', 'ابھی بھی سوالات ہیں؟')}
                 </h2>
                 <p className="text-sky-50 text-xl md:text-2xl mb-12 font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
                   {t('Contact our academic advisory team for specialized queries regarding advanced studies and PhD programs.', 'اعلیٰ تعلیم اور پی ایچ ڈی پروگراموں سے متعلق مخصوص سوالات کے لیے ہماری تعلیمی مشاورتی ٹیم سے رابطہ کریں۔')}
                 </p>
                 <div className="flex justify-center">
                    <Button size="lg" className="h-16 px-12 rounded-2xl bg-white text-sky-900 hover:bg-sky-50 font-bold text-lg shadow-2xl">
                       {t('Browse FAQ', 'اکثر پوچھے گئے سوالات دیکھیں')}
                    </Button>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
