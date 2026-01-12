import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';
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
    date: '2026-01-08',
    titleDe: 'Neujahrsempfang 2026',
    titleEn: 'New Year Reception 2026',
    contentDe: 'Wir laden alle Mitglieder und Freunde des Vereins herzlich zu unserem traditionellen Neujahrsempfang am 18. Januar 2026 um 15:00 Uhr ein. Gemeinsam möchten wir auf das neue Jahr anstoßen und unsere Pläne für 2026 vorstellen.',
    contentEn: 'We cordially invite all members and friends of the association to our traditional New Year reception on January 18, 2026 at 3:00 PM. Together we would like to toast the new year and present our plans for 2026.',
  },
  {
    id: 2,
    date: '2025-12-15',
    titleDe: 'Weihnachtskonzert in der Kirche',
    titleEn: 'Christmas Concert in the Church',
    contentDe: 'Das diesjährige Weihnachtskonzert war ein voller Erfolg! Über 200 Besucher erlebten einen wunderbaren Abend mit festlicher Musik. Wir danken allen Mitwirkenden und Gästen für diesen besonderen Abend.',
    contentEn: 'This year\'s Christmas concert was a complete success! Over 200 visitors enjoyed a wonderful evening of festive music. We thank all participants and guests for this special evening.',
  },
  {
    id: 3,
    date: '2025-11-20',
    titleDe: 'Restaurierung der Kirchenfenster abgeschlossen',
    titleEn: 'Church Window Restoration Completed',
    contentDe: 'Nach mehrmonatiger Arbeit ist die Restaurierung der historischen Kirchenfenster erfolgreich abgeschlossen. Die Fenster erstrahlen nun wieder in ihrer ursprünglichen Pracht. Ein großes Dankeschön an alle Spender!',
    contentEn: 'After several months of work, the restoration of the historic church windows has been successfully completed. The windows now shine again in their original splendor. A big thank you to all donors!',
  },
  {
    id: 4,
    date: '2025-09-10',
    titleDe: 'Jahreshauptversammlung 2025',
    titleEn: 'Annual General Meeting 2025',
    contentDe: 'Bei der Jahreshauptversammlung wurden der Vorstand bestätigt und die Projekte für das kommende Jahr beschlossen. Wir freuen uns auf weitere gemeinsame Aktivitäten zur Erhaltung unserer Kirche.',
    contentEn: 'At the annual general meeting, the board was confirmed and projects for the coming year were approved. We look forward to further joint activities for the preservation of our church.',
  },
  {
    id: 5,
    date: '2025-06-25',
    titleDe: 'Sommerfest im Kirchgarten',
    titleEn: 'Summer Festival in the Church Garden',
    contentDe: 'Unser Sommerfest lockte bei bestem Wetter zahlreiche Besucher an. Mit Kaffee, Kuchen und Live-Musik verbrachten wir einen unvergesslichen Nachmittag. Der Erlös kommt der Orgelrenovierung zugute.',
    contentEn: 'Our summer festival attracted numerous visitors in the best weather. With coffee, cake and live music, we spent an unforgettable afternoon. The proceeds will benefit the organ renovation.',
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
      <HeroBanner 
        title={t('news.title')} 
        subtitle={t('news.subtitle')} 
      />

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
