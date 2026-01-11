import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/HeroBanner';

export default function Privacy() {
  const { language } = useLanguage();

  return (
    <Layout>
      <HeroBanner title={language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'} />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Intro */}
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'de'
                ? 'Der Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V. nimmt den Schutz Ihrer personenbezogenen Daten sehr ernst. Wir behandeln Ihre Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO).'
                : 'The Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V. takes the protection of your personal data very seriously. We treat your data confidentially and in accordance with legal data protection regulations, particularly the General Data Protection Regulation (GDPR).'}
            </p>

            {/* 1. Verantwortlicher */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {language === 'de' ? '1. Verantwortlicher' : '1. Responsible Party'}
              </h2>
              <div className="text-muted-foreground space-y-1">
                <p>Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.</p>
                <p>Dweerblöcken 8</p>
                <p>22393 Hamburg</p>
                <p>Deutschland</p>
                <p className="mt-4">
                  E-Mail: <a href="mailto:verein@nak-alstertal.de" className="hover:text-primary transition-colors">verein@nak-alstertal.de</a>
                </p>
                <p>
                  Website: <a href="https://verein.nak-alstertal.de" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">https://verein.nak-alstertal.de</a>
                </p>
              </div>
            </div>

            {/* 2. Datenverarbeitung */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {language === 'de' ? '2. Datenverarbeitung beim Besuch der Website' : '2. Data Processing When Visiting the Website'}
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  {language === 'de'
                    ? 'Unsere Website dient ausschließlich der Information. Sie können sie ohne Angabe personenbezogener Daten nutzen.'
                    : 'Our website is for informational purposes only. You can use it without providing personal data.'}
                </p>
                <p>
                  {language === 'de'
                    ? 'Beim Aufruf der Website werden durch den Webserver automatisch folgende Daten verarbeitet:'
                    : 'When accessing the website, the web server automatically processes the following data:'}
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>{language === 'de' ? 'IP-Adresse' : 'IP address'}</li>
                  <li>{language === 'de' ? 'Datum und Uhrzeit des Zugriffs' : 'Date and time of access'}</li>
                  <li>{language === 'de' ? 'aufgerufene Seite' : 'accessed page'}</li>
                  <li>{language === 'de' ? 'Browsertyp und Betriebssystem' : 'Browser type and operating system'}</li>
                </ul>
                <p>
                  {language === 'de'
                    ? 'Diese Daten werden in sogenannten Server-Logfiles gespeichert. Sie dienen ausschließlich dem technischen Betrieb, der Sicherheit und der Fehleranalyse der Website.'
                    : 'This data is stored in so-called server log files. They are used exclusively for technical operation, security, and error analysis of the website.'}
                </p>
                <p>
                  {language === 'de'
                    ? 'Eine Zusammenführung dieser Daten mit anderen Datenquellen oder eine Auswertung zu Marketingzwecken findet nicht statt.'
                    : 'This data is not merged with other data sources or used for marketing purposes.'}
                </p>
                <p>
                  {language === 'de'
                    ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und funktionsfähigen Internetauftritt).'
                    : 'The legal basis is Art. 6 para. 1 lit. f GDPR (legitimate interest in a secure and functional website).'}
                </p>
              </div>
            </div>

            {/* 3. Cookies */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {language === 'de' ? '3. Cookies' : '3. Cookies'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'de'
                  ? 'Unsere Website verwendet keine Cookies, die personenbezogene Daten speichern oder Nutzer verfolgen.'
                  : 'Our website does not use cookies that store personal data or track users.'}
              </p>
            </div>

            {/* 4. Weitergabe */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {language === 'de' ? '4. Weitergabe von Daten' : '4. Data Sharing'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'de'
                  ? 'Ihre Daten werden nicht an Dritte weitergegeben.'
                  : 'Your data will not be shared with third parties.'}
              </p>
            </div>

            {/* 5. Speicherdauer */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {language === 'de' ? '5. Speicherdauer' : '5. Storage Duration'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'de'
                  ? 'Server-Logfiles werden nur so lange gespeichert, wie dies aus technischen oder sicherheitsrelevanten Gründen erforderlich ist, und anschließend gelöscht.'
                  : 'Server log files are only stored for as long as necessary for technical or security reasons, and then deleted.'}
              </p>
            </div>

            {/* 6. Ihre Rechte */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {language === 'de' ? '6. Ihre Rechte' : '6. Your Rights'}
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>{language === 'de' ? 'Sie haben jederzeit folgende Rechte:' : 'You have the following rights at any time:'}</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>{language === 'de' ? 'Auskunft über Ihre gespeicherten Daten' : 'Information about your stored data'}</li>
                  <li>{language === 'de' ? 'Berichtigung unrichtiger Daten' : 'Correction of inaccurate data'}</li>
                  <li>{language === 'de' ? 'Löschung Ihrer Daten' : 'Deletion of your data'}</li>
                  <li>{language === 'de' ? 'Einschränkung der Verarbeitung' : 'Restriction of processing'}</li>
                  <li>{language === 'de' ? 'Widerspruch gegen die Verarbeitung' : 'Objection to processing'}</li>
                </ul>
                <p>
                  {language === 'de'
                    ? 'Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.'
                    : 'You also have the right to lodge a complaint with a data protection supervisory authority.'}
                </p>
              </div>
            </div>

            {/* 7. Kontakt */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {language === 'de' ? '7. Kontakt' : '7. Contact'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'de'
                  ? 'Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte an:'
                  : 'If you have questions about data protection, please contact us at:'}
                {' '}
                <a href="mailto:verein@nak-alstertal.de" className="hover:text-primary transition-colors">
                  verein@nak-alstertal.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
