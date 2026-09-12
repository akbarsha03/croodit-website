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
  ["/answers/how-to-send-an-invoice-on-whatsapp", "How to send an invoice on WhatsApp with a UPI payment link", "the free manual method, the upi:// link field by field, why WhatsApp Business API and payment gateways are overkill for one person, and when an app helps."],
  ["/answers/how-to-ask-a-client-for-payment-politely", "How to ask a client for payment politely", "copy-paste WhatsApp reminder scripts in English and Hinglish for day 3, 7, 10 and the firm one; the rules behind them; when a polite ask is the wrong tool."],
  ["/answers/will-i-get-a-gst-notice-for-taking-fees-on-upi", "Will I get a GST or income tax notice if I take class fees on UPI?", "the GST registration threshold for a service provider is Rs 20 lakh, not the Rs 40 lakh goods figure quoted after the 2025 Karnataka notices; why Section 44AD deems 6% profit on digital receipts against 8% on cash; what is actually reported and to whom."],
  ["/vyapar-alternative-for-trainers-and-coaches", "Vyapar alternative for trainers and coaches in India", "what Vyapar is and what it costs, verified against its own site; where Vyapar is genuinely the better choice; why a class-pack and roster model fits trainers better than an inventory model."],
  ["/for", "Who Croodit is built for", "the professions Croodit fits — trainers, coaches, tutors and creators who get paid by people, not payroll — and who it is honestly not for."],
  ["/for/zumba-trainers", "Fee collection app for Zumba trainers in India", "why a class-pack roster is a different shape from a stock ledger; the month a two-batch trainer actually has; pack countdowns, per-client status and press-send reminders."],
  ["/for/yoga-teachers", "Invoice and fee tracking app for yoga teachers in India", "six income streams priced differently for the same hour; rates saved per client; GST on the corporate invoice and off everywhere else; cash marked paid by hand."],
  ["/for/tutors", "Tuition fee collection app for tutors in India", "the payer is the parent and the student is the subject line; per-subject line items, sibling rates, quarterly-in-advance cycles and the February board fee that goes missing."],
];
