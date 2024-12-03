import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@/navigation";
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }) {
  const { locale } = params;
  const langCode = locale.split('-')[0];

  const currentUrl = langCode === 'en' ? '/privacy-policy' : `/${langCode}/privacy-policy`;

  return {
    title: "Privacy Policy | Best Media Tool",
    description: "Privacy policy from Best Videos Download page.",
    alternates: {
      canonical: currentUrl
    },
  }
};

export default function PrivacyPolicy() {
  const tDefault = useTranslations('Translations-Default');
  return (
    <main className="w-full flex flex-col items-center py-28 space-y-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 md:text-5xl text-center">{tDefault('privacy-policy-title')}</h1>

        <Card className="mb-8 hover:ring-2 hover:ring-main-color transition-all ease-in-out">
          <CardHeader>
            <CardTitle>{tDefault('privacy-policy-top-card-title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{tDefault('privacy-policy-top-card-content')}</p>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full mb-8 space-y-4">
          <AccordionItem value="item-1" className="ring-2 ring-main-color">
            <AccordionTrigger>{tDefault('privacy-policy-accordion-title-1')}</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">{tDefault('privacy-policy-accordion-content-1-part1')}</p>
              <p>{tDefault('privacy-policy-accordion-content-1-part2')}</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>{tDefault('privacy-policy-accordion-content-1-part3')}</li>
                <li>{tDefault('privacy-policy-accordion-content-1-part4')}</li>
                <li>{tDefault('privacy-policy-accordion-content-1-part5')}</li>
                <li>{tDefault('privacy-policy-accordion-content-1-part6')}</li>
              </ul>
            </AccordionContent>
          </AccordionItem >
          <AccordionItem value="item-2" className="ring-2 ring-main-color">
            <AccordionTrigger>{tDefault('privacy-policy-accordion-title-2')}</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">{tDefault('privacy-policy-accordion-content-2-part1')}</p>
              <p>{tDefault('privacy-policy-accordion-content-2-part2')}</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>{tDefault('privacy-policy-accordion-content-2-part3')}</li>
                <li>{tDefault('privacy-policy-accordion-content-2-part4')}</li>
              </ul>
              <p className="mt-4">{tDefault('privacy-policy-accordion-content-2-part5')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="ring-2 ring-main-color">
            <AccordionTrigger>{tDefault('privacy-policy-accordion-title-3')}</AccordionTrigger>
            <AccordionContent>
              <p>{tDefault('privacy-policy-accordion-content-3-part1')}</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>{tDefault('privacy-policy-accordion-content-3-part2')}</li>
                <li>{tDefault('privacy-policy-accordion-content-3-part3')}</li>
                <li>{tDefault('privacy-policy-accordion-content-3-part4')}</li>
              </ul>
              <p className="mt-4">{tDefault('privacy-policy-accordion-content-3-part5')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="ring-2 ring-main-color">
            <AccordionTrigger>{tDefault('privacy-policy-accordion-title-4')}</AccordionTrigger>
            <AccordionContent>
              <p>{tDefault('privacy-policy-accordion-content-4-part1')}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card className="hover:ring-2 hover:ring-main-color transition-all ease-in-out">
          <CardHeader>
            <CardTitle>{tDefault('privacy-policy-bottom-card-title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{tDefault('privacy-policy-bottom-card-description')}</p>
            <p>
              Best Media Tool<br />
              Email: <a href="mailto:mirhan.diego@gmail.com" className="text-blue-500 hover:underline">mirhan.diego@gmail.com</a><br />
              Website: <Link href="/" className="text-blue-500 hover:underline">bestmediatool.com</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}