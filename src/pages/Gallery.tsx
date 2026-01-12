import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Beispielbilder für die Galerie
const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80', alt: 'Kirchengebäude', category: 'church' },
  { id: 2, src: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&q=80', alt: 'Kirchenfenster', category: 'church' },
  { id: 3, src: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80', alt: 'Gottesdienst', category: 'church' },
  { id: 4, src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', alt: 'Sommerfest 2025', category: 'events' },
  { id: 5, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80', alt: 'Gemeinschaft', category: 'community' },
  { id: 6, src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80', alt: 'Weihnachtskonzert 2025', category: 'events' },
  { id: 7, src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80', alt: 'Ehrenamtliche Helfer', category: 'volunteers' },
  { id: 8, src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80', alt: 'Neujahrsempfang 2026', category: 'events' },
  { id: 9, src: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=800&q=80', alt: 'Orgel', category: 'church' },
  { id: 10, src: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80', alt: 'Bibel und Gesangbuch', category: 'church' },
  { id: 11, src: 'https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?w=800&q=80', alt: 'Jahreshauptversammlung', category: 'events' },
  { id: 12, src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80', alt: 'Vereinsmitglieder', category: 'community' },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <Layout>
      <HeroBanner 
        title={t('gallery.title')} 
        subtitle={t('gallery.subtitle')} 
      />

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg animate-fade-up focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
