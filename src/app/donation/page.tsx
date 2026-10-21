"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import DonateBox from '@/components/DonateBox';
import CopyButton from '@/components/CopyButton';
import { BANK, FUNDS, localize, whatsapp } from '@/lib/site';
import { SITE_URL } from '@/lib/seo';

const Donation = () => {
   const { t, lang } = useLanguage();
   const appeal = t(
      'Help a student learn the Quran at Jamia Siddhiqe Akbar Ahale Sunnat Trust, Nashik. Zakat and sadaqah accepted, 80G tax-deductible. Donate by UPI or bank:',
      'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ، ناسک میں ایک طالب علم کو قرآن سیکھنے میں مدد دیں۔ زکوٰۃ اور صدقات قبول ہیں، دفعہ ۸۰ جی کے تحت ٹیکس میں چھوٹ۔ یو پی آئی یا بینک سے عطیہ دیں:', 'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट, नासिक में एक छात्र को क़ुरआन सीखने में मदद करें। ज़कात और सदक़ा क़बूल है, धारा ८०जी के तहत टैक्स में छूट। UPI या बैंक से दान दें:'
   );

   return (
      <>
         <PageHeader
            eyebrow={t('Donate', 'عطیہ دیں', 'दान दें')}
            title={t('Help a student learn the Quran', 'ایک طالب علم کو قرآن سیکھنے میں مدد دیں', 'एक छात्र को क़ुरआन सीखने में मदद करें')}
            lede={t(
               'Donations keep our fees low and pay for students who cannot afford them.',
               'عطیات سے ہماری فیس کم رہتی ہے اور ان طلباء کا خرچ پورا ہوتا ہے جو فیس نہیں دے سکتے۔', 'दान से हमारी फ़ीस कम रहती है और उन छात्रों का ख़र्च पूरा होता है जो फ़ीस नहीं दे सकते।'
            )}
         />

         <section className="bg-chalk py-16 md:py-24">
            <div className="wrap grid gap-12 lg:grid-cols-[24rem_1fr] lg:items-start lg:gap-16">
               <DonateBox showBankLink={false} />

               <div id="bank" className="scroll-mt-24">
                  <h2 className="display d2">{t('Bank transfer', 'بینک ٹرانسفر', 'बैंक ट्रांसफ़र')}</h2>
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
                        'The trust is registered under 80G and 12A, so Indian taxpayers can claim a deduction. After you give, send us your name, PAN and the amount on WhatsApp for your 80G receipt. Tell us too if it is Zakat, or for the building fund or Waqf, so we record it correctly.',
                        'ٹرسٹ دفعہ ۸۰ جی اور ۱۲ اے کے تحت رجسٹرڈ ہے، اس لیے ہندوستانی ٹیکس دہندگان ٹیکس میں چھوٹ لے سکتے ہیں۔ عطیہ دینے کے بعد ۸۰ جی رسید کے لیے اپنا نام، پین (PAN) اور رقم واٹس ایپ پر بھیجیں۔ اگر یہ زکوٰۃ ہے، یا تعمیراتی فنڈ یا وقف کے لیے ہے، تو یہ بھی بتا دیں تاکہ ہم اسے صحیح مد میں درج کریں۔', 'ट्रस्ट धारा ८०जी और १२ए के तहत रजिस्टर्ड है, इसलिए भारतीय टैक्सदाता टैक्स में छूट ले सकते हैं। दान देने के बाद ८०जी रसीद के लिए अपना नाम, PAN और रक़म व्हाट्सऐप पर भेजें। अगर यह ज़कात है, या बिल्डिंग फ़ंड या वक़्फ़ के लिए है, तो यह भी बता दें ताकि हम इसे सही मद में दर्ज करें।'
                     )}
                  </p>
                  <a
                     href={whatsapp('Assalamu alaikum, I have made a donation to Jamia Siddhiqe Akbar Ahale Sunnat Trust.\nName:\nAmount:\nPAN (for 80G receipt):\nPurpose (Zakat / Sadaqah / Building / Waqf):')}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn btn-green mt-5"
                  >
                     {t('Get your 80G receipt', 'اپنی ۸۰ جی رسید حاصل کریں', 'अपनी ८०जी रसीद पाएँ')}
                  </a>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-24">
            <div className="wrap">
               <h2 className="display d2">{t('Where your money goes', 'آپ کا عطیہ کہاں خرچ ہوتا ہے', 'आपका दान कहाँ ख़र्च होता है')}</h2>
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
                        '"جب انسان مر جاتا ہے تو اس کے عمل کا سلسلہ ختم ہو جاتا ہے سوائے تین چیزوں کے: صدقۂ جاریہ، وہ علم جس سے فائدہ اٹھایا جائے، اور نیک اولاد جو اس کے لیے دعا کرے۔"', '“जब इंसान मर जाता है तो उसके अमल का सिलसिला ख़त्म हो जाता है, सिवाय तीन चीज़ों के: सदक़ा-ए-जारिया, वह इल्म जिससे फ़ायदा उठाया जाए, और नेक औलाद जो उसके लिए दुआ करे।”'
                     )}
                  </p>
                  <footer className="mt-4 text-white/70">{t('Prophet Muhammad ﷺ — Sahih Muslim: 1631', 'حضور نبی اکرم ﷺ — صحیح مسلم: ۱۶۳۱', 'पैग़ंबर मुहम्मद ﷺ — सहीह मुस्लिम: १६३१')}</footer>
               </blockquote>
               <p className="mt-10 text-white/80">
                  {t(
                     'Living outside India? Indian citizens abroad can give by UPI or bank transfer from their Indian (NRE/NRO) account. We cannot yet accept money from foreign accounts or from non-Indian citizens.',
                     'ہندوستان سے باہر رہتے ہیں؟ بیرونِ ملک مقیم ہندوستانی شہری اپنے ہندوستانی (NRE/NRO) اکاؤنٹ سے یو پی آئی یا بینک ٹرانسفر کے ذریعے عطیہ دے سکتے ہیں۔ فی الحال ہم غیر ملکی اکاؤنٹس یا غیر ہندوستانی شہریوں سے رقم قبول نہیں کر سکتے۔', 'भारत से बाहर रहते हैं? विदेश में रहने वाले भारतीय नागरिक अपने भारतीय (NRE/NRO) खाते से UPI या बैंक ट्रांसफ़र के ज़रिए दान दे सकते हैं। फ़िलहाल हम विदेशी खातों या ग़ैर-भारतीय नागरिकों से रक़म स्वीकार नहीं कर सकते।'
                  )}{' '}
                  <a
                     href={whatsapp('Assalamu alaikum, I would like to donate to Jamia Siddhiqe Akbar Ahale Sunnat Trust and need some help.')}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="font-semibold text-gold underline underline-offset-4"
                  >
                     {t('Questions? Message us', 'سوال ہے؟ ہمیں پیغام بھیجیں', 'कोई सवाल? हमें संदेश भेजें')}
                  </a>
               </p>
               <p className="mt-10 font-semibold">{t('Can’t give right now? Sharing helps just as much.', 'ابھی عطیہ نہیں دے سکتے؟ شیئر کرنا بھی اتنا ہی مددگار ہے۔', 'अभी दान नहीं दे सकते? शेयर करना भी उतना ही मददगार है।')}</p>
               <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${appeal} ${SITE_URL}${localize('/donation', lang)}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold mt-4"
               >
                  {t('Share on WhatsApp', 'واٹس ایپ پر شیئر کریں', 'व्हाट्सऐप पर शेयर करें')}
               </a>
            </div>
         </section>
      </>
   );
};

export default Donation;
