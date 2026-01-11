import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Target, Users } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <HeroBanner title={t('about.title')} subtitle={t('about.subtitle')} />

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Purpose */}
            <Card className="animate-fade-up">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle>{t('about.purpose.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('about.purpose.text')}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card className="animate-fade-up animation-delay-100">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>{t('about.goals.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('about.goals.text')}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Statute */}
            <Card className="animate-fade-up animation-delay-200">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle>{t('about.statute.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {t('about.statute.text')}
                </CardDescription>
                <Button variant="outline" asChild>
                  <a 
                    href={language === 'de' ? '/documents/satzung-de.pdf' : '/documents/satzung-en.pdf'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    {t('about.statute.download')}
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
