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
    title: post.title,
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
          url: "/images/hero-pos.png",
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
      images: ["/images/hero-pos.png"],
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
    datePublished: post.parsedDate.toISOString(),
    dateModified: post.parsedDate.toISOString(),
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co/" },
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
          <nav aria-label="Breadcrumb" className="label-tag text-xs text-ink-soft/70 mb-4">
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

          <div className="mt-16 pt-8 border-t border-line flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-brand hover:text-brand-deep"
            >
              ← Back to All Blog Posts
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
