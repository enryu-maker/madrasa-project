"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localize } from "@/lib/site";

interface LinkProps extends ComponentProps<typeof NextLink> {
  href: string;
}

export default function Link({ href, ...props }: LinkProps) {
  const { lang } = useLanguage();
  return <NextLink href={localize(href, lang)} {...props} />;
}
