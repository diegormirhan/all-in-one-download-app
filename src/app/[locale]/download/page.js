"use client"

import { SectionMenu } from "@/components/menu/sectionMenu";
import { CarouselCards } from "@/components/carousel/carouselCards";
import { DownloadCards } from "@/components/downloadCards";
import { useEffect, useState } from "react";
import { useRouter } from "@/navigation";
import { useTranslations } from 'next-intl';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import defaultThumbnail from "../../../../public/icons/logo/png/gradient-logo.png"
import { AdUnit } from "next-google-adsense";

export default function DownloadPage() {

    const [downloadButtons, setDownloadButtons] = useState([]);
    const [thumbnail, setThumbnail] = useState(defaultThumbnail);
    const [storedData, setStoredData] = useState(null);

    const tDefault = useTranslations('Translations-Default');

    const router = useRouter();
    const searchParams = useSearchParams()

    useEffect(() => {
        const storedDataFromStorage = JSON.parse(localStorage.getItem('downloadedData')) || false;
        const queryId = searchParams.get('id') || false;

        if (!storedDataFromStorage || !queryId) {
            router.push('/');
            return;
        }

        const currentTime = new Date().getTime();
        const uuid = storedDataFromStorage.uuid;
        const expirationTime = storedDataFromStorage.expirationTime;

        if (uuid !== queryId || expirationTime < currentTime) {
            localStorage.removeItem('downloadData');
            router.push('/');
            return;
        }

        setStoredData(storedDataFromStorage);
        setThumbnail(storedDataFromStorage.data.thumbnail || defaultThumbnail)

        const buttons = storedDataFromStorage.data.medias.map((media, index) => (
            <a
                className={`flex items-center justify-center py-2 px-4 font-semibold lowercase w-full md:w-1/4 rounded-lg ease-in-out transition-all bg-transparent ring-2 ring-main-color text-main-color hover:bg-main-color hover:text-white active:scale-95`}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
            >
                {tDefault('download-button-option')}<br></br>{media.quality}
            </a>
        ))

        setDownloadButtons(buttons)
    }, [router, searchParams, tDefault])

    return (
        <>
            <main className="w-full flex flex-col items-center py-20 space-y-8 px-4">

                <section></section>

                {/* Main Section */}
                <section className="max-w-3xl text-center">

                    {/* Conteúdo Principal */}
                    <div className="p-4 w-full max-w-3xl text-center">
                        <h1 className="text-4xl font-extrabold mb-4 md:text-5xl">{tDefault('download-title')}</h1>
                        <h2 className="text-lg font-semibold mb-10">{tDefault('download-subtitle')}</h2>

                        <div className="w-full flex flex-col items-center">
                            <div className="bg-white w-full lg:w-2/3 px-4 h-10 rounded-t-lg font-semibold overflow-hidden text-ellipsis text-center leading-[2.5rem]">
                                {storedData?.data?.title || tDefault('download-thumbnail-title')}
                            </div>
                            <div className="relative mx-auto w-full lg:w-2/3 h-60 z-10 bg-black overflow-hidden rounded-b-lg mb-10">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={thumbnail}
                                        fill={true}
                                        sizes="(max-width: 768px) 100vw, 50vw"
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
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        style={{ objectFit: "contain" }}
                                        quality={100}
                                        alt="Thumbnail"
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>

                        <AdUnit
                            publisherId="pub-2168652361480633"
                            slotId="9735256965"
                            layout="display"
                        />

                        <div className="text-center mt-5 mb-10 font-semibold text-md underline">{tDefault('download-description')}</div>



                        <div className="flex flex-wrap justify-center mb-10 gap-5">
                            {downloadButtons}
                        </div>

                        {/* Botão para explorar mais */}
                        <SectionMenu classes="bg-main-color shadow-main-color mt-10" />

                        <AdUnit
                            publisherId="pub-2168652361480633"
                            slotId="9735256965"
                            layout="display"
                        />
                    </div>
                </section>

                {/* Card Section */}
                <section>
                    <CarouselCards classes="border-main-color" />
                    <DownloadCards />
                </section>
            </main>
        </>
    );
}
