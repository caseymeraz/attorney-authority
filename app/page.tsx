import type { Metadata } from "next";
import Link from "next/link";
import { Scale, FileText, Newspaper, BarChart3, CheckCircle, ArrowRight, Shield, Clock, TrendingUp } from "lucide-react";
import StatBar from "@/components/shared/stat-bar";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Attorney Authority  -  Law Firm SEO & Link Building Services",
  description:
    "The only SEO platform built exclusively for law firms. Transparent, a-la-carte pricing on DR-tiered link building, legal content writing, press releases, and digital PR. Build your firm's authority.",
  alternates: {
    canonical: "https://attorneyauthority.com",
  },
};

const services = [
  {
    icon: Scale,
    title: "Law Firm Link Building",
    description:
      "DR-tiered blogger outreach and niche edit placements on editorially vetted sites. Choose the domain rating that matches your competitive landscape  -  from local DR10+ links to DR60+ national authority placements.",
    href: "/services/law-firm-link-building",
    products: ["Blogger Outreach", "Niche Edits", "Multilingual Links"],
  },
  {
    icon: FileText,
    title: "Legal Content Writing",
    description:
      "Human-written, Your Money Your Life (YMYL)-compliant content for practice area pages, blog posts, FAQs, and city landing pages. Optimized for natural language processing (NLP) signals and E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) compliance from day one.",
    href: "/services/legal-content-writing",
    products: ["Article Writing", "Keyword Research", "Content Plans"],
  },
  {
    icon: Newspaper,
    title: "Law Firm Digital PR",
    description:
      "From basic press release distribution to full digital PR campaigns earning coverage on national publications. Build the brand authority and E-E-A-T signals that YMYL rankings require.",
    href: "/services/law-firm-digital-pr",
    products: ["Press Releases", "Brand Mentions", "Digital PR Campaigns"],
  },
  {
    icon: BarChart3,
    title: "SEO Strategy Tools",
    description:
      "Data-driven keyword research reports and content plans built specifically for law firm topics  -  practice areas, local markets, and the competitive gaps your competitors aren't filling.",
    href: "/services/law-firm-seo-tools",
    products: ["Keyword Research", "Content Plans", "Citation Building"],
  },
];

const differentiators = [
  {
    icon: Shield,
    title: "Legal Niche Only",
    description:
      "Every service is calibrated for law firm websites  -  YMYL content standards, bar compliance awareness, and the practice-area specificity that generic SEO agencies skip.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description:
      "Every price is published. Every delivery timeline is stated. You know exactly what you're getting before you order  -  no discovery calls required.",
  },
  {
    icon: Clock,
    title: "Guaranteed Delivery",
    description:
      "Every product ships with a stated delivery window. DR-tiered links: 17 days. Content writing: 7 days. Press releases: 10 days. Digital PR: 45 days.",
  },
  {
    icon: TrendingUp,
    title: "ROI-Framed Strategy",
    description:
      "A personal injury case is worth $50,000–$500,000 in attorney fees. We frame every link and content investment in terms of case acquisition value  -  not vanity metrics.",
  },
];

const practiceAreas = [
  { label: "Personal Injury", href: "/practice-areas/personal-injury" },
  { label: "Criminal Defense", href: "/practice-areas/criminal-defense" },
  { label: "Family Law", href: "/practice-areas/family-law" },
  { label: "Estate Planning", href: "/practice-areas/estate-planning" },
  { label: "Business Law", href: "/practice-areas/business-law" },
  { label: "Immigration Law", href: "/practice-areas/immigration-law" },
  { label: "Workers Compensation", href: "/practice-areas/workers-compensation" },
  { label: "DUI Defense", href: "/practice-areas/dui-defense" },
];

