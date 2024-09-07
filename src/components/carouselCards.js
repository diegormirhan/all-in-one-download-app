"use client"

import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import { useTranslations } from 'next-intl';
import Image from "next/image"
import { Link } from "@/navigation"

export function CarouselCards({classes}) {
    const tDefault = useTranslations('Translations-Default');

    return (
        <>
            <div className="px-4 w-screen sm:px-0 sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto mb-10">
                <div className="w-full text-center lg:text-left">
                    <div className={`inline-block font-bold text-2xl lg:text-3xl mb-4 ml-1 border-b-4 ${classes}`}>
                    {tDefault('carousel-title')}
                    </div>
                </div>
                <Carousel opts={{ align: "center", loop: true, }} plugins={[Autoplay({ delay: 3000, })]}>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/instagram">
                                <Card className="border-none active:scale-90 transition-transform rounded-2xl bg-gradient-instagram cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Instagram</h2>
                                                <p className="text-sm lg:text-md">{tDefault('carousel-card-instagram')}</p>
                                            </div>
                                            <Image src="/icons/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-2 xl:mb-10 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/instagram.webp" width={112} height="0" alt="instagram video feed image" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/facebook">
                                <Card className="border-none active:scale-90 transition-transform rounded-2xl bg-gradient-facebook cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Facebook</h2>
                                                <p className="text-sm lg:text-md">{tDefault('carousel-card-facebook')}</p>
                                            </div>
                                            <Image src="/icons/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-2 xl:mb-10 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/facebook.webp" width={112} height="0" alt="facebook video feed image" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/tiktok">
                                <Card className=" border-none active:scale-90 transition-transform rounded-2xl bg-gradient-tiktok cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Tiktok</h2>
                                                <p className="text-sm lg:text-md">{tDefault('carousel-card-tiktok')}</p>
                                            </div>
                                            <Image src="/icons/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-2 xl:mb-10 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/tiktok.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/youtube">
                                <Card className=" border-none active:scale-90 transition-transform rounded-2xl bg-gradient-youtube cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Youtube</h2>
                                                <p className="text-sm lg:text-md">{tDefault('carousel-card-youtube')}</p>
                                            </div>
                                            <Image src="/icons/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-2 xl:mb-10 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/youtube.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/pinterest">
                                <Card className="border-none active:scale-90 transition-transform rounded-2xl bg-gradient-pinterest cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Pinterest</h2>
                                                <p className="text-sm lg:text-md">{tDefault('carousel-card-pinterest')}</p>
                                            </div>
                                            <Image src="/icons/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-2 xl:mb-10 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/pinterest.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/twitter">
                                <Card className=" border-none active:scale-90 transition-transform rounded-2xl bg-gradient-twitter cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">X (Twitter)</h2>
                                                <p className="text-sm lg:text-md">{tDefault('carousel-card-twitter')}</p>
                                            </div>
                                            <Image src="/icons/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-2 xl:mb-10 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/twitter.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/spotify">
                                <Card className="border-none active:scale-90 transition-transform rounded-2xl bg-gradient-spotify cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Spotify</h2>
                                                <p className="text-sm lg:text-md">{tDefault('carousel-card-spotify')}</p>
                                            </div>
                                            <Image src="/icons/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-2 xl:mb-10 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/spotify.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/reddit">
                                <Card className=" border-none active:scale-90 transition-transform rounded-2xl bg-gradient-reddit cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Reddit</h2>
                                                <p className="text-sm lg:text-md">{tDefault('carousel-card-reddit')}</p>
                                            </div>
                                            <Image src="/icons/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-2 xl:mb-10 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/reddit.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/linkedin">
                                <Card className=" border-none active:scale-90 transition-transform rounded-2xl bg-gradient-linkedin cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Linkedin</h2>
                                                <p className="text-sm lg:text-md">{tDefault('carousel-card-linkedin')}</p>
                                            </div>
                                            <Image src="/icons/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-2 xl:mb-10 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/linkedin.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                    </CarouselContent>

                    <CarouselPrevious className="hidden md:flex w-10 h-10" />
                    <CarouselNext className="hidden md:flex w-10 h-10" />
                </Carousel>
            </div>
        </>
    )

}