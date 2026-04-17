import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import gemeindeAussen from '@/assets/gemeinde-aussen.jpg';

const CONTACT_ENDPOINT = 'https://verein.nak-alstertal.de/contact/';

export default function Contact() {
  const { t } = useLanguage();

  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus]   = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      setStatus('success');
      setName(''); setEmail(''); setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Layout>
      <HeroBanner
        title={t('contact.title')}
        subtitle={t('contact.intro')}
      />

      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container">
          <div className="mx-auto max-w-2xl space-y-8">

            {/* Address card */}
            <Card className="group animate-fade-up overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={gemeindeAussen}
                  alt={t('contact.address.title')}
                  className="w-full h-full object-cover object-right transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
              <CardHeader className="pt-4 pb-2">
                <CardTitle>{t('contact.address.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <address className="not-italic text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.</p>
                  <p>Dweerblöcken 8</p>
                  <p>22393 Hamburg</p>
                  <p>Deutschland</p>
                </address>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="animate-fade-up animation-delay-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  {t('contact.form.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {status === 'success' ? (
                  <div className="flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-700">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm font-medium">{t('contact.form.success')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">
                          {t('contact.form.name')} *
                        </label>
                        <Input
                          value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder={t('contact.form.name')}
                          required
                          disabled={status === 'sending'}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">
                          {t('contact.form.email')} *
                        </label>
                        <Input
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="name@beispiel.de"
                          required
                          disabled={status === 'sending'}
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">
                        {t('contact.form.message')} *
                      </label>
                      <Textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder={t('contact.form.message')}
                        rows={5}
                        required
                        disabled={status === 'sending'}
                        className="resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-3 rounded-lg bg-red-50 p-3 text-red-700">
                        <AlertCircle className="h-4 w-4 flex-shrink-0" />
                        <p className="text-sm">{t('contact.form.error')}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      disabled={status === 'sending'}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </Layout>
  );
}
