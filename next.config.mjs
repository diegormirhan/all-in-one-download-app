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
  runtimeCaching: [
    {
      // Exclui o AdSense das regras de caching do Workbox
      urlPattern: /^https:\/\/pagead2\.googlesyndication\.com\/.*/,
      handler: 'NetworkOnly', // Ou pode usar `StaleWhileRevalidate` se preferir cache leve
    },
    {
      // Regras para os demais recursos
      urlPattern: /.*/i,
      handler: 'NetworkOnly', // Sem cache para os outros recursos
    },
  ],
  skipWaiting: true, // O SW não espera para ser ativado quando há atualizações
  clientsClaim: true, // O SW assume controle imediato após ser ativado
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
    ],
  },
};

export default withNextIntl(withPWA(nextConfig));


