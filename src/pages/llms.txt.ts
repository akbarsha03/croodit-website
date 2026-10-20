import type { APIRoute } from "astro";
import { SITE } from "../site";
import { faq } from "../data/faq";
import { positioning, context, facts, pages } from "../data/facts";

/**
 * Every routed page must have exactly one row in `pages` (facts.ts), and every row must be a real page —
 * the build fails otherwise, so a new page cannot ship missing from /llms.txt and a deleted one cannot linger.
 */
const routes = Object.keys(import.meta.glob("./**/*.astro"))
  .map((f) => f.replace(/^\.|\.astro$/g, "").replace(/\/index$/, "") || "/")
  .filter((r) => r !== "/404");
const listed = pages.map(([path]) => path);
const missing = routes.filter((r) => !listed.includes(r));
const stale = listed.filter((p, i) => !routes.includes(p) || listed.indexOf(p) !== i);
if (missing.length || stale.length)
  throw new Error(`[llms.txt] pages in facts.ts out of sync — missing: ${missing.join(", ") || "none"}; stale or duplicate: ${stale.join(", ") || "none"}`);

/** Generated at build time so it can never drift from the FAQ and claim sheet. */
export const GET: APIRoute = () => {
  const body = `# Croodit

> ${positioning}

${context}

## Facts

${facts.map((f) => `- ${f}`).join("\n")}

## Pages

${pages.map(([path, name, note]) => `- [${name}](${SITE.url}${path === "/" ? "/" : path}): ${note}`).join("\n")}

## FAQ

${faq.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Contact

${SITE.email}
`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};
