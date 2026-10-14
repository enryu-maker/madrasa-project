// Facts that appear on more than one page live here, so they are corrected in one place.

export type Pair = [en: string, ur: string];
export type Language = 'en' | 'ur';

/** Urdu pages live under /ur: localize('/about', 'ur') is '/ur/about'. */
export const localize = (href: string, lang: Language) =>
  lang === 'ur' && href.startsWith('/') ? `/ur${href === '/' ? '' : href}` : href;

export const PHONE = '+91 8055108635';
export const EMAIL = 'info@siddiqueakbartrust.com';
export const UPI_ID = 'jamiasiddhiqe@srcb';
export const PAYEE = 'Jamia Siddhiqe Akbar Ahale Sunnat Trust';

export const ADDRESS: Pair = [
  'Ashrafi Chowk, Sanjiv Nagar, Link Road, Nashik',
  'اشرفی چوک، سنجیو نگر، لنک روڈ، ناسک',
];
export const HOURS: Pair = ['Monday – Saturday, 9:00 AM – 6:00 PM', 'پیر تا ہفتہ، صبح 9 تا شام 6'];

export const whatsapp = (text?: string) =>
  `https://wa.me/${PHONE.replace(/\D/g, '')}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

/** Deep link that opens the donor's UPI app. Without a valid amount the app asks for one. */
export const upiLink = (amount?: number) =>
  `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE)}&cu=INR&tn=Donation` +
  (amount && amount >= 1 ? `&am=${Math.floor(amount)}` : '');

export const BANK: { label: Pair; value: string }[] = [
  { label: ['Bank', 'بینک'], value: 'Saraswat Co-Operative Bank Limited' },
  { label: ['Account name', 'اکاؤنٹ کا نام'], value: PAYEE },
  { label: ['Account number', 'اکاؤنٹ نمبر'], value: '610000000072389' },
  { label: ['IFSC code', 'آئی ایف ایس سی کوڈ'], value: 'SRCB0000493' },
];

export const STATS: { value: string; label: Pair }[] = [
  { value: '150+', label: ['Active students', 'فعال طلباء'] },
  { value: '5+', label: ['Qualified teachers', 'مستند اساتذہ'] },
  { value: '15+', label: ['Programs', 'پروگرام'] },
];

export const FUNDS: { title: Pair; desc: Pair }[] = [
  {
    title: ['Zakat & Sadaqah', 'زکوٰۃ اور صدقات'],
    desc: ['For deserving students and their teachers.', 'مستحق طلباء اور ان کے اساتذہ کے لیے۔'],
  },
  {
    title: ['Building fund', 'تعمیراتی فنڈ'],
    desc: ['More rooms, so we can take more students.', 'مزید کمرے، تاکہ ہم زیادہ طلباء کو داخلہ دے سکیں۔'],
  },
  {
    title: ['Waqf (endowment)', 'وقف (صدقہ جاریہ)'],
    desc: ['A one-time gift that keeps paying for teaching, year after year.', 'ایک بار کا عطیہ جو سال بہ سال تعلیم کا خرچ اٹھاتا رہتا ہے۔'],
  },
];

export const PROGRAMS: { title: Pair; desc: Pair }[] = [
  {
    title: ['Quran learning', 'قرآن کی تعلیم'],
    desc: ['Hifz, Tajweed and Qiraat, for children and adults.', 'حفظ، تجوید اور قرأت، بچوں اور بڑوں کے لیے۔'],
  },
  {
    title: ['Dars-e-Nizami', 'درسِ نظامی'],
    desc: ['The eight-year Aalim course.', 'آٹھ سالہ عالم کورس۔'],
  },
  {
    title: ['Islamic studies', 'اسلامی تعلیمات'],
    desc: ['Hadith, Fiqh, Aqeedah and Seerah.', 'حدیث، فقہ، عقیدہ اور سیرت۔'],
  },
  {
    title: ['Character building', 'کردار سازی'],
    desc: ['Tarbiyah, Akhlaq and discipline. This runs through every class.', 'تربیت، اخلاق اور نظم و ضبط۔ یہ ہر کلاس کا حصہ ہے۔'],
  },
  {
    title: ['Languages', 'زبانیں'],
    desc: ['Urdu, Arabic and English.', 'اردو، عربی اور انگریزی۔'],
  },
];

export const EVENTS: { day: string; month: Pair; title: Pair; place: Pair }[] = [
  {
    day: '26',
    month: ['January 2026', 'جنوری 2026'],
    title: ['Urs-e-Vakeel Ahmad Shah Conference', 'عرسِ وکیل احمد شاہ کانفرنس'],
    place: ['Nashik', 'ناسک'],
  },
  {
    day: '10',
    month: ['October 2025', 'اکتوبر 2025'],
    title: ['Jashn-e-Gous ul Wara', 'جشنِ غوث الوریٰ'],
    place: ['Nashik', 'ناسک'],
  },
  {
    day: '29',
    month: ['June 2025', 'جون 2025'],
    title: ['Shaheedain Conference', 'شہیدین کانفرنس'],
    place: ['Nashik', 'ناسک'],
  },
];

const CLASS: Pair = ['Students reading the Quran with their teacher', 'طلباء اپنے استاد کے ساتھ قرآن پڑھتے ہوئے'];
const FLAG: Pair = ['Students carrying the national flag', 'طلباء قومی پرچم لیے ہوئے'];
const DECOR: Pair = ['Tricolour decorations and rangoli at the madrasa', 'مدرسے میں ترنگے کی سجاوٹ اور رنگولی'];
const STAGE: Pair = ['Scholars on stage at a gathering', 'ایک اجتماع میں اسٹیج پر علماء'];
const JALSA: Pair = ['A gathering at the madrasa', 'مدرسے میں ایک اجتماع'];

// Files live in public/gallery. Width and height are the real pixel sizes.
export const PHOTOS: { file: string; w: number; h: number; alt: Pair }[] = [
  { file: 'class-1', w: 1200, h: 900, alt: CLASS },
  { file: 'flag-1', w: 1154, h: 1200, alt: FLAG },
  { file: 'stage-1', w: 1200, h: 900, alt: STAGE },
  { file: 'decor-1', w: 900, h: 1200, alt: DECOR },
  { file: 'class-2', w: 1200, h: 900, alt: CLASS },
  { file: 'jalsa', w: 1200, h: 624, alt: JALSA },
  { file: 'flag-2', w: 1200, h: 900, alt: FLAG },
  { file: 'decor-4', w: 900, h: 1200, alt: DECOR },
  { file: 'stage-2', w: 1200, h: 900, alt: STAGE },
  { file: 'class-3', w: 1200, h: 900, alt: CLASS },
  { file: 'decor-3', w: 1200, h: 1050, alt: DECOR },
  { file: 'stage-3', w: 1200, h: 900, alt: STAGE },
  { file: 'decor-2', w: 900, h: 1200, alt: DECOR },
  { file: 'stage-4', w: 1200, h: 900, alt: STAGE },
];

// Shown on /our-institution and sent to search engines as FAQPage data.
export const FAQS: { q: Pair; a: Pair }[] = [
  { q: ['Who can enrol?', 'کون داخلہ لے سکتا ہے؟'], a: ['Anyone: children, young people and adults. Boys and girls are both admitted, and girls study in a separate department.', 'کوئی بھی: بچے، نوجوان اور بڑے۔ لڑکے اور لڑکیاں دونوں داخلہ لے سکتے ہیں، اور طالبات کا شعبہ الگ ہے۔'] },
  { q: ['Do your teachers hold ijazah?', 'کیا آپ کے اساتذہ کے پاس اجازت ہے؟'], a: ['Yes. Every teacher holds ijazah in the subjects they teach.', 'جی ہاں۔ ہر استاد جو مضمون پڑھاتا ہے اس کی اجازت رکھتا ہے۔'] },
  { q: ['Is there a separate section for girls?', 'کیا طالبات کا شعبہ الگ ہے؟'], a: ['Yes. Girls study in a separate department with women staff.', 'جی ہاں۔ طالبات علیحدہ شعبے میں خواتین عملے کے ساتھ پڑھتی ہیں۔'] },
  { q: ['What courses do you offer?', 'آپ کون سے کورس پڑھاتے ہیں؟'], a: ['Hifz-ul-Quran, Tajweed, Dars-e-Nizami (the eight-year Aalim course), Hadith, Fiqh, and the Aalimah course for girls.', 'حفظ القرآن، تجوید، درسِ نظامی (آٹھ سالہ عالم کورس)، حدیث، فقہ، اور طالبات کے لیے عالمہ کورس۔'] },
  { q: ['How do I apply?', 'درخواست کیسے دیں؟'], a: [`Fill in the form on the Admissions page, or message us on WhatsApp at ${PHONE}.`, `داخلہ کے صفحے پر فارم پُر کریں، یا واٹس ایپ پر ${PHONE} پر پیغام بھیجیں۔`] },
];
