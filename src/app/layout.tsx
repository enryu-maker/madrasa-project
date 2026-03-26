import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Providers from '@/components/Providers';
import { Toaster } from 'sonner';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Faiz ul Hasnain Foundation — Authentic Islamic Education | Nashik, India',
  description: 'A trusted Islamic educational institution dedicated to nurturing Deen, character, Quran, and academic excellence. Campus & Online programs available.',
  keywords: 'Islamic education, Quran, Hifz, Dars-e-Nizami, Nashik, Madrasa, online Quran classes',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          <Navbar />
          <main className="flex-1 pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
