import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { AdsComponent } from "@/components/google/adsense";
import { ImportantTips } from "@/components/importantTips";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "Twitter (X) Video and Posts Downloader | Best Video Download",
  description: 'Download Videos and Posts from Twitter (X) quickly and for free',
  alternates: {
    canonical: "/twitter"
  },
  openGraph: {
    title: "Twitter (X) Video and Posts Downloader | Best Video Download",
    description: "Download Videos and Posts from Twitter (X) quickly and for free",
    url: "/twitter",
    siteName: "Best Video Download",
    images: [
      {
        url: "/openGraph/opengraph-twitter.png",
        width: 1200,
        height: 630,
        alt: "Twitter - Best Video Download Card"
      }
    ],
    type: "website"
  },
};


export default function Twitter() {
  const socialMedia = "Twitter"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="min-h-screen flex flex-col items-center lg:px-4 py-4 pt-24">
        {/* Main Section */}
        <section className="lg:w-full flex justify-between mb-4">
          {/* Anúncios na lateral esquerda*/}
          <AdsComponent adSlot={5575897018} />

          {/* Conteúdo Principal */}
          <div className="p-4 w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#000000]">{socialMedia}</span></h1>

            {/* Campo de Input para link e Botão de Download */}
            <LinkInputwithBtn inputClasses="focus:ring-[#000000]" buttonClasses="text-[#000000] fill-[#000000] border-[#000000] hover:bg-[#000000]" />

            {/* Anúncios no inferior */}
            <AdsComponent adSlot={5378381076} />

            {/* Texto explicativo */}
            <div className="my-10 text-sm w-full mx-auto text-left font-semibold md:text-center md:w-4/5 md:font-medium space-y-4">
              <p>{tDynamic('description-item1')}</p>
              <p>{tDynamic('description-item2')}</p>
            </div>

            {/* Botão para explorar mais */}
            <SectionMenu classes="bg-[#000000] shadow-[#000000]" />
          </div>

          {/* Anúncios na lateral direita*/}
          <AdsComponent adSlot={5575897018} />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#000000]" />
          <ImportantTips classes="border-[#000000]" namespace={socialMedia} />

          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#000000]" namespace={socialMedia} />
            <HowToUse classes="border-[#000000]" namespace={socialMedia} />
          </div>

        </section>
      </main>
    </>
  );
}
