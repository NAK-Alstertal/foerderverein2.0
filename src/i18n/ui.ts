// src/i18n/ui.ts
// Übersetzungen (de/en/fr) — portiert aus dem alten LanguageContext.
// Verwendung in .astro: const t = useTranslations(lang); t('nav.home')

export const languages = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
} as const;

export const defaultLang = 'de';
export type Lang = keyof typeof languages;

export const ui = {
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.membership': 'Mitglied werden',
    'nav.donate': 'Spenden',
    'nav.news': 'Aktuelles',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Kontakt',
    'nav.imprint': 'Impressum',
    'nav.privacy': 'Datenschutz',

    'hero.title': 'Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.',
    'hero.subtitle': 'Gemeinsam Gutes tun – für unsere Gemeinde und darüber hinaus.',
    'hero.cta.membership': 'Mitglied werden',
    'hero.cta.donate': 'Jetzt spenden',

    'about.title': 'Über unseren Verein',
    'about.purpose.title': 'Unser Zweck',
    'about.purpose.text': 'Zweck des Vereins ist die ideelle und finanzielle Förderung kirchlicher und gemeinnütziger Zwecke der Neuapostolischen Kirchengemeinde Hamburg-Alstertal. Hierzu gehören insbesondere die Förderung von Aktivitäten, die der Glaubenspflege, der Förderung christlicher Werte und dem Aufbau eines gemeinschaftlichen Lebens dienen.',
    'about.goals.title': 'Unsere Ziele',
    'about.goals.text': 'Der Verein sammelt Spenden und Zuwendungen, um Projekte und Vorhaben, die diesen Zielen dienen, finanziell zu unterstützen. Durch die enge Zusammenarbeit mit der Kirchengemeinde und den Mitgliedern des Vereins werden Maßnahmen ergriffen, um die Gemeinschaft zu stärken und nachhaltig positive Impulse zu setzen.',
    'about.subtitle': 'Wir fördern kirchliches Leben und soziale Gemeinschaft nachhaltig.',
    'about.statute.title': 'Satzung',
    'about.statute.text': 'Laden Sie unsere vollständige Vereinssatzung herunter.',
    'about.statute.download': 'Satzung herunterladen (PDF)',
    'about.history.title': 'Unsere Geschichte',
    'about.history.text': 'Der Förderverein wurde am 25. September 2022 von Mitgliedern der Neuapostolischen Kirchengemeinde Hamburg-Alstertal gegründet und am 22. Juni 2023 unter der Nummer VR 25331 in das Vereinsregister beim Amtsgericht Hamburg eingetragen. Mit der Satzungsänderung vom 16. Januar 2025 (eingetragen am 2. Dezember 2025) wurde das Streaming der Gottesdienste ausdrücklich als Förderzweck aufgenommen. 2025 hat ein neuer Vorstand Strukturen und Ziele neu geordnet, seit 2026 werden die ersten größeren Projekte sichtbar.',
    'about.mission.title': 'Mission und Vision',
    'about.mission.text': 'Unsere Mission: Wir beschaffen die Mittel, die eine lebendige Gemeindearbeit braucht, und setzen sie dort ein, wo sie am meisten bewirken: bei Kindern und Jugendlichen, in der Kirchenmusik, am Kirchengebäude und beim Streaming der Gottesdienste. Unsere Vision: eine Gemeinde in Hamburg-Alstertal, in der jede Generation ihren Platz findet und in der niemand vom Gottesdienst ausgeschlossen bleibt, auch nicht, wer nicht mehr in die Kirche kommen kann.',
    'about.impact.title': 'Was wir bewirken',
    'about.impact.1': 'Gottesdienste im Livestream: Die vom Verein geförderte Technik im Kirchsaal lässt kranke, ältere und verreiste Mitglieder jeden Sonntag von zu Hause aus mitfeiern.',
    'about.impact.2': 'Neue Orgel mit drittem Manual: Spenden und Beiträge ermöglichen, dass das neue Instrument mit einem zusätzlichen dritten Manual beschafft werden kann.',
    'about.impact.3': 'Jugendhütte im Kirchengarten: Mit einer Förderung der Sparkasse Hamburg entsteht ein eigener Treffpunkt für Jugendliche.',
    'about.impact.4': 'Kindgerechter Kirchengarten: Eine Spielfläche für Kinder, damit Familien Gemeindeveranstaltungen entspannt erleben können.',
    'about.transparency.title': 'Transparenz',
    'about.transparency.legal': 'Rechtsform und Register',
    'about.transparency.legalText': 'Eingetragener Verein, Registergericht Amtsgericht Hamburg, Vereinsregisternummer VR 25331. Sitz: Dweerblöcken 8, 22393 Hamburg.',
    'about.transparency.charity': 'Gemeinnützigkeit',
    'about.transparency.charityText': 'Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnitts „Steuerbegünstigte Zwecke" der Abgabenordnung (Förderung der Religion und kirchlicher Zwecke) und ist als gemeinnützig anerkannt. Spenden und Mitgliedsbeiträge sind steuerlich absetzbar, wir stellen Zuwendungsbestätigungen aus.',
    'about.transparency.board': 'Vorstand',
    'about.transparency.boardText': 'Prof. Dr. Christoph Großmann, Gerolf Pabst und Volkert Tainz. Der Vorstand arbeitet ehrenamtlich, je zwei Vorstandsmitglieder vertreten den Verein gemeinsam.',
    'about.transparency.domains': 'Unsere Internetadressen',
    'about.transparency.domainsText': 'Der Förderverein ist Inhaber und Betreiber der Domain nak-alstertal.de. Darunter betreibt er das Gemeindeportal für die Kirchengemeinde Hamburg-Alstertal (nak-alstertal.de) sowie diese Vereinswebsite (verein.nak-alstertal.de). Beide Angebote gehören zu derselben Organisation.',

    'membership.title': 'Mitglied werden',
    'membership.subtitle': 'Wir laden alle ein, die unsere Ziele und Werte teilen, Teil unseres Fördervereins zu werden.',
    'membership.intro': 'Als Mitglied unterstützt du aktiv die in unserer Satzung festgelegten Zwecke und trägst dazu bei, unsere Gemeindearbeit und gemeinnützigen Projekte zu fördern. Jede natürliche oder juristische Person kann Mitglied werden, die unsere Ziele unterstützt und bereit ist, die Satzung des Vereins anzuerkennen. Es gibt keine weiteren Einschränkungen außer den üblichen gesetzlichen Vorgaben für die Mitgliedschaft in Vereinen.',
    'membership.benefits.title': 'Vorteile der Mitgliedschaft',
    'membership.benefits.1': 'Aktive Mitgestaltung der Vereinsarbeit',
    'membership.benefits.2': 'Einladungen zu exklusiven Veranstaltungen',
    'membership.benefits.3': 'Regelmäßige Informationen über Projekte',
    'membership.benefits.4': 'Steuerlich absetzbare Mitgliedsbeiträge',
    'membership.fee.title': 'Jahresbeitrag',
    'membership.fee.text': 'Der Mindestjahresbeitrag beträgt 10 €. Höhere Beiträge sind herzlich willkommen.',
    'membership.sepa.title': 'Bequeme Zahlung per SEPA-Lastschrift',
    'membership.sepa.text': 'Der Mitgliedsbeitrag wird jährlich bequem per SEPA-Lastschrift eingezogen.',
    'membership.form.download': 'Mitgliedsantrag herunterladen (PDF)',

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

    'news.title': 'Aktuelles',
    'news.subtitle': 'Neues und Aktuelles aus unserem Verein',

    'gallery.title': 'Bildergalerie',
    'gallery.subtitle': 'Eindrücke aus unserem Vereinsleben',

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

    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.nonprofit': 'Gemeinnütziger Verein',
    'footer.links': 'Links',
    'footer.legal': 'Rechtliches',

    'common.learnMore': 'Mehr erfahren',
    'common.back': 'Zurück',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.membership': 'Join Us',
    'nav.donate': 'Donate',
    'nav.news': 'News',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.imprint': 'Imprint',
    'nav.privacy': 'Privacy Policy',

    'hero.title': 'Förderverein der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.',
    'hero.subtitle': 'Doing good together – for our community and beyond.',
    'hero.cta.membership': 'Become a Member',
    'hero.cta.donate': 'Donate Now',

    'about.title': 'About Our Association',
    'about.purpose.title': 'Our Purpose',
    'about.purpose.text': 'The purpose of the association is the ideal and financial support of ecclesiastical and charitable purposes of the New Apostolic Church congregation Hamburg-Alstertal. This includes in particular the promotion of activities that serve the cultivation of faith, the promotion of Christian values and the building of community life.',
    'about.goals.title': 'Our Goals',
    'about.goals.text': 'The association collects donations and contributions to financially support projects and initiatives that serve these goals. Through close cooperation with the church congregation and the members of the association, measures are taken to strengthen the community and create lasting positive impact.',
    'about.subtitle': 'We promote church life and social community sustainably.',
    'about.statute.title': 'Statute',
    'about.statute.text': 'Download our complete association statute.',
    'about.statute.download': 'Download Statute (PDF)',
    'about.history.title': 'Our History',
    'about.history.text': 'The association was founded on 25 September 2022 by members of the New Apostolic congregation Hamburg-Alstertal and entered in the register of associations at Hamburg District Court on 22 June 2023 under number VR 25331. With the amendment of the statutes dated 16 January 2025 (registered on 2 December 2025), livestreaming of church services was explicitly added as a funding purpose. In 2025 a new board reorganised structures and goals; since 2026 the first larger projects are becoming visible.',
    'about.mission.title': 'Mission and Vision',
    'about.mission.text': 'Our mission: we raise the funds that a vibrant congregation needs and put them where they make the biggest difference: children and youth, church music, the church building and the livestreaming of services. Our vision: a congregation in Hamburg-Alstertal where every generation finds its place and nobody is excluded from the service, not even those who can no longer come to church.',
    'about.impact.title': 'Our Impact',
    'about.impact.1': 'Services via livestream: the technology in the church hall funded by the association lets sick, elderly and travelling members take part every Sunday from home.',
    'about.impact.2': 'New organ with a third manual: donations and membership fees make it possible to purchase the new instrument with an additional third manual.',
    'about.impact.3': 'Youth cabin in the church garden: with a grant from Sparkasse Hamburg, a dedicated meeting place for young people is being created.',
    'about.impact.4': 'Child-friendly church garden: a play area for children so that families can enjoy congregation events in a relaxed way.',
    'about.transparency.title': 'Transparency',
    'about.transparency.legal': 'Legal form and register',
    'about.transparency.legalText': 'Registered association (e.V.), register court Hamburg District Court (Amtsgericht Hamburg), registration number VR 25331. Registered office: Dweerblöcken 8, 22393 Hamburg, Germany.',
    'about.transparency.charity': 'Charitable status',
    'about.transparency.charityText': 'The association pursues exclusively and directly charitable purposes within the meaning of the German Fiscal Code (promotion of religion and church purposes) and is recognised as a charity. Donations and membership fees are tax-deductible; we issue donation receipts.',
    'about.transparency.board': 'Board',
    'about.transparency.boardText': 'Prof. Dr. Christoph Großmann, Gerolf Pabst and Volkert Tainz. The board works on a voluntary basis; any two board members represent the association jointly.',
    'about.transparency.domains': 'Our web addresses',
    'about.transparency.domainsText': 'The association is the owner and operator of the domain nak-alstertal.de. Under it, it runs the congregation portal for the New Apostolic congregation Hamburg-Alstertal (nak-alstertal.de) and this association website (verein.nak-alstertal.de). Both belong to the same organisation.',

    'membership.title': 'Become a Member',
    'membership.subtitle': 'We invite everyone who shares our goals and values to become part of our support association.',
    'membership.intro': 'As a member, you actively support the purposes set out in our statutes and contribute to promoting our community work and charitable projects. Any natural or legal person who supports our goals and is willing to recognize the statutes of the association can become a member. There are no further restrictions other than the usual legal requirements for membership in associations.',
    'membership.benefits.title': 'Membership Benefits',
    'membership.benefits.1': 'Active participation in association activities',
    'membership.benefits.2': 'Invitations to exclusive events',
    'membership.benefits.3': 'Regular updates on projects',
    'membership.benefits.4': 'Tax-deductible membership fees',
    'membership.fee.title': 'Annual Fee',
    'membership.fee.text': 'The minimum annual fee is €10. Higher contributions are welcome.',
    'membership.sepa.title': 'Convenient Payment via SEPA Direct Debit',
    'membership.sepa.text': 'The membership fee is conveniently collected annually via SEPA direct debit.',
    'membership.form.download': 'Download Membership Application (PDF)',

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

    'news.title': 'News',
    'news.subtitle': 'Updates and events from our association',

    'gallery.title': 'Photo Gallery',
    'gallery.subtitle': 'Impressions from our association life',

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

    'footer.rights': 'All rights reserved.',
    'footer.nonprofit': 'Non-profit organization',
    'footer.links': 'Links',
    'footer.legal': 'Legal',

    'common.learnMore': 'Learn More',
    'common.back': 'Back',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.membership': 'Adhérer',
    'nav.donate': 'Faire un don',
    'nav.news': 'Actualités',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    'nav.imprint': 'Mentions légales',
    'nav.privacy': 'Confidentialité',

    'hero.title': 'Förderverein NAK Alstertal',
    'hero.subtitle': 'Agir ensemble – pour notre communauté et au-delà.',
    'hero.cta.membership': 'Devenir membre',
    'hero.cta.donate': 'Faire un don',

    'about.title': 'Notre association',
    'about.purpose.title': 'Notre mission',
    'about.purpose.text': "L'association a pour but le soutien idéel et financier des objectifs ecclésiastiques et caritatifs de la congrégation néo-apostolique Hamburg-Alstertal.",
    'about.goals.title': 'Nos objectifs',
    'about.goals.text': "L'association collecte des dons pour soutenir financièrement les projets correspondant à ces objectifs. En étroite collaboration avec la congrégation, des mesures sont prises pour renforcer la communauté.",
    'about.subtitle': 'Nous soutenons la vie ecclésiale et la communauté sociale de façon durable.',
    'about.statute.title': 'Statuts',
    'about.statute.text': 'Téléchargez nos statuts complets.',
    'about.statute.download': 'Télécharger les statuts (PDF)',
    'about.history.title': 'Notre histoire',
    'about.history.text': "L'association a été fondée le 25 septembre 2022 par des membres de la communauté néo-apostolique de Hambourg-Alstertal et inscrite au registre des associations du tribunal de Hambourg le 22 juin 2023 sous le numéro VR 25331. La modification des statuts du 16 janvier 2025 (inscrite le 2 décembre 2025) a ajouté expressément la diffusion en direct des services divins comme objectif. Depuis 2025, un nouveau comité a réorganisé les structures et les objectifs ; depuis 2026, les premiers grands projets deviennent visibles.",
    'about.mission.title': 'Mission et vision',
    'about.mission.text': "Notre mission : réunir les moyens dont une communauté vivante a besoin et les employer là où ils ont le plus d'effet : enfants et jeunes, musique d'église, bâtiment de l'église et diffusion des services divins. Notre vision : une communauté à Hambourg-Alstertal où chaque génération trouve sa place et où personne n'est exclu du service divin, même ceux qui ne peuvent plus venir à l'église.",
    'about.impact.title': 'Notre impact',
    'about.impact.1': "Services divins en direct : la technique financée par l'association permet aux membres malades, âgés ou en voyage de participer chaque dimanche depuis chez eux.",
    'about.impact.2': 'Nouvel orgue avec un troisième clavier : les dons et cotisations permettent d\'acquérir le nouvel instrument avec un troisième clavier supplémentaire.',
    'about.impact.3': "Cabane des jeunes dans le jardin de l'église : grâce à une subvention de la Sparkasse Hamburg, un lieu de rencontre pour les jeunes voit le jour.",
    'about.impact.4': "Jardin adapté aux enfants : une aire de jeux pour que les familles profitent sereinement des événements de la communauté.",
    'about.transparency.title': 'Transparence',
    'about.transparency.legal': 'Forme juridique et registre',
    'about.transparency.legalText': 'Association enregistrée (e.V.), tribunal de Hambourg (Amtsgericht Hamburg), numéro de registre VR 25331. Siège : Dweerblöcken 8, 22393 Hambourg, Allemagne.',
    'about.transparency.charity': "Reconnaissance d'utilité publique",
    'about.transparency.charityText': "L'association poursuit exclusivement et directement des buts d'utilité publique au sens du code fiscal allemand (promotion de la religion et des objectifs ecclésiastiques) et est reconnue d'utilité publique. Les dons et cotisations sont déductibles des impôts ; nous délivrons des reçus fiscaux.",
    'about.transparency.board': 'Comité',
    'about.transparency.boardText': "Prof. Dr. Christoph Großmann, Gerolf Pabst et Volkert Tainz. Le comité travaille bénévolement ; deux membres du comité représentent ensemble l'association.",
    'about.transparency.domains': 'Nos adresses Internet',
    'about.transparency.domainsText': "L'association est propriétaire et exploitante du domaine nak-alstertal.de. Elle y exploite le portail de la communauté néo-apostolique de Hambourg-Alstertal (nak-alstertal.de) ainsi que ce site de l'association (verein.nak-alstertal.de). Les deux appartiennent à la même organisation.",

    'membership.title': 'Adhérer',
    'membership.subtitle': 'Nous invitons toute personne partageant nos valeurs à rejoindre notre association.',
    'membership.intro': "En tant que membre, vous soutenez activement les objectifs de nos statuts. Toute personne physique ou morale partageant nos buts peut devenir membre.",
    'membership.benefits.title': 'Avantages',
    'membership.benefits.1': "Participation active aux activités de l'association",
    'membership.benefits.2': 'Invitations à des événements exclusifs',
    'membership.benefits.3': 'Informations régulières sur les projets',
    'membership.benefits.4': 'Cotisations déductibles des impôts',
    'membership.fee.title': 'Cotisation annuelle',
    'membership.fee.text': 'La cotisation minimale est de 10 € par an.',
    'membership.sepa.title': 'Paiement par prélèvement SEPA',
    'membership.sepa.text': 'La cotisation est prélevée annuellement par prélèvement SEPA.',
    'membership.form.download': "Télécharger le formulaire d'adhésion (PDF)",

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

    'news.title': 'Actualités',
    'news.subtitle': "Nouvelles et événements de l'association",

    'gallery.title': 'Galerie photos',
    'gallery.subtitle': "Impressions de la vie de l'association",

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

    'footer.rights': 'Tous droits réservés.',
    'footer.nonprofit': 'Association à but non lucratif',
    'footer.links': 'Liens',
    'footer.legal': 'Mentions légales',

    'common.learnMore': 'En savoir plus',
    'common.back': 'Retour',
  },
} as const;

export type UIKey = keyof typeof ui['de'];

/** Sprache aus dem URL-Pfad ableiten (/en/... -> 'en', sonst defaultLang). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in languages) return seg as Lang;
  return defaultLang;
}

/** Übersetzer für eine Sprache; fällt auf de zurück, sonst auf den Key. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key] ?? key;
  };
}

/** Pfad für eine Ziel-Sprache bauen: de -> "/path", en/fr -> "/en/path". */
export function localizePath(path: string, lang: Lang): string {
  const clean = '/' + path.replace(/^\/+/, '').replace(/^(en|fr|de)(\/|$)/, '');
  const normalized = clean === '/' ? '' : clean.replace(/\/$/, '');
  if (lang === defaultLang) return normalized || '/';
  return `/${lang}${normalized}`;
}
