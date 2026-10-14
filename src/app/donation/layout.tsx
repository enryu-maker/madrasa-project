import type { ReactNode } from 'react';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('/donation');

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
