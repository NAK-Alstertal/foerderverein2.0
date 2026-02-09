import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      {/* Rainbow stripe at top of footer */}
      <div className="flex h-1.5">
        <div className="flex-1 bg-[hsl(var(--logo-coral))]" />
        <div className="flex-1 bg-[hsl(var(--logo-orange))]" />
        <div className="flex-1 bg-[hsl(var(--logo-yellow))]" />
        <div className="flex-1 bg-[hsl(var(--logo-green))]" />
        <div className="flex-1 bg-[hsl(var(--logo-teal))]" />
        <div className="flex-1 bg-[hsl(var(--logo-blue))]" />
        <div className="flex-1 bg-[hsl(var(--logo-purple))]" />
      </div>
      
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V. Logo" 
                className="h-11 w-11 rounded-lg"
              />
              <span className="font-semibold text-foreground">
                Förderverein der Neuapostolischen Kirchengemeinde<br />
                Hamburg-Alstertal e.V.
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t('footer.nonprofit')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/membership" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.membership')}
              </Link>
              <Link to="/donate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.donate')}
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Rechtliches</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/imprint" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.imprint')}
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.privacy')}
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V. {t('footer.rights')}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-accent fill-accent" /> in Hamburg
              </p>
              <span className="text-sm text-muted-foreground">
                v{import.meta.env.PACKAGE_VERSION}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
