"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import EventCard from '@/components/EventCard';
import { EVENTS, type Pair } from '@/lib/site';

const CLASS: Pair = ['Students reading the Quran with their teacher', 'طلباء اپنے استاد کے ساتھ قرآن پڑھتے ہوئے'];
const FLAG: Pair = ['Students carrying the national flag', 'طلباء قومی پرچم لیے ہوئے'];
const DECOR: Pair = ['Tricolour decorations and rangoli at the madrasa', 'مدرسے میں ترنگے کی سجاوٹ اور رنگولی'];
const STAGE: Pair = ['Scholars on stage at a gathering', 'ایک اجتماع میں اسٹیج پر علماء'];
const JALSA: Pair = ['A gathering at the madrasa', 'مدرسے میں ایک اجتماع'];

// Files live in public/gallery. Width and height are the real pixel sizes.
const PHOTOS: { file: string; w: number; h: number; alt: Pair }[] = [
  { file: 'class-1', w: 1200, h: 900, alt: CLASS },
  { file: 'flag-1', w: 1154, h: 1200, alt: FLAG },
  { file: 'stage-1', w: 1200, h: 900, alt: STAGE },
  { file: 'decor-1', w: 900, h: 1200, alt: DECOR },
  { file: 'class-2', w: 1200, h: 900, alt: CLASS },
  { file: 'jalsa', w: 1200, h: 624, alt: JALSA },
  { file: 'flag-2', w: 1200, h: 900, alt: FLAG },
  { file: 'decor-4', w: 900, h: 1200, alt: DECOR },
  { file: 'stage-2', w: 1200, h: 900, alt: STAGE },
  { file: 'class-3', w: 1200, h: 900, alt: CLASS },
  { file: 'decor-3', w: 1200, h: 1050, alt: DECOR },
  { file: 'stage-3', w: 1200, h: 900, alt: STAGE },
  { file: 'decor-2', w: 900, h: 1200, alt: DECOR },
  { file: 'stage-4', w: 1200, h: 900, alt: STAGE },
];

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
