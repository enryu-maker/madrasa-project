"use client";

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';

const About = () => {
  const { t } = useLanguage();

  const values = [
    { title: t('Authenticity', 'صداقت'), desc: t('We teach from the classical texts, through teachers who hold a sanad.', 'ہم اصل کتابوں سے، سند یافتہ اساتذہ کے ذریعے پڑھاتے ہیں۔') },
    { title: t('Compassion', 'شفقت'), desc: t('Students are treated gently and looked after.', 'طلباء کے ساتھ نرمی برتی جاتی ہے اور ان کا خیال رکھا جاتا ہے۔') },
    { title: t('Effort', 'محنت'), desc: t('We expect real effort, in study and in worship.', 'ہم پڑھائی اور عبادت دونوں میں محنت کی توقع رکھتے ہیں۔') },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t('About us', 'ہمارے بارے میں')}
        title={t('About the madrasa', 'مدرسے کے بارے میں')}
        lede={t(
          'Abu Bakar Foundation opened in Nashik in 2024.',
          'ابوبکر فاؤنڈیشن 2024 میں ناشک میں قائم ہوئی۔'
        )}
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="eyebrow text-emerald">{t('Since 2024', '2024 سے')}</p>
            <h2 className="display d2 mt-3">{t('How we started', 'ہماری ابتدا')}</h2>
          </div>
          <div className="space-y-5">
            <p>{t('We opened in 2024 to teach the Islamic sciences the traditional way, while making sure our students can also manage in the world outside the madrasa.', 'ہم نے 2024 میں آغاز کیا تاکہ دینی علوم روایتی طریقے سے پڑھائے جائیں، اور ساتھ ہی طلباء مدرسے سے باہر کی دنیا میں بھی اپنے پاؤں پر کھڑے ہو سکیں۔')}</p>
            <p>{t('Students come to us from all kinds of families. We have a Hifz department, the Dars-e-Nizami course and a separate department for girls.', 'ہمارے پاس ہر طرح کے گھرانوں کے طلباء آتے ہیں۔ یہاں شعبہ حفظ، درسِ نظامی اور طالبات کا علیحدہ شعبہ ہے۔')}</p>
            <p>{t('Our teachers hold ijazah in what they teach.', 'ہمارے اساتذہ جو پڑھاتے ہیں اس کی اجازت رکھتے ہیں۔')}</p>
          </div>
        </div>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="border-t-2 border-gold pt-5">
            <h2 className="display d2">{t('Our mission', 'ہمارا مشن')}</h2>
            <p className="mt-4">
              {t('To teach sound Islamic knowledge and good character, so that our students grow up useful to their families and to the people around them.', 'صحیح دینی علم اور اچھا اخلاق سکھانا، تاکہ ہمارے طلباء اپنے گھر والوں اور آس پاس کے لوگوں کے کام آئیں۔')}
            </p>
          </div>
          <div className="border-t-2 border-gold pt-5">
            <h2 className="display d2">{t('Our vision', 'ہمارا وژن')}</h2>
            <p className="mt-4">
              {t('A madrasa where the traditional way of learning is kept alive, and where cost does not keep students out.', 'ایک ایسا مدرسہ جہاں تعلیم کا روایتی طریقہ زندہ رہے اور خرچ کسی طالب علم کی راہ میں رکاوٹ نہ بنے۔')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <h2 className="display d2">{t('What we hold to', 'ہمارے اصول')}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map(v => (
              <div key={v.title}>
                <h3 className="display d3 flex items-baseline gap-3">
                  <span className="khatam -translate-y-0.5" aria-hidden="true" />
                  {v.title}
                </h3>
                <p className="mt-2 text-soft">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lattice bg-emerald py-16 text-white md:py-24">
        <div className="wrap *:max-w-3xl">
          <h2 className="display d2">{t('Want to help, or to enrol?', 'مدد کرنا چاہتے ہیں، یا داخلہ لینا؟')}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/donation" className="btn btn-gold">{t('Donate', 'عطیہ دیں')}</Link>
            <Link href="/admission" className="btn btn-line">{t('Apply for admission', 'داخلے کے لیے درخواست دیں')}</Link>
            <Link href="/contact" className="btn btn-line">{t('Get in touch', 'رابطہ کریں')}</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
