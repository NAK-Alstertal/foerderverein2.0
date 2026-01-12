import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CreditCard, Users, Download } from 'lucide-react';

export default function Membership() {
  const { t } = useLanguage();

  return (
    <Layout>
      <HeroBanner title={t('membership.title')} subtitle={t('membership.subtitle')} />

      {/* Content */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Linke Spalte - Info-Kacheln */}
            <div className="space-y-6">
              {/* Intro Card */}
              <Card className="group animate-fade-up overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop" 
                    alt="Werde Teil unseres Vereins"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                    <Users className="h-5 w-5" />
                  </div>
                </div>
                <CardHeader className="pt-4 pb-2">
                  <CardTitle>Werde Teil unseres Vereins</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {t('membership.intro')}
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Fee Card */}
              <Card className="group animate-fade-up animation-delay-100 overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop" 
                    alt={t('membership.fee.title')}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg">
                    <CreditCard className="h-5 w-5" />
                  </div>
                </div>
                <CardHeader className="pt-4 pb-2">
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
              {/* Mitgliedsantrag Card */}
              <Card className="group animate-fade-up animation-delay-200 overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop" 
                    alt={t('membership.title')}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                    <FileText className="h-5 w-5" />
                  </div>
                </div>
                <CardHeader className="pt-4 pb-2">
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
                      <Download className="mr-2 h-4 w-4" />
                      Mitgliedsantrag (PDF)
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* SEPA Card */}
              <Card className="group animate-fade-up animation-delay-300 overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop" 
                    alt={t('membership.sepa.title')}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                    <FileText className="h-5 w-5" />
                  </div>
                </div>
                <CardHeader className="pt-4 pb-2">
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
                      <Download className="mr-2 h-4 w-4" />
                      SEPA-Lastschriftmandat (PDF)
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
