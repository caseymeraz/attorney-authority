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

const product = getProductBySlug("keyword-research")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Law Firm Keyword Research - Ahrefs Data, Practice Area Clusters, $314",
  description:
    "Comprehensive keyword research for law firms. Up to 5,000 keywords across 5 topic clusters. Ahrefs-sourced data with volume, KD, CPC, intent, and a prioritized content roadmap. 6-day delivery.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/keyword-research",
  },
  openGraph: {
    title: "Law Firm Keyword Research - Ahrefs Data, Practice Area Clusters, $314",
    description:
      "Data-driven keyword research for law firms. Ahrefs-sourced. Up to 5,000 keywords with intent classification, competitor gap analysis, and a prioritized content roadmap.",
    images: [{ url: "/og/keyword-research.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Law Firm Keyword Research",
  description:
    "Comprehensive keyword research tailored to law firm practice areas and geographic markets. Ahrefs-sourced data with up to 5,000 keywords, intent classification, competitor gap analysis, and a prioritized content roadmap.",
  brand: {
    "@type": "Organization",
    name: "Attorney Authority",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: 314,
    priceValidUntil: "2026-12-31",
    deliveryLeadTime: {
      "@type": "QuantitativeValue",
      value: 6,
      unitCode: "DAY",
    },
  },
};

export default function KeywordResearchPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Keyword Research", href: "/products/keyword-research" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Legal niche only
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              6-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              $314 flat
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Law Firm Keyword Research
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            A complete Ahrefs-sourced keyword strategy for your practice area and market.
            Up to 5,000 keywords across 5 topic clusters with intent classification,
            competitor gap analysis, and a prioritized content roadmap delivered in 6 days.
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

      {/* What is keyword research */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Is Law Firm Keyword Research?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              Law firm keyword research is the process of identifying which search queries
              your prospective clients are using to find legal services - then organizing
              those queries by volume, difficulty, intent, and commercial value so your
              content team knows exactly which pages to build and in what order.
            </p>
            <p>
              Our report goes beyond a simple list of keywords. Each keyword is tagged with
              search volume, keyword difficulty (KD) from Ahrefs, cost-per-click (CPC) data
              that signals commercial intent, and search intent classification. This data is
              then organized into a prioritized content roadmap - so instead of guessing
              what to write next, you have a clear evidence-based sequence.
            </p>
            <p>
              Legal keyword research requires domain knowledge that general SEO tools
              underweight: geo-modifier combinations, practice area sub-topic clusters,
              YMYL classification effects on difficulty scores, and the distinction between
              queries that drive case inquiries versus queries that drive information seekers
              who will never call your firm. Our research accounts for all of this.
            </p>
          </div>
        </div>
      </section>

      {/* Why legal keyword research is different */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Legal Keyword Research Is Different
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Legal keywords operate in a category of their own. A query like
                &ldquo;personal injury lawyer Los Angeles&rdquo; typically scores keyword
                difficulty in the 85-95 range on Ahrefs - matching or exceeding even the
                most competitive e-commerce and finance queries. General SEO keyword tools
                were not designed with this competitive density in mind.
              </p>
              <p>
                Geo-modifiers compound the complexity. &ldquo;Car accident attorney
                Denver&rdquo; and &ldquo;auto accident lawyer Aurora CO&rdquo; are
                different keywords with different difficulty scores, different ranking
                competitors, and different conversion rates - yet a general keyword report
                would lump them together or omit half the variants entirely.
              </p>
              <p>
                Our legal keyword research specifically accounts for YMYL classification,
                practice area sub-topic clusters, and the long-tail geo-modifier variants
                where law firms can realistically compete without years of domain authority.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                The keyword targeting ROI case
              </h3>
              <ul className="space-y-3">
                {[
                  "Average legal CPC: $50-$150/click - the cost of not ranking organically",
                  "High-KD legal terms: ranking without a roadmap means wasted content spend",
                  "Long-tail legal keywords: 60-70% lower KD, 20-40% higher conversion rate",
                  "Competitor gap keywords: opportunities your rivals are ignoring",
                  "Wrong keyword targeting: months of content with no ranking movement",
                  "Right keyword targeting: systematic authority growth with measurable ROI",
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
            Keyword Research Pricing for Law Firms
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            A single flat-rate report covering one primary practice area with up to 5,000
            keywords across 5 topic clusters. Delivered in 6 days.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order Research" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              How to use your keyword report
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              The report maps directly into a content and link building strategy. Pillar page
              keywords drive your core practice area pages. Cluster keywords become supporting
              blog posts and FAQ pages. Location variants become city-specific landing pages.
              The priority score tells you which to tackle first based on difficulty vs. value.
              Pair with our{" "}
              <Link href="/products/content-plan" className="font-semibold underline">
                Content Plan
              </Link>{" "}
              to turn research into a ready-to-execute publishing calendar.
            </p>
          </div>
        </div>
      </section>

      {/* What the report includes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Your Keyword Research Report Includes
          </h2>
          <p className="text-gray-600 mb-8">
            The deliverable is a filterable spreadsheet built around the six data dimensions
            that matter most for law firm content and link building strategy.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Search Volume and Trend Data",
                desc: "Monthly search volume for each keyword sourced from Ahrefs, including 12-month trend data so you can identify seasonal patterns in your practice area queries.",
              },
              {
                title: "Keyword Difficulty (KD) Scores",
                desc: "Ahrefs KD scores for every keyword, so you know exactly how competitive each term is before committing content resources. Essential for setting realistic ranking timelines.",
              },
              {
                title: "Cost Per Click (CPC) Values",
                desc: "CPC data from Google Ads benchmarks showing the commercial value of each keyword - the single best signal for identifying which queries actually drive case inquiries.",
              },
              {
                title: "Intent Classification",
                desc: "Each keyword tagged as informational, navigational, or transactional. Transactional queries are prioritized in the content roadmap because they produce the most qualified case leads.",
              },
              {
                title: "Competitor Gap Analysis",
                desc: "Keywords where your competitors are ranking in positions 1-10 but you are not even indexed - the fastest path to traffic growth for established law firm sites.",
              },
              {
                title: "Prioritized Content Roadmap",
                desc: "A sequenced list of which pages to build first, organized by a composite score of commercial value, KD, and competitor gap opportunity. Eliminating all guesswork from your editorial calendar.",
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
                title: "Provide your domain and practice area details",
                desc: "Submit your law firm's domain URL, primary practice area (e.g., personal injury, criminal defense, immigration), target cities or metro areas, and any existing keyword targets you already know about. If you have a competitor you want us to analyze for gap opportunities, include their domain too.",
              },
              {
                step: "02",
                title: "Research conducted and report built",
                desc: "Our team runs your domain through Ahrefs to identify current rankings and gaps, then builds out keyword clusters for your practice area and geography. We classify intent, score difficulty, identify competitor gaps, and sequence the roadmap. This process typically takes 4-5 days.",
              },
              {
                step: "03",
                title: "Spreadsheet delivered and ready to execute",
                desc: "You receive a filterable spreadsheet with all keyword data, intent tags, competitor gap flags, and the prioritized content roadmap. The report is structured so it can be handed directly to a content writer or internal marketing team without additional interpretation.",
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

      {/* Sample keyword data table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Legal Keyword Data Looks Like
          </h2>
          <p className="text-gray-600 mb-6">
            Here is an example of the type of data the report surfaces across different
            practice areas. Note the variance in difficulty and intent - this is precisely
            why a structured research phase matters before spending on content.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-100">
                  <th className="text-left py-3 px-3 font-semibold text-gray-900">Practice Area</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900">Sample Keyword</th>
                  <th className="py-3 px-3 font-semibold text-gray-700 text-center">KD (approx)</th>
                  <th className="py-3 px-3 font-semibold text-gray-700 text-center">Intent</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Personal Injury", "personal injury lawyer chicago", "92", "Transactional"],
                  ["Personal Injury", "how long does a car accident settlement take", "38", "Informational"],
                  ["Criminal Defense", "criminal defense attorney los angeles", "88", "Transactional"],
                  ["Criminal Defense", "what happens at an arraignment hearing", "22", "Informational"],
                  ["Family Law", "divorce lawyer near me", "74", "Transactional"],
                  ["Family Law", "how to file for divorce in texas", "41", "Informational"],
                  ["Immigration", "immigration attorney cost", "55", "Transactional"],
                  ["Immigration", "h1b visa requirements 2025", "33", "Informational"],
                ].map(([area, kw, kd, intent]) => (
                  <tr key={kw as string} className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-700">{area}</td>
                    <td className="py-3 px-3 text-gray-600">{kw}</td>
                    <td className="py-3 px-3 text-center">
                      <span className={`font-semibold ${Number(kd) > 70 ? "text-red-600" : Number(kd) > 45 ? "text-amber-600" : "text-green-700"}`}>
                        {kd}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center text-gray-600">{intent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            Your report will include up to 5,000 keywords across your specific practice areas
            and geographic targets - with far more granularity than this illustrative sample.
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
        headline="Know exactly which keywords to target before you write a single article."
        subheadline="Ahrefs-sourced keyword research built for your practice area and market. Delivered in 6 days for $314."
        primaryCta={{ label: "Order Research", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
