import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import churchIllustration from '@/assets/church-illustration.png';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative">
        {/* Background image for subpages */}
        {!isHomePage && (
          <>
            <div 
              className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06] pointer-events-none"
              style={{ 
                backgroundImage: `url(${churchIllustration})`,
                top: '64px' // Account for header height
              }}
            />
            <div className="fixed inset-0 bg-gradient-to-b from-background/50 to-background pointer-events-none" style={{ top: '64px' }} />
          </>
        )}
        <div className="relative z-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
