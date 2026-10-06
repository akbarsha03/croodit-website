/** Answer-engine copy: each answer must stand alone when quoted out of context. */
export const faq = [
  {
    q: "What is Croodit?",
    a: "Croodit is a WhatsApp invoicing and payment-tracking app for Indian trainers, coaches, tutors and creators. You pick a client and a package, and Croodit writes a proper invoice, opens WhatsApp with the message ready, and attaches a UPI pay link. It then tracks who paid, who is pending and who needs a reminder.",
  },
  {
    q: "How do I send an invoice on WhatsApp with Croodit?",
    a: "Three taps. Pick the client, tap the packages they bought, then tap send. Croodit opens WhatsApp with a written message, the invoice PDF link and a UPI pay link already in place — you press send yourself. Most invoices go out in about 30 seconds.",
  },
  {
    q: "How much does Croodit cost?",
    a: "Croodit is free forever for up to 7 clients — unlimited invoices to them, unlimited reminders, no card and no GST registration needed. Croodit Pro lifts the limit to unlimited clients at ₹199 per month or ₹1,599 per year, after a 14-day free trial. Pro also adds monthly GST reports for your CA, your own pay-link domain and attendance QR check-in.",
  },
  {
    q: "What happens when I get my 8th client?",
    a: "Nothing breaks. The 7 clients you already have keep working exactly as before — their invoices, history and reminders are untouched. Adding an 8th client is what starts your 14-day Pro trial, and Pro is ₹199 per month or ₹1,599 per year for unlimited clients. If you never go past 7 clients, you never pay anything.",
  },
  {
    q: "Do I need GST registration to use Croodit?",
    a: "No. GST is optional and off by default. If you are registered, turn it on and Croodit adds your GSTIN, the tax lines and a monthly CA-ready summary to every invoice. If you are under the threshold, your invoices simply have no tax lines.",
  },
  {
    q: "Which UPI apps can my clients pay with?",
    a: "Any of them. The pay link opens a standard UPI intent, so Google Pay, PhonePe, Paytm, BHIM and every bank app work. Clients can also scan the QR on the invoice or copy your UPI ID. If they pay you in cash or directly, you tap \"Mark paid\" and the invoice closes.",
  },
  {
    q: "My clients have been warned never to tap payment links on WhatsApp. Will they think my Croodit pay link is a scam?",
    a: "That warning is about links from strangers and requests that ask for a UPI PIN to receive money. Your invoice comes from your own number, in the chat they already have with you, and Croodit never messages anyone by itself. The link opens a standard UPI payment to your UPI ID for the invoice amount, so their own UPI app shows who they are paying before they enter a PIN, and a PIN is for paying. Anyone still wary can scan the QR or copy your UPI ID from the invoice instead.",
  },
  {
    q: "Does Croodit message my clients automatically?",
    a: "Never. Reminders are notifications to you, not messages to them. On day 3, 7 and 10 Croodit pings you; you tap the notification and WhatsApp opens with a polite reminder and the pay link already typed. Nothing leaves your phone until you press send — no bots, no WhatsApp Business API, no spam.",
  },
  {
    q: "Do I need WhatsApp Business or a separate number?",
    a: "No. Croodit uses the WhatsApp you already have on your phone, from your own number, so clients see the same chat they always do.",
  },
  {
    q: "Can Croodit track class packs and attendance?",
    a: "Yes. Tick who showed up after a class and Croodit counts down each client's 12-class pack or monthly validity. It tells you when a pack is about to run out so you can send the renewal invoice before they drop off.",
  },
  {
    q: "Is Croodit available on Android and iPhone?",
    a: "Croodit is live on Android now — download it free from the Google Play Store. The iPhone app comes later; join the iPhone waitlist at croodit.com and you will hear the day it opens.",
  },
  {
    q: "Who is Croodit for?",
    a: "Anyone paid by people rather than payroll: Zumba and fitness trainers, yoga and dance coaches, personal trainers, pilates instructors, tutors, nutritionists, photographers, makeup artists and content creators. Croodit pre-fills your service menu based on what you do — monthly packs, class bundles, drop-ins, retainers or one-off shoots.",
  },
  {
    q: "I track my class fees in a WhatsApp chat and a notebook — do I really need an app for this?",
    a: "Not if you have five people. A notebook works until the roster grows past about eight, or until you run two batches, or until somebody pays from a family member's account and the credit says a name you do not recognise. The notebook breaks because tracking a payment is two separate jobs: remembering who owes you, and matching bank credits to those names. At twelve or twenty people paying roughly the same amount, matching credits to names from memory is an evening's work every month — and the first month you skip it, someone stops paying and you do not notice until March. Croodit does the first job when you send the invoice and shrinks the second one to tapping Mark paid against each confirmed credit. The notebook stays accurate for two months; the invoice list stays accurate because every unpaid fee sits on a pending list that does not forget.",
  },
  {
    q: "I run 3 batches — a morning class, an evening class and weekend workshops, all with different fees. Can one app handle that?",
    a: "Yes. Set up each batch as a separate package — say ₹2,000 a month for mornings, ₹1,500 for evenings, ₹500 per session for weekend workshops. Clients who attend two batches get two invoices, one per batch, so when Priya pays for mornings but not evenings you can see exactly which fee is pending instead of guessing which half of a combined amount arrived. Each batch has its own pack size and validity if you sell class packs, and the reminders fire only for the fee that is actually overdue.",
  },
  {
    q: "I have 20 students and I just want to know which ones have not paid this month — can Croodit tell me that in one tap?",
    a: "That is the whole point. Open the app and the pending list shows every client whose invoice is open — no counting bank credits, no scrolling through UPI transaction history, no checking a spreadsheet you stopped updating in September. Each name on the list is one invoice you have not marked paid. Tap a name and the reminder is already drafted, with the pay link included, ready for you to send from your own WhatsApp.",
  },
];
