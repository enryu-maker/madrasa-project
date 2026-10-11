"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import EventCard from '@/components/EventCard';
import { EVENTS } from '@/lib/site';

const GalleryPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t('Gallery', 'گیلری')}
        title={t('Gatherings we have hosted', 'ہمارے منعقد کردہ اجتماعات')}
        lede={t(
          'Some of the gatherings we have held.',
          'ہمارے چند اجتماعات۔'
        )}
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-8 md:grid-cols-3">
          {EVENTS.map(e => <EventCard key={e.title[0]} event={e} />)}
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
