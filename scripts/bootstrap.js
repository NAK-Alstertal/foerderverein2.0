// scripts/bootstrap.js
//
// Dünner Config-Wrapper um @linkventures/release-tools.
// Förderverein-Website (Vite/React) — deployt nur dist/ (Swap).
// Der Kontakt-Endpoint /api/contact/index.php liegt in einem separaten,
// root-owned api/-Ordner (Geschwister von production/) und wird NICHT von
// hier deployt; er wird manuell gepflegt (Referenz: scripts/_contact_endpoint.php,
// Token server-lokal in /var/www/NAKFoerdervereinAlstertal/.contact-token).

import makeBootstrap from '@linkventures/release-tools/src/core/bootstrap-factory.js';

const config = {
  remoteBasePath: '/var/www/NAKFoerdervereinAlstertal/',
  validTargets: ['staging', 'production'],
  defaultTarget: 'production',
  deployItems: [
    { path: 'dist', isDir: true, remoteSubdir: 'dist' },
  ],
};

export default makeBootstrap(config);
