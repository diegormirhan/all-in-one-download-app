import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

import { CircleAlert, Link2, Video, Download } from "lucide-react"
import { useTranslations } from 'next-intl';

export function DownloadCards() {
    const tDefault = useTranslations("Translations-Default");

    return (
        <div className="px-4 w-screen md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto mb-10">
            <div className="text-center lg:text-left inline-block font-bold text-2xl lg:text-3xl mb-4 ml-1 border-b-4 border-main-color">
            {tDefault('download-cards-title')}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="hover:ring-2 hover:ring-main-color transition-all ease-in-out">
                    <CardHeader className="flex flex-row">
                        <Link2 className="size-8 mr-2" />
                        <CardTitle>{tDefault('download-card-item1-title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{tDefault('download-card-item1-description')}</p>
                    </CardContent>
                </Card>

                <Card className="hover:ring-2 hover:ring-main-color transition-all ease-in-out">
                    <CardHeader className="flex flex-row">
                        <Video className="size-8 mr-2" />
                        <CardTitle>{tDefault('download-card-item2-title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{tDefault('download-card-item2-description')}</p>
                    </CardContent>
                </Card>

                <Card className="hover:ring-2 hover:ring-main-color transition-all ease-in-out">
                    <CardHeader className="flex flex-row">
                        <Download className="size-8 mr-2" />
                        <CardTitle>{tDefault('download-card-item3-title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{tDefault('download-card-item3-description')}</p>
                    </CardContent>
                </Card>
            </div>
            <Alert className="mt-6 hover:ring-2 hover:ring-main-color transition-all ease-in-out">
                <CircleAlert className="size-15 mt-1" />
                <AlertTitle className="ml-2 text-2xl font-semibold">{tDefault('download-tip-title')}</AlertTitle>
                <AlertDescription className="text-md ml-2">
                    <li>{tDefault('download-tip-content1')}</li>
                    <li>{tDefault('download-tip-content2')}</li>
                    <li>{tDefault('download-tip-content3')}</li>
                </AlertDescription>
            </Alert>
        </div>
    )
}