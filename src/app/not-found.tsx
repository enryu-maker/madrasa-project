"use client";

import Link from "@/components/Link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="lattice bg-ink py-24 text-white md:py-32">
      <div className="wrap *:max-w-2xl">
        <p className="eyebrow text-gold rtl:text-right">{t("404", "۴۰۴", "४०४")}</p>
        <h1 className="display d1 mt-4">{t("This page does not exist", "یہ صفحہ موجود نہیں ہے", "यह पेज मौजूद नहीं है")}</h1>
        <p className="lede mt-4 text-white/80">
          {t("The link may be old or mistyped.", "ممکن ہے لنک پرانا ہو یا غلط لکھا گیا ہو۔", "हो सकता है लिंक पुराना हो या ग़लत लिखा गया हो।")}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-gold">
            {t("Go to the home page", "ہوم پیج پر جائیں", "होम पेज पर जाएँ")}
          </Link>
          <Link href="/contact" className="btn btn-line">
            {t("Contact us", "ہم سے رابطہ کریں", "हमसे संपर्क करें")}
          </Link>
        </div>
      </div>
    </section>
  );
}
