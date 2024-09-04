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
    const [mediaPlayer, setMediaPlayer] = useState("");
    const [thumbnail, setThumbnail] = useState("/icons/arrow_right.svg"); // Default thumbnail
    const [storedData, setStoredData] = useState(null);

    const tDynamic = useTranslations('Translations-Home');

    const router = useRouter();
    const searchParams = useSearchParams()

    const handleMedia = async (mediaLink, mediaType) => {
        const uniqueKey = `${mediaLink}-${new Date().getTime()}`;

        if (mediaType.includes('mp4')) {
            setMediaPlayer(
                <video key={uniqueKey} controls className="mx-auto w-full md:h-96 mb-10 rounded-md">
                    <source src={mediaLink} type="video/mp4" />
                </video>
            );
        } else if (mediaType.includes('mp3')) {
            setMediaPlayer(
                <audio key={uniqueKey} controls className="w-full h-full">
                    <source src={mediaLink} type="audio/mpeg" />
                </audio>
            )
        }
    }

    useEffect(() => {
        const storedDataFromStorage = JSON.parse(localStorage.getItem('downloadedData'));

        if (!storedDataFromStorage) {
            router.push('/');
            return null;
        }

        const currentTime = new Date().getTime();
        const queryId = searchParams.get('id');

        const uuid = storedDataFromStorage.uuid;
        const expirationTime = storedDataFromStorage.expirationTime;

        if (uuid !== queryId && expirationTime < currentTime) {
            localStorage.removeItem('downloadData');
            router.push('/');
            return null;
        }

        setStoredData(storedDataFromStorage);
        setThumbnail(`${storedDataFromStorage.data.thumbnail}` || "/icons/arrow_right.svg");

        const buttons = storedDataFromStorage.data.medias.map((media, index) => (
            <button
                className={`flex items-center justify-center py-2 px-4 font-semibold lowercase w-3/4 md:w-1/4 rounded-lg border-2 ease-in-out transition-all text-white bg-main-color active:scale-95`}
                onClick={() => handleMedia(media.url, media.extension)}
                key={index}
            >
                Download<br></br>{media.quality}
            </button>
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
                            <div className="bg-white w-full lg:w-2/3 px-4 h-10 rounded-t-lg font-semibold max-w-xs overflow-hidden whitespace-nowrap text-ellipsis text-center leading-[2.5rem]">
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
                                        alt="Thumbnail blur"
                                    />
                                </div>
                                <div className="h-full">
                                    <Image
                                        src={thumbnail}
                                        fill={true}
                                        style={{ objectFit: "contain" }}
                                        quality={100}
                                        alt="Thumbnail"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center my-10 gap-2 md:gap-4">
                            {downloadButtons}
                        </div>

                        {mediaPlayer && <div className="my-4">{mediaPlayer}</div>}

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
