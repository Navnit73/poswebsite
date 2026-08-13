import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pharmacy Inventory Software & Batch Tracking | Medishelf",
  description:
    "Medishelf is pharmacy inventory management software built for small pharmacies: batch and expiry tracking, FEFO dispatch, stock receiving, adjustments, and low-stock alerts.",
  alternates: {
    canonical: "https://medishelf.co/inventory",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Pharmacy Inventory Management Software & Batch Tracking | Medishelf",
    description:
      "Batch tracking, FEFO dispatch, low-stock alerts, and a stock movement ledger — pharmacy inventory management software built for small pharmacies.",
    url: "https://medishelf.co/inventory",
    images: [{ url: "/images/hero-pos.png", width: 1200, height: 630, alt: "Medishelf Pharmacy Inventory Module" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmacy Inventory Management Software & Batch Tracking | Medishelf",
    description: "Every batch, tracked to the unit for small pharmacies.",
    images: ["/images/hero-pos.png"],
  },
};

const INVENTORY_FAQS = [
  {
    question: "Is Medishelf built for a small pharmacy or a hospital chain?",
    answer:
      "Medishelf is built for a small, independent pharmacy first. The setup takes an afternoon, the screens are counter-friendly, and pricing scales with a single store instead of a multi-branch hospital network.",
  },
  {
    question: "Can a small pharmacy track batches without hiring extra staff?",
    answer:
      "Yes. Batches are created automatically when stock is received, so a single pharmacist or store owner can track expiry, cost, and supplier without a dedicated inventory clerk.",
  },
  {
    question: "Does Medishelf support FEFO dispatch at the counter?",
    answer:
      "Yes. Point-of-sale search surfaces the batch with the nearest expiry date first and flags it as the best-expiry pick, so staff dispense the oldest stock without checking every box by hand.",
  },
  {
    question: "Does the software work on a tablet or a small counter screen?",
    answer:
      "The dashboard, point-of-sale terminal, and every report adjust to the screen they're opened on, from a phone in the stock room to a countertop monitor, so a small pharmacy team isn't tied to one workstation.",
  },
  {
    question: "What happens to old stock counts kept on paper or in Excel?",
    answer:
      "Product lists and opening stock import from a spreadsheet during setup, so a small pharmacy switching from paper registers or Excel keeps its existing catalog instead of re-typing it.",
  },
];

export default function InventoryPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co/" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://medishelf.co/features" },
      { "@type": "ListItem", position: 3, name: "Inventory", item: "https://medishelf.co/inventory" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Header */}
      <section className="border-b border-line bg-surface py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="label-tag flex flex-wrap items-center justify-center gap-1.5 text-xs text-ink-soft/70"
          >
            <Link href="/" className="hover:text-brand-deep">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/features" className="hover:text-brand-deep">Features</Link>
            <span aria-hidden="true">/</span> Inventory
          </nav>
          <span className="label-tag mt-4 inline-block rounded-[var(--radius-label)] border border-brand/25 bg-brand-mist px-2.5 py-1 text-[11px] font-medium text-brand-deep">
            BUILT FOR SMALL PHARMACIES
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Every batch, tracked to the unit.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Medishelf is inventory management software built for a small pharmacy — it counts stock the way your counter actually does: by batch, by expiry, by rack, without a hospital-grade learning curve.
          </p>
        </div>
      </section>

      {/* Built for small pharmacies */}
      <section className="py-16 sm:py-20" aria-labelledby="small-pharmacy-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="label-tag text-xs font-medium text-brand-deep">
              RIGHT-SIZED, NOT SCALED DOWN
            </span>
            <h2 id="small-pharmacy-heading" className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Made for a small pharmacy, not a hospital network.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Most pharmacy inventory software is built first for hospital chains and multi-branch distributors, then cut down for a smaller store. Medishelf starts from the other direction. A single-location, independent pharmacy is the primary customer, so the setup is short, the screens fit a busy counter, and nothing on the page needs a training session to understand.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">A same-day setup</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Import a product list, add opening batches, and start selling the same day. A small pharmacy team does not have a week to spare for onboarding.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">One counter, one screen</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                The point-of-sale terminal, stock list, and alerts live in one dashboard, so a single pharmacist can run sales and inventory without switching between separate tools.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">Pricing that fits one store</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                No per-branch bundles or enterprise minimums. A small pharmacy pays for what a single storefront needs, and nothing it doesn&apos;t.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Batch tracking */}
      <section className="border-t border-line bg-surface py-16 sm:py-20" aria-labelledby="batch-tracking-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10">
          <ScrollReveal>
            <span className="label-tag text-xs font-medium text-brand-deep">BATCH TRACKING</span>
            <h2 id="batch-tracking-heading" className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Multiple batches per product, each with its own story.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Every product in Medishelf can hold multiple batches. Each batch keeps its own batch number, expiry date, cost price, selling price, and supplier. When stock comes in from a purchase order, a new batch is created automatically, so nobody has to type the same details twice.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              For a small pharmacy with limited shelf and storage space, this level of detail matters more, not less. A short-dated batch sitting behind a longer-dated one is easy to lose track of by hand. Medishelf keeps every batch visible on one product card, so a quick glance shows what is close to expiry and what still has months on the shelf.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Batch number, expiry, cost and selling price per batch
              </li>
              <li className="flex gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Supplier linked to each batch for traceability
              </li>
              <li className="flex gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Rack and shelf location for faster picking
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-soft">
              <span className="label-tag">PRODUCT · AMOXICILLIN 500MG</span>
              <span className="rounded-full bg-brand-mist px-2 py-0.5 font-medium text-brand-deep">3 batches</span>
            </div>
            <div className="mt-4 divide-y divide-line rounded-lg border border-line bg-surface">
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">Batch AX-1187</p>
                  <p className="label-tag text-xs text-ink-soft/70">Expires 2026-08-01 · Cost $72 · MRP $96</p>
                </div>
                <span className="label-tag rounded-full bg-rust/10 px-2.5 py-1 text-[11px] font-semibold text-rust">Best expiry</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">Batch AX-1204</p>
                  <p className="label-tag text-xs text-ink-soft/70">Expires 2027-02-14 · Cost $70 · MRP $96</p>
                </div>
                <span className="label-tag text-xs text-ink-soft/70">214 units</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">Batch AX-1250</p>
                  <p className="label-tag text-xs text-ink-soft/70">Expires 2027-09-30 · Cost $68 · MRP $96</p>
                </div>
                <span className="label-tag text-xs text-ink-soft/70">560 units</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Receiving & adjustments */}
      <section className="py-16 sm:py-20" aria-labelledby="receiving-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="label-tag text-xs font-medium text-brand-deep">RECEIVING &amp; ADJUSTMENTS</span>
            <h2 id="receiving-heading" className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Two screens cover the whole stock room.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A small pharmacy doesn&apos;t need a separate warehouse module. It needs a fast way to log what came in and a fast way to fix what&apos;s wrong. Medishelf keeps both to a single screen each.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold text-ink">Receive stock</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Scan or search a product, enter the batch number, expiry, cost, and selling price, and Medishelf creates the batch and updates on-hand quantity in one step. The supplier is attached automatically so every unit stays traceable back to where it came from.
              </p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold text-ink">Adjust stock</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Physical counts never match the system perfectly. When they don&apos;t, a manual adjustment with a required reason — count correction, breakage, theft, or return — keeps the ledger honest and the audit trail complete.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Spreadsheet comparison */}
      <section className="border-t border-line bg-surface py-16 sm:py-20" aria-labelledby="comparison-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="label-tag text-xs font-medium text-brand-deep">SPREADSHEETS VS. MEDISHELF</span>
            <h2 id="comparison-heading" className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Why a small pharmacy outgrows a spreadsheet fast.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A spreadsheet works for the first few hundred products. Past that point, a small pharmacy loses track of which batch is closest to expiry, and stock counts drift from what&apos;s really on the shelf. Medishelf keeps the same information a spreadsheet holds, but ties it to real sales so it updates itself.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-10 overflow-x-auto rounded-[var(--radius-card)] border border-line bg-paper">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line text-ink">
                  <th scope="col" className="px-5 py-4 font-display font-semibold">Task</th>
                  <th scope="col" className="px-5 py-4 font-display font-semibold text-ink-soft">Spreadsheet</th>
                  <th scope="col" className="px-5 py-4 font-display font-semibold text-brand-deep">Medishelf</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-ink-soft">
                <tr>
                  <td className="px-5 py-4 font-medium text-ink">Stock after a sale</td>
                  <td className="px-5 py-4">Updated by hand, if remembered</td>
                  <td className="px-5 py-4">Deducted automatically, per batch</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-ink">Which batch to sell first</td>
                  <td className="px-5 py-4">Depends on who&apos;s checking dates</td>
                  <td className="px-5 py-4">Flagged automatically by FEFO</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-ink">Expiry warnings</td>
                  <td className="px-5 py-4">Only if someone scrolls the sheet</td>
                  <td className="px-5 py-4">Surfaced on the dashboard daily</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-ink">Reorder timing</td>
                  <td className="px-5 py-4">A guess based on memory</td>
                  <td className="px-5 py-4">A low-stock alert per product</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-ink">Who changed what</td>
                  <td className="px-5 py-4">No record of edits</td>
                  <td className="px-5 py-4">Full audit log with timestamps</td>
                </tr>
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      {/* Stock movement ledger */}
      <section className="border-t border-line py-16 sm:py-20" aria-labelledby="ledger-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10">
          <ScrollReveal className="overflow-x-auto rounded-[var(--radius-card)] border border-line bg-paper p-5 sm:p-6 lg:order-1">
            <p className="label-tag text-xs text-ink-soft">STOCK MOVEMENT LEDGER</p>
            <div className="mt-4 min-w-[280px] divide-y divide-line rounded-lg border border-line bg-surface font-mono text-xs">
              <div className="flex justify-between px-4 py-3"><span>PURCHASE · AX-1187</span><span className="text-brand-deep">+500</span></div>
              <div className="flex justify-between px-4 py-3"><span>SALE · INV-0831</span><span className="text-rust">−12</span></div>
              <div className="flex justify-between px-4 py-3"><span>SALE · INV-0832</span><span className="text-rust">−6</span></div>
              <div className="flex justify-between px-4 py-3"><span>RETURN · RET-0047</span><span className="text-brand-deep">+2</span></div>
              <div className="flex justify-between px-4 py-3"><span>DAMAGE · DMG-0012</span><span className="text-rust">−1</span></div>
              <div className="flex justify-between px-4 py-3"><span>ADJUSTMENT · ADJ-0003</span><span className="text-rust">−3</span></div>
              <div className="flex justify-between px-4 py-3 font-semibold text-ink"><span>BALANCE</span><span>480 units</span></div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="lg:order-2">
            <span className="label-tag text-xs font-medium text-brand-deep">FULL AUDIT TRAIL</span>
            <h2 id="ledger-heading" className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Every movement, from purchase to patient.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              The stock movement ledger records every change: purchases that add stock, sales that deduct it, returns, damage write-offs, and manual adjustments. Each entry is timestamped and linked to the source document, so a small pharmacy owner can answer &quot;where did this stock go?&quot; without digging through paper registers.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Five movement types: Purchase, Sale, Damage, Return, Adjustment
              </li>
              <li className="flex gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Running balance per batch, verified atomically
              </li>
              <li className="flex gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Linked to invoices, purchase orders, and damage reports
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Alerts */}
      <section className="py-16 sm:py-20" aria-labelledby="alerts-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">SMART ALERTS</span>
            <h2 id="alerts-heading" className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Never be surprised by an empty shelf again.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A small pharmacy runs on tight cash flow and even tighter shelf space. Overstocking ties up money that could go toward new products; understocking loses a sale to the pharmacy next door. Medishelf watches both edges for you, so ordering decisions come from real numbers instead of a walk down the aisle.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              Alerts sit on the dashboard where the day already starts, not buried in a settings menu. A pharmacist opens the morning view, sees what&apos;s low and what&apos;s expiring, and places an order before either problem reaches the counter.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rust/10 text-rust">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">Low stock alerts</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Set a reorder point per product. When stock drops below that threshold, the dashboard flags it and optionally emails you.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber/15 text-amber">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 3"/>
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">30-day expiry warnings</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Batches expiring within 30 days are highlighted on the dashboard. Push discounts, return to distributor, or flag for write-off.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">Daily email summary</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A PDF with today&apos;s sales, profit, top products, and all active alerts — in your inbox at a time you choose.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rust/10 text-rust">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">FEFO at the counter</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Point-of-sale search surfaces the batch closest to expiry first and marks it &quot;best expiry,&quot; so staff dispense the right stock without checking every box by hand.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Inventory valuation */}
      <section className="border-t border-line bg-surface py-16 sm:py-20" aria-labelledby="valuation-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10">
          <ScrollReveal>
            <span className="label-tag text-xs font-medium text-brand-deep">INVENTORY VALUE</span>
            <h2 id="valuation-heading" className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Know what&apos;s on the shelf, in money and in units.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Medishelf totals inventory value in real time, using the cost price recorded on every batch. A small pharmacy owner can open the dashboard before ordering and see exactly how much cash is sitting on the shelves, category by category, without pulling a spreadsheet together first.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              The same numbers feed the fast-moving and slow-moving product reports, so reordering decisions are based on what actually sells at your counter, not a guess carried over from last season.
            </p>
          </ScrollReveal>
          <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-5 sm:p-6">
            <p className="label-tag text-xs text-ink-soft">INVENTORY SNAPSHOT</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-lg border border-line bg-surface p-4">
                <p className="label-tag text-[11px] text-ink-soft/70">Total value</p>
                <p className="mt-1 font-display text-xl font-bold text-ink">$48,210</p>
              </div>
              <div className="rounded-lg border border-line bg-surface p-4">
                <p className="label-tag text-[11px] text-ink-soft/70">SKUs tracked</p>
                <p className="mt-1 font-display text-xl font-bold text-ink">612</p>
              </div>
              <div className="rounded-lg border border-line bg-surface p-4">
                <p className="label-tag text-[11px] text-ink-soft/70">Low stock</p>
                <p className="mt-1 font-display text-xl font-bold text-rust">9 items</p>
              </div>
              <div className="rounded-lg border border-line bg-surface p-4">
                <p className="label-tag text-[11px] text-ink-soft/70">Expiring in 30d</p>
                <p className="mt-1 font-display text-xl font-bold text-amber">14 batches</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-line bg-surface py-16 sm:py-20" aria-labelledby="testimonial-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="label-tag text-xs font-medium text-brand-deep">FROM THE COUNTER</span>
            <h2 id="testimonial-heading" className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              What small pharmacy owners notice first.
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <blockquote className="text-sm leading-relaxed text-ink-soft">
                &quot;We stopped losing stock to expiry write-offs within the first month. The best-expiry badge at the counter does most of the work for my staff.&quot;
              </blockquote>
              <figcaption className="label-tag mt-4 text-xs text-ink-soft/70">
                Owner, independent pharmacy · 1 location
              </figcaption>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <blockquote className="text-sm leading-relaxed text-ink-soft">
                &quot;Our old spreadsheet took an hour to reconcile every week. Now the stock movement ledger does it in the background, and I trust the numbers on the dashboard.&quot;
              </blockquote>
              <figcaption className="label-tag mt-4 text-xs text-ink-soft/70">
                Pharmacist-in-charge · small community pharmacy
              </figcaption>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <blockquote className="text-sm leading-relaxed text-ink-soft">
                &quot;It&apos;s the first inventory system we&apos;ve used that didn&apos;t feel built for a hospital pharmacy chain. Setup took an afternoon, not a week.&quot;
              </blockquote>
              <figcaption className="label-tag mt-4 text-xs text-ink-soft/70">
                Store manager · retail pharmacy
              </figcaption>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10">
          <ScrollReveal className="text-center">
            <span className="label-tag text-xs font-medium text-brand-deep">FAQ</span>
            <h2 id="faq-heading" className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Common questions from small pharmacy owners.
            </h2>
          </ScrollReveal>
          <div className="mt-10">
            <FaqAccordion items={INVENTORY_FAQS} />
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="border-t border-line py-16 sm:py-20" aria-labelledby="getting-started-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="label-tag text-xs font-medium text-brand-deep">GETTING STARTED</span>
            <h2 id="getting-started-heading" className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Three steps from spreadsheet to live inventory.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A small pharmacy doesn&apos;t have a week to spend on migration. Here is the full path from an existing product list to a working, batch-tracked inventory system.
            </p>
          </ScrollReveal>
          <ol className="mt-10 grid gap-5 sm:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <span className="label-tag inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-mist text-sm font-semibold text-brand-deep">1</span>
              <h3 className="mt-4 font-display font-semibold text-ink">Import your product list</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Upload a CSV of your existing catalog — names, categories, barcodes, and prices carry over, so nobody re-types a product list by hand.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <span className="label-tag inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-mist text-sm font-semibold text-brand-deep">2</span>
              <h3 className="mt-4 font-display font-semibold text-ink">Enter opening batches</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Count what&apos;s on the shelf once, enter it as opening batches with expiry and cost, and every sale from that point on updates the ledger on its own.
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <span className="label-tag inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-mist text-sm font-semibold text-brand-deep">3</span>
              <h3 className="mt-4 font-display font-semibold text-ink">Set your alerts and sell</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Set a low-stock threshold per product, turn on the daily email summary, and open the POS terminal — a small pharmacy is fully live the same day.
              </p>
            </ScrollReveal>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              See your inventory on a live dashboard.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-soft">
              Free for the first 14 days. No hospital-scale contract, no per-branch pricing — just inventory management sized for a small pharmacy.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/demo" className="btn-focus rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-deep">
                Start free trial
              </Link>
              <Link href="/sales" className="btn-focus rounded-lg border border-line px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand/40">
                Explore POS terminal →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
