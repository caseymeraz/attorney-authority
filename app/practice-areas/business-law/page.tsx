import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, Shield } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Business Law Firm SEO & Link Building | Attorney Authority",
  description:
    "Business and corporate law SEO strategy. KD 60-80 in major metros, CPC $50-$90. B2B audience, different intent signals, and a keyword landscape that rewards content authority and brand visibility.",
  alternates: {
    canonical: "https://attorneyauthority.com/practice-areas/business-law",
  },
};

export default function BusinessLawPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Practice Areas", href: "/practice-areas" },
              { label: "Business Law", href: "/practice-areas/business-law" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-yellow-900/30 border border-yellow-700/40 text-yellow-400 px-3 py-1 rounded-full font-semibold">
              Moderate competition
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              KD 60&ndash;80 in major metros
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              CPC $50&ndash;$90
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Business Law Firm SEO &amp; Link Building
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Business law SEO operates differently from consumer-facing practice areas.
            The audience is B2B, research cycles are longer, and decisions are often
            made by executives who evaluate multiple signals before engaging counsel.
            Building organic authority in business law requires a content strategy that
            demonstrates industry-specific expertise, backed by authoritative links that
            establish domain-level credibility.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Link Building Pricing
            </Link>
            <Link
              href="/products/brand-mentions"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Brand Mentions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Landscape */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Business Law SEO Landscape
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Business law keyword competition varies significantly by sub-speciality.
                Core terms like &ldquo;business attorney [city]&rdquo; or &ldquo;corporate
                lawyer [city]&rdquo; carry KD 60&ndash;80 in major metros - moderate
                competition with room for well-executed SEO programs to penetrate.
                Specific sub-areas like business formation, contract drafting, and
                commercial litigation have their own keyword clusters, often with
                lower competition than the broad terms.
              </p>
              <p>
                The SERP composition for business law keywords is notably different from
                personal injury or criminal defense. Large legal directories (Martindale,
                Justia, Avvo) and legal information sites appear prominently, alongside
                solo and small firm websites. This creates more opportunity for a
                well-optimized firm site to compete than in practice areas dominated
                by heavily resourced large firms.
              </p>
              <p>
                Business law clients are more likely to search using industry-specific
                terminology - &ldquo;business acquisition attorney,&rdquo; &ldquo;commercial
                lease lawyer,&rdquo; &ldquo;LLC formation attorney.&rdquo; A content
                strategy that covers this terminology comprehensively attracts clients
                with high commercial intent who are researching specific legal needs.
              </p>
              <p>
                Brand mentions and editorial links in business-oriented publications
                (local business journals, industry trade press, startup ecosystems)
                carry particular value for business law SEO because they reach the
                target audience directly and signal relevance to Google in ways that
                generic legal directory placements cannot match.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Business law keyword benchmarks
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Business Attorney Los Angeles", kd: "77", cpc: "$86" },
                    { label: "Corporate Lawyer Chicago", kd: "73", cpc: "$79" },
                    { label: "Business Formation Attorney Houston", kd: "64", cpc: "$61" },
                    { label: "Commercial Contract Lawyer NYC", kd: "69", cpc: "$74" },
                    { label: "Business Attorney [Mid-Size City]", kd: "60", cpc: "$52" },
                  ].map((kw) => (
                    <div key={kw.label} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{kw.label}</span>
                      <div className="flex gap-3">
                        <span className="text-amber-600 font-semibold">KD {kw.kd}</span>
                        <span className="text-gray-500">CPC {kw.cpc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Illustrative estimates. Actual values vary by market and tool.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">B2B client lifetime value</h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Business law clients often become long-term relationships with recurring
                      legal needs - annual compliance, contract review, disputes, transactions.
                      A single business client acquired through organic search can represent
                      significant multi-year revenue, making the SEO ROI calculation particularly
                      compelling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Products */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Recommended Products for Business Law SEO
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Business law SEO benefits from a mix of editorial link building, brand
            visibility in business-focused publications, and content that demonstrates
            industry-specific expertise across all sub-specialties.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                slug: "blogger-outreach",
                name: "Blogger Outreach (DR30-50)",
                tagline: "Editorial placements in legal, business, and finance publications that match business law competitor link profiles.",
                badge: "Core strategy",
              },
              {
                slug: "content-writing",
                name: "Legal Content Writing",
                tagline: "Entity formation, contract, litigation, M&A, and city pages written to build topical authority across the full business law keyword landscape.",
                badge: "Content foundation",
              },
              {
                slug: "brand-mentions",
                name: "Brand Mentions",
                tagline: "Unlinked and linked brand references in business and legal publications that build recognition with your B2B target audience.",
                badge: "Brand authority",
              },
              {
                slug: "content-plan",
                name: "Content Plan",
                tagline: "A structured map of all business law keyword opportunities - from business formation to M&A - so you build content in the right sequence.",
                badge: "Strategy",
              },
            ].map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded mb-3 inline-block">
                  {product.badge}
                </span>
                <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-amber-800 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.tagline}</p>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-700">
                  View details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content Strategy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Content Strategy for Business Law Firms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Business law has a wide keyword landscape spanning multiple distinct
            service areas. A comprehensive content architecture that covers each
            sub-speciality signals topical authority and captures qualified traffic
            across the full funnel of business legal needs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Core Business Law Page",
                desc: "The main \"business attorney [city]\" or \"corporate lawyer [city]\" page. Primary link target. Should establish the firm's full scope of business legal services and demonstrate industry expertise.",
                priority: "Priority 1",
              },
              {
                title: "Business Formation Pages",
                desc: "LLC formation, corporation setup, partnership agreements, and operating agreements. These capture entrepreneurs at a high-intent moment - starting a business is a trigger event for legal services.",
                priority: "Priority 1",
              },
              {
                title: "Contract Law Pages",
                desc: "Commercial contracts, contract review, contract disputes, and non-compete agreements. Contract keywords have consistent search volume across all business sizes and stages.",
                priority: "Priority 2",
              },
              {
                title: "Business Litigation Pages",
                desc: "Commercial litigation, business dispute resolution, breach of contract, and partnership disputes. These serve businesses in active legal situations with high urgency to engage counsel.",
                priority: "Priority 2",
              },
              {
                title: "M&A and Transactions Pages",
                desc: "Mergers and acquisitions, business sale, asset purchase, and due diligence pages. Lower volume but extremely high client lifetime value - the clients these pages attract are among the most valuable.",
                priority: "Priority 3",
              },
              {
                title: "Industry-Specific Pages",
                desc: "Legal services for specific industries - real estate, healthcare, technology, construction. Industry-specific content demonstrates depth of expertise and captures lower-competition, higher-intent searches.",
                priority: "Priority 3",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded mb-3 inline-block">
                  {item.priority}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Patterns */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Top-Ranking Business Law Competitors Look Like
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Business law SERPs in most markets show a mix of large legal directory
            listings and individual firm sites. The firm sites that rank well share
            consistent characteristics around content depth and link profile composition.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Typical top-ranking business law firms</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "60\u2013150" },
                  { metric: "Median linking DR", value: "DR 30\u201350" },
                  { metric: "Content pages indexed", value: "40\u2013120+" },
                  { metric: "Monthly link cadence", value: "3\u20136 links/month" },
                ].map((row) => (
                  <div key={row.metric} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{row.metric}</span>
                    <span className="font-semibold text-gray-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">What business law directories bring</h3>
              <div className="space-y-3">
                {[
                  { metric: "Martindale-Hubbell", value: "High authority baseline" },
                  { metric: "Justia / FindLaw", value: "Legal niche relevance" },
                  { metric: "Local bar associations", value: "Trusted local signal" },
                  { metric: "Chamber of commerce", value: "Business community signal" },
                ].map((row) => (
                  <div key={row.metric} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{row.metric}</span>
                    <span className="font-semibold text-gray-700">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Brand visibility matters in B2B legal</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Business law clients often make referral-driven decisions, but organic search
                  is increasingly the first touchpoint. A firm that appears in local business
                  journals, industry publications, and general business content earns both direct
                  referral traffic and the brand signals that support organic rankings. Brand
                  mentions - both linked and unlinked - contribute to Google&apos;s entity
                  understanding and authoritativeness assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Business Law SEO - Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How is business law SEO different from consumer legal SEO?",
                a: "Business law SEO targets a B2B audience with different search behavior than consumer legal clients. Business clients research more extensively before contacting an attorney, use more specific terminology (LLC formation, commercial lease, business acquisition), and often have multiple decision-makers involved. Content that demonstrates specific industry expertise and practical knowledge of business legal issues converts better than generic 'trust us' messaging. The keyword competition is also generally lower than PI or criminal defense, with more room for strategic content to differentiate.",
              },
              {
                q: "Should a business law firm focus on local SEO or national visibility?",
                a: "Most business law firms should prioritize local SEO first - the majority of business clients prefer attorneys licensed in their state and accessible in person. Local targeting ('business attorney [city]', '[city] corporate lawyer') with a strong Google Business Profile and local citation profile is the foundation. National visibility becomes valuable for firms with specific sub-specialties (e.g., startup law, franchise law, federal regulatory work) that attract clients beyond their geographic area.",
              },
              {
                q: "How do brand mentions help a business law firm?",
                a: "Brand mentions in business publications, local business journals, and industry trade press serve multiple purposes. They drive direct referral traffic from the B2B audience most likely to need legal services. They build the name recognition that supports referral conversion - a business owner who has seen a firm mentioned in a business journal is more likely to respond to a referral to that firm. They also contribute to Google's understanding of the firm as an entity, supporting organic rankings through entity authority signals.",
              },
              {
                q: "What is the most effective content type for business law client acquisition?",
                a: "Content that addresses specific business situations with practical, actionable information performs best in business law SEO. Pages that explain how to form an LLC, what a non-compete agreement can and cannot do, how to handle a contract dispute, or what triggers a shareholder buyout attract clients at the point when they recognize a legal need. This intent-matched content converts at higher rates than generic practice area descriptions because it demonstrates expertise through specificity.",
              },
              {
                q: "How many backlinks does a business law firm need to rank?",
                a: "In most markets, 60-150 referring domains at a median DR of 30-50 is sufficient for competitive business law rankings. This is significantly less than personal injury. The mix of sources matters: legal directories, local business associations, general business and finance publications, and industry-specific sites all contribute to a profile that signals relevance to both Google and to the target audience. Start with a competitor backlink audit to set a precise target for your specific market.",
              },
              {
                q: "Is content more important than links for business law SEO?",
                a: "In business law, the balance tilts more toward content than in PI - but both are required. A site with 100+ well-structured pages covering every business law sub-specialty, combined with 60-100 quality referring domains, will consistently outperform a site with 200 links but thin content. The reason is that business law clients search for specific topics and Google rewards the site that demonstrates the most comprehensive expertise on those topics. Build content and links simultaneously from day one.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        headline="Ready to build authority for business law keywords?"
        subheadline="Link building, brand mentions, and content services calibrated for B2B legal audience dynamics."
        primaryCta={{ label: "View All Pricing", href: "/pricing" }}
        secondaryCta={{ label: "Explore Brand Mentions", href: "/products/brand-mentions" }}
      />
    </>
  );
}
