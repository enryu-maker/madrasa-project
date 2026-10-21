"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface CopyButtonProps {
  value: string;
  label: string;
}

export default function CopyButton({ value, label }: CopyButtonProps) {
  const { t } = useLanguage();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(t("Copied", "کاپی ہو گیا", "कॉपी हो गया"));
    } catch {
      toast.error(
        t(
          "Could not copy. Select the text and copy it by hand.",
          "کاپی نہیں ہو سکا۔ متن منتخب کر کے خود کاپی کریں۔",
          "कॉपी नहीं हो सका। टेक्स्ट चुनकर ख़ुद कॉपी करें।"
        )
      );
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`${t("Copy", "کاپی کریں", "कॉपी करें")} ${label}`}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-emerald hover:bg-chalk transition-colors"
    >
      <Copy className="h-4 w-4" />
    </button>
  );
}
