import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, Shield } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "DUI Defense Law Firm SEO & Link Building | Attorney Authority",
  description:
    "DUI defense is one of the most competitive niches in legal SEO. KD 75-90 in major metros, CPC $80-$120. Build the link profile and content architecture required to rank for DUI attorney keywords.",
  alternates: {
    canonical: "https://attorneyauthority.com/practice-areas/dui-defense",
  },
};

export default function DuiDefensePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Practice Areas", href: "/practice-areas" },
              { label: "DUI Defense", href: "/practice-areas/dui-defense" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-red-900/30 border border-red-700/40 text-red-400 px-3 py-1 rounded-full font-semibold">
              Very high competition
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              KD 75&ndash;90 in major metros
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              CPC $80&ndash;$120
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            DUI Defense Law Firm SEO &amp; Link Building
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            DUI is the most competitive sub-niche within criminal defense and one of
            the most aggressively contested keyword clusters in all of legal SEO.
            High search volume, high urgency, and high case fees have driven advertiser
            CPCs to $80&ndash;$120 in major markets. Organic rankings deliver the same
            traffic at zero marginal cost per click - but require a serious, sustained
            link building and content strategy to achieve.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Link Building Pricing
            </Link>
            <Link
              href="/products/content-plan"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Content Plan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Landscape */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The DUI Defense SEO Landscape
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                DUI defense is unique in legal SEO for its combination of high search
                volume, high urgency, and well-established specialized competitors who
                have invested in SEO for years. In major metros, &ldquo;DUI attorney
                [city]&rdquo; and &ldquo;DUI lawyer [city]&rdquo; consistently carry
                KD 75&ndash;90 - approaching personal injury levels of competition but
                with the advantage that many general criminal defense firms have not
                built dedicated DUI content and link profiles.
              </p>
              <p>
                DUI clients search immediately after a charge or arrest, typically within
                24&ndash;48 hours of the incident. The urgency is extreme - clients face
                license suspension deadlines, arraignment dates, and the prospect of
                criminal record consequences. This urgency translates to high conversion
                rates for organic traffic: a firm ranking top-3 for DUI keywords converts
                at some of the highest rates in legal.
              </p>
              <p>
                The DUI keyword landscape is also highly expandable. Beyond core terms,
                there are distinct clusters for first offense DUI, second/third offense,
                commercial DUI, underage DUI, DUI consequences (license suspension, jail
                time, insurance impact), and DUI process pages (breath test, field sobriety,
                DMV hearing). Each represents a distinct search intent and ranking opportunity.
              </p>
              <p>
                Firms that build a comprehensive DUI content architecture and back it with
                consistent high-DR link acquisition are positioned to dominate the full
                DUI keyword landscape in their market - not just the primary terms but the
                entire ecosystem of related queries that feed qualified clients into the funnel.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  DUI defense keyword benchmarks
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "DUI Attorney Los Angeles", kd: "89", cpc: "$118" },
                    { label: "DUI Lawyer Chicago", kd: "87", cpc: "$112" },
                    { label: "DUI Attorney Phoenix", kd: "85", cpc: "$106" },
                    { label: "DUI Defense Lawyer Houston", kd: "82", cpc: "$98" },
                    { label: "DUI Attorney [Mid-Size City]", kd: "75", cpc: "$82" },
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
                    <h3 className="font-semibold text-amber-900 mb-1">Peak urgency = peak conversion</h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      DUI clients have a hard deadline pressure - the 10-day DMV hearing
                      request window in California, for example, creates an immediate need
                      to engage counsel. This urgency drives conversion rates that rival
                      personal injury for organic DUI traffic, making rankings exceptionally
                      valuable per click.
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
            Recommended Products for DUI Defense SEO
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            DUI defense requires the same sustained high-DR link acquisition as personal
            injury in major markets. Content architecture covering the full DUI keyword
            ecosystem is equally important.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                slug: "blogger-outreach",
                name: "Blogger Outreach (DR40-60)",
                tagline: "High-authority editorial placements that match the link profiles of well-ranking dedicated DUI firms.",
                badge: "Core strategy",
              },
              {
                slug: "niche-edits",
                name: "Niche Edits (DR40-60)",
                tagline: "Links into established legal and news content already indexed by Google - efficient link equity transfer for DUI pages.",
                badge: "High impact",
              },
              {
                slug: "content-writing",
                name: "Legal Content Writing",
                tagline: "DUI offense pages, consequences pages, process pages, and city content written for the full DUI keyword ecosystem.",
                badge: "Content depth",
              },
              {
                slug: "content-plan",
                name: "Content Plan",
                tagline: "Map every DUI keyword cluster - first offense, multiple offense, commercial, consequences, city pages - before starting content production.",
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
            Content Strategy for DUI Defense Firms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            DUI has one of the richest content opportunity landscapes in criminal defense.
            The keyword ecosystem extends far beyond the primary &ldquo;DUI attorney [city]&rdquo;
            term into specific offense types, DUI consequences, the legal process, and
            geographic variations. Building this full architecture creates compounding
            topical authority that supports all DUI rankings simultaneously.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Core DUI Defense Page",
                desc: "The primary \"DUI attorney [city]\" page. First link target. Must establish attorney expertise, success track record, and a clear explanation of what a DUI defense attorney does in your jurisdiction.",
                priority: "Priority 1",
              },
              {
                title: "First Offense DUI",
                desc: "A dedicated page for first-time DUI offenses - the most common charge and a distinct keyword cluster with high search volume. Cover penalties, license consequences, plea options, and defense strategies.",
                priority: "Priority 1",
              },
              {
                title: "Multiple Offense DUI",
                desc: "Second DUI offense, third DUI, and felony DUI pages. Clients facing repeat charges face more severe consequences and search with higher urgency. Distinct keyword clusters from first offense.",
                priority: "Priority 2",
              },
              {
                title: "Commercial Driver and CDL DUI",
                desc: "Commercial DUI and CDL license consequences warrant dedicated pages. Commercial drivers face career-ending license consequences that create extreme urgency to retain specialized counsel immediately.",
                priority: "Priority 2",
              },
              {
                title: "DUI Consequences Pages",
                desc: "License suspension, ignition interlock, insurance impact, employment consequences, and criminal record pages. These informational pages capture pre-arrest or early-stage research traffic and build topical authority.",
                priority: "Priority 3",
              },
              {
                title: "City and County Pages",
                desc: "City-specific DUI attorney pages targeting surrounding communities, county courthouse pages, and jurisdiction-specific pages. DUI clients strongly prefer attorneys familiar with local judges and prosecutors.",
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
            What Top-Ranking DUI Defense Competitors Look Like
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            The most competitive DUI markets are dominated by specialized DUI firms
            with years of investment in both link building and content architecture.
            These benchmarks define what it takes to compete at the top level.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Major metro DUI market leaders</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "100\u2013250" },
                  { metric: "Median linking DR", value: "DR 40\u201360" },
                  { metric: "Content pages indexed", value: "60\u2013200+" },
                  { metric: "Monthly link cadence", value: "8\u201315 links/month" },
                ].map((row) => (
                  <div key={row.metric} className="flex items-center justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{row.metric}</span>
                    <span className="font-semibold text-gray-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Mid-size market DUI leaders</h3>
              <div className="space-y-3">
                {[
                  { metric: "Referring domains", value: "50\u2013120" },
                  { metric: "Median linking DR", value: "DR 35\u201350" },
                  { metric: "Content pages indexed", value: "30\u201380" },
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
              <Shield className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">DUI specialist vs. general criminal defense</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Specialized DUI firms with dedicated DUI domains or highly focused DUI sections
                  consistently outperform general criminal defense sites for DUI keywords. Google
                  recognizes topical authority - a site with 80 pages of DUI-specific content and
                  strong DUI-relevant backlinks will typically outrank a general criminal defense
                  site with broader content coverage and even higher overall domain authority. DUI
                  is one of the practice areas where vertical specialization has the clearest SEO
                  advantage.
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
            DUI Defense SEO - Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Should a DUI defense firm have a separate website from their general criminal defense practice?",
                a: "In highly competitive markets, a dedicated DUI-focused website often outperforms a general criminal defense site for DUI keywords. Google rewards topical specialization - a site where 80-90% of content is DUI-focused signals expert authority in the niche. However, a well-structured subdomain or section of an existing site with comprehensive DUI content can also compete effectively. The key is content depth and dedicated link building targeting DUI-specific pages, regardless of the site structure chosen.",
              },
              {
                q: "What DR level do I need to compete for DUI attorney keywords in a major city?",
                a: "In major metros like Los Angeles, Chicago, or Phoenix, you need consistent DR40-60 placements to build the profile necessary to compete. Top-ranking DUI firms in these markets typically have 100-250 referring domains with a median DR in the 40-60 range. In smaller markets, DR35-50 placements are more commonly sufficient. Always audit your specific competitors first - the profile of the current top 3 results for your target keywords is your most accurate benchmark.",
              },
              {
                q: "Why are DUI keywords so expensive on paid search?",
                a: "DUI attorney keywords carry CPCs of $80-$120 because the value of a single client is high (retainer fees typically $3,000-$15,000+), the search intent is extremely commercial (someone just got arrested), and conversion rates are high. These economics make advertisers willing to pay very high per-click costs. This is exactly why organic rankings have such compelling ROI - a top-3 organic position captures 30-40% of search volume with zero per-click cost after the SEO investment.",
              },
              {
                q: "How do I build content for DUI if I also handle other criminal charges?",
                a: "Build DUI content as a distinct, comprehensive section on your site - not as one page among many criminal defense pages. At minimum, you want a core DUI page, first offense and multiple offense pages, consequences pages, and city pages. These can live on the same domain as general criminal defense content but should be linked as a coherent DUI-focused hub that demonstrates topical depth. Treat DUI as a sub-site within your domain, not just a practice area checkbox.",
              },
              {
                q: "How important is the DMV hearing angle in DUI content?",
                a: "Very important, particularly in states like California where clients have a strict 10-day window to request a DMV hearing after a DUI arrest. Content covering the DMV hearing process captures clients at peak urgency - often within 24-48 hours of arrest when they are Googling what to do next. A dedicated DMV hearing page is one of the highest-conversion pages a DUI firm can build. The combination of urgency, specificity, and high intent makes this content convert at exceptional rates.",
              },
              {
                q: "How long does DUI SEO take to generate leads?",
                a: "In competitive markets, expect 9-18 months of consistent link building and content investment before reaching top-5 rankings for primary DUI terms. Long-tail terms (first offense DUI, DUI consequences, specific city pages) often rank within 3-6 months and generate lead flow before primary terms are fully competitive. The total lead flow from the long-tail ecosystem can be substantial even before primary terms peak - which is one of the reasons a comprehensive content architecture compounds faster than single-page targeting.",
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
        headline="Ready to compete for DUI defense rankings?"
        subheadline="High-DR link building and content strategy built for one of the most competitive niches in legal SEO."
        primaryCta={{ label: "View Link Building Pricing", href: "/pricing" }}
        secondaryCta={{ label: "Explore Content Plans", href: "/products/content-plan" }}
      />
    </>
  );
}
