import createNextIntlPlugin from 'next-intl/plugin';
import withPWAInit from "@ducanh2912/next-pwa";
 
const withNextIntl = createNextIntlPlugin();
 
const withPWA = withPWAInit({
    dest: "public",
    cacheOnFrontEndNav: true,
    reloadOnOnline: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true
    }
  });

/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(withPWA(nextConfig));