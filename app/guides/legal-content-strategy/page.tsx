import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Legal Content Strategy for Law Firms - E-E-A-T & Topical Authority Guide | Attorney Authority",
  description:
    "How to build a legal content strategy that ranks - covering pillar-cluster architecture, E-E-A-T requirements, keyword research, attorney bylines, and publishing cadence.",
  alternates: {
    canonical: "https://attorneyauthority.com/guides/legal-content-strategy",
  },
  openGraph: {
    title: "Legal Content Strategy for Law Firms - E-E-A-T & Topical Authority Guide | Attorney Authority",
    description:
      "The complete guide to building topical authority for law firm websites through content strategy, E-E-A-T compliance, and keyword-driven publishing plans.",
    images: [{ url: "/og/legal-content-strategy.png", width: 1200, height: 630 }],
  },
};

const toc = [
  { id: "what-is", label: "What is a legal content strategy?" },
  { id: "pillar-cluster", label: "The pillar-cluster model for law firm websites" },
  { id: "page-types", label: "Practice area pages vs. location pages vs. blog content" },
  { id: "eeat", label: "E-E-A-T requirements for legal content" },
  { id: "keyword-research", label: "Keyword research for legal content strategy" },
  { id: "content-depth", label: "Content depth: how long should law firm pages be?" },
  { id: "attorney-bylines", label: "Attorney bylines and author authority" },
  { id: "publishing-cadence", label: "Publishing cadence: how often to publish" },
  { id: "updating-vs-new", label: "Updating existing content vs. publishing new" },
  { id: "by-practice-area", label: "Content strategy by practice area" },
];

