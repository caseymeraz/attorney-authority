import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, ArrowRight, Scale, TrendingUp, Award } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import FaqSection from "@/components/service-pages/faq-section";
import CtaBanner from "@/components/shared/cta-banner";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Law Firm Digital PR Services - Earned Media for Attorneys | Attorney Authority",
  description:
    "Earned media coverage for law firms. Digital PR campaigns, brand mentions, press release distribution, and community mentions that build DR70+ authority and E-E-A-T trust signals.",
  alternates: {
    canonical: "https://attorneyauthority.com/services/law-firm-digital-pr",
  },
  openGraph: {
    title: "Law Firm Digital PR Services - Earned Media for Attorneys | Attorney Authority",
    description:
      "DR70+ editorial placements through earned media campaigns for law firms. Digital PR, brand mentions, press releases, and community mentions with transparent pricing.",
    images: [{ url: "/og/law-firm-digital-pr.png", width: 1200, height: 630 }],
  },
};

const prProducts = PRODUCTS.filter((p) => p.category === "pr");

const faqs = [
  {
    q: "What is digital PR for law firms and how is it different from link building?",
    a: "Digital PR earns editorial coverage by pitching newsworthy story angles to journalists and editors at major publications - not by purchasing placements or paying for sponsored content. Traditional link building (blogger outreach, niche edits) secures links from established third-party websites. Digital PR goes a step further by targeting major publications - Forbes, USA Today, Bloomberg, national legal news outlets - that would never accept direct payment for a link. The result is the highest-authority backlinks available in any industry, alongside genuine brand credibility that also influences prospective clients who search your firm name.",
  },
  {
    q: "What types of publications can law firms get placed in through digital PR?",
    a: "Target publications depend on the campaign angle, but law firm digital PR placements have appeared in national outlets including Forbes, Business Insider, U.S. News & World Report, legal trade publications, regional business journals, and major metropolitan news sites. The common denominator is DR70+ and genuine editorial standards. The story angle determines which publications are pitched - legal data studies tend to get picked up by national news, while local firm milestones fit regional business outlets.",
  },
  {
    q: "What story angles work for law firm digital PR?",
    a: "The strongest angles are data-driven, timely, or counterintuitive. Original research - court record analysis, settlement data, injury statistics by city - consistently earns editorial coverage because journalists need accurate data to cite. Expert commentary on trending legal news (Supreme Court decisions, legislation changes, high-profile cases) earns quick placements in news cycles. Milestone announcements (major case outcomes, firm expansion, notable hires) fit regional business outlets. We develop the angle, write the pitch, and manage all journalist outreach.",
  },
  {
    q: "How long does a digital PR campaign take?",
    a: "Standard digital PR campaigns run 45 days. Editorial lead times at major publications are genuinely long - a journalist needs to verify the pitch, get editorial approval, schedule the piece, and publish. Typical cycle from accepted pitch to publication is 3-6 weeks. We provide campaign progress updates throughout the window, and most campaigns secure their first placements within 2-3 weeks of launch. The 45-day window is the delivery guarantee; final placements sometimes appear after that as editorial backlogs clear.",
  },
  {
    q: "Is digital PR paid placement or earned media?",
    a: "Earned media only. We pitch journalists with genuine story angles - we never pay for coverage directly. This is the distinction that makes digital PR links so valuable: they pass Google's editorial quality assessment at the highest level. Paid placements (native advertising, sponsored content) are typically marked as such and carry no-follow attributes. Earned editorial links from major publications are dofollow and carry the full authority of the publication's domain rating.",
  },
  {
    q: "What is the ROI difference between digital PR and blogger outreach links?",
    a: "A single DR80+ link from a national publication can have more ranking impact than 20-30 DR30 blogger outreach links. The authority multiplier at the top of the DR scale is exponential, not linear. Digital PR is also the only type of link building that builds brand credibility with prospective clients simultaneously - if a potential client Googles your firm name and finds a Forbes or Business Insider mention, that is a trust signal that directly influences contact rates. The cost per link is higher than blogger outreach, but the authority per dollar often favors digital PR for competitive legal keywords.",
  },
];

