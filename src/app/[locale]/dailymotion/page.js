import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { ImportantTips } from "@/components/importantTips";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "Dailymotion Video Downloader | Best Video Download",
  description: "Download videos from Dailymotion quickly and for free. Save high-quality videos from a wide range of genres, including news, entertainment, and vlogs.",
  alternates: {
    canonical: "/dailymotion"
  },
  openGraph: {
    title: "Dailymotion Videos | Best Video Download",
    description: "Download videos from Dailymotion fast and for free.",
    url: "/dailymotion",
    siteName: "Best Video Download",
    images: [
      {
        url: "/openGraph/opengraph-dailymotion.jpg",
        width: 1200,
        height: 630,
        alt: "Dailymotion - Best Video Download Card"
      }
    ],
    type: "website"
  },
};

export default function Dailymotion() {
  const socialMedia = "Dailymotion"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#0064DD]">{socialMedia}</span></h1>

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#0064DD]" buttonClasses="text-[#0064DD] fill-[#0064DD] border-[#0064DD] hover:bg-[#0064DD]" />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#0064DD] shadow-[#0064DD]" />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#0064DD]" />
          <ImportantTips classes="border-[#0064DD]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#0064DD]" namespace={socialMedia} />
            <HowToUse classes="border-[#0064DD]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
