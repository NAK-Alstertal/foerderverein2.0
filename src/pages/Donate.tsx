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
            <Card className="animate-fade-up">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Landmark className="h-6 w-6" />
                </div>
                <CardTitle>{t('donate.bank.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-secondary/50 p-4 space-y-2">
                  <p className="font-semibold text-foreground">{t('donate.bank.name')}</p>
                  <p className="text-muted-foreground font-mono text-sm">{t('donate.bank.iban')}</p>
                  <p className="text-muted-foreground font-mono text-sm">{t('donate.bank.bic')}</p>
                  <p className="text-muted-foreground text-sm">{t('donate.bank.bank')}</p>
                  <p className="text-muted-foreground text-sm">{t('donate.bank.reference')}</p>
                </div>
              </CardContent>
            </Card>

            {/* PayPal */}
            <Card className="animate-fade-up animation-delay-100">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <CreditCard className="h-6 w-6" />
                </div>
                <CardTitle>{t('donate.paypal.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {t('donate.paypal.text')}
                </CardDescription>
                <Button size="lg" className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white" asChild>
                  <a 
                    href="https://paypal.me/nakalstertal" 
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
          <Card className="mt-8 animate-fade-up animation-delay-200">
            <CardHeader>
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Receipt className="h-6 w-6" />
              </div>
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
