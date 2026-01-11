import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';

export default function Imprint() {
  const { language } = useLanguage();

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl prose prose-slate dark:prose-invert">
            <h1>{language === 'de' ? 'Impressum' : 'Imprint'}</h1>

            <h2>{language === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}</h2>
            <p>
              Förderverein NAK Alstertal e.V.<br />
              Musterstraße 123<br />
              22297 Hamburg<br />
              Deutschland
            </p>

            <h2>{language === 'de' ? 'Vertreten durch' : 'Represented by'}</h2>
            <p>
              {language === 'de' ? 'Vorstand des Vereins' : 'Board of the association'}
            </p>

            <h2>{language === 'de' ? 'Kontakt' : 'Contact'}</h2>
            <p>
              E-Mail: info@nak-alstertal.de
            </p>

            <h2>{language === 'de' ? 'Registereintrag' : 'Registry entry'}</h2>
            <p>
              {language === 'de' 
                ? 'Eintragung im Vereinsregister.' 
                : 'Entry in the Register of Associations.'}
              <br />
              {language === 'de' ? 'Registergericht' : 'Registry court'}: Amtsgericht Hamburg<br />
              {language === 'de' ? 'Registernummer' : 'Registration number'}: VR XXXXX
            </p>

            <h2>{language === 'de' ? 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV' : 'Responsible for content according to § 55 Abs. 2 RStV'}</h2>
            <p>
              Förderverein NAK Alstertal e.V.<br />
              Musterstraße 123<br />
              22297 Hamburg
            </p>

            <h2>{language === 'de' ? 'Haftungsausschluss' : 'Disclaimer'}</h2>
            
            <h3>{language === 'de' ? 'Haftung für Inhalte' : 'Liability for content'}</h3>
            <p>
              {language === 'de' 
                ? 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.'
                : 'The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness and timeliness of the content.'}
            </p>

            <h3>{language === 'de' ? 'Haftung für Links' : 'Liability for links'}</h3>
            <p>
              {language === 'de'
                ? 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.'
                : 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents.'}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
