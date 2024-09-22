import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }) {
    const { locale } = params;
    const langCode = locale.split('-')[0];

    const currentUrl = langCode === 'en' ? '/terms-and-conditions' : `/${langCode}/terms-and-conditions`;

    return {
        title: "Terms and Conditions | Best Video Download",
        description: "Terms and Conditions from Best Videos Download page.",
        alternates: {
            canonical: currentUrl
        },
    }
};

export default function TermsAndConditions() {
    const tDefault = useTranslations('Translations-Default');
    return (
        <main className="w-full flex flex-col items-center py-28 px-4">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className=" text-2xl md:text-3xl font-bold text-center">{tDefault('terms-and-conditions-title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <section>
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">{tDefault('terms-and-conditions-item1-title')}</h2>
                        <p>{tDefault('terms-and-conditions-item1-content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">{tDefault('terms-and-conditions-item2-title')}</h2>
                        <p>{tDefault('terms-and-conditions-item2-content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">{tDefault('terms-and-conditions-item3-title')}</h2>
                        <p>{tDefault('terms-and-conditions-item3-content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">{tDefault('terms-and-conditions-item4-title')}</h2>
                        <p>{tDefault('terms-and-conditions-item4-content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">{tDefault('terms-and-conditions-item5-title')}</h2>
                        <p>{tDefault('terms-and-conditions-item5-content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">{tDefault('terms-and-conditions-item6-title')}</h2>
                        <p>{tDefault('terms-and-conditions-item6-content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">{tDefault('terms-and-conditions-item7-title')}</h2>
                        <p>{tDefault('terms-and-conditions-item7-content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">{tDefault('terms-and-conditions-item8-title')}</h2>
                        <p>{tDefault('terms-and-conditions-item8-content')}</p>
                    </section>
                </CardContent>
            </Card>
        </main>
    )
}