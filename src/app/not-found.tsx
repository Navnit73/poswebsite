import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Medishelf",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="py-32 text-center bg-surface border-b border-line">
      <div className="mx-auto max-w-lg px-6">
        <span className="label-tag rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-deep">
          404 ERROR
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg text-ink-soft">
          Sorry, we couldn&apos;t find the pharmacy page or resource you were looking for.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-deep transition"
          >
            Return to Homepage
          </Link>
          <Link
            href="/features"
            className="rounded-lg border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink hover:bg-brand-mist transition"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  );
}
