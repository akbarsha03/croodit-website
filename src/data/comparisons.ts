/**
 * The /compare cluster index. One source for the hub page, the cross-links at the foot
 * of each comparison page, and the competitor prices that appear on both the hub and the
 * children — so the three cannot drift.
 *
 * Only add a row to `competitors` when a real comparison page exists at that path.
 * Only add a row to `prices` when every figure has been read from the competitor's own
 * site on the date recorded in `verifiedDate` — never from a review site or directory.
 *
 * When a Competitor run refreshes a child page's prices, update the constants here in
 * the same PR. The hub and child pages both read from this file, so one edit updates
 * both surfaces.
 */
import { SITE } from "../site";

/* ------------------------------------------------------------------ */
/*  Verification log                                                   */
/* ------------------------------------------------------------------ */

/**
 * Every competitor figure below was last verified on this date, from the competitor's
 * own site. When re-verifying, update this date and the individual figures. Omit
 * anything that no longer checks out rather than guessing.
 */
export const verifiedDate = "2026-10-11";
export const verifiedHuman = "11 October 2026";

/* ------------------------------------------------------------------ */
/*  Competitor pricing — the single source of truth                    */
/* ------------------------------------------------------------------ */

export const vyapar = {
  name: "Vyapar",
  url: "https://vyaparapp.in",
  /** Source: vyaparapp.in/pricing and the live plans endpoint (api1.vyaparapp.in). */
  freeDescription:
    'Free for life on mobile, with "essential billing features"; desktop is a free trial',
  androidSilverYearly: 699,
  androidGoldYearly: 799,
  desktopSilverYearly: 3799,
  /**
   * Full plan table, as read from the live plans endpoint.
   * [plan name, list price string, selling price string]
   */
  plans: [
    ["Silver, 1 year, Android", "₹1,199", "₹699"],
    ["Gold, 1 year, Android", "₹1,399", "₹799"],
    ["Silver, 1 year, Desktop", "₹6,399", "₹3,799"],
    ["Gold, 1 year, Desktop", "₹7,699", "₹4,099"],
    ["Silver, 1 year, Desktop + Mobile", "₹7,499", "₹4,399"],
    ["Gold, 1 year, Desktop + Mobile", "₹9,099", "₹4,799"],
    ["Silver, 3 years, Android", "₹2,599", "₹1,499"],
  ] as const,
  sendsReminder: "Vyapar sends automated WhatsApp reminders",
  usableToday: "Yes — Android, iOS, Windows and Mac",
} as const;

export const riffit = {
  name: "Riffit",
  url: "https://riffit.in",
  /**
   * Source: riffit.in/pricing on 2026-10-05.
   * Monthly price is now ₹249. The annual rate is ₹199/mo billed yearly (₹2,388/year).
   * The blog and the pricing page now agree at ₹249/month.
   */
  freeDescription: "Free forever, 5 invoices a month and 5 active clients",
  proMonthly: 249,
  proYearly: 2388,
  /** The monthly-equivalent when billed annually. */
  proAnnualMonthly: 199,
  sendsReminder:
    "Riffit sends — email on the free plan, WhatsApp on Pro",
  usableToday: "Yes — a web app",
  /** Riffit Free tier features, read from riffit.in/pricing on 2026-10-05. */
  freeFeatures: [
    "5 invoices a month (drafts count)",
    "5 active clients in total",
    "3 saved services",
    "WhatsApp invoice creation (short form in the chat)",
    "PDF invoices, with a Riffit watermark",
    "Unlimited quotations, client accepts online",
    "3 contracts lifetime, with e-signature and an audit trail",
    "Email delivery and email reminder on the due date only",
  ] as const,
  /** Riffit Pro tier features, read from riffit.in/pricing on 2026-10-05. */
  proFeatures: [
    "Unlimited invoices, clients, contracts and saved services",
    "AI natural-language invoicing — describe the job in a sentence or a voice note (10 a day)",
    "No watermark, plus your logo, brand colour and fonts on PDFs",
    "Six PDF designs (Classic, Minimal, Poster, Bracket, Ink, Headline)",
    "WhatsApp delivery of invoices, quotes and contracts",
    "Full reminder schedule — before, on and after the due date, email and WhatsApp",
    "Unlimited quotations with AI creation in WhatsApp",
  ] as const,
} as const;

export const fitqii = {
  name: "Fitqii",
  url: "https://fitqii.com",
  /** Source: fitqii.com on 2026-09-21, re-read unchanged on 2026-10-11. */
  freeClients: 25,
  proMonthly: 3749,
  proClients: 100,
  primeMonthly: 14999,
  businessFromMonthly: 15000,
  freeDescription: `Starter, free up to 25 clients`,
  sendsReminder: "Fitqii sends automated reminders",
  usableToday: "Yes — iOS and Android apps, plus a web dashboard",
  /**
   * Full plan table: [plan, price string, coverage string].
   * The solo-coach tier publishes no price — "Schedule a call".
   */
  plans: [
    ["Starter", "Free", "Up to 25 clients, on the Fitqii app"],
    ["Pro", "₹3,749/month", "Up to 100 clients, on the Fitqii app"],
    ["Prime", "₹14,999/month", "Up to 500 clients, custom branded app"],
    ["Unlimited", "Custom, on request", "Unlimited clients, custom branded app"],
    [
      "Fitqii for Business",
      "From ₹15,000/month",
      "A team of coaches: whitelabelled apps, API integration, priority support",
    ],
  ] as const,
  /** What Fitqii does that Croodit does not. */
  features: [
    "Workout plan builder and an exercise library",
    "Nutrition plan builder and a nutrition library",
    "Class and session scheduling, plus roster management",
    "Attendance tracking, for the trainer and the client",
    "Progress tracking, weekly goals, body composition calculators",
    "In-app chat, one-to-one and group, with session ratings and feedback",
    "Challenges, leaderboards and a FitBuddy feature for joint workouts",
    "Apple Health, Google Fit and Strava integration",
    "Customer analytics, reporting and a lead management system",
    "Payment management through a payment gateway you connect yourself",
  ] as const,
} as const;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/* ------------------------------------------------------------------ */
/*  Cluster index — one row per comparison page, like professions.ts   */
/* ------------------------------------------------------------------ */

export const comparisons = [
  {
    slug: "vyapar-alternative-for-trainers-and-coaches",
    href: "/vyapar-alternative-for-trainers-and-coaches",
    name: "Vyapar alternative for trainers and coaches",
    pole: "The inventory pole",
    blurb:
      "Vyapar is GST billing software built around items and stock. Read it if part of what you earn comes from things you sell off a shelf.",
    competitor: vyapar,
  },
  {
    slug: "croodit-vs-fitqii",
    href: "/croodit-vs-fitqii",
    name: "Croodit vs Fitqii",
    pole: "The practice-management pole",
    blurb:
      "Fitqii runs a fitness practice — workout and nutrition plans, attendance, chat, progress — and collects fees inside its own app. Read it if you write individual programmes.",
    competitor: fitqii,
  },
  {
    slug: "croodit-vs-riffit",
    href: "/croodit-vs-riffit",
    name: "Croodit vs Riffit",
    pole: "The project-work pole",
    blurb:
      "Riffit is WhatsApp invoicing for freelancers, with quotations and e-signed contracts. Read it if every job is quoted, signed and priced differently.",
    competitor: riffit,
  },
] as const;
