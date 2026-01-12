import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Landmark, CreditCard, Receipt, ExternalLink } from 'lucide-react';

export default function Donate() {
  const { t } = useLanguage();

  return (
    <Layout>
      <HeroBanner 
        title={t('donate.title')} 
        subtitle={t('donate.intro')} 
      />

      {/* Content */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Bank Transfer */}
            <Card className="group animate-fade-up overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop" 
                  alt={t('donate.bank.title')}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                  <Landmark className="h-5 w-5" />
                </div>
              </div>
              <CardHeader className="pt-4 pb-2">
                <CardTitle>{t('donate.bank.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-secondary/50 p-4 space-y-2">
                  <p className="font-semibold text-foreground">{t('donate.bank.name')}</p>
                  <p className="text-muted-foreground font-mono text-sm">{t('donate.bank.iban')}</p>
                  <p className="text-muted-foreground font-mono text-sm">{t('donate.bank.bic')}</p>
                  <p className="text-muted-foreground text-sm">{t('donate.bank.reference')}</p>
                </div>
              </CardContent>
            </Card>

            {/* PayPal */}
            <Card className="group animate-fade-up animation-delay-100 overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop" 
                  alt={t('donate.paypal.title')}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg">
                  <CreditCard className="h-5 w-5" />
                </div>
              </div>
              <CardHeader className="pt-4 pb-2">
                <CardTitle>{t('donate.paypal.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {t('donate.paypal.text')}
                </CardDescription>
                <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <a 
                    href="https://www.paypal.com/donate" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {t('donate.paypal.button')}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Receipt Info */}
          <Card className="group mt-8 animate-fade-up animation-delay-200 overflow-hidden">
            <div className="relative h-40 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=250&fit=crop" 
                alt={t('donate.receipt.title')}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                <Receipt className="h-5 w-5" />
              </div>
            </div>
            <CardHeader className="pt-4 pb-2">
              <CardTitle>{t('donate.receipt.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {t('donate.receipt.text')}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
