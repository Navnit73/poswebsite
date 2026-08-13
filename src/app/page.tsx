import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pharmacy Inventory Software & POS System | Medishelf",
  description:
    "Medishelf is pharmacy inventory management and POS software built for small medical stores with batch tracking, FEFO billing, and low-stock alerts.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://medishelf.co/",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Medishelf — Pharmacy Inventory Management Software with POS System",
    description:
      "Batch and expiry tracking, FEFO billing, medicine stock management and a pharmacy point of sale system — inventory software built for how small pharmacies actually count stock.",
    url: "https://medishelf.co/",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-pos.png",
        width: 1200,
        height: 630,
        alt: "Medishelf Pharmacy Software POS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medishelf — Pharmacy Inventory Management Software With POS System ",
    description:
      "Batch and expiry tracking, FEFO billing, medicine stock management, and a pharmacy point of sale system, built for small pharmacies.",
    images: ["/images/hero-pos.png"],
  },
};

const FAQS = [
  {
    question: "Does Medishelf support batch and expiry tracking?",
    answer:
      "Yes. Every product can carry multiple batches, each with its own batch number, expiry date, cost price and supplier. The POS terminal sells the batch closest to expiry first (FEFO), and the dashboard flags anything expiring within 30 days.",
  },
  {
    question: "Is Medishelf a pharmacy inventory management software, or a general retail tool?",
    answer:
      "Medishelf is built specifically as pharmacy inventory management software. It understands batches, expiry dates, scheduled drugs and generic names by default, instead of treating medicines as generic retail SKUs.",
  },
  {
    question: "Can I use Medishelf as a medicine stock management system instead of a register or spreadsheet?",
    answer:
      "Yes. Medishelf replaces the paper stock register and the spreadsheet with one medicine stock management system that every staff member on shift can see and update in real time.",
  },
  {
    question: "Can I run the POS terminal without the internet?",
    answer:
      "Medishelf is a cloud-based, browser system, so an internet connection is required to process a sale. We keep the terminal fast over a normal broadband or 4G connection, and offline support is on our roadmap.",
  },
  {
    question: "Is there a free pharmacy inventory management option?",
    answer:
      "Medishelf is not free software, but every plan starts with a 7-day free trial and no card is required to begin. We chose a paid model over a free tier so support, uptime and data backups stay reliable for a system you depend on every day.",
  },
  {
    question: "How does pricing work if I have more than one store?",
    answer:
      "Each store is a separate tenant with its own inventory, staff and reports. Growth and Enterprise plans support multiple stores under one account, billed per store with a volume discount from three stores onward.",
  },
  {
    question: "Is my data separated from other pharmacies using Medishelf?",
    answer:
      "Yes. Medishelf is multi-tenant software, and every record — products, batches, sales, customers — is scoped to your tenant ID at the database layer. No other pharmacy account can query or view your data.",
  },
  {
    question: "Can I control what my staff can see and do?",
    answer:
      "Yes. Medishelf ships with Owner, Manager, Pharmacist and Cashier roles, and you can create custom roles with module-level permissions for products, inventory, sales, reports, customers and settings.",
  },
  {
    question: "Is Medishelf suitable for a medical store that isn't a pharmacy?",
    answer:
      "Yes. Any medical store selling scheduled or over-the-counter medicine by batch and expiry — pharmacy, drugstore, or general medical store — fits the same workflow, since the underlying stock and billing logic is the same.",
  },
  {
    question: "Do I get a report of each day's sales automatically?",
    answer:
      "Yes. You can schedule a daily PDF report with revenue, profit, top products and low-stock alerts, delivered by email at a time you choose, in your store's timezone.",
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
      "Medishelf builds pharmacy inventory management software with pos system and point-of-sale software for retail pharmacies and medical stores, covering batch tracking, FEFO billing and compliance reporting.",
    email: "sales@medishelf.co",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-234-5678",
        contactType: "sales",
        email: "sales@medishelf.co",
        areaServed: ["IN", "US"],
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-555-234-5678",
        contactType: "customer support",
        email: "support@medishelf.co",
        areaServed: ["IN", "US"],
        availableLanguage: ["English"],
      },
    ],
  };

  const jsonLdApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Medishelf",
    publisher: {
      "@type": "Organization",
      "@id": "https://medishelf.co/#organization",
    },
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Pharmacy Inventory Management and Point of Sale Software",
    operatingSystem: "Web",
    url: "https://medishelf.co/",
    description:
      "Cloud-based pharmacy inventory management software with pos system and point-of-sale system for small pharmacies and medical stores, with batch and expiry tracking, FEFO billing, medicine stock management, low-stock alerts and automated reporting.",
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "50.00",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        url: "https://medishelf.co/pricing",
      },
      {
        "@type": "Offer",
        name: "Growth",
        price: "99.00",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        url: "https://medishelf.co/pricing",
      },
    ],
  };

  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Medishelf Pharmacy Software",
    image: "https://medishelf.co/images/hero-pos.png",
    publisher: {
      "@type": "Organization",
      "@id": "https://medishelf.co/#organization",
    },
    description: "Pharmacy inventory and POS system",
    brand: {
      "@type": "Brand",
      name: "Medishelf",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Dr. Sarah Mitchell",
      },
      datePublished: "2024-01-15",
      reviewBody:
        "Medishelf transformed our pharmacy operations. Batch tracking and FEFO billing save us hours every week. The POS is intuitive and staff learned it in hours.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "50",
      highPrice: "99",
      offerCount: "2",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl"
          aria-hidden="true"
        ></div>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-10 lg:py-24">
          <div className="order-2 lg:order-1">
            <span className="label-tag inline-flex items-center gap-2 rounded-[var(--radius-label)] border border-brand/25 bg-brand-mist px-2.5 py-1 text-[11px] font-medium leading-none text-brand-deep">
              BUILT FOR INDEPENDENT &amp; SMALL-CHAIN PHARMACIES
            </span>

            <h1 className="mt-5 font-display font-bold leading-[1.1] tracking-tight text-ink text-[clamp(1.75rem,5vw,3.5rem)]">
              Know what&apos;s on the shelf.{" "}
              <span className="text-brand">Sell it before it expires.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Medishelf is{" "}
              <strong className="font-semibold text-ink">
                pharmacy inventory, POS &amp; reporting software
              </strong>{" "}
              built for independent and small-chain pharmacies and medical stores.
              Ring up a sale in seconds at the counter, track every lot by NDC and
              expiry date, and pull audit-ready sales &amp; inventory reports at
              close-out — without forcing a generic retail system to work like a
              pharmacy.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
              <li className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink-soft">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 text-brand"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 3v4M8 3v4M2 11h20" />
                </svg>
                Ring up sales in seconds
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink-soft">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 text-brand"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                Auto-picks nearest-expiry lot
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink-soft">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 text-brand"
                >
                  <path d="M3 3v18h18" />
                  <path d="M7 15l4-6 3 3 5-7" />
                </svg>
                Audit-ready sales &amp; stock reports
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="btn-focus w-full rounded-lg bg-brand px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-deep sm:w-auto"
              >
                Start free trial
              </Link>
              <Link
                href="/features"
                className="btn-focus w-full rounded-lg border border-line bg-surface px-6 py-3.5 text-center text-sm font-semibold text-ink transition hover:border-brand/40 sm:w-auto"
              >
                See how it works
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft/80">
              <span className="flex items-center gap-1.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-brand"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
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
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                14-day free trial
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
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Live in an afternoon
              </span>
            </div>
          </div>

          <ScrollReveal className="relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <Image
                src="/images/hero-pos.webp"
                alt="Medishelf point-of-sale screen showing a pharmacy sale with lot and expiry detail"
                width={720}
                height={640}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
                className="h-auto w-full rounded-xl object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]"
              />

              <div className="absolute -bottom-5 -left-4 hidden max-w-[220px] rounded-lg border border-line bg-surface px-4 py-3 shadow-lg sm:block">
                <p className="text-xs font-medium text-ink-soft">Expiry alert</p>
                <p className="mt-0.5 text-sm font-semibold text-ink">
                  Amoxicillin 500mg <span className="text-brand">· 12 days left</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-line bg-surface py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-ink-soft/60">
            Trusted by small to medium independent pharmacies &amp; medical stores
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-display font-semibold text-ink-soft/40">
            <span>MedPlus&nbsp;Care</span>
            <span>Wellness&nbsp;Rx</span>
            <span>CityChemist</span>
            <span>Apex&nbsp;Pharmacy</span>
            <span>GreenCross</span>
          </div>
        </div>
      </section>

      {/* PURPOSE-BUILT */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">
              PURPOSE-BUILT FOR PHARMACIES
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              Pharmacy inventory management software with pos, not a repurposed warehouse tool.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Most inventory tools started life for warehouses or general retail, then had a pharmacy skin bolted on later. Medishelf started at the other end. Every screen assumes you are managing batch numbers, expiry dates and scheduled drugs, not generic SKUs on a shelf. That difference shows up in how stock is counted, in how a sale picks a batch, and in how a report reads. If you have ever tried to make a general retail system behave like a proper{" "}
              <strong className="text-ink font-semibold">
                pharmacy stock management system
              </strong>
              , you already know why it matters.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">
                A real pharmacy inventory system
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Medishelf tracks generic name, strength, batch, expiry and schedule class as first-class fields — the way a pharmacy inventory management system should, not as an afterthought.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">
                A medicine stock management system your staff can use
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Counting stock, receiving a purchase, and adjusting for damage all live in one medicine stock management system, so nobody re-keys the same numbers twice.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">
                A pharmacy POS and inventory system in one login
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Stock and billing share one dataset, so the pharmacy point of sale and inventory system never drifts out of sync with what&apos;s actually on the shelf.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-t border-line py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-10">
          <ScrollReveal className="text-center">
            <p className="font-display text-4xl font-bold text-brand-deep">
              <CountUp to={12000} suffix="+" />
            </p>
            <p className="mt-2 text-sm text-ink-soft">SKUs tracked across live stores</p>
          </ScrollReveal>
          <ScrollReveal className="text-center">
            <p className="font-display text-4xl font-bold text-brand-deep">
              <CountUp to={45} suffix="%" />
            </p>
            <p className="mt-2 text-sm text-ink-soft">Fewer stockouts after 90 days</p>
          </ScrollReveal>
          <ScrollReveal className="text-center">
            <p className="font-display text-4xl font-bold text-brand-deep">
              <CountUp to={3.2} decimals={1} suffix="s" />
            </p>
            <p className="mt-2 text-sm text-ink-soft">Average checkout time per sale</p>
          </ScrollReveal>
          <ScrollReveal className="text-center">
            <p className="font-display text-4xl font-bold text-brand-deep">
              <CountUp to={99.9} decimals={1} suffix="%" />
            </p>
            <p className="mt-2 text-sm text-ink-soft">Uptime over the last 12 months</p>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE: FEFO */}
      <section className="border-t border-line bg-surface py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <ScrollReveal>
            <span className="label-tag text-xs font-medium text-brand-deep">
              BATCH &amp; EXPIRY
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              Sell the batch that expires first, automatically.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Every product can hold several batches, each with its own cost, selling price,
              supplier and expiry date. At the register, Medishelf highlights the batch
              closest to expiry with a &quot;best expiry&quot; badge — so first-expiry-first-out
              happens without anyone having to remember it.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              This is the core of what makes Medishelf a genuine{" "}
              <strong className="text-ink font-semibold">
                drug inventory management system
              </strong>{" "}
              rather than a plain stock counter: expiry isn&apos;t a report you check once a
              month, it&apos;s a rule the register follows on every single sale. A drugstore
              inventory system that can&apos;t do this will always leave near-expiry stock
              behind the fast movers, and that stock becomes a write-off.
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
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Full stock movement ledger — purchase, sale, damage, return, adjustment
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
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Low-stock and 30-day expiry alerts on the dashboard
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
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Rack and shelf location per product for faster picking
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
            <div className="flex items-center justify-between text-xs text-ink-soft">
              <span className="label-tag">PRODUCT · AMOXICILLIN 500MG</span>
              <span className="rounded-full bg-brand-mist px-2 py-0.5 font-medium text-brand-deep">
                Rx required
              </span>
            </div>
            <div className="mt-4 divide-y divide-line rounded-lg border border-line bg-surface">
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">Batch AX-1187</p>
                  <p className="label-tag text-xs text-ink-soft/70">Expires 2026-08-01</p>
                </div>
                <span className="label-tag rounded-full bg-rust/10 px-2.5 py-1 text-[11px] font-semibold text-rust">
                  Best expiry
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">Batch AX-1204</p>
                  <p className="label-tag text-xs text-ink-soft/70">Expires 2027-02-14</p>
                </div>
                <span className="label-tag text-xs text-ink-soft/70">214 units</span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">Batch AX-1250</p>
                  <p className="label-tag text-xs text-ink-soft/70">Expires 2027-09-30</p>
                </div>
                <span className="label-tag text-xs text-ink-soft/70">560 units</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE: POS */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <ScrollReveal className="order-2 rounded-[var(--radius-card)] border border-line bg-ink p-6 text-paper lg:order-1">
            <div className="flex items-center justify-between text-xs text-paper/60">
              <span className="label-tag">INVOICE · INV-2026-0842</span>
              <span>19 Jul 2026, 4:12 PM</span>
            </div>
            <div className="mt-4 space-y-2 border-y border-paper/15 py-4 font-mono text-sm">
              <div className="flex justify-between">
                <span>Paracetamol 500mg × 2</span>
                <span>$42.00</span>
              </div>
              <div className="flex justify-between">
                <span>Cetirizine 10mg × 1</span>
                <span>$18.00</span>
              </div>
              <div className="flex justify-between">
                <span>Amoxicillin 500mg × 1</span>
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
              <span>Paid via UPI</span>
              <span className="text-amber">✓ Verified server-side</span>
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2">
            <span className="label-tag text-xs font-medium text-brand-deep">
              POS TERMINAL
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              A register built for a queue at the counter.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Search by name, barcode or composition, add to cart, and check out — all from
              the keyboard.{" "}
              <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-xs">
                F2
              </kbd>{" "}
              to search,{" "}
              <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-xs">
                F4
              </kbd>{" "}
              to discount,{" "}
              <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-xs">
                F9
              </kbd>{" "}
              to check out.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Because billing and stock share one database, this doubles as a{" "}
              <strong className="text-ink font-semibold">
                pharmacy sales and inventory system
              </strong>
              : every invoice deducts from the right batch the instant it&apos;s printed. Run
              it as a straightforward pharmacy order management system for walk-ins, or open a
              hold ticket for a customer who&apos;s waiting on a doctor&apos;s call before
              confirming the order.
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
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Server-side price verification on every line item
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
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Atomic stock updates — two cashiers can never oversell the same batch
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
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>{" "}
                Cash, card, UPI and split payments
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* SPREADSHEET PAIN POINT */}
      <section className="border-t border-line bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">
              THE PROBLEM WITH PAPER AND SPREADSHEETS
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              Still tracking medicine stock in a register or a spreadsheet?
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A lot of small pharmacies still count stock the way they did ten years ago: a
              handwritten register, a shared spreadsheet, or a memory of &quot;we&apos;re low on
              that.&quot; It works, until it doesn&apos;t — a batch expires unnoticed, two staff
              members sell the same last strip to different customers, or closing stock never
              quite matches what the register says. Medishelf exists to close that gap
              without asking your staff to learn a complicated system.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ScrollReveal>
              <h3 className="font-display font-semibold text-ink">
                Stop losing track in a spreadsheet
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A spreadsheet doesn&apos;t know when a batch is about to expire, and it doesn&apos;t
                stop two people editing it at once. A dedicated medicine inventory system does
                both by default.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h3 className="font-display font-semibold text-ink">
                One drug inventory system, every counter
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Every till, every staff member and every store location reads from the same
                live numbers, so &quot;let me check the back&quot; stops being an answer customers
                hear.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h3 className="font-display font-semibold text-ink">
                Catches mistakes before checkout
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                As a pharmacy stock control system, Medishelf blocks a sale that would oversell
                a batch, instead of letting the mistake reach the customer and the books.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* A DAY INSIDE MEDISHELF */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">
              HOW IT ACTUALLY RUNS
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              What a day inside a pharmacy inventory management system looks like.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Software claims are easy to write. What matters is whether the tool holds up
              across an actual shift — a delivery in the morning, a queue at lunch, and a
              stock count before closing. Here&apos;s how that day runs on Medishelf.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-8">
            <ScrollReveal className="grid gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-6 sm:grid-cols-[120px_1fr]">
              <div className="text-sm font-semibold text-brand-deep">
                9:00 AM<br />
                <span className="font-normal text-ink-soft">Receiving stock</span>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                A delivery arrives from the distributor. Instead of writing quantities into a
                register, the pharmacist opens a purchase order in Medishelf, scans or types
                in each item, and records the batch number, expiry date and cost price as
                it&apos;s counted. As a pharmacy stock inventory system, Medishelf treats this
                as the moment stock legally enters the store — every batch that gets sold
                later traces back to this one entry, supplier and all.
              </p>
            </ScrollReveal>
            <ScrollReveal className="grid gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-6 sm:grid-cols-[120px_1fr]">
              <div className="text-sm font-semibold text-brand-deep">
                12:30 PM<br />
                <span className="font-normal text-ink-soft">Lunchtime queue</span>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                Three customers arrive at once. The cashier searches each item by name or
                barcode, and the pharmacy point of sale and inventory system pulls the batch
                closest to expiry automatically, without anyone stopping to check a shelf
                label. Prices are verified against the server on every line, so a discount
                typed at the counter can never quietly override what&apos;s actually approved.
              </p>
            </ScrollReveal>
            <ScrollReveal className="grid gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-6 sm:grid-cols-[120px_1fr]">
              <div className="text-sm font-semibold text-brand-deep">
                4:00 PM<br />
                <span className="font-normal text-ink-soft">A doctor calls in an order</span>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                A regular customer&apos;s doctor phones in a prescription to be picked up later.
                The pharmacist opens a hold order in the pharmacy order management system,
                reserves the stock against that customer&apos;s account, and the item drops off
                the shelf count immediately — so it can&apos;t be sold to someone else by mistake
                before the customer arrives.
              </p>
            </ScrollReveal>
            <ScrollReveal className="grid gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-6 sm:grid-cols-[120px_1fr]">
              <div className="text-sm font-semibold text-brand-deep">
                8:30 PM<br />
                <span className="font-normal text-ink-soft">Closing the register</span>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                Closing used to mean tallying a cash drawer against a handwritten total and
                hoping the numbers matched. Now the manager pulls up the day&apos;s report inside
                the medicine inventory management system: total sales, payment method
                breakdown, and any items that dropped below their reorder point. What used to
                be a spreadsheet exercise for two people is a two-minute check for one.
              </p>
            </ScrollReveal>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-soft/80">
            None of this needs a separate module for &quot;inventory control&quot; and a separate one for
            &quot;billing.&quot; Software for inventory control in pharmacy only earns its place at the
            counter if the person ringing up a sale never has to think about which system
            they&apos;re supposed to be using.
          </p>
        </div>
      </section>

      {/* FEATURE GRID TEASER */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">
              EVERYTHING IN THE STORE ROOM
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              One system, from the back shelf to the register.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A pharmacy inventory management software is only useful if the everyday parts of
              running a store live in it too — pricing, staff, customers and the numbers you
              report on. Here&apos;s what ships with every plan.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">
                Pharmaceutical product data
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Generic name, strength, dosage form, schedule class, HSN/NDC codes and storage conditions, per SKU — the fields any real medicine inventory management system needs.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">Role-based access</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Owner, Manager, Pharmacist and Cashier roles out of the box, plus custom roles with module-level permissions.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 3 3 5-6" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">
                Reports that write themselves
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Sales, profit &amp; loss, inventory value, expiry and fast-moving reports — plus a daily PDF to your inbox.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">Full audit trail</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Every edit is logged with before/after state, IP address and user agent — sensitive fields redacted automatically.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">Customer accounts</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Loyalty points, store credit and lifetime spend tracked automatically at every sale.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V8a5 5 0 0110 0v3" />
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">Secure by default</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Tenant-isolated data, hashed passwords, rate-limited logins and validated input on every request, so your pharmacy stock control system stays yours alone.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/features"
              className="btn-focus inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:underline"
            >
              See the full feature list
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="border-t border-line bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">
              WHO USES MEDISHELF
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              Built for small pharmacy inventory, not enterprise chains.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Medishelf is sized for the counter you actually run — one till, a small team,
              and stock you know by name. It scales up when you open a second location, but
              it never asks a single-store pharmacy to configure like a national chain.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">Independent pharmacies</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A single-counter pharmacy inventory system sized for small pharmacy inventory — no modules you&apos;ll never touch, no per-seat surprises.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">Small pharmacy chains</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A pharmacy store management system that keeps two or three branches on one login while still reporting on each store separately.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">Medical &amp; general stores</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A medical store management system for shops that sell medicine alongside general items, without splitting stock across two tools.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">Growing pharmacy groups</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Consolidated reporting and role-based access, so adding a fourth or fifth store doesn&apos;t mean adding a second system.
              </p>
            </ScrollReveal>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-ink-soft/80">
            One honest note on scope: Medishelf is built for the retail pharmacy counter — it isn&apos;t hospital pharmacy or hospital material management software, and it doesn&apos;t track EMS supply trucks or general clinical assets. If that&apos;s what you&apos;re after, we&apos;re not the right fit, and we&apos;d rather tell you now than after a trial.
          </p>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">
              HOW IT COMPARES
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              Spreadsheet, generic POS, or a real pharmacy inventory system?
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Most small pharmacies land on Medishelf after trying one of two things first:
              a spreadsheet, because it&apos;s free and familiar, or a generic retail point-of-sale
              tool, because it&apos;s cheap and easy to set up. Both work for a while. Here&apos;s where
              each one tends to run out of road.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">A spreadsheet</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Fine for one person, one file, and small quantities. It doesn&apos;t warn you before a batch expires, doesn&apos;t stop two people editing the same row at once, and doesn&apos;t connect to the register — so the moment a sale happens, the sheet is already out of date. A medicine stock maintain sheet works right up until the day it doesn&apos;t.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">A generic retail POS</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Handles a barcode and a price well, but has no concept of a batch or an expiry date — it treats a strip of tablets the same way it treats a bar of soap. You end up tracking expiry separately anyway, which puts you back at a spreadsheet for the part that actually matters most.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border-2 border-brand bg-paper p-6">
              <h3 className="font-display font-semibold text-ink">Medishelf</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A pharmacy inventory management software and point-of-sale system built as one product, so a sale, a batch, and an expiry date are always the same record — not three things you reconcile at the end of the month.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ONBOARDING STEPS */}
      <section className="border-t border-line py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">
              GETTING STARTED
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              Live on the shop floor in three steps.
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ScrollReveal>
              <span className="font-display text-4xl font-bold text-line">01</span>
              <h3 className="mt-3 font-display font-semibold text-ink">Create your store</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Name your pharmacy and we spin up an isolated account, just for you — no shared database, no setup call required.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <span className="font-display text-4xl font-bold text-line">02</span>
              <h3 className="mt-3 font-display font-semibold text-ink">Set business details</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Country, currency and timezone, so reports and taxes line up from day one, and staff schedules match local time.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <span className="font-display text-4xl font-bold text-line">03</span>
              <h3 className="mt-3 font-display font-semibold text-ink">Import stock &amp; start selling</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Bring in your product list, add opening batches, and open the register — most stores are ringing up real sales the same day.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-t border-line bg-brand-deep py-20 text-paper">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mx-auto text-amber"
            >
              <path d="M7 7h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H7V7zm9 0h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H16V7z" />
            </svg>
            <p className="mt-6 font-display text-2xl font-medium leading-snug sm:text-3xl">
              We stopped writing expiry dates on a whiteboard the week we switched.
              The register just won&apos;t sell the wrong batch anymore.
            </p>
            <p className="mt-6 text-sm text-paper/70">
              Store Manager, independent pharmacy · Austin, TX
            </p>
          </ScrollReveal>
          <ScrollReveal className="mt-12">
            <p className="font-display text-xl font-medium leading-snug text-paper/90">
              Our monthly stock count used to take a full evening with three of us on a
              spreadsheet. Now it&apos;s a report we run before closing.
            </p>
            <p className="mt-4 text-sm text-paper/70">
              Owner, two-branch medical store · Dallas, TX
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal className="text-center">
            <span className="label-tag text-xs font-medium text-brand-deep">PRICING</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              Priced by store, not by headache.
            </h2>
            <p className="mt-3 text-ink-soft">
              No free tier, no download, no per-transaction fee — just a monthly plan for the pharmacy inventory management software you&apos;ll actually use every shift.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-7">
              <h3 className="font-display font-semibold text-ink">Starter</h3>
              <p className="mt-3 font-display text-3xl font-bold text-ink">
                $50<span className="text-base font-normal text-ink-soft">/mo</span>
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                One store, up to 3 staff logins — a straightforward pharmacy inventory system for a single counter.
              </p>
              <Link
                href="/pricing"
                className="btn-focus mt-6 block rounded-lg border border-line py-2.5 text-center text-sm font-semibold text-ink transition hover:border-brand/40"
              >
                Compare plans
              </Link>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border-2 border-brand bg-surface p-7 shadow-md">
              <span className="label-tag rounded-full bg-brand-mist px-2.5 py-1 text-[11px] font-semibold text-brand-deep">
                Most popular
              </span>
              <h3 className="mt-3 font-display font-semibold text-ink">Growth</h3>
              <p className="mt-3 font-display text-3xl font-bold text-ink">
                $100<span className="text-base font-normal text-ink-soft">/mo</span>
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Up to 3 stores, unlimited staff — one pharmacy store management system across every branch.
              </p>
              <Link
                href="/pricing"
                className="btn-focus mt-6 block rounded-lg bg-brand py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-deep"
              >
                Compare plans
              </Link>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-7">
              <h3 className="font-display font-semibold text-ink">Enterprise</h3>
              <p className="mt-3 font-display text-3xl font-bold text-ink">Custom</p>
              <p className="mt-1 text-sm text-ink-soft">
                Chains with 10+ stores, SSO &amp; SLA, with a dedicated rollout plan for your team.
              </p>
              <Link
                href="/pricing"
                className="btn-focus mt-6 block rounded-lg border border-line py-2.5 text-center text-sm font-semibold text-ink transition hover:border-brand/40"
              >
                Compare plans
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="border-t border-line bg-surface py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ScrollReveal className="text-center">
            <span className="label-tag text-xs font-medium text-brand-deep">FAQ</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              Questions pharmacists actually ask
            </h2>
          </ScrollReveal>

          <div className="mt-10">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-line py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Your next expiry write-off starts on a spreadsheet.
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Let&apos;s make this the last one. Start the trial today and see your own stock in a real pharmacy inventory management system by this afternoon.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="btn-focus rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-deep"
              >
                Start free trial
              </Link>
              <Link
                href="/contact"
                className="btn-focus rounded-lg border border-line px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand/40"
              >
                Talk to sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
