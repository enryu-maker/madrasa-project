import type { MetadataRoute } from 'next';
import { languages, ROUTES, SITE_URL } from '@/lib/seo';
import { localize } from '@/lib/site';

const abs = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap(path => (['en', 'ur'] as const).map(lang => ({
    url: abs(localize(path, lang)),
    priority: path === '/' ? 1 : 0.8,
    alternates: { languages: Object.fromEntries(Object.entries(languages(path)).map(([k, v]) => [k, abs(v)])) },
  })));
}
