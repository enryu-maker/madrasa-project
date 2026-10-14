"use client";

import NextLink from 'next/link';
import type { ComponentProps } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { localize } from '@/lib/site';

/** next/link that keeps Urdu readers on /ur pages. Write hrefs as the English path. */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink> & { href: string }) {
  const { lang } = useLanguage();
  return <NextLink href={localize(href, lang)} {...props} />;
}
