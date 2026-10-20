import Page from '../page';
import { pageMeta } from '@/lib/seo';

// Same page as /, rendered in Hindi because the URL starts with /hi.
export const metadata = pageMeta('/', 'hi');

export default Page;
