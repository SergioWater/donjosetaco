import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const raw = process.argv[2];
if (!raw) throw new Error('Provide the live site URL: node scripts/generate-sitemap.mjs https://your-domain.com');
const site = new URL(raw);
if (site.protocol !== 'https:' || site.pathname !== '/' || site.search || site.hash || site.username || site.password) {
 throw new Error('Use your public HTTPS domain without a path, query, or credentials.');
}
const client = path.join(root, 'dist', 'client');
async function htmlFiles(dir) {
 const files = [];
 for (const entry of await readdir(dir, {withFileTypes:true})) {
  const file = path.join(dir, entry.name);
  if (entry.isDirectory()) files.push(...await htmlFiles(file));
  else if (entry.name.endsWith('.html')) files.push(file);
 }
 return files;
}
const escapeXml = value => value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
const routes = [];
for (const file of await htmlFiles(client)) {
 const html = await readFile(file, 'utf8');
 if (/name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) continue;
 const relative = path.relative(client, file).split(path.sep).join('/');
 if (relative === '404.html') continue;
 const route = relative === 'index.html' ? '/' : '/' + relative.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
 routes.push(new URL(route, site).href);
}
const urls = [...new Set(routes)].sort();
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.map(url => '  <url><loc>' + escapeXml(url) + '</loc></url>').join('\n') + '\n</urlset>\n';
const robots = 'User-agent: *\nAllow: /\n\nSitemap: ' + new URL('/sitemap.xml', site).href + '\n';
for (const dir of [path.join(root,'public'), client]) {
 await writeFile(path.join(dir,'sitemap.xml'),xml,'utf8');
 await writeFile(path.join(dir,'robots.txt'),robots,'utf8');
}
console.log('Generated sitemap.xml and robots.txt for ' + site.origin + ' (' + urls.length + ' pages).');
