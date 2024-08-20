import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { HorizontalAds, VerticalAds } from "@/components/ads/ads";
import { ImportantTips } from "@/components/importantTips";
import { DownloadButton } from "@/components/downloadButton";
import { TypeWriterWords } from "@/components/typeWriter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 pt-28">
      {/* Main Section */}
      <section className="w-full flex justify-between mb-4">
        {/* Anúncios na lateral esquerda*/}
        <div className="space-y-6">
          <VerticalAds />
        </div>

        {/* Conteúdo Principal */}
        <div className="p-4 w-full max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold mb-2 md:text-5xl">Download any media from</h1>
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl"><TypeWriterWords/></h1>
          {/* Campo de Input para link */}
          <div className="relative mb-8 w-11/12 md:w-2/3 mx-auto">
            <input type="text" id="input link" placeholder="Insert your link here" className="w-full p-3 pl-6 pr-12 border-0 rounded-lg drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-main-color ease-in-out transition-all duration-100"></input>
            <div className="absolute right-3 top-0 bottom-0 flex items-center">
              <Image src="/paste.svg" width={24} height={24} alt="Paste your link" className="cursor-pointer"></Image>
            </div>
          </div>

          {/* Botão de Download */}
          <DownloadButton />

          {/* Texto explicativo */}
          <div className="mb-10 text-sm w-full mx-auto text-left font-semibold md:text-center md:w-4/5 md:font-medium">
            <p className="mb-4">All In One Downloader gives you a tool to Download any <strong>video</strong>, <strong>gif</strong> or <strong>image</strong> from most of the social media platforms that exists today. </p>
            <p>Start by inserting the <strong>link of your video above</strong> or click on the right icon to paste directly in the box to start instantly downloading your media!</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu />

          {/* Anúncios no inferior */}
          <HorizontalAds />
        </div>

        {/* Anúncios na lateral direita*/}
        <div className="space-y-6">
          <VerticalAds />
        </div>

      </section>

      {/* Card Section */}
      <section>
        <CarouselCards />
        <ImportantTips />

        <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
          <FAQAccordion />
          <HowToUse socialMedia="Social Media" mediaType="video" className="" />
        </div>

      </section>
    </main>
  );
}
