import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carousel/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { ImportantTips } from "@/components/importantTips";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';
import { AdUnit } from "next-google-adsense";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const langCode = locale.split('-')[0];

  const currentUrl = langCode === 'en' ? '/pinterest' : `/${langCode}/pinterest`;

  return {
    title: "Pinterest Pin Downloader | Best Media Tool",
    description: 'Download Pins, Videos, and Images from Pinterest quickly and for free',
    alternates: {
      canonical: currentUrl
    },
    openGraph: {
      title: "Pinterest Pin Downloader | Best Media Tool",
      description: "Download Pins, Videos, and Images from Pinterest quickly and for free",
      url: "/pinterest",
      siteName: "Best Media Tool",
      images: [
        {
          url: "/openGraph/opengraph-pinterest.jpg",
          width: 1200,
          height: 630,
          alt: "Pinterest - Best Media Tool Card"
        }
      ],
      type: "website"
    },
  }
};

export default function Pinterest() {
  const socialMedia = "Pinterest"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#CC2127]">{socialMedia}</span></h1>

          <AdUnit
            publisherId="pub-2168652361480633"
            slotId="7188274542"
            layout="display"
          />

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#CC2127]" buttonClasses="text-[#CC2127] fill-[#CC2127] border-[#CC2127] hover:bg-[#CC2127]" />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#CC2127] shadow-[#CC2127]" />

          <AdUnit
            publisherId="pub-2168652361480633"
            slotId="7188274542"
            layout="display"
          />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#CC2127]" />
          <ImportantTips classes="border-[#CC2127]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#CC2127]" namespace={socialMedia} />
            <HowToUse classes="border-[#CC2127]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
