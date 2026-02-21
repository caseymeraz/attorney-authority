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

const product = getProductBySlug("blogger-outreach")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Blogger Outreach Link Building for Law Firms  -  DR10+ to DR60+",
  description:
    "Premium blogger outreach backlinks built for law firm websites. Choose from DR10+ to DR60+ placements. Manual editorial vetting. No PBNs. 17-day delivery. Transparent pricing.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/blogger-outreach",
  },
  openGraph: {
    title: "Blogger Outreach Link Building for Law Firms  -  DR10+ to DR60+",
    description:
      "Premium editorial backlinks built for law firm websites. DR-tiered pricing. YMYL-aware placements. 17-day delivery.",
    images: [{ url: "/og/blogger-outreach.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Blogger Outreach Link Building for Law Firms",
  description:
    "Premium blogger outreach backlinks built exclusively for law firm websites. Editorial placements on DR-verified, real-traffic sites. Choose from DR10+ to DR60+ tiers. YMYL-aware vetting.",
  brand: {
    "@type": "Organization",
    name: "Attorney Authority",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: 144,
    highPrice: 912,
    offerCount: 6,
    offers: pub.tiers.map((tier) => ({
      "@type": "Offer",
      name: `Blogger Outreach ${tier.name}`,
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

export default function BloggerOutreachPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Blogger Outreach", href: "/products/blogger-outreach" },
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
              From $144/link
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Blogger Outreach Link Building for Law Firms
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            Editorial backlinks placed in real content on DR-verified websites. Every
            placement manually vetted for legal-industry relevance, traffic authenticity,
            and E-E-A-T compatibility. No Private Blog Networks (PBNs). No link farms.
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

      {/* What is blogger outreach */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Is Blogger Outreach Link Building for Law Firms?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              Blogger outreach is the process of securing editorial backlinks from
              third-party websites through manual outreach campaigns. A member of our
              outreach team contacts the owner or editor of a qualifying website, pitches
              a relevant article concept, and negotiates placement of a contextual link to
              your target law firm page.
            </p>
            <p>
              The resulting link appears within a real, editorially published article  - 
              not a press release, paid advertorial, or footer widget. This is the type
              of backlink Google treats as a genuine editorial endorsement, which is
              precisely what legal websites need to compete in Your Money Your Life
              (YMYL) - classified search categories.
            </p>
            <p>
              For law firms, blogger outreach is particularly valuable because legal
              keywords like &ldquo;personal injury lawyer&rdquo; and &ldquo;criminal
              defense attorney&rdquo; consistently score among the highest keyword
              difficulty ratings in all of organic search. Without authoritative
              backlinks, even well-written practice area pages rarely achieve top-5
              positions in competitive markets.
            </p>
          </div>
        </div>
      </section>

      {/* Why law firms need it */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Law Firms Need Blogger Outreach Specifically
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Google&apos;s Search Quality Evaluator Guidelines classify legal content
                as YMYL  -  Your Money Your Life. This means Google applies stricter quality
                thresholds to legal pages than to most other content types. E-E-A-T
                (Experience, Expertise, Authoritativeness, Trustworthiness) is not just
                recommended for law firms  -  it is functionally required to rank in
                competitive legal SERPs.
              </p>
              <p>
                Backlinks from authoritative, real websites are one of the most powerful
                external signals Google uses to evaluate authoritativeness. A law firm
                page with no high-quality inbound links  -  regardless of how well-written
                its content is  -  will struggle to outrank competitors who have spent
                years building link equity.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                The legal keyword ROI case
              </h3>
              <ul className="space-y-3">
                {[
                  "Personal injury keywords: Keyword Difficulty (KD) 85–95 in major metros",
                  "Average PI case value: $50,000–$500,000 in fees",
                  "Legal Cost Per Click (CPC): $50–$150 per Google Ad click",
                  "Top-3 organic: 30–40% of all clicks in that query",
                  "Monthly link investment vs. one signed case: clear math",
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
            Blogger Outreach Pricing for Law Firms
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Six DR tiers to match your competitive landscape. All prices are per
            placement. All delivery windows include a 17-day guarantee.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order This Tier" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              Which DR tier is right for my law firm?
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>DR10–20:</strong> Local long-tail keywords, new sites building a
              foundation. <strong>DR30–40:</strong> Competitive local markets, established
              firms with moderate authority. <strong>DR50–60:</strong> Top-3 rankings for
              high-value practice area keywords in major metros. Most law firms see the
              best ROI from a mixed-tier strategy rather than all-in on one level.
            </p>
          </div>
        </div>
      </section>

      {/* Vetting process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How We Vet Every Blogger Outreach Placement
          </h2>
          <p className="text-gray-600 mb-8">
            Not all backlinks are equal  -  and for YMYL legal sites, a bad link can be
            worse than no link. Every placement in our network passes a multi-point
            screening process.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Domain Rating Verification",
                desc: "We verify DR via Ahrefs at the time of outreach  -  not when the site was indexed months ago. DR inflation from old data is a common problem we avoid.",
              },
              {
                title: "Traffic Authenticity",
                desc: "Sites must show genuine organic traffic from credible sources. Zero-traffic sites with inflated DR scores from reciprocal linking are excluded.",
              },
              {
                title: "Editorial Content Standards",
                desc: "Publishers must have a content editorial process. Sites that openly sell links without editorial curation are disqualified.",
              },
              {
                title: "PBN Exclusion",
                desc: "Private blog networks are explicitly screened out. We check for footprints including identical WHOIS data, IP clustering, and template similarity.",
              },
              {
                title: "Legal-Adjacent Relevance",
                desc: "For law firm placements, we prioritize publishers with content relevance to legal topics, local markets, or professional services.",
              },
              {
                title: "Spam Score Screening",
                desc: "Sites with high Moz Spam Scores or obvious link-selling signals are removed from the outreach pool before we contact them.",
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
                title: "Place your order",
                desc: "Select your DR tier. Provide your target URL, preferred anchor text (or let us advise based on your profile), and any contextual notes about your practice area.",
              },
              {
                step: "02",
                title: "Outreach and placement",
                desc: "Our outreach team identifies qualifying publishers, pitches article concepts, and secures editorial placement for your link. This typically takes 10–14 days.",
              },
              {
                step: "03",
                title: "Delivery and reporting",
                desc: "You receive an unbranded CSV report with: the live article URL, domain rating at time of placement, the anchor text used, the destination URL, and the date published. Every placement carries a lifetime link replacement guarantee - if the link is ever removed, we redeliver at no charge.",
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

      {/* Blogger outreach vs alternatives */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Blogger Outreach vs. Niche Edits  -  Which Should You Choose?
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="py-3 px-4 font-semibold text-amber-700">Blogger Outreach</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">Niche Edits</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Link type", "New article created", "Inserted in existing content"],
                  ["Authority transfer speed", "Moderate (new page)", "Faster (aged content)"],
                  ["Content control", "Higher (we pitch topic)", "Lower (existing context)"],
                  ["Link profile diversity", "New publishers", "Established pages"],
                  ["Best for", "Brand-new link profiles", "Established sites needing momentum"],
                  ["Ideal strategy", "Ongoing monthly cadence", "Burst campaigns + ongoing"],
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
            Most law firms benefit from a combination of both. Browse our{" "}
            <Link href="/products/niche-edits" className="text-amber-700 font-semibold hover:underline">
              niche edit options
            </Link>{" "}
            or read our full{" "}
            <Link href="/comparisons/blogger-outreach-vs-niche-edits" className="text-amber-700 font-semibold hover:underline">
              comparison guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* How many links */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Many Blogger Outreach Links Does a Law Firm Need Per Month?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            There is no single answer  -  the right cadence depends on your current domain
            rating, your target keyword competition, and your market size. As a general
            framework:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "New / Local Market",
                rec: "2–4 links/month",
                desc: "DR10–DR30 placements. Build foundational authority before targeting competitive terms.",
              },
              {
                label: "Mid-Competition Market",
                rec: "4–8 links/month",
                desc: "DR30–DR40 placements. Consistent monthly acquisition to outpace entrenched competitors.",
              },
              {
                label: "Major Metro / High Competition",
                rec: "8–15+ links/month",
                desc: "DR50–DR60 placements. Sustained high-authority acquisition to compete for top-3 positions.",
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
        headline="Ready to start building your law firm's backlink profile?"
        subheadline="Browse DR tiers, select the right level for your competition, and place your first order today."
        primaryCta={{ label: "View Pricing", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
