import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, Shield } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Immigration Law Firm SEO & Link Building | Attorney Authority",
  description:
    "Immigration law SEO including the Spanish-language multilingual opportunity. KD 65-82 in major metros, CPC $55-$80. Build authority for visa, green card, deportation defense, and citizenship keywords.",
  alternates: {
    canonical: "https://attorneyauthority.com/practice-areas/immigration-law",
  },
};

export default function ImmigrationLawPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Practice Areas", href: "/practice-areas" },
              { label: "Immigration Law", href: "/practice-areas/immigration-law" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-orange-900/30 border border-orange-700/40 text-orange-400 px-3 py-1 rounded-full font-semibold">
              Moderate-high competition
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              KD 65&ndash;82 in major metros
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              Spanish-language opportunity
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Immigration Law Firm SEO &amp; Link Building
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Immigration law offers one of the most underserved multilingual SEO
            opportunities in legal. The Spanish-language search market for immigration
            services is large, growing, and significantly less competitive than English
            equivalents. Firms that build bilingual content and multilingual link
            profiles gain a compounding competitive advantage that monolingual competitors
            cannot easily replicate.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Link Building Pricing
            </Link>
            <Link
              href="/products/multilingual-links"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Multilingual Links <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Landscape */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Immigration Law SEO Landscape
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Immigration law keyword competition has increased substantially over
                the past decade as more firms have entered the digital space. Core
                English-language terms like &ldquo;immigration lawyer [city]&rdquo;
                carry KD scores of 65&ndash;82 in major metros. CPCs of $55&ndash;$80
                reflect strong advertiser demand for immigration legal traffic.
              </p>
              <p>
                The defining strategic opportunity in immigration law SEO is the
                Spanish-language market. Search volume for immigration-related terms
                in Spanish is substantial in nearly every major U.S. metro, and the
                competitive landscape is materially less dense than English equivalents.
                A firm with well-executed Spanish-language content and Spanish-relevant
                backlinks can achieve top rankings for high-value queries with
                significantly less investment than comparable English targets.
              </p>
              <p>
                Immigration law is also highly dependent on current events. Policy
                changes, court decisions, and administrative shifts in visa processing
                create surge search events that firms with established topical authority
                capture disproportionately. Content that covers regulatory updates
                earns natural backlinks from news sources and immigration advocacy
                organizations.
              </p>
              <p>
                The client lifetime value in immigration law is often extended across
                multiple case types - a client who starts with a visa application may
                return for green card processing, naturalization, family petitions, and
                eventually citizenship. Organic search that captures clients early in
                the immigration journey builds long-term relationships.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Immigration law keyword benchmarks
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Immigration Lawyer Los Angeles", kd: "80", cpc: "$76" },
                    { label: "Immigration Attorney Miami", kd: "78", cpc: "$72" },
                    { label: "Green Card Lawyer Chicago", kd: "71", cpc: "$64" },
                    { label: "Deportation Defense Attorney NYC", kd: "74", cpc: "$68" },
                    { label: "Abogado de Inmigración [City] (Spanish)", kd: "52", cpc: "$48" },
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
                  Illustrative estimates. Spanish-language KD is typically 15-25 points lower than English equivalents. Actual values vary.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">The multilingual advantage</h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Spanish-speaking immigration clients searching in Spanish encounter
                      dramatically less competition than English searchers. Bilingual firms
                      that have invested in Spanish content and Spanish-language backlinks
                      dominate these SERPs and capture high-intent clients that English-only
                      competitors cannot reach.
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
            Recommended Products for Immigration Law SEO
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Immigration law SEO benefits from a dual-language approach. English link
            building establishes baseline authority; multilingual links and content
            unlock the Spanish-language opportunity that most competitors have not pursued.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                slug: "blogger-outreach",
                name: "Blogger Outreach (DR30-50)",
                tagline: "Editorial placements in English-language legal and general authority sites to build domain-level authority.",
                badge: "Core strategy",
              },
              {
                slug: "multilingual-links",
                name: "Multilingual Links",
                tagline: "Spanish-language backlinks from relevant Hispanic community, immigration, and news publications - a high-leverage, underutilized opportunity.",
                badge: "Competitive edge",
              },
              {
                slug: "content-writing",
                name: "Legal Content Writing",
                tagline: "Immigration practice pages, visa type pages, green card and citizenship content written to rank and demonstrate expertise.",
                badge: "Content foundation",
              },
              {
                slug: "content-plan",
                name: "Content Plan",
                tagline: "Map all immigration keyword opportunities - English and Spanish - to build a bilingual content strategy that covers the full funnel.",
                badge: "Strategy",
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
            Content Strategy for Immigration Law Firms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Immigration law content must cover both the full range of immigration
            pathways and the geographic and linguistic diversity of the target audience.
            A bilingual content architecture is increasingly the standard for firms
            competing in markets with significant Spanish-speaking populations.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Core Immigration Law Page",
                desc: "The main \"immigration lawyer [city]\" page establishing the firm's full scope of services. Primary link target. Should cover the range of immigration matters handled and the firm's track record.",
                priority: "Priority 1",
              },
              {
                title: "Visa Type Pages",
                desc: "Dedicated pages for H-1B, L-1, O-1, EB-5, family visa, fiance visa, and other common visa categories. Each category has its own search volume and audience - generic \"visa\" content underperforms specialized pages.",
                priority: "Priority 1",
              },
              {
                title: "Green Card and Permanent Residency",
                desc: "Family-based, employment-based, and other green card pathways each warrant dedicated pages. Green card is among the highest-volume and highest-intent keyword clusters in immigration law.",
                priority: "Priority 1",
              },
              {
                title: "Deportation Defense and Removal",
                desc: "High-urgency, high-intent content for clients facing removal proceedings. These searchers need immediate counsel and convert at high rates. Pages should cover the process, timelines, and available defenses.",
                priority: "Priority 2",
              },
              {
                title: "Citizenship and Naturalization",
                desc: "N-400 application, naturalization eligibility, citizenship test preparation, and dual citizenship pages. Growing search volume as long-term residents pursue naturalization.",
                priority: "Priority 2",
              },
              {
                title: "Spanish-Language Versions",
                desc: "Professionally translated equivalents of all primary pages with Spanish-specific hreflang implementation. Not auto-translated - quality Spanish content is required to rank and convert Spanish-speaking clients.",
                priority: "Priority 2",
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

      {/* Multilingual Link Building Spotlight */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Spanish-Language Link Building Opportunity
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Multilingual link building is one of the most underutilized competitive advantages
            available to immigration law firms. Here is why it works:
          </p>
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {[
              {
                title: "Lower competition",
                desc: "Spanish-language immigration keyword competition is materially lower than English equivalents. KD scores 15-25 points below comparable English terms are common. Reaching page one requires fewer resources.",
              },
              {
                title: "Underserved audience",
                desc: "Spanish-speaking immigration clients searching in Spanish face fewer quality options than English speakers. A firm with well-executed Spanish content and authentic Spanish-source backlinks stands out clearly.",
              },
              {
                title: "Trust signals that convert",
                desc: "Backlinks from Spanish-language community sites, Hispanic business organizations, and immigration advocacy groups signal cultural authenticity to the target audience - and relevance signals to Google.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-amber-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-amber-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Implementation note</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Effective Spanish-language SEO requires proper hreflang implementation on
                  the technical side, professionally written (not auto-translated) Spanish content,
                  and backlinks from Spanish-language sources with real readership. Machine translation
                  alone does not create the content quality or link profile that drives rankings in
                  this audience segment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Patterns */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Top-Ranking Immigration Law Competitors Look Like
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            The firms that dominate immigration law SERPs in bilingual markets share
            a consistent pattern - comprehensive coverage of both languages, backed
            by an editorial link profile that includes Spanish-language sources.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">English-only competitor profile</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "60\u2013150" },
                  { metric: "Median linking DR", value: "DR 30\u201350" },
                  { metric: "Spanish content", value: "Minimal or none" },
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
              <h3 className="font-bold text-gray-900 mb-4">Bilingual market leader profile</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "80\u2013160 (mixed languages)" },
                  { metric: "Median linking DR", value: "DR 30\u201350" },
                  { metric: "Spanish content", value: "Full parallel site or section" },
                  { metric: "Monthly link cadence", value: "5\u201310 links/month (EN+ES)" },
                ].map((row) => (
                  <div key={row.metric} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{row.metric}</span>
                    <span className="font-semibold text-amber-700">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Immigration Law SEO - Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is Spanish-language SEO worth the investment for immigration law firms?",
                a: "For firms in markets with significant Spanish-speaking populations, yes - it is one of the highest-ROI SEO investments available. Spanish-language immigration keyword competition is materially lower than English equivalents, and the audience is large and underserved. Firms that have built bilingual content and Spanish-language backlinks typically capture market share that English-only competitors cannot reach at any budget level.",
              },
              {
                q: "How does Google handle Spanish-language pages on an English law firm site?",
                a: "Google can serve Spanish-language content to Spanish-speaking searchers when hreflang tags are correctly implemented. Hreflang tells Google which language version of a page to serve to users based on their language and location settings. Proper implementation is essential - without it, your Spanish pages may not receive the organic visibility they earn. A content plan that includes hreflang architecture is recommended before investing in Spanish content production.",
              },
              {
                q: "What types of backlinks are most effective for immigration law SEO?",
                a: "For English rankings, editorial placements in legal, news, and general authority publications at DR30-50 are the primary vehicle. For Spanish rankings, backlinks from Spanish-language community sites, Hispanic business associations, immigration advocacy organizations, and Spanish-language news outlets provide both link equity and audience signal. The combination of both language profiles creates a competitive moat that is difficult for monolingual competitors to close.",
              },
              {
                q: "Should deportation defense have its own dedicated page?",
                a: "Yes, and it is often one of the highest-urgency pages on an immigration firm's site. Clients facing removal proceedings search with immediate intent and are highly motivated to engage counsel quickly. A dedicated page covering the removal process, available defenses, emergency stay of removal, and what to do if served with removal papers serves both the content need and conversion opportunity. These searchers are at maximum urgency - a well-executed page converts at very high rates.",
              },
              {
                q: "How do policy changes affect immigration law SEO?",
                a: "Policy changes create surge search events that reward firms with established topical authority. When visa processing backlogs, travel bans, or policy shifts make news, search volume for related immigration terms spikes. Firms that have already built content and rankings for relevant topics capture this surge traffic. Publishing timely analysis of policy changes also earns natural backlinks from news organizations and advocacy groups, which further builds authority.",
              },
              {
                q: "How long does it take to rank for immigration law keywords?",
                a: "In most markets, 6-12 months of consistent investment reaches competitive rankings for core immigration terms. The Spanish-language opportunity is faster - firms building bilingual content alongside an English baseline often see Spanish rankings emerge within 3-6 months because the competition is lower. Policy-driven content can rank within days if a firm already has established domain authority in the immigration topic area.",
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
        headline="Ready to build authority for immigration law - in English and Spanish?"
        subheadline="Link building, multilingual links, and content services for immigration firms competing in bilingual markets."
        primaryCta={{ label: "View All Pricing", href: "/pricing" }}
        secondaryCta={{ label: "Explore Multilingual Links", href: "/products/multilingual-links" }}
      />
    </>
  );
}
