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

  const currentUrl = langCode === 'en' ? '/soundcloud' : `/${langCode}/soundcloud`;

  return {
    title: "SoundCloud Music Downloader | Best Video Download",
  description: 'Download Music and Tracks from SoundCloud quickly and for free',
  alternates: {
    canonical: currentUrl
  },
  openGraph: {
    title: "SoundCloud Music Downloader | Best Video Download",
    description: "Download Music and Tracks from SoundCloud quickly and for free",
    url: "/soundcloud",
    siteName: "Best Video Download",
    images: [
      {
        url: "/openGraph/opengraph-soundcloud.jpg",
        width: 1200,
        height: 630,
        alt: "SoundCloud - Best Video Download Card"
      }
    ],
    type: "website"
  },
  }
};

export default function Soundcloud() {
  const socialMedia = "Soundcloud"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#FF4200]">{socialMedia}</span></h1>

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#FF4200]" buttonClasses="text-[#FF4200] fill-[#FF4200] border-[#FF4200] hover:bg-[#FF4200]" />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#FF4200] shadow-[#FF4200]" />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#FF4200]" />
          <ImportantTips classes="border-[#FF4200]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#FF4200]" namespace={socialMedia} />
            <HowToUse classes="border-[#FF4200]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
