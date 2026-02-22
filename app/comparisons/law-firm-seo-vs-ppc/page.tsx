import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, Shield } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Law Firm SEO vs PPC - Which Drives Better ROI? | Attorney Authority",
  description:
    "Law firm SEO vs PPC: a data-driven comparison of cost per lead, long-term ROI, time to results, and the right strategy mix for your practice area and growth stage.",
  alternates: {
    canonical: "https://attorneyauthority.com/comparisons/law-firm-seo-vs-ppc",
  },
};

export default function LawFirmSeoVsPpcPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Comparisons", href: "/comparisons" },
              { label: "Law Firm SEO vs PPC", href: "/comparisons/law-firm-seo-vs-ppc" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Data-driven analysis
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              Legal marketing focus
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-5 leading-tight">
            Law Firm SEO vs PPC - Which Drives Better ROI?
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Legal marketing budgets are finite. Spending on Google Ads produces immediate
            leads but stops the moment the budget stops. Investing in SEO compounds over
            time but requires patience. Here is the honest, data-driven case for each -
            and how to choose the right allocation for your firm.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#comparison"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              See the Full Comparison
            </Link>
            <Link
              href="/pricing"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              View SEO Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick verdict */}
      <section className="py-12 px-4 bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-amber-900 mb-4">Quick Verdict</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-amber-200 p-5">
              <div className="text-sm font-semibold text-amber-700 mb-2">Choose SEO when...</div>
              <ul className="space-y-2">
                {[
                  "You are building a long-term practice, not a short-term lead spike",
                  "You can wait 6-12 months before SEO traffic becomes meaningful",
                  "Your practice area is expensive on PPC ($80-$150+ per click)",
                  "You want leads that do not stop when the budget stops",
                  "You are targeting high-KD keywords where organic competition is beatable",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-amber-200 p-5">
              <div className="text-sm font-semibold text-amber-700 mb-2">Choose PPC when...</div>
              <ul className="space-y-2">
                {[
                  "You need leads immediately - new firm launch or revenue gap",
                  "You are entering a new practice area or geographic market",
                  "You want to test which practice area keywords convert best",
                  "Your organic rankings are already strong and you want supplemental volume",
                  "You have a specific campaign window (seasonal, event-driven)",
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

      {/* Cost comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Real Cost of PPC vs SEO for Law Firms
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Legal Pay-Per-Click advertising is among the most expensive in all of Google
                Ads. Personal injury, DUI defense, and criminal defense keywords routinely
                cost $80-$150 per click. A single month of aggressive PPC spending in a
                competitive market can easily run $15,000-$50,000+ for a meaningful volume
                of clicks - and that spend disappears entirely if the campaign pauses.
              </p>
              <p>
                SEO investment works differently. A monthly link building and content budget
                of $2,000-$5,000 compounds over time: links acquired in month one continue
                passing authority in month twelve and beyond. Rankings built from SEO
                investment continue generating traffic after the investment period ends.
                The cost per lead typically falls significantly as the investment matures.
              </p>
              <p>
                The critical difference is the time horizon. PPC produces leads on day one
                of a campaign. SEO typically requires 6-12 months to produce meaningful
                ranking improvements for competitive legal keywords, and 12-24 months to
                fully compound. Firms that cannot tolerate a 6-12 month ramp period cannot
                rely on SEO alone.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Cost per lead comparison</h3>
                <div className="space-y-3">
                  {[
                    { label: "PPC cost per click (PI/DUI)", value: "$80-$150" },
                    { label: "Avg PPC conversion rate (click to lead)", value: "2-5%" },
                    { label: "Implied PPC cost per lead", value: "$1,600-$7,500" },
                    { label: "Organic SEO conversion rate (traffic to lead)", value: "3-8%" },
                    { label: "SEO monthly investment (link + content)", value: "$2,000-$6,000" },
                    { label: "Organic lead cost at 12+ months", value: "$150-$800" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                      <span className="text-gray-600">{row.label}</span>
                      <span className="font-semibold text-gray-900">{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Illustrative benchmarks. Actual figures vary by market, practice area, and campaign quality.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">The 3-year ROI math</h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      A firm that spends $4,000/month on SEO for 3 years ($144,000 total)
                      typically retains most of those rankings even if spending is reduced.
                      A firm that spends $144,000 on PPC over 3 years has nothing left when
                      the campaign ends. Long-term, SEO is a capital asset; PPC is an
                      operating expense.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and cons */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pros and Cons of Each</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO for Law Firms</h3>
              <div className="space-y-3 mb-6">
                <div className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">Advantages</div>
                {[
                  "Compounding returns - traffic grows over time without proportional cost increase",
                  "No cost per click - organic traffic is free once rankings are achieved",
                  "Durable - rankings persist after investment periods end",
                  "Trust signal - organic rankings carry more credibility than ads for many clients",
                  "Broader coverage - captures informational queries that PPC cannot target cost-effectively",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-2">Disadvantages</div>
                {[
                  "6-12 month ramp before meaningful traffic in competitive legal markets",
                  "Requires ongoing investment in content and links to maintain and grow",
                  "Algorithm changes can affect rankings (though quality-focused SEO is resilient)",
                  "Results are not guaranteed - competition may outpace your investment",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-4 h-4 shrink-0 mt-0.5 text-red-500 font-bold text-lg leading-none">×</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">PPC for Law Firms</h3>
              <div className="space-y-3 mb-6">
                <div className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">Advantages</div>
                {[
                  "Immediate results - leads from day one of campaign launch",
                  "Precise targeting - specific keywords, geographies, devices, and times",
                  "Scalable - increase spend to increase lead volume quickly",
                  "Measurable - direct attribution from ad click to phone call or form fill",
                  "Flexible - pause, adjust, or stop campaigns at any time",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-2">Disadvantages</div>
                {[
                  "Extremely expensive in legal - $80-$150+ per click in competitive practice areas",
                  "Zero residual value - traffic stops the moment the budget stops",
                  "Click fraud in legal advertising is a documented problem",
                  "Ad blindness - many searchers deliberately skip ads for legal services",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-4 h-4 shrink-0 mt-0.5 text-red-500 font-bold text-lg leading-none">×</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section id="comparison" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="py-3 px-4 font-semibold text-amber-700 bg-amber-50 rounded-t-lg">SEO</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">PPC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Time to first results", "6-12 months", "Day 1"],
                  ["Cost per lead (mature campaign)", "Low ($150-800)", "High ($1,600-$7,500)"],
                  ["Traffic when budget stops", "Continues (decays slowly)", "Stops immediately"],
                  ["Scalability", "Slow (requires time)", "Fast (increase budget)"],
                  ["Competitive legal keyword CPC", "N/A", "$80-$150+"],
                  ["Click-through trust", "Higher (organic bias)", "Lower (ad skepticism)"],
                  ["Long-tail keyword coverage", "Excellent", "Expensive/impractical"],
                  ["Informational content traffic", "Yes (builds authority)", "Not cost-effective"],
                  ["Google Maps/local pack", "Yes (via local SEO)", "Via Local Services Ads"],
                  ["ROI time horizon", "3-5+ years (compounding)", "Immediate but continuous"],
                  ["Best for new firms", "No (requires patience)", "Yes"],
                  ["Best for established firms", "Yes", "Supplemental"],
                ].map(([factor, col1, col2]) => (
                  <tr key={factor as string} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-700">{factor}</td>
                    <td className="py-3 px-4 text-center font-medium text-amber-700 bg-amber-50">{col1}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline: What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">SEO Timeline for Law Firms</h3>
              <div className="space-y-3">
                {[
                  { period: "Months 1-3", desc: "Technical foundation, content creation, initial link acquisition. Little visible ranking movement for competitive terms." },
                  { period: "Months 3-6", desc: "Long-tail rankings begin appearing. Google Search Console shows impression growth. Some early traffic from less competitive terms." },
                  { period: "Months 6-9", desc: "Meaningful ranking improvements on mid-competition terms. Organic traffic begins contributing measurable leads." },
                  { period: "Months 9-12", desc: "Consistent lead flow from organic. Competitive head terms approach page 1. ROI turns positive for most firms." },
                  { period: "Year 2+", desc: "Compounding returns. Traffic and leads grow without proportional cost increases. SEO becomes the dominant lead channel." },
                ].map((item) => (
                  <div key={item.period} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded whitespace-nowrap h-fit">
                      {item.period}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">PPC Timeline for Law Firms</h3>
              <div className="space-y-3">
                {[
                  { period: "Week 1-2", desc: "Campaign launches. Ads appear. First clicks and leads arrive - but at high initial CPC until Google's algorithm optimizes." },
                  { period: "Months 1-3", desc: "Campaign learns and optimizes. Quality Score improves, reducing CPC slightly. Lead volume stabilizes." },
                  { period: "Months 3-6", desc: "Mature campaign with optimized ad copy, landing pages, and bid strategy. Most efficient lead cost achieved." },
                  { period: "Ongoing", desc: "Consistent lead flow as long as budget runs. No compounding - cost per lead remains relatively stable or rises with competition." },
                  { period: "Campaign end", desc: "Traffic stops immediately. Zero residual value. All investment must restart from scratch for future campaigns." },
                ].map((item) => (
                  <div key={item.period} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded whitespace-nowrap h-fit">
                      {item.period}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The best strategy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Best Strategy: Use Both Together
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The firms that win in legal marketing long-term are rarely all-in on one
                channel. The optimal approach for most established law firms is a phased
                integration: use PPC to maintain immediate lead flow while SEO builds its
                compounding foundation. As organic rankings improve, reduce PPC spend
                proportionally and reallocate budget to accelerate SEO investment.
              </p>
              <p>
                New firms with no existing authority have a different calculus. PPC is
                often necessary in the early months to survive while SEO investment ramps.
                A 60/40 PPC-to-SEO split in year one, transitioning to 30/70 by year two
                and 10/90 by year three, is a common pattern for firms that execute this
                well.
              </p>
              <p>
                The firms that struggle are those who invest heavily in PPC for years
                without allocating anything to SEO - only to find themselves perpetually
                dependent on high-cost paid traffic with no organic safety net. A PPC
                campaign that has run for three years with no parallel SEO investment
                has produced nothing durable.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Recommended budget allocation by firm stage</h3>
                <div className="space-y-4">
                  {[
                    { stage: "New firm (Year 1)", ppc: "60-70%", seo: "30-40%", note: "PPC for immediate leads while SEO foundation is built" },
                    { stage: "Growing firm (Year 2)", ppc: "40-50%", seo: "50-60%", note: "Balance as organic traffic begins contributing" },
                    { stage: "Established firm (Year 3+)", ppc: "15-25%", seo: "75-85%", note: "SEO dominates; PPC for gap-filling and new markets" },
                  ].map((row) => (
                    <div key={row.stage} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <div className="font-semibold text-gray-900 mb-1 text-sm">{row.stage}</div>
                      <div className="flex gap-4 text-xs mb-1">
                        <span className="text-gray-500">PPC: <span className="font-semibold text-gray-700">{row.ppc}</span></span>
                        <span className="text-amber-700">SEO: <span className="font-semibold">{row.seo}</span></span>
                      </div>
                      <p className="text-xs text-gray-600">{row.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">The diversification principle</h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Any firm that gets more than 80% of its leads from a single channel -
                      whether PPC, SEO, or referrals - is carrying excessive risk. Algorithm
                      changes, policy changes, and competitive shifts can affect any single
                      channel. Diversified lead acquisition is more resilient than optimization
                      of a single source.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does it take for law firm SEO to produce leads?",
                a: "For competitive practice area keywords in medium to large markets, expect 6-12 months before organic traffic becomes a meaningful lead source. Long-tail and local keyword rankings often improve within 3-6 months. The timeline compresses significantly with aggressive link building and content production - a firm that produces 6-10 quality links per month and publishes 8-12 new content pages will typically outpace a firm doing 2-3 links and 2-4 pages by a significant margin.",
              },
              {
                q: "Is PPC or SEO better for personal injury attorneys?",
                a: "Both are used by top-performing PI firms, but the economics favor SEO over a 2-3 year horizon. Personal injury PPC is among the most expensive in all of digital advertising - $100-$150 per click is common in major metros, and conversion rates from click to signed case are low enough that cost per acquisition can exceed $10,000-$20,000. SEO, once established, produces leads at a fraction of that cost. Most successful PI practices use PPC for volume in early stages while investing consistently in SEO for long-term organic dominance.",
              },
              {
                q: "Can small law firms compete with large firms in SEO?",
                a: "Yes - particularly in specific geographic markets and sub-specialty niches. Large law firm websites often have sprawling content structures with poor topical focus. A small firm that builds highly specific, deeply authoritative content around a defined practice area and market, backed by consistent link acquisition, can outperform large firm sites that spread their authority across too many topics. Niche authority beats broad authority in most local legal SERPs.",
              },
              {
                q: "What is the minimum SEO budget that produces results for law firms?",
                a: "For competitive legal keywords in medium-size markets, a monthly budget of $2,000-$4,000 (combined content + link building) is the practical floor for meaningful progress. Below that threshold, the pace of investment is too slow to outpace competitors who are consistently acquiring links and publishing content. In major metros competing for high-value practice area keywords, $5,000-$10,000+/month is common among top-ranking firms. The budget should scale with the value of the cases you are targeting.",
              },
              {
                q: "Does PPC affect organic SEO rankings?",
                a: "No. Google has consistently stated and demonstrated that paid search spend does not influence organic rankings. Your Ad Quality Score, Click-Through Rate from ads, and PPC budget have zero direct effect on where your site ranks organically. However, PPC data is extremely useful for SEO strategy - conversion rates on PPC keywords tell you which terms actually drive case inquiries, which is invaluable for prioritizing organic content investment.",
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

      <CtaBanner
        headline="Ready to build the SEO foundation that compounds over time?"
        subheadline="Browse transparent pricing on link building, content writing, and digital PR services built specifically for law firms."
        primaryCta={{ label: "View Pricing", href: "/pricing" }}
        secondaryCta={{ label: "Read the Link Building Guide", href: "/guides/law-firm-link-building-guide" }}
      />
    </>
  );
}
