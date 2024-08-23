import createMiddleware from 'next-intl/middleware';
import {locales, /* ... */} from './config';
 
export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false,
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: [ "/((?!api|_next|_vercel|.*\\..*).*)",],
};