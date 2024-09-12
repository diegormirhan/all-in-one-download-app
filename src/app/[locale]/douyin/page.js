import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { ImportantTips } from "@/components/importantTips";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "Douyin Video Downloader | Best Video Download",
  description: "Download videos from Douyin fast and for free. Save short viral clips and entertainment content from the popular Chinese version of TikTok.",
  alternates: {
    canonical: "/douyin"
  },
  openGraph: {
    title: "Douyin Videos | Best Video Download",
    description: "Download videos from Douyin fast and for free.",
    url: "/douyin",
    siteName: "Best Video Download",
    images: [
      {
        url: "/openGraph/opengraph-tiktok.jpg",
        width: 1200,
        height: 630,
        alt: "Douyin - Best Video Download Card"
      }
    ],
    type: "website"
  },
};


export default function Douyin() {
  const socialMedia = "Douyin"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#00F2FE]">{socialMedia}</span></h1>

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#00F2FE]" buttonClasses="text-[#00F2FE] fill-[#00F2FE] border-[#00F2FE] hover:bg-[#00F2FE]" />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#00F2FE] shadow-[#00F2FE]" />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#00F2FE]" />
          <ImportantTips classes="border-[#00F2FE]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#00F2FE]" namespace={socialMedia} />
            <HowToUse classes="border-[#00F2FE]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
