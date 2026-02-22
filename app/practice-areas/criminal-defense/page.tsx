import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, Shield } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Criminal Defense Law Firm SEO & Link Building | Attorney Authority",
  description:
    "Criminal defense SEO strategy for attorneys. KD 80-92 in major metros, CPC $80-$120. DR-tiered link building, content architecture, and keyword research for DUI, felony, and general criminal defense firms.",
  alternates: {
    canonical: "https://attorneyauthority.com/practice-areas/criminal-defense",
  },
};

export default function CriminalDefensePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Practice Areas", href: "/practice-areas" },
              { label: "Criminal Defense", href: "/practice-areas/criminal-defense" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-red-900/30 border border-red-700/40 text-red-400 px-3 py-1 rounded-full font-semibold">
              Very high competition
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              KD 80&ndash;92 in major metros
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              CPC $80&ndash;$120
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Criminal Defense Law Firm SEO &amp; Link Building
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Criminal defense keywords are among the most aggressively contested in legal
            SEO. DUI attorney keywords in particular approach personal injury levels of
            competition in major markets. Organic rankings require a consistent link
            acquisition program and a content architecture that covers the full range
            of criminal defense keyword intent.
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
            The Criminal Defense SEO Landscape
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Criminal defense encompasses a wide range of keyword clusters - from
                broad terms like &ldquo;criminal defense lawyer [city]&rdquo; to highly
                specific queries like &ldquo;federal drug trafficking attorney.&rdquo;
                Competition intensity varies significantly across this spectrum, but
                the most valuable head terms consistently carry KD scores of 80&ndash;92
                in major metros.
              </p>
              <p>
                DUI is the standout sub-category. DUI attorney keywords in cities like
                Los Angeles, Chicago, and Phoenix routinely carry KD 85+ and CPCs
                exceeding $100. Because DUI is the most common criminal charge in the
                country and clients are highly motivated to act immediately, conversion
                rates for DUI-specific organic traffic are among the highest in legal.
              </p>
              <p>
                The YMYL classification of criminal defense content means Google applies
                heightened quality standards. A site ranking for &ldquo;criminal defense
                lawyer&rdquo; is advising users on matters that could affect their
                freedom. E-E-A-T signals - including demonstrated attorney expertise
                and authoritative backlinks - are non-negotiable for competitive rankings.
              </p>
              <p>
                The good news for criminal defense firms: the market is fractured across
                many sub-specialties. Firms that build topical authority through
                comprehensive content coverage of their specific practice niches can
                outpace larger, more generalist competitors by targeting the full
                keyword tail systematically.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Criminal defense keyword benchmarks
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Criminal Defense Lawyer Chicago", kd: "88", cpc: "$112" },
                    { label: "DUI Attorney Los Angeles", kd: "91", cpc: "$118" },
                    { label: "Drug Charges Lawyer Houston", kd: "82", cpc: "$95" },
                    { label: "Felony Defense Attorney Phoenix", kd: "80", cpc: "$88" },
                    { label: "Criminal Defense Lawyer [Mid-Size City]", kd: "72", cpc: "$78" },
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
                    <h3 className="font-semibold text-amber-900 mb-1">Urgency drives conversion</h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Criminal defense clients search with high urgency - often within hours
                      of an arrest. Organic search intent in this niche is transactional.
                      A firm ranking top-3 for local DUI or criminal defense keywords captures
                      prospects at peak motivation to retain counsel.
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
            Recommended Products for Criminal Defense SEO
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            A combination of editorial link building, content production, and keyword
            research gives criminal defense firms the foundation to compete across
            DUI, felony, misdemeanor, and drug offense keywords.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                slug: "blogger-outreach",
                name: "Blogger Outreach (DR40-60)",
                tagline: "Editorial placements on real, traffic-verified sites - the link type that matches well-ranking criminal defense competitors.",
                badge: "Core strategy",
              },
              {
                slug: "niche-edits",
                name: "Niche Edits (DR40-60)",
                tagline: "Links inserted into established legal and news content that Google already indexes and trusts.",
                badge: "Fast impact",
              },
              {
                slug: "content-writing",
                name: "Legal Content Writing",
                tagline: "Practice sub-area pages, city pages, and FAQ content written to rank for the full criminal defense keyword cluster.",
                badge: "Content foundation",
              },
              {
                slug: "keyword-research",
                name: "Keyword Research",
                tagline: "Map the full criminal defense keyword landscape in your market before committing budget to links or content.",
                badge: "Strategy first",
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
            Content Strategy for Criminal Defense Firms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Criminal defense has one of the richest keyword landscapes in legal SEO.
            Covering the full range of charge types, case stages, and local geography
            creates the topical authority that helps pages rank for their primary targets.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Core Criminal Defense Page",
                desc: "The main \"criminal defense lawyer [city]\" page. Primary target for high-DR backlinks. Must cover attorney credentials, practice scope, case process, and client results.",
                priority: "Priority 1",
              },
              {
                title: "DUI/DWI Pages",
                desc: "A standalone DUI section - often the highest-value criminal defense keyword cluster. Include first offense, multiple offense, commercial DUI, and field sobriety test pages.",
                priority: "Priority 1",
              },
              {
                title: "Charge-Type Pages",
                desc: "Dedicated pages for drug offenses, assault, theft, domestic violence, weapons charges, and federal crimes. Each targets a distinct search cluster with its own competition profile.",
                priority: "Priority 2",
              },
              {
                title: "Felony vs. Misdemeanor Pages",
                desc: "Pages explaining the difference in severity, process, and outcomes. These capture informational search intent and feed qualified traffic to transactional practice area pages.",
                priority: "Priority 2",
              },
              {
                title: "City and County Pages",
                desc: "Location-specific pages targeting criminal defense keywords in surrounding cities, counties, and courthouses. Captures the geographic long tail that general pages cannot rank for.",
                priority: "Priority 3",
              },
              {
                title: "Process and FAQ Content",
                desc: "Pages answering what happens after an arrest, how bail works, what a public defender provides versus private counsel, and what to expect at arraignment. High E-E-A-T value.",
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
            What Top-Ranking Criminal Defense Competitors Look Like
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Top-ranking criminal defense firms in competitive markets share consistent
            link profile characteristics. These benchmarks give you a clear target
            for your own acquisition strategy.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Major metro leaders</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "100\u20133000+" },
                  { metric: "Median linking DR", value: "DR 35\u201355" },
                  { metric: "Content pages indexed", value: "80\u2013250+" },
                  { metric: "Monthly link cadence", value: "6\u201312 links/month" },
                ].map((row) => (
                  <div key={row.metric} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{row.metric}</span>
                    <span className="font-semibold text-gray-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Mid-size market leaders</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "50\u2013150" },
                  { metric: "Median linking DR", value: "DR 30\u201345" },
                  { metric: "Content pages indexed", value: "40\u2013100" },
                  { metric: "Monthly link cadence", value: "4\u20138 links/month" },
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
              <CheckCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Profile composition in criminal defense</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Successful criminal defense link profiles mix legal directories, local news
                  coverage, general authority editorial sites, and niche legal publication
                  placements. DUI-specific sub-niches benefit from links from traffic safety
                  and community news sites that naturally cover drunk driving topics. A mix of
                  DR30-50 placements is the typical profile - the extreme DR60+ links that PI
                  firms require are less necessary in most criminal defense markets.
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
            Criminal Defense SEO - Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Should a criminal defense firm have separate pages for DUI and general criminal defense?",
                a: "Yes, absolutely. DUI is a distinct keyword cluster with its own search volume, competition profile, and user intent. A single combined page attempting to rank for both 'criminal defense lawyer' and 'DUI attorney' will typically underperform dedicated pages targeting each. Separate pages allow you to build targeted content, earn relevant links, and signal topical authority to Google for each specific keyword cluster.",
              },
              {
                q: "How many referring domains do I need to rank for criminal defense keywords?",
                a: "This depends heavily on your target market. In major metros like Chicago or Los Angeles, top-ranking criminal defense firms typically have 100-300 referring domains at a median DR of 35-55. In mid-size markets, 50-150 referring domains is often sufficient. The most reliable approach is to audit the backlink profiles of the current top-3 results for your specific target keywords and set acquisition targets to match or exceed them over 12-18 months.",
              },
              {
                q: "What is the most important content page for a criminal defense firm to build first?",
                a: "Start with your core 'criminal defense lawyer [city]' page and any high-value sub-area pages (DUI is usually the top priority). These primary pages should be comprehensive, demonstrate attorney credentials and expertise, and be the target pages for your link building campaign. Supporting content (charge-type pages, FAQ pages, city pages) can be built in parallel and will strengthen topical authority for the core pages.",
              },
              {
                q: "Can keyword research help criminal defense firms find less competitive opportunities?",
                a: "Yes - significantly. Broad head terms like 'criminal defense lawyer [city]' are the most competitive, but there are often much lower-competition opportunities in specific charge types, geographic long-tail terms, or informational queries. Keyword research maps this full landscape, identifies KD scores and search volumes for each target, and helps you prioritize your content and link building investment for the best return on budget.",
              },
              {
                q: "How does YMYL affect criminal defense SEO specifically?",
                a: "YMYL (Your Money or Your Life) designation means Google's quality raters evaluate criminal defense pages under stricter standards. Advice about criminal charges can affect a person's freedom - Google treats this category with heightened scrutiny. This means E-E-A-T signals are particularly important: attorney bios with verifiable credentials, cited legal information, editorial backlinks from credible publications, and transparent contact and location information all contribute to meeting this standard.",
              },
              {
                q: "Is PPC or organic SEO more effective for criminal defense firms?",
                a: "Both are effective channels with different economics. PPC delivers immediate visibility and can be turned on or off, but at CPCs of $80-$120 per click, costs are substantial and stop the moment you stop paying. Organic SEO requires 6-18 months to build but delivers compounding returns - traffic value continues without ongoing per-click costs. The most competitive criminal defense firms run both simultaneously, using PPC to capture volume while SEO builds long-term organic authority.",
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
        headline="Ready to build authority for criminal defense keywords?"
        subheadline="DR-tiered link building and content services built for the competitive dynamics of criminal defense SEO."
        primaryCta={{ label: "View Link Building Pricing", href: "/pricing" }}
        secondaryCta={{ label: "Explore Keyword Research", href: "/products/keyword-research" }}
      />
    </>
  );
}
