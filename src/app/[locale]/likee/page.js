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

  const currentUrl = langCode === 'en' ? '/likee' : `/${langCode}/likee`;

  return {
    title: "Likee Video Downloader | Best Media Tool",
  description: "Download videos from Likee fast and for free. Save trending short videos, creative clips, and user-generated content directly to your device with ease.",
  alternates: {
    canonical: currentUrl
  },
  openGraph: {
    title: "Likee Videos | Best Media Tool",
    description: "Download videos from Likee fast and for free.",
    url: "/likee",
    siteName: "Best Media Tool",
    images: [
      {
        url: "/openGraph/opengraph-likee.jpg",
        width: 1200,
        height: 630,
        alt: "Likee - Best Media Tool Card"
      }
    ],
    type: "website"
  },
  }
};

export default function Likee() {
  const socialMedia = "Likee"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#FF5F29]">{socialMedia}</span></h1>

          <AdUnit
            publisherId="pub-8038191677774356"
            slotId="9735256965"
            layout="display"
          />

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#FF5F29]" buttonClasses="text-[#FF5F29] fill-[#FF5F29] border-[#FF5F29] hover:bg-[#FF5F29]" />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#FF5F29] shadow-[#FF5F29]" />

          <AdUnit
            publisherId="pub-8038191677774356"
            slotId="9735256965"
            layout="display"
          />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#FF5F29]" />
          <ImportantTips classes="border-[#FF5F29]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#FF5F29]" namespace={socialMedia} />
            <HowToUse classes="border-[#FF5F29]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
