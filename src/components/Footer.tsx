import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="1" y="1" width="32" height="32" rx="9" fill="#F5F7F4"/>
                <path d="M17 8v18M8 17h18" stroke="#0E2321" strokeWidth="3.4" strokeLinecap="round"/>
                <circle cx="25.5" cy="8.5" r="3.4" fill="#E8A33D"/>
              </svg>
              <span className="font-display text-lg font-bold text-paper">Medishelf</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Inventory, batch tracking and point of sale, built to the way a pharmacy actually counts stock.
            </p>
            <p className="label-tag mt-6 inline-block rounded-[var(--radius-label)] border border-paper/20 px-2.5 py-1 text-[11px] text-paper/70">
              BATCH · FRM-2026-01
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-paper">Product</h3>
            <ul className="mt-4 space-y-3 text-sm text-paper/60">
              <li><Link href="/features" className="transition hover:text-amber">Features</Link></li>
              <li><Link href="/pricing" className="transition hover:text-amber">Pricing</Link></li>
              <li><Link href="/inventory" className="transition hover:text-amber">Inventory module</Link></li>
              <li><Link href="/sales" className="transition hover:text-amber">POS terminal</Link></li>
              <li><Link href="/demo" className="transition hover:text-amber">Book a demo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-paper">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-paper/60">
              <li><Link href="/aboutus" className="transition hover:text-amber">About us</Link></li>
              <li><Link href="/casestudy" className="transition hover:text-amber">Case studies</Link></li>
              <li><Link href="/blog" className="transition hover:text-amber">Blog</Link></li>
              <li><Link href="/contact" className="transition hover:text-amber">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-paper">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm text-paper/60">
              <li><Link href="/privacy" className="transition hover:text-amber">Privacy policy</Link></li>
              <li><Link href="/tmc" className="transition hover:text-amber">Terms &amp; conditions</Link></li>
              <li><Link href="/refundPolicy" className="transition hover:text-amber">Refund policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-paper">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-paper/60">
              <li><a href="mailto:sales@medishelf.co" className="transition hover:text-amber">sales@medishelf.co</a></li>
              <li><a href="mailto:support@medishelf.co" className="transition hover:text-amber">support@medishelf.co</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-paper/15 pt-6 text-xs text-paper/50 md:flex-row">
          <p>© <span>{currentYear}</span> Medishelf Software. All rights reserved.</p>
          <p className="label-tag">DISPENSED WITH CARE · NOT MEDICAL ADVICE</p>
        </div>
      </div>
    </footer>
  );
}
