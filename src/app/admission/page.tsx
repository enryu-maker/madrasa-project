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
    { title: t('Send the form', 'فارم بھیجیں'), desc: t('Fill it in below. WhatsApp opens with your details; press send.', 'نیچے فارم پُر کریں۔ واٹس ایپ آپ کی تفصیلات کے ساتھ کھلے گا؛ بھیج دیں۔') },
    { title: t('Short interview', 'مختصر انٹرویو'), desc: t('One of our teachers meets the student.', 'ہمارے ایک استاد طالب علم سے ملتے ہیں۔') },
    { title: t('Documents', 'کاغذات'), desc: t('Bring the documents we ask for.', 'جو کاغذات ہم مانگیں وہ ساتھ لائیں۔') },
    { title: t('First day', 'پہلا دن'), desc: t('We show the student around and classes begin.', 'ہم طالب علم کو مدرسہ دکھاتے ہیں اور کلاسیں شروع ہو جاتی ہیں۔') },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t('Enrolling for 2026', 'داخلے برائے 2026')}
        title={t('Admissions', 'داخلہ')}
        lede={t(
          'For children, young people and adults. Fees are low; ask us what the fee is for your course.',
          'بچوں، نوجوانوں اور بڑوں کے لیے۔ فیس کم ہے؛ اپنے کورس کی فیس ہم سے پوچھ لیں۔'
        )}
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="display d2">{t('How admission works', 'داخلہ کیسے ہوتا ہے')}</h2>
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
            <h2 className="display d3">{t('Application', 'درخواست')}</h2>
            <label className="block font-medium">
              {t("Student's full name", 'طالب علم کا مکمل نام')}
              <input name="fullName" required autoComplete="name" className="field mt-1" />
            </label>
            <label className="block font-medium">
              {t("Father's name", 'والد کا نام')}
              <input name="fatherName" required className="field mt-1" />
            </label>
            <label className="block font-medium">
              {t('Program', 'پروگرام')}
              <select name="program" required className="field mt-1" defaultValue="">
                <option value="" disabled>{t('Choose a program', 'پروگرام منتخب کریں')}</option>
                {PROGRAMS.map(p => (
                  <option key={p.title[0]} value={p.title[0]}>{t(...p.title)}</option>
                ))}
              </select>
            </label>
            <label className="block font-medium">
              {t('WhatsApp number', 'واٹس ایپ نمبر')}
              <input name="phone" type="tel" required autoComplete="tel" dir="ltr" className="field mt-1" />
            </label>
            <button className="btn btn-green w-full">{t('Send application on WhatsApp', 'واٹس ایپ پر درخواست بھیجیں')}</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AdmissionPage;
