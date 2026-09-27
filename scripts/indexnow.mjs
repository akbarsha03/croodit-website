// Tell IndexNow (Bing, Yandex, Seznam, Naver…) which URLs changed in this deploy.
// Bing's index is what ChatGPT search and Copilot draw on, and a site with no
// backlinks otherwise waits for a crawler to find its sitemap on its own.
//
//   node scripts/indexnow.mjs [<sha before the push>] [--dry]
//
// With a sha, only URLs whose sitemap <lastmod> is newer than that commit are
// sent: lastmod is the last commit touching the page, so that is exactly the
// pages this push changed. Without one (workflow_dispatch), every URL is sent.
// Runs after deploy, against the live site: the engines fetch the key file from
// croodit.com to verify the submission, so it has to be published first.
import { execFileSync } from 'node:child_process';
import { readdirSync } from 'node:fs';

const HOST = 'croodit.com';
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const before = args.find((a) => a !== '--dry');

const keyFile = readdirSync('public').find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('no IndexNow key file in public/');
const key = keyFile.slice(0, -4);

let since = 0;
try {
  if (before) since = Date.parse(execFileSync('git', ['log', '-1', '--format=%cI', before], { encoding: 'utf8' }).trim());
} catch {} // new branch (0000…) or sha not in history: send everything
if (Number.isNaN(since)) since = 0;

const sitemap = await (await fetch(`https://${HOST}/sitemap-0.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?/g)]
  .filter(([, , lastmod]) => !since || !lastmod || Date.parse(lastmod) > since)
  .map(([, loc]) => loc);

console.log(`${urlList.length} URL(s) ${since ? `changed since ${new Date(since).toISOString()}` : '(full submit)'}`);
urlList.forEach((u) => console.log(`  ${u}`));
if (dry || !urlList.length) process.exit(0);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList }),
});
console.log(`IndexNow: HTTP ${res.status} ${await res.text()}`);
// 200 accepted, 202 accepted while the key is being verified; anything else is a real failure.
if (res.status !== 200 && res.status !== 202) process.exit(1);
