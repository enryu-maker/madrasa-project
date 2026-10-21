import type { Metadata } from 'next';
import { ADDRESS, EMAIL, FAQS, LANGUAGES, localize, NAME, PHONE, type Language } from './site';

type MetaTuple = [title: string, description: string];

export const SITE_URL = 'https://www.siddiqueakbartrust.com';

const PAGES: Record<string, Record<Language, MetaTuple>> = {
  '/': {
    en: [
      'Jamia Siddhiqe Akbar Ahale Sunnat Trust | Madrasa in Nashik for Quran & Hifz',
      'Jamia Siddhiqe Akbar Ahale Sunnat Trust is a madrasa in Nashik, Maharashtra teaching Quran, Hifz and Dars-e-Nizami at fees families can afford. Donate by UPI or bank.',
    ],
    ur: [
      'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ | ناسک میں قرآن و حفظ کا مدرسہ',
      'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ ناسک، مہاراشٹر کا ایک مدرسہ ہے جہاں قرآن، حفظ اور درسِ نظامی کم فیس میں پڑھائے جاتے ہیں۔ یو پی آئی یا بینک سے عطیہ دیں۔',
    ],
    hi: [
      'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट | नासिक में क़ुरआन और हिफ़्ज़ का मदरसा',
      'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट नासिक, महाराष्ट्र का एक मदरसा है जहाँ क़ुरआन, हिफ़्ज़ और दर्स-ए-निज़ामी कम फ़ीस में पढ़ाए जाते हैं। UPI या बैंक से दान दें।',
    ],
  },
  '/about': {
    en: [
      'About the Madrasa',
      'How Jamia Siddhiqe Akbar Ahale Sunnat Trust began in Nashik in 2024, our mission and vision, and the values our ijazah-holding teachers bring to every class.',
    ],
    ur: [
      'مدرسے کے بارے میں',
      'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ کا آغاز 2024 میں ناسک میں ہوا۔ ہمارا مقصد، ہمارا نصب العین، اور وہ اقدار جو ہمارے اجازت یافتہ اساتذہ ہر کلاس میں لاتے ہیں۔',
    ],
    hi: [
      'मदरसे के बारे में',
      'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट की शुरुआत 2024 में नासिक में हुई। हमारा मक़सद, हमारा विज़न, और वे उसूल जो हमारे इजाज़त-याफ़्ता उस्ताद हर क्लास में लाते हैं।',
    ],
  },
  '/our-institution': {
    en: [
      'Courses, Campus & FAQs',
      'What students study at Jamia Siddhiqe Akbar Ahale Sunnat Trust, Nashik: Hifz, Tajweed, Dars-e-Nizami and the Aalimah course, our campus, history and common questions.',
    ],
    ur: [
      'کورس، کیمپس اور عام سوالات',
      'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ، ناسک میں طلباء کیا پڑھتے ہیں: حفظ، تجوید، درسِ نظامی اور عالمہ کورس، ہمارا کیمپس، تاریخ اور عام سوالات۔',
    ],
    hi: [
      'कोर्स, कैंपस और आम सवाल',
      'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट, नासिक में छात्र क्या पढ़ते हैं: हिफ़्ज़, तजवीद, दर्स-ए-निज़ामी और आलिमा कोर्स, हमारा कैंपस, इतिहास और आम सवाल।',
    ],
  },
  '/admission': {
    en: [
      'Admissions 2026',
      'Apply for Hifz, Quran, Dars-e-Nizami or Islamic studies at Jamia Siddhiqe Akbar Ahale Sunnat Trust, Nashik. Four simple steps; apply on WhatsApp in a minute.',
    ],
    ur: [
      'داخلہ ۲۰۲۶',
      'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ، ناسک میں حفظ، قرآن، درسِ نظامی یا اسلامی تعلیمات کے لیے درخواست دیں۔ چار آسان مراحل؛ واٹس ایپ پر ایک منٹ میں درخواست دیں۔',
    ],
    hi: [
      'दाख़िला २०२६',
      'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट, नासिक में हिफ़्ज़, क़ुरआन, दर्स-ए-निज़ामी या इस्लामी तालीमात के लिए आवेदन करें। चार आसान क़दम; व्हाट्सऐप पर एक मिनट में आवेदन करें।',
    ],
  },
  '/donation': {
    en: [
      'Donate Zakat & Sadaqah',
      'Give Zakat, Sadaqah or Waqf to Jamia Siddhiqe Akbar Ahale Sunnat Trust, Nashik by UPI or bank. 80G tax-deductible. Your gift pays for students who cannot afford fees.',
    ],
    ur: [
      'زکوٰۃ اور صدقات کا عطیہ',
      'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ، ناسک کو یو پی آئی یا بینک سے زکوٰۃ، صدقہ یا وقف دیں۔ دفعہ ۸۰ جی کے تحت ٹیکس میں چھوٹ۔ آپ کا عطیہ ان طلباء کی فیس ادا کرتا ہے جو فیس نہیں دے سکتے۔',
    ],
    hi: [
      'ज़कात और सदक़ा दान करें',
      'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट, नासिक को UPI या बैंक से ज़कात, सदक़ा या वक़्फ़ दें। 80G के तहत टैक्स में छूट। आपका दान उन छात्रों की फ़ीस भरता है जो फ़ीस नहीं दे सकते।',
    ],
  },
  '/gallery': {
    en: [
      'Gallery & Events',
      'Photos of classes, celebrations and gatherings at Jamia Siddhiqe Akbar Ahale Sunnat Trust, Nashik, including the Urs-e-Vakeel Ahmad Shah and Shaheedain conferences.',
    ],
    ur: [
      'گیلری اور تقریبات',
      'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ، ناسک کی کلاسوں، تقریبات اور اجتماعات کی تصاویر، بشمول عرسِ وکیل احمد شاہ اور شہیدین کانفرنس۔',
    ],
    hi: [
      'गैलरी और कार्यक्रम',
      'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट, नासिक की क्लासों, जश्न और इज्तिमा की तस्वीरें, जिनमें उर्स-ए-वकील अहमद शाह और शहीदैन कॉन्फ़्रेंस शामिल हैं।',
    ],
  },
  '/contact': {
    en: [
      'Contact & Directions',
      'Visit Jamia Siddhiqe Akbar Ahale Sunnat Trust at Ashrafi Chowk, Sanjiv Nagar, Link Road, Nashik. Call or WhatsApp +91 8055108635, Monday to Saturday, 9 AM to 6 PM.',
    ],
    ur: [
      'رابطہ اور پتہ',
      'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ، اشرفی چوک، سنجیو نگر، لنک روڈ، ناسک تشریف لائیں۔ پیر تا ہفتہ، صبح 9 تا شام 6، کال یا واٹس ایپ کریں: +91 8055108635',
    ],
    hi: [
      'संपर्क और पता',
      'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट, अशरफ़ी चौक, संजीव नगर, लिंक रोड, नासिक आएँ। सोमवार से शनिवार, सुबह 9 से शाम 6 बजे तक, कॉल या व्हाट्सऐप करें: +91 8055108635',
    ],
  },
};

