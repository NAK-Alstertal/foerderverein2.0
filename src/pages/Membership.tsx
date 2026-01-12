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
        <div className="container max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Linke Spalte - Info-Kacheln */}
            <div className="space-y-6">
              {/* Intro Card */}
              <Card className="animate-fade-up">
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

              {/* Fee Card */}
              <Card className="animate-fade-up animation-delay-100">
                <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
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
            </div>

            {/* Rechte Spalte - Dokument-Kacheln */}
            <div className="space-y-6">
              {/* SEPA Card */}
              <Card className="animate-fade-up animation-delay-200">
                <CardHeader>
                  <CardTitle>{t('membership.sepa.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {t('membership.sepa.text')}
                  </CardDescription>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
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

              {/* Mitgliedsantrag Card */}
              <Card className="animate-fade-up animation-delay-300">
                <CardHeader>
                  <CardTitle>{t('membership.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    PDF-Formular zum Ausfüllen und Einsenden
                  </CardDescription>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
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
          </div>
        </div>
      </section>
    </Layout>
  );
}
