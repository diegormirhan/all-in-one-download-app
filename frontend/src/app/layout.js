import { Inter } from "next/font/google";
import "../styles/globals.css";
import { HeaderMenu } from "@/components/menu/headerMenu"
import Link from "next/link";
import { Adsense } from "@/components/ads/adsense";
import { TranslationCard } from "@/components/translationCard";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Video Download",
  description: "Download any video, image or music from any social media platform that exists today. Best Video Download is the best media download app for all devices ans its completely free.",
  applicationName: "Best Video Download",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://bestvideosdownload.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en',
    }
  },
  robots: {
    follow: true,
    noCache: false,
    googleBot: {
      follow: true,
      noImageIndex: false,
      'max-video-review': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/manifest.json',

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Adsense/>
      </Head>
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-main-color p-4 rounded-b-2xl w-full">
          {/* Ícone do Menu */}
          <HeaderMenu />
          {/* Título do Meio */}
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-medium text-white cursor-pointer">
              Best Video Download
            </h1>
          </Link>
          {/* Ícone da direita */}
          <TranslationCard />
        </header>

        {children}

        <footer className="bg-main-color p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left space-y-6 md:space-y-0 justify-items-center text-white">
            <div className="space-y-1">
              <h3 className="font-bold text-xl mb-2">Company</h3>
              <p className="hover:underline text-md"><Link href="/">About Us</Link></p>
              <p className="hover:underline text-md"><Link href="/">Contact Us</Link></p>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xl mb-2">Support</h3>
              <p className="hover:underline text-md"><Link href="/">Help Center</Link></p>
              <p className="hover:underline text-md"><Link href="/">Feedback</Link></p>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xl mb-2">Legal</h3>
              <p className="hover:underline text-md"><Link href="/">Privacy Policy</Link></p>
              <p className="hover:underline text-md"><Link href="/">Terms and Conditions</Link></p>
            </div>
          </div>
          <div className="h-0.5 w-full bg-white mt-6 mb-3"></div>
          <p className="text-white">© 2024 Best Video Download. All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}
