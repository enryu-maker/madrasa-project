"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import { ArrowRight } from "lucide-react";
import DonateBox from "@/components/DonateBox";
import { useLanguage } from "@/contexts/LanguageContext";
import { FUNDS, PHOTOS, PROGRAMS, STATS, whatsapp } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Home() {
  const { t } = useLanguage();
  const [picks, setPicks] = useState<typeof PHOTOS>([]);

  useEffect(() => {
    const shuffled = [...PHOTOS].sort(() => Math.random() - 0.5).slice(0, 5);
    setPicks(shuffled);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="lattice bg-ink text-white">
        <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-[1fr_24rem] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span className="khatam" aria-hidden="true" />
              {t("Madrasa — Nashik, Maharashtra", "مدرسہ — ناسک، مہاراشٹر", "मदरसा — नासिक, महाराष्ट्र")}
            </p>

            <p lang="ar" dir="rtl" className="arabic mt-6 text-left text-2xl md:text-3xl text-gold rtl:text-right font-medium">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </p>

            <h1 className="display d1 mt-4 max-w-[20ch]">
              {t(
                "The best of you are those who learn the Quran and teach it.",
                "تم میں سے بہترین وہ ہے جو قرآن سیکھے اور سکھائے۔",
                "तुम में सबसे बेहतर वह है जो क़ुरआन सीखे और सिखाए।"
              )}
            </h1>

            <p className="mt-4 text-[0.9375rem] text-white/65">
              {t(
                "Prophet Muhammad ﷺ — Sahih al-Bukhari: 5027",
                "حضور نبی اکرم ﷺ — صحیح بخاری: ۵۰۲۷",
                "पैग़ंबर मुहम्मद ﷺ — सहीह बुख़ारी: ५०२७"
              )}
            </p>

            <p className="lede mt-8 max-w-xl text-white/85">
              {t(
                "Jamia Siddhiqe Akbar Ahale Sunnat Trust is a madrasa in Nashik. We teach Quran, Hifz and the Islamic sciences, and we keep the fees low enough that any family can send a child. Donations are what make that possible.",
                "جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ، ناسک کا ایک مدرسہ ہے۔ ہم قرآن، حفظ اور دینی علوم پڑھاتے ہیں، اور فیس اتنی کم رکھتے ہیں کہ کوئی بھی گھرانہ اپنے بچے کو بھیج سکے۔ یہ آپ کے عطیات سے ممکن ہوتا ہے۔",
                "जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट, नासिक का एक मदरसा है। हम क़ुरआन, हिफ़्ज़ और दीनी इल्म पढ़ाते हैं, और फ़ीस इतनी कम रखते हैं कि कोई भी परिवार अपने बच्चे को भेज सके। यह आपके दान से मुमकिन होता है।"
              )}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-semibold">
              <a href="#teach" className="inline-flex items-center gap-2 underline decoration-gold underline-offset-8 hover:text-gold">
                {t("What we teach", "ہم کیا پڑھاتے ہیں", "हम क्या पढ़ाते हैं")}
              </a>
              <Link href="/admission" className="inline-flex items-center gap-2 underline decoration-gold underline-offset-8 hover:text-gold">
                {t("Apply for admission", "داخلے کے لیے درخواست دیں", "दाख़िले के लिए आवेदन करें")}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <DonateBox />
        </div>
      </section>

      {/* Stats Counter */}
      <section className="border-b border-line bg-chalk">
        <div className="wrap grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4">
          {STATS.map(s => (
            <p key={s.value[0]}>
              <span className="display block text-4xl text-emerald rtl:text-right">{t(...s.value)}</span>
              <span className="text-soft">{t(...s.label)}</span>
            </p>
          ))}
        </div>
      </section>

      {/* Funds Breakdown */}
      <section className="py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-emerald">{t("Your donation", "آپ کا عطیہ", "आपका दान")}</p>
          <h2 className="display d2 mt-3 max-w-2xl">{t("Where your money goes", "آپ کا عطیہ کہاں خرچ ہوتا ہے", "आपका दान कहाँ ख़र्च होता है")}</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {FUNDS.map(f => (
              <div key={f.title[0]} className="border-t-2 border-gold pt-5">
                <h3 className="display d3">{t(...f.title)}</h3>
                <p className="mt-2 text-soft">{t(...f.desc)}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-14 max-w-3xl border-s-2 border-gold ps-6">
            <p className="display d3">
              {t(
                "“When a person dies, their deeds come to an end except for three: ongoing charity, knowledge that benefits others, and a righteous child who prays for them.”",
                '"جب انسان مر جاتا ہے تو اس کے عمل کا سلسلہ ختم ہو جاتا ہے سوائے تین چیزوں کے: صدقۂ جاریہ، وہ علم جس سے فائدہ اٹھایا جائے، اور نیک اولاد جو اس کے لیے دعا کرے۔"',
                "“जब इंसान मर जाता है तो उसके अमल का सिलसिला ख़त्म हो जाता है, सिवाय तीन चीज़ों के: सदक़ा-ए-जारिया, वह इल्म जिससे फ़ायदा उठाया जाए, और नेक औलाद जो उसके लिए दुआ करे।”"
              )}
            </p>
            <footer className="mt-3 text-[0.9375rem] text-soft">
              {t("Prophet Muhammad ﷺ — Sahih Muslim: 1631", "حضور نبی اکرم ﷺ — صحیح مسلم: ۱۶۳۱", "पैग़ंबर मुहम्मद ﷺ — सहीह मुस्लिम: १६३१")}
            </footer>
          </blockquote>

          <Link href="/donation" className="btn btn-green mt-10">
            {t("Donate", "عطیہ دیں", "दान दें")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Curriculum */}
      <section id="teach" className="scroll-mt-16 bg-chalk py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-emerald">{t("Education", "تعلیم", "तालीम")}</p>
          <h2 className="display d2 mt-3 max-w-2xl">{t("What we teach", "ہم کیا پڑھاتے ہیں", "हम क्या पढ़ाते हैं")}</h2>

          <ul className="mt-10 border-t border-line">
            {PROGRAMS.map(p => (
              <li key={p.title[0]} className="grid gap-1 border-b border-line py-5 md:grid-cols-[18rem_1fr] md:gap-8">
                <h3 className="display d3 flex items-baseline gap-3">
                  <span className="khatam -translate-y-0.5" aria-hidden="true" />
                  {t(...p.title)}
                </h3>
                <p className="text-soft">{t(...p.desc)}</p>
              </li>
            ))}
          </ul>

          <Link href="/our-institution" className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald underline underline-offset-8">
            {t("How we teach, and where", "ہم کیسے اور کہاں پڑھاتے ہیں", "हम कैसे और कहाँ पढ़ाते हैं")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Affordable Fees */}
      <section className="bg-emerald py-16 text-white md:py-24">
        <div className="wrap grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-gold">{t("Our fees", "ہماری فیس", "हमारी फ़ीस")}</p>
            <h2 className="display d2 mt-3">
              {t(
                "No child should miss out on the Quran because of money.",
                "پیسے کی وجہ سے کوئی بچہ قرآن سے محروم نہ رہے۔",
                "पैसे की वजह से कोई बच्चा क़ुरआन से महरूम न रहे।"
              )}
            </h2>
          </div>

          <div>
            <p className="lede text-white/90">
              {t(
                "We charge as little as we can. Donations cover the students who cannot pay, support their teachers, and go towards more space.",
                "ہم جتنی کم ہو سکے اتنی فیس لیتے ہیں۔ عطیات سے ان طلباء کا خرچ پورا ہوتا ہے جو فیس نہیں دے سکتے، اساتذہ کی مدد ہوتی ہے، اور مزید جگہ بنتی ہے۔",
                "हम जितनी कम हो सके उतनी फ़ीस लेते हैं। दान से उन छात्रों का ख़र्च पूरा होता है जो फ़ीस नहीं दे सकते, उस्तादों की मदद होती है, और ज़्यादा जगह बनती है।"
              )}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/admission" className="btn btn-gold">
                {t("Apply for admission", "داخلے کے لیے درخواست دیں", "दाख़िले के लिए आवेदन करें")}
              </Link>
              <a
                href={whatsapp("Assalamu alaikum, I would like to know the fees at Jamia Siddhiqe Akbar Ahale Sunnat Trust.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line"
              >
                {t("Ask about fees on WhatsApp", "واٹس ایپ پر فیس معلوم کریں", "व्हाट्सऐप पर फ़ीस पूछें")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-emerald">{t("Since 2024", "۲۰۲۴ سے", "२०२४ से")}</p>
            <h2 className="display d2 mt-3">{t("A madrasa in Sanjiv Nagar, Nashik", "سنجیو نگر، ناسک کا ایک مدرسہ", "संजीव नगर, नासिक का एक मदरसा")}</h2>
          </div>

          <div>
            <p>
              {t(
                "We started in 2024. Students here learn the traditional Islamic sciences, and also the languages and skills they need outside the madrasa.",
                "ہم نے ۲۰۲۴ میں آغاز کیا۔ یہاں طلباء روایتی دینی علوم کے ساتھ وہ زبانیں اور ہنر بھی سیکھتے ہیں جن کی مدرسے سے باہر ضرورت پڑتی ہے۔",
                "हमने २०२४ में शुरुआत की। यहाँ छात्र पारंपरिक दीनी इल्म के साथ वे भाषाएँ और हुनर भी सीखते हैं जिनकी मदरसे के बाहर ज़रूरत पड़ती है।"
              )}
            </p>

            <ul className="mt-6 space-y-2">
              {[
                t("Teachers who hold ijazah", "سندِ اجازت یافتہ اساتذہ", "इजाज़त-याफ़्ता उस्ताद"),
                t("Hifz and Dars-e-Nizami", "حفظ اور درسِ نظامی", "हिफ़्ज़ और दर्स-ए-निज़ामी"),
                t("A separate department for girls (coming soon)", "طالبات کے لیے علیحدہ شعبہ (جلد آرہا ہے)", "छात्राओं के लिए अलग विभाग (जल्द आ रहा है)"),
              ].map(item => (
                <li key={item} className="flex items-baseline gap-3">
                  <span className="khatam -translate-y-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald underline underline-offset-8">
              {t("More about us", "ہمارے بارے میں مزید", "हमारे बारे में और जानें")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="bg-chalk py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-emerald">{t("Gallery", "گیلری", "गैलरी")}</p>
          <h2 className="display d2 mt-3">{t("Life at the madrasa", "مدرسے کی زندگی", "मदरसे की ज़िंदगी")}</h2>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
            {Array.from({ length: 5 }, (_, i) => picks[i]).map((photo, i) => (
              <div
                key={i}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-xl bg-line",
                  i === 0 && "max-md:col-span-2 max-md:aspect-[2/1]"
                )}
              >
                {photo && (
                  <Image
                    src={`/gallery/${photo.file}.jpg`}
                    alt={t(...photo.alt)}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          <Link href="/gallery" className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald underline underline-offset-8">
            {t("See the gallery", "گیلری دیکھیں", "गैलरी देखें")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="lattice bg-emerald py-16 text-white md:py-24">
        <div className="wrap grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="display d2">{t("Pay for a student’s education", "ایک طالب علم کی تعلیم کا خرچ اٹھائیں", "एक छात्र की तालीम का ख़र्च उठाएँ")}</h2>
            <p className="mt-4 text-white/80">
              {t("UPI or bank transfer. Any amount helps.", "یو پی آئی یا بینک ٹرانسفر۔ ہر رقم کام آتی ہے۔", "UPI या बैंक ट्रांसफ़र। हर रक़म काम आती है।")}
            </p>
            <Link href="/donation" className="btn btn-gold mt-6">
              {t("Donate", "عطیہ دیں", "दान दें")}
            </Link>
          </div>

          <div>
            <h2 className="display d2">{t("Enrol yourself or your child", "اپنا یا اپنے بچے کا داخلہ کرائیں", "अपना या अपने बच्चे का दाख़िला कराएँ")}</h2>
            <p className="mt-4 text-white/80">
              {t("Admissions are open for 2026.", "۲۰۲۶ کے لیے داخلے جاری ہیں۔", "२०२६ के लिए दाख़िले जारी हैं।")}
            </p>
            <Link href="/admission" className="btn btn-line mt-6">
              {t("Apply for admission", "داخلے کے لیے درخواست دیں", "दाख़िले के लिए आवेदन करें")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
