import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';
import { ArrowRight, Heart, Users, Calendar } from 'lucide-react';
import churchIllustration from '@/assets/church-illustration.png';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t('nav.about'),
      description: 'Erfahre mehr über unseren Verein und unsere Ziele.',
      descriptionEn: 'Learn more about our association and our goals.',
      href: '/about',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop',
    },
    {
      icon: Heart,
      title: t('nav.donate'),
      description: 'Unterstütze unsere Arbeit mit einer Spende.',
      descriptionEn: 'Support our work with a donation.',
      href: '/donate',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=250&fit=crop',
    },
    {
      icon: Calendar,
      title: t('nav.news'),
      description: 'Neues und Aktuelles aus unserem Verein.',
      descriptionEn: 'Updates and news from our association.',
      href: '/news',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop',
    },
  ];

  return (
    <Layout>
      {/* Hero Section with Church Illustration */}
      <section className="relative h-[280px] md:h-[440px] flex items-center overflow-hidden">
        {/* Background with church illustration */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${churchIllustration})` }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50" />
        
        {/* Rainbow accent bar on left - like in the illustration */}
        <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col">
          <div className="flex-1 bg-[hsl(var(--logo-coral))]" />
          <div className="flex-1 bg-[hsl(var(--logo-orange))]" />
          <div className="flex-1 bg-[hsl(var(--logo-yellow))]" />
          <div className="flex-1 bg-[hsl(var(--logo-green))]" />
          <div className="flex-1 bg-[hsl(var(--logo-teal))]" />
          <div className="flex-1 bg-[hsl(var(--logo-purple))]" />
        </div>
        
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-up text-2xl font-bold tracking-tight text-white drop-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl">
              Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.
            </h1>
            <p className="animate-fade-up animation-delay-200 mt-6 text-lg text-white/95 drop-shadow md:text-xl">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] md:h-[80px] lg:h-[100px] xl:h-[120px] 2xl:h-[140px]" preserveAspectRatio="none">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-8 pb-8 md:pt-12 md:pb-12">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={feature.href} 
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                    <feature.icon className="h-5 w-5" />
                  </div>
                </div>
                <CardHeader className="pt-4 pb-2">
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {feature.description}
                  </CardDescription>
                  <Link 
                    to={feature.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    {t('common.learnMore')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-12">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Werde Teil unserer Gemeinschaft
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Als Mitglied oder Spender unterstützt du unsere gemeinnützige Arbeit und hilfst uns, Gutes zu tun.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="accent">
                <Link to="/membership">
                  {t('hero.cta.membership')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  {t('nav.contact')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
