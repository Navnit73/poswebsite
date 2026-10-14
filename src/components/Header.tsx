"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Features", href: "/features" },
  { label: "Inventory", href: "/inventory" },
  { label: "Sales", href: "/sales" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case studies", href: "/casestudy" },
  { label: "About", href: "/aboutus" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/80 backdrop-blur-xl backdrop-saturate-[1.8]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5 group">
          <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="1" y="1" width="32" height="32" rx="9" fill="#1d1d1f"/>
            <path d="M17 8v18M8 17h18" stroke="#ffffff" strokeWidth="3.4" strokeLinecap="round"/>
            <circle cx="25.5" cy="8.5" r="3.4" fill="#2997ff"/>
          </svg>
          <span className="font-display text-[17px] font-semibold tracking-tight text-ink">Medishelf</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const currentPath = pathname || "";
            const isActive = currentPath === item.href || (item.href !== "/" && currentPath.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] transition hover:text-ink ${isActive ? "text-ink font-semibold" : "text-ink/70"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/demo"
            className="btn-focus rounded-full bg-brand px-4 py-1.5 text-[13px] font-normal text-white hover:bg-brand-deep"
          >
            Start free trial
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="btn-focus rounded-full p-2 text-ink lg:hidden"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18"/>
              <line x1="6" y1="18" x2="18" y2="6"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-black/[0.08] bg-white lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {NAV_ITEMS.map((item) => {
              const currentPath = pathname || "";
              const isActive = currentPath === item.href || (item.href !== "/" && currentPath.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-3 py-3 text-[17px] hover:bg-paper ${isActive ? "text-ink font-semibold" : "text-ink/80"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 flex flex-col gap-2 border-t border-line pt-3">
              <Link
                href="/demo"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-brand px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Start free trial
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
