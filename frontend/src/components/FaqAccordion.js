import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export function FAQAccordion({ mediaType, mediaTypes, socialMedia, classes }) {
    return (
        <>
            <Accordion type="single" collapsible className="w-full space-y-5">
                <div className="w-full text-left">
                    <div className={`inline-block font-bold text-2xl lg:text-3xl mb-2 ml-1 border-b-4 ${classes}`}>
                        Frequently Asked Questions
                    </div>
                </div>
                <AccordionItem value="item-1" className={`${classes}`}>
                    <AccordionTrigger>
                        What is Best Video Download?
                    </AccordionTrigger>
                    <AccordionContent>
                        Best Video Download is a free online tool that allows you to download {mediaTypes} from {socialMedia} directly to your device. Whether you want to save a {mediaType} for offline viewing or to keep a copy for personal use, our platform makes it easy and quick.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className={`${classes}`}>
                    <AccordionTrigger>
                        Do I need to create an account to download the {mediaTypes}?
                    </AccordionTrigger>
                    <AccordionContent>
                        No, you do not need to create an account to use Best Video Download. The service is completely free and does not require any sign-up or personal information.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className={`${classes}`}>
                    <AccordionTrigger>
                        Can I download {mediaTypes} from private {socialMedia} accounts?
                    </AccordionTrigger>
                    <AccordionContent>
                        No, Best Video Download only allows you to download {mediaTypes} from public {socialMedia} accounts. {mediaTypes} from private accounts are not accessible due to privacy restrictions.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className={`${classes}`}>
                    <AccordionTrigger>
                        Is it legal to download any {mediaType} from {socialMedia}?
                    </AccordionTrigger>
                    <AccordionContent>
                        Downloading {mediaType} from {socialMedia} for personal use is generally allowed, but it&apos;s important to respect copyright laws and the terms of service of the {socialMedia}. Do not redistribute or use the downloaded {mediaType} for commercial purposes without permission from the content owner.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className={`${classes}`}>
                    <AccordionTrigger>
                        On which devices can I use Best Video Download?
                    </AccordionTrigger>
                    <AccordionContent>
                        Best Video Download is compatible with all devices, including smartphones, tablets, and desktops. It works on any web browser, so you can download {mediaType} on the go or from the comfort of your home.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className={`${classes}`}>
                    <AccordionTrigger>
                        Where are the downloaded {mediaTypes} saved?
                    </AccordionTrigger>
                    <AccordionContent>
                        After downloading, the {mediaType} is usually saved in your device&apos;s default downloads folder. On mobile devices, it may be saved in the gallery or documents app, depending on your settings.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className={`${classes}`}>
                    <AccordionTrigger>
                        What formats are supported for downloads?
                    </AccordionTrigger>
                    <AccordionContent>
                        Best Video Download typically allows you to download {mediaTypes} in many different formats you can choose, which is compatible with most devices and media players. We focus on providing high-quality downloads that maintain the original {mediaType} quality.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className={`${classes}`}>
                    <AccordionTrigger>
                        How many {mediaTypes} can I download?
                    </AccordionTrigger>
                    <AccordionContent>
                        There is no limit to the number of {mediaTypes} you can download using Best Video Download. Feel free to download as many {mediaTypes} as you like.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className={`${classes}`}>
                    <AccordionTrigger>
                        Can I download {mediaType} from other social media platforms?
                    </AccordionTrigger>
                    <AccordionContent>
                        Best Video Download typically allows you to download {mediaType} in many different formats you want, which is compatible with most devices and media players. We focus on providing high-quality downloads that maintain the original {mediaType} quality.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className={`${classes}`}>
                    <AccordionTrigger>
                        Is Best Video Download free to use?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, Best Video Download is completely free to use. There are no hidden fees, and you can download as many {mediaTypes} as you want without any charges.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className={`${classes}`}>
                    <AccordionTrigger>
                        How can I contact support if I have issues?
                    </AccordionTrigger>
                    <AccordionContent>
                        If you encounter any problems or have questions that aren&apos;t answered in this FAQ, you can reach out to our support team via the contact form on our website or by emailing [support@bestvideosdownload.com].
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </>
    )
}