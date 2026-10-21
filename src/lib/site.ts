export type TranslationTriple = [en: string, ur: string, hi: string];
export type Pair = TranslationTriple; // alias for backwards compatibility

export const LANGUAGES = ['en', 'ur', 'hi'] as const;
export type Language = (typeof LANGUAGES)[number];

export const localize = (href: string, lang: Language): string => {
  if (lang === 'en' || !href.startsWith('/')) {
    return href;
  }
  return `/${lang}${href === '/' ? '' : href}`;
};

export const NAME: TranslationTriple = [
  'Jamia Siddhiqe Akbar Ahale Sunnat Trust',
  'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ',
  'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट',
];

export const PHONE = '+91 8055108635';
export const EMAIL = 'info@siddiqueakbartrust.com';
export const UPI_ID = 'jamiasiddhiqe@srcb';
export const PAYEE = NAME[0];

export const ADDRESS: TranslationTriple = [
  'Ashrafi Chowk, Sanjiv Nagar, Link Road, Nashik',
  'اشرفی چوک، سنجیو نگر، لنک روڈ، ناسک',
  'अशरफ़ी चौक, संजीव नगर, लिंक रोड, नासिक',
];

export const HOURS: TranslationTriple = [
  'Monday – Saturday, 9:00 AM – 6:00 PM',
  'پیر تا ہفتہ، صبح ۹ تا شام ۶',
  'सोमवार से शनिवार, सुबह ९ से शाम ६ बजे तक',
];

export const whatsapp = (text?: string): string => {
  const cleanPhone = PHONE.replace(/\D/g, '');
  const query = text ? `?text=${encodeURIComponent(text)}` : '';
  return `https://wa.me/${cleanPhone}${query}`;
};

