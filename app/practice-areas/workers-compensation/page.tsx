import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, Shield } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Workers Compensation Law Firm SEO & Link Building | Attorney Authority",
  description:
    "Workers compensation SEO for employee-side and employer-side attorneys. KD 70-85 in major metros, CPC $65-$95. Link building and content strategy for workplace injury and comp claim keywords.",
  alternates: {
    canonical: "https://attorneyauthority.com/practice-areas/workers-compensation",
  },
};

export default function WorkersCompensationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Practice Areas", href: "/practice-areas" },
              { label: "Workers Compensation", href: "/practice-areas/workers-compensation" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-orange-900/30 border border-orange-700/40 text-orange-400 px-3 py-1 rounded-full font-semibold">
              High competition
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              KD 70&ndash;85 in major metros
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              CPC $65&ndash;$95
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Workers Compensation Law Firm SEO &amp; Link Building
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Workers compensation is a high-stakes, time-sensitive practice area with
            significant search volume in every industrial state. Employee-side firms
            compete for injured worker traffic at KD 70&ndash;85. The keyword landscape
            spans injury types, industries, and both sides of the employment relationship.
            A systematic content and link building strategy is required to compete
            effectively in this niche.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Link Building Pricing
            </Link>
            <Link
              href="/products/keyword-research"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Keyword Research <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Landscape */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Workers Compensation SEO Landscape
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Workers compensation SEO competition is heavily concentrated in
                industrial states - California, Texas, Illinois, New York, Pennsylvania,
                and Ohio - where manufacturing, construction, and logistics industries
                generate large volumes of workplace injuries annually. In these markets,
                &ldquo;workers comp attorney [city]&rdquo; carries KD 70&ndash;85
                with CPCs of $65&ndash;$95.
              </p>
              <p>
                The practice area is divided into two distinct markets. Employee-side
                firms help injured workers navigate the claims process, appeal denials,
                and recover full benefits. Employer-side firms and insurance defense
                practitioners represent companies managing claims. These audiences
                search differently and respond to different content, requiring distinct
                keyword strategies even for firms that serve both sides.
              </p>
              <p>
                Workers comp clients are typically injured workers searching during
                a vulnerable period, often on mobile devices from hospital waiting
                rooms or worksites. Content that addresses their immediate questions -
                whether they need an attorney, how to file a claim, and what happens
                if a claim is denied - captures high-intent traffic at the exact
                moment of need.
              </p>
              <p>
                The practice area also has strong industry vertical opportunities.
                Construction, warehouse, and healthcare workers face distinct injury
                patterns and have industry-specific search behavior. Firms that build
                industry-targeted content (construction injury attorney, warehouse
                injury lawyer) capture long-tail traffic with lower KD scores and
                very high commercial intent.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Workers comp keyword benchmarks
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Workers Comp Attorney Los Angeles", kd: "83", cpc: "$92" },
                    { label: "Workers Compensation Lawyer Chicago", kd: "81", cpc: "$88" },
                    { label: "Work Injury Lawyer Houston", kd: "77", cpc: "$79" },
                    { label: "Workers Comp Attorney Philadelphia", kd: "74", cpc: "$72" },
                    { label: "Workers Comp Lawyer [Mid-Size City]", kd: "70", cpc: "$66" },
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
                    <h3 className="font-semibold text-amber-900 mb-1">Urgency and volume</h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Workers comp clients often search within hours or days of an injury
                      event. This urgency means conversion rates from organic traffic are
                      high when content directly addresses the immediate search intent.
                      A top-3 ranking in a high-injury-volume market generates consistent,
                      high-intent lead flow.
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
            Recommended Products for Workers Compensation SEO
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Workers comp SEO requires a combination of consistent link building,
            industry-specific content production, and keyword research to map the
            full injury type and industry vertical keyword landscape.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                slug: "blogger-outreach",
                name: "Blogger Outreach (DR30-50)",
                tagline: "Editorial placements that match the link profiles of top-ranking workers comp competitors in industrial states.",
                badge: "Core strategy",
              },
              {
                slug: "niche-edits",
                name: "Niche Edits (DR30-50)",
                tagline: "Links inserted into existing legal, safety, and occupational health content for efficient link equity transfer.",
                badge: "Fast impact",
              },
              {
                slug: "content-writing",
                name: "Legal Content Writing",
                tagline: "Injury type pages, industry vertical pages, city pages, and process content written to rank across the full workers comp keyword cluster.",
                badge: "Content foundation",
              },
              {
                slug: "keyword-research",
                name: "Keyword Research",
                tagline: "Map injury types, industries, and geographic keywords in your specific market to prioritize content and link investment.",
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
            Content Strategy for Workers Compensation Firms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Workers compensation has one of the most segmentable content opportunities
            in legal SEO. Injury types, industry verticals, and the employee-versus-employer
            angle each create distinct keyword clusters with their own search volumes
            and competition levels.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Core Workers Comp Page",
                desc: "The main \"workers compensation attorney [city]\" page. Primary link target. Should cover the claims process, attorney role, benefits available, and what to do after a workplace injury.",
                priority: "Priority 1",
              },
              {
                title: "Injury Type Pages",
                desc: "Back injuries, repetitive strain injuries, traumatic brain injuries, construction falls, and occupational disease each warrant dedicated pages. Injury-specific keywords carry high intent from workers who know what happened to them.",
                priority: "Priority 2",
              },
              {
                title: "Industry Vertical Pages",
                desc: "Construction worker injuries, warehouse and logistics injuries, healthcare worker injuries, and manufacturing injuries are distinct keyword clusters with their own audiences and injury patterns.",
                priority: "Priority 2",
              },
              {
                title: "Claims Process and FAQ Content",
                desc: "How to file a workers comp claim, what to do if a claim is denied, how long claims take, and what benefits are available. These informational pages capture early-stage research and feed qualified traffic to conversion pages.",
                priority: "Priority 2",
              },
              {
                title: "Employer-Side Pages",
                desc: "For firms that serve employer clients or insurance defense: workers comp policy, managing claims, OSHA compliance, and return-to-work programs. Distinct audience, distinct keyword set, distinct conversion path.",
                priority: "Priority 3",
              },
              {
                title: "City and County Pages",
                desc: "Geographic long-tail pages for surrounding cities, counties, and major industrial areas. Workers comp searches are highly local - clients want an attorney who knows their local workers comp board and judges.",
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
            What Top-Ranking Workers Comp Competitors Look Like
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            The workers comp space is typically dominated by solo and small firm
            practices rather than large PI firms, creating a slightly more accessible
            competitive environment in most markets.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">High-competition state markets</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "75\u2013200" },
                  { metric: "Median linking DR", value: "DR 30\u201350" },
                  { metric: "Content pages indexed", value: "60\u2013150+" },
                  { metric: "Monthly link cadence", value: "5\u20138 links/month" },
                ].map((row) => (
                  <div key={row.metric} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{row.metric}</span>
                    <span className="font-semibold text-gray-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Less competitive state markets</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "30\u201380" },
                  { metric: "Median linking DR", value: "DR 25\u201340" },
                  { metric: "Content pages indexed", value: "30\u201380" },
                  { metric: "Monthly link cadence", value: "3\u20135 links/month" },
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
                <h3 className="font-semibold text-amber-900 mb-1">Link profile composition in workers comp</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Effective workers comp link profiles mix legal directories, occupational health and
                  safety publications, local business news sites, and general authority editorial
                  placements. Links from workplace safety blogs, union publications, and occupational
                  health resources carry both topical relevance and audience alignment. The mix tends
                  toward DR30-50 placements, with fewer extreme-high-DR links than PI requires.
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
            Workers Compensation SEO - Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How does workers comp SEO differ by state?",
                a: "Workers compensation is a state-administered system with significant variation in rules, benefit structures, and legal processes by state. SEO competition also varies substantially - California, New York, Illinois, and Texas have highly competitive markets with KD scores approaching 85 in major metros. Less industrial states may have KD scores 15-20 points lower, making them more accessible for firms starting from a lower baseline. A keyword research audit should always be state-specific.",
              },
              {
                q: "Should a workers comp firm target injury types or industries first for content?",
                a: "Start with injury types, then layer in industry verticals. Injury-type pages (back injury, TBI, repetitive strain) capture searches from workers who already know what happened and are looking for an attorney who understands their specific situation. Industry pages (construction injury, warehouse injury) capture workers who identify with their occupation when searching. Both create distinct keyword clusters with real search volume - build both in the medium term, prioritizing injury types first.",
              },
              {
                q: "Can a firm that serves both employee and employer sides compete organically for both?",
                a: "Yes, but with careful content architecture. Employee-side and employer-side clients search using completely different terminology, have different intent, and are in some cases adversarial positions. Serving both audiences with clear, separated content is achievable - but a site that muddles the two can create trust issues with both audiences. Separate sections or dedicated pages for each side of the practice, with distinct calls to action, is the recommended approach.",
              },
              {
                q: "What is the role of niche edits in workers comp link building?",
                a: "Niche edits are particularly effective in workers comp because there is substantial existing content on workplace safety, occupational health, and employee rights that has accumulated authority over time. Inserting a relevant link into an established, well-indexed page on a workplace safety topic passes link equity efficiently and places your link in topically relevant context. This is often faster to execute than new blogger outreach and carries comparable or greater link value per placement.",
              },
              {
                q: "How competitive are workers comp keywords in industrial states compared to PI?",
                a: "Workers comp is competitive in industrial states but generally requires 20-30% fewer referring domains than comparable personal injury markets. A PI firm in Chicago might need 200-300 referring domains to compete; a workers comp firm in the same market typically needs 100-200 to reach comparable rankings. The KD ceiling is also slightly lower - 70-85 versus 85-95 for PI. This makes workers comp one of the more achievable high-competition practice areas for firms building authority systematically.",
              },
              {
                q: "Does workers comp SEO require a different approach for general injury firms versus specialists?",
                a: "Yes. General practice injury firms (PI + workers comp) should build workers comp content as a distinct section with its own topical authority, not as an afterthought on a PI-focused site. Google recognizes topical authority at the page and section level, not just the domain level. A dedicated workers comp section with comprehensive coverage of claim types, injury types, and processes signals genuine expertise in the area - which matters under YMYL quality standards for legal content.",
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
        headline="Ready to build authority for workers compensation keywords?"
        subheadline="Link building, content, and keyword research calibrated for workers comp competition levels in your state."
        primaryCta={{ label: "View Link Building Pricing", href: "/pricing" }}
        secondaryCta={{ label: "Keyword Research", href: "/products/keyword-research" }}
      />
    </>
  );
}
