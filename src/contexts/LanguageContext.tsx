import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en' | 'fr';

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
    'hero.title': 'Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.',
    'hero.subtitle': 'Gemeinsam Gutes tun – für unsere Gemeinde und darüber hinaus.',
    'hero.cta.membership': 'Mitglied werden',
    'hero.cta.donate': 'Jetzt spenden',

    // About
    'about.title': 'Über unseren Verein',
    'about.purpose.title': 'Unser Zweck',
    'about.purpose.text': 'Zweck des Vereins ist die ideelle und finanzielle Förderung kirchlicher und gemeinnütziger Zwecke der Neuapostolischen Kirchengemeinde Hamburg-Alstertal. Hierzu gehören insbesondere die Förderung von Aktivitäten, die der Glaubenspflege, der Förderung christlicher Werte und dem Aufbau eines gemeinschaftlichen Lebens dienen.',
    'about.goals.title': 'Unsere Ziele',
    'about.goals.text': 'Der Verein sammelt Spenden und Zuwendungen, um Projekte und Vorhaben, die diesen Zielen dienen, finanziell zu unterstützen. Durch die enge Zusammenarbeit mit der Kirchengemeinde und den Mitgliedern des Vereins werden Maßnahmen ergriffen, um die Gemeinschaft zu stärken und nachhaltig positive Impulse zu setzen.',
    'about.subtitle': 'Wir fördern kirchliches Leben und soziale Gemeinschaft nachhaltig.',
    'about.statute.title': 'Satzung',
    'about.statute.text': 'Laden Sie unsere vollständige Vereinssatzung herunter.',
    'about.statute.download': 'Satzung herunterladen (PDF)',

    // Membership
    'membership.title': 'Mitglied werden',
    'membership.subtitle': 'Wir laden alle ein, die unsere Ziele und Werte teilen, Teil unseres Fördervereins zu werden.',
    'membership.intro': 'Als Mitglied unterstützt du aktiv die in unserer Satzung festgelegten Zwecke und trägst dazu bei, unsere Gemeindearbeit und gemeinnützigen Projekte zu fördern. Jede natürliche oder juristische Person kann Mitglied werden, die unsere Ziele unterstützt und bereit ist, die Satzung des Vereins anzuerkennen. Es gibt keine weiteren Einschränkungen außer den üblichen gesetzlichen Vorgaben für die Mitgliedschaft in Vereinen.',
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
    'donate.intro': 'Mit deiner Spende unterstützt du unsere gemeinnützige Arbeit.',
    'donate.bank.title': 'Bankverbindung',
    'donate.bank.name': 'Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.',
    'donate.bank.iban': 'IBAN: DE35 2005 0550 1504 8483 81',
    'donate.bank.bic': 'BIC: HASPDEHHXXX',
    'donate.bank.reference': 'Verwendungszweck: Spende - << Dein Name >>',
    'donate.paypal.title': 'Online spenden',
    'donate.paypal.text': 'Schnell und einfach über PayPal spenden:',
    'donate.paypal.button': 'Mit PayPal spenden',
    'donate.receipt.title': 'Spendenquittung',
    'donate.receipt.text': 'Als gemeinnütziger Verein stellen wir dir gerne eine Spendenquittung für deine Steuererklärung aus.',

    // News
    'news.title': 'Aktuelles',
    'news.subtitle': 'Neues und Aktuelles aus unserem Verein',

    // Gallery
    'gallery.title': 'Bildergalerie',
    'gallery.subtitle': 'Eindrücke aus unserem Vereinsleben',

    // Contact
    'contact.title': 'Kontakt',
    'contact.intro': 'Hast du Fragen? Wir freuen uns auf deine Nachricht!',
    'contact.email.button': 'E-Mail schreiben',
    'contact.address.title': 'Anschrift',
    'contact.form.title': 'Nachricht senden',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.sending': 'Wird gesendet…',
    'contact.form.success': 'Vielen Dank! Wir melden uns bald bei dir.',
    'contact.form.error': 'Etwas ist schiefgelaufen. Bitte versuch es später nochmal.',

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
    'hero.title': 'Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.',
    'hero.subtitle': 'Doing good together – for our community and beyond.',
    'hero.cta.membership': 'Become a Member',
    'hero.cta.donate': 'Donate Now',

    // About
    'about.title': 'About Our Association',
    'about.purpose.title': 'Our Purpose',
    'about.purpose.text': 'The purpose of the association is the ideal and financial support of ecclesiastical and charitable purposes of the New Apostolic Church congregation Hamburg-Alstertal. This includes in particular the promotion of activities that serve the cultivation of faith, the promotion of Christian values and the building of community life.',
    'about.goals.title': 'Our Goals',
    'about.goals.text': 'The association collects donations and contributions to financially support projects and initiatives that serve these goals. Through close cooperation with the church congregation and the members of the association, measures are taken to strengthen the community and create lasting positive impact.',
    'about.subtitle': 'We promote church life and social community sustainably.',
    'about.statute.title': 'Statute',
    'about.statute.text': 'Download our complete association statute.',
    'about.statute.download': 'Download Statute (PDF)',

    'membership.title': 'Become a Member',
    'membership.subtitle': 'We invite everyone who shares our goals and values to become part of our support association.',
    'membership.intro': 'As a member, you actively support the purposes set out in our statutes and contribute to promoting our community work and charitable projects. Any natural or legal person who supports our goals and is willing to recognize the statutes of the association can become a member. There are no further restrictions other than the usual legal requirements for membership in associations.',
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
    'donate.bank.name': 'Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.',
    'donate.bank.iban': 'IBAN: DE35 2005 0550 1504 8483 81',
    'donate.bank.bic': 'BIC: HASPDEHHXXX',
    'donate.bank.reference': 'Reference: Donation - << Your Name >>',
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
    'contact.form.title': 'Send a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending…',
    'contact.form.success': 'Thank you! We will get back to you soon.',
    'contact.form.error': 'Something went wrong. Please try again later.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.nonprofit': 'Non-profit organization',

    // Common
    'common.learnMore': 'Learn More',
    'common.back': 'Back',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.membership': 'Adhérer',
    'nav.donate': 'Faire un don',
    'nav.news': 'Actualités',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    'nav.imprint': 'Mentions légales',
    'nav.privacy': 'Confidentialité',

    // Hero
    'hero.title': 'Förderverein NAK Alstertal',
    'hero.subtitle': 'Agir ensemble – pour notre communauté et au-delà.',
    'hero.cta.membership': 'Devenir membre',
    'hero.cta.donate': 'Faire un don',

    // About
    'about.title': 'Notre association',
    'about.purpose.title': 'Notre mission',
    'about.purpose.text': "L'association a pour but le soutien idéel et financier des objectifs ecclésiastiques et caritatifs de la congrégation néo-apostolique Hamburg-Alstertal.",
    'about.goals.title': 'Nos objectifs',
    'about.goals.text': "L'association collecte des dons pour soutenir financièrement les projets correspondant à ces objectifs. En étroite collaboration avec la congrégation, des mesures sont prises pour renforcer la communauté.",
    'about.subtitle': 'Nous soutenons la vie ecclésiale et la communauté sociale de façon durable.',
    'about.statute.title': 'Statuts',
    'about.statute.text': 'Téléchargez nos statuts complets.',
    'about.statute.download': 'Télécharger les statuts (PDF)',

    // Membership
    'membership.title': 'Adhérer',
    'membership.subtitle': 'Nous invitons toute personne partageant nos valeurs à rejoindre notre association.',
    'membership.intro': "En tant que membre, vous soutenez activement les objectifs de nos statuts. Toute personne physique ou morale partageant nos buts peut devenir membre.",
    'membership.benefits.title': 'Avantages',
    'membership.benefits.1': "Participation active aux activités de l'association",
    'membership.benefits.2': 'Invitations à des événements exclusifs',
    'membership.benefits.3': 'Informations régulières sur les projets',
    'membership.benefits.4': 'Cotisations déductibles des impôts',
    'membership.fee.title': 'Cotisation annuelle',
    'membership.fee.text': 'La cotisation minimale est de 24 € par an (ou 2 € par mois).',
    'membership.sepa.title': 'Paiement par prélèvement SEPA',
    'membership.sepa.text': 'La cotisation est prélevée annuellement par prélèvement SEPA.',
    'membership.form.download': "Télécharger le formulaire d'adhésion (PDF)",

    // Donate
    'donate.title': 'Faire un don',
    'donate.intro': 'Votre don soutient notre travail caritatif.',
    'donate.bank.title': 'Coordonnées bancaires',
    'donate.bank.name': 'Förderverein NAK Alstertal e.V.',
    'donate.bank.iban': 'IBAN : DE35 2005 0550 1504 8483 81',
    'donate.bank.bic': 'BIC : HASPDEHHXXX',
    'donate.bank.reference': 'Référence : Don - << Votre nom >>',
    'donate.paypal.title': 'Don en ligne',
    'donate.paypal.text': 'Don rapide et facile via PayPal :',
    'donate.paypal.button': 'Donner via PayPal',
    'donate.receipt.title': 'Reçu fiscal',
    'donate.receipt.text': "En tant qu'association reconnue d'utilité publique, nous vous délivrons volontiers un reçu fiscal.",

    // News
    'news.title': 'Actualités',
    'news.subtitle': "Nouvelles et événements de l'association",

    // Gallery
    'gallery.title': 'Galerie photos',
    'gallery.subtitle': "Impressions de la vie de l'association",

    // Contact
    'contact.title': 'Contact',
    'contact.intro': 'Des questions ? Nous sommes à votre écoute !',
    'contact.email.button': 'Envoyer un e-mail',
    'contact.address.title': 'Adresse',
    'contact.form.title': 'Envoyer un message',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Adresse e-mail',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer',
    'contact.form.sending': 'Envoi en cours…',
    'contact.form.success': 'Merci ! Nous vous répondrons dans les plus brefs délais.',
    'contact.form.error': 'Une erreur est survenue. Veuillez réessayer plus tard.',

    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.nonprofit': 'Association à but non lucratif',

    // Common
    'common.learnMore': 'En savoir plus',
    'common.back': 'Retour',
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
