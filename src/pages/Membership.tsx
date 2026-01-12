import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Check, CreditCard, Users } from 'lucide-react';

export default function Membership() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <HeroBanner title={t('membership.title')} subtitle={t('membership.subtitle')} />

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          {/* Intro Card */}
          <Card className="animate-fade-up mb-8">
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

          {/* Fee & SEPA in Grid */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
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

          {/* Download CTA */}
          <Card className="animate-fade-up animation-delay-300">
            <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
              <FileText className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">{t('membership.title')}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  PDF-Formular zum Ausfüllen und Einsenden
                </p>
              </div>
              <Button size="lg" asChild>
                <a 
                  href="/documents/mitgliedsantrag.pdf" 
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
      </section>
    </Layout>
  );
}
