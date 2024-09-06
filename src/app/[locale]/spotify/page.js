import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { HorizontalAds, VerticalAds } from "@/components/ads/ads";
import { ImportantTips } from "@/components/importantTips";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "Spotify Music Downloader | Best Video Download",
  description: 'Download Music and Podcasts from Spotify quickly and for free',
  alternates: {
    canonical: "/spotify"
  },
  openGraph: {
    title: "Spotify Music Downloader | Best Video Download",
    description: "Download Music and Podcasts from Spotify quickly and for free",
    url: "/spotify",
    siteName: "Best Video Download",
    images: [
      {
        url: "/openGraph/opengraph-spotify.png",
        width: 1200,
        height: 630,
        alt: "Spotify - Best Video Download Card"
      }
    ],
    type: "website"
  },
};


export default function Spotify() {
  const socialMedia = "Spotify"
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
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#1DB954]">{socialMedia}</span></h1>

            {/* Campo de Input para link e Botão de Download */}
            <LinkInputwithBtn inputClasses="focus:ring-[#1DB954]" buttonClasses="text-[#1DB954] fill-[#1DB954] border-[#1DB954] hover:bg-[#1DB954]" />

            {/* Anúncios no inferior */}
            <HorizontalAds />

            {/* Texto explicativo */}
            <div className="my-10 text-sm w-full mx-auto text-left font-semibold md:text-center md:w-4/5 md:font-medium space-y-4">
              <p>{tDynamic('description-item1')}</p>
              <p>{tDynamic('description-item2')}</p>
            </div>

            {/* Botão para explorar mais */}
            <SectionMenu classes="bg-[#1DB954] shadow-[#1DB954]" />
          </div>

          {/* Anúncios na lateral direita*/}
          <VerticalAds />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#1DB954]" />
          <ImportantTips classes="border-[#1DB954]" namespace={socialMedia} />

          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#1DB954]" namespace={socialMedia} />
            <HowToUse classes="border-[#1DB954]" namespace={socialMedia} />
          </div>

        </section>
      </main>
    </>
  );
}
