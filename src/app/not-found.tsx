"use client";

import Link from '@/components/Link';
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="lattice bg-ink py-24 text-white md:py-32">
      <div className="wrap *:max-w-2xl">
        <p className="eyebrow text-gold rtl:text-right" dir="ltr">404</p>
        <h1 className="display d1 mt-4">{t("This page does not exist", "یہ صفحہ موجود نہیں")}</h1>
        <p className="lede mt-4 text-white/80">
          {t("The link may be old or mistyped.", "ممکن ہے لنک پرانا ہو یا غلط لکھا گیا ہو۔")}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-gold">{t("Go to the home page", "ہوم پیج پر جائیں")}</Link>
          <Link href="/contact" className="btn btn-line">{t("Contact us", "ہم سے رابطہ کریں")}</Link>
        </div>
      </div>
    </section>
  );
}
