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
    'about.history.text': "Unser Verein ist aus dem Engagement einzelner Gemeindemitglieder entstanden. Über Jahre hinweg wurden Anschaffungen für die Gemeinde, vom Mobilfunkanschluss bis zur Übertragungstechnik, privat vorgestreckt. Am 25. September 2022 gründeten Mitglieder der Neuapostolischen Kirchengemeinde Hamburg-Alstertal daraus den Förderverein, mit dem Ziel, die Arbeit der Gemeinde dauerhaft und auf eine breite Grundlage gestellt zu unterstützen.\n\nAm 22. Juni 2023 wurde der Verein in das Vereinsregister beim Amtsgericht Hamburg eingetragen (VR 25331). Das Finanzamt hat ihn als gemeinnützig anerkannt, weil er ausschließlich die Religion und kirchliche Zwecke fördert. Am 16. Januar 2025 hat die Mitgliederversammlung die Satzung einmal angepasst; diese Fassung ist seit Dezember 2025 eingetragen. Der Vorstand arbeitet ehrenamtlich, zwei gewählte Kassenprüfer prüfen jedes Jahr die gesamte Buch- und Kassenführung.",
    'about.mission.title': 'Mission und Vision',
    'about.mission.text': 'Unsere Mission: Wir beschaffen die Mittel, die eine lebendige Gemeindearbeit braucht, und setzen sie dort ein, wo sie am meisten bewirken: bei Kindern und Jugendlichen, in der Kirchenmusik, am Kirchengebäude und beim Streaming der Gottesdienste. Unsere Vision: eine Gemeinde in Hamburg-Alstertal, in der jede Generation ihren Platz findet und in der niemand vom Gottesdienst ausgeschlossen bleibt, auch nicht, wer nicht mehr in die Kirche kommen kann.',
    'about.impact.title': 'Was wir bewirken',
    'about.impact.text': "Alles, was wir sammeln, fließt in die Gemeinde Hamburg-Alstertal. Unsere Satzung nennt vier Schwerpunkte, und in jedem davon ist in den vergangenen Jahren etwas Greifbares entstanden:",

    'about.impact.1': "Kinder und Jugend: Im Kirchgarten haben wir ein Gartenhaus errichtet, das wir zu einer Jugendhütte ausbauen, einem eigenen Treffpunkt für junge Menschen. Der Garten bekommt eine Spielfläche für Kinder, und für den Religionsunterricht haben wir Bibeln angeschafft. Für die Jugendhütte haben wir eine Zuwendung der Hamburger Sparkasse erhalten.",
    'about.impact.2': "Kirchenmusik: Unsere Kirche bekommt eine neue Orgel. Mit Spenden ermöglichen wir, dass das Instrument um ein drittes Manual erweitert wird. Außerdem tragen wir die Lizenzen, damit Liedtexte im Gottesdienst gezeigt und übertragen werden dürfen.",
    'about.impact.3': "Kirchengebäude: Wir ergänzen die Arbeit der Kirchenverwaltung dort, wo es im Alltag der Gemeinde fehlt, zum Beispiel mit einem Industrie-Geschirrspüler für die Gemeindeküche, einem Terminmonitor im Eingangsbereich und der Neugestaltung des Kirchgartens.",
    'about.impact.4': "Gottesdienste im Livestream: Seit mehreren Jahren können Gemeindemitglieder, die nicht in die Kirche kommen können, die Gottesdienste zu Hause mitfeiern. Der Verein finanziert die dafür nötige Übertragungstechnik, den Internetanschluss und die laufenden Dienste, und er hat 2025 und 2026 den Umbau der Ton- und Bildtechnik im Kirchsaal getragen.",
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
    'footer.nonprofit': "Gemeinnützig anerkannter Verein",

    'footer.register': "Eingetragen beim Amtsgericht Hamburg, Vereinsregister VR 25331",

    'footer.domain': "nak-alstertal.de ist die Domain des Vereins. Dazu gehören diese Website (verein.nak-alstertal.de) und das Gemeindeportal nak-alstertal.de.",

    'footer.portal': "Gemeindeportal",
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
    'about.history.text': "Our association grew out of the commitment of individual members of the congregation. For years, purchases for the congregation, from the mobile phone line to the broadcasting equipment, were paid for privately in advance. On 25 September 2022, members of the New Apostolic congregation Hamburg-Alstertal founded the support association to put this work on a lasting and broad footing.\n\nOn 22 June 2023 the association was entered in the register of associations at Hamburg District Court (VR 25331). The tax office has recognised it as a charitable organisation because it exclusively promotes religion and church purposes. On 16 January 2025 the general meeting amended the statutes once; this version has been registered since December 2025. The board works on a voluntary basis, and two elected auditors review the complete accounts and cash management every year.",
    'about.mission.title': 'Mission and Vision',
    'about.mission.text': 'Our mission: we raise the funds that a vibrant congregation needs and put them where they make the biggest difference: children and youth, church music, the church building and the livestreaming of services. Our vision: a congregation in Hamburg-Alstertal where every generation finds its place and nobody is excluded from the service, not even those who can no longer come to church.',
    'about.impact.title': 'Our Impact',
    'about.impact.text': "Everything we collect goes to the congregation Hamburg-Alstertal. Our statutes name four focus areas, and in each of them something tangible has been achieved in recent years:",

    'about.impact.1': "Children and youth: In the church garden we built a garden house that we are converting into a youth cabin, a meeting place of their own for young people. The garden is getting a play area for children, and we purchased Bibles for religious education. For the youth cabin we received a grant from Hamburger Sparkasse.",
    'about.impact.2': "Church music: Our church is getting a new organ. With donations we make it possible for the instrument to be extended by a third manual. We also cover the licences that allow song lyrics to be displayed and broadcast during services.",
    'about.impact.3': "Church building: We complement the work of the church administration wherever something is missing in everyday congregational life, for example with an industrial dishwasher for the congregation kitchen, an appointment monitor in the entrance area and the redesign of the church garden.",
    'about.impact.4': "Live-streamed services: For several years, members who cannot come to church have been able to join the services from home. The association finances the necessary broadcasting equipment, the internet connection and the running services, and in 2025 and 2026 it funded the overhaul of the audio and video equipment in the church hall.",
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
    'footer.nonprofit': "Registered charitable (non-profit) association",

    'footer.register': "Registered at Hamburg District Court (Amtsgericht Hamburg), register of associations VR 25331",

    'footer.domain': "nak-alstertal.de is the domain of the association. It covers this website (verein.nak-alstertal.de) and the congregation portal nak-alstertal.de.",

    'footer.portal': "Congregation portal",
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
    'about.history.text': "Notre association est née de l'engagement de quelques membres de la congrégation. Pendant des années, des acquisitions pour la congrégation, de l'abonnement mobile à la technique de retransmission, ont été avancées à titre privé. Le 25 septembre 2022, des membres de la congrégation néo-apostolique Hamburg-Alstertal ont fondé l'association de soutien afin de placer ce travail sur une base durable et large.\n\nLe 22 juin 2023, l'association a été inscrite au registre des associations du tribunal de Hambourg (VR 25331). L'administration fiscale l'a reconnue d'utilité publique, car elle soutient exclusivement la religion et des objectifs ecclésiastiques. Le 16 janvier 2025, l'assemblée générale a modifié une fois les statuts ; cette version est enregistrée depuis décembre 2025. Le conseil d'administration travaille bénévolement, et deux vérificateurs élus contrôlent chaque année l'ensemble de la comptabilité et de la caisse.",
    'about.mission.title': 'Mission et vision',
    'about.mission.text': "Notre mission : réunir les moyens dont une communauté vivante a besoin et les employer là où ils ont le plus d'effet : enfants et jeunes, musique d'église, bâtiment de l'église et diffusion des services divins. Notre vision : une communauté à Hambourg-Alstertal où chaque génération trouve sa place et où personne n'est exclu du service divin, même ceux qui ne peuvent plus venir à l'église.",
    'about.impact.title': 'Notre impact',
    'about.impact.text': "Tout ce que nous collectons va à la congrégation Hamburg-Alstertal. Nos statuts définissent quatre priorités, et dans chacune d'elles quelque chose de concret a vu le jour ces dernières années :",

    'about.impact.1': "Enfants et jeunes : Dans le jardin de l'église, nous avons construit un abri de jardin que nous aménageons en cabane des jeunes, un lieu de rencontre qui leur est propre. Le jardin reçoit une aire de jeux pour les enfants, et nous avons acheté des bibles pour l'enseignement religieux. Pour la cabane des jeunes, nous avons reçu une subvention de la Hamburger Sparkasse.",
    'about.impact.2': "Musique d'église : Notre église reçoit un nouvel orgue. Grâce aux dons, nous permettons d'étendre l'instrument d'un troisième clavier. Nous prenons aussi en charge les licences qui permettent d'afficher et de retransmettre les textes des chants pendant les services.",
    'about.impact.3': "Bâtiment de l'église : Nous complétons le travail de l'administration de l'Église là où quelque chose manque au quotidien de la congrégation, par exemple avec un lave-vaisselle industriel pour la cuisine, un écran d'affichage des rendez-vous à l'entrée et le réaménagement du jardin de l'église.",
    'about.impact.4': "Services divins en direct : Depuis plusieurs années, les membres qui ne peuvent pas venir à l'église peuvent suivre les services depuis chez eux. L'association finance la technique de retransmission nécessaire, la connexion internet et les services courants, et elle a pris en charge en 2025 et 2026 la rénovation de la technique audio et vidéo de la salle de culte.",
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
    'footer.nonprofit': "Association reconnue d'utilité publique",

    'footer.register': "Inscrite au tribunal de Hambourg (Amtsgericht Hamburg), registre des associations VR 25331",

    'footer.domain': "nak-alstertal.de est le domaine de l'association. Il comprend ce site (verein.nak-alstertal.de) et le portail de la congrégation nak-alstertal.de.",

    'footer.portal': "Portail de la congrégation",
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
