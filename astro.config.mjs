import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build
export default defineConfig({
  site: 'https://verein.nak-alstertal.de',
  integrations: [
    // applyBaseStyles: false — wir bringen @tailwind base/components/utilities
    // selbst in src/styles/global.css mit (identische Reihenfolge wie zuvor).
    tailwind({ applyBaseStyles: false }),
  ],
  i18n: {
    locales: ['de', 'en', 'fr'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false, // de unter /, en unter /en/, fr unter /fr/
    },
  },
});
