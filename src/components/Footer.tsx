import Link from "next/link";

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
      { label: "Blog & guides", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms & conditions", href: "/tmc" },
      { label: "Refund policy", href: "/refundPolicy" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "sales@medishelf.co", href: "mailto:sales@medishelf.co" },
      { label: "support@medishelf.co", href: "mailto:support@medishelf.co" },
    ],
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
          <p>Information on this site is not medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
