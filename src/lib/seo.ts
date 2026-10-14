import type { Metadata } from 'next';
import { ADDRESS, EMAIL, FAQS, localize, PAYEE, PHONE, type Language, type Pair } from './site';

export const SITE_URL = 'https://www.siddiqueakbartrust.com';

// Title and description for each page, in English and Urdu. Inner titles get the brand appended.
const PAGES: Record<string, { en: Pair; ur: Pair }> = {
  '/': {
    en: ['Siddique Akbar Trust | Madrasa in Nashik for Quran & Hifz', 'Siddique Akbar Trust is a madrasa in Nashik, Maharashtra teaching Quran, Hifz and Dars-e-Nizami at fees families can afford. Donate by UPI or bank.'],
    ur: ['صدیق اکبر ٹرسٹ | ناسک میں قرآن و حفظ کا مدرسہ', 'صدیق اکبر ٹرسٹ ناسک، مہاراشٹر کا ایک مدرسہ ہے جہاں قرآن، حفظ اور درسِ نظامی کم فیس میں پڑھائے جاتے ہیں۔ یو پی آئی یا بینک سے عطیہ دیں۔'],
  },
  '/about': {
    en: ['About the Madrasa', 'How Siddique Akbar Trust began in Nashik in 2024, our mission and vision, and the values our ijazah-holding teachers bring to every class.'],
    ur: ['مدرسے کے بارے میں', 'صدیق اکبر ٹرسٹ کا آغاز 2024 میں ناسک میں ہوا۔ ہمارا مقصد، ہمارا نصب العین، اور وہ اقدار جو ہمارے اجازت یافتہ اساتذہ ہر کلاس میں لاتے ہیں۔'],
  },
  '/our-institution': {
    en: ['Courses, Campus & FAQs', 'What students study at Siddique Akbar Trust, Nashik: Hifz, Tajweed, Dars-e-Nizami and the Aalimah course, our campus, history and common questions.'],
    ur: ['کورس، کیمپس اور عام سوالات', 'صدیق اکبر ٹرسٹ، ناسک میں طلباء کیا پڑھتے ہیں: حفظ، تجوید، درسِ نظامی اور عالمہ کورس، ہمارا کیمپس، تاریخ اور عام سوالات۔'],
  },
  '/admission': {
    en: ['Admissions 2026', 'Apply for Hifz, Quran, Dars-e-Nizami or Islamic studies at Siddique Akbar Trust, Nashik. Four simple steps; apply on WhatsApp in a minute.'],
    ur: ['داخلہ 2026', 'صدیق اکبر ٹرسٹ، ناسک میں حفظ، قرآن، درسِ نظامی یا اسلامی تعلیمات کے لیے درخواست دیں۔ چار آسان مراحل؛ واٹس ایپ پر ایک منٹ میں درخواست دیں۔'],
  },
  '/donation': {
    en: ['Donate Zakat & Sadaqah', 'Give Zakat, Sadaqah or Waqf to Siddique Akbar Trust, Nashik by UPI or bank. 80G tax-deductible. Your gift pays for students who cannot afford fees.'],
    ur: ['زکوٰۃ اور صدقات کا عطیہ', 'صدیق اکبر ٹرسٹ، ناسک کو یو پی آئی یا بینک سے زکوٰۃ، صدقہ یا وقف دیں۔ 80G کے تحت ٹیکس میں چھوٹ۔ آپ کا عطیہ ان طلباء کی فیس ادا کرتا ہے جو فیس نہیں دے سکتے۔'],
  },
  '/gallery': {
    en: ['Gallery & Events', 'Photos of classes, celebrations and gatherings at Siddique Akbar Trust, Nashik, including the Urs-e-Vakeel Ahmad Shah and Shaheedain conferences.'],
    ur: ['گیلری اور تقریبات', 'صدیق اکبر ٹرسٹ، ناسک کی کلاسوں، تقریبات اور اجتماعات کی تصاویر، بشمول عرسِ وکیل احمد شاہ اور شہیدین کانفرنس۔'],
  },
  '/contact': {
    en: ['Contact & Directions', 'Visit Siddique Akbar Trust at Ashrafi Chowk, Sanjiv Nagar, Link Road, Nashik. Call or WhatsApp +91 8055108635, Monday to Saturday, 9 AM to 6 PM.'],
    ur: ['رابطہ اور پتہ', 'صدیق اکبر ٹرسٹ، اشرفی چوک، سنجیو نگر، لنک روڈ، ناسک تشریف لائیں۔ پیر تا ہفتہ، صبح 9 تا شام 6، کال یا واٹس ایپ کریں: +91 8055108635'],
  },
};
export const ROUTES = Object.keys(PAGES);
const BRAND: Pair = [' | Siddique Akbar Trust, Nashik', ' | صدیق اکبر ٹرسٹ، ناسک'];

const OG_IMAGE = { url: '/gallery/class-1.jpg', width: 1200, height: 900, alt: 'Students reading the Quran with their teacher at Siddique Akbar Trust, Nashik' };

/** hreflang links, so Google shows each reader the page in their language. */
export const languages = (path: string) => ({ en: path, ur: localize(path, 'ur'), 'x-default': path });

/** Per-page title, description, canonical URL, hreflang and share preview (WhatsApp, Facebook, X). */
export const pageMeta = (path: string, lang: Language = 'en'): Metadata => {
  const [title, description] = PAGES[path][lang];
  const full = path === '/' ? title : title + BRAND[lang === 'en' ? 0 : 1];
  const url = localize(path, lang);
  return {
    title: { absolute: full },
    description,
    alternates: { canonical: url, languages: languages(path) },
    openGraph: {
      title: full, description, url, siteName: 'Siddique Akbar Trust', type: 'website', images: [OG_IMAGE],
      locale: lang === 'en' ? 'en_IN' : 'ur_IN', alternateLocale: lang === 'en' ? 'ur_IN' : 'en_IN',
    },
  };
};

export const faqPage = (lang: Language) => {
  const i = lang === 'en' ? 0 : 1;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q[i], acceptedAnswer: { '@type': 'Answer', text: f.a[i] } })),
  };
};

/** Escapes `<` so the payload can't close the script tag (per the Next.js JSON-LD guide). */
export const ldJson = (data: object) => ({ __html: JSON.stringify(data).replace(/</g, '\\u003c') });

export const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Siddique Akbar Trust',
  alternateName: PAYEE,
  description: 'A madrasa in Nashik, Maharashtra teaching Quran, Hifz, Tajweed and Dars-e-Nizami, with a separate department for girls.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/gallery/class-1.jpg`,
  email: EMAIL,
  telephone: PHONE,
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS[0].replace(/, Nashik$/, ''),
    addressLocality: 'Nashik',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 19.97009, longitude: 73.72709 },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=19.97009,73.72709',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
};
