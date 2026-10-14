import Link from "next/link";
import { TRUST_PAGES } from "@/lib/trustPages";

const legalLinks = TRUST_PAGES.filter((p) => p.group === "Legal").map((p) => ({ label: p.shortTitle, href: p.href }));

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Inventory module", href: "/inventory" },
      { label: "POS terminal", href: "/sales" },
      { label: "Start free trial", href: "/demo" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/aboutus" },
      { label: "Case studies", href: "/casestudy" },
      { label: "Contact", href: "/contact" },
      { label: "Trust center", href: "/legal" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog & guides", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Support & SLA", href: "/support" },
      { label: "Security", href: "/security" },
      { label: "Editorial policy", href: "/editorial-policy" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
  {
    heading: "Legal",
    links: legalLinks,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paper text-ink-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 border-b border-line pb-12 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="1" y="1" width="32" height="32" rx="9" fill="#1d1d1f"/>
                <path d="M17 8v18M8 17h18" stroke="#ffffff" strokeWidth="3.4" strokeLinecap="round"/>
                <circle cx="25.5" cy="8.5" r="3.4" fill="#2997ff"/>
              </svg>
              <span className="font-display text-[17px] font-semibold tracking-tight text-ink">Medishelf</span>
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed">
              Pharmacy inventory, batch tracking and point of sale, built for independent pharmacies in the USA, UK, Europe, Australia and beyond.
            </p>
            <ul className="mt-5 space-y-1.5 text-[13px]">
              <li>
                <span className="text-ink">Sales:</span>{" "}
                <a href="mailto:sales@medishelf.co" className="transition hover:text-ink hover:underline">sales@medishelf.co</a>
              </li>
              <li>
                <span className="text-ink">Support:</span>{" "}
                <a href="mailto:support@medishelf.co" className="transition hover:text-ink hover:underline">support@medishelf.co</a>
              </li>
              <li>Austin, Texas, United States</li>
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold text-ink">{col.heading}</h3>
              <ul className="mt-3 space-y-2.5 text-[13px]">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("mailto:") ? (
                      <a href={link.href} className="transition hover:text-ink hover:underline">{link.label}</a>
                    ) : (
                      <Link href={link.href} className="transition hover:text-ink hover:underline">{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-6 text-xs md:flex-row md:items-center">
          <p>Copyright © {currentYear} Medishelf Software. All rights reserved.</p>
          <p>
            Information on this site is not medical advice.{" "}
            <Link href="/disclaimer" className="underline-offset-2 hover:text-ink hover:underline">Read our disclaimer</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
