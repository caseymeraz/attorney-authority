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

const product = getProductBySlug("brand-mentions")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Brand Mentions for Law Firms - Entity SEO, DR30-60 Editorial Placements",
  description:
    "Law firm brand mention campaigns across 10-15 DR30-60 editorial publications. Entity-based SEO authority, E-E-A-T signals, and co-citation building. $4,030 flat, 17-day delivery.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/brand-mentions",
  },
  openGraph: {
    title: "Brand Mentions for Law Firms - Entity SEO, DR30-60 Editorial Placements",
    description:
      "Build entity authority for your law firm through 10-15 brand mention placements on DR30-60 editorial sites. The SEO signal competitors cannot easily replicate.",
    images: [{ url: "/og/brand-mentions.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Law Firm Brand Mentions Campaign",
  description:
    "Brand mention placements across 10-15 DR30-60 editorial websites for law firms. Entity-based SEO signals, E-E-A-T authority building, and co-citation presence across high-authority publications.",
  brand: {
    "@type": "Organization",
    name: "Attorney Authority",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: 4030,
    priceValidUntil: "2026-12-31",
    deliveryLeadTime: {
      "@type": "QuantitativeValue",
      value: 17,
      unitCode: "DAY",
    },
  },
};

export default function BrandMentionsPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Brand Mentions", href: "/products/brand-mentions" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Entity SEO
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              17-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              $4,030 flat
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Brand Mentions Campaign for Law Firms
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            10-15 brand mention placements across DR30-60 editorial publications. Build the
            entity authority and co-citation signals that Google uses to evaluate law firm
            trustworthiness - an E-E-A-T asset that compounds over time and is difficult
            for competitors to replicate.
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

      {/* What are brand mentions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Are Brand Mentions for Law Firm SEO?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              A brand mention is any instance of your law firm&apos;s name appearing in
              editorial content on another website - even without a hyperlink. Google has
              confirmed that co-citation and co-occurrence signals contribute to its
              understanding of brand entities and their authority. This is a core component
              of what Google calls entity-based ranking.
            </p>
            <p>
              Unlike traditional link building which focuses on passing link equity through
              hyperlinks, brand mentions build your firm&apos;s entity profile - Google&apos;s
              internal understanding of what your firm is, what practice areas it covers,
              what geography it serves, and how authoritative it is within that niche. This
              entity profile influences rankings across all of your target keywords.
            </p>
            <p>
              For law firms competing on YMYL keywords, entity authority is not optional.
              Google&apos;s quality evaluation guidelines specifically look for evidence that
              a legal website is backed by a real, recognized entity in the legal space.
              Brand mentions across credible editorial publications provide exactly that
              evidence - in a form that is harder for competitors to replicate than standard
              link building.
            </p>
          </div>
        </div>
      </section>

      {/* Why brand mentions matter */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Brand Mentions Matter for Law Firm SEO
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Google&apos;s Knowledge Graph and entity understanding system treat your law
                firm as an entity - not just a website. When Google sees your firm name
                consistently mentioned across authoritative editorial sources in contexts
                related to your practice areas and geography, it builds a stronger entity
                profile for your firm.
              </p>
              <p>
                This entity authority has a compounding effect. The more high-authority
                sources that mention your firm in relevant context, the clearer Google&apos;s
                picture of your firm&apos;s authority becomes - and the more confident it is
                in ranking your pages for the YMYL legal queries your clients are searching.
              </p>
              <p>
                Brand mentions are also one of the most defensible SEO assets a law firm
                can build. Unlike backlinks which competitors can match through similar
                outreach, a distributed presence across multiple editorial publications in
                your niche creates an authority signal that takes months to replicate and
                years to exceed.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                Entity authority as a competitive moat
              </h3>
              <ul className="space-y-3">
                {[
                  "10-15 editorial placements on DR30-60 sites with real traffic",
                  "Each mention reinforces Google's entity understanding of your firm",
                  "Co-citation with legal topics builds topical authority signals",
                  "Hard to replicate: editorial placements require publisher relationships",
                  "Compounding value: each placement adds to cumulative entity profile",
                  "Supports E-E-A-T across all YMYL practice area pages",
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
            Brand Mentions Campaign Pricing
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            A single campaign delivers 10-15 brand mention placements across DR30-60
            editorial websites with genuine organic traffic. Includes a mix of linked and
            unlinked mentions with a white-label placement report.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order Campaign" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              Who needs brand mentions most?
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Brand mentions are highest-priority for law firms targeting highly competitive
              practice areas (personal injury, mass tort, criminal defense) in major metros
              where entity authority is a meaningful differentiator. They are also strongly
              recommended for firms that have built a solid link profile but are still losing
              to competitors on high-value YMYL queries - often a signal that entity signals
              are the missing piece.
            </p>
          </div>
        </div>
      </section>

      {/* How brand mentions are placed */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Brand Mention Placements Are Built
          </h2>
          <p className="text-gray-600 mb-8">
            Every placement in the campaign goes through a structured process to ensure
            editorial quality, relevance, and lasting authority value.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Publisher Targeting",
                desc: "We identify editorial publications in the DR30-60 range with genuine organic traffic (minimum 1,000 monthly visitors) and content relevance to legal, business, or professional services topics.",
              },
              {
                title: "Content Creation",
                desc: "Approximately 1,000-word articles are written for each placement that incorporate your brand name naturally in a contextually relevant passage - not as a forced mention but as an organic editorial reference.",
              },
              {
                title: "Brand Integration",
                desc: "Your firm name appears in context relevant to your practice area and market. A personal injury firm in Dallas would be mentioned in content about local legal resources, accident law, or relevant civic topics - not random niches.",
              },
              {
                title: "Contextual Relevance Verification",
                desc: "Before any placement is confirmed, the article context is reviewed to ensure the brand mention occurs in a passage where your firm would logically be cited - maintaining the editorial authenticity that gives the signal its value.",
              },
              {
                title: "Quality Verification",
                desc: "Each publisher is verified for real organic traffic, editorial content standards (not a link farm or article directory), and absence of footprints indicating Private Blog Network (PBN) structures.",
              },
              {
                title: "Reporting",
                desc: "A white-label placement report is delivered with live article URLs, domain ratings at placement time, and confirmation of your brand mention context for each placement. Includes a lifetime replacement guarantee.",
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
                title: "Provide your brand details and practice area context",
                desc: "Submit your exact firm name (as it should appear in all citations), primary practice area(s), target geographic market(s), and your website URL. If there are specific topical contexts you want the mentions to appear in, note those as well.",
              },
              {
                step: "02",
                title: "Publisher research and content placement",
                desc: "Our team identifies qualifying publishers in your niche, develops article content that naturally incorporates your brand mention in a contextually relevant way, and secures placement. This process takes 12-15 days as editorial placement requires relationship management with publishers.",
              },
              {
                step: "03",
                title: "Placement report delivered",
                desc: "You receive a white-label report with: the live URL of each published article, domain rating at placement, confirmation of brand mention context, and the date of publication. All placements carry a lifetime replacement guarantee - if any placement is removed, we redeliver at no charge.",
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

      {/* Brand mentions vs backlinks comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Brand Mentions vs. Backlinks - How They Differ
          </h2>
          <p className="text-gray-600 mb-6">
            Brand mentions and backlinks both build authority, but through different
            mechanisms. Understanding the distinction helps you deploy each at the right
            stage of your law firm&apos;s SEO strategy.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="py-3 px-4 font-semibold text-amber-700">Brand Mentions</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">Backlinks</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["SEO mechanism", "Entity signal / co-citation", "Link equity / PageRank"],
                  ["Hyperlink required", "No - unlinked mentions count", "Yes - link is the signal"],
                  ["Primary benefit", "Entity authority + E-E-A-T", "Domain authority + ranking power"],
                  ["Competitor replication", "Difficult - editorial relationships", "Moderate - similar outreach possible"],
                  ["Compounding nature", "Yes - entity profile grows", "Yes - DR grows"],
                  ["Timeline to impact", "4-8 weeks (entity indexing)", "2-8 weeks (link indexing)"],
                  ["Best combined with", "Link building + content", "Content + brand mentions"],
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

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Which Practice Areas Benefit Most from Brand Mentions
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "Personal Injury",
                desc: "Highest-value, most competitive legal keywords. Entity authority is a critical differentiator in major metro markets where dozens of well-funded firms compete for the same top-5 positions.",
              },
              {
                label: "Criminal Defense",
                desc: "Defense attorneys rely heavily on reputation and perceived authority. Brand mentions across credible publications reinforce the trust signals that convert prospects under legal stress.",
              },
              {
                label: "Mass Tort / Class Action",
                desc: "National-scale mass tort practices need entity signals at a national level. Brand mentions build the geographic and topical breadth that supports cross-market visibility.",
              },
            ].map((tier) => (
              <div key={tier.label} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-sm font-bold text-amber-700 mb-2">{tier.label}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Browse our{" "}
            <Link href="/products/digital-pr-campaign" className="text-amber-700 font-semibold hover:underline">
              digital PR campaign
            </Link>{" "}
            for the highest-authority link acquisition option, or{" "}
            <Link href="/products/press-release" className="text-amber-700 font-semibold hover:underline">
              press release distribution
            </Link>{" "}
            for broader brand announcement reach.
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
        headline="Build the entity authority that separates dominant law firms from the rest."
        subheadline="10-15 brand mention placements across DR30-60 editorial sites. E-E-A-T signals that compound over time. $4,030 flat, 17-day delivery."
        primaryCta={{ label: "Order Campaign", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
