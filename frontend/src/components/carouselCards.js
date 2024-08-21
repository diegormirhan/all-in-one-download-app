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

import Image from "next/image"
import Link from "next/link"

export function CarouselCards() {
    return (
        <>
            <div className="px-4 w-screen sm:px-0 sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto mb-10">
                <Carousel opts={{ align: "center", loop: true, }} plugins={[Autoplay({ delay: 3000, })]}>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/">
                                <Card className="border-none active:scale-90 transition-transform rounded-2xl bg-gradient-instagram cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Instagram</h2>
                                                <p className="text-sm lg:text-md">Share your moments with the world through photos and videos.</p>
                                            </div>
                                            <Image src="/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-6 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/instagram.webp" width={112} height="0" alt="instagram video feed image" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/">
                                <Card className="border-none active:scale-90 transition-transform rounded-2xl bg-gradient-facebook cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Facebook</h2>
                                                <p className="text-sm lg:text-md">Connect with friends, share updates, and stay informed.</p>
                                            </div>
                                            <Image src="/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-6 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/facebook.webp" width={112} height="0" alt="facebook video feed image" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/">
                                <Card className=" border-none active:scale-90 transition-transform rounded-2xl bg-gradient-tiktok cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Tiktok</h2>
                                                <p className="text-sm lg:text-md">Create and explore short videos that entertain and inspire.</p>
                                            </div>
                                            <Image src="/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-6 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/tiktok.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/">
                                <Card className=" border-none active:scale-90 transition-transform rounded-2xl bg-gradient-youtube cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Youtube</h2>
                                                <p className="text-sm lg:text-md">Watch and share videos on any topic, from entertainment to education.</p>
                                            </div>
                                            <Image src="/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-6 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/youtube.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/">
                                <Card className="border-none active:scale-90 transition-transform rounded-2xl bg-gradient-pinterest cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Pinterest</h2>
                                                <p className="text-sm lg:text-md">Discover and save creative ideas for every aspect of your life.</p>
                                            </div>
                                            <Image src="/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-6 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/pinterest.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/">
                                <Card className=" border-none active:scale-90 transition-transform rounded-2xl bg-gradient-twitter cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Twitter</h2>
                                                <p className="text-sm lg:text-md">Stay updated on global news and share your thoughts instantly.</p>
                                            </div>
                                            <Image src="/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-6 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/twitter.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/">
                                <Card className="border-none active:scale-90 transition-transform rounded-2xl bg-gradient-spotify cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Spotify</h2>
                                                <p className="text-sm lg:text-md">Stream your favorite music and podcasts anytime, anywhere.</p>
                                            </div>
                                            <Image src="/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-6 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/spotify.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/">
                                <Card className=" border-none active:scale-90 transition-transform rounded-2xl bg-gradient-reddit cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Reddit</h2>
                                                <p className="text-sm lg:text-md">Dive into communities and discussions on any topic imaginable.</p>
                                            </div>
                                            <Image src="/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-6 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <Image src="/socialMediaPrints/reddit.webp" alt="tiktok video feed image" width={112} height="0" className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Link href="/">
                                <Card className=" border-none active:scale-90 transition-transform rounded-2xl bg-gradient-linkedin cursor-pointer lg:hover:scale-95 group shadow-inner">
                                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                                        <div className="grid content-between">
                                            <div>
                                                <h2 className="text-xl xl:text-3xl font-extrabold">Linkedin</h2>
                                                <p className="text-sm lg:text-md">Professional networking to grow your career and business.</p>
                                            </div>
                                            <Image src="/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-6 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
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