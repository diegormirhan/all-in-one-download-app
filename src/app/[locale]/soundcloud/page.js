import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { HorizontalAds, VerticalAds } from "@/components/ads/ads";
import { ImportantTips } from "@/components/importantTips";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "SoundCloud Music Downloader | Best Video Download",
  description: 'Download Music and Tracks from SoundCloud quickly and for free',
  alternates: {
    canonical: "/soundcloud"
  },
  openGraph: {
    title: "SoundCloud Music Downloader | Best Video Download",
    description: "Download Music and Tracks from SoundCloud quickly and for free",
    url: "/soundcloud",
    siteName: "Best Video Download",
    images: [
      {
        url: "/openGraph/opengraph-soundcloud.png",
        width: 1200,
        height: 630,
        alt: "SoundCloud - Best Video Download Card"
      }
    ],
    type: "website"
  },
};


export default function SoundCloud() {
  const socialMedia = "SoundCloud"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="min-h-screen flex flex-col items-center lg:px-4 py-4 pt-24">
        {/* Main Section */}
        <section className="lg:w-full flex justify-between mb-4">
          {/* Anúncios na lateral esquerda*/}
          <VerticalAds />

          {/* Conteúdo Principal */}
          <div className="p-4 w-full max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#FF4200]">{socialMedia}</span></h1>

            {/* Campo de Input para link e Botão de Download */}
            <LinkInputwithBtn inputClasses="focus:ring-[#FF4200]" buttonClasses="text-[#FF4200] fill-[#FF4200] border-[#FF4200] hover:bg-[#FF4200]" />

            {/* Anúncios no inferior */}
            <HorizontalAds />

            {/* Texto explicativo */}
            <div className="my-10 text-sm w-full mx-auto text-left font-semibold md:text-center md:w-4/5 md:font-medium space-y-4">
              <p>{tDynamic('description-item1')}</p>
              <p>{tDynamic('description-item2')}</p>
            </div>

            {/* Botão para explorar mais */}
            <SectionMenu classes="bg-[#FF4200] shadow-[#FF4200]" />
          </div>

          {/* Anúncios na lateral direita*/}
          <VerticalAds />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#FF4200]" />
          <ImportantTips classes="border-[#FF4200]" namespace={socialMedia} />

          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#FF4200]" namespace={socialMedia} />
            <HowToUse classes="border-[#FF4200]" namespace={socialMedia} />
          </div>

        </section>
      </main>
    </>
  );
}
