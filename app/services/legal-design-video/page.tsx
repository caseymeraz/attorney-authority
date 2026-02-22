import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, ArrowRight, Scale, TrendingUp, Award } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import FaqSection from "@/components/service-pages/faq-section";
import CtaBanner from "@/components/shared/cta-banner";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Legal Design & Video Services for Law Firms | Attorney Authority",
  description:
    "Explainer videos, blog-to-video conversion, and infographic design for law firm websites. Boost dwell time, earn links, and repurpose content for YouTube and social.",
  alternates: {
    canonical: "https://attorneyauthority.com/services/legal-design-video",
  },
  openGraph: {
    title: "Legal Design & Video Services for Law Firms | Attorney Authority",
    description:
      "Animated explainer videos, blog-to-video conversion, and infographic design built for law firm SEO. Improve engagement, earn backlinks, and expand to YouTube.",
    images: [{ url: "/og/legal-design-video.png", width: 1200, height: 630 }],
  },
};

const videoProducts = PRODUCTS.filter((p) => p.category === "video-design");

const faqs = [
  {
    q: "How does adding video to my law firm website improve SEO?",
    a: "Video improves two metrics that influence organic rankings: dwell time (how long visitors stay on your page) and bounce rate. When a prospective client lands on your practice area page and watches a 90-second explainer about how your case process works, they stay 2-4x longer than on a text-only page. Google's quality signals interpret this engagement as evidence that your page is satisfying user intent. Beyond on-page signals, videos embedded on your site can be submitted to Google's video sitemap for separate video search indexing, giving you a second placement opportunity on the same keyword.",
  },
  {
    q: "Should my law firm have a YouTube channel?",
    a: "Yes, if you have the capacity to maintain it consistently. YouTube is the second-largest search engine in the world and legal topics get substantial query volume. Questions like 'what to do after a car accident,' 'how long does a personal injury case take,' and 'what is a DUI defense' are searched hundreds of thousands of times monthly. A law firm that publishes well-titled, well-described videos answering these questions captures both YouTube search traffic and Google video carousel appearances. The key is consistency - 1-2 new videos per month is more effective than a burst of 20 and then silence.",
  },
  {
    q: "What is blog-to-video conversion and why does it have high ROI?",
    a: "Blog-to-video conversion takes your existing written blog posts or articles and repurposes them into narrated summary videos. The ROI is high because you have already paid for the research, writing, and publication of the underlying content. Converting that content into video format extends its lifespan, adds a new distribution channel (YouTube), improves on-page engagement for the original article, and gives you social media content without commissioning entirely new creative. A 1,000-word blog post can become a 90-second video for a fraction of the cost of original video production.",
  },
  {
    q: "What types of law firm content perform best as infographics?",
    a: "The highest-performing infographic types for law firms are: process infographics ('What Happens in a Personal Injury Case Step by Step'), statistical infographics ('Car Accident Statistics in Texas'), timeline infographics ('How Long Does a Divorce Take?'), and comparison infographics ('What's the Difference Between Chapter 7 and Chapter 13 Bankruptcy?'). These formats are highly shareable and frequently embedded by news sites, blogs, and other legal resources - generating organic backlinks to the original page on your site.",
  },
  {
    q: "How do infographics generate backlinks?",
    a: "Infographics earn backlinks through embedding. When you publish a well-designed infographic on a relevant legal topic, other websites in your niche reference and embed it with a link back to your original page as the source. Legal blogs, local news sites, and injury prevention resources frequently embed legal infographics when they are visually compelling and factually accurate. You can accelerate this by proactively pitching your infographic to relevant sites with an embed code included in the pitch - this dramatically increases pickup rates.",
  },
  {
    q: "What is the dwell time impact of video content on legal pages?",
    a: "Industry studies across content categories consistently show that pages with embedded video have 2-4x higher average time on page than equivalent text-only pages. For law firm practice area pages, the specific impact depends on video quality and placement, but embedding a well-produced 90-second explainer typically adds 60-120 seconds to average session duration on that page. On a competitive practice area page where you are trying to signal content quality to Google, this is a meaningful engagement improvement.",
  },
];

