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

  const currentUrl = langCode === 'en' ? '/ifunny' : `/${langCode}/ifunny`;

  return {
    title: "iFunny Meme and Video Downloader | Best Video Download",
    description: "Download memes, GIFs, and videos from iFunny quickly and for free. Save hilarious and trending content from one of the top humor-sharing platforms.",
    alternates: {
      canonical: currentUrl
    },
    openGraph: {
      title: "iFunny Memes and Videos | Best Video Download",
      description: "Download memes, GIFs, and videos from iFunny fast and for free.",
      url: "/ifunny",
      siteName: "Best Video Download",
      images: [
        {
          url: "/openGraph/opengraph-ifunny.jpg",
          width: 1200,
          height: 630,
          alt: "iFunny - Best Video Download Card"
        }
      ],
      type: "website"
    },
  }
};

export default function Ifunny() {
  const socialMedia = "Ifunny"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">{tDynamic('introduction-title')} <span className="text-[#FFD22E]">{socialMedia}</span></h1>

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-[#FFD22E]" buttonClasses="text-[#FFD22E] fill-[#FFD22E] border-[#FFD22E] hover:bg-[#FFD22E]" />
        </section>

        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-[#FFD22E] shadow-[#FFD22E]" />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-[#FFD22E]" />
          <ImportantTips classes="border-[#FFD22E]" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-[#FFD22E]" namespace={socialMedia} />
            <HowToUse classes="border-[#FFD22E]" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
