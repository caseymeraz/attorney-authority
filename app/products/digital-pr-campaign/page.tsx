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

const product = getProductBySlug("digital-pr-campaign")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Digital PR Campaign for Law Firms - DR70+ National Publications",
  description:
    "Earn editorial backlinks from DR70+ national publications through journalist-pitched story angles. The highest-authority link building strategy available for law firms. 3-5 placements, 45-day delivery.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/digital-pr-campaign",
  },
  openGraph: {
    title: "Digital PR Campaign for Law Firms - DR70+ National Publications",
    description:
      "Editorially earned links from Forbes, Bloomberg, and major national outlets. Journalist-pitched story angles. 3-5 DR70+ placements. 45-day delivery.",
    images: [{ url: "/og/digital-pr-campaign.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Digital PR Campaign for Law Firms",
  description:
    "A full digital PR campaign that earns editorial coverage on major national publications with DR70+ ratings. Journalist-pitched story angles produce the highest-authority backlinks available for law firm websites.",
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

export default function DigitalPRCampaignPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Digital PR Campaign", href: "/products/digital-pr-campaign" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Highest-authority links available
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              45-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              DR70+ national publications
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Digital PR Campaign for Law Firms
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            Editorially earned backlinks from major national publications. Journalist-pitched
            story angles produce the kind of DR70+ coverage that moves the needle on the most
            competitive legal keywords in the country - no paid placements, no advertorials.
            Genuine earned media.
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

      {/* What is digital PR */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Is a Digital PR Campaign for Law Firms?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              Digital PR is a link building strategy that earns editorial coverage on major
              publications through newsworthy story pitches rather than direct payment for
              links. A journalist writes a real article that cites your law firm as an expert
              source, authority commentator, or data provider - producing organic, editorially
              earned backlinks on sites like Forbes, Bloomberg, USA Today, and similar
              national outlets.
            </p>
            <p>
              This is fundamentally different from press release distribution or paid
              advertorials. The link appears because a journalist or editor decided your
              firm&apos;s story, data, or expert commentary was worth covering. That editorial
              judgment is exactly why Google treats these placements as the most authoritative
              signal type in its ranking algorithm.
            </p>
            <p>
              For law firms competing in high-value practice areas like personal injury, mass
              tort, and criminal defense, digital PR is the ceiling of what link building can
              achieve. No other tactic produces DR70+ backlinks at scale from sites that
              Google has assigned the highest possible trust ratings.
            </p>
          </div>
        </div>
      </section>

      {/* Why digital PR is the most powerful */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Digital PR Is the Most Powerful Legal Link Building Strategy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Link authority is not linear. A single DR80 link from Forbes does not carry
                twice the authority of a DR40 link - it carries orders of magnitude more. This
                is because Google&apos;s PageRank algorithm is logarithmic, meaning each step
                up the authority scale represents exponentially more link equity.
              </p>
              <p>
                For legal keywords classified as YMYL (Your Money Your Life), Google applies
                additional editorial scrutiny to the sites it trusts to rank at the top. Major
                national publications have spent decades building the trust signals Google
                requires. When those outlets link to your law firm, they transfer a level of
                authority that thousands of DR20 blog posts cannot replicate.
              </p>
              <p>
                Competitors who have landed even one or two national publication links have a
                meaningful structural advantage that conventional link building alone cannot
                close in a reasonable timeframe. Digital PR is the fastest way to acquire the
                same caliber of authority signal.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                The DR70+ authority math
              </h3>
              <ul className="space-y-3">
                {[
                  "One Forbes link (DR94): more ranking impact than 50+ DR30 blogger outreach placements",
                  "Personal injury keywords: $50-$200 CPC - top-3 organic captures 35%+ of clicks",
                  "Average PI case value: $50,000-$500,000 - one ranked keyword can pay for years of campaigns",
                  "Digital PR transforms top-3 ranking probability on otherwise unwinnable keywords",
                  "Earned media cannot be replicated by competitors - each story angle is unique",
                  "DR70+ links compound in authority value over time as the host page ages",
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
            Digital PR Campaign Pricing for Law Firms
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            One comprehensive campaign tier. Includes story angle development, journalist
            outreach, editorial follow-up, and 3-5 DR70+ placements with full reporting.
            45-day delivery window reflects genuine editorial lead times.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Start a Campaign" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              Is digital PR right for my law firm right now?
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Digital PR produces the greatest ROI for established firms with existing domain
              authority (DR40+) targeting competitive practice-area keywords in major metros.
              If your site is newer or your domain authority is still building, a foundation
              of blogger outreach and niche edits should precede a digital PR campaign - the
              links are more powerful when there is existing authority for Google to amplify.
              Firms in competitive PI, mass tort, or criminal defense markets with real SEO
              budgets see transformative results from even one campaign.
            </p>
          </div>
        </div>
      </section>

      {/* How digital PR campaigns work */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How a Digital PR Campaign Works
          </h2>
          <p className="text-gray-600 mb-8">
            Earning coverage on national publications requires a disciplined process. Unlike
            link buying or press release distribution, every step depends on genuine
            journalistic value - story angles that editors actually want to publish.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Story Angle Development",
                desc: "We research your practice area, recent case trends, and available public data to identify story angles that major publications actively cover. This is the most critical step - the wrong angle gets ignored regardless of how polished the pitch is.",
              },
              {
                title: "Journalist Research",
                desc: "We identify specific journalists and editors at target publications who have covered similar legal, business, or consumer protection topics. Pitching the right person at the right outlet dramatically improves acceptance rates.",
              },
              {
                title: "Pitch Creation",
                desc: "Each pitch is written as a direct outreach to a named journalist - not a mass-distributed press release. It leads with the newsworthiness of the angle, supports it with data or expert quotes, and positions your firm as the authoritative source.",
              },
              {
                title: "Follow-Up and Relationship Management",
                desc: "Journalists receive hundreds of pitches per week. Our team manages follow-up cadences, responds to journalist requests for additional information, and coordinates any interviews or quote approvals needed for coverage.",
              },
              {
                title: "Editorial Review and Publication",
                desc: "Coverage timelines on major publications range from one week to several months depending on the outlet and story type. We monitor publication schedules and alert you when coverage goes live.",
              },
              {
                title: "Campaign Reporting",
                desc: "Upon completion, you receive a white-label CSV report with every placement: live URL, publication name, DR at time of publication, anchor text used, destination URL, and publication date. All placements are independently verifiable.",
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Campaign Order Process</h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Submit your campaign brief",
                desc: "Provide your firm name, practice area focus, target geographic market, and any relevant data, case statistics, or expert positioning you want incorporated into the story angle. The more context you provide, the stronger the pitch.",
              },
              {
                step: "02",
                title: "Story angle development and approval",
                desc: "Our PR team researches newsworthy angles based on your brief and current editorial trends. You review the proposed story angles before we begin outreach. This step typically takes 5-7 days and ensures alignment before journalist contact.",
              },
              {
                step: "03",
                title: "Journalist outreach and follow-up",
                desc: "We pitch identified journalists at target publications with DR70+ ratings. Outreach includes initial pitch, follow-up sequences, and response management. This phase runs over 3-6 weeks depending on journalist response timelines.",
              },
              {
                step: "04",
                title: "Coverage secured and published",
                desc: "As placements are confirmed and articles published, you receive immediate notification with the live URL. We verify each placement against DR and editorial quality standards before including it in your report.",
              },
              {
                step: "05",
                title: "Final CSV report delivered",
                desc: "At campaign close (45-day window), you receive a complete white-label report with all placements, DR ratings, live URLs, anchor text, and destination URLs. Every link carries a 60-day replacement guarantee if removed post-publication.",
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
            Digital PR vs. Blogger Outreach vs. Niche Edits
          </h2>
          <p className="text-gray-600 mb-6">
            All three strategies build authority - but they operate at different tiers and
            serve different strategic purposes. Most competitive law firms use all three.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="py-3 px-3 font-semibold text-amber-700">Digital PR</th>
                  <th className="py-3 px-3 font-semibold text-gray-600">Blogger Outreach</th>
                  <th className="py-3 px-3 font-semibold text-gray-500">Niche Edits</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Authority tier", "DR70-95+", "DR10-60", "DR10-60"],
                  ["Link type", "Editorially earned", "Editorial guest post", "Inserted in existing content"],
                  ["Cost per link", "$1,760-$2,937 per link", "$144-$912 per link", "$150-$1,140 per link"],
                  ["Delivery timeline", "45 days", "17 days", "17 days"],
                  ["Volume per order", "3-5 placements", "1 per order", "1 per order"],
                  ["Replicability by competitors", "Very low (story-based)", "Moderate", "Moderate"],
                  ["Best for", "Competitive top-3 PI/mass tort", "Foundation building", "Authority momentum"],
                  ["Ideal combination", "Quarterly campaigns", "Monthly cadence", "Monthly cadence"],
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
            Most law firms benefit from running digital PR campaigns quarterly while
            maintaining a monthly cadence of{" "}
            <Link href="/products/blogger-outreach" className="text-amber-700 font-semibold hover:underline">
              blogger outreach
            </Link>{" "}
            and{" "}
            <Link href="/products/niche-edits" className="text-amber-700 font-semibold hover:underline">
              niche edits
            </Link>
            {" "}for consistent authority growth between campaigns.
          </p>
        </div>
      </section>

      {/* Which law firms should invest */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Which Law Firms Should Invest in Digital PR?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Digital PR delivers the highest ROI for firms where the keyword economics justify
            premium link acquisition. The math is straightforward: if ranking for your primary
            keyword is worth $500,000+ in annual case value, investing $8,816 in the strategy
            that gets you there is not a marketing expense - it is a capital allocation decision.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "Personal Injury",
                desc: "The highest-value legal keywords in organic search. PI firms in major metros competing for 'car accident lawyer' or 'personal injury attorney' are the primary beneficiaries of digital PR campaigns.",
              },
              {
                label: "Mass Tort",
                desc: "National case aggregation requires national authority signals. Mass tort firms building plaintiff lists for major litigation need the kind of DR80+ visibility only digital PR produces.",
              },
              {
                label: "Criminal Defense",
                desc: "High CPC, high conversion intent, and significant geographic competition. Criminal defense firms in large metros targeting felony defense or DUI keywords benefit substantially from national authority links.",
              },
              {
                label: "Immigration Law",
                desc: "Immigration practices with national reach - particularly those handling visa applications, asylum cases, or deportation defense - compete on keywords where DR70+ links are frequently the deciding factor.",
              },
              {
                label: "Workers Compensation",
                desc: "High-volume case types with strong local competition. Workers comp firms using digital PR to secure placement on labor and employment publications build authority that local competitors cannot easily replicate.",
              },
              {
                label: "Any Practice with DR40+ Baseline",
                desc: "Digital PR amplifies existing authority. Firms with a DR40 or higher baseline have enough foundational equity that national links produce dramatic ranking momentum on competitive target keywords.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-amber-900 mb-1">{item.label}</div>
                    <p className="text-xs text-amber-800 leading-relaxed">{item.desc}</p>
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
        headline="Ready to earn links from the publications your competitors can't buy?"
        subheadline="Start a digital PR campaign and secure 3-5 DR70+ editorial placements on major national publications."
        primaryCta={{ label: "View Pricing", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
