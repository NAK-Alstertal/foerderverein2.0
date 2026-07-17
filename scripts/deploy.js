// scripts/deploy.js

import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { NodeSSH } from 'node-ssh';
import bootstrapPromise from './bootstrap.js';

const REMOTE_BASE_PATH = '/var/www/NAKFoerdervereinAlstertal/';

(async () => {
  try {
    const { ROOT_DIR, DIST_DIR, target, flags } = await bootstrapPromise;

    const log = (...args) => { if (!flags.silent) console.log(...args); };

    if (!target) {
      console.error('❌ No target specified');
      process.exit(1);
    }

    dotenv.config({ path: path.join(ROOT_DIR, '.env') });

    if (!fs.existsSync(DIST_DIR)) {
      console.error(`❌ dist folder not found: ${DIST_DIR}`);
      console.error('Run: npm run build');
      process.exit(1);
    }

    const host = process.env.SSH_HOST;
    const username = process.env.SSH_USER;
    const privateKeyPath = process.env.SSH_KEY;
    const passphrase = process.env.SSH_PASSPHRASE;

    if (!host || !username || !privateKeyPath) {
      console.error('❌ Missing SSH env vars. Need SSH_HOST, SSH_USER, SSH_KEY (and optional SSH_PASSPHRASE).');
      process.exit(1);
    }

    const remoteBase = `${REMOTE_BASE_PATH}${target}/dist`;

    log(`🔐 Connecting to server (${target})...`);
    const ssh = new NodeSSH();
    await ssh.connect({ host, username, privateKeyPath, passphrase });

    log(`📁 Ensuring remote dir exists: ${remoteBase}`);
    const mkdirRes = await ssh.execCommand(`mkdir -p "${remoteBase}"`);
    if (mkdirRes.stdout) log('📤 MKDIR STDOUT:', mkdirRes.stdout);
    if (mkdirRes.stderr) console.error('❗ MKDIR STDERR:', mkdirRes.stderr);

    // 🔎 Permission check: can we write there?
    log('🧪 Permission check (touch .deploy-test)...');
    const testFile = `${remoteBase}/.deploy-test`;
    const permRes = await ssh.execCommand(`echo "ok" > "${testFile}" && rm -f "${testFile}" && echo "write-ok"`);
    if (permRes.stdout) log('📤 PERM STDOUT:', permRes.stdout);
    if (permRes.stderr) console.error('❗ PERM STDERR:', permRes.stderr);
    if (!permRes.stdout.includes('write-ok')) {
      console.error('❌ No write permission in remote target directory.');
      process.exit(1);
    }

    log(`🧹 Cleaning remote dist...`);
    const cleanRes = await ssh.execCommand(`rm -rf "${remoteBase}" && mkdir -p "${remoteBase}"`);
    if (cleanRes.stderr) console.error('❗ CLEAN STDERR:', cleanRes.stderr);

    log(`📤 Uploading dist (${DIST_DIR}) to ${remoteBase} ...`);

    const ok = await ssh.putDirectory(DIST_DIR, remoteBase, {
      recursive: true,
      concurrency: 5,
      validate: () => true,
      tick: (localPath, remotePath, error) => {
        if (error) {
          console.error('❌ Upload error:', { localPath, remotePath, message: error.message });
        }
      },
    });

    if (!ok) {
      console.error('❌ Upload failed (putDirectory returned false). See errors above.');
      process.exit(1);
    }

    // Kontaktformular-Endpoint mitdeployen (nur production).
    // Der Postmark-Token bleibt server-lokal in /var/www/NAKFoerdervereinAlstertal/.contact-token
    // (www-data-lesbar, ausserhalb des Web-Roots) und wird hier NICHT angefasst.
    if (target === 'production') {
      const endpointSrc = path.join(ROOT_DIR, 'scripts', '_contact_endpoint.php');
      const endpointDir = `${REMOTE_BASE_PATH}api/contact`;
      const endpointDest = `${endpointDir}/index.php`;
      if (fs.existsSync(endpointSrc)) {
        log(`📤 Uploading contact endpoint → ${endpointDest} ...`);
        await ssh.execCommand(`mkdir -p "${endpointDir}"`);
        await ssh.putFile(endpointSrc, endpointDest);
        log('✅ Contact endpoint deployed.');
      } else {
        console.error('⚠️  scripts/_contact_endpoint.php nicht gefunden — Contact-Endpoint übersprungen.');
      }
    }

    ssh.dispose();
    log(`🚀 Deployment to ${target} completed.`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Deployment failed:', err?.message ?? err);
    process.exit(1);
  }
})();