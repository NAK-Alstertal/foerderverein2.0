import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';

export default function Privacy() {
  const { language } = useLanguage();

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl prose prose-slate dark:prose-invert">
            <h1>{language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}</h1>

            <h2>{language === 'de' ? '1. Datenschutz auf einen Blick' : '1. Privacy at a Glance'}</h2>
            
            <h3>{language === 'de' ? 'Allgemeine Hinweise' : 'General Information'}</h3>
            <p>
              {language === 'de'
                ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.'
                : 'The following notes provide a simple overview of what happens to your personal data when you visit this website.'}
            </p>

            <h3>{language === 'de' ? 'Datenerfassung auf dieser Website' : 'Data collection on this website'}</h3>
            <p>
              {language === 'de'
                ? 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Impressum dieser Website entnehmen.'
                : 'Data processing on this website is carried out by the website operator. You can find the contact details in the imprint of this website.'}
            </p>

            <h2>{language === 'de' ? '2. Hosting' : '2. Hosting'}</h2>
            <p>
              {language === 'de'
                ? 'Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.'
                : 'This website is hosted externally. The personal data collected on this website are stored on the servers of the host.'}
            </p>

            <h2>{language === 'de' ? '3. Allgemeine Hinweise und Pflichtinformationen' : '3. General Notes and Mandatory Information'}</h2>
            
            <h3>{language === 'de' ? 'Datenschutz' : 'Data Protection'}</h3>
            <p>
              {language === 'de'
                ? 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.'
                : 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.'}
            </p>

            <h3>{language === 'de' ? 'Verantwortliche Stelle' : 'Responsible Entity'}</h3>
            <p>
              {language === 'de' ? 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:' : 'The responsible entity for data processing on this website is:'}
            </p>
            <p>
              Förderverein NAK Alstertal e.V.<br />
              Musterstraße 123<br />
              22297 Hamburg<br />
              E-Mail: info@nak-alstertal.de
            </p>

            <h3>{language === 'de' ? 'Widerruf Ihrer Einwilligung zur Datenverarbeitung' : 'Revocation of Your Consent to Data Processing'}</h3>
            <p>
              {language === 'de'
                ? 'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns.'
                : 'Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. An informal email to us is sufficient.'}
            </p>

            <h2>{language === 'de' ? '4. Datenerfassung auf dieser Website' : '4. Data Collection on This Website'}</h2>
            
            <h3>Cookies</h3>
            <p>
              {language === 'de'
                ? 'Diese Website verwendet keine Cookies zur Analyse des Nutzerverhaltens.'
                : 'This website does not use cookies to analyze user behavior.'}
            </p>

            <h3>{language === 'de' ? 'Kontaktaufnahme' : 'Contact'}</h3>
            <p>
              {language === 'de'
                ? 'Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.'
                : 'If you contact us by email, your request including all personal data arising from it will be stored and processed by us for the purpose of handling your request.'}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
