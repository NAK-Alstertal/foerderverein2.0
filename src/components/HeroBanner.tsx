import { ReactNode } from 'react';
import churchIllustration from '@/assets/church-illustration.png';

interface HeroBannerProps {
  title: string;
  subtitle?: ReactNode;
}

export function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <section className="relative h-[280px] md:h-[480px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${churchIllustration})` }}
      />
      {/* Dark Overlay */}
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

      {/* Content */}
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="animate-fade-up animation-delay-200 mt-6 text-lg text-white/95 drop-shadow">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-[60px] md:h-[80px] lg:h-[100px] xl:h-[120px] 2xl:h-[140px]"
          preserveAspectRatio="none"
        >
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
}
