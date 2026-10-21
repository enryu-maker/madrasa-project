"use client";

import Image from "next/image";
import Link from "@/components/Link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ADDRESS, EMAIL, HOURS, PHONE, UPI_ID, whatsapp } from "@/lib/site";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { path: "/about", label: t("About", "ہمارے بارے میں", "हमारे बारे में") },
    { path: "/our-institution", label: t("Our Institution", "ہمارا ادارہ", "हमारी संस्था") },
    { path: "/admission", label: t("Admissions", "داخلہ", "दाख़िला") },
    { path: "/gallery", label: t("Gallery", "گیلری", "गैलरी") },
    { path: "/donation", label: t("Donate", "عطیہ دیں", "दान दें") },
    { path: "/contact", label: t("Contact", "رابطہ", "संपर्क") },
  ];

  return (
    <footer className="relative border-t border-gold/50 bg-[#051f1a] text-white/75">
      <span className="khatam absolute -top-[0.4375rem] left-1/2 h-3.5 w-3.5 -translate-x-1/2" aria-hidden="true" />

      <div className="wrap py-14 md:py-16">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-10 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Jamia Siddhiqe Akbar Logo"
              width={512}
              height={468}
              className="h-16 w-16 rounded-lg bg-white object-contain"
            />
            <span>
              <span className="display block text-2xl text-white md:text-3xl">
                {t("Jamia Siddhiqe Akbar Ahale Sunnat Trust", "جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ", "जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट")}
              </span>
              <span className="block text-gold">
                {t("Quran, Hifz and Islamic education", "قرآن، حفظ اور دینی تعلیم", "क़ुरआन, हिफ़्ज़ और दीनी तालीम")}
              </span>
            </span>
          </Link>

          <div className="flex flex-wrap gap-3">
            <Link href="/donation" className="btn btn-gold">
              {t("Donate", "عطیہ دیں", "दान दें")}
            </Link>
            <Link href="/admission" className="btn btn-line text-white">
              {t("Apply for admission", "داخلے کے لیے درخواست دیں", "दाख़िले के लिए आवेदन करें")}
            </Link>
          </div>
        </div>

        <div className="grid gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label={t("Footer", "فوٹر", "फ़ुटर")}>
            <h2 className="eyebrow text-gold">{t("Pages", "صفحات", "पेज")}</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {footerLinks.map(link => (
                <li key={link.path}>
                  <Link href={link.path} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h2 className="eyebrow text-gold">{t("Visit us", "تشریف لائیں", "हमसे मिलने आएँ")}</h2>
            <p className="mt-4">{t(...ADDRESS)}</p>
            <p className="mt-3 text-white/60">{t(...HOURS)}</p>
          </address>

          <div>
            <h2 className="eyebrow text-gold">{t("Talk to us", "ہم سے بات کریں", "हमसे बात करें")}</h2>
            <a
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="display mt-4 block text-2xl text-white hover:text-gold rtl:text-right"
              dir="ltr"
            >
              {PHONE}
            </a>
            <p className="text-white/60">{t("WhatsApp or call", "واٹس ایپ یا کال", "व्हाट्सऐप या कॉल")}</p>
            <a href={`mailto:${EMAIL}`} className="mt-3 block break-words hover:text-gold rtl:text-right" dir="ltr">
              {EMAIL}
            </a>
          </div>

          <div>
            <h2 className="eyebrow text-gold">{t("Donate by UPI", "یو پی آئی سے عطیہ", "UPI से दान")}</h2>
            <p className="mt-4 break-all font-semibold text-white rtl:text-right" dir="ltr">
              {UPI_ID}
            </p>
            <Link href="/donation#bank" className="mt-3 inline-block underline decoration-gold underline-offset-4 hover:text-gold">
              {t("Bank transfer details", "بینک ٹرانسفر کی تفصیلات", "बैंक ट्रांसफ़र की जानकारी")}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="wrap flex flex-wrap justify-between gap-x-6 gap-y-1 py-5 pr-24 text-sm text-white/55">
          © {new Date().getFullYear()}{" "}
          {t(
            "Jamia Siddhiqe Akbar Ahale Sunnat Trust, Nashik. All rights reserved.",
            "جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ، ناسک۔ جملہ حقوق محفوظ ہیں۔",
            "जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट, नासिक। सर्वाधिकार सुरक्षित।"
          )}
          <span dir="ltr">
            Made with ❤️ by{" "}
            <a href="https://nerdtech.in" target="_blank" rel="noopener" className="underline hover:text-white">
              NerdTech
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
