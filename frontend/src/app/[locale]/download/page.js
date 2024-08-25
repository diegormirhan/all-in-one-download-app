import { SectionMenu } from "@/components/menu/sectionMenu";
import { CarouselCards } from "@/components/carouselCards";
import { HorizontalAds, VerticalAds } from "@/components/ads/ads";
import { DownloadButton } from "@/components/downloadButton";

import { useTranslations } from 'next-intl';

export default function Home() {
    const tDynamic = useTranslations('Translations-Home')
    return (
        <>
            <main className="min-h-screen flex flex-col items-center p-4 pt-24">
                {/* Main Section */}
                <section className="lg:w-full flex justify-between mb-4">
                    {/* Anúncios na lateral esquerda*/}
                    <VerticalAds />

                    {/* Conteúdo Principal */}
                    <div className="p-4 w-full max-w-3xl text-center">
                        <h1 className="text-4xl font-extrabold mb-4 md:text-5xl">Download your media below</h1>
                        <h2 className="text-xl font-bold mb-10">Choose your prefered format to download the media</h2>

                        <HorizontalAds />

                        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                            <DownloadButton classes="bg-main-color shadow-main-color" />
                            <DownloadButton classes="bg-main-color shadow-main-color" />
                            <DownloadButton classes="bg-main-color shadow-main-color" />
                            <DownloadButton classes="bg-main-color shadow-main-color" />
                            <DownloadButton classes="bg-main-color shadow-main-color" />
                            <DownloadButton classes="bg-main-color shadow-main-color" />
                        </div>
                        <HorizontalAds />

                        {/* Botão para explorar mais */}
                        <SectionMenu classes="bg-main-color shadow-main-color mt-10" />
                    </div>

                    {/* Anúncios na lateral direita*/}
                    <VerticalAds />
                </section>

                {/* Card Section */}
                <section>
                    <CarouselCards classes="border-main-color" />
                </section>
            </main>
        </>
    );
}