export const upiLink = (amount?: number): string => {
  const base = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE)}&cu=INR&tn=Donation`;
  if (amount && amount >= 1) {
    return `${base}&am=${Math.floor(amount)}`;
  }
  return base;
};

export interface BankDetail {
  label: TranslationTriple;
  value: string;
}

export const BANK: BankDetail[] = [
  { label: ['Bank', 'بینک', 'बैंक'], value: 'Saraswat Co-Operative Bank Limited' },
  { label: ['Account name', 'اکاؤنٹ کا نام', 'खाते का नाम'], value: PAYEE },
  { label: ['Account number', 'اکاؤنٹ نمبر', 'खाता नंबर'], value: '610000000072389' },
  { label: ['IFSC code', 'آئی ایف ایس سی کوڈ', 'IFSC कोड'], value: 'SRCB0000493' },
];

export interface StatItem {
  value: TranslationTriple;
  label: TranslationTriple;
}

export const STATS: StatItem[] = [
  { value: ['150+', '۱۵۰+', '१५०+'], label: ['Active students', 'زیرِ تعلیم طلباء', 'सक्रिय छात्र'] },
  { value: ['5+', '۵+', '५+'], label: ['Qualified teachers', 'مستند اساتذہ', 'योग्य उस्ताद'] },
  { value: ['15+', '۱۵+', '१५+'], label: ['Programs', 'پروگرام', 'कोर्स'] },
];

export interface FundItem {
  title: TranslationTriple;
  desc: TranslationTriple;
}

export const FUNDS: FundItem[] = [
  {
    title: ['Zakat & Sadaqah', 'زکوٰۃ اور صدقات', 'ज़कात और सदक़ा'],
    desc: ['For deserving students and their teachers.', 'مستحق طلباء اور ان کے اساتذہ کے لیے۔', 'ज़रूरतमंद छात्रों और उनके उस्तादों के लिए।'],
  },
  {
    title: ['Building fund', 'تعمیراتی فنڈ', 'बिल्डिंग फ़ंड'],
    desc: ['More rooms, so we can take more students.', 'مزید کمرے، تاکہ ہم زیادہ طلباء کو داخلہ دے سکیں۔', 'और कमरे, ताकि हम ज़्यादा छात्रों को दाख़िला दे सकें।'],
  },
  {
    title: ['Waqf (endowment)', 'وقف (صدقۂ جاریہ)', 'वक़्फ़ (सदक़ा-ए-जारिया)'],
    desc: ['A one-time gift that keeps paying for teaching, year after year.', 'ایک بار کا عطیہ جو سال بہ سال تعلیم کا خرچ اٹھاتا رہتا ہے۔', 'एक बार का दान जो साल-दर-साल तालीम का ख़र्च उठाता रहता है।'],
  },
];

export interface ProgramItem {
  title: TranslationTriple;
  desc: TranslationTriple;
}

export const PROGRAMS: ProgramItem[] = [
  {
    title: ['Quran learning', 'قرآن کی تعلیم', 'क़ुरआन की तालीम'],
    desc: ['Hifz, Tajweed and Qiraat, for children and adults.', 'حفظ، تجوید اور قرأت، بچوں اور بڑوں کے لیے۔', 'हिफ़्ज़, तजवीद और क़िरात, बच्चों और बड़ों के लिए।'],
  },
  {
    title: ['Dars-e-Nizami', 'درسِ نظامی', 'दर्स-ए-निज़ामी'],
    desc: ['The eight-year Aalim course.', 'آٹھ سالہ عالم کورس۔', 'आठ साल का आलिम कोर्स।'],
  },
  {
    title: ['Islamic studies', 'اسلامی تعلیمات', 'इस्लामी तालीमात'],
    desc: ['Hadith, Fiqh, Aqeedah and Seerah.', 'حدیث، فقہ، عقیدہ اور سیرت۔', 'हदीस, फ़िक़्ह, अक़ीदा और सीरत।'],
  },
  {
    title: ['Character building', 'کردار سازی', 'किरदार साज़ी'],
    desc: ['Tarbiyah, Akhlaq and discipline. This runs through every class.', 'تربیت، اخلاق اور نظم و ضبط۔ یہ ہر کلاس کا حصہ ہے۔', 'तरबियत, अख़लाक़ और अनुशासन। यह हर क्लास का हिस्सा है।'],
  },
  {
    title: ['Languages', 'زبانیں', 'भाषाएँ'],
    desc: ['Urdu, Arabic and English.', 'اردو، عربی اور انگریزی۔', 'उर्दू, अरबी और अंग्रेज़ी।'],
  },
];

export interface EventItem {
  day: TranslationTriple;
  month: TranslationTriple;
  title: TranslationTriple;
  place: TranslationTriple;
}

export const EVENTS: EventItem[] = [
  {
    day: ['26', '۲۶', '२६'],
    month: ['January 2026', 'جنوری ۲۰۲۶', 'जनवरी २०२६'],
    title: ['Urs-e-Vakeel Ahmad Shah Conference', 'عرسِ وکیل احمد شاہ کانفرنس', 'उर्स-ए-वकील अहमद शाह कॉन्फ़्रेंस'],
    place: ['Nashik', 'ناسک', 'नासिक'],
  },
  {
    day: ['10', '۱۰', '१०'],
    month: ['October 2025', 'اکتوبر ۲۰۲۵', 'अक्टूबर २०२५'],
    title: ['Jashn-e-Gous ul Wara', 'جشنِ غوث الوریٰ', 'जश्न-ए-ग़ौस-उल-वरा'],
    place: ['Nashik', 'ناسک', 'नासिक'],
  },
  {
    day: ['29', '۲۹', '२۹'],
    month: ['June 2025', 'جون ۲۰۲۵', 'जून २०२५'],
    title: ['Shaheedain Conference', 'شہیدین کانفرنس', 'शहीदैन कॉन्फ़्रेंस'],
    place: ['Nashik', 'ناسک', 'नासिक'],
  },
];

const CLASS_CAPTION: TranslationTriple = [
  'Students reading the Quran with their teacher',
  'طلباء اپنے استاد کے ساتھ قرآن پڑھتے ہوئے',
  'छात्र अपने उस्ताद के साथ क़ुरआन पढ़ते हुए',
];

const FLAG_CAPTION: TranslationTriple = [
  'Students carrying the national flag',
  'طلباء قومی پرچم لیے ہوئے',
  'छात्र राष्ट्रीय ध्वज लिए हुए',
];

const DECOR_CAPTION: TranslationTriple = [
  'Tricolour decorations and rangoli at the madrasa',
  'مدرسے میں ترنگے کی سجاوٹ اور رنگولی',
  'मदरसे में तिरंगे की सजावट और रंगोली',
];

const STAGE_CAPTION: TranslationTriple = [
  'Scholars on stage at a gathering',
  'ایک اجتماع میں اسٹیج پر علماء',
  'एक इज्तिमा में मंच पर उलमा',
];

const JALSA_CAPTION: TranslationTriple = [
  'A gathering at the madrasa',
  'مدرسے میں ایک اجتماع',
  'मदरसे में एक इज्तिमा',
];

export interface PhotoItem {
  file: string;
  w: number;
  h: number;
  alt: TranslationTriple;
}

export const PHOTOS: PhotoItem[] = [
  { file: 'class-1', w: 1200, h: 900, alt: CLASS_CAPTION },
  { file: 'flag-1', w: 1154, h: 1200, alt: FLAG_CAPTION },
  { file: 'stage-1', w: 1200, h: 900, alt: STAGE_CAPTION },
  { file: 'decor-1', w: 900, h: 1200, alt: DECOR_CAPTION },
  { file: 'class-2', w: 1200, h: 900, alt: CLASS_CAPTION },
  { file: 'jalsa', w: 1200, h: 624, alt: JALSA_CAPTION },
  { file: 'flag-2', w: 1200, h: 900, alt: FLAG_CAPTION },
  { file: 'decor-4', w: 900, h: 1200, alt: DECOR_CAPTION },
  { file: 'stage-2', w: 1200, h: 900, alt: STAGE_CAPTION },
  { file: 'class-3', w: 1200, h: 900, alt: CLASS_CAPTION },
  { file: 'decor-3', w: 1200, h: 1050, alt: DECOR_CAPTION },
  { file: 'stage-3', w: 1200, h: 900, alt: STAGE_CAPTION },
  { file: 'decor-2', w: 900, h: 1200, alt: DECOR_CAPTION },
  { file: 'stage-4', w: 1200, h: 900, alt: STAGE_CAPTION },
];

export interface FaqItem {
  q: TranslationTriple;
  a: TranslationTriple;
}

export const FAQS: FaqItem[] = [
  {
    q: ['What is Jamia Siddhiqe Akbar Ahale Sunnat Trust?', 'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ کیا ہے؟', 'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट क्या है?'],
    a: [
      'Jamia Siddhiqe Akbar Ahale Sunnat Trust is a madrasa in Nashik, Maharashtra, opened in 2024. It teaches Quran, Hifz, Tajweed and Dars-e-Nizami to 150+ students at low fees, funded by Zakat and Sadaqah.',
      'جامعہ صدیقِ اکبر اہلِ سنت ٹرسٹ ناسک، مہاراشٹر کا ایک مدرسہ ہے جو ۲۰۲۴ میں قائم ہوا۔ یہاں ۱۵۰ سے زائد طلباء کو کم فیس میں قرآن، حفظ، تجوید اور درسِ نظامی پڑھایا جاتا ہے، جس کا خرچ زکوٰۃ اور صدقات سے پورا ہوتا ہے۔',
      'जामिया सिद्दीक़े अकबर अहले सुन्नत ट्रस्ट नासिक, महाराष्ट्र का एक मदरसा है जो २०२४ में शुरू हुआ। यहाँ १५० से ज़्यादा छात्रों को कम फ़ीस में क़ुरआन, हिफ़्ज़, तजवीद और दर्स-ए-निज़ामी पढ़ाया जाता है, जिसका ख़र्च ज़कात और सदक़े से चलता है।',
    ],
  },
  {
    q: ['Where is the madrasa, and when is it open?', 'مدرسہ کہاں ہے، اور کب کھلا رہتا ہے؟', 'मदरसा कहाँ है, और कब खुला रहता है?'],
    a: [
      `${ADDRESS[0]}, Maharashtra. The office is open ${HOURS[0]}. Call or WhatsApp ${PHONE}.`,
      `${ADDRESS[1]}، مہاراشٹر۔ دفتر ${HOURS[1]} کھلا رہتا ہے۔ کال یا واٹس ایپ کریں: ${PHONE}`,
      `${ADDRESS[2]}, महाराष्ट्र। दफ़्तर ${HOURS[2]} खुला रहता है। कॉल या व्हाट्सऐप करें: ${PHONE}`,
    ],
  },
  {
    q: ['Can I give Zakat, and is my donation tax-deductible?', 'کیا میں زکوٰۃ دے سکتا ہوں، اور کیا عطیے پر ٹیکس میں چھوٹ ملتی ہے؟', 'क्या मैं ज़कात दे सकता हूँ, और क्या दान पर टैक्स में छूट मिलती है?'],
    a: [
      `Yes. Zakat goes to deserving students and their teachers. The trust is registered under 80G and 12A, so Indian taxpayers can claim a deduction. Give by UPI (${UPI_ID}) or bank transfer, then send your name, PAN and amount on WhatsApp for the receipt.`,
      `جی ہاں۔ زکوٰۃ مستحق طلباء اور ان کے اساتذہ پر خرچ ہوتی ہے۔ ٹرسٹ دفعہ ۸۰ جی اور ۱۲ اے کے تحت رجسٹرڈ ہے، اس لیے ہندوستانی ٹیکس دہندگان چھوٹ لے سکتے ہیں۔ یو پی آئی (${UPI_ID}) یا بینک سے عطیہ دیں، پھر رسید کے لیے اپنا نام، پین اور رقم واٹس ایپ کریں۔`,
      `जी हाँ। ज़कात ज़रूरतमंद छात्रों और उनके उस्तादों पर ख़र्च होती है। ट्रस्ट धारा ८०जी और १२ए के तहत रजिस्टर्ड है, इसलिए भारतीय करदाता छूट ले सकते हैं। UPI (${UPI_ID}) या बैंक से दान दें, फिर रसीद के लिए अपना नाम, PAN और रक़म व्हाट्सऐप करें।`,
    ],
  },
  {
    q: ['Who can enrol?', 'کون داخلہ لے سکتا ہے؟', 'कौन दाख़िला ले सकता है?'],
    a: [
      'Anyone: children, young people and adults. Boys are admitted now; a separate department for girls is opening soon.',
      'کوئی بھی: بچے، نوجوان اور بڑے۔ ابھی لڑکوں کا داخلہ ہوتا ہے؛ طالبات کا علیحدہ شعبہ جلد کھلے گا۔',
      'कोई भी: बच्चे, नौजवान और बड़े। अभी लड़कों का दाख़िला होता है; छात्राओं का अलग विभाग जल्द खुलेगा।',
    ],
  },
  {
    q: ['Do your teachers hold ijazah?', 'کیا آپ کے اساتذہ سندِ اجازت رکھتے ہیں؟', 'क्या आपके उस्तादों के पास इजाज़त (सनद) है?'],
    a: [
      'Yes. Every teacher holds ijazah in the subjects they teach.',
      'جی ہاں۔ ہر استاد جو مضمون پڑھاتا ہے اس کی سندِ اجازت رکھتا ہے۔',
      'जी हाँ। हर उस्ताद जो विषय पढ़ाता है, उसकी इजाज़त रखता है।',
    ],
  },
  {
    q: ['Is there a separate section for girls?', 'کیا طالبات کا شعبہ الگ ہے؟', 'क्या छात्राओं का विभाग अलग है?'],
    a: [
      'A separate department for girls, with women staff, is coming soon.',
      'معلمات کے زیرِ نگرانی طالبات کا علیحدہ شعبہ جلد آرہا ہے۔',
      'महिला स्टाफ़ के साथ छात्राओं का अलग विभाग जल्द आ रहा है।',
    ],
  },
  {
    q: ['What courses do you offer?', 'آپ کون سے کورس پڑھاتے ہیں؟', 'आप कौन-से कोर्स पढ़ाते हैं?'],
    a: [
      'Hifz-ul-Quran, Tajweed, Dars-e-Nizami (the eight-year Aalim course), Hadith, Fiqh, and the Aalimah course for girls (coming soon).',
      'حفظ القرآن، تجوید، درسِ نظامی (آٹھ سالہ عالم کورس)، حدیث، فقہ، اور طالبات کے لیے عالمہ کورس (جلد آرہا ہے)۔',
      'हिफ़्ज़-उल-क़ुरआन, तजवीद, दर्स-ए-निज़ामी (आठ साल का आलिम कोर्स), हदीस, फ़िक़्ह, और छात्राओं के लिए आलिमा कोर्स (जल्द आ रहा है)।',
    ],
  },
  {
    q: ['How do I apply?', 'درخواست کیسے دیں؟', 'आवेदन कैसे करें?'],
    a: [
      `Fill in the form on the Admissions page, or message us on WhatsApp at ${PHONE}.`,
      `داخلے کے صفحے پر فارم پُر کریں، یا ${PHONE} پر واٹس ایپ پیغام بھیجیں۔`,
      `दाख़िले के पेज पर फ़ॉर्म भरें, या व्हाट्सऐप पर ${PHONE} पर संदेश भेजें।`,
    ],
  },
];
