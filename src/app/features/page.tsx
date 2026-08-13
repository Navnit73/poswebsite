import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pharmacy Inventory Software Features | Medishelf",
  description:
    "Explore Medishelf's modules: batch/expiry tracking, FEFO billing, a fast POS terminal, customer loyalty, RBAC, audit logs, and automated reports.",
  alternates: {
    canonical: "https://medishelf.co/features",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Features — Medishelf Pharmacy Inventory Management Software",
    description:
      "Batch tracking, FEFO billing, a pharmacy POS terminal, RBAC, customer loyalty, audit logs and automated reports — every module in Medishelf.",
    url: "https://medishelf.co/features",
    images: [{ url: "/images/hero-pos.png", width: 1200, height: 630, alt: "Medishelf Features Overview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features — Medishelf Pharmacy Inventory Management Software",
    description: "Every module inside Medishelf, from batch tracking to daily PDF reports.",
    images: ["/images/hero-pos.png"],
  },
};

export default function FeaturesPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co/" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://medishelf.co/features" },
    ],
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Medishelf pharmacy inventory management software modules",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pharmaceutical product data" },
      { "@type": "ListItem", position: 2, name: "Batch & expiry tracking" },
      { "@type": "ListItem", position: 3, name: "POS terminal" },
      { "@type": "ListItem", position: 4, name: "Customer accounts & loyalty" },
      { "@type": "ListItem", position: 5, name: "Role-based access control" },
      { "@type": "ListItem", position: 6, name: "Reports & analytics" },
      { "@type": "ListItem", position: 7, name: "Audit logging" },
      { "@type": "ListItem", position: 8, name: "Security & multi-store isolation" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />

      {/* Page Header */}
      <section className="border-b border-line bg-surface py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <nav aria-label="Breadcrumb" className="label-tag text-xs text-ink-soft/70">
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> Features
          </nav>
          <span className="label-tag mt-4 inline-block rounded-[var(--radius-label)] border border-brand/25 bg-brand-mist px-2.5 py-1 text-[11px] font-medium text-brand-deep">
            BUILT FOR SMALL &amp; MEDIUM PHARMACIES &amp; MEDICAL STORES
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Eight modules. One pharmacy.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            From the rack number on a bottle of syrup to end-of-day sales reports — purpose-built for small to medium size pharmacies and medical stores.
          </p>
        </div>
      </section>

      {/* Sticky Module Navigation */}
      <nav aria-label="Feature sections" className="modulenav sticky top-0 z-30 overflow-x-auto border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
        <div className="mx-auto flex max-w-7xl gap-1 px-4 lg:px-8">
          <a href="#products" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">Product data</a>
          <a href="#inventory" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">Batch &amp; expiry</a>
          <a href="#pos" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">POS terminal</a>
          <a href="#customers" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">Customers</a>
          <a href="#rbac" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">Access control</a>
          <a href="#reports" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">Reports</a>
          <a href="#audit" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">Audit trail</a>
          <a href="#security" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">Security</a>
        </div>
      </nav>

      {/* At a glance */}
      <section className="border-b border-line py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-10">
          <ScrollReveal className="text-center">
            <p className="font-display text-4xl font-bold text-brand-deep">8</p>
            <p className="mt-2 text-sm text-ink-soft">Modules, one login</p>
          </ScrollReveal>
          <ScrollReveal className="text-center">
            <p className="font-display text-4xl font-bold text-brand-deep">34</p>
            <p className="mt-2 text-sm text-ink-soft">Tracked fields per product</p>
          </ScrollReveal>
          <ScrollReveal className="text-center">
            <p className="font-display text-4xl font-bold text-brand-deep">5</p>
            <p className="mt-2 text-sm text-ink-soft">Built-in report types</p>
          </ScrollReveal>
          <ScrollReveal className="text-center">
            <p className="font-display text-4xl font-bold text-brand-deep">4+</p>
            <p className="mt-2 text-sm text-ink-soft">Roles, plus unlimited custom</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Product data */}
      <section id="products" className="scroll-mt-16 border-b border-line py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <ScrollReveal>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
              </span>
              <span className="label-tag mt-3 block text-xs font-medium text-brand-deep">01 · PRODUCT DATA</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">Built for what&apos;s actually on the label.</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                A generic product form was never going to fit a pharmacy. Medishelf&apos;s product
                record carries 34 fields a pharmacist actually needs — from schedule class
                to pregnancy category — so nothing gets tracked in a side notebook. This is
                the layer that makes Medishelf a genuine medicine inventory management system
                rather than a retail tool with medicine bolted on.
              </p>
            </ScrollReveal>

            <ScrollReveal className="mt-8 space-y-6 lg:mt-0">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">Identity &amp; composition</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Generic name &amp; brand</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Barcode &amp; SKU</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Strength &amp; dosage form</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Active ingredients</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Route of administration</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Unit of measure</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">Regulatory &amp; clinical</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Schedule class</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">HSN / NDC codes</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Prescription required flag</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Pregnancy category</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Storage conditions</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">Store operations</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Rack / shelf location</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Minimum stock level</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Tax rate per product</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Package type &amp; size</span>
                  <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Active / inactive status</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Inventory */}
      <section id="inventory" className="scroll-mt-16 border-b border-line bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M20 6L9 17l-5-5"/></svg>
              </span>
              <span className="label-tag mt-3 block text-xs font-medium text-brand-deep">02 · BATCH &amp; EXPIRY</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">Every batch, tracked to the unit.</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Products don&apos;t lose stock in one lump — they lose it in batches, at different
                costs, from different suppliers, expiring on different days. Medishelf&apos;s
                ledger records every one of those movements, and the POS terminal reads
                straight from it to sell the earliest-expiring batch first (FEFO), automatically.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div><dt className="label-tag text-xs text-ink-soft/70">MOVEMENT TYPES</dt><dd className="mt-1 font-medium text-ink">Purchase · Sale · Damage · Return · Adjustment</dd></div>
                <div><dt className="label-tag text-xs text-ink-soft/70">PER BATCH</dt><dd className="mt-1 font-medium text-ink">Cost price, selling price, supplier, expiry</dd></div>
              </dl>
              <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Low-stock alerts on the dashboard and a dedicated alerts page</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Inventory value report shows total stock valuation at cost or retail</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Manual stock adjustments always require a reason, logged against the batch</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 shadow-sm mt-8 lg:mt-0">
              <p className="label-tag text-xs text-ink-soft">STOCK MOVEMENT LEDGER</p>
              <div className="mt-4 divide-y divide-line rounded-lg border border-line bg-surface font-mono text-xs">
                <div className="flex justify-between px-4 py-3"><span>PURCHASE · AX-1187</span><span className="text-brand-deep">+500</span></div>
                <div className="flex justify-between px-4 py-3"><span>SALE · AX-1187</span><span className="text-rust">−286</span></div>
                <div className="flex justify-between px-4 py-3"><span>ADJUSTMENT · AX-1187</span><span className="text-rust">−2</span></div>
                <div className="flex justify-between px-4 py-3 font-semibold text-ink"><span>BALANCE</span><span>212 units</span></div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ink-soft/80">
                Every row above is a real entry in a pharmacy stock management system, not a
                summary — so a stock discrepancy can always be traced back to the exact
                purchase, sale or adjustment that caused it.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* POS */}
      <section id="pos" className="scroll-mt-16 border-b border-line py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:items-start">
            <ScrollReveal>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h4M6 13h8"/></svg>
              </span>
              <span className="label-tag mt-3 block text-xs font-medium text-brand-deep">03 · POS TERMINAL</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">Fast enough for a lunchtime queue.</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                A pharmacy point of sale and inventory system only earns its place at the counter
                if it&apos;s faster than the queue, not slower. Medishelf&apos;s terminal is built keyboard-first,
                searches as you type, and settles every sale against the server before it prints —
                so a busy till never oversells a batch or checks out at the wrong price.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-4 text-center transition hover:border-brand/40">
                  <kbd className="label-tag rounded border border-line bg-paper px-2 py-1 text-xs">F2</kbd>
                  <p className="mt-2 text-xs font-semibold text-ink">Search</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-4 text-center transition hover:border-brand/40">
                  <kbd className="label-tag rounded border border-line bg-paper px-2 py-1 text-xs">F4</kbd>
                  <p className="mt-2 text-xs font-semibold text-ink">Discount</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-4 text-center transition hover:border-brand/40">
                  <kbd className="label-tag rounded border border-line bg-paper px-2 py-1 text-xs">F9</kbd>
                  <p className="mt-2 text-xs font-semibold text-ink">Checkout</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-4 text-center transition hover:border-brand/40">
                  <kbd className="label-tag rounded border border-line bg-paper px-2 py-1 text-xs">Esc</kbd>
                  <p className="mt-2 text-xs font-semibold text-ink">Clear cart</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-0">
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 shadow-sm">
                <p className="text-sm font-semibold text-ink">Search by name, barcode, or composition</p>
                <p className="mt-1 text-xs text-ink-soft">Results appear as you type, with arrow-key navigation to the right item.</p>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 shadow-sm">
                <p className="text-sm font-semibold text-ink">Automatic FEFO batch selection</p>
                <p className="mt-1 text-xs text-ink-soft">A &quot;best expiry&quot; badge shows exactly which batch a sale will draw from.</p>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 shadow-sm">
                <p className="text-sm font-semibold text-ink">Item and cart-level discounts</p>
                <p className="mt-1 text-xs text-ink-soft">Apply a percentage to one line, or to the whole transaction.</p>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 shadow-sm">
                <p className="text-sm font-semibold text-ink">Customer lookup at checkout</p>
                <p className="mt-1 text-xs text-ink-soft">Link a sale to a customer to update loyalty points and lifetime spend.</p>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 shadow-sm">
                <p className="text-sm font-semibold text-ink">Cash, card, UPI &amp; split payments</p>
                <p className="mt-1 text-xs text-ink-soft">Take part-cash, part-card on the same invoice without a workaround.</p>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 shadow-sm">
                <p className="text-sm font-semibold text-ink">Server-verified pricing</p>
                <p className="mt-1 text-xs text-ink-soft">Every price is checked against the server before checkout, not just the screen.</p>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 shadow-sm">
                <p className="text-sm font-semibold text-ink">Oversell protection</p>
                <p className="mt-1 text-xs text-ink-soft">Two tills open on the same batch can never both check out the last unit.</p>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 shadow-sm">
                <p className="text-sm font-semibold text-ink">Auto-numbered invoices</p>
                <p className="mt-1 text-xs text-ink-soft">Every sale gets a sequential invoice number, searchable in invoice history.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Customers */}
      <section id="customers" className="scroll-mt-16 border-b border-line bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="rounded-[var(--radius-card)] border border-line bg-ink p-6 text-paper">
                <div className="flex items-center justify-between text-xs text-paper/60">
                  <span className="label-tag">CUSTOMER · PRIYA SHARMA</span>
                  <span className="rounded-full bg-paper/10 px-2 py-0.5 font-medium text-amber">Loyal</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-paper/60">Lifetime spend</p>
                    <p className="mt-1 font-display text-lg font-semibold">$1,240</p>
                  </div>
                  <div>
                    <p className="text-xs text-paper/60">Loyalty points</p>
                    <p className="mt-1 font-display text-lg font-semibold">312</p>
                  </div>
                  <div>
                    <p className="text-xs text-paper/60">Store credit</p>
                    <p className="mt-1 font-display text-lg font-semibold">$15.00</p>
                  </div>
                  <div>
                    <p className="text-xs text-paper/60">Last visit</p>
                    <p className="mt-1 font-display text-lg font-semibold">2 days ago</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
              <span className="label-tag mt-3 block text-xs font-medium text-brand-deep">04 · CUSTOMERS &amp; LOYALTY</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">Every regular customer, remembered automatically.</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                A customer record updates itself at every sale — no separate loyalty spreadsheet,
                no manual point-counting at the register. Link a sale to a customer once, and
                lifetime spend, loyalty points, and last-visit date all stay current on their own.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Contact details, date of birth and free-text notes per customer</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Outstanding balance and store credit tracked per account</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Loyalty points accumulate automatically on every purchase</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* RBAC */}
      <section id="rbac" className="scroll-mt-16 border-b border-line py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V8a5 5 0 0110 0v3"/></svg>
              </span>
              <span className="label-tag mt-3 block text-xs font-medium text-brand-deep">05 · ACCESS CONTROL</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">The cashier shouldn&apos;t see the P&amp;L.</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Four built-in roles cover most stores on day one, and the Owner role always keeps
                full access so nobody can lock themselves out. When the defaults don&apos;t fit, build
                a custom role from module-level permissions — view, create, edit, delete —
                across every part of the system.
              </p>
              <div className="mt-6 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">Permission modules</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Products</span>
                    <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Inventory</span>
                    <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Sales</span>
                    <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Reports</span>
                    <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Customers</span>
                    <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Users</span>
                    <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Roles</span>
                    <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink">Settings</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">Actions per module</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full border border-brand/25 bg-brand-mist px-3 py-1.5 text-xs font-medium text-brand-deep">View</span>
                    <span className="rounded-full border border-brand/25 bg-brand-mist px-3 py-1.5 text-xs font-medium text-brand-deep">Create</span>
                    <span className="rounded-full border border-brand/25 bg-brand-mist px-3 py-1.5 text-xs font-medium text-brand-deep">Edit</span>
                    <span className="rounded-full border border-brand/25 bg-brand-mist px-3 py-1.5 text-xs font-medium text-brand-deep">Delete</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
              <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 text-center shadow-sm transition hover:border-brand/40">
                <p className="font-display font-semibold text-ink">Owner</p>
                <p className="mt-1 text-xs text-ink-soft">Full access, always</p>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 text-center shadow-sm transition hover:border-brand/40">
                <p className="font-display font-semibold text-ink">Manager</p>
                <p className="mt-1 text-xs text-ink-soft">Store operations &amp; reports</p>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 text-center shadow-sm transition hover:border-brand/40">
                <p className="font-display font-semibold text-ink">Pharmacist</p>
                <p className="mt-1 text-xs text-ink-soft">Products &amp; dispensing</p>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 text-center shadow-sm transition hover:border-brand/40">
                <p className="font-display font-semibold text-ink">Cashier</p>
                <p className="mt-1 text-xs text-ink-soft">POS terminal only</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section id="reports" className="scroll-mt-16 border-b border-line bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <ScrollReveal>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>
              </span>
              <span className="label-tag mt-3 block text-xs font-medium text-brand-deep">06 · REPORTS &amp; ANALYTICS</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">Five reports, one habit: check them daily.</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                The dashboard opens on the five numbers a pharmacy owner actually checks each
                morning, then lets you drill into a full report for any of them, filtered by
                date range — today, yesterday, the last 7 or 30 days, or a full month.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-4 text-sm font-medium text-ink shadow-sm">Sales report</div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-4 text-sm font-medium text-ink shadow-sm">Profit &amp; loss</div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-4 text-sm font-medium text-ink shadow-sm">Inventory value</div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-4 text-sm font-medium text-ink shadow-sm">Expiry report</div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-4 text-sm font-medium text-ink shadow-sm sm:col-span-2">Fast-moving items</div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                Turn on a daily PDF summary — revenue, profit, top products and low-stock alerts —
                delivered by email at a time you set, in your store&apos;s own timezone.
              </p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 shadow-sm">
              <p className="label-tag text-xs text-ink-soft">DASHBOARD · TODAY</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-line bg-surface p-4">
                  <p className="text-xs text-ink-soft">Today&apos;s sales</p>
                  <p className="mt-1 font-display text-xl font-bold text-brand-deep">$2,180</p>
                </div>
                <div className="rounded-lg border border-line bg-surface p-4">
                  <p className="text-xs text-ink-soft">Monthly profit</p>
                  <p className="mt-1 font-display text-xl font-bold text-brand-deep">$9,640</p>
                </div>
                <div className="rounded-lg border border-line bg-surface p-4">
                  <p className="text-xs text-ink-soft">Inventory value</p>
                  <p className="mt-1 font-display text-xl font-bold text-brand-deep">$41,200</p>
                </div>
                <div className="rounded-lg border border-line bg-surface p-4">
                  <p className="text-xs text-ink-soft">Low stock items</p>
                  <p className="mt-1 font-display text-xl font-bold text-rust">14</p>
                </div>
                <div className="col-span-2 rounded-lg border border-line bg-surface p-4">
                  <p className="text-xs text-ink-soft">Expiring within 30 days</p>
                  <p className="mt-1 font-display text-xl font-bold text-amber">7 batches</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ink-soft/80">
                The same five figures anchor the dashboard whether you check it once a day or
                once an hour — no separate export needed to see where things stand.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Audit */}
      <section id="audit" className="scroll-mt-16 border-b border-line py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              </span>
              <span className="label-tag mt-3 block text-xs font-medium text-brand-deep">07 · AUDIT TRAIL</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">If it changed, it&apos;s logged.</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Every edit records a before-and-after state, the IP address and browser it
                came from, and a correlation ID for tracing a problem back to the exact request
                that caused it. Passwords, tokens and emails are redacted automatically before
                anything touches a log file, so the audit trail stays useful without exposing
                sensitive data.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink-soft">Login / logout</span>
                <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink-soft">Product updated</span>
                <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink-soft">Staff user created</span>
                <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink-soft">Sale processed</span>
                <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink-soft">Password reset</span>
              </div>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-5 font-mono text-xs">
              <div className="rounded-lg border border-line bg-surface p-4">
                <p className="text-ink-soft">action: <span className="text-ink">PRODUCT_UPDATED</span></p>
                <p className="mt-1 text-ink-soft">field: <span className="text-ink">selling_price</span></p>
                <p className="mt-1 text-ink-soft">before: <span className="text-rust">$96.00</span></p>
                <p className="mt-1 text-ink-soft">after: <span className="text-brand-deep">$102.00</span></p>
                <p className="mt-1 text-ink-soft">ip: <span className="text-ink">10.0.4.18</span></p>
                <p className="mt-1 text-ink-soft">correlation_id: <span className="text-ink">c7f1-9a2e</span></p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="scroll-mt-16 bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>
            </span>
            <span className="label-tag mt-3 block text-xs font-medium text-brand-deep">08 · SECURITY &amp; MULTI-STORE</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink">Your data, isolated from every other pharmacy on Medishelf.</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Medishelf is multi-tenant software: every product, batch, sale and customer record
              is scoped to your store at the database layer, so no other account can query or
              view it. Getting set up is a guided three-step flow, not a support ticket.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <h3 className="font-display font-semibold text-ink">Guided onboarding</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Create your store, set country/currency/timezone, then choose a plan — three steps, no setup call required.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <h3 className="font-display font-semibold text-ink">Rate-limited logins</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Login attempts are capped per minute, per account, to slow down anyone guessing a password.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <h3 className="font-display font-semibold text-ink">Encrypted passwords</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Passwords are hashed before storage — nobody at Medishelf can read a staff member&apos;s actual password.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <h3 className="font-display font-semibold text-ink">Self-service password reset</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">A reset link expires after one hour, so a forgotten password never becomes a standing risk.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <h3 className="font-display font-semibold text-ink">Validated input, every request</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Every form and API call is checked against a strict schema before it touches your data.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <h3 className="font-display font-semibold text-ink">Localized per store</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Country, currency and timezone are set once at onboarding, so reports and taxes line up from day one.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">See it running on your own product list.</h2>
            <p className="mt-4 text-ink-soft">Or read how five small pharmacies put these modules to work in <Link href="/casestudy" className="font-semibold text-brand-deep hover:underline">real case studies</Link>.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/demo" className="btn-focus rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-deep">Start free trial</Link>
              <Link href="/pricing" className="btn-focus rounded-lg border border-line px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand/40">View pricing</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
