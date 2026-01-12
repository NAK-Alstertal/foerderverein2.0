import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Check, CreditCard, Users } from 'lucide-react';

export default function Membership() {
  const { t, language } = useLanguage();

  const benefits = [
    t('membership.benefits.1'),
    t('membership.benefits.2'),
    t('membership.benefits.3'),
    t('membership.benefits.4'),
  ];

  return (
    <Layout>
      <HeroBanner title={t('membership.title')} subtitle={t('membership.subtitle')} />

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Intro Card */}
            <Card className="animate-fade-up lg:col-span-2">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>Werde Teil unseres Vereins</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t('membership.intro')}
                </CardDescription>
              </CardContent>
            </Card>


            {/* Fee & SEPA */}
            <div className="space-y-6">
              <Card className="animate-fade-up animation-delay-100">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <CardTitle>{t('membership.fee.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {t('membership.fee.text')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="animate-fade-up animation-delay-200">
                <CardHeader>
                  <CardTitle>{t('membership.sepa.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {t('membership.sepa.text')}
                  </CardDescription>
                  <Button variant="outline" asChild>
                    <a 
                      href="/documents/sepa-lastschriftmandat.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      SEPA-Lastschriftmandat herunterladen
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Download CTA */}
          <div className="mt-12 text-center">
            <Card className="inline-block animate-fade-up animation-delay-300">
              <CardContent className="flex flex-col items-center gap-4 p-8">
                <FileText className="h-12 w-12 text-primary" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{t('membership.title')}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    PDF-Formular zum Ausfüllen und Einsenden
                  </p>
                </div>
                <Button size="lg" asChild>
                  <a 
                    href={language === 'de' ? '/documents/mitgliedsantrag-de.pdf' : '/documents/mitgliedsantrag-en.pdf'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    {t('membership.form.download')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
