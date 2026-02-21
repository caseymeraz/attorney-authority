import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, ArrowRight, Scale, TrendingUp, Award } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import JsonLd from "@/components/marketing/json-ld";
import FaqSection from "@/components/service-pages/faq-section";
import CtaBanner from "@/components/shared/cta-banner";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Law Firm Link Building Services  -  DR-Tiered Backlinks for Attorneys",
  description:
    "Specialized link building for law firm websites. DR-tiered blogger outreach, niche edits, digital PR, and brand mentions  -  all vetted for YMYL compliance and E-E-A-T standards. Transparent pricing.",
  alternates: {
    canonical: "https://attorneyauthority.com/services/law-firm-link-building",
  },
  openGraph: {
    title: "Law Firm Link Building Services  -  DR-Tiered Backlinks for Attorneys",
    description:
      "DR10+ to DR60+ link building built exclusively for law firm SEO. Blogger outreach, niche edits, digital PR, and brand mentions with transparent pricing.",
    images: [{ url: "/og/law-firm-link-building.png", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Law Firm Link Building",
  serviceType: "SEO Link Building",
  provider: {
    "@type": "Organization",
    name: "Attorney Authority",
    url: "https://attorneyauthority.com",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Law Firms, Attorneys, Legal Marketing Teams",
  },
  description:
    "DR-tiered link building services exclusively for law firm websites. Includes blogger outreach, niche edits, digital PR, brand mentions, and multilingual links  -  all vetted for YMYL compliance.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Law Firm Link Building Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blogger Outreach DR10+–DR60+" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Niche Edits DR10+–DR60+" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital PR Campaign" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Mentions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multilingual Links DA10+" } },
    ],
  },
};

const linkProducts = PRODUCTS.filter((p) => p.category === "link-building");

const faqs = [
  {
    q: "What is link building for law firms and why is it different from general link building?",
    a: "Link building for law firms is the practice of acquiring backlinks from third-party websites to improve a law firm's search engine rankings. It differs from general link building in several important ways: legal websites are classified as YMYL (Your Money Your Life) by Google, meaning they receive heightened quality scrutiny. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is particularly important for legal content, and backlinks from authoritative sources are a core external signal. Additionally, legal keywords like 'personal injury lawyer' and 'DUI attorney' are among the most competitive in all of organic search  -  requiring more consistent, higher-DR link acquisition than most other industries.",
  },
  {
    q: "How does Google's YMYL classification affect law firm link building strategy?",
    a: "YMYL classification means Google applies stricter quality thresholds to legal content. Search quality evaluators assess legal pages more critically than non-YMYL content. Backlinks from credible, established websites signal to Google that your firm is a trusted authority in the legal space  -  counterbalancing the elevated quality bar. Low-quality links (PBNs, link farms, thin content sites) carry a disproportionate risk on YMYL sites because any negative signal is amplified in the quality assessment. This is why we vet every placement specifically for YMYL compatibility.",
  },
  {
    q: "What DR (Domain Rating) level should my law firm start with?",
    a: "The right starting DR depends on your current domain authority and target keyword competition. New law firm websites or those targeting local long-tail keywords typically start with DR10–30 placements to build a foundation. Firms with an established site targeting competitive practice-area keywords in mid-size markets generally need DR30–40 placements. Law firms competing for top-3 rankings in major metros (Los Angeles, Chicago, New York) for high-value keywords like 'personal injury lawyer' typically require consistent DR50–60 acquisition. A link profile audit before starting is the best way to identify the right tier for your specific situation.",
  },
  {
    q: "How many backlinks does a law firm need to rank on page one?",
    a: "There is no fixed number  -  it depends on the competitive landscape of your target keywords. For low-competition local terms, 20–50 quality backlinks may be sufficient. For 'personal injury lawyer [major city]', top-ranking firms typically have 200–500+ referring domains with a median DR of 30–50. The key metric is not the absolute count but your DR relative to your top competitors. Using Ahrefs or SEMrush to audit the backlink profiles of the current top 3 results for your target keyword gives you a specific benchmark.",
  },
  {
    q: "How long does link building take to show results for law firms?",
    a: "Google typically processes new backlinks within 2–8 weeks  -  you will often see them appear in Google Search Console sooner. However, meaningful ranking improvements for competitive legal keywords typically take 3–6 months of consistent link acquisition. This is normal for YMYL niches where Google applies additional evaluation time. The strategy that works is not a one-time burst  -  it is a consistent monthly cadence that compounds over time, similar to a content publishing schedule.",
  },
  {
    q: "Are PBNs or private blog networks safe for law firm websites?",
    a: "No. Private blog networks carry significant risk for any website, but the risk is amplified for law firm sites because of YMYL classification. If Google detects a manual penalty on a law firm website, the drop in organic visibility can be catastrophic  -  especially for firms that rely on organic search for case acquisition. We do not use PBNs and actively screen every publisher in our network to exclude them. The editorial, real-traffic backlinks we place are designed to pass Google's quality assessments, not circumvent them.",
  },
  {
    q: "What is the difference between blogger outreach and niche edits?",
    a: "Blogger outreach creates a new article on a qualifying website specifically to house your backlink. Niche edits insert your link into an existing, already-indexed article. The key difference: niche edits benefit from the established authority and crawl history of the host page, typically passing link equity faster. Blogger outreach gives you more control over content context. Most law firms benefit from a combination of both strategies for a natural, diversified link profile.",
  },
  {
    q: "Can link building help with Google Maps and local pack rankings?",
    a: "Link building contributes to overall domain authority, which is a factor in local pack rankings  -  but it is not the primary local signal. Google Maps and local pack positions are primarily influenced by Google Business Profile completeness, citation consistency (NAP accuracy), proximity to searcher, and reviews. For local pack optimization, we recommend pairing link building with our citation building service. For organic (non-map) rankings on legal keywords, link building is the dominant factor.",
  },
];

