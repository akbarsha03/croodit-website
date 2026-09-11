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
] as const;
