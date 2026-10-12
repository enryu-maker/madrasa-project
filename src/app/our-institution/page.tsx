"use client";

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { PHONE, STATS } from '@/lib/site';

export default function OurInstitution() {
  const { t } = useLanguage();

  const milestones = [
    { year: '2024', label: t('Madrasa opened', 'مدرسہ قائم ہوا'), detail: t('The first batch started in Your City.', 'آپ کے شہر میں پہلا بیچ شروع ہوا۔') },
    { year: '2024', label: t('Hifz department', 'شعبہ حفظ'), detail: t('Hifz classes began under qualified huffaz.', 'مستند حفاظ کی نگرانی میں حفظ کی کلاسیں شروع ہوئیں۔') },
    { year: '2025', label: t('Department for girls', 'شعبہ طالبات'), detail: t('A separate department for girls opened, with women teachers.', 'خواتین اساتذہ کے ساتھ طالبات کا علیحدہ شعبہ کھلا۔') },
    { year: '2026', label: t('2,000+ students', '2,000 سے زائد طلباء'), detail: t('More than 2,000 students enrolled.', '2,000 سے زائد طلباء داخل ہو چکے ہیں۔') },
  ];

  const approach = [
    { title: t('Quran recitation and memorisation', 'قرآن کی تلاوت اور حفظ'), desc: t('Hifz with daily revision and Tajweed, taught by huffaz who work with each student.', 'روزانہ دہرائی اور تجوید کے ساتھ حفظ، ایسے حفاظ سے جو ہر طالب علم پر توجہ دیتے ہیں۔') },
    { title: t('Fiqh and Hadith', 'فقہ اور حدیث'), desc: t('The classical texts in Fiqh, Hadith and Aqeedah.', 'فقہ، حدیث اور عقیدے کی اصل کتابیں۔') },
    { title: t('Akhlaq', 'اخلاق'), desc: t('Adab, honesty and respect, taught every day and not as a separate subject.', 'ادب، سچائی اور احترام، جو الگ مضمون کے طور پر نہیں بلکہ روزانہ سکھائے جاتے ہیں۔') },
    { title: t('Languages', 'زبانیں'), desc: t('Arabic, Urdu and English.', 'عربی، اردو اور انگریزی۔') },
    { title: t('Practical skills', 'عملی ہنر'), desc: t('Everyday skills students will need once they leave.', 'وہ عملی ہنر جن کی طلباء کو فارغ ہونے کے بعد ضرورت پڑے گی۔') },
  ];

  const coreValues = [
    { title: t('Faith (Iman)', 'ایمان'), desc: t('Firm faith comes first.', 'سب سے پہلے پختہ ایمان۔') },
    { title: t('Knowledge (Ilm)', 'علم'), desc: t('Sound knowledge, properly learned.', 'صحیح علم، صحیح طریقے سے۔') },
    { title: t('Respect (Adab)', 'ادب'), desc: t('Good manners with teachers, parents and each other.', 'اساتذہ، والدین اور ایک دوسرے کے ساتھ ادب۔') },
    { title: t('Discipline (Nizam)', 'نظم'), desc: t('A fixed daily routine.', 'روزانہ کا مقرر نظام۔') },
    { title: t('Integrity (Amanah)', 'امانت'), desc: t("Honesty, and keeping one's word.", 'دیانت داری اور وعدے کی پابندی۔') },
    { title: t('Compassion (Rahma)', 'رحمت'), desc: t('Kindness to people and to all creation.', 'انسانوں اور تمام مخلوق پر مہربانی۔') },
    { title: t('Excellence (Ihsan)', 'احسان'), desc: t('Doing things as well as they can be done.', 'ہر کام بہترین طریقے سے کرنا۔') },
    { title: t('Service (Khidmah)', 'خدمت'), desc: t('Serving the community and the Ummah.', 'برادری اور امت کی خدمت۔') },
  ];

  const facilities = [
    { title: t('Classrooms', 'کلاس رومز'), desc: t('Proper classrooms with space to sit and study.', 'بیٹھ کر پڑھنے کی مناسب جگہ والے کلاس روم۔') },
    { title: t('Prayer area', 'نماز کی جگہ'), desc: t('A musalla for the five daily prayers.', 'پانچوں نمازوں کے لیے مصلیٰ۔') },
    { title: t('Quran rooms', 'قرآن کے کمرے'), desc: t('Quiet rooms for Hifz and recitation.', 'حفظ اور تلاوت کے لیے پرسکون کمرے۔') },
    { title: t('Library', 'لائبریری'), desc: t('Islamic and general books for students and teachers.', 'طلباء اور اساتذہ کے لیے دینی اور عام کتابیں۔') },
    { title: t('Safe campus', 'محفوظ کیمپس'), desc: t('Supervised premises, with separate blocks for boys and girls.', 'نگرانی والا احاطہ، لڑکوں اور لڑکیوں کے الگ بلاک۔') },
  ];

  const parents = [
    t('We keep in touch with you regularly', 'ہم آپ سے باقاعدہ رابطے میں رہتے ہیں'),
    t('Your child is supervised', 'آپ کا بچہ نگرانی میں رہتا ہے'),
    t('You get progress reports', 'آپ کو کارکردگی کی رپورٹ ملتی ہے'),
    t('Teachers know each student personally', 'اساتذہ ہر طالب علم کو ذاتی طور پر جانتے ہیں'),
  ];

  const faqs = [
    { q: t('Who can enrol?', 'کون داخلہ لے سکتا ہے؟'), a: t('Anyone: children, young people and adults. Boys and girls are both admitted, and girls study in a separate department.', 'کوئی بھی: بچے، نوجوان اور بڑے۔ لڑکے اور لڑکیاں دونوں داخلہ لے سکتے ہیں، اور طالبات کا شعبہ الگ ہے۔') },
    { q: t('Do your teachers hold ijazah?', 'کیا آپ کے اساتذہ کے پاس اجازت ہے؟'), a: t('Yes. Every teacher holds ijazah in the subjects they teach.', 'جی ہاں۔ ہر استاد جو مضمون پڑھاتا ہے اس کی اجازت رکھتا ہے۔') },
    { q: t('Is there a separate section for girls?', 'کیا طالبات کا شعبہ الگ ہے؟'), a: t('Yes. Girls study in a separate department with women staff.', 'جی ہاں۔ طالبات علیحدہ شعبے میں خواتین عملے کے ساتھ پڑھتی ہیں۔') },
    { q: t('What courses do you offer?', 'آپ کون سے کورس پڑھاتے ہیں؟'), a: t('Hifz-ul-Quran, Tajweed, Dars-e-Nizami (the eight-year Aalim course), Hadith, Fiqh, and the Aalimah course for girls.', 'حفظ القرآن، تجوید، درسِ نظامی (آٹھ سالہ عالم کورس)، حدیث، فقہ، اور طالبات کے لیے عالمہ کورس۔') },
    { q: t('How do I apply?', 'درخواست کیسے دیں؟'), a: t(`Fill in the form on the Admissions page, or message us on WhatsApp at ${PHONE}.`, `داخلہ کے صفحے پر فارم پُر کریں، یا واٹس ایپ پر ${PHONE} پر پیغام بھیجیں۔`) },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t('Siddique Akbar Trust', 'صدیق اکبر ٹرسٹ')}
        title={t('Our institution', 'ہمارا ادارہ')}
        lede={t(
          'What we teach, how we teach it, and what the campus has.',
          'ہم کیا پڑھاتے ہیں، کیسے پڑھاتے ہیں، اور کیمپس میں کیا ہے۔'
        )}
      />

      <section className="border-b border-line bg-chalk">
        <div className="wrap grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4">
          {STATS.map(s => (
            <p key={s.value}>
              <span className="display block text-4xl text-emerald rtl:text-right" dir="ltr">{s.value}</span>
              <span className="text-soft">{t(...s.label)}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="eyebrow text-emerald">{t('Who we are', 'ہم کون ہیں')}</p>
            <h2 className="display d2 mt-3">{t('What kind of madrasa we are', 'ہم کس طرح کا مدرسہ ہیں')}</h2>
          </div>
          <div className="space-y-5">
            <p>{t('Siddique Akbar Trust opened in 2024 in Your City, Your State. Students of any background can enrol.', 'صدیق اکبر ٹرسٹ 2024 میں آپ کے شہر، آپ کی ریاست میں قائم ہوا۔ ہر پس منظر کے طلباء داخلہ لے سکتے ہیں۔')}</p>
            <p>{t('We want students who are firm in their deen, able in their studies and well-mannered.', 'ہم چاہتے ہیں کہ ہمارے طلباء دین میں پختہ، پڑھائی میں قابل اور بااخلاق ہوں۔')}</p>
            <p>{t('Tarbiyah matters to us as much as lessons do: how a student prays, speaks and treats people.', 'ہمارے نزدیک تربیت اتنی ہی اہم ہے جتنا سبق: طالب علم نماز کیسے پڑھتا ہے، کیسے بات کرتا ہے اور لوگوں سے کیسا برتاؤ کرتا ہے۔')}</p>
          </div>
        </div>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-emerald">{t('How we teach', 'ہم کیسے پڑھاتے ہیں')}</p>
          <h2 className="display d2 mt-3">{t('What a student studies', 'طالب علم کیا پڑھتا ہے')}</h2>
          <ul className="mt-10 border-t border-line">
            {approach.map(item => (
              <li key={item.title} className="grid gap-1 border-b border-line py-5 md:grid-cols-[22rem_1fr] md:gap-8">
                <h3 className="display d3">{item.title}</h3>
                <p className="text-soft">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-emerald">{t('Values', 'اقدار')}</p>
          <h2 className="display d2 mt-3">{t('What we teach students to care about', 'ہم طلباء کو کن باتوں کی قدر سکھاتے ہیں')}</h2>
          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map(v => (
              <div key={v.title} className="border-t-2 border-gold pt-4">
                <h3 className="display d3">{v.title}</h3>
                <p className="mt-1 text-soft">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-emerald">{t('Campus', 'کیمپس')}</p>
          <h2 className="display d2 mt-3">{t('What the campus has', 'کیمپس میں کیا ہے')}</h2>
          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map(f => (
              <div key={f.title}>
                <h3 className="display d3 flex items-baseline gap-3">
                  <span className="khatam -translate-y-0.5" aria-hidden="true" />
                  {f.title}
                </h3>
                <p className="mt-1 text-soft">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald py-16 text-white md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="display d2">{t('For parents', 'والدین کے لیے')}</h2>
            <p className="mt-4 text-white/90">
              {t(
                'You are trusting us with your child, and we take that seriously. This is what you can expect from us.',
                'آپ اپنا بچہ ہمارے سپرد کرتے ہیں، اور ہم اس ذمہ داری کو سنجیدگی سے لیتے ہیں۔ آپ ہم سے یہ توقع رکھ سکتے ہیں۔'
              )}
            </p>
          </div>
          <ul className="space-y-3">
            {parents.map(item => (
              <li key={item} className="flex items-baseline gap-3 border-b border-white/25 pb-3">
                <span className="khatam -translate-y-0.5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-emerald">{t('So far', 'اب تک')}</p>
          <h2 className="display d2 mt-3">{t('Our history', 'ہماری تاریخ')}</h2>
          <ol className="mt-10 max-w-3xl border-s-2 border-gold">
            {milestones.map(m => (
              <li key={m.label} className="pb-8 ps-6 last:pb-0">
                <p className="display text-2xl text-emerald rtl:text-right" dir="ltr">{m.year}</p>
                <h3 className="font-semibold">{m.label}</h3>
                <p className="text-soft">{m.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <div className="wrap *:max-w-3xl">
          <h2 className="display d2">{t('Common questions', 'عام سوالات')}</h2>
          <div className="mt-8 border-t border-line">
            {faqs.map(faq => (
              <details key={faq.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-emerald transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="pb-5 text-soft">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="lattice bg-emerald py-16 text-white md:py-24">
        <div className="wrap *:max-w-3xl">
          <h2 className="display d2">{t('Admissions are open', 'داخلے جاری ہیں')}</h2>
          <p className="mt-4 text-white/80">{t('Apply for a place, or help pay for someone else\'s.', 'داخلے کے لیے درخواست دیں، یا کسی اور کی تعلیم کا خرچ اٹھانے میں مدد کریں۔')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/admission" className="btn btn-gold">{t('Apply for admission', 'داخلے کے لیے درخواست دیں')}</Link>
            <Link href="/donation" className="btn btn-line">{t('Donate', 'عطیہ دیں')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