export default function LawFirmLinkBuildingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Law Firm Link Building", href: "/services/law-firm-link-building" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Legal niche only
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              YMYL-compliant
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              DR10+ to DR60+
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Law Firm Link Building Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            The most competitive keywords in organic search are legal. &ldquo;Personal injury
            lawyer Los Angeles&rdquo; has a keyword difficulty of 90+. A single signed PI
            case is worth $50,000–$500,000. Ranking requires consistent, high-quality
            backlink acquisition  -  not a generic package, but a legal-specific strategy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View All Link Building Pricing
            </Link>
            <Link
              href="/guides/law-firm-link-building-guide"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Read the Full Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why link building matters for law firms */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Law Firms Need Link Building  -  and Why Generic Agencies Get It Wrong
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Google&apos;s Search Quality Evaluator Guidelines classify all legal
                content as YMYL  -  Your Money Your Life. Legal decisions can affect a
                person&apos;s finances, rights, and freedom, so Google applies stricter
                quality thresholds to legal pages than to most other content types.
              </p>
              <p>
                This means E-E-A-T (Experience, Expertise, Authoritativeness,
                Trustworthiness) is not optional for law firm websites  -  it is
                functionally required to rank in competitive legal SERPs. Backlinks from
                credible, editorial websites are one of the strongest external signals
                Google uses to evaluate authoritativeness.
              </p>
              <p>
                Generic link building agencies apply the same approach to legal sites as
                they do to e-commerce or SaaS. They don&apos;t screen publishers for
                legal relevance, don&apos;t account for the YMYL risk profile, and
                don&apos;t frame anchor text strategy around the specific competitive
                dynamics of legal keyword clusters.
              </p>
              <p>
                Attorney Authority is built exclusively for law firms. Every publisher
                in our network is vetted with YMYL in mind. Every anchor text strategy
                is calibrated for legal keyword competition. Every DR tier recommendation
                is based on the actual competitive landscape of your practice area.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  The legal keyword competitive reality
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Personal Injury Lawyer LA", kd: "92", cpc: "$148" },
                    { label: "DUI Attorney Chicago", kd: "88", cpc: "$89" },
                    { label: "Criminal Defense Lawyer NYC", kd: "85", cpc: "$112" },
                    { label: "Family Law Attorney Denver", kd: "76", cpc: "$64" },
                    { label: "Immigration Lawyer Miami", kd: "79", cpc: "$71" },
                  ].map((kw) => (
                    <div key={kw.label} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{kw.label}</span>
                      <div className="flex gap-3">
                        <span className="text-red-600 font-semibold">KD {kw.kd}</span>
                        <span className="text-gray-500">CPC {kw.cpc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Illustrative estimates. KD = Keyword Difficulty; CPC = Cost Per Click. Actual values vary by market and tool.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">The ROI math</h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      A personal injury firm that ranks top-3 for &ldquo;personal injury
                      lawyer [city]&rdquo; captures 30–40% of monthly searches. At 100
                      monthly searches and a 10% contact rate, that&apos;s 10 inquiries.
                      At a 20% sign rate and $75,000 average case value, that&apos;s
                      $150,000/month in new revenue potential from one keyword.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products in this category */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Law Firm Link Building Products
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Five distinct link acquisition channels, each with transparent per-unit pricing
            and stated delivery timelines.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {linkProducts.map((p) => {
              const minPrice = Math.min(...p.tiers.map((t) => t.ourPrice));
              const maxDelivery = Math.max(...p.tiers.map((t) => t.ourDelivery));
              return (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-md transition-all"
                >
                  <div className="text-xs font-semibold text-amber-700 mb-1">
                    From ${minPrice.toLocaleString()}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-amber-800 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{p.tagline}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{p.tiers.length} tier{p.tiers.length !== 1 ? "s" : ""} available</span>
                    <span>Up to {maxDelivery} days</span>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-amber-700">
                    View details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our approach vs generic */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Approach vs. Traditional Link Building
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Criteria</th>
                  <th className="py-3 px-4 font-semibold text-gray-500">Generic Agency</th>
                  <th className="py-3 px-4 font-semibold text-amber-700 bg-amber-50 rounded-t-lg">Attorney Authority</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["YMYL publisher vetting", "❌ Not considered", "✅ Every placement"],
                  ["Legal keyword anchor strategy", "❌ Generic approach", "✅ Practice-area calibrated"],
                  ["E-E-A-T compatibility", "❌ Rarely addressed", "✅ Core screening criterion"],
                  ["DR verification at placement", "⚠️ Sometimes", "✅ Always current data"],
                  ["Private Blog Network (PBN) screening", "⚠️ Varies", "✅ Explicit exclusion"],
                  ["Transparent per-unit pricing", "❌ Usually bundled", "✅ Published pricing"],
                  ["Delivery guarantee", "❌ Vague timelines", "✅ Stated per product"],
                ].map(([criteria, col1, col2]) => (
                  <tr key={criteria as string} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-700">{criteria}</td>
                    <td className="py-3 px-4 text-center text-gray-500">{col1}</td>
                    <td className="py-3 px-4 text-center font-medium text-amber-700 bg-amber-50">{col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quality signals */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How We Ensure Link Quality for Legal Websites
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Shield,
                title: "Editorial vetting",
                desc: "Every publisher must demonstrate genuine editorial standards  -  real authors, real content, no open link-selling.",
              },
              {
                icon: CheckCircle,
                title: "Traffic verification",
                desc: "Publishers must show real organic traffic. Zero-traffic, high-DR sites from reciprocal linking are excluded.",
              },
              {
                icon: Scale,
                title: "YMYL compatibility",
                desc: "Placement context is screened for compatibility with YMYL standards  -  not just DR score.",
              },
              {
                icon: Award,
                title: "PBN exclusion",
                desc: "Private blog network footprints (WHOIS clustering, IP patterns, template similarity) are actively screened.",
              },
              {
                icon: TrendingUp,
                title: "Anchor text advisory",
                desc: "Anchor text is calibrated to your current profile  -  avoiding over-optimization risks while maximizing relevance.",
              },
              {
                icon: CheckCircle,
                title: "Live URL reporting",
                desc: "Every delivery includes a live URL you can independently verify in Ahrefs, SEMrush, or any backlink tool.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center mb-3">
                  <item.icon className="w-4 h-4 text-amber-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link building strategy by practice area */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Link Building Strategy by Practice Area
          </h2>
          <p className="text-gray-600 mb-8">
            The competitive dynamics  -  and therefore the link building requirements  - 
            vary significantly across practice areas. Here is a general framework:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                area: "Personal Injury",
                competition: "Extreme",
                minDr: "DR40+",
                cadence: "8–15 links/month",
                note: "Highest case values, highest competition. Top-3 requires sustained DR50–60 acquisition in major metros.",
                href: "/practice-areas/personal-injury",
              },
              {
                area: "Criminal Defense",
                competition: "Very High",
                minDr: "DR40+",
                cadence: "6–12 links/month",
                note: "Competitive nationally and locally. DUI-specific keywords are among the most contested in legal.",
                href: "/practice-areas/criminal-defense",
              },
              {
                area: "Family Law",
                competition: "High",
                minDr: "DR30+",
                cadence: "4–8 links/month",
                note: "High local competition. Strong topical authority from content + links is effective in most markets.",
                href: "/practice-areas/family-law",
              },
              {
                area: "Immigration Law",
                competition: "Moderate-High",
                minDr: "DR30+",
                cadence: "4–6 links/month",
                note: "Spanish-language content opportunity significant. Multilingual links are particularly effective here.",
                href: "/practice-areas/immigration-law",
              },
              {
                area: "Estate Planning",
                competition: "Moderate",
                minDr: "DR20+",
                cadence: "2–4 links/month",
                note: "Lower competition than PI or criminal defense. Content quality and topical authority carry more weight.",
                href: "/practice-areas/estate-planning",
              },
              {
                area: "Workers Compensation",
                competition: "High",
                minDr: "DR30+",
                cadence: "4–8 links/month",
                note: "Competitive, especially in industrial states. Employer-side vs. employee-side targets different audiences.",
                href: "/practice-areas/workers-compensation",
              },
            ].map((pa) => (
              <Link
                key={pa.area}
                href={pa.href}
                className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-amber-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 group-hover:text-amber-800 transition-colors">
                    {pa.area}
                  </h3>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    {pa.competition}
                  </span>
                </div>
                <div className="flex gap-4 text-xs text-gray-600 mb-2">
                  <span>Min: {pa.minDr}</span>
                  <span>Cadence: {pa.cadence}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{pa.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} headline="Law Firm Link Building  -  Frequently Asked Questions" />

      {/* CTA */}
      <CtaBanner
        headline="Ready to build authoritative backlinks for your law firm?"
        subheadline="Browse transparent pricing on all link building products  -  no calls required before your first order."
        primaryCta={{ label: "View Link Building Pricing", href: "/pricing" }}
        secondaryCta={{ label: "Read the Full Guide", href: "/guides/law-firm-link-building-guide" }}
      />
    </>
  );
}
