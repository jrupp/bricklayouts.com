/**
 * Prerender script using Playwright to generate static HTML for each route.
 * This script:
 * 1. Starts a local server serving the build output
 * 2. Visits each route with Playwright
 * 3. Waits for react-helmet-async to update the <head>
 * 4. Saves the fully-rendered HTML to build/<route>/index.html
 */

import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildDir = join(__dirname, '..', 'build');

// Routes to prerender
const routes = [
  '/',
  '/pricing',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/signup',
  '/bw26',
];

// Simple static file server for the build directory
function createStaticServer(dir, port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(dir, req.url === '/' ? 'index.html' : req.url);
      
      // For SPA routes without extensions, serve index.html
      if (!filePath.includes('.')) {
        filePath = join(dir, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = filePath.split('.').pop();
        const contentTypes = {
          html: 'text/html',
          js: 'application/javascript',
          css: 'text/css',
          png: 'image/png',
          jpg: 'image/jpeg',
          svg: 'image/svg+xml',
          json: 'application/json',
        };
        res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
        res.end(content);
      } catch (e) {
        // Fallback to index.html for SPA routing
        try {
          const content = readFileSync(join(dir, 'index.html'));
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        } catch {
          res.writeHead(404);
          res.end('Not Found');
        }
      }
    });

    server.listen(port, () => {
      console.log(`Static server running on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function prerender() {
  const port = 4173;
  
  // Verify build directory exists
  if (!existsSync(buildDir)) {
    console.error('Build directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  console.log('Starting static server...');
  const server = await createStaticServer(buildDir, port);

  console.log('Launching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext();

  for (const route of routes) {
    console.log(`Prerendering ${route}...`);
    const page = await context.newPage();
    
    await page.goto(`http://localhost:${port}${route}`, {
      waitUntil: 'networkidle',
    });

    // Wait for Helmet to update the head (give React time to hydrate)
    await page.waitForTimeout(1000);

    // Get the full HTML
    const html = await page.content();

    // Determine output path
    const outputDir = route === '/' 
      ? buildDir 
      : join(buildDir, route.slice(1));
    
    const outputPath = join(outputDir, 'index.html');

    // Create directory if needed
    if (route !== '/') {
      mkdirSync(outputDir, { recursive: true });
    }

    // Write the prerendered HTML
    writeFileSync(outputPath, html);
    console.log(`  Saved to ${outputPath}`);

    await page.close();
  }

  await browser.close();
  server.close();

  console.log('\n✓ Prerendering complete!');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
