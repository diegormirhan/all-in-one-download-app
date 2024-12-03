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

  const currentUrl = langCode === 'en' ? '/rumble' : `/${langCode}/rumble`;

  return {
    title: "Rumble Video Downloader | Best Media Tool",
    description: "Download videos from Rumble quickly and for free. Save and enjoy viral content, vlogs, and political discussions from the platform known for free speech.",
    alternates: {
      canonical: currentUrl
    },
    openGraph: {
      title: "Rumble Videos | Best Media Tool",
      description: "Download videos from Rumble fast and for free.",
      url: "/rumble",
      siteName: "Best Media Tool",
      images: [
        {
          url: "/openGraph/opengraph-rumble.jpg",
          width: 1200,
          height: 630,
          alt: "Rumble - Best Media Tool Card"
        }
      ],
      type: "website"
    },
  }
};

export default function Rumble() {
  const socialMedia = "Rumble"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#85C742]">{socialMedia}</span></h1>

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#85C742]" buttonClasses="text-[#85C742] fill-[#85C742] border-[#85C742] hover:bg-[#85C742]" />

          <AdUnit
            publisherId="pub-8038191677774356"
            slotId="9735256965"
            layout="display"
          />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#85C742] shadow-[#85C742]" />

          <AdUnit
            publisherId="pub-8038191677774356"
            slotId="9735256965"
            layout="display"
          />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#85C742]" />
          <ImportantTips classes="border-[#85C742]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#85C742]" namespace={socialMedia} />
            <HowToUse classes="border-[#85C742]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
