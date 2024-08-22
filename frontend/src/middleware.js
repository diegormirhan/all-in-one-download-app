import createMiddleware from 'next-intl/middleware';
import {locales, /* ... */} from './config';
 
export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|es|fr|de|pt|it|zh|ja|ko|ru|ar|hi|nl|sv|no|da|fi|tr|el|pl|he|th|id|hu|cs|ro|uk|vi|bn)/:path*']
};