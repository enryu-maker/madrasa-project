"use client";

import Link from "@/components/Link";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      title: t("Authenticity", "صداقت", "प्रामाणिकता"),
      desc: t(
        "We teach from the classical texts, through teachers who hold a sanad.",
        "ہم اصل کتابوں سے، سند یافتہ اساتذہ کے ذریعے پڑھاتے ہیں۔",
        "हम असल किताबों से, सनद-याफ़्ता उस्तादों के ज़रिए पढ़ाते हैं।"
      ),
    },
    {
      title: t("Compassion", "شفقت", "शफ़क़त"),
      desc: t(
        "Students are treated gently and looked after.",
        "طلباء کے ساتھ نرمی برتی جاتی ہے اور ان کا خیال رکھا جاتا ہے۔",
        "छात्रों के साथ नरमी बरती जाती है और उनका ख़याल रखा जाता है।"
      ),
    },
    {
      title: t("Effort", "محنت", "मेहनत"),
      desc: t(
        "We expect real effort, in study and in worship.",
        "ہم پڑھائی اور عبادت دونوں میں محنت کی توقع رکھتے ہیں۔",
        "हम पढ़ाई और इबादत दोनों में मेहनत की उम्मीद रखते हैं।"
      ),
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("About us", "ہمارے بارے میں", "हमारे बारे में")}
        title={t("About the madrasa", "مدرسے کے بارے میں", "मदरसे के बारे में")}
        lede={t(
          "Jamia Siddhiqe Akbar Ahale Sunnat Trust opened in Nashik in 2024.",
          "جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ ۲۰۲۴ میں ناسک میں قائم ہوا۔",
          "जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट २०२४ में नासिक में क़ायम हुआ।"
        )}
      />

      {/* History */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="eyebrow text-emerald">{t("Since 2024", "۲۰۲۴ سے", "२०२४ से")}</p>
            <h2 className="display d2 mt-3">{t("How we started", "ہماری ابتدا", "हमारी शुरुआत")}</h2>
          </div>

          <div className="space-y-5">
            <p>
              {t(
                "We opened in 2024 to teach the Islamic sciences the traditional way, while making sure our students can also manage in the world outside the madrasa.",
                "ہم نے ۲۰۲۴ میں آغاز کیا تاکہ دینی علوم روایتی طریقے سے پڑھائے جائیں، اور ساتھ ہی طلباء مدرسے سے باہر کی دنیا میں بھی اپنے پاؤں پر کھڑے ہو سکیں۔",
                "हमने २०२४ में शुरुआत की ताकि दीनी इल्म पारंपरिक तरीक़े से पढ़ाया जाए, और साथ ही छात्र मदरसे के बाहर की दुनिया में भी अपने पैरों पर खड़े हो सकें।"
              )}
            </p>
            <p>
              {t(
                "Students come to us from all kinds of families. We have a Hifz department and the Dars-e-Nizami course, and a separate department for girls is opening soon.",
                "ہمارے پاس ہر طرح کے گھرانوں کے طلباء آتے ہیں۔ یہاں شعبۂ حفظ اور درسِ نظامی ہے، اور طالبات کا علیحدہ شعبہ جلد کھلے گا۔",
                "हमारे यहाँ हर तरह के घरानों से छात्र आते हैं। यहाँ हिफ़्ज़ विभाग और दर्स-ए-निज़ामी है, और छात्राओं का अलग विभाग जल्द खुलेगा।"
              )}
            </p>
            <p>
              {t(
                "Our teachers hold ijazah in what they teach.",
                "ہمارے اساتذہ جو مضامین پڑھاتے ہیں ان کی سندِ اجازت رکھتے ہیں۔",
                "हमारे उस्ताद जो पढ़ाते हैं, उसकी इजाज़त (सनद) रखते हैं।"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-chalk py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="border-t-2 border-gold pt-5">
            <h2 className="display d2">{t("Our mission", "ہمارا مشن", "हमारा मिशन")}</h2>
            <p className="mt-4">
              {t(
                "To teach sound Islamic knowledge and good character, so that our students grow up useful to their families and to the people around them.",
                "صحیح دینی علم اور اچھے اخلاق سکھانا، تاکہ ہمارے طلباء اپنے گھر والوں اور آس پاس کے لوگوں کے کام آئیں۔",
                "सही दीनी इल्म और अच्छे अख़लाक़ सिखाना, ताकि हमारे छात्र अपने घरवालों और आस-पास के लोगों के काम आएँ।"
              )}
            </p>
          </div>

          <div className="border-t-2 border-gold pt-5">
            <h2 className="display d2">{t("Our vision", "ہمارا وژن", "हमारा विज़न")}</h2>
            <p className="mt-4">
              {t(
                "A madrasa where the traditional way of learning is kept alive, and where cost does not keep students out.",
                "ایک ایسا مدرسہ جہاں تعلیم کا روایتی طریقہ زندہ رہے اور خرچ کسی طالب علم کی راہ میں رکاوٹ نہ بنے۔",
                "एक ऐसा मदरसा जहाँ तालीम का पारंपरिक तरीक़ा ज़िंदा रहे और ख़र्च किसी छात्र की राह में रुकावट न बने।"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 md:py-24">
        <div className="wrap">
          <h2 className="display d2">{t("What we hold to", "ہمارے اصول", "हमारे उसूल")}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map(v => (
              <div key={v.title}>
                <h3 className="display d3 flex items-baseline gap-3">
                  <span className="khatam -translate-y-0.5" aria-hidden="true" />
                  {v.title}
                </h3>
                <p className="mt-2 text-soft">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Links */}
      <section className="lattice bg-emerald py-16 text-white md:py-24">
        <div className="wrap *:max-w-3xl">
          <h2 className="display d2">{t("Want to help, or to enrol?", "مدد کرنا چاہتے ہیں، یا داخلہ لینا؟", "मदद करना चाहते हैं, या दाख़िला लेना?")}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/donation" className="btn btn-gold">
              {t("Donate", "عطیہ دیں", "दान दें")}
            </Link>
            <Link href="/admission" className="btn btn-line">
              {t("Apply for admission", "داخلے کے لیے درخواست دیں", "दाख़िले के लिए आवेदन करें")}
            </Link>
            <Link href="/contact" className="btn btn-line">
              {t("Get in touch", "رابطہ کریں", "संपर्क करें")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
