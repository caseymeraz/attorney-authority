import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import JsonLd from "@/components/marketing/json-ld";
import PricingTiers from "@/components/product-pages/pricing-tiers";
import WhatsIncluded from "@/components/product-pages/whats-included";
import FaqSection from "@/components/service-pages/faq-section";
import RelatedProducts from "@/components/service-pages/related-products";
import CtaBanner from "@/components/shared/cta-banner";
import { getProductBySlug, toPublicProduct } from "@/lib/products";

const product = getProductBySlug("multilingual-links")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Multilingual Link Building for Law Firms - Spanish DA10+ Backlinks",
  description:
    "DA10+ backlinks from Spanish-language and multilingual websites for law firms serving Hispanic communities. Editorial dofollow links, anchor text in target language, full placement report. 24-day delivery.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/multilingual-links",
  },
  openGraph: {
    title: "Multilingual Link Building for Law Firms - Spanish DA10+ Backlinks",
    description:
      "Spanish-language backlinks for law firms serving Hispanic markets. DA-verified editorial placements. Dofollow links, anchor text in target language. 24-day delivery.",
    images: [{ url: "/og/multilingual-links.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Multilingual Link Building for Law Firms",
  description:
    "Multilingual link building places backlinks on Spanish-language and non-English websites for US law firms. DA10+ editorial placements from Hispanic community news sites, Spanish-language legal blogs, and bilingual directories.",
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

export default function MultilingualLinksPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Multilingual Links", href: "/products/multilingual-links" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Spanish publisher network
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              24-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              DA10+ placements
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Multilingual Link Building for Law Firms
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            Editorial backlinks from Spanish-language and multilingual websites for law firms
            serving Hispanic communities. Domain Authority verified placements on legal
            community sites, Hispanic news outlets, and bilingual directories - with anchor
            text in your target language and a full placement report.
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

      {/* What are multilingual links */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Is Multilingual Link Building for Law Firms?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              Multilingual link building earns backlinks from websites published in languages
              other than English - most commonly Spanish for US law firms serving Latino
              communities. These links come from Hispanic community news sites,
              Spanish-language legal blogs, bilingual directories, and immigrant services
              portals. The links are dofollow and editorial, passing genuine domain authority
              to your law firm&apos;s website.
            </p>
            <p>
              This is a distinct link building channel from standard English-language outreach.
              The publisher pool is different, the content context is different, and the anchor
              text is written in Spanish or the target language. But the link authority signals
              are identical from Google&apos;s perspective - a dofollow link from a DA10+
              Spanish-language site passes the same type of ranking equity as an equivalent
              English-language placement.
            </p>
            <p>
              For law firms with bilingual practice websites or Spanish-language practice area
              pages, multilingual links are especially powerful because they connect to pages
              in the same language context - a Spanish legal services page linked from a
              Spanish legal community site creates a highly relevant authority signal for both
              Google and the potential Spanish-speaking client who follows the link.
            </p>
          </div>
        </div>
      </section>

      {/* Why multilingual links matter */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Multilingual Links Matter for Law Firms Serving Spanish-Speaking Clients
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Hispanic population in the United States is the fastest-growing demographic
                and represents a disproportionately large share of clients in high-value legal
                practice areas. Personal injury, immigration, workers compensation, and criminal
                defense practices in major metros routinely see 30-50% of their case inquiries
                come from Spanish-speaking clients - yet most law firm SEO investment goes
                entirely into English-language authority building.
              </p>
              <p>
                Spanish-speaking potential clients search for legal services differently. Many
                search in Spanish first, particularly for immigration and workers compensation
                cases where language and cultural familiarity with the attorney matters
                significantly in hiring decisions. A law firm with strong Spanish-language
                authority signals - including multilingual backlinks pointing to bilingual
                pages - ranks more effectively for these searches than a firm with no
                multilingual SEO investment.
              </p>
              <p>
                Beyond the SEO mechanics, multilingual links from community sites create
                genuine brand presence in the communities where Hispanic clients research their
                legal options. A placement on a respected Hispanic community news site is
                simultaneously an authority signal for Google and a trust signal for the
                community members who read that publication.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                The Hispanic legal market opportunity
              </h3>
              <ul className="space-y-3">
                {[
                  "62 million Hispanic Americans - 19% of US population with fastest growth trajectory",
                  "Major metros: LA, Houston, Miami, Chicago, NYC have 30-50%+ Hispanic populations",
                  "PI, immigration, workers comp, criminal defense: high Spanish-speaker representation",
                  "Spanish-language legal search competition is far lower than English equivalents",
                  "Bilingual law firm pages with multilingual authority links capture underserved market",
                  "Community trust is a meaningful hiring signal - local community publication placement builds it",
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
            Multilingual Link Building Pricing for Law Firms
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Per-link pricing. DA10+ Spanish-language and multilingual publisher network.
            Dofollow editorial links with anchor text in your target language. Full placement
            report included. 24-day delivery reflects the specialized publisher matching process.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order Multilingual Links" />

          {/* DA vs DR explanation box */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              Why this product uses DA instead of DR
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>DA (Domain Authority)</strong> is a metric developed by Moz.{" "}
              <strong>DR (Domain Rating)</strong> is the equivalent metric from Ahrefs. Both
              measure link authority on a 0-100 scale using similar methodologies and
              correlate strongly with each other. Our multilingual publisher network is
              screened using DA because the Spanish-language site landscape is better covered
              by Moz&apos;s crawl index for this segment. Our English-language link building
              products use DR because Ahrefs provides more granular data for those publisher
              pools. Both metrics are legitimate authority signals - the DA and DR of a given
              site are typically within 5-10 points of each other, and both reflect the same
              underlying link equity signal that Google uses for rankings.
            </p>
          </div>
        </div>
      </section>

      {/* How multilingual links work */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Multilingual Links Are Built
          </h2>
          <p className="text-gray-600 mb-8">
            Every multilingual placement goes through a publisher matching and quality
            screening process tailored to the Spanish-language legal and community site
            landscape. The standards are the same as our English link building: real sites,
            real traffic, real editorial content.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Spanish Publisher Network",
                desc: "We maintain an active network of Spanish-language and bilingual publisher relationships including Hispanic community news sites, Spanish-language legal information portals, and bilingual professional directories. Publishers are pre-screened and regularly updated.",
              },
              {
                title: "Legal Community Site Prioritization",
                desc: "Within our publisher pool, we prioritize sites with content relevance to legal topics, immigrant services, workers rights, and related subjects that align with your practice area. A PI firm's link appears in a different context than an immigration firm's link.",
              },
              {
                title: "Anchor Text in Target Language",
                desc: "Anchor text is written in Spanish or the target language by default, creating natural contextual integration with the surrounding content. Bilingual or English anchor text is available where it reads naturally in the article context.",
              },
              {
                title: "DA Verification at Placement",
                desc: "Every publisher is DA-verified at the time of placement - not from a cached database. This prevents inflated authority claims from sites that have degraded since indexing. The DA in your report reflects actual authority at placement date.",
              },
              {
                title: "Contextual Editorial Placement",
                desc: "Links are placed within real editorial articles on your practice area topics - not footer widgets, blogroll links, or obvious sponsored sections. Contextual placement within relevant Spanish-language content is the standard for every order.",
              },
              {
                title: "Full Placement Report",
                desc: "Delivery includes a complete placement report with every live article URL, publisher name and DA at placement, anchor text used, destination URL, and publication date. Every placement is independently verifiable via Moz or your preferred SEO tool.",
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
                title: "Provide firm name, city, and practice area",
                desc: "Submit your law firm name (including any Spanish-language DBA), primary city and state, practice area focus, target URL, and preferred anchor text. If you have Spanish-language pages on your site, specify which URL you want the link to point to.",
              },
              {
                step: "02",
                title: "Publisher matching",
                desc: "Our team identifies the most appropriate publishers from our Spanish-language network based on your practice area and geographic market. Publisher selection is matched to content relevance - a workers compensation firm gets different placements than an immigration law firm.",
              },
              {
                step: "03",
                title: "Content creation and placement",
                desc: "We create or identify appropriate Spanish-language articles on publisher sites that contextually support a reference to your firm. Links are inserted editorially within relevant content, with anchor text in Spanish or your specified target language.",
              },
              {
                step: "04",
                title: "Placement report delivered",
                desc: "At delivery, you receive a full report with every live placement URL, publisher DA at placement, anchor text used, your destination URL, and publication date. Total delivery window: 24 days from order placement.",
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

      {/* Which practice areas benefit most */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Which Practice Areas Benefit Most from Multilingual Links
          </h2>
          <p className="text-gray-600 mb-6">
            Not every practice area has equal representation in the Spanish-speaking client
            market. These four practice areas see the highest proportion of Hispanic client
            cases and benefit most from multilingual SEO investment.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "Immigration Law",
                desc: "The practice area most directly tied to the Spanish-speaking market. Immigration clients are overwhelmingly Spanish-first searchers. Multilingual links pointing to Spanish immigration pages from Hispanic community sites create the most relevant authority signal possible for this practice area.",
              },
              {
                label: "Personal Injury",
                desc: "Hispanic workers are disproportionately employed in high-injury industries - construction, agriculture, warehousing, food processing. Personal injury claims from this demographic represent a major revenue opportunity for PI firms. Spanish-language SEO authority is a significant competitive advantage.",
              },
              {
                label: "Workers Compensation",
                desc: "Workers comp is closely tied to the same industries as personal injury above. Many Spanish-speaking workers are unfamiliar with their rights under US workers compensation law. A firm that is visible and authoritative in Spanish-language searches captures this underserved segment.",
              },
              {
                label: "Criminal Defense",
                desc: "Criminal defense representation is frequently needed across all demographics, but language barriers make attorney selection especially difficult for Spanish-speaking defendants. Firms that appear authoritative in Spanish-language search and community sites are better positioned to serve this market.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-amber-200 p-5">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-gray-900 mb-1">{item.label}</div>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How many multilingual links */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Multilingual Links Fit Into Your Overall Link Profile
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Multilingual links are a complement to your primary English-language link building
            program, not a replacement for it. The right allocation depends on what percentage
            of your client base or target market is Spanish-speaking.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "Firms in Spanish-dominant markets",
                rec: "20-30% multilingual",
                desc: "Law firms in markets where Hispanic clients represent 30%+ of the target audience should allocate a meaningful portion of their link building budget to multilingual placements.",
              },
              {
                label: "Firms serving mixed-language markets",
                rec: "10-20% multilingual",
                desc: "Firms where Spanish-speaking clients represent a significant but not dominant portion of caseload. Multilingual links diversify the link profile and capture a secondary authority channel.",
              },
              {
                label: "Firms testing the channel",
                rec: "2-4 links to start",
                desc: "For firms evaluating the multilingual opportunity, starting with 2-4 placements allows you to measure link authority contribution and assess the practice area relevance of available publishers before scaling.",
              },
            ].map((tier) => (
              <div key={tier.label} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="text-xs font-semibold text-amber-700 mb-1">{tier.label}</div>
                <div className="text-base font-bold text-gray-900 mb-2">{tier.rec}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-6">
            For a complete bilingual SEO strategy, combine multilingual links with{" "}
            <Link href="/products/blogger-outreach" className="text-amber-700 font-semibold hover:underline">
              English-language blogger outreach
            </Link>{" "}
            and{" "}
            <Link href="/products/niche-edits" className="text-amber-700 font-semibold hover:underline">
              niche edits
            </Link>{" "}
            for a diversified authority profile across both language channels.
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
        headline="Ready to build authority in the Spanish-speaking legal market?"
        subheadline="Order multilingual links and establish your law firm as an authoritative source for Hispanic clients searching for legal representation."
        primaryCta={{ label: "View Pricing", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
