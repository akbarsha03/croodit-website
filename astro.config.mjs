// @ts-check
import { execFileSync } from 'node:child_process';
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://croodit.com';

/**
 * `trailingSlash: 'never'` + `build.format: 'file'` means GitHub Pages serves
 * `/answers` from `answers.html` and 404s on `/answers/` — so any inbound link,
 * share or directory listing that adds a slash earns nothing. Pages has no
 * server-side redirects, so emit a `<page>/index.html` stub that canonicals to
 * the real URL and meta-refreshes visitors onto it. Runs over the built output,
 * so every future page is covered without touching this file again.
 */
function trailingSlashStubs() {
  return {
    name: 'trailing-slash-stubs',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = dir.pathname;
        const files = await readdir(root, { recursive: true, withFileTypes: true });
        let count = 0;
        for (const f of files) {
          if (!f.isFile() || !f.name.endsWith('.html') || f.name === 'index.html') continue;
          const slug = f.name.slice(0, -'.html'.length);
          if (slug === '404') continue;
          const rel = f.parentPath.slice(root.length).replace(/^\/?/, '');
          const target = `${SITE}/${rel ? `${rel}/` : ''}${slug}`;
          const stub = `${root}${rel ? `${rel}/` : ''}${slug}/`;
          await mkdir(stub, { recursive: true });
          await writeFile(
            `${stub}index.html`,
            `<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting to ${target}</title>
    <link rel="canonical" href="${target}" />
    <meta http-equiv="refresh" content="0; url=${target}" />
  </head>
  <body><p>This page has moved to <a href="${target}">${target}</a>.</p></body>
</html>
`,
          );
          count++;
        }
        logger.info(`${count} trailing-slash stub(s) written`);
      },
    },
  };
}

/**
 * `<lastmod>` for the sitemap: the last commit that touched the page's source,
 * not the build time — a date that changes on every deploy is noise search
 * engines learn to ignore. The homepage FAQ lives in `src/data/faq.ts`, so that
 * counts as homepage content too. Needs full history (`fetch-depth: 0` in the
 * deploy workflow); in a shallow clone every file would report HEAD's date, so
 * lastmod is omitted rather than wrong. Uncommitted pages also get none.
 */
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();
let fullHistory = false;
try {
  fullHistory = git('rev-parse', '--is-shallow-repository') === 'false';
} catch {}
if (!fullHistory) console.warn('[sitemap] no full git history — <lastmod> omitted');

function lastmod(url) {
  if (!fullHistory) return undefined;
  const path = new URL(url).pathname;
  const page = path === '/' ? 'src/pages/index.astro' : `src/pages${path}.astro`;
  const sources = path === '/' ? [page, 'src/data/faq.ts'] : [page];
  return git('log', '-1', '--format=%cI', '--', ...sources) || undefined;
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = lastmod(item.url);
        return item;
      },
    }),
    trailingSlashStubs(),
  ],
});
