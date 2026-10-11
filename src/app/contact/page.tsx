"use client";

import { FormEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { ADDRESS, EMAIL, HOURS, PHONE, whatsapp } from '@/lib/site';

const Contact = () => {
  const { t } = useLanguage();

  // No server behind this site: the message is handed to WhatsApp, where the office reads it.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    window.open(whatsapp(`Assalamu alaikum, this is ${d.get('name')}.\n${d.get('message')}`), '_blank', 'noopener');
  };

  return (
    <>
      <PageHeader
        eyebrow={t('Contact', 'رابطہ')}
        title={t('Talk to us', 'ہم سے بات کریں')}
        lede={t(
          'Ask us about courses, admission, fees or donations. WhatsApp is the quickest.',
          'کورس، داخلہ، فیس یا عطیات کے بارے میں پوچھیں۔ واٹس ایپ سب سے تیز ذریعہ ہے۔'
        )}
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
          <dl className="space-y-6">
            <div className="border-t-2 border-gold pt-4">
              <dt className="eyebrow text-emerald">{t('WhatsApp and phone', 'واٹس ایپ اور فون')}</dt>
              <dd className="display d3 mt-1">
                <a href={whatsapp()} target="_blank" rel="noopener noreferrer" dir="ltr" className="hover:text-emerald">{PHONE}</a>
              </dd>
            </div>
            <div className="border-t-2 border-gold pt-4">
              <dt className="eyebrow text-emerald">{t('Email', 'ای میل')}</dt>
              <dd className="display d3 mt-1 break-words">
                <a href={`mailto:${EMAIL}`} className="hover:text-emerald">{EMAIL}</a>
              </dd>
            </div>
            <div className="border-t-2 border-gold pt-4">
              <dt className="eyebrow text-emerald">{t('Campus', 'کیمپس')}</dt>
              <dd className="mt-1">{t(...ADDRESS)}</dd>
            </div>
            <div className="border-t-2 border-gold pt-4">
              <dt className="eyebrow text-emerald">{t('Office hours', 'دفتری اوقات')}</dt>
              <dd className="mt-1">{t(...HOURS)}. {t('Closed on Sunday.', 'اتوار کو بند۔')}</dd>
            </div>
          </dl>

          <form onSubmit={onSubmit} className="space-y-5 self-start rounded-xl border border-line bg-chalk p-6 md:p-8">
            <h2 className="display d3">{t('Send a message', 'پیغام بھیجیں')}</h2>
            <label className="block font-medium">
              {t('Your name', 'آپ کا نام')}
              <input name="name" required autoComplete="name" className="field mt-1" />
            </label>
            <label className="block font-medium">
              {t('Your message', 'آپ کا پیغام')}
              <textarea name="message" required rows={5} className="field mt-1" />
            </label>
            <button className="btn btn-green w-full">{t('Send on WhatsApp', 'واٹس ایپ پر بھیجیں')}</button>
          </form>
        </div>
      </section>

      <iframe
        title={t('Map', 'نقشہ')}
        src="https://maps.google.com/maps?q=India&z=4&output=embed"
        className="block h-96 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
};

export default Contact;
