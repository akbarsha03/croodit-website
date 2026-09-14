// Verifies the trailing-slash stubs in astro.config.mjs. Run after `npm run build`.
import { readdir, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const dist = new URL('../dist/', import.meta.url);
const files = await readdir(dist, { recursive: true });
const pages = files.filter((f) => f.endsWith('.html') && !f.endsWith('index.html') && f !== '404.html');

assert.ok(pages.length > 0, 'no built pages found — run npm run build first');
assert.match(await readFile(new URL('index.html', dist), 'utf8'), /<h1>/, 'homepage was clobbered');

for (const page of pages) {
  const slug = page.slice(0, -'.html'.length);
  const stub = await readFile(new URL(`${slug}/index.html`, dist), 'utf8');
  assert.match(stub, new RegExp(`<link rel="canonical" href="https://croodit\\.com/${slug}" />`), `bad canonical in ${slug}/`);
  assert.match(stub, /http-equiv="refresh"/, `no refresh in ${slug}/`);
}

console.log(`ok — ${pages.length} trailing-slash stubs`);
