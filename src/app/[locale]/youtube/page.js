import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { AdsComponent } from "@/components/ads/ads";
import { ImportantTips } from "@/components/importantTips";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "YouTube Video Downloader | Best Video Download",
  description: 'Download Videos from YouTube quickly and for free',
  alternates: {
    canonical: "/youtube"
  },
  openGraph: {
    title: "YouTube Video Downloader | Best Video Download",
    description: "Download Videos from YouTube quickly and for free",
    url: "/youtube",
    siteName: "Best Video Download",
    images: [
      {
        url: "/openGraph/opengraph-youtube.png",
        width: 1200,
        height: 630,
        alt: "YouTube - Best Video Download Card"
      }
    ],
    type: "website"
  },
};


export default function Youtube() {
  const socialMedia = "Youtube"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="min-h-screen flex flex-col items-center lg:px-4 py-4 pt-24">
        {/* Main Section */}
        <section className="lg:w-full flex justify-between mb-4">
          {/* Anúncios na lateral esquerda*/}
          <AdsComponent adSlot={5575897018}/>

          {/* Conteúdo Principal */}
          <div className="p-4 w-full max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#EE2E24]">{socialMedia}</span></h1>

            {/* Campo de Input para link e Botão de Download */}
            <LinkInputwithBtn inputClasses="focus:ring-[#EE2E24]" buttonClasses="text-[#EE2E24] fill-[#EE2E24] border-[#EE2E24] hover:bg-[#EE2E24]" />

            {/* Anúncios no inferior */}
            <AdsComponent adSlot={5378381076}/>

            {/* Texto explicativo */}
            <div className="my-10 text-sm w-full mx-auto text-left font-semibold md:text-center md:w-4/5 md:font-medium space-y-4">
              <p>{tDynamic('description-item1')}</p>
              <p>{tDynamic('description-item2')}</p>
            </div>

            {/* Botão para explorar mais */}
            <SectionMenu classes="bg-[#EE2E24] shadow-[#EE2E24]" />
          </div>

          {/* Anúncios na lateral direita*/}
          <AdsComponent adSlot={5575897018}/>
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#EE2E24]" />
          <ImportantTips classes="border-[#EE2E24]" namespace={socialMedia} />

          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#EE2E24]" namespace={socialMedia} />
            <HowToUse classes="border-[#EE2E24]" namespace={socialMedia} />
          </div>

        </section>
      </main>
    </>
  );
}
