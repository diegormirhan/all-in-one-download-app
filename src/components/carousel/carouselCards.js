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

import { CardItem } from "./cardItem";

export function CarouselCards({ classes }) {
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

                        <CardItem pagePath="/instagram" translation={tDefault('carousel-card-instagram')} name="Instagram" printPath="/socialMediaPrints/instagram.webp" alt="instagram video feed image" bgClass="bg-gradient-instagram" />

                        <CardItem pagePath="/facebook" translation={tDefault('carousel-card-facebook')} name="Facebook" printPath="/socialMediaPrints/facebook.webp" alt="facebook video feed image" bgClass="bg-gradient-facebook" />

                        <CardItem pagePath="/tiktok" translation={tDefault('carousel-card-tiktok')} name="Tiktok" printPath="/socialMediaPrints/tiktok.webp" alt="tiktok video feed image" bgClass="bg-gradient-tiktok" />

                        <CardItem pagePath="/youtube" translation={tDefault('carousel-card-youtube')} name="Youtube" printPath="/socialMediaPrints/youtube.webp" alt="youtube video feed image" bgClass="bg-gradient-youtube" />

                        <CardItem pagePath="/pinterest" translation={tDefault('carousel-card-pinterest')} name="Pinterest" printPath="/socialMediaPrints/pinterest.webp" alt="pinterest video feed image" bgClass="bg-gradient-pinterest" />

                        <CardItem pagePath="/twitter" translation={tDefault('carousel-card-twitter')} name="X (Twitter)" printPath="/socialMediaPrints/twitter.webp" alt="twitter video feed image" bgClass="bg-gradient-twitter" />

                        {/* <CardItem pagePath="/spotify" translation={tDefault('carousel-card-spotify')} name="Spotify" printPath="/socialMediaPrints/spotify.webp" alt="spotify video feed image" bgClass="bg-gradient-spotify" /> */}

                        <CardItem pagePath="/reddit" translation={tDefault('carousel-card-reddit')} name="Reddit" printPath="/socialMediaPrints/reddit.webp" alt="reddit video feed image" bgClass="bg-gradient-reddit" />

                        <CardItem pagePath="/linkedin" translation={tDefault('carousel-card-linkedin')} name="Linkedin" printPath="/socialMediaPrints/linkedin.webp" alt="linkedin video feed image" bgClass="bg-gradient-linkedin" />
                    </CarouselContent>

                    <CarouselPrevious className="hidden md:flex w-10 h-10" />
                    <CarouselNext className="hidden md:flex w-10 h-10" />
                    
                </Carousel>
            </div>
        </>
    )

}