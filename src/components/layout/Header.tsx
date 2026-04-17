import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

const LANGUAGES = [
  { code: 'de', label: 'Deutsch',  flag: <svg viewBox="0 0 5 3" width={20} height={12}><rect width="5" height="1" y="0" fill="#000"/><rect width="5" height="1" y="1" fill="#D00"/><rect width="5" height="1" y="2" fill="#FFCE00"/></svg> },
  { code: 'en', label: 'English',  flag: <svg viewBox="0 0 60 30" width={20} height={10}><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2"/><path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/></svg> },
  { code: 'fr', label: 'Français', flag: <svg viewBox="0 0 3 2" width={20} height={13}><rect width="1" height="2" x="0" fill="#002395"/><rect width="1" height="2" x="1" fill="#fff"/><rect width="1" height="2" x="2" fill="#ED2939"/></svg> },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/membership', label: t('nav.membership') },
    { href: '/donate', label: t('nav.donate') },
    { href: '/news', label: t('nav.news') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const activeLang = LANGUAGES.find(l => l.code === language) ?? LANGUAGES[0];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V. Logo" 
            className="h-11 w-11 rounded-lg transition-transform duration-200 hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium transition-colors hover:text-orange-600",
                "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300",
                location.pathname === item.href
                  ? "text-orange-600 after:w-2/3"
                  : "text-muted-foreground after:w-0 hover:after:w-2/3"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-1.5 h-9 px-2 rounded-md hover:bg-accent transition-colors">
                {activeLang.flag}
                <span className="text-sm font-medium">{activeLang.code.toUpperCase()}</span>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[160px] p-1">
              {LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-sm text-sm transition-colors ${lang.code === language ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}
                  onClick={() => setLanguage(lang.code)}
                >
                  {lang.flag}
                  <span>{lang.label}</span>
                </button>
              ))}
            </PopoverContent>
          </Popover>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-orange-400/20 hover:text-orange-600",
                  location.pathname === item.href
                    ? "bg-orange-400/30 text-orange-600"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
