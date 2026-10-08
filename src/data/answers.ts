/**
 * The /answers cluster index, in the order the problem arrives. Feeds the "More answers" block at the
 * foot of every answer page and the guide list on the homepage, so a new answer page is linked from
 * every sibling and from the homepage the day it ships. Only add a row when a real page exists at that path.
 */
export const answers = [
  { slug: "do-i-need-a-gst-number-to-send-an-invoice", question: "Do I need a GST number or a registered business to send an invoice?" },
  { slug: "do-i-need-whatsapp-business-to-send-invoices", question: "Do I need WhatsApp Business or the WhatsApp Business API to send invoices?" },
  { slug: "how-to-send-an-invoice-on-whatsapp", question: "How do I send an invoice on WhatsApp with a UPI payment link?" },
  { slug: "is-a-upi-screenshot-proof-of-payment", question: "A client sent me a UPI payment screenshot — is that proof they paid?" },
  { slug: "how-to-track-who-paid-me-on-upi", question: "How do I track who paid me on UPI when everyone pays the same amount?" },
  { slug: "how-to-ask-a-client-for-payment-politely", question: "How do I ask a client for payment politely?" },
  { slug: "will-i-get-a-gst-notice-for-taking-fees-on-upi", question: "Will I get a GST or income tax notice if I take class fees on UPI?" },
  { slug: "how-to-raise-your-class-fees-without-losing-clients", question: "How do I tell my students I'm raising the fees?" },
];
