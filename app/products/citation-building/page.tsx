import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, Clock, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import JsonLd from "@/components/marketing/json-ld";
import PricingTiers from "@/components/product-pages/pricing-tiers";
import WhatsIncluded from "@/components/product-pages/whats-included";
import FaqSection from "@/components/service-pages/faq-section";
import RelatedProducts from "@/components/service-pages/related-products";
import CtaBanner from "@/components/shared/cta-banner";
import { getProductBySlug, toPublicProduct } from "@/lib/products";

const product = getProductBySlug("citation-building")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Law Firm Citation Building - 50+ NAP-Consistent Directories for Map Pack Rankings",
  description:
    "NAP-consistent citation building for law firms across 50+ directories including Avvo, FindLaw, and Martindale. Duplicate audit included. Submission report delivered. $188 flat, 10-day delivery.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/citation-building",
  },
  openGraph: {
    title: "Law Firm Citation Building - 50+ NAP-Consistent Directories for Map Pack Rankings",
    description:
      "Build consistent NAP citations across 50+ legal and local directories to improve your Google Business Profile rankings and local map pack visibility. $188 flat.",
    images: [{ url: "/og/citation-building.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Law Firm Citation Building",
  description:
    "Accurate, consistent Name-Address-Phone (NAP) citations across 50+ top legal and local directories. Citation consistency is a foundational local SEO signal that directly impacts Google Business Profile rankings and local map pack visibility.",
  brand: {
    "@type": "Organization",
    name: "Attorney Authority",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: 188,
    priceValidUntil: "2026-12-31",
    deliveryLeadTime: {
      "@type": "QuantitativeValue",
      value: 10,
      unitCode: "DAY",
    },
  },
};

export default function CitationBuildingPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Citation Building", href: "/products/citation-building" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Local SEO foundation
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              10-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              $188 flat
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Law Firm Citation Building
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            NAP-consistent directory citations across 50+ legal and local directories
            including Avvo, FindLaw, and Martindale-Hubbell. The foundational local SEO
            signal that determines whether your firm appears in the Google Map Pack - where
            the highest-intent legal searches convert.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* What is citation building */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Is Law Firm Citation Building?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              Citations are online mentions of your law firm&apos;s Name, Address, and Phone
              number (NAP) across directories, legal portals, and review platforms. Google
              uses citation consistency as a primary local ranking signal - specifically to
              determine which firms appear in the Google Business Profile map pack that
              shows at the top of local legal searches.
            </p>
            <p>
              Citation building is the process of systematically creating accurate, consistent
              listings across the directories that matter most to local legal search authority.
              This includes both legal-specific directories (Avvo, FindLaw, Martindale-Hubbell,
              Justia) and general business directories (Google Business Profile, Bing Places,
              Yelp, YellowPages) that Google uses to validate your firm&apos;s entity information.
            </p>
            <p>
              Inconsistent NAP data - your firm listed with different phone numbers, old
              addresses, or name variations across directories - actively suppresses your
              local map pack rankings. Our citation building process includes a duplicate
              audit before submission to identify and flag any conflicting listings that
              are working against you.
            </p>
          </div>
        </div>
      </section>

      {/* Why law firms need citations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Law Firms Need Citation Building
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Google Map Pack - the three business listings that appear above organic
                results for local searches - generates a disproportionate share of law firm
                phone calls. When someone searches &ldquo;personal injury lawyer near me&rdquo;
                or &ldquo;DUI attorney [city]&rdquo;, the map pack results get clicked first.
                The organic results below it are secondary.
              </p>
              <p>
                Citation signals are one of the three primary factors Google uses to rank
                businesses in the map pack alongside Google Business Profile optimization
                and proximity. Without consistent, widespread citations, even a well-optimized
                Google Business Profile profile struggles to compete against firms that have
                built citation authority over years.
              </p>
              <p>
                For law firms moving into a new market, launching a new office, or noticing
                that their Google Business Profile has stalled in rankings despite regular
                optimization, a citation audit and build campaign is consistently the first
                recommended diagnostic step.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                Why map pack traffic matters most
              </h3>
              <ul className="space-y-3">
                {[
                  "Map pack clicks are highest-intent local legal traffic - searching to call, not browse",
                  "Map pack results appear above all organic results for local queries",
                  "Google Business Profile calls convert at 3-5x the rate of organic clicks",
                  "NAP inconsistency actively suppresses your map pack position",
                  "50+ citation sources is Google's threshold for established local authority",
                  "Legal directories (Avvo, FindLaw) pass both citation and link signals",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Citation Building Pricing for Law Firms
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            A single flat-rate campaign covering 50+ directory submissions, a duplicate
            citation audit, and a full submission report. Delivered in 10 days.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order Citation Build" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              Should citations or link building come first?
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              For law firms focused on local map pack visibility, citations should typically
              come first - they are the foundational local SEO signal. Once citation authority
              is established, layer in{" "}
              <Link href="/products/blogger-outreach" className="font-semibold underline">
                blogger outreach link building
              </Link>{" "}
              to build domain authority for competitive organic (non-map) rankings. Multi-location
              firms should order one citation campaign per office location.
            </p>
          </div>
        </div>
      </section>

      {/* What 50+ directories includes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What the 50+ Directory Submission Includes
          </h2>
          <p className="text-gray-600 mb-8">
            Our citation campaign covers six categories of directories that collectively
            build a comprehensive local authority footprint for law firm websites.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Google Business Profile and Bing Places",
                desc: "Verification and optimization of your primary local listings on Google and Bing - the two most authoritative citation sources for map pack rankings. Existing listings are audited for accuracy.",
              },
              {
                title: "Legal-Specific Directories",
                desc: "Submissions to Avvo, FindLaw, Martindale-Hubbell, Justia, Lawyers.com, and other legal portal directories that carry specific authority weight for law firm local SEO and pass both citation and link signals.",
              },
              {
                title: "General Business Directories",
                desc: "Core general directories including Yelp, YellowPages, Manta, Hotfrog, Foursquare, and others that Google uses to validate NAP consistency across the broader web.",
              },
              {
                title: "Review Platform Listings",
                desc: "Listings on review-oriented platforms where client testimonials can be collected - important both for citation authority and for the social proof signals that affect conversion when prospects research your firm.",
              },
              {
                title: "Duplicate Citation Audit",
                desc: "Before submitting any new listings, we audit existing citations to identify duplicate, outdated, or inconsistent listings. Conflicting NAP data is flagged with instructions for correction.",
              },
              {
                title: "Full Submission Report",
                desc: "A complete report with live URLs for every accepted directory listing, submission status for each directory, and any manual steps required for directories that require phone or email verification.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Order Process</h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Provide your NAP details and website",
                desc: "Submit your exact business name (as it should appear in every listing), address, primary phone number, website URL, and practice area(s). Exact consistency across all these fields is critical - any variation creates the NAP inconsistency that suppresses local rankings.",
              },
              {
                step: "02",
                title: "Audit existing citations and begin submissions",
                desc: "We first audit your current citation landscape to identify existing listings, duplicates, and NAP inconsistencies. We then systematically submit to 50+ directories. Some directories require manual approval or email verification - these are noted in the final report.",
              },
              {
                step: "03",
                title: "Submission report delivered",
                desc: "Within 10 days you receive a full submission report with: live listing URLs for all accepted directories, the NAP data as submitted to each, any directories requiring your direct action for phone or email verification, and a summary of any duplicate listings flagged during audit.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 p-5 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-amber-200 shrink-0 w-8">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO vs link building comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Citation Building vs. Link Building - Which Does Your Firm Need?
          </h2>
          <p className="text-gray-600 mb-6">
            Citations and backlinks serve different purposes in law firm SEO. Understanding
            the distinction helps you prioritize budget correctly based on your goals.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="py-3 px-4 font-semibold text-amber-700">Citation Building</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">Link Building</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Primary purpose", "Map pack / local rankings", "Organic (non-map) rankings"],
                  ["Key signal", "NAP consistency + volume", "Domain authority + anchor text"],
                  ["Ranking impact area", "Google Business Profile position", "Blue-link organic results"],
                  ["Timeline to impact", "4-12 weeks", "3-6 months"],
                  ["One-time or ongoing", "One-time foundation", "Ongoing monthly cadence"],
                  ["Who needs it first", "New firms, new offices, stalled GBP", "Established firms targeting top-3 organic"],
                ].map(([factor, col1, col2]) => (
                  <tr key={factor as string} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-700">{factor}</td>
                    <td className="py-3 px-4 text-center text-amber-700 font-medium">{col1}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            Most law firms need both. Citations build local map pack visibility; link
            building drives competitive organic rankings. For firms starting from zero,
            citations come first. Browse our{" "}
            <Link href="/products/blogger-outreach" className="text-amber-700 font-semibold hover:underline">
              blogger outreach
            </Link>{" "}
            and{" "}
            <Link href="/products/niche-edits" className="text-amber-700 font-semibold hover:underline">
              niche edit
            </Link>{" "}
            options for the link building layer.
          </p>
        </div>
      </section>

      {/* What's included */}
      <WhatsIncluded features={pub.features} />

      {/* FAQ */}
      <FaqSection faqs={pub.faqs} />

      {/* Related products */}
      <RelatedProducts slugs={pub.relatedProducts} />

      {/* CTA */}
      <CtaBanner
        headline="Build the local authority foundation your map pack rankings depend on."
        subheadline="50+ NAP-consistent citations across legal and local directories. Duplicate audit included. $188 flat, 10-day delivery."
        primaryCta={{ label: "Order Citation Build", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
