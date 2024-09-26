import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"
import { useTranslations } from "next-intl"


export function ImportantTips({classes, namespace}) {
    const tDynamic = useTranslations(`Translations-${namespace}`)
    const tDefault = useTranslations('Translations-Default')

    return (
        <>
            <Alert className={`m-auto w-11/12 md:w-4/5 my-14 ${classes}`}>
                <Info className="size-5 mt-1" />
                <AlertTitle className="text-lg font-semibold">{tDefault('tips-title')}</AlertTitle>
                <AlertDescription>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-md">
                        <li><strong>{tDynamic('tips-item1-key')}</strong> {tDynamic('tips-item1-value')}</li>
                        <li><strong>{tDynamic('tips-item2-key')}</strong> {tDynamic('tips-item2-value')}</li>
                        <li><strong>{tDynamic('tips-item3-key')}</strong> {tDynamic('tips-item3-value')}</li>
                    </ul>
                </AlertDescription>
            </Alert>
        </>
    )
}

