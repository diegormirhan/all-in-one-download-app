import createNextIntlPlugin from 'next-intl/plugin';
import withPWAInit from "@ducanh2912/next-pwa";

const withNextIntl = createNextIntlPlugin();

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  disable: true,
  workboxOptions: {
    disableDevLogs: true
  },
  });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // Allows any hostname
        port: '',         // Allows any port
        pathname: '**',   // Allows any pathname
      },
      {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default withNextIntl(withPWA(nextConfig));


