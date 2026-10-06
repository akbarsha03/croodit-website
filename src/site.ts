/** Single place to flip marketing-wide facts. */
export const SITE = {
  url: "https://croodit.com",
  name: "Croodit",
  email: "hello@croodit.com",
  /** Set once the iOS app is live; until then the iPhone CTA is a waitlist. */
  appStoreUrl: null as string | null,
  /** Android launched first, 2026-09-25. */
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.croodit",
  /** Free-forever tier: unlimited invoices, capped on clients. */
  freeClients: 7,
  pro: { monthly: 199, yearly: 1599, trialDays: 14 },
};

export const waitlist = (platform: "iPhone" | "Android") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(`Croodit early access — ${platform}`)}`;

/** Play Store link with an install referrer, so Play Console shows which page and button drove the install. */
export const playLink = (page: string, placement: string) =>
  `${SITE.playStoreUrl}&referrer=${encodeURIComponent(
    `utm_source=croodit.com&utm_medium=website&utm_campaign=android_launch&utm_content=${page.replace(/^\/|\/$|\.html$/g, "").replace(/\//g, "_") || "home"}_${placement}`,
  )}`;

export const iphoneHref = SITE.appStoreUrl ?? waitlist("iPhone");
export const iphoneLabel = SITE.appStoreUrl ? "Download for iPhone" : "iPhone — join the waitlist";
