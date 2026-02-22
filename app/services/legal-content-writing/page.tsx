import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, ArrowRight, Scale, TrendingUp, Award } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import FaqSection from "@/components/service-pages/faq-section";
import CtaBanner from "@/components/shared/cta-banner";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Legal Content Writing Services for Law Firms | Attorney Authority",
  description:
    "E-E-A-T compliant legal content written by human writers. Practice area pages, blog posts, and pillar guides optimized for YMYL standards and topical authority. 7-day delivery.",
  alternates: {
    canonical: "https://attorneyauthority.com/services/legal-content-writing",
  },
  openGraph: {
    title: "Legal Content Writing Services for Law Firms | Attorney Authority",
    description:
      "Human-written legal content built for YMYL compliance and E-E-A-T authority. Practice area pages, blog posts, content plans, and keyword research for law firms.",
    images: [{ url: "/og/legal-content-writing.png", width: 1200, height: 630 }],
  },
};

const contentProducts = PRODUCTS.filter((p) => p.category === "content");

const faqs = [
  {
    q: "Why does legal content need to meet a higher standard than other industries?",
    a: "Google's Search Quality Evaluator Guidelines classify legal content as YMYL - Your Money Your Life. Legal decisions can directly affect a person's rights, finances, and freedom. This classification means Google applies stricter quality thresholds: content must demonstrate genuine Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). A general content agency writing articles about kitchen gadgets faces different quality scrutiny than one writing about criminal defense strategy. For law firms, meeting this bar is not optional - it is the threshold for competing in legal SERPs.",
  },
  {
    q: "Is your content written by AI or human writers?",
    a: "Every piece is human-written by experienced legal content writers. While we use AI for research and outline assistance, no article leaves our workflow without human drafting, editing, and review. This matters specifically for YMYL content: Google's quality guidelines apply the highest scrutiny to automatically generated content in legal contexts. Human authorship with demonstrated expertise is not just a differentiator - it is the requirement for passing quality evaluation on legal pages.",
  },
  {
    q: "What does E-E-A-T compliance mean in practice for legal content?",
    a: "E-E-A-T - Experience, Expertise, Authoritativeness, Trustworthiness - is Google's framework for evaluating content quality on YMYL topics. In practice this means: content uses accurate legal terminology and jurisdiction-specific language, it demonstrates genuine understanding of how legal processes work, it benefits significantly from attorney bylines with verifiable credentials, it cites authoritative sources, and the publishing site itself demonstrates authority through backlinks and brand signals. We write content that satisfies the on-page E-E-A-T requirements; pairing our content with attorney bylines and your firm's overall authority strategy maximizes impact.",
  },
  {
    q: "What word count do law firm pages need to rank?",
    a: "Word count is a proxy for topical depth, not a ranking factor in itself. For competitive practice area pages, thorough coverage typically requires 1,200-2,500 words. Location pages for lower-competition terms can rank with 800-1,200 words when content quality is high. Blog posts and FAQ content generally perform best in the 1,000-1,500 word range. Our standard content unit is approximately 1,000 words; for longer pillar pages, ordering multiple units with combined word count specifications is the recommended approach.",
  },
  {
    q: "What is the difference between a content plan and content writing?",
    a: "Content writing produces the finished articles ready to publish. A content plan is the strategic document that maps your keyword research into a publishing roadmap - identifying which pages to create first, how they interlink, and what the pillar-cluster hierarchy looks like. For most law firms, the right sequence is: keyword research first to identify opportunities, then a content plan to structure the publishing strategy, then content writing to execute. Ordering all three together gives you a complete content program rather than a collection of disconnected articles.",
  },
  {
    q: "Can you write content for multiple practice areas?",
    a: "Yes. We write content across all major legal practice areas including personal injury, criminal defense, family law, immigration, estate planning, workers' compensation, business law, and DUI defense. Each practice area requires distinct terminology, keyword clusters, and content structures. When ordering, specify your practice area and any sub-specialties so your writer can apply appropriate legal context and avoid generic boilerplate.",
  },
];