export const ROUTES = Object.keys(PAGES);

const BRAND_SUFFIX: Record<Language, string> = {
  en: ', Nashik',
  ur: '، ناسک',
  hi: ', नासिक',
};

const OG_IMAGE = {
  url: '/gallery/class-1.jpg',
  width: 1200,
  height: 900,
  alt: 'Students reading the Quran with their teacher at Jamia Siddhiqe Akbar Ahale Sunnat Trust, Nashik',
};

export const languages = (path: string) => ({
  ...Object.fromEntries(LANGUAGES.map(l => [l, localize(path, l)])),
  'x-default': path,
});

export const pageMeta = (path: string, lang: Language = 'en'): Metadata => {
  const [title, description] = PAGES[path][lang];
  const langIndex = LANGUAGES.indexOf(lang);
  const fullTitle = path === '/' ? title : `${title} | ${NAME[langIndex]}${BRAND_SUFFIX[lang]}`;
  const canonicalUrl = localize(path, lang);

  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: languages(path),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: NAME[langIndex],
      type: 'website',
      images: [OG_IMAGE],
      locale: `${lang}_IN`,
      alternateLocale: LANGUAGES.filter(l => l !== lang).map(l => `${l}_IN`),
    },
  };
};

export const faqPage = (lang: Language) => {
  const langIndex = LANGUAGES.indexOf(lang);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q[langIndex],
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a[langIndex],
      },
    })),
  };
};

export const ldJson = (data: object) => ({
  __html: JSON.stringify(data).replace(/</g, '\\u003c'),
});

export const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: NAME[0],
  alternateName: [
    'Siddique Akbar Trust',
    'Jamia Siddique Akbar',
    'Jamia Siddique Akbar Ahle Sunnat Trust',
    'Jamia Siddiqui Akbar Ahle Sunnat Trust',
    NAME[1],
    NAME[2],
  ],
  description:
    'A madrasa in Nashik, Maharashtra teaching Quran, Hifz, Tajweed and Dars-e-Nizami, with a separate department for girls coming soon.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/gallery/class-1.jpg`,
  email: EMAIL,
  telephone: PHONE,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    email: EMAIL,
    contactType: 'admissions and donations',
    availableLanguage: ['English', 'Urdu', 'Hindi'],
  },
  knowsLanguage: ['en', 'ur', 'hi', 'ar'],
  areaServed: { '@type': 'City', name: 'Nashik' },
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

export const WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: NAME[0],
  alternateName: ORGANIZATION.alternateName,
  url: SITE_URL,
  inLanguage: [...LANGUAGES],
  publisher: { '@id': ORGANIZATION['@id'] },
};
