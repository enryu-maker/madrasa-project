"use client";

import { FormEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { PROGRAMS, whatsapp } from '@/lib/site';

const AdmissionPage = () => {
  const { t } = useLanguage();

  // There is no server behind this site, so the application is handed to WhatsApp, where the office reads it.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    window.open(
      whatsapp(
        `Assalamu alaikum, I would like to apply for admission.\n` +
        `Student: ${d.get('fullName')}\n` +
        `Father's name: ${d.get('fatherName')}\n` +
        `Program: ${d.get('program')}\n` +
        `Phone: ${d.get('phone')}`
      ),
      '_blank',
      'noopener'
    );
  };

  const steps = [
    { title: t('Send the form', 'فارم بھیجیں', 'फ़ॉर्म भेजें'), desc: t('Fill it in below. WhatsApp opens with your details; press send.', 'نیچے فارم پُر کریں۔ واٹس ایپ آپ کی تفصیلات کے ساتھ کھلے گا؛ بھیج دیں۔', 'नीचे फ़ॉर्म भरें। व्हाट्सऐप आपकी जानकारी के साथ खुलेगा; भेज दें।') },
    { title: t('Short interview', 'مختصر انٹرویو', 'छोटा इंटरव्यू'), desc: t('One of our teachers meets the student.', 'ہمارے ایک استاد طالب علم سے ملتے ہیں۔', 'हमारे एक उस्ताद छात्र से मिलते हैं।') },
    { title: t('Documents', 'کاغذات', 'दस्तावेज़'), desc: t('Bring the documents we ask for.', 'جو کاغذات ہم مانگیں وہ ساتھ لے آئیں۔', 'जो दस्तावेज़ हम माँगें, वे साथ लाएँ।') },
    { title: t('First day', 'پہلا دن', 'पहला दिन'), desc: t('We show the student around and classes begin.', 'ہم طالب علم کو مدرسہ دکھاتے ہیں اور کلاسیں شروع ہو جاتی ہیں۔', 'हम छात्र को मदरसा दिखाते हैं और क्लासें शुरू हो जाती हैं।') },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t('Enrolling for 2026', 'داخلے برائے 2026', 'दाख़िले 2026 के लिए')}
        title={t('Admissions', 'داخلہ', 'दाख़िला')}
        lede={t(
          'For children, young people and adults. Fees are low; ask us what the fee is for your course.',
          'بچوں، نوجوانوں اور بڑوں کے لیے۔ فیس کم ہے؛ اپنے کورس کی فیس ہم سے پوچھ لیں۔', 'बच्चों, नौजवानों और बड़ों के लिए। फ़ीस कम है; अपने कोर्स की फ़ीस हमसे पूछ लें।'
        )}
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="display d2">{t('How admission works', 'داخلہ کیسے ہوتا ہے', 'दाख़िला कैसे होता है')}</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="display text-2xl text-emerald" dir="ltr">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-soft">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 rounded-xl border border-line bg-chalk p-6 md:p-8">
            <h2 className="display d3">{t('Application', 'درخواست', 'आवेदन')}</h2>
            <label className="block font-medium">
              {t("Student's full name", 'طالب علم کا مکمل نام', 'छात्र का पूरा नाम')}
              <input name="fullName" required autoComplete="name" className="field mt-1" />
            </label>
            <label className="block font-medium">
              {t("Father's name", 'والد کا نام', 'पिता का नाम')}
              <input name="fatherName" required className="field mt-1" />
            </label>
            <label className="block font-medium">
              {t('Program', 'پروگرام', 'कोर्स')}
              <select name="program" required className="field mt-1" defaultValue="">
                <option value="" disabled>{t('Choose a program', 'پروگرام منتخب کریں', 'कोर्स चुनें')}</option>
                {PROGRAMS.map(p => (
                  <option key={p.title[0]} value={p.title[0]}>{t(...p.title)}</option>
                ))}
              </select>
            </label>
            <label className="block font-medium">
              {t('WhatsApp number', 'واٹس ایپ نمبر', 'व्हाट्सऐप नंबर')}
              <input name="phone" type="tel" required autoComplete="tel" dir="ltr" className="field mt-1" />
            </label>
            <button className="btn btn-green w-full">{t('Send application on WhatsApp', 'واٹس ایپ پر درخواست بھیجیں', 'व्हाट्सऐप पर आवेदन भेजें')}</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AdmissionPage;
