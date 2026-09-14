// @ts-check
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

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap(), trailingSlashStubs()],
});
