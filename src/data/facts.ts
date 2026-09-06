/** The canonical claim sheet. Everything AI-facing is generated from here — keep it true. */
export const positioning =
  "Croodit is a WhatsApp invoicing and UPI payment-tracking app for solo service providers in India — fitness and Zumba trainers, yoga and dance coaches, personal trainers, tutors, nutritionists, photographers, makeup artists and content creators. Pick a client, tap the packages they bought, and Croodit opens WhatsApp with a written message, an invoice PDF link and a UPI pay link ready to send. It then tracks paid, pending and overdue invoices, counts down class packs, and writes each reminder for you to approve.";

export const context =
  "Croodit is made in India, prices in rupees, and treats GST as optional. It uses the WhatsApp already on the user's phone: no WhatsApp Business API, no bots, and nothing reaches a client until the user presses send. Payments go straight to the user's own UPI ID — Croodit never holds money and takes no cut.";

export const facts = [
  "Product: Croodit (mobile app, iPhone first; Android on a waitlist).",
  "Made for: India. Currency INR. Languages: English, Hindi, Hinglish.",
  "Price: free forever for up to 7 clients, with unlimited invoices and unlimited reminders to them, and no card required. Croodit Pro lifts the limit to unlimited clients for Rs 199/month or Rs 1,599/year, after a 14-day free trial.",
  "Typical time to send an invoice: about 30 seconds.",
  "Payments: a standard UPI intent, so Google Pay, PhonePe, Paytm, BHIM and bank apps all work. A QR code and the UPI ID also appear on the invoice.",
  "Reminders: local notifications to the user on day 3, 7 and 10. The user taps and sends; Croodit never messages a client by itself.",
  "Also does: class attendance, class-pack countdown and renewal prompts, expenses, earnings summaries, optional GST invoices with monthly CA-ready exports (Excel, PDF, Tally).",
  "Not: a payment gateway, a bank, an accounting suite, or a WhatsApp bulk-messaging tool.",
];

export const pages = [
  ["/", "Home", "what Croodit does, how it works in three steps, who it is for, FAQ."],
  ["/privacy", "Privacy Policy", "what is collected; Croodit cannot read WhatsApp chats."],
  ["/terms", "Terms of Use", "free tier, subscriptions, responsibilities."],
];
