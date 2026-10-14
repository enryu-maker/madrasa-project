import type { ReactNode } from 'react';
import { faqPage, ldJson, pageMeta } from '@/lib/seo';

export const metadata = pageMeta('/our-institution');

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ldJson(faqPage('en'))} />
      {children}
    </>
  );
}
