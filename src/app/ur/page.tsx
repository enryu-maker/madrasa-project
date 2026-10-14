import Page from '../page';
import { pageMeta } from '@/lib/seo';

// Same page as /, rendered in Urdu because the URL starts with /ur.
export const metadata = pageMeta('/', 'ur');

export default Page;
