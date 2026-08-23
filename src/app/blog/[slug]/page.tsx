import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Post Not Found | Medishelf",
    };
  }

  return {
    title: `${post.title} | Medishelf Blog`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://medishelf.co/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      url: `https://medishelf.co/blog/${post.slug}`,
      images: [
        {
          url: "https://medishelf.co/images/hero-pos.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: ["https://medishelf.co/images/hero-pos.png"],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: ["https://medishelf.co/images/hero-pos.png"],
    datePublished: post.parsedDate.toISOString(),
    dateModified: post.parsedDate.toISOString(),
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: "Medishelf Editorial Team",
      url: "https://medishelf.co/aboutus",
    },
    publisher: {
      "@type": "Organization",
      name: "Medishelf",
      logo: {
        "@type": "ImageObject",
        url: "https://medishelf.co/images/favicon.png",
        width: 60,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://medishelf.co/blog/${post.slug}`,
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://medishelf.co/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://medishelf.co/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <section className="border-b border-line bg-surface py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="label-tag mb-4 text-xs text-ink-soft/70">
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span>{" "}
            <Link href="/blog" className="hover:text-brand-deep">Blog</Link> <span aria-hidden="true">/</span> {post.category}
          </nav>
          <span className="label-tag inline-block rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold uppercase text-brand-deep">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-xs font-medium text-ink-soft">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <article className="mx-auto max-w-3xl px-6 lg:px-10">
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Contextual Product Box linking back to Homepage and Trial */}
          <div className="mt-14 rounded-xl border border-line bg-paper p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="label-tag text-xs font-semibold text-brand-deep">
                  ABOUT MEDISHELF
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-ink sm:text-xl">
                  Simple Pharmacy Inventory Software &amp; POS
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  <Link href="/" className="font-semibold text-brand hover:underline">
                    Medishelf
                  </Link>{" "}
                  helps small and independent pharmacies manage batch expiry dates, FEFO counter sales, supplier purchases, and stock reports without hospital-scale complexity.
                </p>
              </div>
              <div className="flex shrink-0 gap-2.5 sm:flex-col">
                <Link
                  href="/"
                  className="btn-focus rounded-lg border border-line bg-surface px-4 py-2 text-center text-xs font-semibold text-ink transition hover:border-brand/40"
                >
                  Explore Medishelf
                </Link>
                <Link
                  href="/demo"
                  className="btn-focus rounded-lg bg-brand px-4 py-2 text-center text-xs font-semibold text-white shadow-sm transition hover:bg-brand-deep"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-line pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-brand hover:text-brand-deep"
            >
              ← Back to All Blog Posts
            </Link>
            <Link
              href="/"
              className="font-display text-sm font-semibold text-ink-soft hover:text-ink"
            >
              Medishelf Home →
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
