import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { useTranslations } from "next-intl"


export function FAQAccordion({ classes, namespace }) {
    const tDynamic = useTranslations(`Translations-${namespace}`)
    const tDefault = useTranslations('Translations-Default')

    return (
        <>
            <Accordion type="single" collapsible className="w-full space-y-5">
                <div className="w-full text-left">
                    <div className={`inline-block font-bold text-2xl lg:text-3xl mb-2 ml-1 border-b-4 ${classes}`}>
                        {tDefault('faq-title')}
                    </div>
                </div>
                <AccordionItem value="item-1" className={`${classes}`}>
                    <AccordionTrigger>
                        {tDynamic('faq-item1-title')}
                    </AccordionTrigger>
                    <AccordionContent>
                        {tDynamic('faq-item1-content')}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className={`${classes}`}>
                    <AccordionTrigger>
                        {tDynamic('faq-item2-title')}
                    </AccordionTrigger>
                    <AccordionContent>
                        {tDynamic('faq-item2-content')}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className={`${classes}`}>
                    <AccordionTrigger>
                        {tDynamic('faq-item3-title')}
                    </AccordionTrigger>
                    <AccordionContent>
                        {tDynamic('faq-item3-content')}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className={`${classes}`}>
                    <AccordionTrigger>
                        {tDynamic('faq-item4-title')}
                    </AccordionTrigger>
                    <AccordionContent>
                        {tDynamic('faq-item4-content')}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className={`${classes}`}>
                    <AccordionTrigger>
                        {tDynamic('faq-item5-title')}
                    </AccordionTrigger>
                    <AccordionContent>
                        {tDynamic('faq-item5-content')}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className={`${classes}`}>
                    <AccordionTrigger>
                        {tDynamic('faq-item6-title')}
                    </AccordionTrigger>
                    <AccordionContent>
                        {tDynamic('faq-item6-content')}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className={`${classes}`}>
                    <AccordionTrigger>
                        {tDynamic('faq-item7-title')}
                    </AccordionTrigger>
                    <AccordionContent>
                        {tDynamic('faq-item7-content')}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className={`${classes}`}>
                    <AccordionTrigger>
                        {tDynamic('faq-item8-title')}
                    </AccordionTrigger>
                    <AccordionContent>
                        {tDynamic('faq-item8-content')}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className={`${classes}`}>
                    <AccordionTrigger>
                        {tDynamic('faq-item9-title')}
                    </AccordionTrigger>
                    <AccordionContent>
                        {tDynamic('faq-item9-content')}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className={`${classes}`}>
                    <AccordionTrigger>
                        {tDynamic('faq-item10-title')}
                    </AccordionTrigger>
                    <AccordionContent>
                        {tDynamic('faq-item10-content')}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className={`${classes}`}>
                    <AccordionTrigger>
                        {tDynamic('faq-item11-title')}
                    </AccordionTrigger>
                    <AccordionContent>
                        {tDynamic('faq-item11-content')}
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </>
    )
}