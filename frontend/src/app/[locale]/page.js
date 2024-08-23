import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { HorizontalAds, VerticalAds } from "@/components/ads/ads";
import { ImportantTips } from "@/components/importantTips";
import { TypeWriterWords } from "@/components/typeWriter";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Translations');
  return (
    <>
      <main className="min-h-screen flex flex-col items-center p-4 pt-24">
        {/* Main Section */}
        <section className="w-full flex justify-between mb-4">
          {/* Anúncios na lateral esquerda*/}
          <VerticalAds />

          {/* Conteúdo Principal */}
          <div className="p-4 w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold mb-2 md:text-5xl">{t('h1-title-video')}</h1>
            <h1 className="text-4xl font-extrabold mb-10 md:text-5xl"><TypeWriterWords/></h1>

              {/* Campo de Input para link e Botão de Download */}
              <LinkInputwithBtn inputClasses="ring-main-color" buttonClasses="text-main-color fill-main-color border-main-color hover:bg-secondary-bg-color" />

            {/* Anúncios no inferior */}
            <HorizontalAds />

            {/* Texto explicativo */}
            <div className="my-10 text-sm w-full mx-auto text-left font-semibold md:text-center md:w-4/5 md:font-medium space-y-4">
              <p>Best Video Downloader gives you the tool to download any <strong>video</strong>, <strong>image</strong> or <strong>music</strong> from most of the social media platforms that exists today. </p>
              <p>Start by inserting the <strong>link of your media above</strong> or click on the right icon to paste directly in the box to start downloading your media entirely for free!</p>
            </div>

            {/* Botão para explorar mais */}
            <SectionMenu classes="bg-main-color shadow-main-color" />
          </div>

          {/* Anúncios na lateral direita*/}
          <VerticalAds />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-main-color" />
          <ImportantTips mediaType="Media" socialMedia="social media" classes="border-main-color" />

          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion socialMedia="Social Media" mediaType="media" mediaTypes="medias" classes="border-main-color" />
            <HowToUse socialMedia="Social Media" mediaType="media" mediaTypes="medias" classes="border-main-color" />
          </div>

        </section>
      </main>
    </>
  );
}
