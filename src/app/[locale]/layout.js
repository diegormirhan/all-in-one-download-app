import { Inter } from "next/font/google";
import Image from "next/image";
import "../../styles/globals.css";

import { TranslationToggle } from "@/components/translationToggle";
import { HeaderMenu } from "@/components/menu/headerMenu"

import ShareButtons from '@/components/shareButtons'

import { Link } from "@/navigation";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { idiomasExcluidos } from "@/components/utils/excludedLang";

import GoogleAnalytics from "@/components/google/analytics";
import { AdSense } from "@/components/google/adsense";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4044FC',
}

export async function generateMetadata({ params }) {
  const { locale } = params;

  const isExcludedLanguage = idiomasExcluidos.includes(locale);

  return {
    title: "Best Media Tool",
    description: 'Download videos, reels, stories, and posts from Instagram, TikTok, Facebook, Youtube, and more.',
    applicationName: "Best Media Tool",
    referrer: "origin-when-cross-origin",
    charset: "utf-8",
    metadataBase: new URL("https://bestmediatool.com"),
    alternates: {
      canonical: "/",
      languages: {
        "en": "/en",
        "es": "/es",
        "fr": "/fr",
        "de": "/de",
        "pt": "/pt",
        "it": "/it",
        "zh": "/zh",
        "ja": "/ja",
        "ko": "/ko",
        "ru": "/ru",
        "ar": "/ar",
        "hi": "/hi",
        "nl": "/nl",
        "sv": "/sv",
        "no": "/no",
        "da": "/da",
        "fi": "/fi",
        "tr": "/tr",
        "el": "/el",
        "pl": "/pl",
        "he": "/he",
        "th": "/th",
        "id": "/id",
        "hu": "/hu",
        "cs": "/cs",
        "ro": "/ro",
        "uk": "/uk",
        "vi": "/vi",
        "bn": "/bn"
      }
    },
    robots: isExcludedLanguage
      ? {
        index: false,
        follow: false,
      }
      : {
        index: true,
        follow: true,
      },
      openGraph: {
        title: "Best Media Tool",
        description: "Download Videos, Musics and Images from any social media platforms.",
        url: "/",
        siteName: "Best Media Tool",
        images: [
          {
            url: "/openGraph/opengraph-logo.jpg",
            width: 1200,
            height: 630,
            alt: "Best Media Tool Card"
          }
        ],
        type: "website"
      },
      manifest: '/manifest.json',
  };
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <GoogleAnalytics />
      <AdSense/>
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-main-color p-3 rounded-b-2xl w-full shadow-xl">
          {/* Ícone do Menu */}
          <HeaderMenu />
          {/* Título do Meio */}
          <Link href="/">
            <Image alt="Best Media Tool logo image" src="/icons/logo/webp/logo-outline-white-500.webp" width={32} height={32} className="md:w-8 md:h-8"></Image>
          </Link>
          {/* Ícone da direita */}
          <TranslationToggle />
        </header>
        <NextIntlClientProvider messages={messages}>
          {children}
          <ShareButtons />
        </NextIntlClientProvider>
        <footer className="bg-main-color p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center text-center text-white text-md gap-3">
            <p className="hover:underline col-span-2 md:col-span-1"><Link href="/terms-and-conditions">Terms and Conditions</Link></p>
            <p className="hover:underline col-span-2 md:col-span-1"><Link href="/about">About</Link></p>
            <p className="hover:underline col-span-2 md:col-span-1"><Link href="/privacy-policy">Privacy Policy</Link></p>
          </div>
          <div className="h-[1px] w-full bg-white mt-6 mb-3"></div>
          <p className="text-white text-center md:text-left">© 2024 Best Media Tool. All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}
