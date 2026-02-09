import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin } from 'lucide-react';
import gemeindeAussen from '@/assets/gemeinde-aussen.jpg';

export default function Contact() {
  const { t } = useLanguage();

  const emailAddress = 'info@nak-alstertal.de';

  return (
    <Layout>
      <HeroBanner 
        title={t('contact.title')} 
        subtitle={t('contact.intro')} 
      />

      {/* Content */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Email */}
              <Card className="group animate-fade-up overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop" 
                    alt="E-Mail"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>
                <CardHeader className="pt-4 pb-2">
                  <CardTitle>E-Mail</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Schreib uns eine E-Mail und wir melden uns schnellstmöglich bei dir.
                  </CardDescription>
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                    <a href={`mailto:${emailAddress}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      {t('contact.email.button')}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="group animate-fade-up animation-delay-100 overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={gemeindeAussen}
                    alt={t('contact.address.title')}
                    className="w-full h-full object-cover object-right transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <CardHeader className="pt-4 pb-2">
                  <CardTitle>{t('contact.address.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="not-italic text-muted-foreground space-y-1">
                    <p className="font-semibold text-foreground">Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.</p>
                    <p>Dweerblöcken 8</p>
                    <p>22393 Hamburg</p>
                    <p>Deutschland</p>
                  </address>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
