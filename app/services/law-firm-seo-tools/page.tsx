import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, ArrowRight, Scale, TrendingUp, Award } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import FaqSection from "@/components/service-pages/faq-section";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "SEO Tools for Law Firms - What to Use and How | Attorney Authority",
  description:
    "A practical guide to SEO tools for law firms - covering Ahrefs, SEMrush, Google Search Console, and how to audit your backlink profile without an agency.",
  alternates: {
    canonical: "https://attorneyauthority.com/services/law-firm-seo-tools",
  },
  openGraph: {
    title: "SEO Tools for Law Firms - What to Use and How | Attorney Authority",
    description:
      "Which SEO tools should your law firm use, what metrics matter, and when to DIY vs hire a specialist. Practical guidance for attorneys managing their own SEO.",
    images: [{ url: "/og/law-firm-seo-tools.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Does my law firm need Ahrefs, SEMrush, or both?",
    a: "You do not need both. Ahrefs and SEMrush cover similar territory with different strengths. Ahrefs has the most comprehensive backlink index - it is the industry standard for link profile analysis and keyword difficulty scoring for legal keywords. SEMrush has stronger on-page audit tools and a slightly different keyword database. For most law firms, Ahrefs is the higher-priority tool because backlink analysis is so central to legal SEO. If you only have budget for one paid tool, Ahrefs at $99-$199/month is the recommendation. Supplement it with Google Search Console (free) and you have 90% of what you need for ongoing SEO management.",
  },
  {
    q: "What is Google Search Console and is it really free?",
    a: "Google Search Console is a free tool provided directly by Google. It shows you exactly which queries your site is appearing for in Google Search, which pages are getting impressions and clicks, your average ranking position by query, and any technical issues Google has found on your site. It is the most accurate keyword data source available because it comes directly from Google rather than being estimated by a third-party tool. Every law firm should have GSC set up and monitored monthly - it costs nothing and is the most direct signal of what is working in your SEO program.",
  },
  {
    q: "What does Domain Rating mean for my law firm's SEO?",
    a: "Domain Rating (DR) is Ahrefs' metric for measuring the overall backlink authority of your website on a 0-100 scale. It is calculated based on the number of referring domains pointing to your site and the quality of those domains. For law firms, DR is a useful proxy for your ability to compete on difficult legal keywords. A DR30 site will struggle to rank for 'personal injury lawyer Los Angeles' (KD 90+) regardless of content quality. Understanding your DR relative to competitors gives you a concrete benchmark for how much link building investment is needed to become competitive.",
  },
  {
    q: "What SEO metrics should law firms track monthly?",
    a: "The metrics that matter most for law firm SEO: (1) Organic clicks and impressions from Google Search Console - this shows actual search traffic trends. (2) Average position for your 10-15 target keywords - rank tracking in Ahrefs or SEMrush gives you weekly snapshots. (3) Referring domains count - the number of unique websites linking to you, tracked in Ahrefs. (4) New vs. lost backlinks each month - you want to be gaining more than you lose. (5) Conversion events - phone calls, form submissions, contact page visits - the ultimate measure of whether SEO is generating cases.",
  },
  {
    q: "Can I do law firm SEO myself or do I need to hire an agency?",
    a: "You can manage some elements of law firm SEO yourself - particularly technical audits, content publishing, and Google Business Profile optimization. However, competitive link building for legal keywords requires consistent outreach, publisher relationships, and quality vetting that is difficult to execute in-house without dedicated resources. The realistic DIY scenario: use GSC and Ahrefs to identify opportunities, publish content regularly, and order link building products a-la-carte to fill authority gaps. This hybrid approach lets you maintain strategic control while outsourcing the most labor-intensive execution tasks.",
  },
  {
    q: "How do I know if my law firm's backlink profile has toxic links?",
    a: "In Ahrefs, go to the Backlinks report for your domain and sort by DR ascending. Look for patterns: links from obviously spammy sites (gambling, adult, overseas directories), links from sites with 0 traffic, private blog network footprints (many sites on the same IP range with identical templates), and unnatural anchor text concentrations (too many exact-match commercial anchors like 'personal injury lawyer'). If you find a cluster of genuinely harmful links, Google's Disavow tool allows you to request that Google ignore specific links. However, disavow should be used carefully - disavowing legitimate links accidentally can harm rankings.",
  },
];

export default function LawFirmSeoToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Law Firm SEO Tools", href: "/services/law-firm-seo-tools" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Free + paid options
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              Ahrefs &amp; GSC focus
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              Legal niche guidance
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            SEO Tools for Law Firms - What to Use and How
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            You do not need a full-time SEO agency to understand where your law firm stands
            in search. The right combination of tools - some free, some paid - gives you
            visibility into your rankings, your backlink profile, and your content gaps.
            This guide explains what to use and what to look for.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products/keyword-research"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Order Keyword Research
            </Link>
            <Link
              href="/contact"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Talk to a Specialist <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Essential tool categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            The Essential SEO Tool Stack for Law Firms
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            You do not need every tool on the market. Four categories cover 90% of what a
            law firm needs to manage and monitor its search presence.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                category: "Backlink analysis",
                tool: "Ahrefs (recommended) or SEMrush",
                cost: "$99-$199/month",
                use: "Track your Domain Rating, audit referring domains, find competitor backlink gaps, identify toxic links, and plan your link acquisition targets. Ahrefs has the most complete backlink index and is the industry standard for legal SEO.",
                free: "Ahrefs Webmaster Tools (limited free version available for your own site only)",
              },
              {
                icon: CheckCircle,
                category: "Search performance",
                tool: "Google Search Console",
                cost: "Free",
                use: "See exactly which queries you are ranking for, which pages are getting impressions and clicks, your average position by keyword, and any crawl or indexing errors Google has flagged. The most accurate keyword data source available - comes directly from Google.",
                free: "Completely free - requires Google account and domain verification",
              },
              {
                icon: Scale,
                category: "Keyword research",
                tool: "Ahrefs Keywords Explorer or SEMrush",
                cost: "Included in Ahrefs/SEMrush subscription",
                use: "Identify search volume, keyword difficulty, and intent for practice area terms. Legal keyword research requires understanding geographic modifiers, practice area sub-topics, and the competition level of major metro markets. A dedicated keyword research report is often more efficient than DIY for the initial strategy build.",
                free: "Google Keyword Planner (volume ranges only, not precise - requires Google Ads account)",
              },
              {
                icon: Shield,
                category: "Rank tracking",
                tool: "Ahrefs Rank Tracker, SEMrush Position Tracking, or SerpWatch",
                cost: "$19-$99/month standalone, included in all-in-one tools",
                use: "Monitor your weekly ranking position for your 10-20 priority legal keywords. Track competitors on the same keywords. Identify when algorithm updates cause ranking changes. Rank tracking is the clearest leading indicator of whether your SEO investments are moving the needle.",
                free: "Manual checking in incognito mode (inaccurate - personalized results vary by location)",
              },
            ].map((item) => (
              <div
                key={item.category}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center mb-3">
                  <item.icon className="w-4 h-4 text-amber-700" />
                </div>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-gray-900 text-base">{item.category}</h3>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    {item.cost}
                  </span>
                </div>
                <p className="text-xs text-amber-800 font-semibold mb-2">{item.tool}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.use}</p>
                <p className="text-xs text-gray-500 italic">{item.free}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading your backlink profile */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How to Read Your Law Firm&apos;s Backlink Profile
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Open Ahrefs Site Explorer and enter your domain. The metrics that matter most
            for a law firm are not the total number of backlinks - it is the quality
            distribution. Here is what to look for.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Award,
                title: "Domain Rating (DR)",
                desc: "Your overall authority score on a 0-100 scale. For competitive practice-area keywords in major markets, you typically need DR40+ to rank in the top 5. Check competitors' DR to benchmark where you need to be.",
              },
              {
                icon: CheckCircle,
                title: "Referring domains",
                desc: "The count of unique websites linking to you. One hundred links from one site count far less than links from 100 different sites. More unique referring domains = stronger authority signal.",
              },
              {
                icon: TrendingUp,
                title: "DR distribution",
                desc: "A healthy link profile has links across DR ranges - not all DR10-20 and not suspiciously all DR50+. Natural profiles show a distribution weighted toward lower DR with some mid- and high-DR placements mixed in.",
              },
              {
                icon: Shield,
                title: "Anchor text breakdown",
                desc: "View your anchor text report and check the ratio of branded anchors (your firm name) vs. exact-match commercial anchors (practice area keywords). Over-optimization (too many 'personal injury lawyer' anchors) is a penalty risk.",
              },
              {
                icon: Scale,
                title: "New vs. lost links",
                desc: "Ahrefs shows backlinks you have gained and lost each month. You want a consistent positive trend. Sudden spikes in lost links can indicate removed placements or algorithm action.",
              },
              {
                icon: Award,
                title: "Traffic to referring pages",
                desc: "In the Backlinks report, check the organic traffic column for the referring page. Links from pages with zero organic traffic are low-value. Links from pages with real traffic carry more authority.",
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

      {/* Google Search Console for law firms */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Google Search Console for Law Firms - What to Track
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Google Search Console is the most underutilized free SEO tool in legal
                marketing. Every law firm should log in monthly and review these specific
                reports.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Performance report - Top queries",
                    detail: "See which search queries trigger your pages. Filter by impressions to find keywords where you are showing up but not ranking well (position 10-20) - these are your quickest ranking opportunities with targeted content improvements.",
                  },
                  {
                    title: "Performance report - Top pages",
                    detail: "Identify which pages are generating the most organic clicks. Any page with high impressions but low clicks has a title tag or meta description problem. Fix those first before creating new content.",
                  },
                  {
                    title: "Coverage report",
                    detail: "Shows any pages Google cannot crawl or index. Excluded pages and errors need attention - if Google cannot access a page, it cannot rank it.",
                  },
                  {
                    title: "Core Web Vitals report",
                    detail: "Google's page experience signals. Pages marked as 'Poor' on LCP, FID, or CLS are at a competitive disadvantage. These are technical issues to pass to your web developer.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-amber-400 pl-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-amber-900 mb-4">
                Monthly GSC review checklist
              </h3>
              <div className="space-y-3">
                {[
                  "Total clicks trending up or down vs. prior month",
                  "Any new coverage errors or warnings",
                  "Top 10 queries - any new entries or drops",
                  "Pages with CTR below 2% at position 1-5 (title/meta issue)",
                  "Core Web Vitals - any new 'Poor' URLs",
                  "Check for manual action notices (should be empty)",
                  "Sitemap submission status",
                ].map((check) => (
                  <div key={check} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span className="text-sm text-amber-800">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs specialist */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            When to DIY vs. Hire a Specialist
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">SEO Task</th>
                  <th className="py-3 px-4 font-semibold text-gray-500 text-center">DIY Viability</th>
                  <th className="py-3 px-4 font-semibold text-gray-700 text-center">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Google Business Profile setup & optimization", "✅ DIY-friendly", "Straightforward with Google's guides"],
                  ["Google Search Console setup & monitoring", "✅ DIY-friendly", "Takes 30 minutes monthly"],
                  ["Blog content publishing", "✅ DIY-friendly if writing in-house", "Use our keyword research to guide topics"],
                  ["Technical SEO audit", "⚠️ Specialist recommended", "Core Web Vitals and crawl issues need dev skills"],
                  ["Backlink profile analysis", "⚠️ DIY possible with Ahrefs", "Interpretation of data requires experience"],
                  ["Link building outreach", "❌ Specialist recommended", "Publisher relationships and quality vetting are key"],
                  ["Keyword research and content strategy", "⚠️ DIY possible", "Our keyword research product is a cost-effective shortcut"],
                  ["Digital PR campaigns", "❌ Specialist recommended", "Journalist relationships and story angle expertise required"],
                ].map(([task, viability, notes]) => (
                  <tr key={task as string} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-700">{task}</td>
                    <td className="py-3 px-4 text-center">{viability}</td>
                    <td className="py-3 px-4 text-gray-500 text-xs">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommended stack */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Recommended SEO Tool Stack by Firm Size
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            The right tool investment scales with how actively you are managing your own SEO.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                tier: "Solo / Small Firm",
                budget: "$0-$50/month",
                tools: [
                  "Google Search Console (free)",
                  "Google Analytics 4 (free)",
                  "Ahrefs Webmaster Tools (free for your domain)",
                  "Google Business Profile (free)",
                ],
                note: "Focus on free tools and outsource keyword research and link building as needed.",
              },
              {
                tier: "Mid-Size Firm",
                budget: "$100-$200/month",
                tools: [
                  "Ahrefs Lite ($99/month)",
                  "Google Search Console (free)",
                  "Google Analytics 4 (free)",
                  "Rank tracker included in Ahrefs",
                ],
                note: "Ahrefs gives you backlink analysis, keyword research, and rank tracking in one subscription.",
              },
              {
                tier: "Large / Multi-Location",
                budget: "$200-$400/month",
                tools: [
                  "Ahrefs Standard or Advanced ($199-$399/month)",
                  "Google Search Console (free)",
                  "Google Analytics 4 (free)",
                  "Screaming Frog for technical audits ($259/year)",
                ],
                note: "Full platform access including historical data, API access, and multi-location reporting.",
              },
            ].map((tier) => (
              <div
                key={tier.tier}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <div className="text-xs font-semibold text-amber-700 mb-1">{tier.budget}</div>
                <h3 className="font-bold text-gray-900 text-base mb-4">{tier.tier}</h3>
                <ul className="space-y-2 mb-4">
                  {tier.tools.map((tool) => (
                    <li key={tool} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      {tool}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        faqs={faqs}
        headline="Law Firm SEO Tools - Frequently Asked Questions"
      />

      {/* CTA */}
      <CtaBanner
        headline="Ready to turn your tool data into ranking results?"
        subheadline="Our keyword research product gives you a data-driven content roadmap in 6 days - no monthly retainer required."
        primaryCta={{ label: "Order Keyword Research", href: "/products/keyword-research" }}
        secondaryCta={{ label: "Talk to a Specialist", href: "/contact" }}
      />
    </>
  );
}
