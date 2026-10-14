import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Small Pharmacy Inventory Software & POS | Medishelf",
  description:
    "Small pharmacy inventory software for independent pharmacies. Manage medicines, stock, sales, purchases, suppliers, and pharmacy inventory from one simple POS system.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://medishelf.co/",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Small Pharmacy Inventory Software & POS | Medishelf",
    description:
      "Simple pharmacy inventory software for small and independent pharmacies. Manage medicines, stock, sales, purchases, and pharmacy operations in one system.",
    url: "https://medishelf.co/",
    locale: "en_US",
    images: [
      {
        url: "https://medishelf.co/images/hero-pos.png",
        width: 1200,
        height: 630,
        alt: "Medishelf pharmacy inventory software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Pharmacy Inventory Software & POS | Medishelf",
    description:
      "Simple inventory and POS software built for small and independent pharmacies.",
    images: ["https://medishelf.co/images/hero-pos.png"],
  },
};

const FAQS = [
  {
    question: "What is small pharmacy inventory software?",
    answer:
      "Small pharmacy inventory software is a specialized application designed for independent pharmacies, community chemists, and local drugstores to track medicine stock levels, batch lot numbers, expiration dates, supplier purchases, and counter sales from a single, easy-to-use platform.",
  },
  {
    question: "What is the best inventory software for a small pharmacy?",
    answer:
      "The best inventory software for a small pharmacy combines intuitive point-of-sale billing with automatic batch and expiry tracking (FEFO), automated low-stock alerts, supplier purchasing, and compliance reporting without requiring expensive servers or complex IT setup. Medishelf is purpose-built to give independent pharmacies complete control without enterprise overhead.",
  },
  {
    question: "Can pharmacy inventory software manage medicine stock and drug batches?",
    answer:
      "Yes. Medishelf tracks every medicine by generic name, strength, dosage form, batch number, and expiration date. During counter checkout, the system automatically highlights the batch closest to expiry (First-Expiry-First-Out / FEFO), helping your dispensary eliminate expired medicine write-offs.",
  },
  {
    question: "What is pharmacy inventory management?",
    answer:
      "Pharmacy inventory management is the systematic process of monitoring stock levels, ordering pharmaceuticals from suppliers, receiving distributor deliveries, organizing shelf locations, and dispensing medications at the counter to ensure medicines are always in stock while minimizing waste, shrinkage, and capital tied up in slow-moving inventory.",
  },
  {
    question: "Can pharmacy POS software track inventory in real time?",
    answer:
      "Yes. In an integrated pharmacy sales and inventory system like Medishelf, every transaction at the counter immediately deducts the sold units from the exact batch in stock. Atomic database updates ensure two cashiers can never accidentally oversell the same batch.",
  },
  {
    question: "Is Medishelf suitable for independent pharmacies and medical stores?",
    answer:
      "Yes. Medishelf is engineered specifically for single-counter independent pharmacies, community drugstores, and retail medical stores that need modern software for stock control, supplier purchase intake, and high-speed counter checkout without complicated enterprise modules or hidden per-terminal fees.",
  },
  {
    question: "Can small pharmacies use Medishelf for stock management and supplier purchasing?",
    answer:
      "Yes. Medishelf manages the entire stock cycle: you can create purchase orders for distributors, record incoming batches with cost and expiry dates upon delivery, monitor stock movement ledgers, and receive automated alerts when fast-moving medicines reach their reorder points.",
  },
];

