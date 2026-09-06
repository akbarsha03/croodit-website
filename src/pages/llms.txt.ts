import type { APIRoute } from "astro";
import { SITE } from "../site";
import { faq } from "../data/faq";
import { positioning, context, facts, pages } from "../data/facts";

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
