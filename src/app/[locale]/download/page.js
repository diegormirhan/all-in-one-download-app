"use client"

import { SectionMenu } from "@/components/menu/sectionMenu";
import { CarouselCards } from "@/components/carouselCards";
import { HorizontalAds, VerticalAds } from "@/components/ads/ads";

import { useEffect, useState } from "react";
import { useRouter } from "@/navigation";
import { useTranslations } from 'next-intl';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { saveAs } from "file-saver";

export default function DownloadPage() {
    const [downloadButtons, setDownloadButtons] = useState([]);
    const [thumbnail, setThumbnail] = useState("/icons/arrow_right.svg"); // Default thumbnail
    const tDynamic = useTranslations('Translations-Home');
    const router = useRouter();

    const searchParams = useSearchParams()

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('downloadedData'));
        const id = searchParams.get('id')

        if (storedData) {
            const currentTime = new Date().getTime();

            if (storedData.uuid === id && storedData.expirationTime > currentTime) {
                setThumbnail(`${storedData.data.thumbnail}` || "/icons/arrow_right.svg");

                const buttons = storedData.data.medias.map((media, index) => (
                    
                    <button
                        className={`flex items-center justify-center bg-main-color shadow-main-color w-1/3 text-white rounded-lg py-3 px-6 shadow-md group ease-in-out transition-all hover:scale-105`}
                        onClick={() => saveAs(media.url)}
                        key={index}
                    >
                        Download {media.quality}
                    </button>
                ))
                setDownloadButtons(buttons);
            } else {
                localStorage.removeItem('downloadData');
                router.push('/');
            }
        } else {
            router.push('/');
        }
    }, [router, searchParams])

    return (
        <>
            <main className="min-h-screen flex flex-col items-center lg:px-4 py-4 pt-24">
                {/* Main Section */}
                <section className="lg:w-full flex justify-between mb-4">
                    {/* Anúncios na lateral esquerda*/}
                    <VerticalAds />

                    {/* Conteúdo Principal */}
                    <div className="p-4 w-full max-w-3xl text-center">
                        <h1 className="text-4xl font-extrabold mb-4 md:text-5xl">Download your media below</h1>
                        <h2 className="text-lg font-semibold mb-10">Choose your prefered format to download</h2>

                        <div className="relative m-auto w-full h-2/6 md:w-2/3 md:h-2/3 rounded-xl overflow-hidden flex items-center justify-center shadow-xl" style={{ height: 'calc(100vh * 0.3)' }}>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src={thumbnail}
                                    fill={true}
                                    className="blur-sm"
                                    style={{ objectFit: "cover" }}
                                    alt="Thumbnail Image"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (min-width: 769px) 33vw"
                                    quality={90}
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center my-10 gap-4">
                            {downloadButtons}
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
