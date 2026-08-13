import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medishelf.co"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Pharmacy Inventory Software & POS System | Medishelf",
    template: "%s | Medishelf",
  },
  description:
    "Medishelf is pharmacy inventory management and POS software built for small medical stores with batch tracking, FEFO billing, and low-stock alerts.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Medishelf — Pharmacy Inventory Management Software with POS System",
    description:
      "Batch and expiry tracking, FEFO billing, medicine stock management and a pharmacy point of sale system — inventory software built for how small pharmacies actually count stock.",
    url: "https://medishelf.co/",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-pos.png",
        width: 1200,
        height: 630,
        alt: "Medishelf Pharmacy Inventory Management & POS System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medishelf — Pharmacy Inventory Management Software With POS System",
    description:
      "Batch and expiry tracking, FEFO billing, medicine stock management, and a pharmacy point of sale system, built for small pharmacies.",
    images: ["/images/hero-pos.png"],
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-body bg-paper text-ink selection:bg-amber selection:text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KLHGBEKNMQ"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KLHGBEKNMQ');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xrutgigzx0");
          `}
        </Script>
      </body>
    </html>
  );
}
