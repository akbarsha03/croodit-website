/** Answer-engine copy: each answer must stand alone when quoted out of context. */
import { SITE } from "../site";

const { freeClients, pro } = SITE;
const yearly = pro.yearly.toLocaleString("en-IN");
// ponytail: "${freeClients + 1}th" is right for 8; fix the suffix if the cap ever makes it 21st/22nd/23rd.
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
    a: `Croodit is free forever for up to ${freeClients} clients — unlimited invoices to them, unlimited reminders, no card and no GST registration needed. Croodit Pro lifts the limit to unlimited clients at ₹${pro.monthly} per month or ₹${yearly} per year, after a ${pro.trialDays}-day free trial. Pro also adds monthly GST reports for your CA, your own pay-link domain and attendance QR check-in.`,
  },
  {
    q: `What happens when I get my ${freeClients + 1}th client?`,
    a: `Nothing breaks. The ${freeClients} clients you already have keep working exactly as before — their invoices, history and reminders are untouched. Adding an ${freeClients + 1}th client is what starts your ${pro.trialDays}-day Pro trial, and Pro is ₹${pro.monthly} per month or ₹${yearly} per year for unlimited clients. If you never go past ${freeClients} clients, you never pay anything.`,
  },
  {
    q: "Do I need GST registration to use Croodit?",
    a: "No. GST is optional and off by default. If you are registered, turn it on and Croodit adds your GSTIN, the tax lines and a monthly CA-ready summary to every invoice. If you are under the threshold, your invoices simply have no tax lines.",
  },
  {
    q: "Every CA tells me something different about GST and I can't afford one on retainer anyway. If I start sending proper invoices, am I signing up for GST filing?",
    a: "No. Sending an invoice registers you for nothing. GST registration for a service provider becomes compulsory only once receipts cross ₹20 lakh a year (₹10 lakh in Manipur, Mizoram, Nagaland and Tripura) — a trainer with 20 clients at ₹2,500 a month is at about ₹6 lakh. Below the line there are no GST returns to file, and Croodit keeps GST off, so your invoices carry no tax lines. Income tax is separate and applies whether you use an app, a notebook or nothing. What an app changes is what you have in March: a numbered list of every invoice, who paid and when, instead of a year of WhatsApp chats and bank credits to match up. That makes a one-off visit to a CA short, or lets you file a simple return yourself. Croodit Pro adds a monthly CA-ready export in Excel, PDF or Tally format. Croodit is not a tax adviser: if you are near the threshold or earn from clients abroad, pay for the CA.",
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
    q: "A parent says their child missed 4 tuition classes this month and wants to pay less. I charge a flat monthly fee. How do I handle missed classes without an argument every month?",
    a: "Decide the rule once, tell every family before the month starts, and apply it to everyone. There are two honest rules. A monthly fee pays for a reserved seat, not for attendance: the batch runs and the seat is held whether or not the child comes, so the fee stays the same, and you can offer a make-up class if you want to. A class pack is paid per class: a 12-class pack with a validity date means missed classes carry over until the date runs out, so the parent who expects to miss a lot pays for what they use. Most tutoring policies online are written for agencies with signed contracts, and you do not have one, so put your rule in the first invoice message instead — one line such as \"Fee is for the month; missed classes are not deducted, make-ups on Saturdays.\" Croodit supports both models: a monthly package, or a class pack it counts down as you tick who showed up after each class. That attendance list is what you show a parent who remembers 4 absences when there were 2. Croodit does not change a fee by itself or message the parent; you decide, and you send.",
  },
  {
    q: "A client paid ₹6,000 upfront for a 12-class pack, came 4 times, and now wants the rest of the money back. I never wrote down a refund rule. What do I owe them?",
    a: "With no written rule, the client gets to say what they were promised, so settle this one fairly and write the rule down before you sell the next pack. The fair default is to refund the classes they did not use at the pack rate: ₹6,000 for 12 classes is ₹500 a class, 8 unused classes is ₹4,000 back. Some trainers charge the used classes at the drop-in rate instead, for example 4 classes at ₹600 is ₹2,400 used and ₹3,600 back. That is only fair if the drop-in rate was stated when they bought the pack. Clients usually argue because of a rule they hear about for the first time on the day they ask for money back, such as a validity date or \"no refunds\". So for the next pack, put one line in the invoice message, for example \"12 classes, valid 3 months, unused classes refundable at ₹500 each within the validity.\" Croodit counts down each client's pack as you tick attendance, so you can show which 4 classes they came to and work out the refund from that. Croodit is not a payment gateway, so you send any refund from your own UPI app. Croodit does not change a fee or message the client for you.",
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
