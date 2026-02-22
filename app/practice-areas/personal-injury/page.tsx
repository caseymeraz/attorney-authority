import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, Shield } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Personal Injury Law Firm SEO & Link Building | Attorney Authority",
  description:
    "Personal injury is the most competitive practice area in legal SEO. KD 85-95 in major metros, CPC $100-$150. Build the link profile and content strategy required to rank.",
  alternates: {
    canonical: "https://attorneyauthority.com/practice-areas/personal-injury",
  },
};

export default function PersonalInjuryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Practice Areas", href: "/practice-areas" },
              { label: "Personal Injury", href: "/practice-areas/personal-injury" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-red-900/30 border border-red-700/40 text-red-400 px-3 py-1 rounded-full font-semibold">
              Extreme competition
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              KD 85&ndash;95 in major metros
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              CPC $100&ndash;$150
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Personal Injury Law Firm SEO &amp; Link Building
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Personal injury is the most competitive practice area in all of legal SEO.
            A single signed case is worth $50,000&ndash;$500,000. Competitors are spending
            tens of thousands per month on paid search. Ranking organically requires a
            sustained, high-DR link acquisition strategy built specifically for PI keyword
            competition.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Link Building Pricing
            </Link>
            <Link
              href="/contact"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Discuss Your Market <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Landscape */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Personal Injury SEO Landscape
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                No practice area in legal SEO is more contested than personal injury.
                The combination of high case values, contingency fee models that cost
                clients nothing upfront, and massive advertising budgets from established
                PI firms creates a keyword environment where KD scores of 85&ndash;95 are
                the norm in every major metro.
              </p>
              <p>
                Google applies its highest YMYL scrutiny to PI pages. Websites making
                injury claims or offering legal guidance are evaluated rigorously for
                E-E-A-T signals. Backlinks from credible, editorially controlled websites
                are among the strongest external signals available to demonstrate that
                authority to Google&apos;s algorithms and quality raters.
              </p>
              <p>
                The organic opportunity is enormous. Top-3 rankings for &ldquo;personal
                injury lawyer [city]&rdquo; capture 30&ndash;40% of monthly search
                volume. At CPCs of $100&ndash;$150, the organic equivalent of that
                traffic represents hundreds of thousands of dollars in paid search value
                per month - delivered free once rankings are achieved.
              </p>
              <p>
                New entrants attempting to compete with established PI firms that have
                400+ referring domains and DR50+ profiles face a multi-year climb.
                The firms that succeed build a consistent monthly link acquisition cadence
                and compound their authority over time rather than attempting a burst
                strategy.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Personal injury keyword benchmarks
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Personal Injury Lawyer Los Angeles", kd: "92", cpc: "$148" },
                    { label: "Car Accident Attorney Chicago", kd: "89", cpc: "$132" },
                    { label: "Personal Injury Lawyer New York", kd: "91", cpc: "$145" },
                    { label: "Slip and Fall Attorney Houston", kd: "85", cpc: "$108" },
                    { label: "Personal Injury Lawyer [Mid-Size City]", kd: "76", cpc: "$94" },
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
                  Illustrative estimates based on typical competitive ranges. Actual values vary by market and tool.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">The ROI case</h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      A PI firm ranking top-3 for a 300 monthly search keyword, at a 10%
                      contact rate, 20% sign rate, and $100,000 average case value, generates
                      $600,000 annually in new revenue from a single keyword. Link building
                      investment required to reach that ranking is a fraction of that figure.
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
            Recommended Products for Personal Injury SEO
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Given the extreme competition in PI markets, higher-DR placements and
            digital PR are the primary levers. Content volume and architecture also
            matter significantly at this competition level.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                slug: "blogger-outreach",
                name: "Blogger Outreach (DR50-60)",
                tagline: "High-authority editorial placements that match the link profiles of top-ranking PI competitors in major metros.",
                badge: "Core strategy",
              },
              {
                slug: "niche-edits",
                name: "Niche Edits (DR50-60)",
                tagline: "Insertions into established, already-indexed legal and news content for fast link equity transfer.",
                badge: "High impact",
              },
              {
                slug: "digital-pr-campaign",
                name: "Digital PR Campaign",
                tagline: "Earn high-DR editorial links from news outlets - the links PI competitors cannot easily replicate with outreach alone.",
                badge: "Authority builder",
              },
              {
                slug: "content-writing",
                name: "Legal Content Writing",
                tagline: "Practice area pages, accident-type pages, and city pages written for E-E-A-T compliance and keyword targeting.",
                badge: "Content foundation",
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
            Content Strategy for Personal Injury Firms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            High-DR links move rankings only when they point to well-structured,
            properly targeted pages. A complete PI content architecture requires
            multiple page types targeting distinct layers of the keyword funnel.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Core Practice Area Page",
                desc: "The main \"personal injury lawyer [city]\" page. Primary target for high-DR links. Must demonstrate E-E-A-T with attorney bios, case results, and comprehensive coverage of PI claim types.",
                priority: "Priority 1",
              },
              {
                title: "Accident Type Pages",
                desc: "Dedicated pages for car accidents, truck accidents, motorcycle accidents, slip and fall, dog bites, and wrongful death. Each targets a distinct keyword cluster with separate search intent.",
                priority: "Priority 2",
              },
              {
                title: "City and Neighborhood Pages",
                desc: "Location-specific pages targeting \"personal injury lawyer [city]\" for surrounding cities and service area neighborhoods. Critical for capturing long-tail local search volume.",
                priority: "Priority 2",
              },
              {
                title: "FAQ and Process Pages",
                desc: "Pages answering how long a PI case takes, what a case is worth, and how the claims process works. These capture informational intent and directly support E-E-A-T evaluation.",
                priority: "Priority 3",
              },
              {
                title: "Blog and Case Study Content",
                desc: "Regular content covering local accident statistics, injury types, legal changes, and case outcomes. Supports topical authority and earns natural inbound links from news and resource sites.",
                priority: "Priority 3",
              },
              {
                title: "Attorney Bio Pages",
                desc: "Detailed attorney profiles satisfying E-E-A-T requirements. Google quality raters look for evidence of expertise - credentials, bar admissions, case experience, and clear content authorship.",
                priority: "Priority 1",
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
            What Top-Ranking PI Competitors Look Like
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Analyzing the backlink profiles of top-ranking personal injury firms in
            major markets reveals consistent benchmarks. Understanding these targets
            gives you a concrete roadmap for your own link building program.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Major metro leaders (LA, NYC, Chicago)</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "200&ndash;500+" },
                  { metric: "Median linking DR", value: "DR 40&ndash;60" },
                  { metric: "Content pages indexed", value: "150&ndash;400+" },
                  { metric: "Monthly link cadence", value: "10&ndash;20+ links/month" },
                ].map((row) => (
                  <div key={row.metric} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{row.metric}</span>
                    <span
                      className="font-semibold text-gray-900"
                      dangerouslySetInnerHTML={{ __html: row.value }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Mid-size market leaders (50k&ndash;500k pop.)</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "75&ndash;200" },
                  { metric: "Median linking DR", value: "DR 30&ndash;50" },
                  { metric: "Content pages indexed", value: "60&ndash;150" },
                  { metric: "Monthly link cadence", value: "5&ndash;10 links/month" },
                ].map((row) => (
                  <div key={row.metric} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{row.metric}</span>
                    <span
                      className="font-semibold text-gray-900"
                      dangerouslySetInnerHTML={{ __html: row.value }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Link profile composition in PI</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Top PI firms have diverse link profiles: legal directories (Avvo, FindLaw, Justia),
                  local news and community sites, niche legal blogs, general authority publications,
                  and earned digital PR links from injury-related news coverage. PBN-heavy profiles
                  increasingly earn penalties on YMYL sites. The pattern that sustains rankings is
                  editorial diversity built at a consistent monthly cadence.
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
            Personal Injury SEO - Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How competitive is personal injury SEO compared to other practice areas?",
                a: "Personal injury is consistently the most competitive practice area in legal SEO and among the most competitive verticals in all of organic search. Keyword difficulty scores of 85-95 are standard in major metros, and CPCs of $100-$150 reflect extreme advertiser competition. Firms investing in organic SEO face well-funded, long-established competitors with link profiles built over 10+ years. This does not make ranking impossible - it makes strategy and consistency the deciding factors.",
              },
              {
                q: "What DR links do I need to compete for personal injury keywords?",
                a: "In major metros, you need a consistent cadence of DR50-60 placements to move the needle against competitors with mature link profiles. In mid-size markets, DR30-50 placements are typically sufficient. The key is not any single link but the cumulative referring domain count and average DR of your profile versus the top 3 competitors for your target keywords. Audit your competitors first, then calibrate your monthly acquisition targets to close the gap within 12-18 months.",
              },
              {
                q: "Should a personal injury firm target Google Maps or organic rankings first?",
                a: "Both simultaneously, with different tactics. Google Maps (local pack) rankings are driven primarily by Google Business Profile optimization, citation consistency, proximity, and reviews. Organic rankings for practice-area keywords are driven by domain authority, on-page optimization, and backlinks. Link building contributes to organic rankings directly and local pack rankings indirectly through domain authority. Most PI firms benefit from running both strategies in parallel rather than sequencing them.",
              },
              {
                q: "How long does it take to rank a personal injury website?",
                a: "Realistically, for competitive PI keywords in major metros, expect 12-24 months of consistent SEO investment before reaching top-5 organic rankings - assuming you are starting from a low DR baseline. For mid-size markets or less competitive long-tail variants, results can come in 6-12 months. The firms that succeed treat SEO as a sustained monthly investment, not a one-time campaign. Every month of consistent link building compounds against competitors who slow down or stop.",
              },
              {
                q: "Are accident-type pages worth building separately?",
                a: "Yes - significantly. Accident-type pages target distinct keyword clusters with their own search volumes and intent signals. 'Car accident lawyer Chicago' and 'personal injury lawyer Chicago' are different keywords with different SERPs. Building dedicated, well-optimized pages for each accident type multiplies your organic entry points and allows you to build topical authority across the full PI keyword landscape.",
              },
              {
                q: "How does digital PR differ from standard link building for PI firms?",
                a: "Digital PR earns links from news outlets, industry publications, and high-authority media properties - links that cannot be replicated through outreach or niche edits. For PI firms, this typically means creating data studies around local accident statistics, personal safety research, or injury trend reports that earn coverage from local and national media. These links carry exceptional authority and diversify your profile beyond what blogger outreach alone can build.",
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
        headline="Ready to compete for personal injury rankings?"
        subheadline="Browse DR-tiered link building products built for the most competitive practice area in legal SEO."
        primaryCta={{ label: "View Link Building Pricing", href: "/pricing" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
