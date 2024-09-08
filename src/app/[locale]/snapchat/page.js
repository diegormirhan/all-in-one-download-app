import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { ImportantTips } from "@/components/importantTips";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "Snapchat Stories and Snaps Downloader | Best Video Download",
  description: 'Download Stories and Snaps from Snapchat quickly and for free',
  alternates: {
    canonical: "/snapchat"
  },
  openGraph: {
    title: "Snapchat Stories and Snaps Downloader | Best Video Download",
    description: "Download Stories and Snaps from Snapchat quickly and for free",
    url: "/snapchat",
    siteName: "Best Video Download",
    images: [
      {
        url: "/openGraph/opengraph-snapchat.jpg",
        width: 1200,
        height: 630,
        alt: "Snapchat - Best Video Download Card"
      }
    ],
    type: "website"
  },
};


export default function Snapchat() {
  const socialMedia = "Snapchat"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#FFD000]">{socialMedia}</span></h1>

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#FFD000]" buttonClasses="text-[#FFD000] fill-[#FFD000] border-[#FFD000] hover:bg-[#FFD000]" />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#FFD000] shadow-[#FFD000]" />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#FFD000]" />
          <ImportantTips classes="border-[#FFD000]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#FFD000]" namespace={socialMedia} />
            <HowToUse classes="border-[#FFD000]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
