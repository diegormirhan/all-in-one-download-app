"use client"

import { SectionMenu } from "@/components/menu/sectionMenu";
import { CarouselCards } from "@/components/carouselCards";
import { HorizontalAds, VerticalAds } from "@/components/ads/ads";
import { useEffect, useState } from "react";
import { useRouter } from "@/navigation";
import { useTranslations } from 'next-intl';
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function DownloadPage() {

    const [downloadButtons, setDownloadButtons] = useState([]);
    const [thumbnail, setThumbnail] = useState("/icons/arrow_right.svg");
    const [storedData, setStoredData] = useState(null);

    const tDynamic = useTranslations('Translations-Home');

    const router = useRouter();
    const searchParams = useSearchParams()

    useEffect(() => {
        const storedDataFromStorage = JSON.parse(localStorage.getItem('downloadedData'));

        if (!storedDataFromStorage) {
            router.push('/');
        }

        const currentTime = new Date().getTime();
        const queryId = searchParams.get('id');

        const uuid = storedDataFromStorage.uuid;
        const expirationTime = storedDataFromStorage.expirationTime;

        if (uuid !== queryId && expirationTime < currentTime) {
            localStorage.removeItem('downloadData');
            router.push('/');
        }

        setStoredData(storedDataFromStorage);
        setThumbnail(`${storedDataFromStorage.data.thumbnail}` || "/icons/arrow_right.svg");

        const buttons = storedDataFromStorage.data.medias.map((media, index) => (
            <a
                className={`flex items-center justify-center py-2 px-4 font-semibold lowercase w-full md:w-1/4 rounded-lg ease-in-out transition-all bg-transparent ring-2 ring-main-color text-main-color hover:bg-main-color hover:text-white active:scale-95`}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
            >
                Download<br></br>{media.quality}
            </a>
        ))

        setDownloadButtons(buttons);

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

                        <div className="w-full flex flex-col items-center">
                                    <div className="bg-white w-full lg:w-2/3 px-4 h-10 rounded-t-lg font-semibold overflow-hidden text-ellipsis text-center leading-[2.5rem]">
                                        {storedData?.data?.title || 'No title available'}
                                    </div>
                                    <div className="relative mx-auto w-full lg:w-2/3 h-60 z-10 bg-black overflow-hidden rounded-b-lg">
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src={thumbnail}
                                                fill={true}
                                                sizes="100vw"
                                                style={{ objectFit: "cover" }}
                                                quality={100}
                                                className="blur-sm"
                                                alt="Thumbnail blur"
                                                priority={true}
                                            />
                                        </div>
                                        <div className="h-full relative">
                                            <Image
                                                src={thumbnail}
                                                fill={true}
                                                sizes="100vw"
                                                style={{ objectFit: "contain" }}
                                                quality={100}
                                                alt="Thumbnail"
                                                priority={true}
                                            />
                                        </div>
                                    </div>
                        </div>

                        <div className="text-center mt-5 mb-10 font-semibold text-md underline">After choosing an option below, you will be redirected to another page to download the media</div>

                        <div className="flex flex-wrap justify-center mb-10 gap-5">
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