const featuredProducts = [
  {
    name: "Blogger Outreach",
    tagline: "Editorial backlinks from real, DR-verified websites",
    priceFrom: "$144",
    delivery: "17 days",
    href: "/products/blogger-outreach",
  },
  {
    name: "Niche Edits",
    tagline: "Links inserted into existing indexed content for faster authority",
    priceFrom: "$150",
    delivery: "17 days",
    href: "/products/niche-edits",
  },
  {
    name: "Digital PR Campaign",
    tagline: "Editorial coverage on national DR70+ publications",
    priceFrom: "$8,816",
    delivery: "45 days",
    href: "/products/digital-pr-campaign",
  },
  {
    name: "Legal Content Writing",
    tagline: "YMYL-compliant articles written by human legal writers",
    priceFrom: "$40",
    delivery: "7 days",
    href: "/products/content-writing",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-700/20 border border-amber-600/30 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Shield className="w-3.5 h-3.5" />
            Built exclusively for law firms
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Build Your Law Firm&apos;s{" "}
            <span className="text-amber-400">Authority</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transparent, a-la-carte SEO services built exclusively for law firms.
            DR-tiered link building, legal content writing, press releases, and digital
            PR  -  with pricing you can see before you order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
            >
              View All Pricing
            </Link>
            <Link
              href="/services/law-firm-link-building"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
            >
              Explore Services
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            No retainers. No long-term contracts. Order what you need, when you need it.
          </p>
        </div>
      </section>

      {/* Stat bar */}
      <StatBar />

      {/* The Law Firm SEO Problem */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Legal keywords are the most competitive in all of search
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                &quot;Personal injury lawyer Los Angeles&quot; has a keyword difficulty of 90+.
                &quot;DUI attorney Chicago&quot; costs $80–$150 per click in Google Ads. A
                single signed case is worth $50,000–$500,000 in attorney fees  -  which
                means every firm with a marketing budget is competing for the same top
                organic positions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Generic SEO agencies treat legal websites like any other client. Attorney
                Authority is built exclusively for law firms  -  every service accounts for
                YMYL standards, E-E-A-T requirements, bar association compliance, and
                the competitive keyword clusters that drive case acquisitions.
              </p>
              <Link
                href="/guides/law-firm-link-building-guide"
                className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:gap-3 transition-all text-sm"
              >
                Read the Law Firm Link Building Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-6 text-lg">
                Why law firms need specialized SEO
              </h3>
              <ul className="space-y-4">
                {[
                  "Legal content is YMYL  -  Google applies heightened quality scrutiny",
                  "E-E-A-T signals (expertise, authority, trust) directly affect rankings",
                  "A DR40+ backlink for a law firm carries different weight than for a recipe site",
                  "Practice-area keyword clusters require deep topical coverage to rank",
                  "Local map pack rankings depend on citation consistency and Google Business Profile (GBP) authority",
                  "Bar compliance limits certain promotional language generic agencies miss",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Every service, purpose-built for law firms
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We don&apos;t dilute our offering across industries. Every product on this
              platform is calibrated for the competitive realities of legal SEO.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.href}
                className="bg-white rounded-xl p-7 border border-gray-200 hover:border-amber-300 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.products.map((p) => (
                        <span
                          key={p}
                          className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-amber-700 font-semibold text-sm group-hover:gap-2.5 transition-all"
                    >
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Most ordered services</h2>
              <p className="text-gray-600 text-sm">A-la-carte pricing. No bundles required.</p>
            </div>
            <Link
              href="/products"
              className="shrink-0 text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
            >
              View all 14 products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block border border-gray-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <div className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full inline-block mb-3">
                  From {p.priceFrom}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-800 transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">{p.tagline}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Delivery: {p.delivery}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attorney Authority */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why attorneys choose us over general SEO agencies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most link building platforms serve every industry. We don&apos;t. This
              focus is what makes our services meaningfully different for law firms.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                  <d.icon className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Practice area-specific SEO
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              The keyword clusters and competitive landscape for personal injury law
              are fundamentally different from immigration law. We build services
              around that reality.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {practiceAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3.5 text-sm font-medium text-gray-700 hover:border-amber-400 hover:text-amber-800 hover:bg-amber-50 transition-all"
              >
                {area.label}
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Attorney Authority works
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            No onboarding calls. No 90-day strategy sessions before any work begins.
            Pick a service, place an order, receive your deliverable.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Browse & Select",
                description:
                  "Browse services by category or practice area. Every page shows transparent pricing and delivery timelines before you commit.",
              },
              {
                step: "02",
                title: "Provide Your Details",
                description:
                  "Submit your target URL, anchor text preferences, practice area, and any specific requirements. We handle the rest.",
              },
              {
                step: "03",
                title: "Receive Your Deliverable",
                description:
                  "Get a full placement report, content file, or campaign report delivered within the stated timeline  -  with live URLs you can verify.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-amber-400/30 mb-3">{item.step}</div>
                <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            How we compare
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            The only platform that combines transparent a-la-carte pricing with deep
            legal niche specialization.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Feature</th>
                  <th className="py-3 px-4 font-semibold text-gray-500">Generic Link Builder</th>
                  <th className="py-3 px-4 font-semibold text-gray-500">Legal Agency Retainer</th>
                  <th className="py-3 px-4 font-semibold text-amber-700 bg-amber-50 rounded-t-lg">Attorney Authority</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Legal niche only", "❌", "✅", "✅"],
                  ["Transparent pricing", "✅", "❌ Hidden", "✅"],
                  ["A-la-carte ordering", "✅", "❌ Retainer", "✅"],
                  ["DR-tiered link options", "✅", "❌", "✅"],
                  ["Practice area specificity", "❌", "⚠️ Some", "✅ Deep"],
                  ["YMYL/E-E-A-T aware", "❌", "✅", "✅"],
                  ["No long-term contracts", "✅", "❌", "✅"],
                ].map(([feature, col1, col2, col3]) => (
                  <tr key={feature as string} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-700">{feature}</td>
                    <td className="py-3 px-4 text-center text-gray-500">{col1}</td>
                    <td className="py-3 px-4 text-center text-gray-500">{col2}</td>
                    <td className="py-3 px-4 text-center font-semibold text-amber-700 bg-amber-50">{col3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guides teaser */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Free law firm SEO guides
            </h2>
            <Link
              href="/guides/law-firm-link-building-guide"
              className="shrink-0 text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
            >
              All guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "The Law Firm Link Building Guide",
                desc: "5,000+ words covering DR tiers, anchor text strategy, YMYL compliance, and the monthly cadence that actually moves legal rankings.",
                href: "/guides/law-firm-link-building-guide",
                badge: "5,000+ words",
              },
              {
                title: "Domain Rating Guide for Lawyers",
                desc: "What DR means, why it matters for legal SERPs, and which tier you should be targeting given your current authority and competition level.",
                href: "/guides/domain-rating-guide-lawyers",
                badge: "Beginner-friendly",
              },
              {
                title: "Law Firm SEO Checklist",
                desc: "A complete on-page, technical, and off-page SEO checklist built specifically for law firm websites  -  with YMYL and E-E-A-T criteria included.",
                href: "/guides/law-firm-seo-checklist",
                badge: "Checklist format",
              },
              {
                title: "Legal Content Strategy Guide",
                desc: "How to build topical authority in your practice area through pillar content, cluster pages, and a publishing cadence that signals expertise to Google.",
                href: "/guides/legal-content-strategy",
                badge: "Strategy guide",
              },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                  {guide.badge}
                </span>
                <h3 className="font-bold text-gray-900 mt-3 mb-2 group-hover:text-amber-800 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{guide.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-amber-700">
                  Read the guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