export default function LegalDesignVideoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Legal Design & Video", href: "/services/legal-design-video" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Explainer videos
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              Blog-to-video
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              Infographic design
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Legal Design &amp; Video Services for Law Firms
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Text content alone is increasingly insufficient for competitive law firm SEO.
            Video increases dwell time, infographics earn organic backlinks, and both give
            you distribution channels beyond Google search. These are the highest-ROI ways
            to extend the reach of your existing content investment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Video & Design Pricing
            </Link>
            <Link
              href="/products/explainer-videos"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              See Explainer Video Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why video and design matter */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Video and Visual Content Matter for Law Firm SEO
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Law firm SEO is dominated by text - practice area pages, blog posts, FAQs.
                That content is essential. But it creates a strategic opening for firms
                willing to invest in visual formats their competitors are ignoring.
              </p>
              <p>
                Video content increases on-page dwell time by 2-4x on average. For Google,
                a prospective client who watches a 90-second explainer video and then
                continues reading your practice area page sends engagement signals that
                text-only pages cannot match. This translates directly into ranking signals.
              </p>
              <p>
                Infographics are one of the most cost-effective linkable asset types in
                legal content marketing. A compelling data visualization about accident
                statistics, case timelines, or legal process steps gets embedded by news
                sites, blogs, and resource pages - generating organic backlinks to your
                site without any outreach cost after the initial design.
              </p>
              <p>
                Blog-to-video conversion is the highest-ROI visual investment for most
                law firms. You have already paid to create the content. Converting it to
                video extends its useful life, adds YouTube as a distribution channel,
                and improves engagement on the original page - three benefits from one
                incremental investment.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Video vs. text-only page performance
                </h3>
                <div className="space-y-3">
                  {[
                    { metric: "Average time on page", textOnly: "1:20", withVideo: "3:45+" },
                    { metric: "Bounce rate", textOnly: "68%", withVideo: "48%" },
                    { metric: "Conversion rate lift", textOnly: "Baseline", withVideo: "+21% typical" },
                    { metric: "Social share likelihood", textOnly: "Low", withVideo: "3x higher" },
                    { metric: "Link earning potential", textOnly: "Content-dependent", withVideo: "Higher" },
                  ].map((item) => (
                    <div
                      key={item.metric}
                      className="grid grid-cols-3 text-sm gap-2 items-center"
                    >
                      <span className="text-gray-700 font-medium">{item.metric}</span>
                      <span className="text-gray-500 text-center">{item.textOnly}</span>
                      <span className="text-amber-700 font-semibold text-center">
                        {item.withVideo}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 text-xs mt-3 border-t border-gray-200 pt-3">
                  <span></span>
                  <span className="text-center text-gray-400">Text only</span>
                  <span className="text-center text-amber-600">With video</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Illustrative industry estimates. Actual results vary by content type and audience.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">
                      The content repurposing advantage
                    </h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      One well-researched blog post can become: an explainer video for
                      the page, a YouTube upload, a social media clip, an infographic,
                      and a LinkedIn carousel. Each format extends reach and earns
                      engagement from a different audience segment.
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
            Legal Design &amp; Video Products
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Three visual content formats with transparent per-project pricing and
            10-day delivery.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videoProducts.map((p) => {
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

      {/* Comparison: Video vs Text-Only */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Video Content vs. Text-Only: The SEO Comparison
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Video does not replace text content - it amplifies it. Here is how the two
            formats compare across the metrics that matter for law firm SEO.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="py-3 px-4 font-semibold text-gray-500">Text-Only Page</th>
                  <th className="py-3 px-4 font-semibold text-amber-700 bg-amber-50 rounded-t-lg">
                    Page with Video
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Average dwell time", "60-90 seconds", "3-4+ minutes"],
                  ["Bounce rate", "Higher (reader skims, leaves)", "Lower (video holds attention)"],
                  ["Conversion rate", "Baseline", "Typically 20-30% higher"],
                  ["Social shareability", "Text shares are low", "Video shares are 3x more likely"],
                  ["YouTube presence", "None", "Additional search channel"],
                  ["Backlink earning potential", "Content quality dependent", "Higher - video embeds earn links"],
                  ["Google Video carousel", "❌ Not eligible", "✅ Eligible for video SERP feature"],
                  ["Production cost", "Lower per piece", "Moderate - high ROI via repurposing"],
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
            What Is Included in Every Video and Design Project
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Shield,
                title: "Custom script writing",
                desc: "Every video starts with a professionally written script tailored to your practice area. You review and approve before production begins.",
              },
              {
                icon: CheckCircle,
                title: "Professional voiceover",
                desc: "All explainer videos and blog-to-video conversions include professional voiceover narration - not text-to-speech or AI voice.",
              },
              {
                icon: Scale,
                title: "Brand integration",
                desc: "Your firm's logo, brand colors, and fonts are incorporated into every video and infographic design at no additional charge.",
              },
              {
                icon: Award,
                title: "Multiple format exports",
                desc: "Video deliveries include MP4 and WebM formats suitable for web embedding, YouTube upload, and social media. Infographics include PNG, PDF, and embed code.",
              },
              {
                icon: TrendingUp,
                title: "SEO metadata package",
                desc: "YouTube-optimized titles, descriptions, and tags are included with video deliveries - ready to paste when uploading to your channel.",
              },
              {
                icon: CheckCircle,
                title: "Revision included",
                desc: "One round of revisions is included with every project. Videos are delivered in draft for your approval before final render.",
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
        headline="Legal Design & Video - Frequently Asked Questions"
      />

      {/* CTA */}
      <CtaBanner
        headline="Ready to add video and visual content to your law firm's SEO strategy?"
        subheadline="Browse transparent per-project pricing on explainer videos, blog-to-video, and infographic design."
        primaryCta={{ label: "View Video & Design Pricing", href: "/pricing" }}
        secondaryCta={{ label: "See Explainer Video Details", href: "/products/explainer-videos" }}
      />
    </>
  );
}
