/**
 * The /for cluster index. One source for the hub page, the cross-links at the foot of
 * each profession page, and the `pages` list in facts.ts — so the three cannot drift.
 * Only add a row here when a real page exists at that path.
 */
export const professions = [
  {
    slug: "zumba-trainers",
    emoji: "💃",
    label: "Zumba trainers",
    headline: "Fee collection app for Zumba trainers in India",
    blurb:
      "Two batches, 24 people, one ₹2,000 monthly pack each, and a ledger that lives in your head. Class-pack countdown, per-batch rosters and a reminder you press send on.",
  },
  {
    slug: "yoga-teachers",
    emoji: "🧘",
    label: "Yoga teachers",
    headline: "Invoice and fee tracking app for yoga teachers in India",
    blurb:
      "Home visits, a studio group and a corporate booking all pay differently for the same hour. Per-client rates, GST only on the invoices that need it, UPI on the ones that don't.",
  },
  {
    slug: "tutors",
    emoji: "📚",
    label: "Tutors and tuition teachers",
    headline: "Tuition fee collection app for tutors in India",
    blurb:
      "You teach the student and invoice the parent, per subject, on a term cycle. Sibling rates, quarterly-in-advance, and a reminder that goes to the right phone.",
  },
  {
    slug: "nutritionists",
    emoji: "🥗",
    label: "Nutritionists and dietitians",
    headline: "Invoicing app for nutritionists and dietitians in India",
    blurb:
      "Your chat is your clinic, so the plan, the daily check-ins and the money share one thread — and you have nothing to withhold when a month goes unpaid. Programmes that count down to their end date and a renewal drafted before day 90.",
  },
  {
    slug: "photographers",
    emoji: "📸",
    label: "Photographers",
    headline: "Invoicing app for photographers in India",
    blurb:
      "One booking paid in two parts, months apart. A ₹25,000 advance blocks the date and the ₹60,000 balance falls due before delivery — so your money is a diary of jobs, not a month. Two invoices, one client, one outstanding list.",
  },
] as const;
