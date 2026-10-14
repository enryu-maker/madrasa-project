"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from '@/components/Link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import DonateBox from '@/components/DonateBox';
import { FUNDS, PHOTOS, PROGRAMS, STATS, whatsapp } from '@/lib/site';
import { cn } from '@/lib/utils';

export default function Home() {
  const { t } = useLanguage();

  // Picked after mount, so the server and the browser render the same HTML first.
  const [picks, setPicks] = useState<typeof PHOTOS>([]);
  useEffect(() => {
    // ponytail: sort-by-random is a slightly uneven shuffle; use Fisher-Yates if that ever matters
    // eslint-disable-next-line react-hooks/set-state-in-effect -- a random pick can't be made during render without a hydration mismatch
    setPicks([...PHOTOS].sort(() => Math.random() - 0.5).slice(0, 5));
  }, []);


  const arrow = <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />;

  return (
    <>
      {/* Hero: the hadith the madrasa exists for, with the donation card beside it */}
      <section className="lattice bg-ink text-white">
        <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-[1fr_24rem] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span className="khatam" aria-hidden="true" />
              {t('Madrasa · Nashik, Maharashtra', 'مدرسہ · ناسک، مہاراشٹر')}
            </p>
            <p lang="ar" dir="rtl" className="arabic mt-8 text-left text-[clamp(2.25rem,5.4vw,4rem)] text-gold rtl:text-right">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </p>
            <h1 className="display d1 mt-4 max-w-[20ch]">
              {t('The best of you are those who learn the Quran and teach it.', 'تم میں سے بہترین وہ ہے جو قرآن سیکھے اور سکھائے۔')}
            </h1>
            <p className="mt-4 text-[0.9375rem] text-white/65">
              {t('Prophet Muhammad ﷺ · Sahih al-Bukhari 5027', 'حضور نبی اکرم ﷺ · صحیح بخاری 5027')}
            </p>
            <p className="lede mt-8 max-w-xl text-white/85">
              {t(
                'Siddique Akbar Trust is a madrasa in Nashik. We teach Quran, Hifz and the Islamic sciences, and we keep the fees low enough that any family can send a child. Donations are what make that possible.',
                'صدیق اکبر ٹرسٹ ناسک کا ایک مدرسہ ہے۔ ہم قرآن، حفظ اور دینی علوم پڑھاتے ہیں، اور فیس اتنی کم رکھتے ہیں کہ کوئی بھی گھرانہ اپنے بچے کو بھیج سکے۔ یہ آپ کے عطیات سے ممکن ہوتا ہے۔'
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-semibold">
              <a href="#teach" className="inline-flex items-center gap-2 underline decoration-gold underline-offset-8 hover:text-gold">
                {t('What we teach', 'ہم کیا پڑھاتے ہیں')}
              </a>
              <Link href="/admission" className="inline-flex items-center gap-2 underline decoration-gold underline-offset-8 hover:text-gold">
                {t('Apply for admission', 'داخلے کے لیے درخواست دیں')} {arrow}
              </Link>
            </div>
          </div>
          <DonateBox />
        </div>
      </section>

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

      {/* Where the money goes */}
      <section className="py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-emerald">{t('Your donation', 'آپ کا عطیہ')}</p>
          <h2 className="display d2 mt-3 max-w-2xl">{t('Where your money goes', 'آپ کا پیسہ کہاں جاتا ہے')}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {FUNDS.map(f => (
              <div key={f.title[0]} className="border-t-2 border-gold pt-5">
                <h3 className="display d3">{t(...f.title)}</h3>
                <p className="mt-2 text-soft">{t(...f.desc)}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-14 max-w-3xl border-s-2 border-gold ps-6">
            <p className="display d3">
              {t(
                '“When a person dies, their deeds come to an end except for three: ongoing charity, knowledge that benefits others, and a righteous child who prays for them.”',
                '"جب انسان مر جاتا ہے تو اس کے عمل کا سلسلہ ختم ہو جاتا ہے سوائے تین چیزوں کے: صدقہ جاریہ، وہ علم جس سے فائدہ اٹھایا جائے، اور نیک اولاد جو اس کے لیے دعا کرے۔"'
              )}
            </p>
            <footer className="mt-3 text-[0.9375rem] text-soft">{t('Prophet Muhammad ﷺ · Sahih Muslim 1631', 'حضور نبی اکرم ﷺ · صحیح مسلم 1631')}</footer>
          </blockquote>
          <Link href="/donation" className="btn btn-green mt-10">{t('Donate', 'عطیہ دیں')} {arrow}</Link>
        </div>
      </section>

      {/* What is taught */}
      <section id="teach" className="scroll-mt-16 bg-chalk py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-emerald">{t('Education', 'تعلیم')}</p>
          <h2 className="display d2 mt-3 max-w-2xl">{t('What we teach', 'ہم کیا پڑھاتے ہیں')}</h2>
          <ul className="mt-10 border-t border-line">
            {PROGRAMS.map(p => (
              <li key={p.title[0]} className="grid gap-1 border-b border-line py-5 md:grid-cols-[18rem_1fr] md:gap-8">
                <h3 className="display d3 flex items-baseline gap-3">
                  <span className="khatam -translate-y-0.5" aria-hidden="true" />
                  {t(...p.title)}
                </h3>
                <p className="text-soft">{t(...p.desc)}</p>
              </li>
            ))}
          </ul>
          <Link href="/our-institution" className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald underline underline-offset-8">
            {t('How we teach, and where', 'ہم کیسے اور کہاں پڑھاتے ہیں')} {arrow}
          </Link>
        </div>
      </section>

      {/* Low fees */}
      <section className="bg-emerald py-16 text-white md:py-24">
        <div className="wrap grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-gold">{t('Our fees', 'ہماری فیس')}</p>
            <h2 className="display d2 mt-3">
              {t(
                'No child should miss out on the Quran because of money.',
                'پیسے کی وجہ سے کوئی بچہ قرآن سے محروم نہ رہے۔'
              )}
            </h2>
          </div>
          <div>
            <p className="lede text-white/90">
              {t(
                'We charge as little as we can. Donations cover the students who cannot pay, support their teachers, and go towards more space.',
                'ہم جتنی کم ہو سکے اتنی فیس لیتے ہیں۔ عطیات سے ان طلباء کا خرچ پورا ہوتا ہے جو فیس نہیں دے سکتے، اساتذہ کی مدد ہوتی ہے، اور مزید جگہ بنتی ہے۔'
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/admission" className="btn btn-gold">{t('Apply for admission', 'داخلے کے لیے درخواست دیں')}</Link>
              <a
                href={whatsapp('Assalamu alaikum, I would like to know the fees at Siddique Akbar Trust.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line"
              >
                {t('Ask about fees on WhatsApp', 'واٹس ایپ پر فیس معلوم کریں')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-emerald">{t('Since 2024', '2024 سے')}</p>
            <h2 className="display d2 mt-3">{t('A madrasa in Sanjiv Nagar, Nashik', 'سنجیو نگر، ناسک کا ایک مدرسہ')}</h2>
          </div>
          <div>
            <p>
              {t(
                'We started in 2024. Students here learn the traditional Islamic sciences, and also the languages and skills they need outside the madrasa.',
                'ہم نے 2024 میں آغاز کیا۔ یہاں طلباء روایتی دینی علوم کے ساتھ وہ زبانیں اور ہنر بھی سیکھتے ہیں جن کی مدرسے سے باہر ضرورت پڑتی ہے۔'
              )}
            </p>
            <ul className="mt-6 space-y-2">
              {[
                t('Teachers who hold ijazah', 'اجازت یافتہ اساتذہ'),
                t('Hifz and Dars-e-Nizami', 'حفظ اور درسِ نظامی'),
                t('A separate department for girls', 'طالبات کے لیے علیحدہ شعبہ'),
              ].map(item => (
                <li key={item} className="flex items-baseline gap-3">
                  <span className="khatam -translate-y-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald underline underline-offset-8">
              {t('More about us', 'ہمارے بارے میں مزید')} {arrow}
            </Link>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-chalk py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-emerald">{t('Gallery', 'گیلری')}</p>
          <h2 className="display d2 mt-3">{t('Life at the madrasa', 'مدرسے کی زندگی')}</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
            {Array.from({ length: 5 }, (_, i) => picks[i]).map((p, i) => (
              <div
                key={i}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-xl bg-line",
                  i === 0 && "max-md:col-span-2 max-md:aspect-[2/1]"
                )}
              >
                {p && (
                  <Image
                    src={`/gallery/${p.file}.jpg`}
                    alt={t(...p.alt)}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>
          <Link href="/gallery" className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald underline underline-offset-8">
            {t('See the gallery', 'گیلری دیکھیں')} {arrow}
          </Link>
        </div>
      </section>


      {/* Closing */}
      <section className="lattice bg-emerald py-16 text-white md:py-24">
        <div className="wrap grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="display d2">{t('Pay for a student’s education', 'ایک طالب علم کی تعلیم کا خرچ اٹھائیں')}</h2>
            <p className="mt-4 text-white/80">
              {t('UPI or bank transfer. Any amount helps.', 'یو پی آئی یا بینک ٹرانسفر۔ ہر رقم کام آتی ہے۔')}
            </p>
            <Link href="/donation" className="btn btn-gold mt-6">{t('Donate', 'عطیہ دیں')}</Link>
          </div>
          <div>
            <h2 className="display d2">{t('Enrol yourself or your child', 'اپنا یا اپنے بچے کا داخلہ کرائیں')}</h2>
            <p className="mt-4 text-white/80">
              {t('Admissions are open for 2026.', '2026 کے لیے داخلے جاری ہیں۔')}
            </p>
            <Link href="/admission" className="btn btn-line mt-6">{t('Apply for admission', 'داخلے کے لیے درخواست دیں')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
