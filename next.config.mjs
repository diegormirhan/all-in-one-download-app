import createNextIntlPlugin from 'next-intl/plugin';
import withPWAInit from "@ducanh2912/next-pwa";
import BundleAnalyzer from '@next/bundle-analyzer';
const withNextIntl = createNextIntlPlugin();

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  disableDevLogs: true,
  disable: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js$/,
      handler: 'NetworkOnly',
      options: {
        cacheName: 'adsense-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          },
      },
    },
  ]
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

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withNextIntl(withPWA(withBundleAnalyzer(nextConfig)));


