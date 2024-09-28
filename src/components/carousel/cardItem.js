import { CarouselItem } from "@/components/ui/carousel"
import { Link } from "@/navigation"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function CardItem({ pagePath, translation, name, printPath, alt, bgClass }) {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Link href={pagePath}>
                <Card className={`border-none active:scale-90 transition-transform rounded-2xl ${bgClass} cursor-pointer lg:hover:scale-95 group shadow-inner`}>
                    <CardContent className="px-8 pt-6 pb-0 text-white flex">
                        <div className="grid content-between">
                            <div>
                                <h2 className="text-xl xl:text-3xl font-extrabold">{name}</h2>
                                <p className="text-sm lg:text-md">{translation}</p>
                            </div>
                            <Image src="/icons/arrow_right.svg" alt='arrow right icon svg' width={40} height={40} className="mb-2 xl:mb-10 w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></Image>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <Image src={printPath} width={112} height="0" alt={alt} className="rounded-t-2xl h-auto w-auto lg:w-32"></Image>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </CarouselItem>
    )
}