export default function LegalContentStrategyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Guides", href: "/guides" },
              { label: "Legal Content Strategy", href: "/guides/legal-content-strategy" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              E-E-A-T framework
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              Topical authority guide
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              ~13 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Legal Content Strategy for Law Firms - E-E-A-T &amp; Topical Authority Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Content strategy for law firms is not about publishing more - it is about
            publishing strategically. Learn how to build topical authority, satisfy
            E-E-A-T requirements, and create a content architecture that compounds
            in ranking power over time.
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
          <div id="what-is">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              1. What Is a Legal Content Strategy?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A legal content strategy is a deliberate plan for creating, organizing, and
              publishing content that builds your law firm&apos;s visibility in organic search.
              It is not a content calendar in isolation - it is the underlying framework
              that determines what to publish, why, for whom, and in what order.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most law firms approach content reactively: they publish when they have time,
              on topics that seem interesting, without a coherent architecture connecting
              the pages. The result is a collection of isolated articles that each struggle
              to rank independently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A strategic approach produces the opposite: a content architecture where each
              new piece reinforces existing pages, where topic clusters signal deep
              expertise to Google, and where the cumulative effect of publishing compounds
              over time. This is how law firms build the topical authority that separates
              the first page from page five.
            </p>
          </div>

          {/* Section 2 */}
          <div id="pillar-cluster">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              2. The Pillar-Cluster Model for Law Firm Websites
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The pillar-cluster model is the most effective content architecture for law
              firm websites. A pillar page is a comprehensive, long-form overview of a
              broad topic (e.g., &ldquo;Personal Injury Law in Texas&rdquo;). Cluster pages are
              specific sub-topic articles that link back to the pillar (e.g., &ldquo;How Long Do
              Personal Injury Cases Take in Texas,&rdquo; &ldquo;What Is Pain and Suffering
              Compensation,&rdquo; &ldquo;Personal Injury Statute of Limitations in Texas&rdquo;).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This architecture works because it signals topical authority to Google. When
              a site has a comprehensive pillar page AND 10-20 detailed cluster articles
              all interconnected through internal links, Google recognizes that the domain
              has genuine depth of expertise in that topic area. That recognition translates
              into ranking authority for all pages in the cluster.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
              <h3 className="font-bold text-gray-900 mb-4 text-sm">Example cluster architecture: Personal Injury</h3>
              <div className="space-y-2">
                <div className="bg-amber-100 text-amber-900 text-sm font-semibold rounded p-3">
                  PILLAR: Personal Injury Lawyer [City] (comprehensive overview, 2,000+ words)
                </div>
                <div className="grid sm:grid-cols-2 gap-2 ml-4">
                  {[
                    "Car Accident Lawyer [City]",
                    "Truck Accident Attorney [City]",
                    "Slip and Fall Lawyer [City]",
                    "What Is Pain and Suffering Compensation?",
                    "Personal Injury Statute of Limitations [State]",
                    "How Long Does a PI Case Take?",
                    "Personal Injury Settlement Calculator",
                    "When to Hire a Personal Injury Lawyer",
                  ].map((page) => (
                    <div
                      key={page}
                      className="bg-white border border-gray-200 text-gray-700 text-xs rounded p-2.5"
                    >
                      {page}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The internal link structure is critical: every cluster page links back to the
              pillar, and the pillar links out to key cluster pages. This creates a topical
              web that Google can crawl and map as a cohesive expertise signal.
            </p>
          </div>

          {/* Section 3 */}
          <div id="page-types">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              3. Practice Area Pages vs. Location Pages vs. Blog Content
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Law firm content divides into three distinct types, each with different
              purposes, keyword targets, and content requirements:
            </p>
            <div className="space-y-5">
              {[
                {
                  type: "Practice Area Pages",
                  purpose: "Convert visitors; target transactional keywords",
                  keywords: "Personal injury lawyer, DUI attorney, family law attorney",
                  length: "1,500-3,000+ words",
                  frequency: "Create once, update annually",
                  notes: "These are your highest-value pages. They target the most competitive, highest-intent queries. Every major practice area should have its own dedicated page - never combine multiple practice areas on a single page.",
                },
                {
                  type: "Location Pages",
                  purpose: "Target geographic modifiers for specific markets",
                  keywords: "Personal injury lawyer Dallas, car accident attorney Houston",
                  length: "800-1,500 words",
                  frequency: "Create per location; update when applicable",
                  notes: "Location pages capture geographic-specific searches. Avoid thin, near-duplicate location pages that differ only by city name - each page needs unique, locally relevant content to avoid duplicate content issues.",
                },
                {
                  type: "Blog Content",
                  purpose: "Build topical authority; capture informational queries",
                  keywords: "What to do after a car accident, how long does a DUI case take",
                  length: "800-1,500 words",
                  frequency: "2-4+ new posts per month",
                  notes: "Blog content targets informational queries and builds topical depth around your practice areas. These pages rarely convert directly but build the cluster authority that elevates your practice area pages.",
                },
              ].map((item) => (
                <div
                  key={item.type}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-5"
                >
                  <h3 className="font-bold text-gray-900 mb-3">{item.type}</h3>
                  <div className="grid sm:grid-cols-2 gap-3 mb-3 text-xs">
                    <div>
                      <span className="text-gray-500 font-semibold uppercase">Purpose: </span>
                      <span className="text-gray-700">{item.purpose}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-semibold uppercase">Length: </span>
                      <span className="text-gray-700">{item.length}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-semibold uppercase">Target keywords: </span>
                      <span className="text-gray-700">{item.keywords}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-semibold uppercase">Frequency: </span>
                      <span className="text-gray-700">{item.frequency}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 */}
          <div id="eeat">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              4. E-E-A-T Requirements for Legal Content
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google&apos;s E-E-A-T framework - Experience, Expertise, Authoritativeness,
              Trustworthiness - applies most rigorously to YMYL content. Legal content
              is explicitly cited in Google&apos;s Search Quality Evaluator Guidelines as
              a YMYL category requiring the highest quality standards.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Here is what E-E-A-T means in practice for legal content creation:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  letter: "E",
                  label: "Experience",
                  items: [
                    "Content reflects first-hand experience with legal processes",
                    "Case examples and outcomes referenced (where ethically appropriate)",
                    "Jurisdiction-specific procedural knowledge demonstrated",
                    "Writer has direct familiarity with the legal topic covered",
                  ],
                },
                {
                  letter: "E",
                  label: "Expertise",
                  items: [
                    "Accurate legal terminology throughout",
                    "Correct procedural descriptions (filing deadlines, process steps)",
                    "Current legal standards - outdated information is an expertise failure",
                    "Attorney-reviewed content is the gold standard",
                  ],
                },
                {
                  letter: "A",
                  label: "Authoritativeness",
                  items: [
                    "Named attorney bylines with verifiable credentials",
                    "Backlinks from credible legal and authority websites",
                    "Author bio pages with bar admissions, education, practice history",
                    "Mentions in industry publications and news",
                  ],
                },
                {
                  letter: "T",
                  label: "Trustworthiness",
                  items: [
                    "HTTPS on all pages (basic trust signal)",
                    "Transparent ownership and contact information",
                    "Accurate, verifiable claims throughout content",
                    "Clear disclaimer distinguishing content from legal advice",
                  ],
                },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 bg-amber-100 text-amber-700 font-bold text-base rounded flex items-center justify-center">
                      {item.letter}
                    </span>
                    <span className="font-bold text-gray-900">{item.label}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {item.items.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <div id="keyword-research">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              5. Keyword Research for Legal Content Strategy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Keyword research for law firms is more nuanced than most industries because
              legal keywords have extremely distinct intent signals and competitive
              characteristics. Here is the framework for building keyword research into
              your content strategy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Start with your practice area transactional keywords.</strong> These
              are the &ldquo;[practice area] lawyer [city]&rdquo; queries that drive direct case
              inquiries. These are your pillar page targets. Check Keyword Difficulty in
              Ahrefs - for competitive markets, KD 70-90+ is common. Your Domain Rating
              relative to this KD score tells you how much link building you need before
              content alone can compete.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Map informational keywords to blog content.</strong> Queries like
              &ldquo;what to do after a car accident,&rdquo; &ldquo;how much is a personal injury
              settlement,&rdquo; and &ldquo;DUI first offense consequences&rdquo; are informational -
              they are not immediately looking to hire a lawyer. But they are in your
              target audience, and ranking for them builds topical authority that
              elevates your transactional pages.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-4">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Shortcut:</strong> Our{" "}
                <a href="/products/keyword-research" className="text-amber-700 underline font-semibold">
                  Law Firm Keyword Research
                </a>{" "}
                product delivers a data-driven keyword report in 6 days covering search
                volume, difficulty, intent classification, and a prioritized content
                roadmap - saving you days of manual research.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div id="content-depth">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              6. Content Depth: How Long Should Law Firm Pages Be?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Word count is a proxy for topical depth - not a direct ranking factor. The
              question is not &ldquo;how many words?&rdquo; but &ldquo;does this page thoroughly cover
              everything a prospective client would need to know about this topic?&rdquo;
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold text-gray-700">Page Type</th>
                    <th className="py-2 px-3 font-semibold text-gray-500 text-center">Suggested Range</th>
                    <th className="py-2 px-3 font-semibold text-gray-500 text-left">Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Practice area pillar page", "2,000-3,500 words", "Must cover all sub-topics comprehensively to compete"],
                    ["City/location page", "800-1,200 words", "Unique local content; avoid thin duplicate pages"],
                    ["Blog post / FAQ article", "800-1,500 words", "Enough depth for informational authority"],
                    ["Attorney bio page", "400-800 words", "Credentials, experience, results focus"],
                    ["Homepage", "600-1,200 words", "Overview + navigation; do not over-optimize"],
                    ["FAQ section (per page)", "200-500 words", "Targeted FAQ schema content"],
                  ].map(([type, range, rationale]) => (
                    <tr key={type as string} className="border-b border-gray-100">
                      <td className="py-2 text-gray-700 font-medium">{type}</td>
                      <td className="py-2 px-3 text-center font-semibold text-amber-700">{range}</td>
                      <td className="py-2 px-3 text-gray-500 text-xs">{rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The most reliable guide: run a search for your target keyword and review the
              top 3 results. What topics do they cover? What did they miss? Your content
              should match or exceed their depth while adding something genuinely useful
              the current results do not provide.
            </p>
          </div>

          {/* Section 7 */}
          <div id="attorney-bylines">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              7. Attorney Bylines and Author Authority
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Attorney bylines are one of the strongest E-E-A-T signals available to law
              firms. When a licensed attorney is listed as the author of a legal article,
              Google&apos;s quality evaluation registers demonstrated expertise in a way that
              generic &ldquo;Staff Writer&rdquo; bylines cannot.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              An effective attorney byline strategy requires more than just adding a name
              to an article. Here is what needs to exist for the byline to carry
              E-E-A-T weight:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Author bio page for each attorney with bar admission details, law school, years of practice, and practice area focus",
                "Author bio pages should link to external verifications: state bar profile, LinkedIn, Avvo, Martindale",
                "The attorney should have a consistent byline across multiple articles - isolated one-off bylines carry less weight than a pattern of authorship",
                "Attorney photos on bio pages add a human credibility signal",
                "Structured data (Person schema) on attorney bio pages helps Google understand the author entity",
                "Byline page links from the article to the author bio and back from the bio to relevant articles create an interconnected authority signal",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              For solo practitioners or small firms where the attorney is writing most
              content themselves, this is actually an E-E-A-T advantage - genuine
              first-person expertise is exactly what Google&apos;s guidelines reward.
            </p>
          </div>

          {/* Section 8 */}
          <div id="publishing-cadence">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              8. Publishing Cadence: How Often to Publish
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Consistency matters more than volume. A law firm that publishes 2 quality
              articles per month for 24 months builds significantly more topical authority
              than one that publishes 20 articles in a burst and then goes silent.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A realistic publishing cadence for most law firms:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  context: "Minimal budget",
                  cadence: "2 articles/month",
                  note: "Sustains crawl frequency and adds content signals. Slow but compounds over time.",
                },
                {
                  context: "Active program",
                  cadence: "4-6 articles/month",
                  note: "Meaningful topical authority building within 6-12 months. Recommended baseline.",
                },
                {
                  context: "Aggressive growth",
                  cadence: "8-12+ articles/month",
                  note: "Fastest path to comprehensive topical coverage. Best combined with link building.",
                },
              ].map((tier) => (
                <div key={tier.context} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="text-xs text-amber-700 font-semibold mb-1">{tier.context}</div>
                  <div className="text-xl font-bold text-gray-900 mb-2">{tier.cadence}</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{tier.note}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              Prioritize practice area pillar pages and location pages first - these have
              the highest commercial intent. Once your core transactional pages exist, layer
              in informational blog content to build topical cluster depth.
            </p>
          </div>

          {/* Section 9 */}
          <div id="updating-vs-new">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              9. Updating Existing Content vs. Publishing New
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once your core pages exist, one of the highest-ROI activities in legal
              content strategy is updating existing content rather than always publishing
              new. Here is how to identify update candidates:
            </p>
            <div className="space-y-4">
              {[
                {
                  signal: "Pages ranking 5-15 with good impressions",
                  action: "Update and expand these pages. They have some authority but need improvement to break into the top 5. Often a content depth update plus fresh publication date triggers a ranking bump.",
                },
                {
                  signal: "Pages with declining traffic over 6+ months",
                  action: "Check if competitors have published better content on the same keyword. A content refresh competing on depth often recovers declining positions.",
                },
                {
                  signal: "Pages with legal information that has changed",
                  action: "Outdated legal information is an E-E-A-T failure. Any page that references laws, deadlines, or procedures should be reviewed annually.",
                },
                {
                  signal: "High-traffic pages with low conversion rates",
                  action: "These pages are driving traffic but not generating contact. Update CTAs, add trust signals (attorney photos, case results, reviews), and review the conversion path.",
                },
              ].map((item) => (
                <div key={item.signal} className="border-l-4 border-amber-400 pl-4 py-1">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.signal}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10 */}
          <div id="by-practice-area">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              10. Content Strategy by Practice Area
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Content strategy priorities and recommended approaches vary by practice area.
              Here is a practice-specific framework:
            </p>
            <div className="space-y-4">
              {[
                {
                  area: "Personal Injury",
                  priority: "Highest",
                  focus: "Accident type sub-pages (car accidents, truck accidents, slip and fall), settlement FAQ content, city location pages for every served market. High competition means content alone is rarely sufficient without link building.",
                },
                {
                  area: "Criminal Defense",
                  priority: "High",
                  focus: "Charge-specific pages (DUI, drug possession, assault), process guides (what happens after arrest, plea vs. trial), and city pages. DUI sub-niche is particularly saturated and requires both content depth and links.",
                },
                {
                  area: "Family Law",
                  priority: "High",
                  focus: "Divorce process pages, child custody guides, property division content, and jurisdiction-specific legal standard pages. Highly emotional topic - content that demonstrates empathy and process clarity performs well.",
                },
                {
                  area: "Estate Planning",
                  priority: "Moderate",
                  focus: "Will vs. trust comparison content, probate guides, power of attorney explainers. Lower competition than PI or criminal defense; content quality carries more relative weight.",
                },
                {
                  area: "Immigration Law",
                  priority: "High",
                  focus: "Visa-specific pages, green card process guides, deportation defense content. Spanish-language content is a significant opportunity - immigration is one of the few practice areas where bilingual SEO has high ROI.",
                },
                {
                  area: "Workers Compensation",
                  priority: "High",
                  focus: "Injury type pages, claim process guides, employer vs. employee perspective content. State-specific content is especially important since workers&apos; comp law varies significantly by jurisdiction.",
                },
              ].map((item) => (
                <div key={item.area} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{item.area}</h3>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        item.priority === "Highest"
                          ? "text-red-700 bg-red-100"
                          : item.priority === "High"
                          ? "text-amber-700 bg-amber-100"
                          : "text-gray-600 bg-gray-200"
                      }`}
                    >
                      Competition: {item.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        headline="Ready to build a content strategy that ranks?"
        subheadline="Our keyword research and content plan products give you a data-driven roadmap in days - not months of guesswork."
        primaryCta={{ label: "Order a Content Plan", href: "/products/content-plan" }}
        secondaryCta={{ label: "Start with Keyword Research", href: "/products/keyword-research" }}
      />
    </>
  );
}
