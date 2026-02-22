import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, Shield } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Estate Planning Law Firm SEO & Link Building | Attorney Authority",
  description:
    "Estate planning SEO for wills, trusts, probate, and elder law attorneys. KD 55-75 in most markets, CPC $40-$70. More achievable competition with strong content quality and targeted link building.",
  alternates: {
    canonical: "https://attorneyauthority.com/practice-areas/estate-planning",
  },
};

export default function EstatePlanningPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Practice Areas", href: "/practice-areas" },
              { label: "Estate Planning", href: "/practice-areas/estate-planning" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-yellow-900/30 border border-yellow-700/40 text-yellow-400 px-3 py-1 rounded-full font-semibold">
              Moderate competition
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              KD 55&ndash;75 in most markets
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              CPC $40&ndash;$70
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Estate Planning Law Firm SEO &amp; Link Building
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Estate planning offers one of the most achievable organic SEO opportunities
            in legal. Keyword difficulty scores are significantly lower than PI or criminal
            defense, the competition landscape is less dominated by heavily funded firms,
            and content quality carries disproportionate weight in Google&apos;s assessment.
            The window to build durable organic authority is open - but it is narrowing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Link Building Pricing
            </Link>
            <Link
              href="/products/content-writing"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Legal Content Writing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Landscape */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Estate Planning SEO Landscape
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Estate planning is one of the most content-driven practice areas in legal
                SEO. Unlike personal injury or criminal defense - where urgency drives
                immediate search and high ad spend - estate planning clients are typically
                in a research phase. They want to understand their options before committing
                to an attorney. This gives well-structured content exceptional leverage.
              </p>
              <p>
                KD scores for core estate planning terms like &ldquo;estate planning
                attorney [city]&rdquo; typically fall in the 55&ndash;75 range, compared
                to 85&ndash;95 for PI. CPCs of $40&ndash;$70 reflect lower advertiser
                competition. In many mid-size markets, firms with 40&ndash;80 referring
                domains at DR20&ndash;40 can achieve competitive rankings with strong
                content architecture.
              </p>
              <p>
                The aging U.S. population is creating secular tailwind for estate
                planning demand. Searches for wills, trusts, and probate-related terms
                have grown consistently. Firms that establish organic authority now
                will be positioned to capture compounding search volume growth over
                the next decade.
              </p>
              <p>
                Estate planning also benefits from strong cross-practice referral
                dynamics. A firm that ranks well for estate planning terms often
                captures clients who need elderlaw, probate administration, and
                business succession planning - extending the lifetime value of each
                organic acquisition.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Estate planning keyword benchmarks
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Estate Planning Attorney Los Angeles", kd: "72", cpc: "$66" },
                    { label: "Estate Lawyer Chicago", kd: "68", cpc: "$61" },
                    { label: "Wills and Trusts Attorney Phoenix", kd: "62", cpc: "$54" },
                    { label: "Probate Lawyer Houston", kd: "59", cpc: "$48" },
                    { label: "Estate Planning Attorney [Mid-Size City]", kd: "55", cpc: "$42" },
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
                    <h3 className="font-semibold text-amber-900 mb-1">Lower competition, real opportunity</h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Estate planning is one of the few legal practice areas where a firm
                      starting with zero domain authority can realistically reach page-one
                      rankings within 12 months in most markets with consistent content
                      and link building investment.
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
            Recommended Products for Estate Planning SEO
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Estate planning rewards content quality and local signals. The link building
            requirement is lower than high-competition practice areas, making citation
            building a meaningful component of the overall strategy.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                slug: "blogger-outreach",
                name: "Blogger Outreach (DR20-40)",
                tagline: "Editorial placements in the DR range that matches estate planning competitor profiles in most markets.",
                badge: "Core strategy",
              },
              {
                slug: "content-writing",
                name: "Legal Content Writing",
                tagline: "Will pages, trust pages, probate guides, and elder law content written to rank and establish topical authority.",
                badge: "High priority",
              },
              {
                slug: "content-plan",
                name: "Content Plan",
                tagline: "Map all wills, trusts, probate, and elder law keyword opportunities before committing budget to content production.",
                badge: "Strategy",
              },
              {
                slug: "citation-building",
                name: "Citation Building",
                tagline: "Local citation consistency is a meaningful ranking factor at this competition level - especially for Google Maps visibility.",
                badge: "Local SEO",
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
            Content Strategy for Estate Planning Firms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Estate planning has an unusually rich informational keyword landscape.
            Clients research extensively before engaging an attorney. A firm with
            comprehensive, authoritative content on all estate planning topics earns
            trust throughout the research journey - and converts at the point of contact.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Core Estate Planning Page",
                desc: "The main \"estate planning attorney [city]\" page covering the full scope of services. Primary target for link building. Must establish the firm's expertise and the value of estate planning comprehensively.",
                priority: "Priority 1",
              },
              {
                title: "Wills and Last Testaments",
                desc: "Dedicated pages covering simple wills, complex wills, the will drafting process, and what happens when someone dies without a will (intestate succession). High informational search volume.",
                priority: "Priority 1",
              },
              {
                title: "Trust Pages",
                desc: "Revocable living trusts, irrevocable trusts, special needs trusts, and charitable trusts each warrant dedicated pages. Trust content is lower competition than wills but captures highly qualified clients.",
                priority: "Priority 2",
              },
              {
                title: "Probate and Estate Administration",
                desc: "Pages explaining the probate process, how to avoid probate, executor responsibilities, and estate administration timelines. These capture high-urgency searches from people already dealing with a death.",
                priority: "Priority 2",
              },
              {
                title: "Power of Attorney and Healthcare Directives",
                desc: "Durable power of attorney, healthcare power of attorney, and living will pages. Increasingly searched as people become aware of incapacity planning needs beyond just death.",
                priority: "Priority 3",
              },
              {
                title: "Elder Law and Medicaid Planning",
                desc: "Elder law, Medicaid planning, and long-term care planning pages. Adjacent to estate planning with a growing search audience and lower competition than primary estate planning terms.",
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
            What Top-Ranking Estate Planning Competitors Look Like
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Estate planning competitors have significantly lower link profile requirements
            than PI or criminal defense. Content quality and topical depth are the
            differentiating factors at this competition level.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Typical top-ranking estate planning firms</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "40\u2013100" },
                  { metric: "Median linking DR", value: "DR 20\u201340" },
                  { metric: "Content pages indexed", value: "40\u2013120+" },
                  { metric: "Monthly link cadence", value: "2\u20134 links/month" },
                ].map((row) => (
                  <div key={row.metric} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{row.metric}</span>
                    <span className="font-semibold text-gray-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">What separates #1 from #5 in estate planning</h3>
              <div className="space-y-3">
                {[
                  { metric: "Content comprehensiveness", value: "High" },
                  { metric: "Attorney bio / E-E-A-T signals", value: "High" },
                  { metric: "Citation accuracy (NAP)", value: "High" },
                  { metric: "Google Business Profile", value: "Optimized" },
                ].map((row) => (
                  <div key={row.metric} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{row.metric}</span>
                    <span className="font-semibold text-amber-700">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Citation building matters more here</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  At moderate competition levels, citation consistency - accurate NAP (Name, Address,
                  Phone) data across directories, Google Business Profile, Bing Places, and legal
                  directories - has a proportionally larger impact on local visibility than in PI
                  or criminal defense, where raw domain authority is so dominant. Estate planning
                  firms should prioritize citation building alongside link building.
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
            Estate Planning SEO - Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is estate planning SEO really less competitive than other practice areas?",
                a: "In most markets, yes - significantly. Keyword difficulty scores of 55-75 are typical for estate planning terms, versus 85-95 for personal injury. This does not mean competition is absent, but it does mean that firms with lower domain authority can realistically achieve competitive rankings within 12-18 months of consistent investment. The gap between estate planning and PI/criminal defense is one of the most actionable in legal SEO.",
              },
              {
                q: "What is the most important single thing an estate planning firm can do for SEO?",
                a: "Build comprehensive, well-organized content that covers the full scope of estate planning services. In this practice area, the correlation between content depth and rankings is stronger than in PI or criminal defense. A site with 60+ pages of well-structured estate planning content will typically outrank a competitor with twice the backlinks but thin, template-style pages. Content investment and link building should run simultaneously from the start.",
              },
              {
                q: "How does citation building help an estate planning firm?",
                a: "Citation building establishes accurate, consistent NAP (Name, Address, Phone) data across legal directories, general business directories, and mapping platforms. At the moderate competition level typical of estate planning, Google's local algorithm gives proportionally more weight to citation signals than in extreme-competition practice areas where raw domain authority dominates. Consistent citations also support Google Maps/local pack rankings, where many estate planning clients find attorneys.",
              },
              {
                q: "Should probate and estate planning be on the same website?",
                a: "Yes, and ideally on the same site with separate dedicated pages for each. Probate administration and estate planning are closely related and often serve the same client demographics. A site covering both builds broader topical authority and captures clients at different points in the estate process - some searching before a death event (estate planning), others searching immediately after (probate). Combined coverage on one authoritative site is almost always better than splitting across two thin sites.",
              },
              {
                q: "How long does it take to see results from estate planning SEO?",
                a: "At moderate competition levels, meaningful ranking improvements are typically visible within 6-9 months of consistent SEO investment - faster than in PI or criminal defense. Firms starting from zero often see first-page rankings for long-tail terms within 3-4 months and for competitive head terms within 9-15 months. Consistent monthly link acquisition combined with new content pages compresses this timeline significantly.",
              },
              {
                q: "Is elder law a separate SEO opportunity from estate planning?",
                a: "Yes, and a valuable one. Elder law, Medicaid planning, and long-term care planning keywords have their own search volumes and, in most markets, even lower competition than core estate planning terms. Building content that covers elder law alongside estate planning captures a broader audience and strengthens the site's overall topical authority. Firms that serve both areas should have dedicated elder law pages, not just a mention on the estate planning page.",
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
        headline="Ready to build authority for estate planning keywords?"
        subheadline="Link building, content writing, and citation services calibrated for estate planning competition levels."
        primaryCta={{ label: "View All Pricing", href: "/pricing" }}
        secondaryCta={{ label: "Explore Citation Building", href: "/products/citation-building" }}
      />
    </>
  );
}
