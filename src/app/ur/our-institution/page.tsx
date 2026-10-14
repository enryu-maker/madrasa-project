import Page from '../../our-institution/page';
import { faqPage, ldJson, pageMeta } from '@/lib/seo';

export const metadata = pageMeta('/our-institution', 'ur');

export default function UrduOurInstitution() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ldJson(faqPage('ur'))} />
      <Page />
    </>
  );
}
