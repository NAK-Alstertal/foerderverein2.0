import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin } from 'lucide-react';

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
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Email */}
              <Card className="animate-fade-up">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <CardTitle>E-Mail</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Schreiben Sie uns eine E-Mail und wir melden uns schnellstmöglich bei Ihnen.
                  </CardDescription>
                  <Button size="lg" asChild>
                    <a href={`mailto:${emailAddress}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      {t('contact.email.button')}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="animate-fade-up animation-delay-100">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <CardTitle>{t('contact.address.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="not-italic text-muted-foreground space-y-1">
                    <p className="font-semibold text-foreground">Förderverein NAK Alstertal e.V.</p>
                    <p>Musterstraße 123</p>
                    <p>22297 Hamburg</p>
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
