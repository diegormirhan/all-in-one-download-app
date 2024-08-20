import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export function FAQAccordion() {
    return (
        <>
            <Accordion type="single" collapsible defaultValue={["item-1",]} className="w-full space-y-5">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        What is [Your Site Name]?
                    </AccordionTrigger>
                    <AccordionContent>
                        [Your Site Name] is a free online tool that allows you to download videos from Instagram and other social media platforms directly to your device. Whether you want to save a video for offline viewing or to keep a copy for personal use, our platform makes it easy and quick.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Do I need to create an account to download videos?
                    </AccordionTrigger>
                    <AccordionContent>
                        No, you do not need to create an account to use [Your Site Name]. The service is completely free and does not require any sign-up or personal information.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Can I download videos from private Instagram accounts?
                    </AccordionTrigger>
                    <AccordionContent>
                        No, [Your Site Name] only allows you to download videos from public Instagram accounts. Videos from private accounts are not accessible due to privacy restrictions.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        Is it legal to download videos from Instagram?
                    </AccordionTrigger>
                    <AccordionContent>
                        Downloading videos from Instagram for personal use is generally allowed, but it &apos;s important to respect copyright laws and the terms of service of Instagram. Do not redistribute or use the downloaded videos for commercial purposes without permission from the content owner.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        On which devices can I use [Your Site Name]?
                    </AccordionTrigger>
                    <AccordionContent>
                        [Your Site Name] is compatible with all devices, including smartphones, tablets, and desktops. It works on any web browser, so you can download videos on the go or from the comfort of your home.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        Where are the downloaded videos saved?
                    </AccordionTrigger>
                    <AccordionContent>
                        After downloading, the video is usually saved in your device &apos;s default downloads folder. On mobile devices, it may be saved in the gallery or video app, depending on your settings.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                    <AccordionTrigger>
                        What formats are supported for downloads?
                    </AccordionTrigger>
                    <AccordionContent>
                        [Your Site Name] typically allows you to download videos in MP4 format, which is compatible with most devices and media players. We focus on providing high-quality downloads that maintain the original video &apos;s resolution.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                    <AccordionTrigger>
                        How many videos can I download?
                    </AccordionTrigger>
                    <AccordionContent>
                        There is no limit to the number of videos you can download using [Your Site Name]. Feel free to download as many videos as you like.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                    <AccordionTrigger>
                        Can I download videos from other social media platforms?
                    </AccordionTrigger>
                    <AccordionContent>
                        [Your Site Name] typically allows you to download videos in MP4 format, which is compatible with most devices and media players. We focus on providing high-quality downloads that maintain the original video &apos;s resolution.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                    <AccordionTrigger>
                        Is [Your Site Name] free to use?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, [Your Site Name] is completely free to use. There are no hidden fees, and you can download as many videos as you want without any charges.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                    <AccordionTrigger>
                        How can I contact support if I have issues?
                    </AccordionTrigger>
                    <AccordionContent>
                        If you encounter any problems or have questions that aren &apos;t answered in this FAQ, you can reach out to our support team via the contact form on our website or by emailing [support@yourwebsite.com].
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </>
    )
}