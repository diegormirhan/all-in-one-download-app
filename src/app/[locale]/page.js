import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carousel/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { ImportantTips } from "@/components/importantTips";
import { TypeWriterWords } from "@/components/typeWriter";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export default function Home() {
  const socialMedia = "Home"
  const tDynamic = useTranslations(`Translations-${socialMedia}`)

  return (
    <>
      <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

        <section></section>

        {/* Main Section */}
        <section className="max-w-3xl text-center">
          {/* Conteúdo Principal */}
          <h1 className="text-4xl font-extrabold mb-2 md:text-5xl">{tDynamic('introduction-title')}</h1>
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl"><TypeWriterWords /></h1>

          {/* Campo de Input para link e Botão de Download */}
          <LinkInputwithBtn inputClasses="focus:ring-main-color" buttonClasses="text-main-color fill-main-color border-main-color hover:bg-secondary-bg-color" />
        </section>
        
        <section className="max-w-3xl text-center">
          {/* Texto explicativo */}
          <div className="text-sm mb-10 mx-auto font-semibold text-center md:w-4/5 space-y-4">
            <p>{tDynamic('description-item1')}</p>
            <p>{tDynamic('description-item2')}</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu classes="bg-main-color shadow-main-color" />
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-main-color" />
          <ImportantTips classes="border-main-color" namespace={socialMedia} />
        </section>

        <section>
          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-main-color" namespace={socialMedia} />
            <HowToUse classes="border-main-color" namespace={socialMedia} />
          </div>
        </section>
      </main>
    </>
  );
}