export default function LawFirmDigitalPrPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Law Firm Digital PR", href: "/services/law-firm-digital-pr" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Earned media only
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              DR70+ publications
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              45-day campaigns
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Law Firm Digital PR Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            The most powerful backlinks in legal SEO do not come from outreach campaigns -
            they come from journalists choosing to cite your firm in major publications.
            Digital PR earns those editorial links through story angles, data, and expert
            commentary. The result: DR70+ authority and brand credibility that link building
            alone cannot produce.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Digital PR Pricing
            </Link>
            <Link
              href="/products/digital-pr-campaign"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              See Campaign Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why digital PR matters */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Earned Media Is the Highest-Value Link Acquisition Strategy for Law Firms
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Domain Rating operates on a logarithmic scale. The difference between a DR50
                and a DR80 link is not 30 points of authority - it is orders of magnitude
                more link equity. A single placement in Forbes, Bloomberg, or USA Today
                can deliver more ranking power than dozens of standard blogger outreach
                placements.
              </p>
              <p>
                For law firms competing on the most valuable keywords in organic search -
                &ldquo;personal injury lawyer Los Angeles,&rdquo; &ldquo;mass tort attorney,&rdquo;
                &ldquo;criminal defense attorney Chicago&rdquo; - the firms in top-3 positions
                typically have a mix of high-DR editorial backlinks that cannot be replicated
                with standard link building alone.
              </p>
              <p>
                Digital PR also builds E-E-A-T in a way that pure link building cannot.
                When your attorneys are quoted as expert sources in major publications,
                Google&apos;s quality evaluation registers genuine authoritativeness - not
                just third-party citations, but actual expert recognition.
              </p>
              <p>
                Beyond SEO, earned media coverage directly influences prospective clients.
                A personal injury firm that appears in a Forbes article about accident
                settlements converts those visitors at a meaningfully higher rate than
                firms without visible media presence.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Link authority comparison by type
                </h3>
                <div className="space-y-3">
                  {[
                    { type: "Digital PR (DR70-90+)", authority: "Highest", note: "Major publications" },
                    { type: "Brand Mentions (DR50-70)", authority: "High", note: "Editorial sites" },
                    { type: "Blogger Outreach (DR30-60)", authority: "Medium-High", note: "Vetted publishers" },
                    { type: "Niche Edits (DR10-60)", authority: "Medium", note: "Aged content" },
                    { type: "Press Releases", authority: "Brand signal", note: "Credibility only" },
                  ].map((item) => (
                    <div
                      key={item.type}
                      className="flex items-center justify-between text-sm"
                    >
                      <div>
                        <span className="text-gray-700 font-medium">{item.type}</span>
                        <span className="text-gray-400 text-xs ml-2">{item.note}</span>
                      </div>
                      <span className="font-semibold text-amber-700 text-xs">{item.authority}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Authority levels are relative - all types contribute to a healthy, diversified link profile.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">
                      The dual-channel benefit
                    </h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Digital PR is the only link building strategy that simultaneously
                      builds organic rankings AND brand credibility with prospective clients.
                      A Forbes mention in your pitch deck, your intake form, or your
                      homepage increases contact and sign rates - SEO and conversion working
                      together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Law Firm Digital PR Products
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Four distinct earned media and brand authority channels - from full editorial
            campaigns to press distribution and community brand presence.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {prProducts.map((p) => {
              const minPrice = Math.min(...p.tiers.map((t) => t.ourPrice));
              const maxDelivery = Math.max(...p.tiers.map((t) => t.ourDelivery));
              return (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-md transition-all"
                >
                  <div className="text-xs font-semibold text-amber-700 mb-1">
                    From ${minPrice.toLocaleString()}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-amber-800 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{p.tagline}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>
                      {p.tiers.length} tier{p.tiers.length !== 1 ? "s" : ""} available
                    </span>
                    <span>Up to {maxDelivery} days</span>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-amber-700">
                    View details{" "}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison table: Digital PR vs Link Building */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Digital PR vs. Traditional Link Building
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Each strategy has a distinct role. Understanding the differences helps you
            allocate your budget for maximum SEO and business impact.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="py-3 px-4 font-semibold text-gray-500">Link Building</th>
                  <th className="py-3 px-4 font-semibold text-amber-700 bg-amber-50 rounded-t-lg">
                    Digital PR
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Authority level", "DR10-DR60 per placement", "DR70-DR90+ per placement"],
                  ["Link type", "Editorial, dofollow", "Editorial, dofollow"],
                  ["Cost per link", "$144-$1,140", "$2,000-$3,000+ per placement"],
                  ["Timeline", "14-17 days", "30-45 days"],
                  ["Brand credibility impact", "Minimal", "High - major publication logos"],
                  ["Content requirement", "Outreach brief provided", "Original data or story angle"],
                  ["Volume possible", "4-15+ links/month", "3-5 placements/campaign"],
                  ["Best for", "Baseline authority building", "Breaking into top-3 for competitive keywords"],
                ].map(([factor, col1, col2]) => (
                  <tr key={factor as string} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-700">{factor}</td>
                    <td className="py-3 px-4 text-center text-gray-500">{col1}</td>
                    <td className="py-3 px-4 text-center font-medium text-amber-700 bg-amber-50">
                      {col2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quality process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How We Execute Digital PR for Law Firms
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Shield,
                title: "Story angle development",
                desc: "We identify the most pitchable story angle for your firm based on your practice area, current news cycle, and available data. Angle quality determines placement quality.",
              },
              {
                icon: CheckCircle,
                title: "Journalist-grade pitching",
                desc: "Pitches are written to editorial standards - concise, newsworthy, and targeted to specific journalists covering legal and business topics at relevant outlets.",
              },
              {
                icon: Scale,
                title: "Earned-only placements",
                desc: "Every placement is earned editorial coverage. We do not pay for links, use sponsored content labels, or place in link schemes. This keeps your link profile clean.",
              },
              {
                icon: Award,
                title: "DR70+ publication targeting",
                desc: "Our campaign targets publications with verified DR70+ ratings and genuine editorial audiences - not news aggregators or press release syndication networks.",
              },
              {
                icon: TrendingUp,
                title: "Campaign progress reporting",
                desc: "You receive campaign updates throughout the 45-day window, including pitches sent, journalist responses, and placements secured as they happen.",
              },
              {
                icon: CheckCircle,
                title: "White-label placement report",
                desc: "Final delivery includes a placement report with live URLs, publication DR at placement, and anchor text - all independently verifiable in Ahrefs or SEMrush.",
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

      {/* FAQ */}
      <FaqSection
        faqs={faqs}
        headline="Law Firm Digital PR - Frequently Asked Questions"
      />

      {/* CTA */}
      <CtaBanner
        headline="Ready to earn editorial coverage for your law firm?"
        subheadline="Browse digital PR campaign pricing and brand authority products - all with transparent, per-campaign pricing."
        primaryCta={{ label: "View Digital PR Pricing", href: "/pricing" }}
        secondaryCta={{ label: "See Campaign Details", href: "/products/digital-pr-campaign" }}
      />
    </>
  );
}
