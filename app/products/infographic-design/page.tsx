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

const product = getProductBySlug("infographic-design")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Legal Infographic Design for Law Firms - Linkable Assets",
  description:
    "Professional infographic design for law firms. Create linkable visual assets that earn editorial backlinks, social shares, and media pickup. Embed code included. $238, 10-day delivery.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/infographic-design",
  },
  openGraph: {
    title: "Legal Infographic Design for Law Firms - Linkable Assets",
    description:
      "Shareable legal infographics that earn passive backlinks and editorial pickup. Data visualization, embed code, high-resolution export. 10-day delivery.",
    images: [{ url: "/og/infographic-design.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Legal Infographic Design for Law Firms",
  description:
    "Professional infographic design for law firm content marketing. Visual data summaries that earn backlinks, social shares, and media coverage. Embed code included for easy sharing. 10-day delivery.",
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

export default function InfographicDesignPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Infographic Design", href: "/products/infographic-design" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Embed code included
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              10-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              $238 per infographic
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Legal Infographic Design for Law Firms
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            Professional infographics that function as linkable assets - visual content that
            legal blogs, news sites, and industry publications naturally embed and share with
            attribution links back to your firm. One well-executed infographic can earn
            passive backlinks for years after it is published.
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

      {/* What are legal infographics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Is Legal Infographic Design for Law Firms?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              Legal infographics are professionally designed visual assets that present complex
              legal data, processes, or statistics in an immediately comprehensible visual
              format. Where a blog post explaining the personal injury claims process might
              require 1,500 words to cover adequately, a well-designed infographic can convey
              the same information in a visual summary that readers grasp in seconds - and
              then share, embed, and link to.
            </p>
            <p>
              The strategic value of infographics for law firms lies primarily in their
              linkability. When you publish a high-quality visual asset - accident statistics
              by city, a timeline of how a lawsuit progresses, a comparison of different
              case types and their typical outcomes - other websites have a reason to embed it.
              Every embed includes an attribution link back to your site, which produces
              passive link acquisition that compounds over time without additional outreach effort.
            </p>
            <p>
              Infographics also generate social shares at significantly higher rates than
              text-only content. Legal statistics and process visuals are particularly
              shareable among legal professionals, potential clients, and local media outlets
              who cover consumer legal topics.
            </p>
          </div>
        </div>
      </section>

      {/* Why infographics earn links */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Infographics Earn Passive Links for Law Firms
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The embed code model is the mechanism that makes infographics uniquely powerful
                as linkable assets. When another website wants to share your infographic, the
                easiest way to do so is to use your embed code - a snippet that displays the
                image on their site and automatically includes an attribution link back to your
                original page. This creates a self-reinforcing link acquisition loop.
              </p>
              <p>
                For law firms, this works particularly well with legal data visualizations.
                Local news sites covering accident statistics, legal blogs writing about
                personal injury processes, and attorney directories that aggregate legal
                resources are all potential embedding sources. A single infographic can earn
                links from dozens of these sources over its lifetime with no additional
                promotion effort beyond the initial outreach push.
              </p>
              <p>
                Legal infographics also earn coverage from journalists. A reporter writing
                about local traffic safety, workers compensation trends, or consumer legal
                rights frequently needs a shareable visual to accompany their story. A
                well-timed outreach pitch with a relevant infographic can result in media
                coverage that generates both links and brand visibility.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                The infographic link compounding effect
              </h3>
              <ul className="space-y-3">
                {[
                  "Single infographic embedded by 10 sites = 10 passive editorial backlinks",
                  "Each embed link ages and gains authority over time without additional work",
                  "Journalist coverage of your infographic creates additional high-authority pickup",
                  "Social shares extend distribution to audiences that may embed independently",
                  "Infographic appears in Google Image search, creating additional traffic channel",
                  "Cost per link decreases over time as passive embeds accumulate",
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
            Legal Infographic Design Pricing
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Per-infographic pricing. Custom design, data visualization, high-resolution
            export in PNG and PDF, plus embed code for immediate deployment. 10-day delivery.
            One revision round included.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order an Infographic" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              How to maximize the link value of your infographic
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              The infographic itself is only the first step. After publishing it on your site
              with an embed code, pitch it to legal blogs, local news sites covering your
              practice area topics, and any publications that have previously cited similar
              data. A targeted 20-30 site outreach campaign around a strong legal infographic
              can generate 5-15 additional editorial placements in the first 60 days,
              creating a passive link acquisition asset that continues to compound for years.
            </p>
          </div>
        </div>
      </section>

      {/* How infographics are designed */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Legal Infographics Are Designed
          </h2>
          <p className="text-gray-600 mb-8">
            Every infographic is designed from scratch for your specific topic and brand.
            The process balances visual appeal with information density - the goal is an
            asset that communicates clearly at a glance and rewards closer inspection with
            additional depth.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Data Research and Verification",
                desc: "We research publicly available data sources - accident statistics, court records, government databases, industry reports - to supplement the information you provide. Every data point used in the final design is verified for accuracy before inclusion.",
              },
              {
                title: "Visual Concept Development",
                desc: "Before design begins, we determine the optimal visual structure for your content. A timeline topic gets a timeline layout. A statistical topic gets chart-forward design. A process gets a flow diagram. The concept drives the design, not the other way around.",
              },
              {
                title: "Design Execution",
                desc: "The infographic is designed from scratch by a professional designer familiar with legal industry visual standards. Typography, color hierarchy, icon selection, and white space management all contribute to a final asset that reads as credible and authoritative.",
              },
              {
                title: "Brand Integration",
                desc: "Your firm name, logo, brand colors, and website URL are integrated prominently into the design. When the infographic is shared or embedded, your brand attribution travels with it to every downstream site.",
              },
              {
                title: "Format Export",
                desc: "Delivery includes a high-resolution PNG suitable for social media and web embedding, a PDF suitable for print, and a web-optimized version for fast loading on your site. All files are royalty-free and fully owned by your firm.",
              },
              {
                title: "Embed Code Delivery",
                desc: "You receive a ready-to-use HTML embed code snippet that you can add to your blog post or resource page. When another site pastes this code, it displays your infographic and automatically links back to your original page - the mechanism for passive link acquisition.",
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
                title: "Provide your topic and data points",
                desc: "Submit your infographic topic, any specific data points or statistics you want included, your firm name and brand assets (logo, colors, website URL), and the page you plan to publish the infographic on.",
              },
              {
                step: "02",
                title: "Research and visual concept",
                desc: "Our team researches supplementary data sources and develops a visual concept - layout structure, chart types, flow design - appropriate for your topic. This phase takes 2-3 days and ensures the design approach is right before execution begins.",
              },
              {
                step: "03",
                title: "Design execution and brand integration",
                desc: "The infographic is designed from scratch over 4-5 days. Brand assets are integrated. All data points are placed and verified. Typography and color hierarchy are finalized before delivery.",
              },
              {
                step: "04",
                title: "Delivery with embed code",
                desc: "You receive your completed infographic in PNG (high-res and web-optimized) and PDF formats, plus the HTML embed code ready to paste onto your page. One revision round is included if any adjustments are needed.",
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

      {/* Infographic types that work best */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Infographic Types That Work Best for Law Firms
          </h2>
          <p className="text-gray-600 mb-6">
            The most effective legal infographics share two qualities: they present data or
            processes that are genuinely useful to readers, and they are visually distinctive
            enough that other sites want to embed them. These six formats consistently
            perform well for law firm link building and social distribution.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "Process Step Infographics",
                desc: "Visual step-by-step breakdowns of legal processes - filing a personal injury claim, what happens in a criminal arraignment, how child custody is determined. These answer exactly what prospective clients are Googling and are widely embeddable.",
              },
              {
                label: "Statistics Infographics",
                desc: "Data visualizations of accident rates, DUI statistics by city, workers compensation claim outcomes, or legal cost averages. Statistics infographics are heavily cited by journalists, bloggers, and local news sites covering the same topics.",
              },
              {
                label: "Timeline Infographics",
                desc: "Visual timelines showing how long different case types take from filing to resolution. 'How long does a personal injury case take?' is one of the most common pre-hire questions - a visual timeline answers it memorably and shareably.",
              },
              {
                label: "Comparison Infographics",
                desc: "Side-by-side comparisons of case types, legal options, or outcomes (settle vs. trial, workers comp vs. personal injury, criminal charges by severity). These are highly shareable among legal professionals and prospective clients researching their options.",
              },
              {
                label: "Geographic Data Infographics",
                desc: "State-by-state or metro-area comparisons of accident rates, legal statistics, or compensation averages. Geographic data infographics earn pickup from local news outlets and regional legal publications - high-authority sites with strong geographic relevance.",
              },
              {
                label: "Legal FAQ Infographics",
                desc: "Visual FAQ summaries that answer the most common questions about a practice area - often structured as a 'things to know' checklist. These earn consistent social shares and perform well in Google Image search for related legal queries.",
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

      {/* How to use for link building */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Use Infographics for Law Firm Link Building
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            An infographic published with no outreach will earn some passive links organically
            over time. An infographic backed by a structured outreach campaign can generate
            significantly more links in a shorter window. Here is the framework:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "Publish and embed",
                rec: "Step 1",
                desc: "Publish the infographic on a relevant blog post or resource page on your site. Add the embed code directly below the image so any site that wants to share it can do so with one paste.",
              },
              {
                label: "Targeted outreach",
                rec: "Step 2",
                desc: "Identify 20-40 websites that have previously published similar data or cover topics adjacent to your infographic. Pitch them directly with the infographic as a free resource they can embed or reference.",
              },
              {
                label: "Media and social distribution",
                rec: "Step 3",
                desc: "Pitch local journalists covering your practice area topic. Share on LinkedIn, Twitter, and any legal industry forums where your topic is discussed. Media coverage amplifies reach and often produces additional organic embeds.",
              },
            ].map((tier) => (
              <div key={tier.label} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="text-xs font-semibold text-amber-700 mb-1">{tier.rec}</div>
                <div className="text-base font-bold text-gray-900 mb-2">{tier.label}</div>
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
        headline="Ready to create a linkable visual asset for your law firm?"
        subheadline="Order a professional legal infographic. Data research, custom design, embed code, and high-resolution export. 10-day delivery."
        primaryCta={{ label: "View Pricing", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
