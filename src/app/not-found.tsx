"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-8 text-center overflow-hidden bg-white dark:bg-zinc-950 pt-20">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="w-28 h-28 rounded-[2.5rem] bg-sky-50 dark:bg-sky-950 flex items-center justify-center mb-10 mx-auto shadow-2xl shadow-sky-700/5 border border-sky-100/50">
          <FileQuestion className="h-14 w-14 text-sky-600 dark:text-sky-400" />
        </div>
        
        <h1 className="text-[12rem] font-black tracking-tighter text-sky-900/5 dark:text-sky-500/5 absolute -top-16 left-1/2 -translate-x-1/2 select-none z-0">
          404
        </h1>
        
        <h2 className="relative z-10 font-display text-4xl md:text-6xl font-black text-sky-900 dark:text-white mb-6">
          {t("Page Not Found", "صفحہ نہیں ملا")}
        </h2>
        
        <p className="relative z-10 text-zinc-500 dark:text-zinc-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium">
          {t(
            "The content you are searching for has moved to a higher spiritual plane, or the link is simply broken. Let's get you back on track.",
            "جس مواد کو آپ تلاش کر رہے ہیں وہ اعلیٰ روحانی مقام پر منتقل ہو گیا ہے، یا لنک ٹوٹ گیا ہے۔ آئیے آپ کو واپس راستے پر لاتے ہیں۔"
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/">
            <Button size="lg" className="h-16 px-10 rounded-2xl md:rounded-3xl gradient-primary text-white font-bold text-lg shadow-2xl shadow-sky-700/20 active:scale-95 transition-all flex items-center gap-3">
              <Home className="h-5 w-5" />
              {t("Return to Home", "ہوم پر واپس جائیں")}
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl md:rounded-3xl border-sky-600 text-sky-700 hover:bg-sky-50 font-bold text-lg active:scale-95 transition-all flex items-center gap-3">
              <MessageCircle className="h-5 w-5" />
              {t("Contact Support", "رابطہ کریں")}
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
