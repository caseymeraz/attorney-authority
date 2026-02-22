import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, Shield } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Family Law Firm SEO & Link Building | Attorney Authority",
  description:
    "Family law SEO for divorce, custody, and related practice areas. KD 70-85 in most markets, CPC $60-$90. Build topical authority and quality backlinks to rank for high-intent family law keywords.",
  alternates: {
    canonical: "https://attorneyauthority.com/practice-areas/family-law",
  },
};

export default function FamilyLawPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Practice Areas", href: "/practice-areas" },
              { label: "Family Law", href: "/practice-areas/family-law" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-orange-900/30 border border-orange-700/40 text-orange-400 px-3 py-1 rounded-full font-semibold">
              High competition
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              KD 70&ndash;85 in most markets
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              CPC $60&ndash;$90
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Family Law Firm SEO &amp; Link Building
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Divorce and custody keywords are intensely competitive in nearly every local
            market. Family law clients are emotionally invested, research extensively
            before contacting a firm, and convert at high rates when they find an attorney
            they trust. Topical authority through content combined with consistent link
            building is the winning formula in this practice area.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Link Building Pricing
            </Link>
            <Link
              href="/products/content-plan"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Content Strategy <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Landscape */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Family Law SEO Landscape
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Family law covers a wide keyword spectrum - from broad terms like
                &ldquo;family law attorney [city]&rdquo; to highly specific queries
                like &ldquo;how to modify a child custody order.&rdquo; The broad,
                transactional terms are highly competitive, while the informational
                long-tail offers significant organic opportunity for firms willing to
                invest in content depth.
              </p>
              <p>
                Divorce is the dominant sub-category in terms of search volume and
                competition. &ldquo;Divorce lawyer [city]&rdquo; typically carries
                KD 70&ndash;85 in established markets. Child custody is close behind.
                Both keyword clusters attract high advertiser competition because
                family law cases have significant retainer fees and can span months
                or years.
              </p>
              <p>
                What distinguishes successful family law SEO is the depth of content
                coverage. Clients in family law situations research extensively before
                deciding on an attorney. A firm with comprehensive, well-organized
                content covering divorce process, custody arrangements, support
                calculations, and adoption earns trust signals that translate into
                both rankings and conversion.
              </p>
              <p>
                Link building requirements in family law are somewhat more achievable
                than in personal injury, but the expectation of consistent quality
                content is proportionally higher. A firm with 100 referring domains
                and 50+ well-structured pages will consistently outperform competitors
                with twice the links but thin, generic content.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Family law keyword benchmarks
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Divorce Lawyer Los Angeles", kd: "83", cpc: "$87" },
                    { label: "Child Custody Attorney Chicago", kd: "79", cpc: "$76" },
                    { label: "Family Law Attorney Houston", kd: "75", cpc: "$68" },
                    { label: "Divorce Lawyer [Mid-Size City]", kd: "70", cpc: "$62" },
                    { label: "Child Support Attorney [City]", kd: "68", cpc: "$58" },
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
                  Illustrative estimates. Actual values vary by market and tool.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">High research, high intent</h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Family law clients typically research attorneys for days or weeks before
                      contacting one. A firm that appears across multiple informational and
                      transactional queries during this research phase earns a significant
                      trust advantage at the point of contact.
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
            Recommended Products for Family Law SEO
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Family law SEO rewards content depth alongside link building. A strategic
            combination of quality backlinks, comprehensive content, and a planned
            content architecture is the most effective approach.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                slug: "blogger-outreach",
                name: "Blogger Outreach (DR30-50)",
                tagline: "Editorial placements that match the link profiles of well-ranking family law competitors in your market.",
                badge: "Core strategy",
              },
              {
                slug: "content-writing",
                name: "Legal Content Writing",
                tagline: "Divorce pages, custody pages, support pages, and city content written for topical authority and keyword targeting.",
                badge: "High priority",
              },
              {
                slug: "content-plan",
                name: "Content Plan",
                tagline: "A mapped-out content strategy covering all family law keyword clusters - so you build the right pages in the right order.",
                badge: "Strategy first",
              },
              {
                slug: "keyword-research",
                name: "Keyword Research",
                tagline: "Discover all divorce, custody, support, and adoption keyword opportunities in your specific market before investing in content.",
                badge: "Data-driven",
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
            Content Strategy for Family Law Firms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Family law has an unusually rich content opportunity. The emotional nature
            of cases means clients ask dozens of specific questions before choosing
            an attorney. A firm that answers those questions well earns rankings,
            trust, and conversions simultaneously.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Core Family Law Page",
                desc: "The main \"family law attorney [city]\" page covering the full scope of services. This is your primary link target and must establish broad topical authority for the practice area.",
                priority: "Priority 1",
              },
              {
                title: "Divorce Pages",
                desc: "Dedicated pages for contested divorce, uncontested divorce, high-asset divorce, and the divorce process. Divorce is typically the highest-volume keyword cluster in family law.",
                priority: "Priority 1",
              },
              {
                title: "Child Custody and Support Pages",
                desc: "Separate pages for legal custody, physical custody, modification, enforcement, and child support calculation. These are distinct search intents with their own keyword volumes.",
                priority: "Priority 1",
              },
              {
                title: "Adoption and Guardianship Pages",
                desc: "Pages covering domestic adoption, stepparent adoption, foster care adoption, and guardianship. Lower competition than divorce/custody with meaningful search volume in most markets.",
                priority: "Priority 2",
              },
              {
                title: "City and Location Pages",
                desc: "Location-specific pages for surrounding cities and service areas. Essential for capturing the geographic long-tail of family law search volume across your region.",
                priority: "Priority 2",
              },
              {
                title: "FAQ and Resource Content",
                desc: "Answers to questions like how long divorce takes, how custody is determined, and what mediation involves. High E-E-A-T value and excellent for capturing informational search intent.",
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
            What Top-Ranking Family Law Competitors Look Like
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Family law competitors tend to have more balanced link-to-content ratios
            than PI firms. Strong content depth combined with a consistent link building
            cadence at DR30-50 is the dominant pattern.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Top-ranking family law firms</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "75\u2013200" },
                  { metric: "Median linking DR", value: "DR 30\u201345" },
                  { metric: "Content pages indexed", value: "50\u2013150+" },
                  { metric: "Monthly link cadence", value: "4\u20138 links/month" },
                ].map((row) => (
                  <div key={row.metric} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{row.metric}</span>
                    <span className="font-semibold text-gray-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Content depth benchmark</h3>
              <div className="space-y-3">
                {[
                  { metric: "Practice sub-area pages", value: "10\u201325+" },
                  { metric: "City/location pages", value: "10\u201330+" },
                  { metric: "FAQ/resource pages", value: "15\u201340+" },
                  { metric: "Total indexed content", value: "50\u2013100+ pages" },
                ].map((row) => (
                  <div key={row.metric} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{row.metric}</span>
                    <span className="font-semibold text-gray-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">The content-links balance in family law</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Across most family law markets, a firm with 100 referring domains at DR30-45
                  and 60+ well-structured content pages will outrank a competitor with 150 referring
                  domains but thin, template-style content. Content depth and topical authority are
                  proportionally more valuable in family law than in PI. Budget accordingly - invest
                  in both simultaneously rather than sequencing links before content.
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
            Family Law SEO - Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the most competitive keyword in family law SEO?",
                a: "Divorce-related keywords are typically the most competitive in family law, with 'divorce lawyer [city]' or 'divorce attorney [city]' carrying KD scores of 70-83 in most markets. Child custody follows closely. However, competition varies significantly by market - a mid-size city with fewer established family law firms may have significantly lower KD scores than a major metro, presenting faster ranking opportunities.",
              },
              {
                q: "Should a family law firm build separate pages for divorce and child custody?",
                a: "Yes, absolutely. Divorce and child custody are distinct keyword clusters with different search intent, different volumes, and different user questions. A single combined page attempting to rank for both typically underperforms dedicated pages for each. The same logic applies to child support, adoption, and other sub-areas - each warrants its own well-developed page targeting the specific keyword cluster.",
              },
              {
                q: "How important is content length and depth for family law pages?",
                a: "More important than in most other practice areas. Family law clients are in emotionally difficult situations and research extensively before choosing an attorney. Pages that answer questions thoroughly, explain processes clearly, and demonstrate genuine expertise build trust that translates to contact rates. A comprehensive 2,000+ word divorce process page will typically outperform a 500-word overview page both in rankings and in conversion.",
              },
              {
                q: "How many backlinks does a family law website need to rank?",
                a: "In most markets, 75-150 referring domains at a median DR of 30-45 is sufficient to reach top-3 rankings for competitive family law terms. This is significantly lower than personal injury requirements, making family law one of the more achievable practice areas for firms building from a lower baseline. Audit your specific competitors first - in less competitive markets, even 40-60 referring domains may be sufficient.",
              },
              {
                q: "What DR level is appropriate for family law link building?",
                a: "DR30-50 placements are the core range for most family law markets. Unlike PI, where DR50-60 links are often necessary to compete, family law competitors typically have profiles weighted toward DR30-45. Building in that range while maintaining editorial quality - real traffic, genuine content, not PBNs - is the most efficient use of link building budget for most family law firms.",
              },
              {
                q: "Can a content plan help a family law firm prioritize what to build first?",
                a: "Yes - a content plan is particularly valuable in family law because the keyword landscape is large. A structured plan maps all keyword clusters (divorce, custody, support, adoption, etc.), assigns search volume and KD estimates to each, and recommends a build-out sequence. This prevents the common mistake of building content in random order and ensures high-priority pages receive links and optimization before lower-priority supporting content.",
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
        headline="Ready to build authority for family law keywords?"
        subheadline="Link building, content writing, and content planning products calibrated for family law SEO competition."
        primaryCta={{ label: "View Link Building Pricing", href: "/pricing" }}
        secondaryCta={{ label: "Explore Content Plans", href: "/products/content-plan" }}
      />
    </>
  );
}
