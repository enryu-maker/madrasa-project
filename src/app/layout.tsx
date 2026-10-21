import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Amiri, Hind, Marcellus, Noto_Nastaliq_Urdu, Noto_Sans_Arabic } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Providers from "@/components/Providers";
import { ldJson, ORGANIZATION, pageMeta, SITE_URL, WEBSITE } from "@/lib/seo";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: "400",
});

const nastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-nastaliq",
  subsets: ["arabic"],
  preload: false,
});

const urduFont = Noto_Sans_Arabic({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMeta("/"),
  keywords:
    "Jamia Siddhiqe Akbar Ahale Sunnat Trust, Jamia Siddique Akbar, Siddique Akbar Trust, Ahle Sunnat madrasa Nashik, madrasa in Nashik, Islamic education, Quran, Hifz, Dars-e-Nizami, Aalimah, donate, zakat, sadaqah",
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const fontClasses = `${marcellus.variable} ${hind.variable} ${amiri.variable} ${nastaliq.variable} ${urduFont.variable}`;

  return (
    <html lang="en" suppressHydrationWarning className={`${fontClasses} h-full`}>
      <body className="min-h-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={ldJson([ORGANIZATION, WEBSITE])} />
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
