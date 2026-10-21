"use client";

import Link from '@/components/Link';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { FAQS, STATS } from '@/lib/site';

export default function OurInstitution() {
  const { t } = useLanguage();

  const milestones = [
    { year: t('2024', '۲۰۲۴', '२०२४'), label: t('Madrasa opened', 'مدرسہ قائم ہوا', 'मदरसा क़ायम हुआ'), detail: t('The first batch started in Nashik.', 'ناسک میں پہلا بیچ شروع ہوا۔', 'नासिक में पहला बैच शुरू हुआ।') },
    { year: t('2024', '۲۰۲۴', '२०२४'), label: t('Hifz department', 'شعبۂ حفظ', 'हिफ़्ज़ विभाग'), detail: t('Hifz classes began under qualified huffaz.', 'مستند حفاظ کی نگرانی میں حفظ کی کلاسیں شروع ہوئیں۔', 'मुस्तनद हुफ़्फ़ाज़ की निगरानी में हिफ़्ज़ की क्लासें शुरू हुईं।') },
    { year: t('2025', '۲۰۲۵', '२०२५'), label: t('150+ students', '۱۵۰ سے زائد طلباء', '१५० से ज़्यादा छात्र'), detail: t('More than 150 students now study with us.', '۱۵۰ سے زائد طلباء اب ہمارے یہاں زیرِ تعلیم ہیں۔', '१५० से ज़्यादा छात्र अब हमारे यहाँ पढ़ रहे हैं।') },
    { year: t('2026', '۲۰۲۶', '२०۲۶'), label: t('Department for girls (coming soon)', 'شعبۂ طالبات (جلد آرہا ہے)', 'छात्राओं का विभाग (जल्द आ रहा है)'), detail: t('A separate department for girls, with women teachers, opens soon.', 'معلمات کے ساتھ طالبات کا علیحدہ شعبہ جلد کھلے گا۔', 'महिला उस्तानियों کے साथ छात्राओं का अलग विभाग जल्द खुलेगा।') },
  ];

  const approach = [
    { title: t('Quran recitation and memorisation', 'قرآن کی تلاوت اور حفظ', 'क़ुरआन की तिलावत और हिफ़्ज़'), desc: t('Hifz with daily revision and Tajweed, taught by huffaz who work with each student.', 'روزانہ دہرائی اور تجوید کے ساتھ حفظ، ایسے حفاظ سے جو ہر طالب علم پر توجہ دیتے ہیں۔', 'रोज़ाना दोहराई और तजवीद के साथ हिफ़्ज़, ऐसे हुफ़्फ़ाज़ से जो हर छात्र पर ध्यान देते हैं।') },
    { title: t('Fiqh and Hadith', 'فقہ اور حدیث', 'फ़िक़्ह और हदीस'), desc: t('The classical texts in Fiqh, Hadith and Aqeedah.', 'فقہ، حدیث اور عقیدے کی اصل کتابیں۔', 'फ़िक़्ह, हदीस और अक़ीदे की असल किताबें।') },
    { title: t('Akhlaq', 'اخلاق', 'अख़लाक़'), desc: t('Adab, honesty and respect, taught every day and not as a separate subject.', 'ادب، سچائی اور احترام، جو الگ مضمون کے طور پر نہیں بلکہ روزانہ سکھائے جاتے ہیں۔', 'अदब, सच्चाई और इज़्ज़त, जो अलग विषय के तौर पर नहीं बल्कि रोज़ सिखाए जाते हैं।') },
    { title: t('Languages', 'زبانیں', 'भाषाएँ'), desc: t('Arabic, Urdu and English.', 'عربی، اردو اور انگریزی۔', 'अरबी, उर्दू और अंग्रेज़ी।') },
    { title: t('Practical skills', 'عملی ہنر', 'व्यावहारिक हुनर'), desc: t('Everyday skills students will need once they leave.', 'وہ عملی ہنر جن کی طلباء کو فارغ التحصیل ہونے کے بعد ضرورت پڑے گی۔', 'रोज़मर्रा के वे हुनर जिनकी छात्रों को फ़ारिग़ होने के बाद ज़रूरत पड़ेगी।') },
  ];

  const coreValues = [
    { title: t('Faith (Iman)', 'ایمان', 'ईमान'), desc: t('Firm faith comes first.', 'سب سے پہلے پختہ ایمان۔', 'सबसे पहले पक्का ईमान।') },
    { title: t('Knowledge (Ilm)', 'علم', 'इल्म'), desc: t('Sound knowledge, properly learned.', 'صحیح علم، صحیح طریقے سے۔', 'सही इल्म, सही तरीक़े से।') },
    { title: t('Respect (Adab)', 'ادب', 'अदब'), desc: t('Good manners with teachers, parents and each other.', 'اساتذہ، والدین اور ایک دوسرے کے ساتھ ادب۔', 'उस्तादों, माँ-बाप और एक-दूसरे के साथ अदब।') },
    { title: t('Discipline (Nizam)', 'نظم و ضبط', 'निज़ाम (अनुशासन)'), desc: t('A fixed daily routine.', 'روزانہ کا مقرر نظام۔', 'रोज़ का तय निज़ाम।') },
    { title: t('Integrity (Amanah)', 'امانت', 'अमानत'), desc: t("Honesty, and keeping one's word.", 'دیانت داری اور وعدے کی پابندی۔', 'ईमानदारी और वादे की पाबंदी।') },
    { title: t('Compassion (Rahma)', 'رحمت', 'रहमत'), desc: t('Kindness to people and to all creation.', 'انسانوں اور تمام مخلوق پر مہربانی۔', 'इंसानों और तमाम मख़लूक़ पर मेहरबानी।') },
    { title: t('Excellence (Ihsan)', 'احسان', 'एहसान'), desc: t('Doing things as well as they can be done.', 'ہر کام بہترین طریقے سے کرنا۔', 'हर काम बेहतरीन तरीक़े से करना।') },
    { title: t('Service (Khidmah)', 'خدمت', 'ख़िदमत'), desc: t('Serving the community and the Ummah.', 'معاشرے اور امت کی خدمت۔', 'समाज और उम्मत की ख़िदमत।') },
  ];

  const facilities = [
    { title: t('Classrooms', 'کلاس روم', 'क्लासरूम'), desc: t('Proper classrooms with space to sit and study.', 'باقاعدہ کلاس روم، جن میں بیٹھ کر پڑھنے کی مناسب جگہ ہے۔', 'बैठकर पढ़ने के लिए पर्याप्त जगह वाले क्लासरूम।') },
    { title: t('Prayer area', 'نماز کی جگہ', 'नमाज़ की जगह'), desc: t('A musalla for the five daily prayers.', 'پانچوں نمازوں کے لیے مصلیٰ۔', 'पाँचों नमाज़ों के लिए मुसल्ला।') },
    { title: t('Quran rooms', 'قرآن کے کمرے', 'क़ुरआन के कमरे'), desc: t('Quiet rooms for Hifz and recitation.', 'حفظ اور تلاوت کے لیے پرسکون کمرے۔', 'हिफ़्ज़ और तिलावत के लिए शांत कमरे।') },
    { title: t('Library', 'لائبریری', 'लाइब्रेरी'), desc: t('Islamic and general books for students and teachers.', 'طلباء اور اساتذہ کے لیے دینی اور عام کتابیں۔', 'छात्रों और उस्तादों के लिए दीनी और आम किताबें।') },
    { title: t('Safe campus', 'محفوظ کیمپس', 'सुरक्षित कैंपस'), desc: t('Supervised premises, with a separate block for girls coming soon.', 'زیرِ نگرانی احاطہ، لڑکیوں کے لیے الگ بلاک جلد آرہا ہے۔', 'निगरानी वाला परिसर, लड़कियों के लिए अलग ब्लॉक जल्द आ रहा है।') },
  ];

  const parents = [
    t('We keep in touch with you regularly', 'ہم آپ سے باقاعدہ رابطے میں رہتے ہیں', 'हम आपसे नियमित संपर्क में रहते हैं'),
    t('Your child is supervised', 'آپ کا بچہ نگرانی میں رہتا ہے', 'आपका बच्चा निगरानी में रहता है'),
    t('You get progress reports', 'آپ کو کارکردگی کی رپورٹ ملتی ہے', 'आपको प्रगति रिपोर्ट मिलती है'),
    t('Teachers know each student personally', 'اساتذہ ہر طالب علم کو ذاتی طور پر جانتے ہیں', 'उस्ताद हर छात्र को निजी तौर पर जानते हैं'),
  ];


  return (
    <>
      <PageHeader
        eyebrow={t('Jamia Siddhiqe Akbar Ahale Sunnat Trust', 'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ', 'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट')}
        title={t('Our institution', 'ہمارا ادارہ', 'हमारी संस्था')}
        lede={t(
          'What we teach, how we teach it, and what the campus has.',
          'ہم کیا پڑھاتے ہیں، کیسے پڑھاتے ہیں، اور کیمپس میں کیا ہے۔', 'हम क्या पढ़ाते हैं, कैसे पढ़ाते हैं, और कैंपस में क्या है।'
        )}
      />

      <section className="border-b border-line bg-chalk">
        <div className="wrap grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4">
          {STATS.map(s => (
            <p key={s.value[0]}>
              <span className="display block text-4xl text-emerald rtl:text-right">{t(...s.value)}</span>
              <span className="text-soft">{t(...s.label)}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="eyebrow text-emerald">{t('Who we are', 'ہم کون ہیں', 'हम कौन हैं')}</p>
            <h2 className="display d2 mt-3">{t('What kind of madrasa we are', 'ہمارا مدرسہ کیسا ہے', 'हमारा मदरसा कैसा है')}</h2>
          </div>
          <div className="space-y-5">
            <p>{t('Jamia Siddhiqe Akbar Ahale Sunnat Trust opened in 2024 in Nashik, Maharashtra. Students of any background can enrol.', 'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ ۲۰۲۴ میں ناسک، مہاراشٹر میں قائم ہوا۔ ہر پس منظر کے طلباء داخلہ لے سکتے ہیں۔', 'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट २०२४ में नासिक, महाराष्ट्र में क़ायम हुआ। हर पृष्ठभूमि के छात्र दाख़िला ले सकते हैं।')}</p>
            <p>{t('We want students who are firm in their deen, able in their studies and well-mannered.', 'ہم چاہتے ہیں کہ ہمارے طلباء دین میں پختہ، پڑھائی میں قابل اور بااخلاق ہوں۔', 'हम चाहते हैं कि हमारे छात्र दीन में पक्के, पढ़ाई में क़ाबिल और बा-अख़लाक़ हों।')}</p>
            <p>{t('Tarbiyah matters to us as much as lessons do: how a student prays, speaks and treats people.', 'ہمارے نزدیک تربیت اتنی ہی اہم ہے جتنا سبق: طالب علم نماز کیسے پڑھتا ہے، کیسے بات کرتا ہے اور لوگوں سے کیسا برتاؤ کرتا ہے۔', 'हमारे लिए तरबियत उतनी ही अहम है जितना सबक़: छात्र नमाज़ कैसे पढ़ता है, कैसे बात करता है और लोगों से कैसा बर्ताव करता है।')}</p>
          </div>
        </div>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-emerald">{t('How we teach', 'ہم کیسے پڑھاتے ہیں', 'हम कैसे पढ़ाते हैं')}</p>
          <h2 className="display d2 mt-3">{t('What a student studies', 'طالب علم کیا پڑھتا ہے', 'छात्र क्या पढ़ता है')}</h2>
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
          <p className="eyebrow text-emerald">{t('Values', 'اقدار', 'मूल्य')}</p>
          <h2 className="display d2 mt-3">{t('What we teach students to care about', 'ہم طلباء کو کن باتوں کی قدر سکھاتے ہیں', 'हम छात्रों को किन बातों की क़द्र सिखाते हैं')}</h2>
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
          <p className="eyebrow text-emerald">{t('Campus', 'کیمپس', 'कैंपस')}</p>
          <h2 className="display d2 mt-3">{t('What the campus has', 'کیمپس میں کیا ہے', 'कैंपस में क्या है')}</h2>
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
            <h2 className="display d2">{t('For parents', 'والدین کے لیے', 'माता-पिता के लिए')}</h2>
            <p className="mt-4 text-white/90">
              {t(
                'You are trusting us with your child, and we take that seriously. This is what you can expect from us.',
                'آپ اپنا بچہ ہمارے سپرد کرتے ہیں، اور ہم اس ذمہ داری کو سنجیدگی سے لیتے ہیں۔ آپ ہم سے یہ توقع رکھ سکتے ہیں۔', 'आप अपना बच्चा हमारे सुपुर्द करते हैं, और हम इस ज़िम्मेदारी को गंभीरता से लेते हैं। आप हमसे यह उम्मीद रख सकते हैं।'
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
          <p className="eyebrow text-emerald">{t('So far', 'اب تک', 'अब तक')}</p>
          <h2 className="display d2 mt-3">{t('Our history', 'ہماری تاریخ', 'हमारा इतिहास')}</h2>
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
          <h2 className="display d2">{t('Common questions', 'عام سوالات', 'आम सवाल')}</h2>
          <div className="mt-8 border-t border-line">
            {FAQS.map(faq => (
              <details key={faq.q[0]} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {t(...faq.q)}
                  <ChevronDown className="h-5 w-5 shrink-0 text-emerald transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="pb-5 text-soft">{t(...faq.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="lattice bg-emerald py-16 text-white md:py-24">
        <div className="wrap *:max-w-3xl">
          <h2 className="display d2">{t('Admissions are open', 'داخلے جاری ہیں', 'दाख़िले जारी हैं')}</h2>
          <p className="mt-4 text-white/80">{t('Apply for a place, or help pay for someone else\'s.', 'داخلے کے لیے درخواست دیں، یا کسی اور کی تعلیم کا خرچ اٹھانے میں مدد کریں۔', 'दाख़िले के लिए आवेदन करें, या किसी और की तालीम का ख़र्च उठाने में मदद करें।')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/admission" className="btn btn-gold">{t('Apply for admission', 'داخلے کے لیے درخواست دیں', 'दाख़िले के लिए आवेदन करें')}</Link>
            <Link href="/donation" className="btn btn-line">{t('Donate', 'عطیہ دیں', 'दान दें')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
