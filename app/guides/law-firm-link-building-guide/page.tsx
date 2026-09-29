import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Law Firm Link Building Guide - Complete 2026 Strategy | Attorney Authority",
  description:
    "The complete law firm link building guide for 2026. DR-tiered strategy, YMYL compliance, anchor text frameworks, backlink types, and ROI benchmarks for legal SEO.",
  alternates: {
    canonical: "https://attorneyauthority.com/guides/law-firm-link-building-guide",
  },
  openGraph: {
    title: "Law Firm Link Building Guide - Complete 2026 Strategy | Attorney Authority",
    description:
      "A comprehensive playbook for building authoritative backlinks to your law firm website - covering DR tiers, YMYL compliance, anchor text strategy, and ROI benchmarks.",
    images: [{ url: "/og/law-firm-link-building-guide.png", width: 1200, height: 630 }],
  },
};

const toc = [
  { id: "what-is-link-building", label: "What is link building for law firms?" },
  { id: "why-legal-sites-need-links", label: "Why legal sites need link building more than most" },
  { id: "ymyl-eeat", label: "YMYL and E-E-A-T: the legal SEO compliance framework" },
  { id: "domain-rating", label: "Understanding Domain Rating for law firm link building" },
  { id: "five-types", label: "The 5 types of law firm backlinks" },
  { id: "how-many", label: "How many backlinks does a law firm need?" },
  { id: "anchor-text", label: "Anchor text strategy for legal keywords" },
  { id: "timeline", label: "Link building timeline: what to expect month by month" },
  { id: "red-flags", label: "Red flags: tactics to avoid for law firms" },
  { id: "monthly-cadence", label: "Building a monthly link acquisition cadence" },
  { id: "measuring-roi", label: "Measuring link building ROI for law firms" },
];

export default function LawFirmLinkBuildingGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Guides", href: "/guides" },
              { label: "Law Firm Link Building Guide", href: "/guides/law-firm-link-building-guide" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Complete 2026 guide
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              ~15 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Law Firm Link Building Guide - Complete 2026 Strategy
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            A comprehensive playbook for building authoritative backlinks to your law firm
            website - covering DR tiers, YMYL compliance, anchor text strategy, the five
            types of legal backlinks, and how to measure ROI.
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
        <div className="max-w-4xl mx-auto prose-custom">
          {/* Section 1 */}
          <div id="what-is-link-building" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              1. What Is Link Building for Law Firms?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Link building is the process of acquiring hyperlinks from third-party websites
              to your law firm&apos;s website. Each link is effectively a vote of confidence
              from the linking site - it tells Google that an outside, independent source
              found your content credible enough to reference.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google&apos;s PageRank algorithm, now over two decades old, established the
              foundational principle that links are votes. That principle remains one of
              Google&apos;s strongest ranking signals in 2026. For law firms, the stakes
              are particularly high: legal keywords have some of the highest cost-per-click
              values in all of advertising, meaning organic rankings represent extraordinary
              economic value. A top-3 ranking for &ldquo;personal injury lawyer Los
              Angeles&rdquo; can generate seven figures in annual case revenue.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The key distinction in law firm link building is quality over quantity. Ten
              links from high-authority, editorially managed websites outperform 500 links
              from low-quality directories. The goal is a consistent, growing portfolio of
              genuine editorial backlinks from real websites with real traffic.
            </p>
          </div>

          {/* Section 2 */}
          <div id="why-legal-sites-need-links" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              2. Why Legal Sites Need Link Building More Than Most
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Legal search is among the most competitive content categories on the internet.
              The reason is simple economics: a single signed personal injury case can be
              worth $50,000-$500,000 in attorney fees. That return means every law firm with
              a marketing budget is competing aggressively for the same top-3 organic
              positions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The result is that legal keywords in major markets have Keyword Difficulty
              scores of 80-95 out of 100 - among the most competitive in all of Google
              search. Competing at that level requires domain authority that only consistent
              link acquisition can build.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Additionally, legal directories (Avvo, FindLaw, Justia, Martindale-Hubbell)
              dominate the first page for many practice area queries. These directories have
              been accumulating links for 15-20 years. A law firm trying to outrank them
              without significant link building investment is attempting to compete against
              DR70-80+ sites with a DR20 domain.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">
                Legal keyword competition benchmarks
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-700">Keyword</th>
                      <th className="py-2 px-3 font-semibold text-gray-500 text-center">KD</th>
                      <th className="py-2 px-3 font-semibold text-gray-500 text-center">Est. CPC</th>
                      <th className="py-2 px-3 font-semibold text-gray-700 text-center">Min DR to Compete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Personal injury lawyer Los Angeles", "92", "$148", "DR50+"],
                      ["DUI attorney Chicago", "88", "$89", "DR45+"],
                      ["Criminal defense lawyer NYC", "85", "$112", "DR45+"],
                      ["Family law attorney Denver", "76", "$64", "DR35+"],
                      ["Car accident lawyer Houston", "84", "$97", "DR45+"],
                      ["Immigration lawyer Miami", "79", "$71", "DR35+"],
                    ].map(([kw, kd, cpc, mindr]) => (
                      <tr key={kw as string} className="border-b border-gray-100">
                        <td className="py-2 text-gray-700">{kw}</td>
                        <td className="py-2 px-3 text-center text-red-600 font-semibold">{kd}</td>
                        <td className="py-2 px-3 text-center text-gray-500">{cpc}</td>
                        <td className="py-2 px-3 text-center font-semibold text-amber-700">{mindr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Illustrative estimates. KD = Keyword Difficulty (Ahrefs scale). Actual values vary by market and timing.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div id="ymyl-eeat" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              3. YMYL and E-E-A-T: The Legal SEO Compliance Framework
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google classifies law firm content as YMYL - Your Money Your Life. This
              classification applies to content where inaccuracy could directly harm readers
              - affecting their finances, health, legal rights, or safety. Legal information
              clearly qualifies: bad advice about a criminal defense strategy or a personal
              injury claim could cost someone their freedom or their settlement.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              YMYL classification means Google applies its E-E-A-T framework most rigorously
              to legal content. E-E-A-T stands for Experience, Expertise, Authoritativeness,
              and Trustworthiness. For law firms, this means:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { term: "Experience", def: "Content should reflect first-hand experience with legal matters - attorney bylines, case examples, jurisdiction-specific knowledge." },
                { term: "Expertise", def: "Writers should demonstrate genuine legal knowledge through accurate terminology, correct procedural descriptions, and up-to-date legal information." },
                { term: "Authoritativeness", def: "The firm and its authors should be recognized as authorities by other credible sources - which is where backlinks come in. Links from authoritative websites are the primary external signal of authoritativeness." },
                { term: "Trustworthiness", def: "The site should have transparent ownership, accurate contact information, secure connections (HTTPS), and consistent factual accuracy." },
              ].map((item) => (
                <li key={item.term} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">{item.term}:</span>{" "}
                    <span className="text-gray-700">{item.def}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The implication for link building: backlinks from credible, editorially managed
              websites are one of the most powerful external signals Google uses to evaluate
              authoritativeness for YMYL queries. Low-quality links do not just fail to help
              on YMYL sites - they actively increase the risk of quality penalties.
            </p>
          </div>

          {/* Section 4 */}
          <div id="domain-rating" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              4. Understanding Domain Rating (DR) for Law Firm Link Building
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Domain Rating (DR) is Ahrefs&apos; metric for measuring the overall backlink
              authority of a website on a 0-100 logarithmic scale. It is calculated based
              on the number of referring domains and the DR of those referring domains
              themselves. DR is not a Google metric - Google does not publish its own
              authority score - but it correlates strongly with ranking ability and is the
              industry standard for law firm SEO benchmarking.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The logarithmic scale matters: going from DR20 to DR30 requires proportionally
              less link acquisition than going from DR60 to DR70. At the top of the scale,
              the gap between a DR70 site (a major news outlet) and a DR80 site (a top-tier
              national publication) represents massive authority differences.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For law firm link building, the practical application of DR is twofold: first,
              track your own domain&apos;s DR as a measure of campaign progress. Second, use
              DR as the primary quality filter when evaluating link building opportunities -
              the DR of the linking site determines the authority value of each link you
              acquire.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-4">
              <p className="text-sm text-amber-800 leading-relaxed">
                <span className="font-semibold">Pro tip:</span> Before ordering link building,
                run your top 3 ranking competitors through Ahrefs Site Explorer. Note their
                DR and referring domain count. That gap between your DR and theirs is your
                link building target.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div id="five-types" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              5. The 5 Types of Law Firm Backlinks
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A diversified link profile draws from multiple acquisition channels. Each type
              has distinct characteristics, cost, and timeline:
            </p>
            <div className="space-y-5">
              {[
                {
                  name: "1. Blogger Outreach",
                  href: "/products/blogger-outreach",
                  desc: "A new article is published on a qualifying third-party website specifically to house your backlink. Gives you control over content context and anchor text. Best for building a consistent baseline of editorial links across DR tiers. Delivery: 17 days.",
                  drRange: "DR10-DR60+",
                },
                {
                  name: "2. Niche Edits",
                  href: "/products/niche-edits",
                  desc: "Your link is inserted into an existing, already-indexed article on an established website. The aged authority of the host page means faster link equity transfer than new placements. Best combined with blogger outreach for a natural profile. Delivery: 17 days.",
                  drRange: "DR10-DR60+",
                },
                {
                  name: "3. Digital PR Campaigns",
                  href: "/products/digital-pr-campaign",
                  desc: "Earned editorial coverage on major national publications through journalist pitching. Produces DR70-90+ links that carry more authority than any other type. Best for breaking into top-3 for highly competitive practice area keywords. Delivery: 45 days.",
                  drRange: "DR70-DR90+",
                },
                {
                  name: "4. Brand Mentions",
                  href: "/products/brand-mentions",
                  desc: "Your firm name is placed in editorial content across DR50+ sites - with or without a live hyperlink. Diversifies your authority footprint and builds entity signals that Google uses for YMYL evaluation. Best used alongside traditional link building. Delivery: 17 days.",
                  drRange: "DR50-DR70",
                },
                {
                  name: "5. Citation Building",
                  href: "/products/citation-building",
                  desc: "Accurate NAP (Name, Address, Phone) submissions to legal directories and local platforms. Not primarily a domain authority play - citations specifically influence local map pack rankings. Essential infrastructure for any firm competing in local search. Delivery: 10 days.",
                  drRange: "Varies by directory",
                },
              ].map((type) => (
                <div
                  key={type.name}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-5"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-gray-900">{type.name}</h3>
                    <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded shrink-0">
                      {type.drRange}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">{type.desc}</p>
                  <Link
                    href={type.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800"
                  >
                    View product details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                A digital PR brief starts with something worth using
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A placement and an earned reference answer different questions. For a PR
                campaign, start with a problem that a journalist, consumer educator, or
                another lawyer would want to help readers solve. Then build the resource,
                check its claims, show how it works, pitch the relevant story, and keep the
                resource current. The link is a possible result of someone finding the
                resource useful, not a deliverable the publisher has promised.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Consider GJEL Accident Attorneys&apos;{" "}
                <a
                  href="https://www.gjel.com/car-accidents/total-loss-calculator"
                  className="font-semibold text-amber-800 underline underline-offset-2 hover:text-amber-950"
                >
                  total-loss calculator
                </a>
                . It gives California drivers a way to start a vehicle-value estimate or
                review an insurer&apos;s offer. That is a concrete property-damage question
                people face after a crash. The tool is an informational aid, not an
                appraisal or an estimate of an injury claim. We have reviewed its entry
                flow; we have not tested a completed valuation or measured links earned
                by this campaign.
              </p>
              <figure className="mb-5">
                <Image
                  src="/images/gjel-total-loss-calculator-entry.jpg"
                  alt="GJEL total-loss calculator entry screen with California plate and manual vehicle-entry options"
                  width={1280}
                  height={720}
                  className="w-full h-auto rounded-lg border border-amber-200"
                />
                <figcaption className="text-xs text-gray-600 mt-2">
                  The public entry screen shows the two ways to begin. No plate, VIN,
                  insurer report, or completed valuation is shown.
                </figcaption>
              </figure>
              <p className="font-semibold text-gray-900 mb-2">What to put in the brief:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>The exact user question, jurisdiction, and limits of the answer.</li>
                <li>The inputs, data sources, review owner, and a plan to correct or refresh the tool.</li>
                <li>A short demo and real screenshots that let an editor inspect the experience.</li>
                <li>Distinct pitches for outlets whose readers actually face that question.</li>
                <li>Measurement of relevant citations, referral use, and updates over time.</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div id="how-many" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              6. How Many Backlinks Does a Law Firm Need?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              There is no universal answer - the number of backlinks your firm needs is
              defined by your competitive landscape. The only meaningful benchmark is: how
              many quality referring domains do your top 3 competitors have, and what is
              their DR?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              That said, here are practical starting ranges by competitive context:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold text-gray-700">Market Context</th>
                    <th className="py-2 px-3 font-semibold text-gray-500 text-center">Referring Domains Target</th>
                    <th className="py-2 px-3 font-semibold text-gray-500 text-center">Monthly Cadence</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["New site, local long-tail keywords", "20-50", "3-6 links/month"],
                    ["Established site, small-medium market", "50-150", "4-8 links/month"],
                    ["Competitive metro, practice area keyword", "150-300", "8-15 links/month"],
                    ["Major metro, extreme competition (PI, Criminal)", "300-600+", "15+ links/month"],
                  ].map(([context, domains, cadence]) => (
                    <tr key={context as string} className="border-b border-gray-100">
                      <td className="py-2 text-gray-700">{context}</td>
                      <td className="py-2 px-3 text-center font-semibold text-gray-700">{domains}</td>
                      <td className="py-2 px-3 text-center text-amber-700 font-semibold">{cadence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed">
              These are referring domain counts, not total backlink counts. One domain should
              count once regardless of how many individual links it provides. A healthy link
              profile prioritizes unique referring domains over link volume from a handful
              of sites.
            </p>
          </div>

          {/* Section 7 */}
          <div id="anchor-text" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              7. Anchor Text Strategy for Legal Keywords
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Anchor text is the clickable words in a hyperlink. For law firms, anchor text
              strategy is one of the most important - and most dangerous - elements of link
              building. Over-optimization is a Penguin penalty risk that can collapse
              rankings overnight.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A natural anchor text profile for a law firm should look roughly like this:
            </p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 mb-6">
              <div className="space-y-2">
                {[
                  { type: "Branded anchors", example: '"Smith & Jones Law Firm"', pct: "40-50%" },
                  { type: "URL anchors", example: '"smithjones.com"', pct: "15-20%" },
                  { type: "Generic anchors", example: '"click here", "learn more", "this article"', pct: "10-15%" },
                  { type: "Partial-match anchors", example: '"injury attorneys in Denver"', pct: "10-15%" },
                  { type: "Exact-match commercial", example: '"personal injury lawyer Denver"', pct: "5-10% max" },
                ].map((item) => (
                  <div key={item.type} className="flex items-center justify-between text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">{item.type}</span>
                      <span className="text-gray-400 text-xs ml-2">{item.example}</span>
                    </div>
                    <span className="font-semibold text-amber-700">{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The rule of thumb: your exact-match commercial anchor percentage should never
              dominate your profile. If more than 20-25% of your backlinks use your primary
              commercial keyword as anchor text, you are in over-optimization territory.
              This is especially risky for YMYL sites where Google applies additional
              scrutiny to unnatural link patterns.
            </p>
          </div>

          {/* Section 8 */}
          <div id="timeline" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              8. Link Building Timeline: What to Expect Month by Month
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Link building is a compounding strategy - not a one-time fix. Here is what
              a realistic timeline looks like for a law firm starting from a low baseline:
            </p>
            <div className="space-y-4">
              {[
                {
                  month: "Month 1-2",
                  title: "Foundation",
                  desc: "First links placed and indexed. Google processes new backlinks within 2-8 weeks. You may see DR tick up slightly in Ahrefs. No meaningful ranking movement yet - this is normal.",
                },
                {
                  month: "Month 3-4",
                  title: "Early signals",
                  desc: "Ranking improvements on lower-competition long-tail keywords often appear first. Target pages may move from positions 15-25 to the bottom of page one. Continue consistent acquisition.",
                },
                {
                  month: "Month 5-6",
                  title: "Competitive movement",
                  desc: "For moderate-competition keywords, page-one appearances become consistent. High-competition keywords show movement but may not yet reach top 5. Domain DR improvement measurable.",
                },
                {
                  month: "Month 9-12",
                  title: "Meaningful ROI",
                  desc: "Most firms see meaningful organic traffic increases by month 9-12 of consistent link acquisition. Highly competitive markets (major metro, PI, criminal defense) take 12-18 months.",
                },
              ].map((phase) => (
                <div
                  key={phase.month}
                  className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5"
                >
                  <div className="text-center min-w-[100px]">
                    <div className="text-xs font-bold text-amber-700 mb-1">{phase.month}</div>
                    <div className="text-sm font-semibold text-gray-900">{phase.title}</div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 9 */}
          <div id="red-flags" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              9. Red Flags: Link Building Tactics to Avoid for Law Firms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              YMYL classification amplifies the risk of bad link building. Practices that
              might have limited impact on an e-commerce site can cause significant ranking
              damage on a law firm website:
            </p>
            <div className="space-y-3">
              {[
                {
                  tactic: "Private Blog Networks (PBNs)",
                  risk: "Google actively detects PBN footprints. A manual penalty on a YMYL site is devastating - recovery takes months and cases are lost during the drop.",
                },
                {
                  tactic: "Paid link schemes",
                  risk: "Paying directly for links from sites that openly sell them violates Google's guidelines. These sites are frequently deindexed, taking your link equity with them.",
                },
                {
                  tactic: "Link farms and article directories",
                  risk: "High-volume, low-quality links from directories and article farms provide zero positive impact and can trigger algorithmic quality penalties.",
                },
                {
                  tactic: "Exact-match anchor text overuse",
                  risk: "Excessive use of commercial anchor text (e.g., 'personal injury lawyer Dallas' repeated across dozens of links) is an unnatural pattern that Penguin targets.",
                },
                {
                  tactic: "Link bursts (buying 100 links at once)",
                  risk: "Sudden, unnatural spikes in link acquisition look manipulative to Google. Natural profiles grow consistently, not in dramatic one-time surges.",
                },
              ].map((item) => (
                <div key={item.tactic} className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h3 className="font-bold text-red-900 text-sm mb-1">{item.tactic}</h3>
                  <p className="text-xs text-red-700 leading-relaxed">{item.risk}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10 */}
          <div id="monthly-cadence" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              10. Building a Monthly Link Acquisition Cadence
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most effective law firm link building programs operate on a consistent
              monthly cadence - not sporadic bursts. Here is how to structure a sustainable
              monthly program:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Decide on a monthly link budget and order consistently - 4 DR30 links per month compounds over time far better than 20 links one month and zero the next.",
                "Mix link types: a baseline of blogger outreach links (your volume engine) combined with niche edits (faster authority transfer) and occasional brand mentions creates natural profile diversity.",
                "Track your referring domain count monthly in Ahrefs. The number should trend consistently upward. Flatlines suggest under-investment; sudden spikes suggest unnatural patterns.",
                "Review anchor text distribution quarterly. If commercial anchors are creeping above 20%, adjust the next 2-3 orders toward branded and generic anchors.",
                "Run competitor DR checks every 6 months. If a competitor is growing their DR faster than you, adjust your cadence before the gap becomes too wide to close.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 11 */}
          <div id="measuring-roi" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              11. Measuring Link Building ROI for Law Firms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Link building ROI for law firms is ultimately measured in cases signed, not
              rankings. But because the path from link to case involves multiple steps -
              link to ranking, ranking to traffic, traffic to inquiry, inquiry to signed
              case - you need intermediate metrics to confirm the strategy is working.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mt-6">
              {[
                {
                  metric: "Domain Rating (Ahrefs)",
                  frequency: "Monthly",
                  desc: "Track your DR trend. Consistent upward movement confirms your link acquisition is registering. Flat DR despite link building suggests the links may not be indexing or are low quality.",
                },
                {
                  metric: "Referring domains (Ahrefs)",
                  frequency: "Monthly",
                  desc: "Count of unique websites linking to you. This should grow consistently. More unique referring domains is the primary authority signal.",
                },
                {
                  metric: "Organic clicks (Google Search Console)",
                  frequency: "Monthly",
                  desc: "Total organic clicks from Google. This is the clearest indicator of whether rankings are translating into actual traffic. Track vs. prior month and prior year.",
                },
                {
                  metric: "Target keyword ranking (Ahrefs Rank Tracker)",
                  frequency: "Weekly",
                  desc: "Track your 10-15 primary target keywords weekly. Movement toward the top 5 confirms link building is producing ranking impact on your priority terms.",
                },
                {
                  metric: "Contact form submissions / calls",
                  frequency: "Monthly",
                  desc: "The bottom-of-funnel business metric. Track organic-sourced inquiries separately from paid. Organic contact rate growth is the ultimate link building ROI signal.",
                },
                {
                  metric: "Signed cases from organic",
                  frequency: "Quarterly",
                  desc: "For firms with proper intake tracking, calculate cost-per-signed-case from organic vs. paid. This is the comparison that justifies link building investment.",
                },
              ].map((item) => (
                <div key={item.metric} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm">{item.metric}</h3>
                    <span className="text-xs text-amber-700 font-semibold bg-amber-100 px-2 py-0.5 rounded">
                      {item.frequency}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        headline="Ready to start building links for your law firm?"
        subheadline="Browse transparent, a-la-carte pricing on all law firm link building products - blogger outreach, niche edits, digital PR, and more."
        primaryCta={{ label: "View Link Building Pricing", href: "/pricing" }}
        secondaryCta={{ label: "See All Services", href: "/services/law-firm-link-building" }}
      />
    </>
  );
}
