import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export function FAQAccordion() {
    return (
        <>
        <Accordion type="single" collapsible className="w-11/12 md:w-3/5 m-auto space-y-5 mb-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    How to download from Instagram?
                </AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    Is it Free?
                </AccordionTrigger>
                <AccordionContent>
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    Is it Legal?
                </AccordionTrigger>
                <AccordionContent>
                    Yes, it is.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>
                    Is it Safe?
                </AccordionTrigger>
                <AccordionContent>
                    Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        </>
    )
}