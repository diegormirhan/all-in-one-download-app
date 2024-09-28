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

  const currentUrl = langCode === 'en' ? '/9gag' : `/${langCode}/9gag`;

  return {
    title: "9GAG Meme, GIF and Video Downloader | Best Video Download",
    description: 'Download memes, GIFs, and videos from 9GAG quickly and for free. Save the funniest content and enjoy endless humor, laughter, and entertainment.',
    alternates: {
      canonical: currentUrl
    },
    openGraph: {
      title: "9GAG Memes, GIFs and Videos | Best Video Download",
      description: 'Download memes, GIFs, and videos from 9GAG quickly and for free.',
      url: "/9gag",
      siteName: "Best Video Download",
      images: [
        {
          url: "/openGraph/opengraph-9gag.jpg",
          width: 1200,
          height: 630,
          alt: "9GAG - Best Video Download Card"
        }
      ],
      type: "website"
    },
  }
};


export default function Gag() {
  const socialMedia = '9Gag'
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#1A1818]">{socialMedia}</span></h1>

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#1A1818]" buttonClasses="text-[#1A1818] fill-[#1A1818] border-[#1A1818] hover:bg-[#1A1818]" />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#1A1818] shadow-[#1A1818]" />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#1A1818]" />
          <ImportantTips classes="border-[#1A1818]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#1A1818]" namespace={socialMedia} />
            <HowToUse classes="border-[#1A1818]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
