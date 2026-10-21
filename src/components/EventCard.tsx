"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { EVENTS } from "@/lib/site";

interface EventCardProps {
  event: (typeof EVENTS)[number];
}

export default function EventCard({ event }: EventCardProps) {
  const { t } = useLanguage();

  return (
    <article className="arch lattice relative mx-auto w-full max-w-sm bg-ink px-8 pb-10 pt-20 text-center text-white">
      <div className="arch pointer-events-none absolute inset-2 border border-gold/60" aria-hidden="true" />
      <span className="khatam h-3.5 w-3.5" aria-hidden="true" />
      <p className="display mt-5 text-7xl leading-none text-gold">{t(...event.day)}</p>
      <p className="eyebrow mt-3 text-white/70">{t(...event.month)}</p>
      <div className="mx-auto mt-6 h-px w-12 bg-gold/60" aria-hidden="true" />
      <h3 className="display mt-6 text-2xl">{t(...event.title)}</h3>
      <p className="mt-3 text-[0.9375rem] text-white/70">{t(...event.place)}</p>
    </article>
  );
}