export default function HomePage() {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://medishelf.co/#organization",
    name: "Medishelf Software",
    url: "https://medishelf.co/",
    logo: "https://medishelf.co/images/favicon.png",
    description:
      "Medishelf builds small pharmacy inventory software and POS billing systems for independent pharmacies, community chemists, and medical stores.",
    email: "sales@medishelf.co",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "sales@medishelf.co",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@medishelf.co",
        availableLanguage: ["English"],
      },
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://medishelf.co/#website",
    url: "https://medishelf.co/",
    name: "Medishelf",
    description:
      "Small pharmacy inventory software and POS system for independent pharmacies and medical stores.",
    publisher: {
      "@type": "Organization",
      "@id": "https://medishelf.co/#organization",
    },
  };

  const jsonLdApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Medishelf - Small Pharmacy Inventory Software & POS",
    publisher: {
      "@type": "Organization",
      "@id": "https://medishelf.co/#organization",
    },
    applicationCategory: "BusinessApplication",
    applicationSubCategory:
      "Pharmacy Inventory Management and Point of Sale Software",
    operatingSystem: "Web Browser, Cloud-based",
    url: "https://medishelf.co/",
    description:
      "Cloud-based small pharmacy inventory software and POS billing system for independent pharmacies and medical stores. Features batch and expiry tracking, FEFO billing, medicine stock management, low-stock alerts, and automated sales reporting.",
    offers: {
      "@type": "Offer",
      name: "Medishelf",
      price: "49.00",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      url: "https://medishelf.co/pricing",
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-10 lg:py-24">
          <div>
            <span className="label-tag inline-flex items-center gap-2 text-xs text-brand">
              BUILT FOR INDEPENDENT &amp; SMALL PHARMACIES
            </span>

            <h1 className="mt-4 font-display text-[clamp(2.25rem,5.2vw,3.75rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-ink">
              Simple Pharmacy Inventory Software for Small Pharmacies
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Medishelf is{" "}
              <strong className="font-semibold text-ink">small pharmacy inventory software</strong>{" "}
              for independent pharmacies and chemists. Track every batch and expiry date, bill faster at the counter, and see live stock in one simple system.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="btn-focus w-full rounded-full bg-brand px-7 py-3.5 text-center text-[15px] font-semibold text-white hover:bg-brand-deep sm:w-auto"
              >
                Start Free Trial
              </Link>
              <Link
                href="/features"
                className="btn-focus w-full rounded-full border border-brand px-7 py-3.5 text-center text-[15px] font-semibold text-brand hover:bg-brand hover:text-white sm:w-auto"
              >
                See How It Works
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
              <span className="flex items-center gap-1.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                7-day free trial
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                $49/month, everything included
              </span>
            </div>
          </div>

          <ScrollReveal className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Sleek browser window container */}
              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[3px_5px_30px_0_rgba(0,0,0,0.22)]">
                {/* Browser window top bar */}
                <div className="flex items-center justify-between border-b border-line bg-paper/90 px-4 py-2.5 backdrop-blur">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rust/35" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-brand/35" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md border border-line bg-surface/90 px-3 py-0.5 font-mono text-[11px] text-ink-soft">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    app.medishelf.co/pos
                  </div>
                  <div className="w-10" />
                </div>

                <Image
                  src="/images/hero-pos.webp"
                  alt="small pharmacy inventory software dashboard and POS terminal"
                  width={720}
                  height={640}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-surface py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-ink-soft/60">
            Trusted by independent pharmacies, community chemists &amp; local medical stores
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-display text-lg font-semibold text-ink-soft/40">
            <span>MedPlus&nbsp;Care</span>
            <span>Wellness&nbsp;Rx</span>
            <span>CityChemist</span>
            <span>Apex&nbsp;Pharmacy</span>
            <span>GreenCross</span>
          </div>
        </div>
      </section>

      {/* SECTION 1: PHARMACY INVENTORY MANAGEMENT MADE SIMPLE */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs text-brand">
              PHARMACY INVENTORY CONTROL
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.1]">
              Pharmacy Inventory Management Made Simple
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Small pharmacy owners often struggle with generic retail software that treats prescription drugs like ordinary retail items. Medishelf is built as a complete{" "}
              <strong className="font-semibold text-ink">
                pharmacy inventory management system
              </strong>{" "}
              tailored to the everyday realities of independent pharmacies. Every screen is engineered around medicine batches, expiration dates, schedule classifications, and dosage units — giving you total visibility over your dispensary stock without administrative burden.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <h3 className="font-display font-semibold text-ink">
                A purpose-built pharmacy inventory system
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Track generic drug names, strength, dosage forms, schedule classes, and NDC codes as first-class fields in your{" "}
                <Link href="/inventory" className="font-medium text-brand hover:underline">
                  pharmacy inventory software for small pharmacies
                </Link>
                .
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <h3 className="font-display font-semibold text-ink">
                Real-time pharmacy stock management system
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Counting stock, receiving distributor deliveries, and adjusting for damaged packages all happen in one centralized stock ledger shared across your counter staff.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <h3 className="font-display font-semibold text-ink">
                Unified pharmacy POS and inventory software
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Counter billing and dispensary stock share a single live database, ensuring your{" "}
                <Link href="/sales" className="font-medium text-brand hover:underline">
                  pharmacy point of sale and inventory system
                </Link>{" "}
                is always 100% accurate.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-ink py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-10">
          <ScrollReveal className="text-center">
            <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              <CountUp to={12000} suffix="+" />
            </p>
            <p className="mt-2 text-sm text-white/60">Medicine SKUs tracked in active stores</p>
          </ScrollReveal>
          <ScrollReveal className="text-center">
            <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              <CountUp to={45} suffix="%" />
            </p>
            <p className="mt-2 text-sm text-white/60">Fewer stockouts and expiry losses</p>
          </ScrollReveal>
          <ScrollReveal className="text-center">
            <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              <CountUp to={3.2} decimals={1} suffix="s" />
            </p>
            <p className="mt-2 text-sm text-white/60">Average counter checkout speed</p>
          </ScrollReveal>
          <ScrollReveal className="text-center">
            <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              <CountUp to={99.9} decimals={1} suffix="%" />
            </p>
            <p className="mt-2 text-sm text-white/60">Cloud uptime &amp; reliable data security</p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: MANAGE MEDICINE AND DRUG INVENTORY */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <ScrollReveal>
            <span className="label-tag text-xs text-brand">
              BATCH &amp; EXPIRY TRACKING
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.1]">
              Manage Medicine and Drug Inventory
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Effective{" "}
              <strong className="font-semibold text-ink">
                drug inventory management
              </strong>{" "}
              requires precise control at the batch level. In Medishelf, every product entry supports multiple lots, each with its unique batch number, expiration date, supplier source, and unit purchase cost. You get full control over your{" "}
              <strong className="font-semibold text-ink">
                pharmacy drug inventory
              </strong>{" "}
              and medicine stock levels.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              When dispensing medicines at the counter, Medishelf automatically highlights the batch closest to expiration using First-Expiry-First-Out (FEFO) rules. Your team dispenses the right stock without needing to inspect individual cartons manually, preventing near-expiry medicine from hiding behind newer deliveries and becoming write-offs. This makes Medishelf the dependable{" "}
              <strong className="font-semibold text-ink">
                inventory software for small pharmacy
              </strong>{" "}
              businesses.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Full stock movement ledger: purchases, counter sales, returns, damage, and adjustments
              </li>
              <li className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Automated 30-day and 60-day expiry warning alerts on your main dashboard
              </li>
              <li className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Rack, shelf, and bin location tracking per medicine for faster prescription fulfillment
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/inventory"
                className="btn-focus inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:underline"
              >
                Explore the batch &amp; inventory tracking module
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
            <div className="flex items-center justify-between text-xs text-ink-soft">
              <span className="label-tag">PRODUCT · AMOXICILLIN 500MG</span>
              <span className="rounded-full bg-brand-mist px-2 py-0.5 font-medium text-brand-deep">
                Rx Schedule
              </span>
            </div>
            <div className="mt-4 divide-y divide-line rounded-lg border border-line bg-surface">
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">Batch AX-1187 · Rack B-04</p>
                  <p className="label-tag text-xs text-ink-soft">Expires 2026-08-01 · 45 units left</p>
                </div>
                <span className="label-tag rounded-full bg-rust/10 px-2.5 py-1 text-[11px] font-semibold text-rust">
                  Best expiry (FEFO)
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">Batch AX-1204 · Rack B-04</p>
                  <p className="label-tag text-xs text-ink-soft">Expires 2027-02-14</p>
                </div>
                <span className="label-tag text-xs text-ink-soft">214 units</span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">Batch AX-1250 · Rack B-04</p>
                  <p className="label-tag text-xs text-ink-soft">Expires 2027-09-30</p>
                </div>
                <span className="label-tag text-xs text-ink-soft">560 units</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg bg-brand-mist/50 px-3 py-2 text-xs text-brand-deep">
              <span className="font-medium">Automatic stock synchronization active</span>
              <span>Updated in real time</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: PHARMACY POS AND INVENTORY IN ONE SYSTEM */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <ScrollReveal className="order-2 rounded-[var(--radius-card)] border border-line bg-ink p-6 text-paper lg:order-1 shadow-lg">
            <div className="flex items-center justify-between text-xs text-paper/60">
              <span className="label-tag">INVOICE · INV-2026-0842</span>
              <span>19 Jul 2026, 4:12 PM</span>
            </div>
            <div className="mt-4 space-y-2 border-y border-paper/15 py-4 font-mono text-sm">
              <div className="flex justify-between">
                <span>Paracetamol 500mg × 2 [Lot #PC-991]</span>
                <span>$42.00</span>
              </div>
              <div className="flex justify-between">
                <span>Cetirizine 10mg × 1 [Lot #CT-402]</span>
                <span>$18.00</span>
              </div>
              <div className="flex justify-between">
                <span>Amoxicillin 500mg × 1 [Lot #AX-1187]</span>
                <span>$96.00</span>
              </div>
            </div>
            <div className="mt-4 space-y-1.5 font-mono text-sm text-paper/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$156.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$7.80</span>
              </div>
              <div className="flex justify-between text-base font-semibold text-paper">
                <span>Total</span>
                <span>$163.80</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg bg-paper/10 px-3 py-2 text-xs">
              <span>Paid via Card / Split Payment</span>
              <span className="text-sky">✓ Stock deducted atomically</span>
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2">
            <span className="label-tag text-xs text-brand">
              COUNTER POS &amp; BILLING
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.1]">
              Pharmacy POS and Inventory in One System
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Operating separate software for counter checkout and stockroom tracking causes inventory discrepancies and slows down customer queues. As high-speed{" "}
              <strong className="font-semibold text-ink">
                small pharmacy POS software
              </strong>
              , Medishelf connects your cash register directly to your medicine stock.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Cashiers can search medicines instantly by brand name, generic composition, or barcode scan. Because billing and stock share one database, this acts as a true{" "}
              <strong className="font-semibold text-ink">
                pharmacy sales and inventory system
              </strong>
              . With keyboard shortcuts (
              <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-xs text-ink">
                F2
              </kbd>{" "}
              to search,{" "}
              <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-xs text-ink">
                F4
              </kbd>{" "}
              to discount, and{" "}
              <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-xs text-ink">
                F9
              </kbd>{" "}
              to complete checkout), transactions are fast and hassle-free even during peak store hours.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Atomic stock deduction prevents two terminals from overselling the same remaining batch
              </li>
              <li className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Hold tickets feature lets you reserve prescriptions when a patient or doctor is on the phone
              </li>
              <li className="flex gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Multiple payment modes supported: cash, credit/debit card, UPI, and split transactions
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/sales"
                className="btn-focus inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:underline"
              >
                Learn more about pharmacy POS billing features
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4: PHARMACY STOCK MANAGEMENT & CONTROL */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs text-brand">
              STOCK OPTIMIZATION
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.1]">
              Pharmacy Stock Management and Control
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Balancing cash flow and stock availability is one of the biggest challenges for independent pharmacies. Running out of critical medications damages patient trust, while over-purchasing ties up working capital. Medishelf provides robust{" "}
              <strong className="font-semibold text-ink">
                pharmacy stock control
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-ink">
                pharmacy inventory control
              </strong>{" "}
              tools to keep your shelves balanced at all times.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">
                Automated low-stock reorder thresholds
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Define minimum safety stock quantities per item. Medishelf alerts you before essential chronic medications run out, helping prevent missed sales.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">
                Multi-till stock visibility
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Whether you operate one counter or three terminals across front-desk and back-dispensary, all staff access identical, live inventory figures in real time.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">
                Accurate shelf audits &amp; cycle counts
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Perform rapid cycle stock counts by shelf or category. Reconcile physical inventory against software records with automated discrepancy logging.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 5: PURCHASING AND SUPPLIER MANAGEMENT */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs text-brand">
              PROCUREMENT &amp; VENDORS
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.1]">
              Purchasing and Supplier Management
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Inventory management doesn&apos;t start when stock is sold — it starts when you place an order with your pharmaceutical distributor. Medishelf connects vendor procurement directly to your{" "}
              <strong className="font-semibold text-ink">
                retail pharmacy inventory
              </strong>
              .
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">
                Purchase order creation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Generate clean, structured purchase orders based on reorder recommendations and send them directly to your distributors with one click.
              </p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">
                Fast stock receiving &amp; batch entry
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                When supplier boxes arrive, quickly record batch numbers, manufacturing dates, expiry dates, and purchase invoice costs to update inventory immediately.
              </p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">
                Supplier price &amp; margin tracking
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Monitor purchase price variations across distributors and track your gross dispensary margins accurately on every sold product.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OPERATIONAL WALKTHROUGH: A DAY INSIDE MEDISHELF */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs text-brand">
              DAILY PHARMACY WORKFLOW
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.1]">
              What a Day Inside Medishelf Looks Like
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Software should simplify your shift, not add extra work. Here is how Medishelf supports your pharmacy from morning delivery to evening store closing.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-6">
            <ScrollReveal className="grid gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-6 sm:grid-cols-[130px_1fr]">
              <div className="text-sm font-semibold text-brand-deep">
                9:00 AM<br />
                <span className="font-normal text-ink-soft">Receiving delivery</span>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                A shipment arrives from your pharmaceutical distributor. The pharmacist opens the purchase order, enters the batch numbers, expiry dates, and unit costs. The stock is instantly available on the counter POS with correct shelf tags.
              </p>
            </ScrollReveal>
            <ScrollReveal className="grid gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-6 sm:grid-cols-[130px_1fr]">
              <div className="text-sm font-semibold text-brand-deep">
                12:30 PM<br />
                <span className="font-normal text-ink-soft">Lunch rush queue</span>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                Multiple patients arrive at once. The cashier searches medicines by brand name or scans the barcode. Medishelf automatically selects the nearest-expiry batch (FEFO) and rings up the sale in seconds, printing a professional receipt.
              </p>
            </ScrollReveal>
            <ScrollReveal className="grid gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-6 sm:grid-cols-[130px_1fr]">
              <div className="text-sm font-semibold text-brand-deep">
                4:00 PM<br />
                <span className="font-normal text-ink-soft">Phone-in prescription</span>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                A clinic calls in a prescription for evening pickup. The pharmacist creates a hold ticket, reserving the required medicine in the inventory system so it cannot be mistakenly sold to a walk-in patient.
              </p>
            </ScrollReveal>
            <ScrollReveal className="grid gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-6 sm:grid-cols-[130px_1fr]">
              <div className="text-sm font-semibold text-brand-deep">
                8:30 PM<br />
                <span className="font-normal text-ink-soft">Register closing</span>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                Closing the store takes minutes. The owner views a comprehensive daily report showing total revenue, gross profit, payment breakdown (cash vs card), and an automated list of low-stock items that need reordering.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 6: BUILT FOR SMALL AND INDEPENDENT PHARMACIES */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs text-brand">
              WHO WE SERVE
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.1]">
              Built for Small and Independent Pharmacies
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Enterprise software designed for massive hospital networks is bloated, expensive, and difficult to set up. Medishelf is{" "}
              <strong className="font-semibold text-ink">
                pharmacy software for small business
              </strong>{" "}
              — right-sized for the operations you manage every day. If you are searching for reliable{" "}
              <strong className="font-semibold text-ink">
                small independent pharmacy software
              </strong>{" "}
              or complete{" "}
              <strong className="font-semibold text-ink">
                small pharmacy management software
              </strong>
              , Medishelf is tailored for your dispensary.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">Independent community pharmacies</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Single-counter pharmacies that need fast billing, reliable lot tracking, and{" "}
                <strong className="font-semibold text-ink">independent pharmacy inventory software</strong>{" "}
                without per-seat penalties or complicated training.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">Small pharmacy chains &amp; branches</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A reliable{" "}
                <strong className="font-semibold text-ink">pharmacy store management system</strong>{" "}
                that lets you manage 2 to 5 store locations under one centralized account while maintaining separate inventory and branch sales reports.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">Retail medical stores &amp; chemists</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Manage{" "}
                <strong className="font-semibold text-ink">medical store inventory</strong>{" "}
                for shops selling prescription drugs alongside OTC healthcare goods, wellness products, and surgical items from a single point of sale.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">Growing pharmacy businesses</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Scalable{" "}
                <strong className="font-semibold text-ink">small pharmacy software</strong>{" "}
                that grows as your catalog expands, with audit logging and role-based permissions to keep your data secure.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-8 rounded-lg border border-line bg-paper p-4 text-xs text-ink-soft sm:text-sm">
            <strong className="font-semibold text-ink">Clear Product Scope:</strong> Medishelf is built for retail and community pharmacy counters. It is not hospital inpatient ERP software or material transport logistics software. We focus 100% on making retail dispensary inventory and point of sale exceptional.
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE MEDISHELF (COMPARISON) */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs text-brand">
              SYSTEM COMPARISON
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.1]">
              Why Choose Medishelf?
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Most pharmacy owners initially rely on spreadsheets or generic retail POS tools before realizing their limitations for{" "}
              <strong className="font-semibold text-ink">
                small pharmacy inventory management
              </strong>
              . Here is why Medishelf is the preferred choice for independent dispensaries.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">Spreadsheets &amp; Paper</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2">
                  <span className="text-rust" aria-hidden="true">✕</span> No automatic expiry date notifications
                </li>
                <li className="flex gap-2">
                  <span className="text-rust" aria-hidden="true">✕</span> Prone to manual formula and entry mistakes
                </li>
                <li className="flex gap-2">
                  <span className="text-rust" aria-hidden="true">✕</span> Disconnected from checkout terminal
                </li>
                <li className="flex gap-2">
                  <span className="text-rust" aria-hidden="true">✕</span> No multi-staff concurrency protection
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">Generic Retail POS</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2">
                  <span className="text-rust" aria-hidden="true">✕</span> No native batch lot or expiry tracking
                </li>
                <li className="flex gap-2">
                  <span className="text-rust" aria-hidden="true">✕</span> Lacks generic drug and dosage fields
                </li>
                <li className="flex gap-2">
                  <span className="text-rust" aria-hidden="true">✕</span> Cannot enforce FEFO dispensing rules
                </li>
                <li className="flex gap-2">
                  <span className="text-rust" aria-hidden="true">✕</span> Requires double data entry in separate tools
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border-2 border-brand bg-surface p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-ink">Medishelf Software</h3>
                <span className="label-tag rounded-full bg-brand-mist px-2 py-0.5 text-[11px] font-semibold text-brand-deep">
                  Pharmacy Native
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-ink">
                <li className="flex gap-2">
                  <span className="text-brand" aria-hidden="true">✓</span> Automatic FEFO batch &amp; expiry tracking
                </li>
                <li className="flex gap-2">
                  <span className="text-brand" aria-hidden="true">✓</span> Instant POS billing synced with inventory
                </li>
                <li className="flex gap-2">
                  <span className="text-brand" aria-hidden="true">✓</span> Automated low-stock and reorder alerts
                </li>
                <li className="flex gap-2">
                  <span className="text-brand" aria-hidden="true">✓</span> Cloud-based with daily PDF audit reports
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs text-brand">
              ALL-IN-ONE CAPABILITIES
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.1]">
              Everything Your Pharmacy Needs from Counter to Back Office
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Every Medishelf subscription includes complete tools for inventory, billing, compliance, customer accounts, and security.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">
                Pharmaceutical Product Data
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Manage generic names, strengths, dosage forms, schedule classes, and NDC/HSN codes across your entire medicine inventory catalog.
              </p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">
                Role-Based Access Control
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Pre-configured Owner, Manager, Pharmacist, and Cashier roles with granular permissions to protect confidential pricing and margins.
              </p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 3 3 5-6" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">
                Automated Sales Reports
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Daily sales summaries, profit &amp; loss analysis, inventory valuation, and fast-moving medicine reports delivered right to your inbox.
              </p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">
                Full Audit Trail
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Every stock adjustment, sale, and price modification is logged with user timestamp and IP address for compliance and accountability.
              </p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">
                Customer Accounts &amp; Loyalty
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Track patient purchase histories, manage store credits, and build loyalty with reward points directly at the counter.
              </p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V8a5 5 0 0110 0v3" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">
                Cloud Security &amp; Tenant Isolation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Your pharmacy data is completely isolated in its own secure tenant database with automatic backups and encrypted connections.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/features"
              className="btn-focus inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:underline"
            >
              Explore all Medishelf pharmacy software features
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink py-20 text-white lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mx-auto text-sky"
              aria-hidden="true"
            >
              <path d="M7 7h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H7V7zm9 0h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H16V7z" />
            </svg>
            <p className="mt-6 font-display text-2xl font-medium leading-snug sm:text-3xl">
              &ldquo;We stopped writing expiry dates on a whiteboard the week we switched to Medishelf. The POS terminal automatically picks the right batch every time.&rdquo;
            </p>
            <p className="mt-6 text-sm text-paper/70">
              Store Pharmacist, Independent Community Pharmacy · Austin, TX
            </p>
          </ScrollReveal>
          <ScrollReveal className="mt-12">
            <p className="font-display text-xl font-medium leading-snug text-paper/90">
              &ldquo;Our monthly stock audit used to take an entire evening with three staff on a spreadsheet. Now it takes 15 minutes with Medishelf&apos;s real-time stock ledger.&rdquo;
            </p>
            <p className="mt-4 text-sm text-paper/70">
              Owner, Two-Branch Retail Medical Store · Dallas, TX
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="text-center">
            <span className="label-tag text-xs text-brand">PRICING</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.1]">
              Transparent Pricing Built for Small Pharmacies
            </h2>
            <p className="mt-3 text-ink-soft">
              One plan at $49 a month. No setup fees, no per-transaction charges, and no long-term contracts.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mx-auto mt-10 max-w-md rounded-[var(--radius-card)] border-2 border-brand bg-surface p-7 text-center">
            <h3 className="font-display font-semibold text-ink">Medishelf</h3>
            <p className="mt-3 font-display text-4xl font-bold text-ink">
              $49<span className="text-base font-normal text-ink-soft">/month</span>
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              One plan with every feature: batch &amp; expiry tracking, FEFO billing, POS, all reports and unlimited staff logins.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://core.medishelf.co/auth/register"
                className="btn-focus flex-1 rounded-full bg-brand py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-deep"
              >
                Register
              </a>
              <Link
                href="/pricing"
                className="btn-focus flex-1 rounded-full border border-line py-2.5 text-center text-sm font-semibold text-ink transition hover:border-brand/40"
              >
                See what&apos;s included
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ScrollReveal className="text-center">
            <span className="label-tag text-xs text-brand">FAQ</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.1]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-ink-soft">
              Common questions about small pharmacy inventory software and point-of-sale systems.
            </p>
          </ScrollReveal>

          <div className="mt-10">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* FINAL CONVERSION CTA */}
      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
              Stop Losing Money to Expired Medicines and Stockouts
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Join independent and community pharmacies using Medishelf to automate stock control, speed up counter checkout, and protect profit margins.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="btn-focus rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-deep"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="btn-focus rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/70"
              >
                Talk to Sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
