import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Download, Share2 } from 'lucide-react'
import { Link } from "@/navigation";
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }) {
  const { locale } = params;
  const langCode = locale.split('-')[0];

  const currentUrl = langCode === 'en' ? '/about' : `/${langCode}/about`;

  return {
    title: "About Us | Best Media Tool",
    description: "About Us - Best Media Tool page.",
    alternates: {
      canonical: currentUrl
    },
  }
};

export default function About() {
  const tDefault = useTranslations('Translations-Default');
  return (
    <>
      <main className="w-full flex flex-col items-center py-28 space-y-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl text-center">{tDefault('about-title')}</h1>

          <Card className="mb-8 hover:ring-2 hover:ring-main-color transition-all ease-in-out">
            <CardHeader>
              <CardTitle className="text-2xl">{tDefault('about-intro-card-title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">{tDefault('about-intro-card-description')}</p>
              <Link href="/">
                <Button className="w-full sm:w-auto bg-main-color hover:bg-secondary-bg-color" >{tDefault('about-intro-card-button')}</Button>
              </Link>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <Card className="hover:ring-2 hover:ring-main-color transition-all ease-in-out">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="mr-2" />
                  {tDefault('about-feature-card-title-1')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{tDefault('about-feature-card-description-1')}</p>
              </CardContent>
            </Card>
            <Card className="hover:ring-2 hover:ring-main-color transition-all ease-in-out">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Share2 className="mr-2" />
                  {tDefault('about-feature-card-title-2')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{tDefault('about-feature-card-description-2')}</p>
              </CardContent>
            </Card>
            <Card className="hover:ring-2 hover:ring-main-color transition-all ease-in-out">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2" />
                  {tDefault('about-feature-card-title-3')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{tDefault('about-feature-card-description-3')}</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mb-6">{tDefault('about-platforms-title')}</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
            {["Instagram", "TikTok", "Facebook", "YouTube", "Twitter", "Reddit", "Snapchat", "LinkedIn", "Pinterest", "SoundCloud", "Spotify", "Threads"].map((platform) => (
              <Link href={`/${platform.toLowerCase()}`} key={platform}>
                <Card className="hover:ring-2 hover:ring-main-color transition-all ease-in-out cursor-pointer">
                  <CardContent className="flex flex-col justify-center items-center py-6">
                    <p className="text-lg font-semibold">{platform}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="hover:ring-2 hover:ring-main-color transition-all ease-in-out">
            <CardHeader>
              <CardTitle className="text-2xl">{tDefault('about-bottom-card-title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>{tDefault('about-bottom-card-content-1')}</li>
                <li>{tDefault('about-bottom-card-content-2')}</li>
                <li>{tDefault('about-bottom-card-content-3')}</li>
                <li>{tDefault('about-bottom-card-content-4')}</li>
                <li>{tDefault('about-bottom-card-content-5')}</li>
              </ul>
              <Link href="/">
                <Button className="mt-6 w-full sm:w-auto bg-main-color hover:bg-secondary-bg-color">{tDefault('about-bottom-button')}</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}