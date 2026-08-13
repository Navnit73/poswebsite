import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pharmacy POS System & Billing Software | Medishelf",
  description:
    "Medishelf POS terminal is built for small pharmacy counters: keyboard-driven checkout, FEFO batch selection, split payments, and server-verified pricing.",
  alternates: {
    canonical: "https://medishelf.co/sales",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Pharmacy POS System & Billing Software | Medishelf",
    description:
      "A register built for the small pharmacy counter: search, discount, checkout from the keyboard, with server-verified prices and automatic FEFO batching.",
    url: "https://medishelf.co/sales",
    images: [{ url: "/images/hero-pos.png", width: 1200, height: 630, alt: "Medishelf Pharmacy POS Terminal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmacy POS System & Billing Software | Medishelf",
    description: "A register built for the small pharmacy counter.",
    images: ["/images/hero-pos.png"],
  },
};

export default function SalesPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co/" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://medishelf.co/features" },
      { "@type": "ListItem", position: 3, name: "POS Terminal", item: "https://medishelf.co/sales" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Page Header */}
      <section className="border-b border-line bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <nav aria-label="Breadcrumb" className="label-tag text-xs text-ink-soft/70">
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span>
            <Link href="/features" className="hover:text-brand-deep">Features</Link> <span aria-hidden="true">/</span> POS Terminal
          </nav>
          <span className="label-tag mt-4 inline-block rounded-[var(--radius-label)] border border-brand/25 bg-brand-mist px-2.5 py-1 text-[11px] font-medium text-brand-deep">
            POS TERMINAL FOR SMALL PHARMACY
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            A register built for the small pharmacy counter.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Search, add, discount, checkout — all from the keyboard. Built for the pace of a small pharmacy, where one cashier serves the whole queue and every second at the counter counts.
          </p>
          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-soft" aria-label="Key benefits">
            <li className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand"><path d="M20 6L9 17l-5-5"/></svg> No dedicated IT staff needed</li>
            <li className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand"><path d="M20 6L9 17l-5-5"/></svg> Set up in minutes</li>
            <li className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand"><path d="M20 6L9 17l-5-5"/></svg> One cashier, full control</li>
          </ul>
        </div>
      </section>

      {/* Why small pharmacies need a different register */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <ScrollReveal>
            <span className="label-tag text-xs font-medium text-brand-deep">WHY IT&apos;S DIFFERENT</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">A small pharmacy runs on thinner margins and fewer hands.</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
              <p>
                A large retail chain can absorb a wrong discount, a missed batch, or an untrained temp at the register. A small pharmacy cannot. Every sale matters, every expired strip is money lost, and most of the time, one person is running the counter, checking stock, and greeting the next customer in line — all at once.
              </p>
              <p>
                Generic retail point-of-sale software is not built for this. It has no concept of batches, expiry dates, or prescription rules, so a small pharmacy team ends up bolting on spreadsheets and sticky notes to cover the gaps. Medishelf&apos;s terminal starts from the pharmacy counter, not a generic retail till, so nothing needs to be bolted on.
              </p>
              <p>
                The result is a POS system a small pharmacy owner can hand to a new cashier on day one, trusting that prices, tax, and stock stay correct without anyone standing over their shoulder.
              </p>
              <p>
                Most software vendors design for the average customer, and the average customer in their data is a mid-size chain with a back office. A small pharmacy gets the leftover features: settings nobody asked for, reports nobody reads, and a support queue with a two-day wait. Medishelf flips that order. The counter workflow comes first, the back office comes second, because that is the order a small pharmacy actually uses the software in.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* A day at the counter */}
      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <ScrollReveal>
            <span className="label-tag text-xs font-medium text-brand-deep">A TYPICAL AFTERNOON</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">What a busy hour looks like at a small pharmacy.</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
              <p>
                It&apos;s five in the evening. Six people are waiting: two with prescriptions, one asking for a specific brand of cough syrup, one buying a single strip of paracetamol, and two just browsing the shelf near the counter. There is one cashier, and there is no time to open a second screen, look up a manual, or wait for a page to load.
              </p>
              <p>
                The cashier presses <span className="font-mono text-ink">F2</span>, types the first few letters of a product name, and the list narrows before the keystroke debounce even finishes. A batch is already pre-selected — the one closest to expiry — so there is nothing to double-check. A regular customer is linked with <span className="font-mono text-ink">F6</span>, a five percent discount goes on with <span className="font-mono text-ink">F4</span>, and the sale closes with <span className="font-mono text-ink">F9</span>, split between cash and UPI because that is exactly how the customer wants to pay.
              </p>
              <p>
                None of this needs a mouse. None of it needs a second look at a price list taped to the counter. That is the entire point of building a POS terminal around a small pharmacy&apos;s real afternoon, rather than a retail demo video.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Keyboard shortcuts */}
      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">KEYBOARD-FIRST</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">Every action is one key away.</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              The POS terminal was designed for cashiers who can&apos;t afford to take their hands off the keyboard. Every critical action has a function key shortcut, so a small pharmacy team stays fast even during the after-work rush, when the queue is longest and patience is shortest. New staff usually pick up the full shortcut set within a single shift.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
              <kbd className="label-tag rounded border border-line bg-surface px-2 py-1 text-xs">F2</kbd>
              <p className="mt-3 text-sm font-semibold text-ink">Search products</p>
              <p className="mt-1 text-xs text-ink-soft">By name, barcode, generic name, or active ingredient.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
              <kbd className="label-tag rounded border border-line bg-surface px-2 py-1 text-xs">F4</kbd>
              <p className="mt-3 text-sm font-semibold text-ink">Apply discount</p>
              <p className="mt-1 text-xs text-ink-soft">Percentage or flat, per line item or whole cart.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
              <kbd className="label-tag rounded border border-line bg-surface px-2 py-1 text-xs">F6</kbd>
              <p className="mt-3 text-sm font-semibold text-ink">Link a customer</p>
              <p className="mt-1 text-xs text-ink-soft">Search and attach a regular customer to the sale.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
              <kbd className="label-tag rounded border border-line bg-surface px-2 py-1 text-xs">F8</kbd>
              <p className="mt-3 text-sm font-semibold text-ink">Switch payment method</p>
              <p className="mt-1 text-xs text-ink-soft">Cycle between cash, card, UPI, and split payment.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
              <kbd className="label-tag rounded border border-line bg-surface px-2 py-1 text-xs">F9</kbd>
              <p className="mt-3 text-sm font-semibold text-ink">Checkout</p>
              <p className="mt-1 text-xs text-ink-soft">Cash, card, UPI, or a split across multiple methods.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
              <kbd className="label-tag rounded border border-line bg-surface px-2 py-1 text-xs">Esc</kbd>
              <p className="mt-3 text-sm font-semibold text-ink">Clear cart</p>
              <p className="mt-1 text-xs text-ink-soft">Start fresh for the next customer.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Invoice preview */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10">
          <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-ink p-6 text-paper">
            <div className="flex items-center justify-between text-xs text-paper/60">
              <span className="label-tag">INVOICE · INV-2026-0842</span>
              <span>19 Jul 2026, 4:12 PM</span>
            </div>
            <div className="mt-4 space-y-2 border-y border-paper/15 py-4 font-mono text-sm">
              <div className="flex justify-between"><span>Paracetamol 500mg × 2</span><span>$42.00</span></div>
              <div className="flex justify-between"><span>Cetirizine 10mg × 1</span><span>$18.00</span></div>
              <div className="flex justify-between"><span>Amoxicillin 500mg × 1</span><span>$96.00</span></div>
            </div>
            <div className="mt-4 space-y-1.5 font-mono text-sm text-paper/80">
              <div className="flex justify-between"><span>Subtotal</span><span>$156.00</span></div>
              <div className="flex justify-between"><span>GST (5%)</span><span>$7.80</span></div>
              <div className="flex justify-between text-base font-semibold text-paper"><span>Total</span><span>$163.80</span></div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg bg-paper/10 px-3 py-2 text-xs">
              <span>Paid via UPI</span>
              <span className="text-amber">✓ Verified server-side</span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <span className="label-tag text-xs font-medium text-brand-deep">SERVER-SIDE VERIFICATION</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">Prices verified on every line item.</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              When a sale is submitted, the server re-calculates every line item from the database price, batch cost, and applicable tax rate. If the client-side total doesn&apos;t match, the sale is rejected. This prevents price manipulation at the register — a real risk for a small pharmacy that cannot afford a daily cash reconciliation team to catch errors after the fact.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Because verification happens automatically, a small pharmacy owner does not need to audit every invoice manually. The system checks itself on every single sale, so trust in the numbers is built in rather than added on later.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2.5"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Atomic stock deduction — two cashiers can&apos;t oversell the same batch</li>
              <li className="flex gap-2.5"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Tax calculated per product based on HSN code</li>
              <li className="flex gap-2.5"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Thermal receipt and A4 invoice printing</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* FEFO batch selection */}
      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">FEFO BATCH SELECTION</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">Never sell an expired batch by mistake.</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A small pharmacy usually holds one or two batches of each product, not shelves of surplus stock. That makes expiry management a daily concern rather than a monthly clean-up. When a cashier searches for a product, the terminal automatically ranks batches First-Expiry-First-Out and marks the one to sell with a &quot;Best expiry&quot; badge, so the right box leaves the shelf without anyone checking dates by hand.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-brand/30 bg-brand-mist p-5">
              <span className="label-tag rounded-full border border-brand/30 bg-paper px-2 py-0.5 text-[10px] font-medium text-brand-deep">BEST EXPIRY</span>
              <p className="mt-3 text-sm font-semibold text-ink">Batch #A1042</p>
              <p className="mt-1 text-xs text-ink-soft">Sell this one first — nearest expiry, full stock.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
              <span className="label-tag rounded-full border border-line bg-surface px-2 py-0.5 text-[10px] font-medium text-ink-soft">EXPIRES IN 118 DAYS</span>
              <p className="mt-3 text-sm font-semibold text-ink">Batch #A1058</p>
              <p className="mt-1 text-xs text-ink-soft">Available as a backup batch if the first sells out.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-5 opacity-70">
              <span className="label-tag rounded-full border border-line bg-surface px-2 py-0.5 text-[10px] font-medium text-ink-soft">EXPIRED — BLOCKED</span>
              <p className="mt-3 text-sm font-semibold text-ink">Batch #A0991</p>
              <p className="mt-1 text-xs text-ink-soft">Hidden from sale automatically and flagged for return.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Expired stock is a bigger cost to a small pharmacy than to a large chain, because it is a bigger share of total inventory. Automatic FEFO ranking, paired with the expiry report on the dashboard, keeps that cost close to zero without adding a single manual check to the cashier&apos;s job.
          </ScrollReveal>
        </div>
      </section>

      {/* Payment methods */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">PAYMENTS</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">Cash, card, UPI — or all three at once.</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Customers at a small pharmacy pay however they have money on them at that moment — part cash, part UPI, sometimes a card for the rest. The terminal supports every combination without forcing the cashier to run separate transactions.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 grid-cols-2 lg:grid-cols-4">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6 text-center transition hover:border-brand/30">
              <p className="font-display text-2xl font-bold text-brand-deep">$</p>
              <h3 className="mt-2 font-display font-semibold text-ink">Cash</h3>
              <p className="mt-1 text-xs text-ink-soft">Auto-calculate change</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6 text-center transition hover:border-brand/30">
              <p className="font-display text-2xl font-bold text-brand-deep">💳</p>
              <h3 className="mt-2 font-display font-semibold text-ink">Card</h3>
              <p className="mt-1 text-xs text-ink-soft">Debit or credit</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6 text-center transition hover:border-brand/30">
              <p className="font-display text-2xl font-bold text-brand-deep">UPI</p>
              <h3 className="mt-2 font-display font-semibold text-ink">UPI</h3>
              <p className="mt-1 text-xs text-ink-soft">PhonePe, GPay, Paytm</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-6 text-center transition hover:border-brand/30">
              <p className="font-display text-2xl font-bold text-brand-deep">½</p>
              <h3 className="mt-2 font-display font-semibold text-ink">Split</h3>
              <p className="mt-1 text-xs text-ink-soft">Across methods</p>
            </ScrollReveal>
          </div>
          <ScrollReveal className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Every method reconciles into the same daily sales report, so closing the register at the end of the day takes minutes instead of a manual tally across three payment apps and a cash drawer.
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">BUILT FOR THE JOB</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">Everything a small pharmacy needs, nothing it doesn&apos;t.</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Generic retail POS software is built for shops that sell shirts and snacks, not medicine. It treats every product the same, has no idea what a batch or an expiry date is, and leaves prescription handling to a notebook by the register. Here&apos;s what changes with a terminal built specifically for a small pharmacy.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="font-display text-lg font-semibold text-ink-soft">Generic retail POS</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li className="flex gap-2.5"><span className="mt-0.5 shrink-0 text-ink-soft/60" aria-hidden="true">✕</span> No batch or expiry tracking</li>
                <li className="flex gap-2.5"><span className="mt-0.5 shrink-0 text-ink-soft/60" aria-hidden="true">✕</span> One price per product, no batch-level cost</li>
                <li className="flex gap-2.5"><span className="mt-0.5 shrink-0 text-ink-soft/60" aria-hidden="true">✕</span> No prescription flag or dosage data</li>
                <li className="flex gap-2.5"><span className="mt-0.5 shrink-0 text-ink-soft/60" aria-hidden="true">✕</span> Manual stock counts to catch errors</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-brand/30 bg-brand-mist p-6">
              <h3 className="font-display text-lg font-semibold text-brand-deep">Medishelf, for a small pharmacy</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink">
                <li className="flex gap-2.5"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> FEFO batch tracking with automatic expiry ranking</li>
                <li className="flex gap-2.5"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Cost and selling price tracked per batch</li>
                <li className="flex gap-2.5"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Prescription flags, strength, dosage, and route built in</li>
                <li className="flex gap-2.5"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Server-verified stock, checked on every sale</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Switching */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <ScrollReveal>
              <span className="label-tag text-xs font-medium text-brand-deep">SWITCHING OVER</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">Moving off a register or a notebook takes one afternoon.</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Most small pharmacy owners put off switching software because they picture weeks of setup and a staff that refuses to learn a new screen. In practice, the move takes far less time than closing the shop for inventory day.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Product lists import from a spreadsheet in one pass, batches and expiry dates come in alongside them, and staff accounts are created in a couple of minutes each. A small pharmacy with a few hundred products is usually fully live before the next shift starts.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <ol className="space-y-5">
                <li className="flex gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-5">
                  <span className="label-tag flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand-mist text-xs font-semibold text-brand-deep">1</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Import the product list</p>
                    <p className="mt-1 text-xs text-ink-soft">Upload a spreadsheet with product names, prices, and batch details.</p>
                  </div>
                </li>
                <li className="flex gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-5">
                  <span className="label-tag flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand-mist text-xs font-semibold text-brand-deep">2</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Set tax rates once</p>
                    <p className="mt-1 text-xs text-ink-soft">Apply HSN-based tax rules so every future sale calculates itself.</p>
                  </div>
                </li>
                <li className="flex gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-5">
                  <span className="label-tag flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand-mist text-xs font-semibold text-brand-deep">3</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Add staff logins</p>
                    <p className="mt-1 text-xs text-ink-soft">Give each cashier their own account with the right permissions.</p>
                  </div>
                </li>
                <li className="flex gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-5">
                  <span className="label-tag flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand-mist text-xs font-semibold text-brand-deep">4</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Open the counter</p>
                    <p className="mt-1 text-xs text-ink-soft">Start selling — the terminal is ready for a live queue from the first sale.</p>
                  </div>
                </li>
              </ol>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ScrollReveal>
            <span className="label-tag text-xs font-medium text-brand-deep">QUESTIONS</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">What small pharmacy owners ask before switching.</h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              <div className="py-5">
                <h3 className="font-display text-base font-semibold text-ink">Is this suitable for a small pharmacy with one or two staff?</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">Yes. The terminal is built around a single cashier serving a queue, with keyboard shortcuts and fast search so a new staff member can run the counter within a day.</p>
              </div>
              <div className="py-5">
                <h3 className="font-display text-base font-semibold text-ink">How does FEFO batch selection help a small pharmacy specifically?</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">Because a small pharmacy typically stocks fewer units per product, an expired batch is a proportionally larger loss. Automatic FEFO ranking means staff always sell the batch closest to expiry first, without checking dates by hand.</p>
              </div>
              <div className="py-5">
                <h3 className="font-display text-base font-semibold text-ink">Do I need an IT person to run this?</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">No. Setup takes minutes, and price, tax, and stock calculations all happen automatically on the server, so a small pharmacy team never needs an in-house developer to keep billing accurate.</p>
              </div>
              <div className="py-5">
                <h3 className="font-display text-base font-semibold text-ink">Can two cashiers accidentally oversell the same batch?</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">No. Stock deduction is atomic, so two terminals can never both sell the last unit of the same batch, even during the busiest hour of the day.</p>
              </div>
              <div className="py-5">
                <h3 className="font-display text-base font-semibold text-ink">Does split payment work well at a small pharmacy counter?</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">Yes. A single sale can be split across cash, card, and UPI in any combination, which matches how customers actually pay at a small pharmacy counter.</p>
              </div>
              <div className="py-5">
                <h3 className="font-display text-base font-semibold text-ink">Is this priced for a small pharmacy budget, not just a chain?</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">The plans scale with product count and staff seats, so a single-counter small pharmacy pays for what it actually uses instead of a flat enterprise rate built for a multi-branch chain.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Try the terminal with your own products.</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
              Load your real product list and see how a small pharmacy checkout should feel — fast at the counter, accurate on the shelf.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/demo" className="btn-focus rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-deep">
                Start free trial
              </Link>
              <Link href="/inventory" className="btn-focus rounded-lg border border-line px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand/40">
                ← Explore inventory module
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
