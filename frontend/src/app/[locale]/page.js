import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { HorizontalAds, VerticalAds } from "@/components/ads/ads";
import { ImportantTips } from "@/components/importantTips";
import { DownloadButton } from "@/components/downloadButton";
import { TypeWriterWords } from "@/components/typeWriter";
import { InputLink } from "@/components/inputLink";

import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
      <main className="min-h-screen flex flex-col items-center p-4 pt-24">
        {/* Main Section */}
        <section className="w-full flex justify-between mb-4">
          {/* Anúncios na lateral esquerda*/}
          <div className="space-y-6">
            <VerticalAds />
          </div>

          {/* Conteúdo Principal */}
          <div className="p-4 w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold mb-2 md:text-5xl">{t('title')}</h1>
            <h1 className="text-4xl font-extrabold mb-10 md:text-5xl"><TypeWriterWords/></h1>

            {/* Campo de Input para link */}
            <InputLink />

            {/* Botão de Download */}
            <DownloadButton />

            {/* Anúncios no inferior */}
            <HorizontalAds />

            {/* Texto explicativo */}
            <div className="my-10 text-sm w-full mx-auto text-left font-semibold md:text-center md:w-4/5 md:font-medium">
              <p className="mb-4">All In One Downloader gives you a tool to Download any <strong>video</strong>, <strong>gif</strong> or <strong>image</strong> from most of the social media platforms that exists today. </p>
              <p>Start by inserting the <strong>link of your video above</strong> or click on the right icon to paste directly in the box to start instantly downloading your media!</p>
            </div>

            {/* Botão para explorar mais */}
            <SectionMenu />
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
    </>
  );
}
