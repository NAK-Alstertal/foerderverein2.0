import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface NewsItem {
  id: number;
  date: string;
  titleDe: string;
  titleEn: string;
  contentDe: string;
  contentEn: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: '2024-01-15',
    titleDe: 'Herzlich willkommen auf unserer neuen Webseite',
    titleEn: 'Welcome to our new website',
    contentDe: 'Wir freuen uns, Ihnen unsere neu gestaltete Webseite präsentieren zu können. Hier finden Sie alle wichtigen Informationen rund um unseren Förderverein.',
    contentEn: 'We are pleased to present our newly designed website. Here you will find all important information about our association.',
  },
  {
    id: 2,
    date: '2024-01-10',
    titleDe: 'Jahreshauptversammlung 2024',
    titleEn: 'Annual General Meeting 2024',
    contentDe: 'Die Jahreshauptversammlung findet am 15. März 2024 statt. Alle Mitglieder sind herzlich eingeladen.',
    contentEn: 'The annual general meeting will take place on March 15, 2024. All members are cordially invited.',
  },
  {
    id: 3,
    date: '2024-01-05',
    titleDe: 'Spendenaktion erfolgreich abgeschlossen',
    titleEn: 'Fundraising campaign successfully completed',
    contentDe: 'Dank Ihrer großzügigen Unterstützung konnten wir unsere Spendenaktion erfolgreich abschließen. Vielen Dank an alle Spender!',
    contentEn: 'Thanks to your generous support, we were able to successfully complete our fundraising campaign. Thank you to all donors!',
  },
];

export default function News() {
  const { t, language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              {t('news.title')}
            </h1>
            <p className="animate-fade-up animation-delay-200 mt-6 text-lg text-primary-foreground/90">
              {t('news.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-6">
            {newsItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                  </div>
                  <CardTitle>{language === 'de' ? item.titleDe : item.titleEn}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {language === 'de' ? item.contentDe : item.contentEn}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
