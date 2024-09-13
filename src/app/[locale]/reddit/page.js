import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { ImportantTips } from "@/components/importantTips";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }) {
  const { locale } = params;
  const langCode = locale.split('-')[0];

  const currentUrl = langCode === 'en' ? '/reddit' : `/${langCode}/reddit`;

  return {
    title: "Reddit Video and Posts Downloader | Best Video Download",
  description: 'Download Videos and Posts from Reddit quickly and for free',
  alternates: {
    canonical: currentUrl
  },
  openGraph: {
    title: "Reddit Video and Posts Downloader | Best Video Download",
    description: "Download Videos and Posts from Reddit quickly and for free",
    url: "/reddit",
    siteName: "Best Video Download",
    images: [
      {
        url: "/openGraph/opengraph-reddit.jpg",
        width: 1200,
        height: 630,
        alt: "Reddit - Best Video Download Card"
      }
    ],
    type: "website"
  },
  }
};

export default function Reddit() {
  const socialMedia = "Reddit"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#FF4500]">{socialMedia}</span></h1>

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#FF4500]" buttonClasses="text-[#FF4500] fill-[#FF4500] border-[#FF4500] hover:bg-[#FF4500]" />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#FF4500] shadow-[#FF4500]" />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#FF4500]" />
          <ImportantTips classes="border-[#FF4500]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#FF4500]" namespace={socialMedia} />
            <HowToUse classes="border-[#FF4500]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
