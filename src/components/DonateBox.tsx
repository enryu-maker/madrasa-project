"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from '@/components/Link';
import { useLanguage } from '@/contexts/LanguageContext';
import { UPI_ID, upiLink } from '@/lib/site';
import { cn } from '@/lib/utils';
import CopyButton from '@/components/CopyButton';

const AMOUNTS = ['500', '1000', '2500', '5000'];

const DonateBox = ({ showBankLink = true }: { showBankLink?: boolean }) => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState('1000');

  const rupees = Math.floor(Number(amount));
  const valid = rupees >= 1;
  const shown = valid ? `₹${rupees.toLocaleString('en-IN')}` : '';

  return (
    <div className="arch relative mx-auto w-full max-w-sm bg-white px-7 pb-7 pt-16 text-navy shadow-2xl shadow-black/30">
      {/* Gold line that follows the arch, like the border of a mihrab */}
      <div className="arch pointer-events-none absolute inset-2 border border-gold/70" aria-hidden="true" />

      <div className="relative">
        <div className="text-center">
          <span className="khatam h-3.5 w-3.5" aria-hidden="true" />
          <h2 className="display mt-4 text-[1.75rem]">{t('Give to the madrasa', 'مدرسے کو عطیہ دیں', 'मदरसे को दान दें')}</h2>
          <p className="mx-auto mt-2 max-w-[15rem] text-[0.9375rem] rtl:max-w-[18rem] leading-snug text-soft rtl:leading-loose">
            {t('Zakat and sadaqah accepted. Tax-deductible under 80G.', 'زکوٰۃ اور صدقات قبول ہیں۔ دفعہ ۸۰ جی کے تحت ٹیکس میں چھوٹ۔', 'ज़कात और सदक़ा क़बूल है। धारा ८०जी के तहत टैक्स में छूट।')}
          </p>
        </div>

        {/* Phone: pick an amount and hand over to the donor's UPI app */}
        <div className="touch-only mt-6">
          <div className="grid grid-cols-4 gap-2">
            {AMOUNTS.map(a => (
              <button
                key={a}
                onClick={() => setAmount(a)}
                aria-pressed={amount === a}
                className={cn(
                  "min-h-11 rounded-lg border text-[0.9375rem] font-semibold",
                  amount === a ? "border-emerald bg-emerald text-white" : "border-line hover:border-emerald"
                )}
              >
                ₹{Number(a).toLocaleString('en-IN')}
              </button>
            ))}
          </div>
          <label className="mt-3 block text-sm font-medium text-soft">
            {t('Other amount (₹)', 'دوسری رقم (₹)', 'दूसरी रक़म (₹)')}
            <input
              type="number"
              inputMode="numeric"
              min={1}
              dir="ltr"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="field mt-1"
            />
          </label>
          <a href={upiLink(valid ? rupees : undefined)} className="btn btn-gold mt-4 w-full">
            {t(`Pay ${shown} by UPI`, `یو پی آئی سے ${shown} ادا کریں`, `UPI से ${shown} दें`)}
          </a>
          <p className="mt-2 text-center text-sm text-soft">
            {t('Opens GPay, PhonePe, Paytm or any UPI app.', 'جی پے، فون پے، پے ٹی ایم یا کوئی بھی یو پی آئی ایپ کھل جائے گی۔', 'GPay, PhonePe, Paytm या कोई भी UPI ऐप खुल जाएगा।')}
          </p>
        </div>

        {/* Computer: scan with a phone */}
        <div className="mouse-only mt-6 rounded-xl bg-chalk p-5 text-center">
          <Image
            src="/upi-qr.jpg"
            alt={t('UPI QR code for donations', 'عطیات کے لیے یو پی آئی کیو آر کوڈ', 'दान के लिए UPI QR कोड')}
            width={580}
            height={530}
            className="mx-auto h-auto w-44 rounded-lg bg-white"
          />
          <p className="mt-4 font-semibold">{t('Scan with any UPI app', 'کسی بھی یو پی آئی ایپ سے اسکین کریں', 'किसी भी UPI ऐप से स्कैन करें')}</p>
          <p className="text-sm text-soft" dir="ltr">GPay · PhonePe · Paytm · BHIM</p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 rounded-xl border border-line py-1.5 ps-4 pe-1.5">
          <p className="min-w-0 text-sm">
            <span className="block text-soft">{t('UPI ID', 'یو پی آئی آئی ڈی', 'UPI आईडी')}</span>
            <span dir="ltr" className="block truncate font-semibold rtl:text-right">{UPI_ID}</span>
          </p>
          <CopyButton value={UPI_ID} label={t('UPI ID', 'یو پی آئی آئی ڈی', 'UPI आईडी')} />
        </div>

        {showBankLink && (
          <Link href="/donation#bank" className="btn btn-line mt-3 w-full border-emerald text-emerald">
            {t('Bank transfer details', 'بینک ٹرانسفر کی تفصیلات', 'बैंक ट्रांसफ़र की जानकारी')}
          </Link>
        )}
      </div>
    </div>
  );
};

export default DonateBox;
