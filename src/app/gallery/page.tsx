"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }),
};

const galleryItems = [
  { src: '/jashn-e-gous-ul-wara.png', captionEn: 'Jashn-e-Gous ul Wara', captionUr: 'جشنِ غوث الوریٰ' },
  { src: '/urs-vakeel-ahmad-shah.png', captionEn: 'Urs-e-Vakeel Ahmad Shah Conference', captionUr: 'عرسِ وکیل احمد شاہ کانفرنس' },
  { src: '/shaheedain-conference.png', captionEn: 'Shaheedain Conference', captionUr: 'شہیدینِ کانفرنس' },
  { src: '/madrasa-campus.jpg', captionEn: 'Quran Recitation', captionUr: 'تلاوتِ قرآن' },
  { src: '/madrasa-campus.jpg', captionEn: 'Annual Gathering', captionUr: 'سالانہ اجتماع' },
  { src: '/madrasa-campus.jpg', captionEn: 'Student Activities', captionUr: 'طلباء کی سرگرمیاں' },
  { src: '/madrasa-campus.jpg', captionEn: 'Prayer Hall', captionUr: 'نماز ہال' },
  { src: '/madrasa-campus.jpg', captionEn: 'Graduation Ceremony', captionUr: 'تقریب تقسیم اسناد' },
  { src: '/madrasa-campus.jpg', captionEn: 'Teachers & Scholars', captionUr: 'اساتذہ و علماء' },
];

const GalleryPage = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/madrasa-campus.jpg"
          alt="Gallery Hero"
          fill
          className="object-cover opacity-20 dark:opacity-10 scale-110 blur-sm"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-sky-50/40 to-white dark:from-zinc-950 dark:to-zinc-950" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-sky-100 dark:bg-sky-950/50 text-sky-700 dark:text-sky-400 text-sm font-black tracking-widest uppercase mb-6 border border-sky-200 dark:border-sky-800">
              {t('Our Gallery', 'ہماری گیلری')}
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-black text-sky-900 dark:text-white mb-6">
              {t('Moments of', 'لمحات')} <span className="text-amber-500">{t('Inspiration', 'الہام')}</span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              {t(
                'A visual journey through the life and events at Faiz ul Hasnain Foundation.',
                'فیض الحسنین فاؤنڈیشن میں زندگی اور تقریبات کا ایک بصری سفر۔'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-zinc-100 dark:border-zinc-800"
              onClick={() => setSelected(i)}
            >
              <Image
                src={item.src}
                alt={item.captionEn}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-sky-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                <ZoomIn className="h-8 w-8 text-white mb-3 drop-shadow-lg" />
                <p className="text-white font-bold text-lg text-center drop-shadow-md">
                  {t(item.captionEn, item.captionUr)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-200 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setSelected(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            className="relative max-w-4xl w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={galleryItems[selected].src}
              alt={galleryItems[selected].captionEn}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-8">
              <p className="text-white font-bold text-2xl">
                {t(galleryItems[selected].captionEn, galleryItems[selected].captionUr)}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
