import { SectionMenu } from "@/components/menu/sectionMenu";
import { FAQAccordion } from "@/components/FaqAccordion";
import { CarouselCards } from "@/components/carouselCards";
import { HowToUse } from "@/components/howToUse";
import { HorizontalAds, VerticalAds } from "@/components/ads/ads";
import { ImportantTips } from "@/components/importantTips";
import { TypeWriterWords } from "@/components/typeWriter";
import { LinkInputwithBtn } from "@/components/linkInputwithBtn";
import { useTranslations } from 'next-intl';

export default function Home() {
  const tDynamic = useTranslations('Translations-Home')
  return (
    <>
      <main className="min-h-screen flex flex-col items-center p-4 pt-24">
        {/* Main Section */}
        <section className=" m-auto mb-4">
          {/* Anúncios na lateral esquerda*/}
          

          {/* Conteúdo Principal */}
          <div className="p-4 w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold mb-2 md:text-5xl">{tDynamic('introduction-title')}</h1>
            <h1 className="text-4xl font-extrabold mb-10 md:text-5xl"><TypeWriterWords/></h1>

              {/* Campo de Input para link e Botão de Download */}
              <LinkInputwithBtn inputClasses="focus:ring-main-color" buttonClasses="text-main-color fill-main-color border-main-color hover:bg-secondary-bg-color" />

            {/* Anúncios no inferior */}
            

            {/* Texto explicativo */}
            <div className="my-10 text-sm w-full mx-auto text-left font-semibold md:text-center md:w-4/5 md:font-medium space-y-4">
              <p>{tDynamic('description-item1')}</p>
              <p>{tDynamic('description-item2')}</p>
            </div>

            {/* Botão para explorar mais */}
            <SectionMenu classes="bg-main-color shadow-main-color" />
          </div>

          {/* Anúncios na lateral direita*/}
          
        </section>

        {/* Card Section */}
        <section>
          <CarouselCards classes="border-main-color" />
          <ImportantTips classes="border-main-color" namespace="Home"/>

          <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 items-start w-11/12 md:w-4/5 m-auto mb-14">
            <FAQAccordion classes="border-main-color" namespace="Home"/>
            <HowToUse classes="border-main-color" namespace="Home"/>
          </div>

        </section>
      </main>
    </>
  );
}
