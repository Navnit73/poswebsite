import type { Metadata } from "next";
import PolicyShell from "@/components/PolicyShell";
import FaqExplorer, { type FaqCategory } from "@/components/FaqExplorer";

const TITLE = "FAQ — Pharmacy Inventory & POS Software Questions";
const DESCRIPTION =
  "Answers to common questions about Medishelf pharmacy inventory and POS software: setup, batch and expiry tracking, FEFO billing, pricing, refunds, data export, security and support.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://medishelf.co/faq" },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: `${TITLE} | Medishelf`,
    description: DESCRIPTION,
    url: "https://medishelf.co/faq",
    images: [{ url: "https://medishelf.co/images/hero-pos.png", width: 1200, height: 630, alt: "Medishelf FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Medishelf`,
    description: DESCRIPTION,
    images: ["https://medishelf.co/images/hero-pos.png"],
  },
};

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "getting-started",
    label: "Getting started",
    items: [
      {
        question: "What is Medishelf?",
        answer:
          "Medishelf is cloud-based pharmacy inventory management and point-of-sale (POS) software for independent pharmacies, community chemists and small chains. It combines batch and expiry tracking, FEFO billing at the counter, supplier purchasing, customer loyalty, role-based staff access, audit logs and daily reports in one browser-based system.",
        link: { href: "/features", label: "See every module" },
      },
      {
        question: "How long does it take to set up?",
        answer:
          "Most single-store pharmacies are selling through Medishelf the same afternoon. Onboarding is three steps — create your store, set country, currency and timezone, then choose a plan — and no setup call is required. Importing your product list from a spreadsheet is usually the longest part.",
      },
      {
        question: "Can I import my existing product list and opening stock?",
        answer:
          "Yes. Product lists and opening stock import from a spreadsheet during setup, so pharmacies moving from paper registers, Excel or another system keep their existing catalogue instead of re-typing it.",
        link: { href: "/blog/switch-pharmacy-software-migration-checklist", label: "Read the migration checklist" },
      },
      {
        question: "Do I need to install anything or buy a server?",
        answer:
          "No. Medishelf runs in a modern web browser, so there is no server to buy, no software to install and no IT person required. Updates ship automatically, roughly weekly, without downtime for your counter.",
      },
      {
        question: "Which devices does Medishelf work on?",
        answer:
          "The dashboard, POS terminal and reports adapt to the screen they're opened on — a countertop monitor, a laptop, a tablet or a phone in the stock room. Barcode scanners that act as a keyboard work at the POS without extra drivers.",
      },
      {
        question: "Which countries is Medishelf built for?",
        answer:
          "Medishelf is used by independent pharmacies in the USA, UK, Europe, Australia and beyond. Country, currency and timezone are set per store at onboarding so prices, taxes and reports line up locally from day one.",
      },
    ],
  },
  {
    id: "inventory",
    label: "Inventory & batch tracking",
    items: [
      {
        question: "How does batch and expiry tracking work?",
        answer:
          "Every time stock is received, Medishelf records it as a batch with its own batch number, expiry date, cost and supplier. Stock levels are calculated from atomic stock movements, so you can see exactly how many units of each batch are on the shelf and when each one expires.",
        link: { href: "/inventory", label: "Explore the inventory module" },
      },
      {
        question: "What is FEFO and does Medishelf enforce it?",
        answer:
          "FEFO means First-Expiry, First-Out: the batch that expires soonest is sold first, regardless of when it arrived. At checkout, Medishelf surfaces the nearest-expiry batch first and flags it as the best pick, so staff dispense the oldest stock without checking boxes by hand.",
        link: { href: "/blog/fefo-vs-fifo-pharmacy-inventory", label: "FEFO vs FIFO explained" },
      },
      {
        question: "Will I be warned before medicines expire or run out?",
        answer:
          "Yes. Medishelf raises near-expiry alerts so you can return or discount stock in time, and low-stock alerts when fast-moving items reach the reorder point you set for them.",
        link: { href: "/blog/pharmacy-reorder-point-par-levels", label: "How to set reorder points" },
      },
      {
        question: "Can two cashiers oversell the same batch?",
        answer:
          "No. Stock deductions happen as atomic database updates at the moment of sale, so two terminals selling the last units of the same batch at the same time cannot push stock below zero.",
      },
      {
        question: "Can I manage purchase orders and supplier deliveries?",
        answer:
          "Yes. You can raise purchase orders for distributors, receive deliveries against them with batch, cost and expiry captured on arrival, and review a full stock-movement ledger for every product.",
      },
    ],
  },
  {
    id: "pos",
    label: "Point of sale",
    items: [
      {
        question: "How fast is checkout?",
        answer:
          "The POS terminal is keyboard-first: search by name, barcode or composition, add to cart and take payment without touching the mouse. Average checkout across Medishelf stores is around 3.2 seconds.",
        link: { href: "/sales", label: "See the POS terminal" },
      },
      {
        question: "Which payment methods are supported?",
        answer:
          "Cash, card and UPI are supported, and a single sale can be split across more than one method. Payment methods are recorded against each sale so end-of-day reconciliation matches the drawer.",
      },
      {
        question: "Does Medishelf support customer loyalty?",
        answer:
          "Yes. Linking a sale to a customer automatically updates their loyalty points, lifetime spend and last-visit date — there is no separate loyalty spreadsheet to maintain.",
      },
      {
        question: "Can I control what each staff member can see and do?",
        answer:
          "Yes. Role-based access control lets owners decide who can sell, receive stock, change prices or see profit reports. Growth and Enterprise plans include custom roles, and every change is recorded in the audit log.",
      },
    ],
  },
  {
    id: "pricing-billing",
    label: "Pricing & billing",
    items: [
      {
        question: "How much does Medishelf cost?",
        answer:
          "Starter is $50 per month for a single store with up to 3 staff logins. Growth is $99 per month for up to 3 stores with unlimited staff, custom roles, daily PDF reports and priority support. Enterprise is custom-priced for larger groups and adds unlimited stores, SSO and a dedicated account manager.",
        link: { href: "/pricing", label: "Compare plans" },
      },
      {
        question: "Is there a free trial? Do I need a credit card?",
        answer:
          "Every plan starts with a 7-day free trial and no card is required. If you don't continue, the trial simply lapses — nothing is billed and there is nothing to cancel.",
        link: { href: "/demo", label: "Start a free trial" },
      },
      {
        question: "What is your refund policy?",
        answer:
          "Every plan has a 30-day money-back guarantee on your first payment. After 30 days, monthly plans run to the end of the paid cycle, and annual plans are refunded for the unused whole months. Refunds are initiated within 2 business days of approval.",
        link: { href: "/refundPolicy", label: "Read the full refund policy" },
      },
      {
        question: "Can I switch plans or cancel anytime?",
        answer:
          "Yes. You can move between plans from account settings and the change is prorated for the current billing cycle. Cancellation is self-serve and takes effect at the end of the period you've paid for.",
      },
      {
        question: "Will my price go up without warning?",
        answer:
          "No. We give at least 30 days' notice before any price change reaches your next billing cycle, and existing subscriptions are never repriced mid-term.",
        link: { href: "/tmc", label: "See billing terms" },
      },
    ],
  },
  {
    id: "data-security",
    label: "Data, privacy & security",
    items: [
      {
        question: "Who owns the data I enter into Medishelf?",
        answer:
          "You do. Every product, batch, sale and customer record belongs to your pharmacy. We claim no rights over it, never sell it, and only use it to run and improve the service.",
        link: { href: "/privacy", label: "Read the privacy policy" },
      },
      {
        question: "Can I export my data?",
        answer:
          "Yes, at any time, in CSV or JSON from account settings. After cancellation your data stays exportable for 30 days, then it is permanently deleted from production and removed from backups within 90 days.",
      },
      {
        question: "How is my pharmacy's data kept secure?",
        answer:
          "Each pharmacy's data is isolated at the database layer by tenant. Connections are encrypted with TLS 1.3 and stored data with AES-256, passwords are hashed with bcrypt, logins and APIs are rate-limited, every request is validated, and sensitive values are redacted from logs.",
        link: { href: "/security", label: "See our security practices" },
      },
      {
        question: "Is Medishelf HIPAA compliant?",
        answer:
          "There is no official government HIPAA certification for software, so we don't claim one. Medishelf is inventory and POS software rather than an electronic health record, and it is designed around privacy-first defaults such as tenant isolation and encryption. If you plan to store protected health information, contact our team first so we can confirm your use case is supported and discuss the agreements you may need.",
        link: { href: "/contact", label: "Talk to our team" },
      },
      {
        question: "Does Medishelf use cookies or tracking?",
        answer:
          "The website uses essential cookies plus privacy-respecting analytics (Google Analytics 4 and Microsoft Clarity) to understand which pages help visitors. We don't use advertising or cross-site retargeting cookies.",
        link: { href: "/cookie-policy", label: "Read the cookie policy" },
      },
    ],
  },
  {
    id: "support",
    label: "Support & reliability",
    items: [
      {
        question: "How do I get help?",
        answer:
          "Email support@medishelf.co. Starter plans include email support, Growth includes priority support, and Enterprise adds phone support and a dedicated account manager. Every reply comes from a person, not a bot.",
        link: { href: "/support", label: "See support levels" },
      },
      {
        question: "How quickly will you reply?",
        answer:
          "We reply within one business day on every plan, and much faster for priority and urgent issues — the average first reply is under an hour during business hours. Counter-down incidents are handled ahead of everything else.",
      },
      {
        question: "What uptime does Medishelf offer?",
        answer:
          "We target 99.9% monthly uptime and announce planned maintenance in advance, scheduled outside typical pharmacy trading hours. Enterprise plans can include a formal uptime SLA with defined service credits.",
      },
      {
        question: "Is the information on your blog medical advice?",
        answer:
          "No. Our guides cover pharmacy operations — inventory, stock control, billing and software — and are not medical, legal or tax advice. Always follow your regulator and a qualified professional for clinical or compliance decisions.",
        link: { href: "/editorial-policy", label: "How we write our guides" },
      },
    ],
  },
];

export default function FaqPage() {
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((c) =>
      c.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      }))
    ),
  };

  return (
    <PolicyShell
      path="/faq"
      eyebrow="Help center"
      heading="Frequently asked questions"
      intro="Straight answers about running your pharmacy on Medishelf — from the first import to the 30-day refund window. Can't find yours? Ask us and we'll add it."
      reviewedBy="Answered by the Medishelf product & support team"
      toc={FAQ_CATEGORIES.map((c) => ({ id: c.id, label: c.label }))}
      extraJsonLd={[jsonLdFaq]}
      related={["/support", "/security", "/refundPolicy"]}
      hideToc
    >
      <FaqExplorer categories={FAQ_CATEGORIES} />
    </PolicyShell>
  );
}
