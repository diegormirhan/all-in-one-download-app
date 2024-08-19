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


export function CarouselCards() {
    return (
        <>
        <div className="px-4 w-screen sm:px-0 sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto my-10">
          <Carousel opts={{align: "center",loop: true,}} plugins={[Autoplay({delay: 3000,})]}>
            <CarouselContent>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-transparent border-none active:scale-90 transition-transform rounded-2xl bg-[#FF3A54] cursor-pointer lg:hover:scale-95 group shadow-inner">
                <CardContent className="px-8 pt-6 pb-0 text-white flex space-between">
                <div className="lg:space-y-1">
                        <h2 className="text-xl xl:text-3xl font-extrabold">Instagram</h2>
                        <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
                        <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <div className="">
                            <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
                        </div>
                    </div>
                </CardContent>
              </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-transparent border-none active:scale-90 transition-transform rounded-2xl bg-[#FF3A54] cursor-pointer lg:hover:scale-95 group shadow-inner">
                <CardContent className="px-8 pt-6 pb-0 text-white flex space-between">
                <div className="lg:space-y-1">
                        <h2 className="text-xl xl:text-3xl font-extrabold">Instagram</h2>
                        <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
                        <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <div className="">
                            <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
                        </div>
                    </div>
                </CardContent>
              </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-transparent border-none active:scale-90 transition-transform rounded-2xl bg-[#FF3A54] cursor-pointer lg:hover:scale-95 group shadow-inner">
                <CardContent className="px-8 pt-6 pb-0 text-white flex space-between">
                <div className="lg:space-y-1">
                        <h2 className="text-xl xl:text-3xl font-extrabold">Instagram</h2>
                        <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
                        <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <div className="">
                            <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
                        </div>
                    </div>
                </CardContent>
              </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-transparent border-none active:scale-90 transition-transform rounded-2xl bg-[#FF3A54] cursor-pointer lg:hover:scale-95 group shadow-inner">
                <CardContent className="px-8 pt-6 pb-0 text-white flex space-between">
                <div className="lg:space-y-1">
                        <h2 className="text-xl xl:text-3xl font-extrabold">Instagram</h2>
                        <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
                        <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <div className="">
                            <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
                        </div>
                    </div>
                </CardContent>
              </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-transparent border-none active:scale-90 transition-transform rounded-2xl bg-[#FF3A54] cursor-pointer lg:hover:scale-95 group shadow-inner">
                <CardContent className="px-8 pt-6 pb-0 text-white flex space-between">
                <div className="lg:space-y-1">
                        <h2 className="text-xl xl:text-3xl font-extrabold">Instagram</h2>
                        <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
                        <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <div className="">
                            <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
                        </div>
                    </div>
                </CardContent>
              </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-transparent border-none active:scale-90 transition-transform rounded-2xl bg-[#FF3A54] cursor-pointer lg:hover:scale-95 group shadow-inner">
                <CardContent className="px-8 pt-6 pb-0 text-white flex space-between">
                <div className="lg:space-y-1">
                        <h2 className="text-xl xl:text-3xl font-extrabold">Instagram</h2>
                        <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
                        <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <div className="">
                            <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
                        </div>
                    </div>
                </CardContent>
              </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-transparent border-none active:scale-90 transition-transform rounded-2xl bg-[#FF3A54] cursor-pointer lg:hover:scale-95 group shadow-inner">
                <CardContent className="px-8 pt-6 pb-0 text-white flex space-between">
                <div className="lg:space-y-1">
                        <h2 className="text-xl xl:text-3xl font-extrabold">Instagram</h2>
                        <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
                        <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <div className="">
                            <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
                        </div>
                    </div>
                </CardContent>
              </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-transparent border-none active:scale-90 transition-transform rounded-2xl bg-[#FF3A54] cursor-pointer lg:hover:scale-95 group shadow-inner">
                <CardContent className="px-8 pt-6 pb-0 text-white flex space-between">
                <div className="lg:space-y-1">
                        <h2 className="text-xl xl:text-3xl font-extrabold">Instagram</h2>
                        <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
                        <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <div className="">
                            <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
                        </div>
                    </div>
                </CardContent>
              </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-transparent border-none active:scale-90 transition-transform rounded-2xl bg-[#FF3A54] cursor-pointer lg:hover:scale-95 group shadow-inner">
                <CardContent className="px-8 pt-6 pb-0 text-white flex space-between">
                <div className="lg:space-y-1">
                        <h2 className="text-xl xl:text-3xl font-extrabold">Instagram</h2>
                        <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
                        <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <div className="">
                            <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
                        </div>
                    </div>
                </CardContent>
              </Card>
              </CarouselItem>

            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex w-10 h-10"/>
            <CarouselNext className="hidden md:flex w-10 h-10"/>
          </Carousel>
        </div>
        </>
    )

}