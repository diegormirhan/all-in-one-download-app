import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All In One Download",
  description: "THis is a All In One Download App that provides the ability to download any social media video, image or music instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <header className="flex items-center justify-between bg-main-color p-4 rounded-b-2xl">
            {/* Ícone do Menu */}
            <div className="">
              <img className="w-8" src="/menu.svg"></img>
            </div>

            {/* Título do Meio */}
            <h1 className="text-xl md:text-2xl font-medium text-white">All In One Download</h1>
            {/* Ícone da direita */}
            <div className="">
              <img className="w-8" src="/logo.svg"></img>
            </div>
          </header>
            {children}
          <footer className="flex items-center justify-between bg-main-color p-4">
            <p className="text-white">All In One Download @ All Rights Reserved - 2024</p>
          </footer>
      </body>
    </html>
  );
}
