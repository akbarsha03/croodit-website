/**
 * Renders public/og.png (1200x630) from an inline SVG.
 * Needs Bricolage Grotesque + Manrope installed as system fonts; run:
 *   node scripts/og.mjs
 * Committed output means CI never needs the fonts.
 */
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <clipPath id="ring"><rect x="0" y="28" width="96" height="28"/></clipPath>
    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="90"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="#141218"/>
  <circle cx="1120" cy="80" r="230" fill="#6B4EFF" opacity="0.75" filter="url(#soft)"/>
  <circle cx="90" cy="620" r="180" fill="#FF6BB5" opacity="0.6" filter="url(#soft)"/>

  <g transform="translate(80,86)">
    <g transform="scale(0.62)">
      <circle cx="33" cy="28" r="22" fill="none" stroke="#D9FF4A" stroke-width="10"/>
      <circle cx="63" cy="28" r="22" fill="none" stroke="#FFFFFF" stroke-width="10"/>
      <circle cx="33" cy="28" r="22" fill="none" stroke="#D9FF4A" stroke-width="10" clip-path="url(#ring)"/>
    </g>
    <text x="78" y="30" font-family="Bricolage Grotesque" font-weight="800" font-size="30" fill="#FFFFFF" letter-spacing="-1">croodit</text>
  </g>

  <text x="80" y="270" font-family="Bricolage Grotesque" font-weight="800" font-size="86" fill="#FFFFFF" letter-spacing="-4">Stop chasing clients</text>
  <text x="80" y="366" font-family="Bricolage Grotesque" font-weight="800" font-size="86" fill="#FFFFFF" letter-spacing="-4">for fees<tspan fill="#6B4EFF">.</tspan></text>

  <text x="80" y="440" font-family="Bricolage Grotesque" font-weight="500" font-size="31" fill="#FFFFFF" opacity="0.72">Invoices on WhatsApp with a UPI pay link — in 30 seconds.</text>

  <rect x="80" y="492" width="470" height="66" rx="20" fill="#D9FF4A"/>
  <text x="315" y="535" text-anchor="middle" font-family="Bricolage Grotesque" font-weight="800" font-size="27" fill="#141218">Free for your first 20 invoices</text>

  <text x="1120" y="535" text-anchor="end" font-family="Bricolage Grotesque" font-weight="500" font-size="24" fill="#FFFFFF" opacity="0.5">croodit.com · Made in India</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
writeFileSync(new URL("../public/og.png", import.meta.url), png);
console.log(`og.png written — ${(png.length / 1024).toFixed(0)} KB`);
