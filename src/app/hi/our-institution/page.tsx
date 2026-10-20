import Page from '../../our-institution/page';
import { faqPage, ldJson, pageMeta } from '@/lib/seo';

export const metadata = pageMeta('/our-institution', 'hi');

export default function HindiOurInstitution() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ldJson(faqPage('hi'))} />
      <Page />
    </>
  );
}
