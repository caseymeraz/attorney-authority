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

const product = getProductBySlug("press-release")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Law Firm Press Release Distribution - Basic to Ultimate, 50-400+ Syndications",
  description:
    "Professional press release writing and distribution for law firms. Three tiers from $238 to $2,720. 50-400+ news syndications. E-E-A-T brand signals and news-site mentions. 10-day delivery.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/press-release",
  },
  openGraph: {
    title: "Law Firm Press Release Distribution - Basic to Ultimate, 50-400+ Syndications",
    description:
      "Press release writing and distribution for law firms. Build brand authority and E-E-A-T signals across 50-400+ news syndications. Three tiers to match your distribution goals.",
    images: [{ url: "/og/press-release.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Law Firm Press Release Distribution",
  description:
    "Professional press release writing and distribution for law firms. Build brand authority, earn news-site mentions, and signal E-E-A-T trustworthiness to Google through legitimate press coverage. Three tiers from Basic to Ultimate.",
  brand: {
    "@type": "Organization",
    name: "Attorney Authority",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: 238,
    highPrice: 2720,
    offerCount: 3,
    offers: pub.tiers.map((tier) => ({
      "@type": "Offer",
      name: `Press Release ${tier.name}`,
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

export default function PressReleasePage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Press Release", href: "/products/press-release" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              E-E-A-T brand signals
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              10-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              From $238
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Law Firm Press Release Distribution
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            Professional press release writing and distribution that builds law firm brand
            authority across 50 to 400+ news syndications. Three tiers to match your
            distribution goals, from regional wire services to PR Newswire and Business Wire.
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

      {/* What is press release distribution */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Is Press Release Distribution for Law Firms?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              Press release distribution sends a professionally written announcement to a
              network of news sites, wire services, and media outlets. For law firms, this
              creates branded news mentions that signal E-E-A-T authority to Google, build
              credibility with prospective clients who research your firm name, and generate
              indexed references on news domains.
            </p>
            <p>
              The primary SEO value of press release distribution is brand entity
              reinforcement, not direct link equity. Press release links are typically
              nofollow or from news aggregation sites - their direct ranking power is limited.
              Where press releases excel is in building the kind of widespread brand
              mentions that signal to Google that your firm is a real, established, trusted
              entity in the legal space.
            </p>
            <p>
              A secondary benefit of the higher tiers is journalist pickup. When a press
              release reaches major wire services, working journalists sometimes find the
              story angle valuable and write their own coverage - producing editorially
              earned dofollow mentions that carry significant SEO weight. The Ultimate tier
              is specifically designed to maximize this secondary coverage potential.
            </p>
          </div>
        </div>
      </section>

      {/* Why law firms use press releases for SEO */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Law Firms Use Press Releases for SEO
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Google&apos;s E-E-A-T evaluation for YMYL legal content includes
                trustworthiness as a core dimension. One of the clearest signals of
                trustworthiness is brand presence across credible external sources - and
                press releases on news networks are exactly that.
              </p>
              <p>
                When a prospective client Googles your firm name before calling, what they
                find matters. A firm with news mentions from local and national outlets
                reads as established and credible. A firm with no external brand mentions
                raises doubt. Press release distribution builds the brand SERP that converts
                prospects who research before committing.
              </p>
              <p>
                Press releases also contribute to the entity graph Google builds around
                your firm. Consistent brand mentions across news sites help Google associate
                your firm with specific practice areas, geographic markets, and authority
                signals - contributing to the topical and local rankings you care about most.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                Setting realistic expectations
              </h3>
              <ul className="space-y-3">
                {[
                  { text: "Press releases build E-E-A-T brand signals, not direct link equity", ok: true },
                  { text: "News-site brand mentions reinforce entity authority in Google's index", ok: true },
                  { text: "Higher tiers create journalist pickup opportunities for editorial coverage", ok: true },
                  { text: "Brand SERP improvement - what prospects find when they Google your firm", ok: true },
                  { text: "Press releases alone will not move competitive practice area rankings", ok: false },
                  { text: "Direct ranking impact requires link building in addition to PR", ok: false },
                ].map((point) => (
                  <li key={point.text} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${point.ok ? "text-amber-600" : "text-gray-400"}`} />
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
            Press Release Distribution Pricing for Law Firms
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Three tiers that differ in distribution reach, outlet quality, and syndication
            volume. Writing is included in all tiers - just provide the announcement details.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order This Tier" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              Which tier is right for my law firm?
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Basic ($238):</strong> Ideal for local announcements - new hires,
              office openings, community awards. Solid regional coverage for brand entity
              building. <strong>Pro ($756):</strong> Best for significant announcements
              (major verdicts, firm milestones) where national AP-style distribution adds
              credibility. <strong>Ultimate ($2,720):</strong> Major law firms or significant
              verdicts/settlements where PR Newswire/Business Wire coverage maximizes the
              chance of journalist pickup and editorial coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Tier breakdown grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comparing Basic, Pro, and Ultimate Distribution
          </h2>
          <p className="text-gray-600 mb-8">
            All three tiers include professional writing, links to your website, and a
            full distribution report. The difference is reach, outlet authority, and the
            potential for secondary journalist pickup.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Feature</th>
                  <th className="py-3 px-4 font-semibold text-amber-700 text-center">Basic $238</th>
                  <th className="py-3 px-4 font-semibold text-amber-800 text-center">Pro $756</th>
                  <th className="py-3 px-4 font-semibold text-amber-900 text-center">Ultimate $2,720</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Guaranteed syndications", "50-100", "200+", "400+"],
                  ["Wire service type", "Regional wire", "AP-style national", "PR Newswire / Business Wire"],
                  ["Outlet quality", "Regional news sites", "National + regional mix", "Premium national outlets"],
                  ["Multimedia support", "Text only", "Text + links", "Text, images, multimedia"],
                  ["Journalist pickup potential", "Low", "Moderate", "High"],
                  ["Best for", "Local announcements", "Major firm milestones", "Significant verdicts / PR campaigns"],
                ].map(([feature, basic, pro, ultimate]) => (
                  <tr key={feature as string} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-700">{feature}</td>
                    <td className="py-3 px-4 text-center text-amber-700">{basic}</td>
                    <td className="py-3 px-4 text-center text-amber-800 font-medium">{pro}</td>
                    <td className="py-3 px-4 text-center text-amber-900 font-semibold">{ultimate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            Pair press releases with a{" "}
            <Link href="/products/brand-mentions" className="text-amber-700 font-semibold hover:underline">
              brand mentions campaign
            </Link>{" "}
            for a comprehensive entity authority and E-E-A-T signal strategy.
          </p>
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
                title: "Provide your announcement details",
                desc: "Share the key facts: what is being announced, who is involved, key quotes, your firm name and website URL, and any specific outlets or markets you want to prioritize. You do not need to provide a draft - our writers handle everything from the brief.",
              },
              {
                step: "02",
                title: "Writing, approval, and distribution",
                desc: "Our writers produce a press release in AP style that meets wire service requirements. You review the draft before it is distributed. Upon approval, the release is submitted to the distribution network for your selected tier.",
              },
              {
                step: "03",
                title: "Distribution report delivered",
                desc: "Within 10 days you receive your distribution report with: the total number of syndications, a sample of pickup URLs, the wire service confirmation, and any notable editorial pickups if they occur. The report is unbranded and client-deliverable.",
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

      {/* What makes a newsworthy press release */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Makes a Newsworthy Law Firm Press Release?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Press release distribution works best when the announcement has genuine news
            value. Here are the six event types that consistently produce the strongest
            distribution performance for law firms.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "New Partner or Attorney Announcements",
                desc: "Hiring a notable attorney or promoting a partner is straightforward, newsy, and positions your firm as a growing institution.",
              },
              {
                title: "Major Case Verdicts or Settlements",
                desc: "A significant verdict or settlement (with client consent and appropriate confidentiality) demonstrates track record and outcome authority.",
              },
              {
                title: "New Office or Practice Area Launch",
                desc: "Geographic expansion or adding a new practice area signals firm growth and is inherently local-market newsworthy.",
              },
              {
                title: "Awards and Recognition",
                desc: "Super Lawyers listings, Best Lawyers rankings, Martindale ratings, and local bar association awards all warrant distribution.",
              },
              {
                title: "Community Involvement or Pro Bono Work",
                desc: "Scholarship programs, legal aid initiatives, and community partnerships demonstrate public commitment and generate local coverage.",
              },
              {
                title: "Legal Commentary on Significant News",
                desc: "Expert commentary on pending legislation, significant local legal events, or high-profile cases positions your attorneys as authoritative voices.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
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

      {/* What's included */}
      <WhatsIncluded features={pub.features} />

      {/* FAQ */}
      <FaqSection faqs={pub.faqs} />

      {/* Related products */}
      <RelatedProducts slugs={pub.relatedProducts} />

      {/* CTA */}
      <CtaBanner
        headline="Build the brand authority and E-E-A-T signals that competitive legal SERPs require."
        subheadline="Professional press release writing and distribution across 50-400+ news syndications. Three tiers from $238. 10-day delivery."
        primaryCta={{ label: "View Pricing", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
