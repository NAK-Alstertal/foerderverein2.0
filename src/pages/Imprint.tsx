import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';

export default function Imprint() {
  const { language } = useLanguage();

  const title = language === 'de' ? 'Impressum' : 'Imprint';
  const subtitle = language === 'de' 
    ? 'Herzlich Willkommen auf der Website des Fördervereins der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.!'
    : 'Welcome to the website of the Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.!';

  return (
    <Layout>
      <HeroBanner title={title} subtitle={subtitle} />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">

            {/* Two Column Layout for Address, Board, Contact */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left Column - Address */}
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">
                  {language === 'de' ? 'Anschrift' : 'Address'}
                </h2>
                <p className="text-muted-foreground">
                  Förderverein der Neuapostolischen Kirchengemeinde<br />
                  Hamburg-Alstertal e.V.<br />
                  Dweerblöcken 8<br />
                  22393 Hamburg
                </p>
                <p className="text-muted-foreground mt-4">
                  {language === 'de' ? 'Registergericht' : 'Court of Registration'}: Amtsgericht Hamburg<br />
                  {language === 'de' ? 'Vereinsregisternummer' : 'Registration Number'}: VR 25331
                </p>
              </div>

              {/* Right Column - Board & Contact */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    {language === 'de' ? 'Vorstand' : 'Board'}
                  </h2>
                  <p className="text-muted-foreground">
                    Anja Link<br />
                    Prof. Dr. Christoph Großmann<br />
                    Lars Kocherscheid-Dahm
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    {language === 'de' ? 'Kontakt' : 'Contact'}
                  </h2>
                  <p>
                    <a 
                      href="mailto:verein@nak-alstertal.de" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      verein@nak-alstertal.de
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer Section */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                {language === 'de' ? 'Haftungsausschluss' : 'Disclaimer'}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {language === 'de'
                    ? 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.'
                    : 'As a service provider, we are responsible for our own content on these pages in accordance with § 7 para.1 TMG under general law. However, according to §§ 8 to 10 TMG, we as a service provider are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.'}
                </p>
                <p>
                  {language === 'de'
                    ? 'Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.'
                    : 'If we become aware of any legal violations, we will remove this content immediately. Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for the content of the linked pages.'}
                </p>
                <p>
                  {language === 'de'
                    ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.'
                    : 'The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
