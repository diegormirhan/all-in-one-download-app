"use client"

import { SectionMenu } from "@/components/menu/sectionMenu";
import { CarouselCards } from "@/components/carouselCards";
import { HorizontalAds, VerticalAds } from "@/components/ads/ads";
import { useEffect, useState } from "react";
import { useRouter } from "@/navigation";
import { useTranslations } from 'next-intl';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import handleDownload from "@/api/stream";

export default function DownloadPage() {
    const [downloadButtons, setDownloadButtons] = useState([]);
    const [thumbnail, setThumbnail] = useState("/icons/arrow_right.svg"); // Default thumbnail
    const [storedData, setStoredData] = useState(null);
    const tDynamic = useTranslations('Translations-Home');
    const router = useRouter();

    const searchParams = useSearchParams()


    useEffect(() => {
        const id = searchParams.get('id')
        const storedDataFromStorage = JSON.parse(localStorage.getItem('downloadedData'));
        if (storedDataFromStorage) {
            const currentTime = new Date().getTime();

            if (storedDataFromStorage.uuid === id && storedDataFromStorage.expirationTime > currentTime) {
                setStoredData(storedDataFromStorage);
                setThumbnail(`${storedDataFromStorage.data.thumbnail}` || "/icons/arrow_right.svg");

                const buttons = storedDataFromStorage.data.medias.map((media, index) => (

                    <button
                        className={`p-1 bg-transparent font-semibold w-1/1 md:w-1/2 lg:w-1/3 text-main-color rounded-md border-2 border-main-color ease-in-out transition-all hover:text-white hover:bg-main-color active:scale-95`}
                        onClick={() => handleDownload(media.url, `${media.quality}-${storedDataFromStorage.data.title}-${storedDataFromStorage.data.source}`)}
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

                        <div className="w-full flex flex-col items-center ">
                            <div className="bg-white w-full lg:w-2/3 h-10 rounded-t-lg font-semibold flex justify-center items-center">
                                {storedData?.data?.title || 'No title available'}
                            </div>
                            <div className="relative mx-auto w-full lg:w-2/3 h-60 z-10 bg-black overflow-hidden rounded-b-lg">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={thumbnail}
                                        fill={true}
                                        style={{ objectFit: "cover" }}
                                        quality={100}
                                        className="blur-sm"
                                    />
                                </div>
                                <div className="h-full">
                                    <Image
                                        src={thumbnail}
                                        fill={true}
                                        style={{ objectFit: "contain" }}
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center my-10 gap-2 md:gap-4">
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
