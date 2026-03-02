#!/usr/bin/env node
/* Generates a sitemap.xml by scanning app/ pages in the Next.js app router. */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const PUBLIC_SITEMAP = path.join(ROOT, 'public', 'sitemap.xml');

let SITE_BASE = process.env.SITE_BASE_URL || process.env.NEXT_PUBLIC_SITE_BASE_URL || '';
// Fallback to production domain if not provided (for production-ready defaults)
if (!SITE_BASE) {
  SITE_BASE = 'https://pcell-kappa.vercel.app';
  console.warn(`SITE_BASE_URL not set. Falling back to production domain: ${SITE_BASE}`);
}

function walk(dir) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...walk(full));
    } else if (item.isFile()) {
      if (item.name.toLowerCase() === 'page.tsx') {
        // Derive route from path relative to app/
        const rel = path.relative(APP_DIR, full);
        const dirParts = rel.split(path.sep).slice(0, -1); // remove 'page.tsx'
        // If page.tsx is directly under app/, route is '/'
        const route = dirParts.length === 0 ? '/' : ('/' + dirParts.join('/'));
        results.push(route);
      }
    }
  }
  return results;
}

function buildXml(urls) {
  const now = new Date().toISOString();
  const base = SITE_BASE.endsWith('/') ? SITE_BASE.slice(0, -1) : SITE_BASE;
  // Derive additional metadata for SEO: changefreq and priority
  const routeMeta = (route) => {
    // Normalize route for matching
    const r = route.endsWith('/') && route.length > 1 ? route.slice(0, -1) : route;
    switch (r) {
      case '/': return { changefreq: 'daily', priority: '1.0' };
      case '/about':
      case '/events':
      case '/drive':
      case '/team':
      case '/recruiter':
        return { changefreq: 'weekly', priority: '0.8' };
      default:
        // Admin-like or other pages
        return { changefreq: 'monthly', priority: '0.5' };
    }
  };
  const locs = urls
    .map(u => {
      // Ensure root maps to base + '/'
      const loc = base ? base + u : u;
      const meta = routeMeta(u);
      return `<url><loc>${loc}</loc><lastmod>${now}</lastmod><changefreq>${meta.changefreq}</changefreq><priority>${meta.priority}</priority></url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locs}\n</urlset>`;
  return xml;
}

function ensurePublicDir() {
  const dir = path.dirname(PUBLIC_SITEMAP);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function main() {
  const routes = walk(APP_DIR);
  // Include root if it exists as '/'
  if (!routes.includes('/')) routes.unshift('/');
  const xml = buildXml(routes);
  ensurePublicDir();
  fs.writeFileSync(PUBLIC_SITEMAP, xml, 'utf8');
  console.log(`Generated sitemap.xml with ${routes.length} routes at ${PUBLIC_SITEMAP}`);
}

main();