export default function LegalContentWritingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Legal Content Writing", href: "/services/legal-content-writing" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Human writers
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              E-E-A-T compliant
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              7-day delivery
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Legal Content Writing for Law Firms
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Legal content is not a commodity. Google classifies law firm websites as YMYL -
            Your Money Your Life - and applies stricter quality thresholds than almost any
            other content category. Generic AI-generated articles do not meet this bar.
            Human-written, E-E-A-T compliant content does.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Content Writing Pricing
            </Link>
            <Link
              href="/guides/legal-content-strategy"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Read the Content Strategy Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why legal content matters */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Legal Content Is the Highest-Stakes Content on the Web
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Google&apos;s Search Quality Evaluator Guidelines single out legal content as
                YMYL - content where low quality could directly harm readers. A person who
                reads inaccurate legal advice about their criminal case, their custody
                situation, or their injury claim can suffer real financial or legal
                consequences.
              </p>
              <p>
                This means Google applies its E-E-A-T framework most rigorously to legal
                pages. Every piece of legal content your firm publishes is evaluated for
                demonstrated expertise, accurate information, and credible sourcing. Generic
                content farms and AI-generated filler fail this evaluation regardless of
                word count or keyword density.
              </p>
              <p>
                Topical authority - the concept of building deep, interconnected coverage
                across a practice area - is now one of the most powerful SEO strategies
                for law firms. A firm that publishes 50 interconnected, high-quality
                articles about personal injury law signals domain expertise. A firm with 5
                thin pages does not.
              </p>
              <p>
                Attorney Authority&apos;s content service is built exclusively for legal
                clients. Our writers understand practice area terminology, legal process
                language, and the keyword clusters that drive case inquiries - not just
                generic SEO metrics.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  The AI content risk for YMYL sites
                </h3>
                <div className="space-y-3">
                  {[
                    { risk: "Google Helpful Content system penalties", level: "High risk" },
                    { risk: "Quality rater E-E-A-T review failure", level: "High risk" },
                    { risk: "Inaccurate legal information in content", level: "High risk" },
                    { risk: "Thin content devaluation signals", level: "Medium risk" },
                    { risk: "No demonstrated attorney attribution", level: "Medium risk" },
                  ].map((item) => (
                    <div key={item.risk} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{item.risk}</span>
                      <span
                        className={`font-semibold text-xs px-2 py-0.5 rounded ${
                          item.level === "High risk"
                            ? "text-red-700 bg-red-50"
                            : "text-amber-700 bg-amber-50"
                        }`}
                      >
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">
                      The topical authority advantage
                    </h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Law firms that publish comprehensive, accurate, human-written content
                      across all practice area sub-topics consistently outrank competitors
                      with fewer pages - even when the competitor has more backlinks.
                      Content depth is an increasingly weighted E-E-A-T signal.
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
            Legal Content Writing Products
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            From individual articles to complete keyword-driven content strategies - each
            product with transparent pricing and stated delivery timelines.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contentProducts.map((p) => {
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

      {/* Comparison table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Legal Content Writing vs. Generic Content Services
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            YMYL compliance and E-E-A-T standards create a significant quality gap between
            legal-specialist content and general writing services.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                    Criteria
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-500">
                    Generic Content Agency
                  </th>
                  <th className="py-3 px-4 font-semibold text-amber-700 bg-amber-50 rounded-t-lg">
                    Attorney Authority
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["YMYL compliance awareness", "❌ Not considered", "✅ Built into every brief"],
                  ["E-E-A-T signal integration", "❌ Rarely addressed", "✅ Standard in all content"],
                  ["Legal accuracy review", "❌ General editing only", "✅ Practice-area terminology verified"],
                  ["Practice area expertise", "❌ Generalist writers", "✅ Legal content specialists"],
                  ["Attorney byline strategy", "❌ Not addressed", "✅ Guidance included with delivery"],
                  ["Keyword cluster targeting", "⚠️ Basic keyword use", "✅ Full NLP optimization"],
                  ["Internal linking blueprint", "❌ Not included", "✅ Included with each article"],
                  ["AI content risk", "⚠️ Common in budget services", "✅ 100% human-written, verified"],
                ].map(([criteria, col1, col2]) => (
                  <tr key={criteria as string} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-700">{criteria}</td>
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
            Our Legal Content Quality Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Shield,
                title: "Practice area brief",
                desc: "Every order includes a detailed intake capturing your practice area, target keywords, geographic market, and any specific legal points to address.",
              },
              {
                icon: CheckCircle,
                title: "Legal writer assignment",
                desc: "Articles are assigned to writers with documented experience in your specific practice area - not a general pool of generalist freelancers.",
              },
              {
                icon: Scale,
                title: "E-E-A-T structure",
                desc: "Every piece is structured to demonstrate experience (specific examples), expertise (accurate terminology), and authority (proper citations and sourcing).",
              },
              {
                icon: Award,
                title: "Copyscape verification",
                desc: "All content is run through originality checking to ensure 100% unique delivery. No spun or repurposed content is ever submitted.",
              },
              {
                icon: TrendingUp,
                title: "NLP optimization",
                desc: "Content is reviewed for natural language processing signals - semantic keyword coverage, entity mentions, and topic completeness beyond primary keywords.",
              },
              {
                icon: CheckCircle,
                title: "Revision guarantee",
                desc: "Unlimited revisions within a 10-day amendment window. If the content does not meet your standards, we fix it at no additional charge.",
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
        headline="Legal Content Writing - Frequently Asked Questions"
      />

      {/* CTA */}
      <CtaBanner
        headline="Ready to build topical authority for your law firm?"
        subheadline="Browse transparent pricing on legal content writing, keyword research, and content planning - no retainers required."
        primaryCta={{ label: "View Content Writing Pricing", href: "/pricing" }}
        secondaryCta={{
          label: "Read the Content Strategy Guide",
          href: "/guides/legal-content-strategy",
        }}
      />
    </>
  );
}
