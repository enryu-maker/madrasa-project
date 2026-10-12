"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import DonateBox from '@/components/DonateBox';
import CopyButton from '@/components/CopyButton';
import { BANK, FUNDS, whatsapp } from '@/lib/site';

const Donation = () => {
   const { t } = useLanguage();

   return (
      <>
         <PageHeader
            eyebrow={t('Donate', 'عطیہ دیں')}
            title={t('Help a student learn the Quran', 'ایک طالب علم کو قرآن سیکھنے میں مدد دیں')}
            lede={t(
               'Donations keep our fees low and pay for students who cannot afford them.',
               'عطیات سے ہماری فیس کم رہتی ہے اور ان طلباء کا خرچ پورا ہوتا ہے جو فیس نہیں دے سکتے۔'
            )}
         />

         <section className="bg-chalk py-16 md:py-24">
            <div className="wrap grid gap-12 lg:grid-cols-[24rem_1fr] lg:items-start lg:gap-16">
               <DonateBox showBankLink={false} />

               <div id="bank" className="scroll-mt-24">
                  <h2 className="display d2">{t('Bank transfer', 'بینک ٹرانسفر')}</h2>
                  <dl className="mt-6 border-t border-line">
                     {BANK.map(row => (
                        <div key={row.value} className="flex items-center justify-between gap-3 border-b border-line py-2">
                           <div className="min-w-0">
                              <dt className="text-sm text-soft">{t(...row.label)}</dt>
                              <dd dir="ltr" className="break-words font-semibold rtl:text-right">{row.value}</dd>
                           </div>
                           <CopyButton value={row.value} label={t(...row.label)} />
                        </div>
                     ))}
                  </dl>
                  <p className="mt-6 text-soft">
                     {t(
                        'If this is Zakat, or meant for the building fund or Waqf, tell us on WhatsApp so we record it correctly.',
                        'اگر یہ زکوٰۃ ہے، یا تعمیراتی فنڈ یا وقف کے لیے ہے، تو واٹس ایپ پر بتا دیں تاکہ ہم اسے صحیح مد میں درج کریں۔'
                     )}
                  </p>
                  <a
                     href={whatsapp('Assalamu alaikum, I have made a donation to Siddique Akbar Trust.')}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn btn-green mt-5"
                  >
                     {t('Tell us about your donation', 'اپنے عطیے کے بارے میں بتائیں')}
                  </a>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-24">
            <div className="wrap">
               <h2 className="display d2">{t('Where your money goes', 'آپ کا پیسہ کہاں جاتا ہے')}</h2>
               <div className="mt-10 grid gap-8 md:grid-cols-3">
                  {FUNDS.map(f => (
                     <div key={f.title[0]} className="border-t-2 border-gold pt-5">
                        <h3 className="display d3">{t(...f.title)}</h3>
                        <p className="mt-2 text-soft">{t(...f.desc)}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section className="lattice bg-emerald py-16 text-white md:py-24">
            <div className="wrap *:max-w-3xl">
               <blockquote>
                  <p className="display d2">
                     {t(
                        '“When a person dies, their deeds come to an end except for three: ongoing charity, knowledge that benefits others, and a righteous child who prays for them.”',
                        '"جب انسان مر جاتا ہے تو اس کے عمل کا سلسلہ ختم ہو جاتا ہے سوائے تین چیزوں کے: صدقہ جاریہ، وہ علم جس سے فائدہ اٹھایا جائے، اور نیک اولاد جو اس کے لیے دعا کرے۔"'
                     )}
                  </p>
                  <footer className="mt-4 text-white/70">{t('Prophet Muhammad ﷺ · Sahih Muslim 1631', 'حضور نبی اکرم ﷺ · صحیح مسلم 1631')}</footer>
               </blockquote>
               <p className="mt-10 text-white/80">
                  {t('Giving from outside India, or need another way to pay?', 'ہندوستان سے باہر سے دے رہے ہیں، یا ادائیگی کا کوئی اور طریقہ چاہیے؟')}{' '}
                  <a
                     href={whatsapp('Assalamu alaikum, I would like to donate to Siddique Akbar Trust and need some help.')}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="font-semibold text-gold underline underline-offset-4"
                  >
                     {t('Message us first', 'پہلے ہمیں پیغام بھیجیں')}
                  </a>
               </p>
            </div>
         </section>
      </>
   );
};

export default Donation;
