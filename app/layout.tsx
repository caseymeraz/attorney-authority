import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/marketing/header";
import Footer from "@/components/marketing/footer";
import JsonLd from "@/components/marketing/json-ld";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

const BASE_URL = "https://attorneyauthority.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Attorney Authority  -  Law Firm SEO & Link Building Services",
    template: "%s | Attorney Authority",
  },
  description:
    "The only SEO platform built exclusively for law firms. Transparent pricing on DR-tiered link building, legal content writing, press releases, and digital PR. No retainers. Order by service.",
  keywords: [
    "law firm SEO",
    "legal link building",
    "law firm backlinks",
    "attorney SEO services",
    "legal content writing",
    "law firm digital PR",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Attorney Authority",
    title: "Attorney Authority  -  Law Firm SEO & Link Building Services",
    description:
      "Transparent, a-la-carte SEO services built exclusively for law firms. DR-tiered link building, legal content, press releases, and digital PR.",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Attorney Authority  -  Build Your Law Firm's Authority",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Attorney Authority  -  Law Firm SEO & Link Building Services",
    description:
      "Transparent, a-la-carte SEO services built exclusively for law firms. DR-tiered link building, legal content, press releases, and digital PR.",
    images: ["/og/home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Attorney Authority",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  description:
    "Attorney Authority provides SEO services exclusively for law firms  -  including link building, legal content writing, press releases, and digital PR. Transparent pricing. No retainers.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    url: `${BASE_URL}/contact`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Attorney Authority",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
