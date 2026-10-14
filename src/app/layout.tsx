import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Amiri, Hind, Marcellus, Noto_Nastaliq_Urdu } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Providers from '@/components/Providers';
import { ldJson, ORGANIZATION, pageMeta, SITE_URL } from '@/lib/seo';

const marcellus = Marcellus({ variable: '--font-marcellus', subsets: ['latin'], weight: '400' });
const hind = Hind({ variable: '--font-hind', subsets: ['latin'], weight: ['400', '500', '600'] });
const amiri = Amiri({ variable: '--font-amiri', subsets: ['arabic'], weight: '400' });
// Only needed once a visitor switches to Urdu, so it is not preloaded.
const nastaliq = Noto_Nastaliq_Urdu({ variable: '--font-nastaliq', subsets: ['arabic'], preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMeta('/'),
  keywords: 'madrasa in Nashik, Islamic education, Quran, Hifz, Dars-e-Nizami, Aalimah, donate, zakat, sadaqah',
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${marcellus.variable} ${hind.variable} ${amiri.variable} ${nastaliq.variable} h-full`}>
      <body className="min-h-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={ldJson(ORGANIZATION)} />
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
