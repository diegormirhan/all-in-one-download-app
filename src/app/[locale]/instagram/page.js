import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carousel/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { ImportantTips } from "@/components/importantTips";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }) {
  const { locale } = params;
  const langCode = locale.split('-')[0];

  const currentUrl = langCode === 'en' ? '/instagram' : `/${langCode}/instagram`;

  return {
    title: "Instagram Reels, Stories and Posts Downloader | Best Video Download",
    description: 'Download Reels, Stories, IGTV,Lives, Videos and Posts from Instagram fast and for free',
    alternates: {
      canonical: currentUrl
    },
    openGraph: {
      title: "Instagram Reels, Stories and Posts | Best Video Download",
      description: "Download Reels, Stories, IGTV, Lives and Posts from Instagram fast and for free.",
      url: "/instagram",
      siteName: "Best Video Download",
      images: [
        {
          url: "/openGraph/opengraph-instagram.jpg",
          width: 1200,
          height: 630,
          alt: "Instagram - Best Video Download Card"
        }
      ],
      type: "website"
    },
  }
};

export default function Instagram() {
  const socialMedia = "Instagram"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#EE2A7B]">{socialMedia}</span></h1>

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#EE2A7B]" buttonClasses="text-[#EE2A7B] fill-[#EE2A7B] border-[#EE2A7B] hover:bg-[#EE2A7B]" />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#EE2A7B] shadow-[#EE2A7B]" />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#EE2A7B]" />
          <ImportantTips classes="border-[#EE2A7B]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#EE2A7B]" namespace={socialMedia} />
            <HowToUse classes="border-[#EE2A7B]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
