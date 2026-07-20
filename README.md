# Förderverein NAK Alstertal – Website

Website des Fördervereins der Neuapostolischen Kirchengemeinde Hamburg-Alstertal e.V.
Live unter [verein.nak-alstertal.de](https://verein.nak-alstertal.de).

## Technik

- [Astro](https://astro.build) (statische Site, i18n de/en/fr)
- Tailwind CSS
- Kontaktformular über einen PHP-Endpoint (`/api/contact`) mit Postmark-Versand

## Entwicklung

```sh
npm install
npm run dev      # lokaler Dev-Server
npm run build    # Produktions-Build nach dist/
```

## Deployment

Release und SSH-Deploy laufen über `@linkventures/release-tools`:

```sh
npm run release -- production --patch
```

Deployt wird auf den Server alpha (Apache, `/var/www/NAKFoerdervereinAlstertal/production/dist`).
