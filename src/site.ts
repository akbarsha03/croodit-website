/** Single place to flip marketing-wide facts. */
export const SITE = {
  url: "https://croodit.com",
  name: "Croodit",
  email: "hello@croodit.com",
  /** Set once the iOS app is live; until then CTAs read "Get early access". */
  appStoreUrl: null as string | null,
  /** Set once the Android app is live. */
  playStoreUrl: null as string | null,
  /** Free-forever tier: unlimited invoices, capped on clients. */
  freeClients: 7,
  pro: { monthly: 199, yearly: 1599, trialDays: 14 },
};

export const waitlist = (platform: "iPhone" | "Android") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(`Croodit early access — ${platform}`)}`;
