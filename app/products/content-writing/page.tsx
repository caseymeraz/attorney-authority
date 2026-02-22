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

const product = getProductBySlug("content-writing")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Legal Content Writing for Law Firms - Human-Written, YMYL Compliant",
  description:
    "Human-written legal content at $40/article. YMYL and E-E-A-T compliant. Copyscape verified. Practice area pages, blog posts, location pages. 7-day delivery. No AI-generated content.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/content-writing",
  },
  openGraph: {
    title: "Legal Content Writing for Law Firms - Human-Written, YMYL Compliant",
    description:
      "Human-written legal content for law firms. $40/article, ~1,000 words. YMYL and E-E-A-T compliant. Copyscape and Grammarly verified. 7-day delivery.",
    images: [{ url: "/og/content-writing.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Legal Content Writing for Law Firms",
  description:
    "Professional legal content written by experienced human writers. YMYL and E-E-A-T compliant. Optimized for NLP signals and topical authority. Copyscape verified. 7-day delivery.",
  brand: {
    "@type": "Organization",
    name: "Attorney Authority",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: 40,
    priceValidUntil: "2026-12-31",
    deliveryLeadTime: {
      "@type": "QuantitativeValue",
      value: 7,
      unitCode: "DAY",
    },
  },
};

export default function ContentWritingPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Content Writing", href: "/products/content-writing" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              100% human-written
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              7-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              $40/article
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Legal Content Writing for Law Firms
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            Human-written legal content that satisfies Google&apos;s YMYL quality standards and
            E-E-A-T guidelines. Practice area pages, blog posts, FAQs, and location pages
            written by experienced legal content writers - not AI.
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

      {/* What is legal content writing */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Is Legal Content Writing for Law Firms?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              Legal content writing is the production of practice area pages, blog articles,
              FAQ sections, city landing pages, and pillar guides written specifically for law
              firm websites. Unlike generic copywriting, legal content must meet Google&apos;s
              Your Money Your Life (YMYL) quality standards - a classification that applies
              to any content that could materially affect a reader&apos;s legal rights, finances,
              or safety.
            </p>
            <p>
              Every article we deliver is written by a human with experience in legal marketing
              content. We do not use AI generation tools as a substitute for human writing.
              Each piece is Copyscape verified for originality, Grammarly reviewed for
              language quality, and delivered with proper heading hierarchy, internal link
              suggestions, and keyword integration ready for your CMS.
            </p>
            <p>
              For law firms, the quality of on-site content is not merely a conversion factor
              - it is a direct ranking input. Google&apos;s quality raters evaluate legal pages
              against E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness),
              and thin, low-effort, or AI-generated content consistently underperforms in YMYL
              search categories. Human-written content is the standard legal sites must meet
              to compete.
            </p>
          </div>
        </div>
      </section>

      {/* Why law firms need human content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Law Firms Need Human-Written Content
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Google&apos;s Search Quality Evaluator Guidelines single out legal, financial,
                and medical content as YMYL - content where incorrect or low-quality information
                can cause direct harm to readers. As a result, Google applies stricter quality
                thresholds to legal pages than to virtually any other content type.
              </p>
              <p>
                AI-generated legal content carries compounding risks. Beyond the immediate
                quality concerns, AI detection technology is advancing rapidly. Legal clients
                researching your firm read your content before calling - thin, generic AI copy
                destroys trust before the intake call ever happens.
              </p>
              <p>
                Human-written content from writers familiar with legal terminology, jurisdiction
                nuances, and practice area specifics produces the depth signals Google rewards:
                appropriate use of legal terminology, accurate procedural context, and the kind
                of topical coverage that builds E-E-A-T authority over time.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                The content investment math
              </h3>
              <ul className="space-y-3">
                {[
                  "Average PI case value: $50,000-$500,000 in attorney fees",
                  "Organic traffic CPC equivalent: $50-$150 per legal click",
                  "A well-ranked practice area page: 200-2,000 monthly visitors",
                  "10 articles at $40 each = $400 total investment",
                  "One signed case from that content: ROI measured in multiples of 1,000%",
                  "AI content risk: Google quality demotions that wipe traffic overnight",
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
            Legal Content Writing Pricing
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Flat per-article pricing. No minimum order. Order as many articles as your
            content calendar requires with a consistent 7-day delivery window per piece.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order Articles" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              How much content does my law firm need per month?
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {[
                {
                  label: "Local / Low Competition",
                  rec: "4-8 articles/month",
                  desc: "Build out core practice area pages, a handful of blog posts, and key city pages.",
                },
                {
                  label: "Mid-Size Metro Market",
                  rec: "8-16 articles/month",
                  desc: "Systematic topical cluster coverage with location-specific content for surrounding cities.",
                },
                {
                  label: "Major Metro / High Competition",
                  rec: "16-30+ articles/month",
                  desc: "Full pillar-cluster content programs across multiple practice areas and dozens of service areas.",
                },
              ].map((tier) => (
                <div key={tier.label} className="bg-white rounded-lg border border-amber-200 p-4">
                  <div className="text-xs font-semibold text-amber-700 mb-1">{tier.label}</div>
                  <div className="text-lg font-bold text-gray-900 mb-2">{tier.rec}</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{tier.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How We Ensure Legal Content Quality
          </h2>
          <p className="text-gray-600 mb-8">
            Every article goes through a documented quality process before delivery. YMYL
            content demands more than spellcheck - it demands subject-matter awareness,
            factual accuracy, and structural optimization.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Human Writers with Legal Marketing Experience",
                desc: "All content is drafted by human writers who understand legal terminology, practice area distinctions, and the keyword clusters that matter for law firm rankings. No AI generation.",
              },
              {
                title: "YMYL and E-E-A-T Compliance",
                desc: "Writers follow Google's YMYL guidelines: accurate legal context, jurisdiction awareness, appropriate disclaimers, and terminology that signals genuine expertise rather than generic copy.",
              },
              {
                title: "NLP Optimization",
                desc: "Each article is optimized for natural language processing signals - semantic keyword clusters, topic depth, and structured data - so Google understands your page's full relevance.",
              },
              {
                title: "Copyscape Originality Verification",
                desc: "Every article is run through Copyscape to confirm 100% original content. No reused phrasing, no article spinning, no recycled boilerplate from other law firm sites.",
              },
              {
                title: "Grammarly Editorial Review",
                desc: "All content passes Grammarly's advanced editorial checks for grammar, tone, clarity, and readability before delivery - ensuring professional quality that matches your firm's reputation.",
              },
              {
                title: "Unlimited Revisions Within 10 Days",
                desc: "If anything doesn't match your firm's voice, focus, or factual requirements, submit revision notes within 10 days of delivery for unlimited amendments at no additional charge.",
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
                title: "Submit your content brief",
                desc: "Provide your target URL (or intended page slug), primary keyword, secondary keyword targets, word count preference, and any internal linking pages. If you have a style guide or attorney bio you want the writer to reference for voice, include it here.",
              },
              {
                step: "02",
                title: "Writer drafts and internal review",
                desc: "Your assigned writer researches the topic, drafts the article with proper H1/H2/H3 structure, integrates your keyword targets naturally, and includes an FAQ section where appropriate. The draft goes through an internal editorial review before leaving our team.",
              },
              {
                step: "03",
                title: "Delivery and revision window",
                desc: "You receive a Google Doc (or HTML on request) within 7 days. The document includes the article content, heading hierarchy, internal link suggestions, and Copyscape/Grammarly verification notes. A 10-day amendment window opens on delivery - request any revisions and we will turn them around promptly.",
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

      {/* Human vs AI comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Human-Written vs. AI-Generated Legal Content
          </h2>
          <p className="text-gray-600 mb-6">
            The gap between human and AI content matters more in legal than in almost any
            other industry. Here is how the two approaches compare across the factors that
            affect law firm SEO and client trust.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="py-3 px-4 font-semibold text-amber-700">Human-Written</th>
                  <th className="py-3 px-4 font-semibold text-gray-500">AI-Generated</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["YMYL compliance", "Meets Google quality standards", "Inconsistent - prone to errors"],
                  ["Factual accuracy", "Writer researches jurisdiction specifics", "Hallucination risk on legal facts"],
                  ["E-E-A-T signals", "Demonstrates genuine expertise", "Generic patterns Google discounts"],
                  ["Google trust score", "Sustained or growing authority", "Risk of quality demotion"],
                  ["AI detection exposure", "Zero - no detection risk", "Growing risk as detection advances"],
                  ["Client trust conversion", "Professional, credible voice", "Detectable generic tone"],
                  ["Anchor text nuance", "Natural, varied, strategic", "Repetitive, mechanical phrasing"],
                  ["Revision quality", "Writer understands nuance", "Iteration still misses context"],
                ].map(([factor, col1, col2]) => (
                  <tr key={factor as string} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-700">{factor}</td>
                    <td className="py-3 px-4 text-center text-amber-700 font-medium">{col1}</td>
                    <td className="py-3 px-4 text-center text-gray-500">{col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            Pair your content with a structured{" "}
            <Link href="/products/content-plan" className="text-amber-700 font-semibold hover:underline">
              content plan
            </Link>{" "}
            and{" "}
            <Link href="/products/keyword-research" className="text-amber-700 font-semibold hover:underline">
              keyword research
            </Link>{" "}
            to maximize the ROI of every article you publish.
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
        headline="Ready to build content that ranks and converts?"
        subheadline="Order human-written legal articles at $40 each. No minimums. 7-day delivery. Copyscape and Grammarly verified."
        primaryCta={{ label: "Order Content", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
