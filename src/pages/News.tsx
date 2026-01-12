import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  date: string;
  titleDe: string;
  titleEn: string;
  contentDe: string;
  contentEn: string;
  images: string[];
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: '2026-01-08',
    titleDe: 'Neujahrsempfang 2026',
    titleEn: 'New Year Reception 2026',
    contentDe: 'Wir laden alle Mitglieder und Freunde des Vereins herzlich zu unserem traditionellen Neujahrsempfang am 18. Januar 2026 um 15:00 Uhr ein. Gemeinsam möchten wir auf das neue Jahr anstoßen und unsere Pläne für 2026 vorstellen.',
    contentEn: 'We cordially invite all members and friends of the association to our traditional New Year reception on January 18, 2026 at 3:00 PM. Together we would like to toast the new year and present our plans for 2026.',
    images: [
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
    ],
  },
  {
    id: 2,
    date: '2025-12-15',
    titleDe: 'Weihnachtskonzert in der Kirche',
    titleEn: 'Christmas Concert in the Church',
    contentDe: 'Das diesjährige Weihnachtskonzert war ein voller Erfolg! Über 200 Besucher erlebten einen wunderbaren Abend mit festlicher Musik. Wir danken allen Mitwirkenden und Gästen für diesen besonderen Abend.',
    contentEn: 'This year\'s Christmas concert was a complete success! Over 200 visitors enjoyed a wonderful evening of festive music. We thank all participants and guests for this special evening.',
    images: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80',
      'https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?w=600&q=80',
      'https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=600&q=80',
    ],
  },
  {
    id: 3,
    date: '2025-11-20',
    titleDe: 'Restaurierung der Kirchenfenster abgeschlossen',
    titleEn: 'Church Window Restoration Completed',
    contentDe: 'Nach mehrmonatiger Arbeit ist die Restaurierung der historischen Kirchenfenster erfolgreich abgeschlossen. Die Fenster erstrahlen nun wieder in ihrer ursprünglichen Pracht. Ein großes Dankeschön an alle Spender!',
    contentEn: 'After several months of work, the restoration of the historic church windows has been successfully completed. The windows now shine again in their original splendor. A big thank you to all donors!',
    images: [
      'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=600&q=80',
      'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=80',
    ],
  },
  {
    id: 4,
    date: '2025-09-10',
    titleDe: 'Jahreshauptversammlung 2025',
    titleEn: 'Annual General Meeting 2025',
    contentDe: 'Bei der Jahreshauptversammlung wurden der Vorstand bestätigt und die Projekte für das kommende Jahr beschlossen. Wir freuen uns auf weitere gemeinsame Aktivitäten zur Erhaltung unserer Kirche.',
    contentEn: 'At the annual general meeting, the board was confirmed and projects for the coming year were approved. We look forward to further joint activities for the preservation of our church.',
    images: [
      'https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?w=600&q=80',
    ],
  },
  {
    id: 5,
    date: '2025-06-25',
    titleDe: 'Sommerfest im Kirchgarten',
    titleEn: 'Summer Festival in the Church Garden',
    contentDe: 'Unser Sommerfest lockte bei bestem Wetter zahlreiche Besucher an. Mit Kaffee, Kuchen und Live-Musik verbrachten wir einen unvergesslichen Nachmittag. Der Erlös kommt der Orgelrenovierung zugute.',
    contentEn: 'Our summer festival attracted numerous visitors in the best weather. With coffee, cake and live music, we spent an unforgettable afternoon. The proceeds will benefit the organ renovation.',
    images: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
      'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&q=80',
    ],
  },
];

export default function News() {
  const { t, language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

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
      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
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
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {language === 'de' ? item.contentDe : item.contentEn}
                  </CardDescription>
                  {item.images.length > 0 && (
                    <div className={`grid gap-3 ${item.images.length === 1 ? 'grid-cols-1' : item.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                      {item.images.map((src, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => openLightbox(item.images, imgIndex)}
                          className="overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          <img
                            src={src}
                            alt={`${language === 'de' ? item.titleDe : item.titleEn} - Bild ${imgIndex + 1}`}
                            className="w-full h-32 md:h-40 object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 border-none">
          <div className="relative">
            <img
              src={currentImages[currentImageIndex]?.replace('w=600', 'w=1200')}
              alt={`Bild ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation Buttons */}
            {currentImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
                  {currentImageIndex + 1} / {currentImages.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
