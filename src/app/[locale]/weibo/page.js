import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { ImportantTips } from "@/components/importantTips";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "Weibo Video and Post Downloader | Best Video Download",
  description: "Download videos and posts from Weibo fast and for free. Save the latest trends, news, and viral content from one of the most popular platforms in China.",
  alternates: {
    canonical: "/weibo"
  },
  openGraph: {
    title: "Weibo Videos and Posts | Best Video Download",
    description: "Download videos and posts from Weibo fast and for free.",
    url: "/weibo",
    siteName: "Best Video Download",
    images: [
      {
        url: "/openGraph/opengraph-weibo.jpg",
        width: 1200,
        height: 630,
        alt: "Weibo - Best Video Download Card"
      }
    ],
    type: "website"
  },
};


export default function Weibo() {
  const socialMedia = "Weibo"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#F23348]">{socialMedia}</span></h1>

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#F23348]" buttonClasses="text-[#F23348] fill-[#F23348] border-[#F23348] hover:bg-[#F23348]" />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#F23348] shadow-[#F23348]" />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#F23348]" />
          <ImportantTips classes="border-[#F23348]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#F23348]" namespace={socialMedia} />
            <HowToUse classes="border-[#F23348]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
