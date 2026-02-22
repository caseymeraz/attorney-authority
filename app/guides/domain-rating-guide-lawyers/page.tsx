import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Domain Rating for Law Firm Websites - Complete DR Guide | Attorney Authority",
  description:
    "What is Domain Rating and how does it affect your law firm's ability to rank? DR benchmarks by practice area, how to build DR, and how to select link building targets.",
  alternates: {
    canonical: "https://attorneyauthority.com/guides/domain-rating-guide-lawyers",
  },
  openGraph: {
    title: "Domain Rating for Law Firm Websites - Complete DR Guide | Attorney Authority",
    description:
      "A plain-English guide to Domain Rating for attorneys - how it's calculated, what score your firm needs, DR vs DA, and how to build DR through link acquisition.",
    images: [{ url: "/og/domain-rating-guide-lawyers.png", width: 1200, height: 630 }],
  },
};

const toc = [
  { id: "what-is-dr", label: "What is Domain Rating (DR)?" },
  { id: "how-calculated", label: "How DR is calculated (Ahrefs methodology)" },
  { id: "law-firm-averages", label: "What DR score do law firms typically have?" },
  { id: "benchmarks", label: "DR benchmarks by practice area and market" },
  { id: "ranking-impact", label: "How DR affects your ability to rank" },
  { id: "building-dr", label: "Building DR for a law firm website" },
  { id: "dr-vs-da", label: "DR vs. Domain Authority (DA): which metric matters?" },
  { id: "timeline", label: "How long does it take to increase DR?" },
  { id: "red-flags", label: "DR red flags: what to watch out for" },
  { id: "selecting-targets", label: "Using DR to select link building targets" },
];

