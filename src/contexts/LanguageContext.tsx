import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.membership': 'Mitglied werden',
    'nav.donate': 'Spenden',
    'nav.news': 'Aktuelles',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Kontakt',
    'nav.imprint': 'Impressum',
    'nav.privacy': 'Datenschutz',

    // Hero
    'hero.title': 'Förderverein NAK Alstertal',
    'hero.subtitle': 'Gemeinsam Gutes tun – für unsere Gemeinde und darüber hinaus',
    'hero.cta.membership': 'Mitglied werden',
    'hero.cta.donate': 'Jetzt spenden',

    // About
    'about.title': 'Über unseren Verein',
    'about.purpose.title': 'Unser Zweck',
    'about.purpose.text': 'Der Förderverein NAK Alstertal e.V. unterstützt die Neuapostolische Kirche Hamburg-Alstertal bei der Erfüllung ihrer kirchlichen und sozialen Aufgaben.',
    'about.goals.title': 'Unsere Ziele',
    'about.goals.text': 'Wir fördern gemeinnützige, mildtätige und kirchliche Zwecke durch finanzielle Unterstützung von Projekten, Veranstaltungen und sozialen Initiativen.',
    'about.statute.title': 'Satzung',
    'about.statute.text': 'Laden Sie unsere vollständige Vereinssatzung herunter.',
    'about.statute.download': 'Satzung herunterladen (PDF)',

    // Membership
    'membership.title': 'Mitglied werden',
    'membership.intro': 'Werden Sie Teil unserer Gemeinschaft und unterstützen Sie unsere Arbeit.',
    'membership.benefits.title': 'Vorteile der Mitgliedschaft',
    'membership.benefits.1': 'Aktive Mitgestaltung der Vereinsarbeit',
    'membership.benefits.2': 'Einladungen zu exklusiven Veranstaltungen',
    'membership.benefits.3': 'Regelmäßige Informationen über Projekte',
    'membership.benefits.4': 'Steuerlich absetzbare Mitgliedsbeiträge',
    'membership.fee.title': 'Jahresbeitrag',
    'membership.fee.text': 'Der Mindestjahresbeitrag beträgt 24 € (oder monatlich 2 €). Höhere Beiträge sind herzlich willkommen.',
    'membership.sepa.title': 'Bequeme Zahlung per SEPA-Lastschrift',
    'membership.sepa.text': 'Der Mitgliedsbeitrag wird jährlich bequem per SEPA-Lastschrift eingezogen.',
    'membership.form.download': 'Mitgliedsantrag herunterladen (PDF)',

    // Donate
    'donate.title': 'Spenden',
    'donate.intro': 'Mit Ihrer Spende unterstützen Sie unsere gemeinnützige Arbeit.',
    'donate.bank.title': 'Bankverbindung',
    'donate.bank.name': 'Förderverein NAK Alstertal e.V.',
    'donate.bank.iban': 'IBAN: DE XX XXXX XXXX XXXX XXXX XX',
    'donate.bank.bic': 'BIC: XXXXXXXX',
    'donate.bank.reference': 'Verwendungszweck: Spende',
    'donate.paypal.title': 'Online spenden',
    'donate.paypal.text': 'Schnell und einfach über PayPal spenden:',
    'donate.paypal.button': 'Mit PayPal spenden',
    'donate.receipt.title': 'Spendenquittung',
    'donate.receipt.text': 'Als gemeinnütziger Verein stellen wir Ihnen gerne eine Spendenquittung für Ihre Steuererklärung aus.',

    // News
    'news.title': 'Aktuelles',
    'news.subtitle': 'Neuigkeiten und Veranstaltungen aus unserem Verein',

    // Gallery
    'gallery.title': 'Bildergalerie',
    'gallery.subtitle': 'Eindrücke aus unserem Vereinsleben',

    // Contact
    'contact.title': 'Kontakt',
    'contact.intro': 'Haben Sie Fragen? Wir freuen uns auf Ihre Nachricht!',
    'contact.email.button': 'E-Mail schreiben',
    'contact.address.title': 'Anschrift',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.nonprofit': 'Gemeinnütziger Verein',

    // Common
    'common.learnMore': 'Mehr erfahren',
    'common.back': 'Zurück',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.membership': 'Join Us',
    'nav.donate': 'Donate',
    'nav.news': 'News',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.imprint': 'Imprint',
    'nav.privacy': 'Privacy Policy',

    // Hero
    'hero.title': 'Förderverein NAK Alstertal',
    'hero.subtitle': 'Doing good together – for our community and beyond',
    'hero.cta.membership': 'Become a Member',
    'hero.cta.donate': 'Donate Now',

    // About
    'about.title': 'About Our Association',
    'about.purpose.title': 'Our Purpose',
    'about.purpose.text': 'The Förderverein NAK Alstertal e.V. supports the New Apostolic Church Hamburg-Alstertal in fulfilling its ecclesiastical and social tasks.',
    'about.goals.title': 'Our Goals',
    'about.goals.text': 'We promote charitable, benevolent and ecclesiastical purposes through financial support of projects, events and social initiatives.',
    'about.statute.title': 'Statute',
    'about.statute.text': 'Download our complete association statute.',
    'about.statute.download': 'Download Statute (PDF)',

    // Membership
    'membership.title': 'Become a Member',
    'membership.intro': 'Become part of our community and support our work.',
    'membership.benefits.title': 'Membership Benefits',
    'membership.benefits.1': 'Active participation in association activities',
    'membership.benefits.2': 'Invitations to exclusive events',
    'membership.benefits.3': 'Regular updates on projects',
    'membership.benefits.4': 'Tax-deductible membership fees',
    'membership.fee.title': 'Annual Fee',
    'membership.fee.text': 'The minimum annual fee is €24 (or €2 monthly). Higher contributions are welcome.',
    'membership.sepa.title': 'Convenient Payment via SEPA Direct Debit',
    'membership.sepa.text': 'The membership fee is conveniently collected annually via SEPA direct debit.',
    'membership.form.download': 'Download Membership Application (PDF)',

    // Donate
    'donate.title': 'Donate',
    'donate.intro': 'Your donation supports our charitable work.',
    'donate.bank.title': 'Bank Details',
    'donate.bank.name': 'Förderverein NAK Alstertal e.V.',
    'donate.bank.iban': 'IBAN: DE XX XXXX XXXX XXXX XXXX XX',
    'donate.bank.bic': 'BIC: XXXXXXXX',
    'donate.bank.reference': 'Reference: Donation',
    'donate.paypal.title': 'Donate Online',
    'donate.paypal.text': 'Quick and easy donation via PayPal:',
    'donate.paypal.button': 'Donate with PayPal',
    'donate.receipt.title': 'Donation Receipt',
    'donate.receipt.text': 'As a non-profit organization, we are happy to provide you with a donation receipt for your tax return.',

    // News
    'news.title': 'News',
    'news.subtitle': 'Updates and events from our association',

    // Gallery
    'gallery.title': 'Photo Gallery',
    'gallery.subtitle': 'Impressions from our association life',

    // Contact
    'contact.title': 'Contact',
    'contact.intro': 'Have questions? We look forward to hearing from you!',
    'contact.email.button': 'Send Email',
    'contact.address.title': 'Address',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.nonprofit': 'Non-profit organization',

    // Common
    'common.learnMore': 'Learn More',
    'common.back': 'Back',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
