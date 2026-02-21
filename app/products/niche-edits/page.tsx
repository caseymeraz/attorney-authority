import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, Zap } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import JsonLd from "@/components/marketing/json-ld";
import PricingTiers from "@/components/product-pages/pricing-tiers";
import WhatsIncluded from "@/components/product-pages/whats-included";
import FaqSection from "@/components/service-pages/faq-section";
import RelatedProducts from "@/components/service-pages/related-products";
import CtaBanner from "@/components/shared/cta-banner";
import { getProductBySlug, toPublicProduct } from "@/lib/products";

const product = getProductBySlug("niche-edits")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Niche Edit Link Building for Law Firms  -  DR10+ to DR60+",
  description:
    "Niche edit backlinks (link insertions) in existing indexed content for law firm websites. DR10+ to DR60+ tiers. Faster authority transfer than new guest posts. 17-day delivery.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/niche-edits",
  },
  openGraph: {
    title: "Niche Edit Link Building for Law Firms  -  DR10+ to DR60+",
    description:
      "Law firm niche edits: links inserted into existing indexed content for faster authority transfer. DR-tiered pricing, transparent delivery.",
    images: [{ url: "/og/niche-edits.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Niche Edit Link Building for Law Firms",
  description:
    "Niche edits (link insertions) placed inside existing indexed content on established websites. Built for law firm SEO. DR10+ to DR60+ tiers. 17-day delivery.",
  brand: {
    "@type": "Organization",
    name: "Attorney Authority",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: 150,
    highPrice: 1140,
    offerCount: 6,
    offers: pub.tiers.map((tier) => ({
      "@type": "Offer",
      name: `Niche Edits ${tier.name}`,
      price: tier.ourPrice,
      priceCurrency: "USD",
      deliveryLeadTime: {
        "@type": "QuantitativeValue",
        value: tier.ourDelivery,
        unitCode: "DAY",
      },
    })),
  },
};

export default function NicheEditsPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Niche Edits", href: "/products/niche-edits" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Legal niche only
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              17-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              From $150/link
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Niche Edit Link Building for Law Firms
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            Backlinks inserted into existing, already-indexed content on established
            websites. Because the host page has history, niche edits pass authority
            faster than new articles  -  ideal for law firms targeting competitive SERPs
            who need quick authority gains from aged, high-trust pages.
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

      {/* What are niche edits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Are Niche Edits for Law Firms?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Niche edits  -  also called link insertions or curated links  -  place your
              backlink inside an existing article that has already been published,
              indexed, and accumulated its own authority. Unlike blogger outreach, which
              creates a new article specifically to house your link, niche edits tap into
              the established trust of aged content.
            </p>
            <p>
              When a page has been indexed for months or years, Google has already
              assessed its quality, built a crawl history, and assigned it a PageRank
              signal. A new link on that page inherits this established authority  - 
              typically passing equity more immediately than a link on a brand-new
              article that Google still needs to evaluate.
            </p>
            <p>
              For law firms in competitive markets  -  personal injury, criminal defense,
              family law  -  this speed-to-authority advantage is meaningful. You are not
              waiting for a new page to age into its authority; you are borrowing the
              trust that the host page has already earned.
            </p>
          </div>
        </div>
      </section>

      {/* Why law firms need niche edits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Law Firms Need Niche Edits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Legal SERPs are dominated by firms and directories that have spent years
                building authority. When a well-funded personal injury firm has 500+ DR40+
                backlinks and your site has 20, the gap is not closed by content alone  - 
                no matter how well-written.
              </p>
              <p>
                Niche edits give mid-authority law firm sites a faster path to closing
                that gap. By placing your links on pages that already rank and already
                have Google&apos;s trust, you access a quality of authority that would
                take new blogger outreach placements 6–12 months to develop organically.
              </p>
              <p>
                Google&apos;s Your Money Your Life (YMYL) classification for legal content
                means authority signals carry more weight than in non-YMYL niches. A DR50+ niche edit on
                a legally relevant page can have more impact than multiple DR30 new
                article placements.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-gray-900">Why niche edits transfer faster</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Host page already indexed and crawled regularly",
                  "Google has assessed content quality  -  no new evaluation lag",
                  "Page-level authority is established, not estimated",
                  "External links from the host page may already exist (natural profile)",
                  "Faster Googlebot recrawl on known pages vs. new content",
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
            Niche Edit Pricing for Law Firms
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Six DR tiers  -  from foundational local SEO (DR10+) to dominant national
            authority (DR60+). Per-link pricing. 17-day delivery guarantee.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order This Tier" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              Niche edit DR tier recommendations for law firms
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-amber-800">
              <div>
                <strong className="block mb-1">DR10–20 ($150–$240)</strong>
                New sites, local long-tail keywords, market entry. Builds base authority
                before escalating.
              </div>
              <div>
                <strong className="block mb-1">DR30–40 ($300–$540)</strong>
                Established local markets. Good ROI for mid-competition practice area
                keywords in secondary cities.
              </div>
              <div>
                <strong className="block mb-1">DR50–60 ($840–$1,140)</strong>
                Major metros. Personal injury, criminal defense. Necessary for top-3
                organic positions in saturated markets.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vetting */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How We Vet Every Niche Edit Placement
          </h2>
          <p className="text-gray-600 mb-8">
            Niche edits carry higher risk than blogger outreach when done carelessly  - 
            because you&apos;re inheriting the history of an existing page, not just a
            new article. Our vetting process is built around this.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Real Traffic Verification",
                desc: "The host page must have real organic traffic. We check referral sources and traffic patterns to exclude sites with inflated metrics and zero real readers.",
              },
              {
                title: "Link History Audit",
                desc: "Existing external links on the page are audited. Pages with a pattern of paid links, Private Blog Network (PBN) footprints, or link farm signals are excluded regardless of DR.",
              },
              {
                title: "Editorial Legitimacy",
                desc: "The site and page must pass editorial legitimacy criteria  -  real author, real content, editorial history. Sites that are clearly link-selling operations are excluded.",
              },
              {
                title: "Contextual Fit",
                desc: "The existing article must have a contextual reason to include your link. We do not insert links in irrelevant content  -  every placement must read naturally.",
              },
              {
                title: "Anchor Text Safety",
                desc: "We advise on safe anchor text based on your current profile. Over-optimized exact-match anchors are flagged and alternatives suggested where risk is high.",
              },
              {
                title: "No Link Schemes",
                desc: "Sites participating in obvious link exchange schemes, footer link networks, or site-wide placements are excluded from our inventory.",
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

      {/* Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Order Process</h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Submit your order details",
                desc: "Choose your DR tier. Provide your target URL, anchor text preference, and practice area context. If you are unsure on anchor text, our team will advise.",
              },
              {
                step: "02",
                title: "Publisher identification and insertion",
                desc: "We identify qualifying pages within our publisher network that pass our vetting criteria and have contextual relevance to your practice area. Your link is inserted editorially.",
              },
              {
                step: "03",
                title: "Report and confirmation",
                desc: "You receive an unbranded CSV report with: the host page URL, your anchor text, domain rating at insertion, and the live link to verify. Every niche edit comes with a lifetime link guarantee and 100% money-back if we cannot deliver.",
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

      {/* Results */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Metrics Improve From Niche Edit Link Building?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { metric: "Domain Rating", detail: "Increases as links from established sites accumulate" },
              { metric: "Organic Rankings", detail: "Primary benefit  -  competitive keyword positions" },
              { metric: "Crawl Frequency", detail: "Googlebot visits increase as authority grows" },
              { metric: "Referring Domains", detail: "Each niche edit adds a unique referring domain" },
            ].map((item) => (
              <div key={item.metric} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                <div className="font-bold text-gray-900 mb-1 text-sm">{item.metric}</div>
                <div className="text-xs text-gray-600">{item.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-6">
            Realistic timelines: Google processes new backlinks within 2–8 weeks.
            Meaningful ranking improvements for competitive legal keywords typically
            appear within 3–6 months of consistent link acquisition.
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
        headline="Ready to add niche edits to your law firm's link profile?"
        subheadline="Select your DR tier and place your first order  -  17-day delivery with a full placement report."
        primaryCta={{ label: "View Pricing", href: "#pricing" }}
        secondaryCta={{ label: "Compare with Blogger Outreach", href: "/comparisons/blogger-outreach-vs-niche-edits" }}
      />
    </>
  );
}