export default function DomainRatingGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Guides", href: "/guides" },
              { label: "Domain Rating Guide for Lawyers", href: "/guides/domain-rating-guide-lawyers" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Ahrefs DR explained
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              Legal benchmarks included
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              ~10 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Domain Rating for Law Firm Websites - Complete DR Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Domain Rating is the most commonly referenced metric in law firm link building -
            but it is widely misunderstood. This guide explains what DR actually measures,
            how to benchmark your score against competitors, and how to use it to make
            smarter link building decisions.
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section className="py-10 px-4 bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-amber-900 uppercase tracking-wide mb-4">
            Table of Contents
          </h2>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-amber-800 hover:text-amber-600 flex items-start gap-2"
                >
                  <span className="font-bold shrink-0">{i + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Guide content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* Section 1 */}
          <div id="what-is-dr">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              1. What Is Domain Rating (DR)?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Domain Rating (DR) is a metric created by Ahrefs that measures the overall
              strength of a website&apos;s backlink profile on a scale from 0 to 100. A higher
              DR indicates that more websites - and more authoritative websites - link to
              your domain.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              DR is not a Google metric. Google does not publish a public domain authority
              score. DR is Ahrefs&apos; proprietary calculation based on its own backlink index -
              the largest in the industry. Despite not coming directly from Google, DR
              correlates strongly with actual ranking performance, which is why it has
              become the industry standard for benchmarking SEO authority for law firms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Think of DR as a rough measure of how much trust the broader internet has
              placed in your domain. A law firm website with DR50 has significantly more
              collective external endorsement than one with DR20 - and that trust gap
              translates directly into ranking ability for competitive legal keywords.
            </p>
          </div>

          {/* Section 2 */}
          <div id="how-calculated">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              2. How DR Is Calculated (Ahrefs Methodology)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ahrefs calculates DR using a methodology similar in concept to Google&apos;s
              original PageRank algorithm. The key inputs are:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "The number of unique referring domains (websites) linking to your domain",
                "The DR of those referring domains - links from higher-DR sites contribute more than links from lower-DR sites",
                "How many other websites each referring domain links to (the more sites a domain links to, the less authority each individual link passes)",
                "The resulting score is then normalized on a 0-100 logarithmic scale across all websites in the Ahrefs index",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>The logarithmic scale is critical to understand:</strong> Moving
                from DR10 to DR20 requires far less link acquisition than moving from DR60
                to DR70. As DR increases, each additional point requires exponentially more
                authority. This is why agencies that claim they can take a DR10 site to
                DR60 in three months are either lying or describing a risky link scheme.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ahrefs updates DR scores continuously as it crawls the web. Your DR can
              fluctuate as Ahrefs discovers new links pointing to your site, as existing
              links are removed, or as Ahrefs recalibrates its index. A small DR change
              (1-3 points) month-to-month is normal and does not necessarily indicate
              a change in your actual link profile.
            </p>
          </div>

          {/* Section 3 */}
          <div id="law-firm-averages">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              3. What DR Score Do Law Firm Websites Typically Have?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Law firm DR scores vary enormously based on firm age, market size, marketing
              investment history, and practice area. Here is a general distribution based
              on typical law firm website profiles:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold text-gray-700">DR Range</th>
                    <th className="py-2 px-3 font-semibold text-gray-500 text-left">Typical Profile</th>
                    <th className="py-2 px-3 font-semibold text-gray-500 text-left">Ranking Potential</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["DR 0-15", "New site (under 2 years), no active link building", "Long-tail local keywords only"],
                    ["DR 16-25", "Small firm, some citations, minimal link building history", "Low-competition local keywords, city + practice area"],
                    ["DR 26-35", "Established firm, 2-4 years of some link building effort", "Moderate competition, mid-size market keywords"],
                    ["DR 36-45", "Active marketing investment, 3-5 years of link building", "Most mid-market practice area keywords"],
                    ["DR 46-55", "Significant ongoing link acquisition, major market presence", "Competitive major metro practice area keywords"],
                    ["DR 56-70", "Top regional firms, consistent high-DR acquisition", "Top-3 for most major metro legal keywords"],
                    ["DR 70+", "Large multi-location firms, media coverage, years of authority", "Competes with directories for most searches"],
                  ].map(([range, profile, potential]) => (
                    <tr key={range as string} className="border-b border-gray-100">
                      <td className="py-2 font-bold text-amber-700">{range}</td>
                      <td className="py-2 px-3 text-gray-700 text-xs">{profile}</td>
                      <td className="py-2 px-3 text-gray-600 text-xs">{potential}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs">
              These are general estimates. Actual ranking ability depends on keyword competition, content quality, and local factors in addition to DR.
            </p>
          </div>

          {/* Section 4 */}
          <div id="benchmarks">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              4. DR Benchmarks by Practice Area and Market
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The DR needed to rank on page one varies significantly by practice area
              competitiveness and market size. Here are typical competitive benchmarks:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold text-gray-700">Scenario</th>
                    <th className="py-2 px-3 font-semibold text-gray-500 text-center">Top-10 DR Range</th>
                    <th className="py-2 px-3 font-semibold text-gray-500 text-center">Typical Median</th>
                    <th className="py-2 px-3 font-semibold text-gray-700 text-center">Recommended Target</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["PI Lawyer - Small Market", "DR20-DR45", "DR32", "DR35+"],
                    ["PI Lawyer - Mid Market", "DR30-DR55", "DR42", "DR45+"],
                    ["PI Lawyer - Major Metro", "DR45-DR70+", "DR58", "DR55+"],
                    ["DUI Attorney - Small Market", "DR18-DR40", "DR28", "DR30+"],
                    ["DUI Attorney - Major Metro", "DR40-DR65", "DR52", "DR50+"],
                    ["Family Law - Most Markets", "DR20-DR50", "DR35", "DR35+"],
                    ["Estate Planning - Most Markets", "DR15-DR40", "DR26", "DR25+"],
                    ["Immigration - Mid-Large Market", "DR25-DR55", "DR38", "DR40+"],
                  ].map(([scenario, range, median, target]) => (
                    <tr key={scenario as string} className="border-b border-gray-100">
                      <td className="py-2 text-gray-700 font-medium">{scenario}</td>
                      <td className="py-2 px-3 text-center text-gray-500 text-xs">{range}</td>
                      <td className="py-2 px-3 text-center text-gray-500 text-xs">{median}</td>
                      <td className="py-2 px-3 text-center font-bold text-amber-700">{target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              Illustrative benchmarks based on typical competitive patterns. Always verify against your specific target keywords using Ahrefs SERP analysis.
            </p>
          </div>

          {/* Section 5 */}
          <div id="ranking-impact">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              5. How DR Affects Your Ability to Rank
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DR is not a direct ranking factor - Google does not use Ahrefs&apos; metric.
              What DR measures is the underlying backlink authority that Google does
              evaluate through its own systems. A high DR site has high DR because it has
              lots of authoritative backlinks, and those backlinks are what actually
              influence Google rankings.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In practice, DR functions as a competitive benchmark. When you see that the
              sites currently in the top 3 for your target keyword have an average DR of
              50, and your site is DR25, you know there is an authority gap that content
              alone cannot bridge. No matter how good your personal injury page is, a DR25
              site competing against DR50 competitors is at a structural disadvantage.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is why DR benchmarking should happen before a content strategy - not
              after. Knowing the DR of your competition tells you how much link building
              investment is required to make your content competitive.
            </p>
          </div>

          {/* Section 6 */}
          <div id="building-dr">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              6. Building DR for a Law Firm Website
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DR increases when authoritative websites link to yours. The most effective
              strategies for law firms, ranked by impact per dollar:
            </p>
            <div className="space-y-4">
              {[
                {
                  strategy: "Digital PR campaigns",
                  impact: "Highest per link",
                  desc: "A single DR80+ link from a major publication can move DR more than dozens of DR30 links. Digital PR earns the highest-authority links available.",
                  href: "/products/digital-pr-campaign",
                },
                {
                  strategy: "Blogger outreach (DR40+)",
                  impact: "High",
                  desc: "Consistent acquisition of DR40+ editorial links compounds over time and is the most scalable path to DR growth for mid-range firms.",
                  href: "/products/blogger-outreach",
                },
                {
                  strategy: "Niche edits (DR40+)",
                  impact: "High",
                  desc: "Insertions into existing high-DR pages often transfer authority faster than new content placements due to the aged page authority.",
                  href: "/products/niche-edits",
                },
                {
                  strategy: "Brand mentions (DR50+)",
                  impact: "Medium-High",
                  desc: "Brand mentions from high-authority sites contribute to entity signals and some mention authority even without a dofollow link.",
                  href: "/products/brand-mentions",
                },
              ].map((item) => (
                <div key={item.strategy} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{item.strategy}</h3>
                    <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                      Impact: {item.impact}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">{item.desc}</p>
                  <a href={item.href} className="text-xs font-semibold text-amber-700 hover:text-amber-800">
                    View product details →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7 */}
          <div id="dr-vs-da">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              7. DR vs. Domain Authority (DA): Which Metric Matters?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DR and DA (Domain Authority) measure the same underlying concept - backlink
              authority - but are calculated by different companies using different
              methodologies:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold text-gray-700">Factor</th>
                    <th className="py-2 px-3 font-semibold text-amber-700 text-center bg-amber-50">DR (Ahrefs)</th>
                    <th className="py-2 px-3 font-semibold text-gray-500 text-center">DA (Moz)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Creator", "Ahrefs", "Moz"],
                    ["Index size", "Largest in industry", "Smaller index"],
                    ["Update frequency", "Continuous crawl", "Monthly"],
                    ["Correlation with rankings", "High", "Moderate"],
                    ["Industry standard for legal SEO", "✅ Primary metric", "⚠️ Secondary"],
                    ["Used in Attorney Authority products", "✅ Yes", "DA used in multilingual links only"],
                  ].map(([factor, drVal, daVal]) => (
                    <tr key={factor as string} className="border-b border-gray-100">
                      <td className="py-2 font-medium text-gray-700">{factor}</td>
                      <td className="py-2 px-3 text-center font-medium text-amber-700 bg-amber-50">{drVal}</td>
                      <td className="py-2 px-3 text-center text-gray-500">{daVal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed">
              For law firm SEO benchmarking, use DR as your primary metric. Ahrefs has
              the largest and most frequently updated backlink index, making DR the most
              accurate available proxy for link authority. DA can supplement but should
              not replace DR in your decision-making.
            </p>
          </div>

          {/* Section 8 */}
          <div id="timeline">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              8. How Long Does It Take to Increase DR?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DR increases are driven by the accumulation of referring domains over time.
              The pace of increase depends on your starting DR, the DR of links you are
              acquiring, and how consistent your link building cadence is.
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  scenario: "DR0-20 to DR30",
                  timeline: "3-9 months",
                  requirement: "4-8 DR30+ links/month",
                  notes: "Fastest progress range. The logarithmic scale makes early DR gains more achievable than higher-end gains.",
                },
                {
                  scenario: "DR30 to DR40",
                  timeline: "6-12 months",
                  requirement: "4-8 DR40+ links/month",
                  notes: "Progress slows as you enter more competitive DR territory. Consistency is the key variable.",
                },
                {
                  scenario: "DR40 to DR50",
                  timeline: "12-24 months",
                  requirement: "6-10 DR40-50+ links/month",
                  notes: "At this range, link quality matters as much as volume. DR50+ links are needed to move the needle.",
                },
                {
                  scenario: "DR50 to DR60+",
                  timeline: "18-36+ months",
                  requirement: "Sustained high-DR acquisition + digital PR",
                  notes: "Top-end DR growth requires major publication links. Digital PR campaigns become essential at this level.",
                },
              ].map((item) => (
                <div key={item.scenario} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="min-w-[140px] text-center">
                    <div className="text-xs font-bold text-amber-700 mb-1">{item.scenario}</div>
                    <div className="text-sm font-semibold text-gray-900">{item.timeline}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.requirement}</div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.notes}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              These timelines assume consistent monthly link acquisition. Stopping link
              building entirely can cause DR to plateau or slowly decline as old links
              are removed and the overall competition increases.
            </p>
          </div>

          {/* Section 9 */}
          <div id="red-flags">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              9. DR Red Flags: What to Watch Out For
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Not all DR is equal. These patterns in your own DR or in potential link
              targets warrant caution:
            </p>
            <div className="space-y-3">
              {[
                {
                  flag: "High DR with zero organic traffic",
                  risk: "A site with DR60 but no organic traffic is typically a reciprocal link network or PBN. Its high DR comes from links between network members, not genuine editorial authority. Links from these sites carry no real value and often trigger quality penalties.",
                },
                {
                  flag: "Sudden DR spike then drop",
                  risk: "If a potential publisher shows a DR spike (say DR20 to DR55 in 3 months) followed by a return to a lower score, this suggests a link scheme or purchased-link burst that was likely penalized or cleaned up.",
                },
                {
                  flag: "Your own DR drops unexpectedly",
                  risk: "A significant DR drop (5+ points in a month) typically means you have lost a cluster of referring domains. Check the Lost Backlinks report in Ahrefs to identify what was removed and whether action is needed.",
                },
                {
                  flag: "All referring domains at similar DR",
                  risk: "A natural link profile has links from sites across a range of DR scores. A profile where nearly all links are from DR50-60 sites is suspicious - it suggests orchestrated acquisition rather than organic editorial endorsement.",
                },
                {
                  flag: "Anchor text heavily weighted to commercial terms",
                  risk: "Check your Anchors report. If exact-match commercial anchors (e.g., 'personal injury lawyer Dallas') make up more than 15-20% of your profile, you are in over-optimization territory that can trigger algorithmic penalties.",
                },
              ].map((item) => (
                <div key={item.flag} className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h3 className="font-bold text-red-900 text-sm mb-1">{item.flag}</h3>
                  <p className="text-xs text-red-700 leading-relaxed">{item.risk}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10 */}
          <div id="selecting-targets">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              10. Using DR to Select Link Building Targets
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DR is the primary quality filter when selecting link building targets -
              both for the sites you want to receive links from and for evaluating whether
              a publisher is worth the investment. Here is the framework:
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1. Benchmark competitor DR",
                  desc: "Pull the DR of the top 3 sites ranking for your target keyword. The average of those 3 is your competitive target. This is the DR your site needs to approach before content alone can compete.",
                },
                {
                  step: "2. Audit your current DR distribution",
                  desc: "In Ahrefs Referring Domains, filter by DR range. You want a distribution that spans DR10-60+ with no single tier dominating. Gaps in certain ranges are opportunities to diversify.",
                },
                {
                  step: "3. Set your link acquisition tier",
                  desc: "For new sites (DR under 20), DR10-20 links build a foundation cost-effectively. For mid-stage sites (DR20-40), DR30-40 links are the most impactful per dollar. For competitive sites (DR40+), DR50+ links and digital PR produce meaningful DR movement.",
                },
                {
                  step: "4. Verify DR of publisher at time of placement",
                  desc: "DR fluctuates. Always verify the current DR of a publisher when evaluating a link opportunity - not the DR it was quoted at in a pitch. At Attorney Authority, we verify DR at time of every placement.",
                },
                {
                  step: "5. Check organic traffic of the referring page",
                  desc: "A DR60 publisher is much more valuable if its referring page has actual organic traffic than if that page has zero visitors. Links from pages with real traffic pass both authority and potential referral traffic.",
                },
              ].map((item) => (
                <div key={item.step} className="border-l-4 border-amber-400 pl-4 py-1">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.step}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* DR ranges summary table */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-sm">
                DR Ranges and Ranking Potential for Legal Keywords
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-700">Site DR</th>
                      <th className="py-2 px-2 font-semibold text-gray-500 text-left">Ranking Potential</th>
                      <th className="py-2 px-2 font-semibold text-gray-500 text-left">Recommended Link DR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["DR 0-15", "Long-tail local queries only (city + practice + adjective)", "DR10-20"],
                      ["DR 16-25", "Local practice area queries in small markets", "DR20-30"],
                      ["DR 26-35", "Mid-competition practice area keywords, small-medium markets", "DR30-40"],
                      ["DR 36-45", "Most mid-market practice area keywords, some major metro terms", "DR30-50"],
                      ["DR 46-55", "Competitive major metro practice area keywords", "DR40-60+"],
                      ["DR 55+", "Top-3 for high-competition major metro legal keywords", "DR50-60+ and digital PR"],
                    ].map(([dr, potential, linkDr]) => (
                      <tr key={dr as string} className="border-b border-gray-100">
                        <td className="py-2 font-bold text-amber-700">{dr}</td>
                        <td className="py-2 px-2 text-gray-700 text-xs">{potential}</td>
                        <td className="py-2 px-2 text-amber-700 font-semibold text-xs">{linkDr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        headline="Ready to increase your law firm's Domain Rating?"
        subheadline="Browse DR-tiered link building products with transparent per-link pricing - from DR10+ to DR60+ and digital PR campaigns."
        primaryCta={{ label: "View Link Building Pricing", href: "/pricing" }}
        secondaryCta={{ label: "See All Link Building Products", href: "/services/law-firm-link-building" }}
      />
    </>
  );
}
