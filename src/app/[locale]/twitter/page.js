import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { ImportantTips } from "@/components/importantTips";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "Twitter (X) Video and Posts Downloader | Best Video Download",
  description: 'Download Videos and Posts from Twitter (X) quickly and for free',
  alternates: {
    canonical: "/twitter",
  },
  openGraph: {
    title: "Twitter (X) Video and Posts Downloader | Best Video Download",
    description: "Download Videos and Posts from Twitter (X) quickly and for free",
    url: "/twitter",
    siteName: "Best Video Download",
    images: [
      {
        url: "/openGraph/opengraph-twitter.jpg",
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
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#000000]">X (Twitter)</span></h1>

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#000000]" buttonClasses="text-[#000000] fill-[#000000] border-[#000000] hover:bg-[#000000]" />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#000000] shadow-[#000000]" />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#000000]" />
          <ImportantTips classes="border-[#000000]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#000000]" namespace={socialMedia} />
            <HowToUse classes="border-[#000000]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
