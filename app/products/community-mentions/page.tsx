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

const product = getProductBySlug("community-mentions")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Community Mentions for Law Firms - Reddit, Quora & Forum Brand Presence",
  description:
    "Build your law firm's entity footprint across Reddit, Quora, and legal community forums. Organic brand mention patterns that reinforce Google's entity model and local trust signals. 33-day delivery.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/community-mentions",
  },
  openGraph: {
    title: "Community Mentions for Law Firms - Reddit, Quora & Forum Brand Presence",
    description:
      "Forum and community brand presence for law firm entity authority. Contextual placements on Reddit, Quora, and legal forums. Entity signal diversity for YMYL rankings.",
    images: [{ url: "/og/community-mentions.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Community Mentions for Law Firms",
  description:
    "Community mention campaigns build your law firm's brand presence across forums, Q&A platforms, and community sites including Reddit and Quora. These placements diversify your entity footprint and complement traditional link building.",
  brand: {
    "@type": "Organization",
    name: "Attorney Authority",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: pub.tiers[0].ourPrice,
    deliveryLeadTime: {
      "@type": "QuantitativeValue",
      value: pub.tiers[0].ourDelivery,
      unitCode: "DAY",
    },
  },
};

export default function CommunityMentionsPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Community Mentions", href: "/products/community-mentions" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Entity signal diversity
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              33-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              $1,260 flat
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Community Mentions for Law Firms
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            Reddit, Quora, and legal forum brand presence that builds the kind of organic
            mention patterns real authoritative firms naturally accumulate. Entity signal
            diversity that complements your link profile and reinforces Google&apos;s
            understanding of your firm as a trusted brand.
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

      {/* What community mentions actually are */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Are Community Mentions for Law Firms?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              Community mentions are brand references placed within active forum discussions,
              Q&A threads, and community platforms - most commonly Reddit, Quora, and
              legal-adjacent discussion boards. When someone posts &ldquo;looking for a
              personal injury attorney in Phoenix&rdquo; on a local subreddit and your firm is
              mentioned contextually in a helpful reply, that is the type of organic citation
              pattern this campaign replicates.
            </p>
            <p>
              These placements are fundamentally different from traditional backlinks. They are
              typically nofollow or carry ugc link attributes, meaning they do not directly
              pass PageRank. Their value lies entirely in entity signal diversity - the way they
              contribute to Google&apos;s understanding of your law firm as a real, active brand
              that exists in the places where potential clients research their legal options.
            </p>
            <p>
              Real authoritative brands accumulate this type of organic mention naturally over
              time. Community mentions campaigns accelerate and systematize that footprint for
              firms that want to match the entity signal profile of established competitors
              without waiting years for it to develop organically.
            </p>
          </div>
        </div>
      </section>

      {/* Why this matters for law firms */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Community Mentions Matter for Law Firm SEO
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Google&apos;s entity model evaluates brands as entities with multi-source
                presence across the web - not just as collections of backlinks. A firm that
                appears only in traditional backlink contexts but has no presence in the
                community discussions where prospective clients actually research attorneys has
                a different entity footprint than a firm with broad, natural brand mention
                patterns.
              </p>
              <p>
                For YMYL legal content, entity authority is a meaningful ranking signal. Google
                knows that people researching attorneys visit Reddit, ask questions on Quora,
                and participate in local community forums. A law firm brand that appears
                naturally in those contexts signals community trust and local relevance in ways
                that formal backlinks cannot replicate.
              </p>
              <p>
                Community mentions also function as direct client acquisition touchpoints.
                Someone who sees your firm recommended in a relevant legal discussion thread is
                at the research stage of their buyer journey - the moment they are most likely
                to take action.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                Entity footprint and visibility benefits
              </h3>
              <ul className="space-y-3">
                {[
                  "Entity signal diversity - brand mentions from non-link sources Google monitors",
                  "Local community trust signals that reinforce geographic authority",
                  "Direct exposure to clients in active research mode on Reddit and Quora",
                  "Complements formal link building with organic-pattern brand presence",
                  "Potential clients searching your firm name find positive contextual mentions",
                  "Supports Google Knowledge Panel development for established firm brands",
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
            Community Mentions Pricing for Law Firms
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Single flat-rate campaign. Includes platform research, thread identification,
            contextual placement, and a complete placement report. 33-day delivery reflects
            the time required to find and participate in genuinely relevant active discussions.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Start a Campaign" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              How community mentions fit into a broader strategy
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Community mentions work best as a complement to your formal link building, not
              as a standalone strategy. Run a community mentions campaign alongside your
              monthly blogger outreach or niche edit program to build the multi-source entity
              presence that Google associates with established, trustworthy law firm brands.
              Particularly effective for firms that are building local authority in competitive
              metro markets or entering new geographic markets.
            </p>
          </div>
        </div>
      </section>

      {/* How community mentions are placed */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Community Mentions Are Placed
          </h2>
          <p className="text-gray-600 mb-8">
            Quality community mentions require identifying active, relevant discussions and
            participating in ways that add genuine value. Spam posts and artificial threads
            are immediately detectable and counterproductive. Here is how we ensure every
            placement is contextually legitimate.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Platform Research",
                desc: "We identify the most active communities for your practice area and geographic market across Reddit subreddits, Quora topics, legal forums, and local community boards. Platform selection is driven by where your potential clients are already asking legal questions.",
              },
              {
                title: "Thread Identification",
                desc: "Within each platform, we find active threads where users are genuinely asking about legal representation, legal processes, or practice-area-specific topics relevant to your firm. We only place mentions in threads with existing engagement, not in dormant or low-activity discussions.",
              },
              {
                title: "Contextual Relevance Verification",
                desc: "Before placing any mention, we verify that the thread context legitimately supports a reference to your firm. A mention in a thread asking for personal injury lawyer recommendations in your city is contextually valid. An off-topic insertion is not.",
              },
              {
                title: "Natural Brand Integration",
                desc: "Mentions are integrated naturally into responses that provide genuine value to the question being asked. The brand reference occurs organically within helpful content, not as an obvious advertisement or unrelated insertion.",
              },
              {
                title: "Quality and Tone Review",
                desc: "Every placement is reviewed for tone consistency - responses must read as helpful community contributions, not marketing copy. Overly promotional language undermines the authenticity of the placement and can trigger platform moderation.",
              },
              {
                title: "Placement Report Delivery",
                desc: "You receive a complete report with every placement URL, platform, thread context, and brand mention text. All placements are live and publicly accessible for independent verification.",
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
                title: "Provide your firm details",
                desc: "Submit your law firm name, primary city and state, practice area focus, and any specific geographic submarkets you want targeted. The more precise your geographic and practice-area scope, the more relevant the discussion threads we can identify.",
              },
              {
                step: "02",
                title: "Platform research and opportunity mapping",
                desc: "Our team researches active discussions across Reddit, Quora, and relevant legal forums in your target market. We map the highest-value threads where a contextual mention of your firm is both legitimate and visible to the right audience.",
              },
              {
                step: "03",
                title: "Contextual placement",
                desc: "Mentions are placed within identified threads as natural, value-adding responses. Each placement is reviewed for quality before publication. This phase spans 20-25 days to ensure placement across genuinely active community cycles.",
              },
              {
                step: "04",
                title: "Placement report delivered",
                desc: "At campaign completion, you receive a full report with every placement URL, platform, thread topic, and the specific brand mention text used. All placements are live, public, and independently verifiable.",
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

      {/* Comparison table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Community Mentions vs. Press Releases vs. Brand Mentions
          </h2>
          <p className="text-gray-600 mb-6">
            Each campaign type builds a different type of brand signal. Understanding the
            distinction helps you allocate budget across complementary tactics.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="py-3 px-3 font-semibold text-amber-700">Community Mentions</th>
                  <th className="py-3 px-3 font-semibold text-gray-600">Press Releases</th>
                  <th className="py-3 px-3 font-semibold text-gray-500">Brand Mentions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Platform type", "Reddit, Quora, forums", "News wire syndication", "Editorial DR30-60 sites"],
                  ["Link type", "Nofollow / UGC", "Nofollow (mostly)", "Mix of linked/unlinked"],
                  ["Primary signal", "Entity footprint diversity", "Credibility / news presence", "Authority + brand signal"],
                  ["Audience type", "Potential clients researching", "Journalists / indexation", "Google entity model"],
                  ["Cost", "$1,260 flat", "$238-$2,720", "$4,030"],
                  ["Delivery", "33 days", "10 days", "17 days"],
                  ["Best for", "Entity diversity + local trust", "Announcements + E-E-A-T", "Authority building"],
                ].map(([factor, col1, col2, col3]) => (
                  <tr key={factor as string} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-700">{factor}</td>
                    <td className="py-3 px-3 text-center text-amber-700 font-medium">{col1}</td>
                    <td className="py-3 px-3 text-center text-gray-600">{col2}</td>
                    <td className="py-3 px-3 text-center text-gray-500">{col3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            For a complete brand presence strategy, consider pairing community mentions with a{" "}
            <Link href="/products/brand-mentions" className="text-amber-700 font-semibold hover:underline">
              brand mentions campaign
            </Link>{" "}
            and periodic{" "}
            <Link href="/products/press-release" className="text-amber-700 font-semibold hover:underline">
              press release distribution
            </Link>
            {" "}for full-spectrum entity signal coverage.
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
        headline="Ready to build your law firm's community presence?"
        subheadline="Start a community mentions campaign and establish your firm's brand across Reddit, Quora, and legal forums where clients are actively researching attorneys."
        primaryCta={{ label: "View Pricing", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
