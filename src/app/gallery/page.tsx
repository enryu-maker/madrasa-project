"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import EventCard from '@/components/EventCard';
import { EVENTS, PHOTOS } from '@/lib/site';

const GalleryPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t('Gallery', 'گیلری')}
        title={t('Life at the madrasa', 'مدرسے کی زندگی')}
        lede={t(
          'Classes, celebrations and gatherings.',
          'کلاسیں، تقریبات اور اجتماعات۔'
        )}
      />

      <section className="py-16 md:py-24">
        <div className="wrap columns-2 gap-4 md:columns-3">
          {PHOTOS.map(p => (
            <Image
              key={p.file}
              src={`/gallery/${p.file}.jpg`}
              alt={t(...p.alt)}
              width={p.w}
              height={p.h}
              sizes="(min-width: 768px) 33vw, 50vw"
              className="mb-4 h-auto w-full break-inside-avoid rounded-xl"
            />
          ))}
        </div>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <div className="wrap">
          <h2 className="display d2 text-center">{t('Gatherings we have hosted', 'ہمارے منعقد کردہ اجتماعات')}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {EVENTS.map(e => <EventCard key={e.title[0]} event={e} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
