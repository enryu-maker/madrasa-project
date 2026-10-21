"use client";

import type { FormEvent } from "react";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { ADDRESS, EMAIL, HOURS, PHONE, whatsapp } from "@/lib/site";

export default function ContactPage() {
  const { t } = useLanguage();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") || "";
    const message = data.get("message") || "";

    const text = `Assalamu alaikum, this is ${name}.\n${message}`;
    window.open(whatsapp(text), "_blank", "noopener");
  };

  return (
    <>
      <PageHeader
        eyebrow={t("Contact", "رابطہ", "संपर्क")}
        title={t("Talk to us", "ہم سے بات کریں", "हमसे बात करें")}
        lede={t(
          "Ask us about courses, admission, fees or donations. WhatsApp is the quickest.",
          "کورس، داخلہ، فیس یا عطیات کے بارے میں پوچھیں۔ واٹس ایپ سب سے تیز ذریعہ ہے۔",
          "कोर्स, दाख़िला, फ़ीस या दान के बारे में पूछें। व्हाट्सऐप सबसे तेज़ ज़रिया है।"
        )}
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
          <dl className="space-y-6">
            <div className="border-t-2 border-gold pt-4">
              <dt className="eyebrow text-emerald">{t("WhatsApp and phone", "واٹس ایپ اور فون", "व्हाट्सऐप और फ़ोन")}</dt>
              <dd className="display d3 mt-1">
                <a href={whatsapp()} target="_blank" rel="noopener noreferrer" dir="ltr" className="hover:text-emerald">
                  {PHONE}
                </a>
              </dd>
            </div>

            <div className="border-t-2 border-gold pt-4">
              <dt className="eyebrow text-emerald">{t("Email", "ای میل", "ईमेल")}</dt>
              <dd className="display d3 mt-1 break-words">
                <a href={`mailto:${EMAIL}`} className="hover:text-emerald">
                  {EMAIL}
                </a>
              </dd>
            </div>

            <div className="border-t-2 border-gold pt-4">
              <dt className="eyebrow text-emerald">{t("Campus", "کیمپس", "कैंपस")}</dt>
              <dd className="mt-1">{t(...ADDRESS)}</dd>
            </div>

            <div className="border-t-2 border-gold pt-4">
              <dt className="eyebrow text-emerald">{t("Office hours", "دفتری اوقات", "दफ़्तर का समय")}</dt>
              <dd className="mt-1">
                {t(...HOURS)}. {t("Closed on Sunday.", "اتوار کو دفتر بند رہتا ہے۔", "रविवार को बंद।")}
              </dd>
            </div>
          </dl>

          <form onSubmit={handleSubmit} className="space-y-5 self-start rounded-xl border border-line bg-chalk p-6 md:p-8">
            <h2 className="display d3">{t("Send a message", "پیغام بھیجیں", "संदेश भेजें")}</h2>

            <label className="block font-medium">
              {t("Your name", "آپ کا نام", "आपका नाम")}
              <input name="name" required autoComplete="name" className="field mt-1" />
            </label>

            <label className="block font-medium">
              {t("Your message", "آپ کا پیغام", "आपका संदेश")}
              <textarea name="message" required rows={5} className="field mt-1" />
            </label>

            <button type="submit" className="btn btn-green w-full">
              {t("Send on WhatsApp", "واٹس ایپ پر بھیجیں", "व्हाट्सऐप पर भेजें")}
            </button>
          </form>
        </div>
      </section>

      <iframe
        title={t("Map of the campus at Ashrafi Chowk, Nashik", "اشرفی چوک، ناسک میں کیمپس کا نقشہ", "अशरफ़ी चौक, नासिक में कैंपस का नक़्शा")}
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d748.3876505354697!2d73.72709035453228!3d19.97009076030122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAshrafi%20Chowk%2C%20Sanjiv%20Nagar%2C%20Link%20Road%2C%20Nashik!5e0!3m2!1sen!2sin!4v1792002197952!5m2!1sen!2sin"
        className="block h-96 w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </>
  );
}
