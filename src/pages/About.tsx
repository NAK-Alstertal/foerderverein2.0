import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Target, Users } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  const cards = [
    {
      icon: Target,
      title: t('about.purpose.title'),
      text: t('about.purpose.text'),
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=250&fit=crop',
    },
    {
      icon: Users,
      title: t('about.goals.title'),
      text: t('about.goals.text'),
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop',
    },
  ];

  return (
    <Layout>
      <HeroBanner title={t('about.title')} subtitle={t('about.subtitle')} />

      {/* Content */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Purpose & Goals Cards */}
            {cards.map((card, index) => (
              <Card 
                key={card.title} 
                className="group animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                    <card.icon className="h-5 w-5" />
                  </div>
                </div>
                <CardHeader className="pt-4 pb-2">
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {card.text}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}

            {/* Statute Card */}
            <Card className="group animate-fade-up animation-delay-200 overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop" 
                  alt={t('about.statute.title')}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                  <FileText className="h-5 w-5" />
                </div>
              </div>
              <CardHeader className="pt-4 pb-2">
                <CardTitle>{t('about.statute.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {t('about.statute.text')}
                </CardDescription>
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
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
