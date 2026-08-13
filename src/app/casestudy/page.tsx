import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pharmacy Software Case Studies | Medishelf",
  description:
    "Read how 5 small pharmacies cut expiry waste by 62%, unified multi-store stock, and trained new cashiers in one day with Medishelf pharmacy software.",
  alternates: {
    canonical: "https://medishelf.co/casestudy",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Case Studies — How Pharmacies Transformed Stock with Medishelf",
    description:
      "Real stories from single counters, small chains, and dispensaries that switched to Medishelf pharmacy inventory management software.",
    url: "https://medishelf.co/casestudy",
    images: [{ url: "/images/hero-pos.png", width: 1200, height: 630, alt: "Medishelf Case Studies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — How Pharmacies Transformed Stock with Medishelf",
    description: "Read real stories of independent pharmacies using Medishelf.",
    images: ["/images/hero-pos.png"],
  },
};

const CASESTUDY_FAQS = [
  {
    question: "Does my store need to be this size to see results?",
    answer:
      "No. Dr. Joshi's dispensary runs 200 SKUs and City Pharmacy tracks 1,800 — both saw the expiry problem disappear, because the FEFO logic and the 30-day alert work the same way regardless of catalogue size. A small pharmacy inventory system doesn't need scale to be worth using; it needs batches and expiry dates, which every one of these stores had from day one.",
  },
  {
    question: "How long does the switch actually take?",
    answer:
      "Across these five stores, migration ranged from a single afternoon (200 SKUs) to about three weeks (1,800 SKUs, done gradually between customers). The work is almost entirely data entry — product names, opening batches, expiry dates — not learning the interface, which is why staff at every store were checking out real sales within their first shift.",
  },
  {
    question: "Which plan fits a store like mine?",
    answer:
      "Dr. Joshi's single-assistant dispensary and City Pharmacy's three-person counter both run on the Starter plan, built for one store and a small team. Wellness Rx, with three branches and twelve staff logins, needed Growth for multi-store reporting and per-branch permissions. Match the plan to how many stores and staff you have today — you can move up a tier later without re-entering your catalogue.",
  },
  {
    question: "What if I sell more than just medicine?",
    answer:
      "GreenCross sells general items alongside prescription medicine in the same store, and both live in one catalogue: medicine keeps batch and expiry fields, general items skip them. You don't need a separate medical inventory app for one category and a separate retail tool for the other.",
  },
];

export default function CaseStudyPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co/" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://medishelf.co/casestudy" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Header */}
      <section className="border-b border-line bg-surface py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <nav aria-label="Breadcrumb" className="label-tag text-xs text-ink-soft/70">
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> Case studies
          </nav>
          <span className="label-tag mt-4 inline-block rounded-[var(--radius-label)] border border-brand/25 bg-brand-mist px-2.5 py-1 text-[11px] font-medium text-brand-deep">
            REAL PHARMACIES
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            They switched. Here&apos;s what changed.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Five small pharmacies, five different starting points, one pharmacy inventory management system that fit all of them — from a single counter in Austin to a community clinic dispensary in Travis County.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft/80">
            Each story below comes from a store that was already running something — a paper register, a spreadsheet, a general retail POS, a plain notebook — before it switched, because a near miss or a slow training week made the cost of the old system visible for the first time.
          </p>
        </div>
      </section>

      {/* Sticky story nav */}
      <nav aria-label="Jump to a case study" className="storynav sticky top-0 z-30 overflow-x-auto border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
        <div className="mx-auto flex max-w-6xl gap-1 px-4 lg:px-8">
          <a href="#glance" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">Overview</a>
          <a href="#city-pharmacy" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">City Pharmacy</a>
          <a href="#wellness-rx" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">Wellness Rx</a>
          <a href="#joshi-clinic" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">Joshi Clinic</a>
          <a href="#greencross" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">GreenCross</a>
          <a href="#apex-pharmacy" className="btn-focus whitespace-nowrap border-b-2 border-transparent px-4 py-3.5 text-xs font-semibold text-ink-soft transition hover:text-ink">Apex Pharmacy</a>
        </div>
      </nav>

      {/* Overview / At a glance */}
      <section id="glance" className="scroll-mt-14 py-14">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-ink-soft/60">Jump to a story</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <a href="#city-pharmacy" className="group rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="mx-auto text-brand"><path d="M4 21V10M20 21V10M2 10l2-6h16l2 6M8 21v-6a2 2 0 012-2h4a2 2 0 012 2v6"/></svg>
              <p className="mt-3 font-display text-2xl font-bold text-brand-deep">62%</p>
              <p className="mt-1 text-xs text-ink-soft">Less expiry waste</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-ink-soft/60 group-hover:text-brand-deep">City Pharmacy</p>
            </a>

            <a href="#wellness-rx" className="group rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="mx-auto text-brand"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="8.5" y="14" width="7" height="7" rx="1"/></svg>
              <p className="mt-3 font-display text-2xl font-bold text-brand-deep">45%</p>
              <p className="mt-1 text-xs text-ink-soft">Fewer stockouts</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-ink-soft/60 group-hover:text-brand-deep">Wellness Rx</p>
            </a>

            <a href="#joshi-clinic" className="group rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="mx-auto text-brand"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M9 12h6M12 9v6"/></svg>
              <p className="mt-3 font-display text-2xl font-bold text-brand-deep">0</p>
              <p className="mt-1 text-xs text-ink-soft">Expired stock sold</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-ink-soft/60 group-hover:text-brand-deep">Joshi Clinic</p>
            </a>

            <a href="#greencross" className="group rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="mx-auto text-brand"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              <p className="mt-3 font-display text-2xl font-bold text-brand-deep">2.4s</p>
              <p className="mt-1 text-xs text-ink-soft">Avg checkout</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-ink-soft/60 group-hover:text-brand-deep">GreenCross</p>
            </a>

            <a href="#apex-pharmacy" className="group rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="mx-auto text-brand"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <p className="mt-3 font-display text-2xl font-bold text-brand-deep">1 day</p>
              <p className="mt-1 text-xs text-ink-soft">To train new staff</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-ink-soft/60 group-hover:text-brand-deep">Apex Pharmacy</p>
            </a>
          </div>
        </div>
      </section>

      {/* Why these five */}
      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <ScrollReveal>
            <span className="label-tag text-xs font-medium text-brand-deep">WHY THESE FIVE</span>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">We picked stores that don&apos;t look alike on purpose.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
              It would be easy to fill this page with five nearly identical urban pharmacies. Instead, these five cover the actual range of stores that end up on Medishelf: a solo counter, a small chain, a rural clinic dispensary, a mixed medical store, and a family business with constant staff turnover. If your store doesn&apos;t match any of them exactly, it&apos;s probably closer to one than you&apos;d expect — a pharmacy stock management system either solves the batch-and-expiry problem at your scale, or it doesn&apos;t, and store size changes that less than people assume.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Study 1: City Pharmacy */}
      <section id="city-pharmacy" className="scroll-mt-14 border-t border-line py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <ScrollReveal>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M4 21V10M20 21V10M2 10l2-6h16l2 6M8 21v-6a2 2 0 012-2h4a2 2 0 012 2v6"/></svg>
                </span>
                <span className="label-tag text-xs font-medium text-brand-deep">INDEPENDENT PHARMACY · AUSTIN, TX</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">City Pharmacy cut expiry write-offs by 62% in 90 days.</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft">1 counter</span>
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft">3 staff</span>
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft">1,800 SKUs</span>
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft">Starter plan</span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                City Pharmacy is a single-counter retail pharmacy in Downtown Austin, TX, serving 120–150 customers a day. Before Medishelf, they tracked batches on paper: a ruled register at the counter, and a second notebook in the back room for anything moved off the main shelf. Reconciling the two only happened once a quarter, at stock count.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                That quarterly count was where the damage showed up. Batches that had slipped behind faster-moving stock turned up expired, sometimes months past their date, because nothing on the shelf or in the register had flagged them earlier. The pharmacist estimated the store was writing off close to a full shelf&apos;s worth of stock every quarter — money that had already been paid to the distributor and never came back.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                After switching to Medishelf&apos;s pharmacy stock management system, FEFO billing started prioritising the earliest-expiring batch on every sale, without the cashier having to check a date by hand. The 30-day expiry alert on the dashboard gave the pharmacist a running list of what needed to move — early enough to push it with a small discount or return it to the distributor, instead of finding out too late.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                The switch itself took about three weeks, most of it spent entering the existing product list and opening batches. The two junior staff were checking out live sales within their first shift on the new system — no separate training day was needed, since the register works like a normal till, just with a batch chosen for them.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Moved from two paper logs to one live medicine stock management system</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Quarterly stock count went from a full closed afternoon to under an hour</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Near-expiry stock now gets a discount push instead of a write-off</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal className="lg:sticky lg:top-24">
              <div className="rounded-[var(--radius-card)] border-l-4 border-brand bg-brand-mist/40 p-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-brand"><path d="M7 7h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H7V7zm9 0h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H16V7z"/></svg>
                <p className="mt-3 font-display text-lg font-medium leading-snug text-ink">
                  &quot;We stopped writing expiry dates on a whiteboard the week we switched. The register just won&apos;t sell the wrong batch anymore.&quot;
                </p>
                <p className="mt-3 text-xs font-medium text-ink-soft">Store Manager, City Pharmacy</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center shadow-sm">
                  <p className="font-display text-3xl font-bold text-brand-deep">62%</p>
                  <p className="mt-2 text-xs text-ink-soft">Less expiry waste</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">3.1s</p>
                  <p className="mt-1 text-xs text-ink-soft">Avg checkout time</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">1,800</p>
                  <p className="mt-1 text-xs text-ink-soft">SKUs tracked</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">3 wks</p>
                  <p className="mt-1 text-xs text-ink-soft">Signup to full switch</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Study 2: Wellness Rx */}
      <section id="wellness-rx" className="scroll-mt-14 border-t border-line bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <ScrollReveal className="order-2 lg:order-1 lg:sticky lg:top-24">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 text-center shadow-sm">
                  <p className="font-display text-3xl font-bold text-brand-deep">3</p>
                  <p className="mt-1 text-xs text-ink-soft">Stores on one account</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">45%</p>
                  <p className="mt-2 text-xs text-ink-soft">Fewer stockouts</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">12</p>
                  <p className="mt-1 text-xs text-ink-soft">Staff logins</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">1</p>
                  <p className="mt-1 text-xs text-ink-soft">Dashboard, all stores</p>
                </div>
              </div>

              <div className="mt-6 rounded-[var(--radius-card)] border-l-4 border-brand bg-brand-mist/40 p-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-brand"><path d="M7 7h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H7V7zm9 0h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H16V7z"/></svg>
                <p className="mt-3 font-display text-lg font-medium leading-snug text-ink">
                  &quot;For the first time I can see all three stores on one screen. No more calling the Ballard store to ask how much Metformin they have.&quot;
                </p>
                <p className="mt-3 text-xs font-medium text-ink-soft">Owner, Wellness Rx</p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="8.5" y="14" width="7" height="7" rx="1"/></svg>
                </span>
                <span className="label-tag text-xs font-medium text-brand-deep">SMALL CHAIN · SEATTLE, WA</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">Wellness Rx unified 3 stores under one dashboard.</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink-soft">3 branches</span>
                <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink-soft">12 staff</span>
                <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink-soft">Growth plan</span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                Wellness Rx operates three outlets across Seattle, WA — Capitol Hill, Ballard and Bellevue. Each store had grown up on its own spreadsheet, its own product naming conventions, and its own way of counting stock. A product called &quot;Crocin 650&quot; at one branch might be logged as &quot;Paracetamol 650mg&quot; at another, which made it almost impossible to compare stock across stores at a glance.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Transferring stock between branches meant a phone call and a hope: whoever picked up would count what was on the shelf, read it out, and someone at the other end would write it down. It worked, but it left no record, and it depended on whoever happened to answer the phone that day.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                On Medishelf&apos;s Growth plan, all three stores now share one product catalogue with per-store inventory, so &quot;Paracetamol 650mg&quot; means the same thing everywhere. The owner checks a consolidated dashboard every morning, with low-stock and expiry alerts filtered by store, and role-based access means a cashier at Bellevue can&apos;t see Ballard&apos;s cost prices or margins.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Migrating three spreadsheets into one shared pharmacy store management system meant agreeing on naming first — a short exercise where the owner and the three store managers sat together and settled on one name per product, once. Stock transfers between branches now happen inside the system as a recorded movement, with a timestamp and the staff member who approved it.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Study 3: Joshi Clinic */}
      <section id="joshi-clinic" className="scroll-mt-14 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <ScrollReveal>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M9 12h6M12 9v6"/></svg>
                </span>
                <span className="label-tag text-xs font-medium text-brand-deep">COMMUNITY CLINIC PHARMACY · TRAVIS COUNTY, TX</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">A 200-SKU dispensary went from a notebook to a live dashboard.</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft">200 SKUs</span>
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft">1 assistant</span>
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft">Starter plan · $50/mo</span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                Dr. Miller runs a small clinic with an attached dispensary in Travis County, TX. With around 200 SKUs and a single assistant handling both the counter and the stock room, the &quot;inventory system&quot; was a ruled notebook and a calculator. Stock counts happened reactively — when a strip ran out mid-consultation, not on any set schedule.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                That reactive approach meant expired stock hid easily. A box pushed to the back of a shelf during a busy week could sit there for months, and the only way to find it was to physically go through every shelf — something that rarely happened outside of an annual audit.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Medishelf&apos;s Starter plan, at $50 a month, gave the clinic batch-level tracking, automatic low-stock alerts, and a daily email summary of what sold and what&apos;s running low — all sized for a dispensary this size rather than a full retail pharmacy. The assistant, who had never used inventory software before, learned the POS terminal in half a day.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Because the dispensary only carries around 200 SKUs, the entire opening stock list went into Medishelf in a single afternoon, with Dr. Joshi reading batch numbers and expiry dates off the shelf while the assistant typed them in — no formal training session, just real customers from day one.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Switched from a notebook to a proper medicine inventory management system in one sitting</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Daily email summary replaced the &quot;check when it runs out&quot; habit</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> No expired stock sold since the 30-day alert went live</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal className="lg:sticky lg:top-24">
              <div className="rounded-[var(--radius-card)] border-l-4 border-brand bg-brand-mist/40 p-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-brand"><path d="M7 7h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H7V7zm9 0h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H16V7z"/></svg>
                <p className="mt-3 font-display text-lg font-medium leading-snug text-ink">
                  &quot;I used to find expired stock behind other boxes. Now the system tells me 30 days before anything expires. That alone pays for itself.&quot;
                </p>
                <p className="mt-3 text-xs font-medium text-ink-soft">Dr. Joshi, Clinic Owner</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center shadow-sm">
                  <p className="font-display text-3xl font-bold text-brand-deep">200</p>
                  <p className="mt-1 text-xs text-ink-soft">SKUs tracked</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">½</p>
                  <p className="mt-1 text-xs text-ink-soft">Day to learn</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">0</p>
                  <p className="mt-1 text-xs text-ink-soft">Expired stock sold</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">$50</p>
                  <p className="mt-1 text-xs text-ink-soft">Per month, Starter</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Study 4: GreenCross */}
      <section id="greencross" className="scroll-mt-14 border-t border-line bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <ScrollReveal className="order-2 lg:order-1 lg:sticky lg:top-24">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 text-center shadow-sm">
                  <p className="font-display text-3xl font-bold text-brand-deep">2.4s</p>
                  <p className="mt-1 text-xs text-ink-soft">Avg checkout time</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">0</p>
                  <p className="mt-1 text-xs text-ink-soft">Batch mix-ups since switch</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">900+</p>
                  <p className="mt-1 text-xs text-ink-soft">SKUs, medicine &amp; general</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">1</p>
                  <p className="mt-1 text-xs text-ink-soft">System instead of two</p>
                </div>
              </div>

              <div className="mt-6 rounded-[var(--radius-card)] border-l-4 border-brand bg-brand-mist/40 p-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-brand"><path d="M7 7h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H7V7zm9 0h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H16V7z"/></svg>
                <p className="mt-3 font-display text-lg font-medium leading-snug text-ink">
                  &quot;Our old billing software was fine for soap and bandages. The day we started selling more medicine than general items, it stopped being enough.&quot;
                </p>
                <p className="mt-3 text-xs font-medium text-ink-soft">Pharmacist, GreenCross Medical Store</p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M6 2l1.5 4h9L18 2M4 8h16l-1.5 12a2 2 0 012 1.8H7.5A2 2 0 015.5 20L4 8z"/><path d="M9 12h6"/></svg>
                </span>
                <span className="label-tag text-xs font-medium text-brand-deep">MEDICAL STORE · DALLAS, TX</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">GreenCross replaced a generic POS that couldn&apos;t see expiry dates.</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink-soft">900+ SKUs</span>
                <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink-soft">Medicine + general</span>
                <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink-soft">Starter plan</span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                GreenCross is a medical store in Dallas, TX that sells prescription medicine alongside general items — bandages, thermometers, baby care, everyday health products. They had been running a general-purpose retail billing tool for years. It handled barcodes and prices well, but it had no idea what a batch or an expiry date was; a strip of tablets was just another item with a price tag.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                To manage expiry, the pharmacist kept a second, manual list of medicine batches next to the till — which meant every sale had to be checked against two systems that never quite agreed with each other. More than once, a batch marked &quot;sold out&quot; in the manual list was still sitting on the shelf, or the reverse.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Moving to Medishelf let GreenCross fold both lists into one drug inventory management system: medicine keeps its batch and expiry fields, general items skip them, and both sit in the same catalogue and the same register. The pharmacist no longer keeps a second list, because there&apos;s nothing left for it to track that the main system doesn&apos;t already know.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                The general items didn&apos;t disappear in the move — they simply stopped needing special treatment. A thermometer is entered once, without a batch field to fill in, while medicine keeps every field a drug inventory management system needs. Both show up in the same search bar at the counter, so the cashier never has to think about which &quot;kind&quot; of item they&apos;re ringing up.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Study 5: Apex Pharmacy */}
      <section id="apex-pharmacy" className="scroll-mt-14 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <ScrollReveal>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <span className="label-tag text-xs font-medium text-brand-deep">FAMILY-RUN PHARMACY · HOUSTON, TX</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">Apex Pharmacy trains new hires in a day, not a week.</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft">15+ seasonal hires/yr</span>
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft">4 custom roles</span>
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft">Starter plan</span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                Apex Pharmacy is a second-generation family business near a busy market in Houston, TX, and it runs on part-time staff during college terms — which means new cashiers rotate in every few months. The previous system was powerful but dense: a full back-office accounting package repurposed for retail, with menus that took a new hire a week to get comfortable with.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                During that training week, the owner or a senior pharmacist had to stay at the till alongside the new hire, which pulled them away from the stock room right when a delivery usually arrived. Mistakes at the register — wrong batch sold, discount typed incorrectly — were common in a trainee&apos;s first few shifts.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Medishelf&apos;s POS terminal was designed around the same keyboard-first flow for everyone: search, add, check out. A new cashier now shadows one shift and is ringing up sales alone by the next, because the pharmacy stock control system, not the person, enforces the FEFO batch and verifies every price server-side. Role-based access also means a first-week cashier can process a sale without ever seeing cost prices or being able to edit stock counts.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> New-hire training dropped from a week of shadowing to a single shift</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Cashier role hides cost price and stock editing by default</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Owner is free to receive deliveries during peak training weeks</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal className="lg:sticky lg:top-24">
              <div className="rounded-[var(--radius-card)] border-l-4 border-brand bg-brand-mist/40 p-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-brand"><path d="M7 7h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H7V7zm9 0h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H16V7z"/></svg>
                <p className="mt-3 font-display text-lg font-medium leading-snug text-ink">
                  &quot;We hire college students every semester. I used to dread training week. Now I show someone the register once and they&apos;re fine.&quot;
                </p>
                <p className="mt-3 text-xs font-medium text-ink-soft">Owner, Apex Pharmacy</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center shadow-sm">
                  <p className="font-display text-3xl font-bold text-brand-deep">1 day</p>
                  <p className="mt-1 text-xs text-ink-soft">To train new staff</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">4</p>
                  <p className="mt-1 text-xs text-ink-soft">Custom staff roles</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">15+</p>
                  <p className="mt-1 text-xs text-ink-soft">Part-time cashiers/yr</p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center">
                  <p className="font-display text-3xl font-bold text-brand-deep">↓</p>
                  <p className="mt-1 text-xs text-ink-soft">Register errors, week one</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What they had in common */}
      <section className="border-t border-line bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">WHAT THEY HAD IN COMMON</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">Different stores, the same three problems.</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A single counter in Austin, a three-store chain in Seattle, a community dispensary in Travis County, a medical store in Dallas, and a family pharmacy in Houston — the shops couldn&apos;t look more different. But every one of them came to Medishelf carrying the same three problems, just at a different scale.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              </span>
              <h3 className="mt-3 font-display font-semibold text-ink">Expiry caught them by surprise</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Whether it was a whiteboard, a notebook, or a second manual list, none of the old systems warned anyone before a batch expired. A pharmacy inventory system that doesn&apos;t track expiry proactively will always find out too late.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
              </span>
              <h3 className="mt-3 font-display font-semibold text-ink">Stock lived in more than one place</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">A paper log and a register, three spreadsheets across three stores, a general POS and a manual batch list — every store was reconciling two records of the truth instead of trusting one.</p>
            </ScrollReveal>
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
              <h3 className="mt-3 font-display font-semibold text-ink">New staff took too long to trust</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">From a single assistant to a rotating cast of part-time cashiers, every owner spent real time either doing the work themselves or standing over someone who was still learning it.</p>
            </ScrollReveal>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-soft/80">
            A note on the numbers: figures above come from each store&apos;s own before-and-after comparison, self-reported by the owner or pharmacist and measured against their prior system over the 90 days following go-live, unless stated otherwise. Results vary by store size, product mix and how consistently staff use batch tracking at receiving — a pharmacy inventory management software can only be as accurate as the stock entered into it.
          </p>
        </div>
      </section>

      {/* Case Study FAQs */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ScrollReveal className="text-center">
            <span className="label-tag text-xs font-medium text-brand-deep">BEFORE YOU SWITCH</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">Questions these five stores asked us first</h2>
          </ScrollReveal>

          <div className="mt-10">
            <FaqAccordion items={CASESTUDY_FAQS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-brand-deep py-20 text-paper">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight">Ready to write your own case study?</h2>
            <p className="mt-4 text-lg text-paper/70">Start with a 7-day free trial and see the difference in your first month.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/demo" className="btn-focus rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-brand-deep shadow-sm transition hover:bg-paper">
                Start free trial
              </Link>
              <Link href="/contact" className="btn-focus rounded-lg border border-paper/30 px-7 py-3.5 text-sm font-semibold text-paper transition hover:border-paper/60">
                Talk to sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
