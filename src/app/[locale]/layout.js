import { Inter } from "next/font/google";
import "../../styles/globals.css";
import { HeaderMenu } from "@/components/menu/headerMenu"
import { Link } from "@/navigation";
import { Adsense } from "@/components/ads/adsense";
import { TranslationToggle } from "@/components/translationToggle";
import Head from "next/head";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Video Download",
  description: 'Download videos, reels, stories, and posts from Instagram, TikTok, Facebook, Youtube, and more.',
  applicationName: "Best Video Download",
  referrer: "origin-when-cross-origin",
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#4044FC',
  charset: "utf-8",
  metadataBase: new URL("https://master.dt0c010mqhuhl.amplifyapp.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Best Video Download",
    description: "Download Videos, Musics and Images from any social media platforms.",
    url: "/",
    siteName: "Best Video Download",
    images: [
      {
        url: "/openGraph/opengraph-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Video Download Card"
      }
    ],
    type: "website"
  },
  robots: {
    index: false,
    follow: true,
    noCache: false,
    googleBot: {
      index: false,
      follow: true,
      noImageIndex: false,
      'max-video-review': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/manifest.json',
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <Adsense />
      </Head>
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-main-color p-3 rounded-b-2xl w-full shadow-xl">
          {/* Ícone do Menu */}
          <HeaderMenu />
          {/* Título do Meio */}
          <Link href="/">
            <Image alt="Best Video Download logo image" src="/icons/logo/webp/logo-outline-white-500.webp" width={32} height={32} className="md:w-8 md:h-8"></Image>
          </Link>
          {/* Ícone da direita */}
          <TranslationToggle />
        </header>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <footer className="bg-main-color p-6">
          <p className="text-white text-center md:text-left">© 2024 Best Video Download. All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}
