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
    date: '2026-01-15',
    titleDe: 'Projekt Technikumbau 2026',
    titleEn: 'Technology Upgrade Project 2026',
    contentDe: 'Wir planen ein umfassendes Streaming-Update für unsere Gottesdienste und Veranstaltungen. Mit moderner Technik möchten wir unsere Gemeinde auch digital erreichen und Gottesdienste in hoher Qualität übertragen. Dafür sammeln wir Spenden – unterstütze uns dabei!',
    contentEn: 'We are planning a comprehensive streaming update for our services and events. With modern technology, we want to reach our congregation digitally and broadcast services in high quality. We are collecting donations for this project – support us!',
    images: [],
  },
  {
    id: 2,
    date: '2025-11-20',
    titleDe: 'Projekt Orgel – Neues drittes Manual',
    titleEn: 'Organ Project – New Third Manual',
    contentDe: 'Unsere Kirche bekommt eine neue Orgel! Um das Instrument mit einem dritten Manual zu vervollständigen, sammeln wir Spenden. Ein drittes Manual erweitert die klanglichen Möglichkeiten erheblich und bereichert unsere Gottesdienste und Konzerte.',
    contentEn: 'Our church is getting a new organ! To complete the instrument with a third manual, we are collecting donations. A third manual significantly expands the tonal possibilities and enriches our services and concerts.',
    images: [],
  },
  {
    id: 3,
    date: '2025-09-05',
    titleDe: 'Projekt Garten – Spielfläche für Kinder',
    titleEn: 'Garden Project – Play Area for Children',
    contentDe: 'Unser Kirchgarten soll eine Spielfläche für Kinder erhalten! Wir planen einen kindgerechten Bereich, in dem die Kleinen spielen und toben können, während die Eltern in Ruhe an Gemeindeveranstaltungen teilnehmen. Ein Ort der Begegnung für die ganze Familie.',
    contentEn: 'Our church garden is getting a play area for children! We are planning a child-friendly space where the little ones can play while parents attend community events. A meeting place for the whole family.',
    images: [],
  },
  {
    id: 4,
    date: '2025-07-10',
    titleDe: 'Projekt Hütte – Raum für Jugendliche',
    titleEn: 'Cabin Project – Space for Youth',
    contentDe: 'Wir bauen die Hütte in unserem Garten zu einem Treffpunkt für Jugendliche aus. Hier sollen junge Menschen einen eigenen Raum bekommen, um sich zu treffen, kreativ zu sein und Gemeinschaft zu erleben. Ein wichtiges Projekt für die Zukunft unserer Gemeinde.',
    contentEn: 'We are converting the cabin in our garden into a meeting place for young people. Here, young people will have their own space to meet, be creative, and experience community. An important project for the future of our congregation.',
    images: [],
  },
  {
    id: 5,
    date: '2025-03-15',
    titleDe: 'Zuwendung der Sparkasse Hamburg',
    titleEn: 'Grant from Sparkasse Hamburg',
    contentDe: 'Wir freuen uns sehr über eine großzügige Zuwendung von 2.000 € von der Sparkasse Hamburg für unser Projekt "Hütte"! Diese Förderung bringt uns einen großen Schritt näher an die Verwirklichung unseres Jugendraums. Herzlichen Dank an die Sparkasse Hamburg!',
    contentEn: 'We are very pleased about a generous grant of €2,000 from Sparkasse Hamburg for our "Cabin" project! This funding brings us a big step closer to realizing our youth space. Many thanks to Sparkasse Hamburg!',
    images: [],
  },
  {
    id: 6,
    date: '2024-06-15',
    titleDe: 'Gründung des Vereins',
    titleEn: 'Foundation of the Association',
    contentDe: 'Im Juni 2024 wurde unser Verein offiziell gegründet! Mit großer Freude und Engagement haben sich engagierte Mitglieder zusammengefunden, um unsere Kirche und Gemeinde zu unterstützen und zu fördern. Dies markiert den Beginn unserer gemeinsamen Arbeit für den Erhalt und die Weiterentwicklung unserer Gemeinde.',
    contentEn: 'In June 2024, our association was officially founded! With great joy and commitment, dedicated members came together to support and promote our church and congregation. This marks the beginning of our joint work for the preservation and development of our community.',
    images: [],
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
