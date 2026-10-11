"use client";

import { Copy } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

const CopyButton = ({ value, label }: { value: string; label: string }) => {
  const { t } = useLanguage();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(t('Copied', 'کاپی ہو گیا'));
    } catch {
      toast.error(t('Could not copy. Select the text and copy it by hand.', 'کاپی نہیں ہو سکا۔ متن منتخب کر کے خود کاپی کریں۔'));
    }
  };

  return (
    <button
      onClick={copy}
      aria-label={`${t('Copy', 'کاپی')} ${label}`}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-emerald hover:bg-chalk"
    >
      <Copy className="h-4 w-4" />
    </button>
  );
};

export default CopyButton;
