/**
 * Generate a sitemap.xml in the build directory.
 *
 * For each route the script looks up the source component that produces the
 * page and uses `git log` to find the last commit date for that file.  This
 * means only pages whose source was actually changed will get a new
 * <lastmod> timestamp.
 */

import { execSync } from 'child_process';
import { writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildDir = join(__dirname, '..', 'build');

const SITE_URL = 'https://www.bricklayouts.com';

// Map every route to the source file that generates it.
// Shared layout files (Navigation, Footer, App, etc.) are intentionally
// excluded — we only care about the *page-level* component that determines
// a route's content.
const routeSourceMap = {
  '/': 'src/components/Home.tsx',
  '/pricing': 'src/components/Pricing.tsx',
  '/about': 'src/components/About.tsx',
  '/contact': 'src/components/Contact.tsx',
  '/privacy': 'src/components/PrivacyPolicy.tsx',
  '/terms': 'src/components/TermsConditions.tsx',
};

/**
 * Return the ISO-8601 date (YYYY-MM-DD) of the last commit that touched
 * `filePath`.  Falls back to "now" if git history is unavailable (e.g. a
 * shallow clone with no history for that file).
 */
function getLastCommitDate(filePath) {
  try {
    const raw = execSync(
      `git log -1 --format=%cI -- "${filePath}"`,
      { encoding: 'utf-8' },
    ).trim();
    if (!raw) throw new Error('no output');
    // Return just the date portion (YYYY-MM-DD) — the W3C Datetime format
    // recommended by the sitemap spec.
    return raw.slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

function generateSitemap() {
  if (!existsSync(buildDir)) {
    console.error('Build directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  const entries = Object.entries(routeSourceMap).map(([route, srcFile]) => {
    const lastmod = getLastCommitDate(srcFile);
    const loc = route === '/' ? SITE_URL : `${SITE_URL}${route}`;
    console.log(`  ${route.padEnd(12)} → ${srcFile.padEnd(40)} lastmod ${lastmod}`);
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  });

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');

  const outPath = join(buildDir, 'sitemap.xml');
  writeFileSync(outPath, sitemap, 'utf-8');
  console.log(`\nSitemap written to ${outPath}`);
}

generateSitemap();
