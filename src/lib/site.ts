// Facts that appear on more than one page live here, so they are corrected in one place.

export type Pair = [en: string, ur: string];

export const PHONE = '+91 8055108635';
export const EMAIL = 'info@abubakarfoundation.org';
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
  { label: ['Bank', 'بینک'], value: 'State Bank of India' },
  { label: ['Account name', 'اکاؤنٹ کا نام'], value: PAYEE },
  { label: ['Account number', 'اکاؤنٹ نمبر'], value: '0000 0000 0000 0000' },
  { label: ['IFSC code', 'آئی ایف ایس سی کوڈ'], value: 'SMPL0000000' },
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
    place: ['Venue Name, Your City', 'مقام کا نام، آپ کا شہر'],
  },
  {
    day: '10',
    month: ['October 2025', 'اکتوبر 2025'],
    title: ['Jashn-e-Gous ul Wara', 'جشنِ غوث الوریٰ'],
    place: ['Venue Name, Your City', 'مقام کا نام، آپ کا شہر'],
  },
  {
    day: '29',
    month: ['June 2025', 'جون 2025'],
    title: ['Shaheedain Conference', 'شہیدین کانفرنس'],
    place: ['Venue Name, Your City', 'مقام کا نام، آپ کا شہر'],
  },
];
