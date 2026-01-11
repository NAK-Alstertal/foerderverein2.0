import { ReactNode } from 'react';
import churchIllustration from '@/assets/church-illustration.png';

interface HeroBannerProps {
  title: string;
  subtitle?: ReactNode;
}

export function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${churchIllustration})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/80 to-primary/90" />
      
      {/* Rainbow Stripe at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex h-1.5">
        <div className="flex-1 bg-[hsl(var(--logo-coral))]" />
        <div className="flex-1 bg-[hsl(var(--logo-orange))]" />
        <div className="flex-1 bg-[hsl(var(--logo-yellow))]" />
        <div className="flex-1 bg-[hsl(var(--logo-green))]" />
        <div className="flex-1 bg-[hsl(var(--logo-teal))]" />
        <div className="flex-1 bg-[hsl(var(--logo-blue))]" />
        <div className="flex-1 bg-[hsl(var(--logo-purple))]" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="animate-fade-up animation-delay-200 mt-6 text-lg text-primary-foreground/90">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
