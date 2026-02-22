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

const product = getProductBySlug("content-plan")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Law Firm Content Plan - 6-Month Editorial Calendar for Topical Authority",
  description:
    "A structured 6-month content plan for law firms. Pillar-cluster hierarchy, internal linking map, publishing calendar, and priority sequencing. Delivered as a filterable spreadsheet in 8 days. $504.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/content-plan",
  },
  openGraph: {
    title: "Law Firm Content Plan - 6-Month Editorial Calendar for Topical Authority",
    description:
      "Stop publishing randomly. Get a structured 6-month content plan built on the pillar-cluster model for law firm topical authority. $504. 8-day delivery.",
    images: [{ url: "/og/content-plan.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Law Firm Content Plan",
  description:
    "A 6-12 month editorial content plan for law firms built on the pillar-cluster model. Maps keyword research into a structured publishing schedule with topic clusters, internal linking blueprint, priority sequencing, and word count targets.",
  brand: {
    "@type": "Organization",
    name: "Attorney Authority",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: 504,
    priceValidUntil: "2026-12-31",
    deliveryLeadTime: {
      "@type": "QuantitativeValue",
      value: 8,
      unitCode: "DAY",
    },
  },
};

export default function ContentPlanPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Content Plan", href: "/products/content-plan" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Legal niche only
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              8-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              $504 flat
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Law Firm Content Plan
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            A 6-month editorial calendar built on the pillar-cluster model for law firm
            topical authority. Maps keyword research into a structured publishing schedule
            so every article you commission reinforces your rankings rather than competing
            with them.
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

      {/* What is a content plan */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Is a Law Firm Content Plan?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              A content plan is the execution layer that sits between keyword research and
              actual content production. It tells you not just what keywords exist, but what
              pages to build, in what order, at what depth, and how each page connects to
              the others to form a coherent topical authority structure.
            </p>
            <p>
              The standard model for law firm content planning is the pillar-cluster
              architecture. A pillar page covers a broad practice area at significant depth
              (typically 2,500-4,000 words). Cluster pages each target a specific sub-topic
              related to that practice area, linking back to the pillar. Blog content targets
              long-tail informational queries that funnel intent toward the transactional
              cluster and pillar pages.
            </p>
            <p>
              Without a structured plan, most law firms publish content in an order determined
              by whatever feels most urgent - resulting in keyword cannibalization (multiple
              pages competing for the same term), orphaned pages with no internal links, and
              topic gaps that leave obvious ranking opportunities unaddressed. A content plan
              eliminates all of these failure modes.
            </p>
          </div>
        </div>
      </section>

      {/* Why law firms need a structured content plan */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Law Firms Need a Structured Content Plan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Google&apos;s quality evaluation for YMYL content is not just about individual
                page quality - it is about topical depth and coverage. A site with one
                practice area page and a handful of unrelated blog posts does not signal
                expertise to Google the way a site with a full pillar-cluster structure does.
              </p>
              <p>
                Random publishing is the default behavior for most law firm websites. A
                partner writes a blog post when they have time, a marketing coordinator
                publishes whatever feels relevant that week. The result is a disjointed site
                with no coherent topical signal - and rankings that plateau or decline despite
                ongoing content investment.
              </p>
              <p>
                Strategic publishing changes the math entirely. When each piece of content
                you commission is part of a planned structure - reinforcing pillar pages,
                building internal link equity, covering the full topic cluster - you compound
                rather than dilute your authority with every article published.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                Random publishing vs. strategic plan
              </h3>
              <ul className="space-y-3">
                {[
                  { text: "Random: articles compete with each other for the same keywords", bad: true },
                  { text: "Random: orphaned pages earn no internal link equity", bad: true },
                  { text: "Random: topic gaps leave competitors owning key sub-queries", bad: true },
                  { text: "Strategic: every article reinforces pillar page authority", bad: false },
                  { text: "Strategic: internal linking distributes equity to priority pages", bad: false },
                  { text: "Strategic: topic cluster coverage signals expertise to Google", bad: false },
                ].map((point) => (
                  <li key={point.text} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${point.bad ? "text-gray-400" : "text-amber-600"}`} />
                    {point.text}
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
            Content Plan Pricing for Law Firms
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            A single flat-rate deliverable covering 6 months of structured publishing.
            Includes the full topic cluster map, internal linking blueprint, priority
            sequence, and word count targets per page. Delivered in 8 days.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order Content Plan" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              Do I need keyword research before ordering a content plan?
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Ideally yes - keyword research is the foundation the content plan is built on.
              If you already have keyword data, share it with your order and we build the
              plan around it. If you don&apos;t, we recommend ordering{" "}
              <Link href="/products/keyword-research" className="font-semibold underline">
                keyword research
              </Link>{" "}
              first, or both together. If you provide just your domain and practice area,
              we can run a baseline research pass as part of the plan build.
            </p>
          </div>
        </div>
      </section>

      {/* What's in the plan */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Is Inside Your Content Plan
          </h2>
          <p className="text-gray-600 mb-8">
            The deliverable is a filterable spreadsheet with six structured components that
            map directly to an actionable publishing calendar.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Pillar Pages",
                desc: "Core practice area pages with recommended primary keywords, target word counts (typically 2,500-4,000 words), and the cluster pages each pillar should link to.",
              },
              {
                title: "Cluster Pages",
                desc: "Supporting sub-topic pages that each target a specific long-tail or faceted keyword related to the pillar. Each cluster entry includes its target keyword, recommended word count, and which pillar it feeds.",
              },
              {
                title: "Blog Content Cadence",
                desc: "A monthly publishing schedule for informational blog content that targets long-tail queries and funnels intent toward your transactional pages - with topic titles and target keywords pre-selected.",
              },
              {
                title: "Internal Linking Map",
                desc: "A visual and spreadsheet blueprint showing which pages should link to which - ensuring every piece of content contributes link equity to your highest-priority practice area pages.",
              },
              {
                title: "Priority Sequencing",
                desc: "Each page in the plan is assigned a priority score based on commercial value, keyword difficulty, and current ranking gaps. This eliminates guesswork about what to commission first.",
              },
              {
                title: "Word Count Targets",
                desc: "Recommended word count for every page type based on the competitive depth of the target keyword and the page format - so your content budget is allocated efficiently across the plan.",
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
                title: "Share your domain, research, and practice area focus",
                desc: "Provide your law firm's domain, primary practice area(s), target geographic markets, current publishing cadence, and any existing keyword research. If you have competitor domains you want analyzed for gap opportunities, include those as well.",
              },
              {
                step: "02",
                title: "Plan built around your keyword and site structure",
                desc: "Our team analyzes your site's current content gaps, builds the pillar-cluster hierarchy around your target keywords, maps the internal linking structure, and sequences the publishing calendar by priority score. This typically takes 6-7 days.",
              },
              {
                step: "03",
                title: "Spreadsheet delivered and ready to hand to your content team",
                desc: "You receive a structured filterable spreadsheet with your full 6-month content plan. It includes page titles, target keywords, word counts, priority scores, and the internal linking map - ready to hand to a writer, agency, or in-house team for immediate execution.",
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

      {/* Pillar-cluster explanation + publishing cadence */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How the Pillar-Cluster Model Works for Law Firms
          </h2>
          <p className="text-gray-600 mb-8">
            The pillar-cluster architecture is the most effective content structure for
            building topical authority in competitive legal SERPs. Here is how it maps to
            a typical law firm practice area.
          </p>

          {/* Architecture diagram */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-10">
            <div className="text-center mb-6">
              <div className="inline-block bg-amber-700 text-white px-6 py-3 rounded-lg font-bold text-sm">
                PILLAR PAGE: Personal Injury Attorney [City]
              </div>
              <p className="text-xs text-gray-500 mt-2">
                2,500-4,000 words - targets highest-value transactional keyword
              </p>
            </div>
            <div className="flex justify-center mb-4">
              <div className="border-l-2 border-amber-300 h-8" />
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mb-4">
              {[
                "CLUSTER: Car Accident Lawyer [City]",
                "CLUSTER: Slip and Fall Attorney [City]",
                "CLUSTER: Wrongful Death Lawyer [City]",
              ].map((c) => (
                <div key={c} className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
                  <p className="text-xs font-semibold text-amber-800">{c}</p>
                  <p className="text-xs text-gray-500 mt-1">1,500-2,000 words</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-2 mb-4">
              <div className="border-l-2 border-gray-300 h-8" />
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                "BLOG: How long does a car accident claim take?",
                "BLOG: What to do after a slip and fall?",
                "BLOG: Average wrongful death settlement amounts",
              ].map((b) => (
                <div key={b} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
                  <p className="text-xs font-medium text-gray-700">{b}</p>
                  <p className="text-xs text-gray-400 mt-1">800-1,200 words</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center mt-4">
              Blog posts link to cluster pages. Cluster pages link to pillar. Internal equity flows up.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Publishing Cadence Guide by Firm Size
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "Small / Solo Firm",
                rec: "4-6 pieces/month",
                desc: "Focus on building out 1-2 practice area pillar pages and core cluster content first. Blog content secondary until foundational pages are complete.",
              },
              {
                label: "Mid-Size Firm (5-15 attorneys)",
                rec: "8-16 pieces/month",
                desc: "Run multiple practice area clusters simultaneously. Consistent blog cadence to capture long-tail informational queries across all practice areas.",
              },
              {
                label: "Large Firm (15+ attorneys)",
                rec: "20-40+ pieces/month",
                desc: "Full pillar-cluster programs across all practice areas, location-specific landing pages for each service area, and ongoing blog production.",
              },
            ].map((tier) => (
              <div key={tier.label} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="text-xs font-semibold text-amber-700 mb-1">{tier.label}</div>
                <div className="text-xl font-bold text-gray-900 mb-2">{tier.rec}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
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
        headline="Stop publishing randomly. Start building topical authority systematically."
        subheadline="A 6-month content plan built on the pillar-cluster model for your practice area. $504. Delivered in 8 days."
        primaryCta={{ label: "Order Content Plan", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
