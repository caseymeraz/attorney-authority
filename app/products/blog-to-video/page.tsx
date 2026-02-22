import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import JsonLd from "@/components/marketing/json-ld";
import PricingTiers from "@/components/product-pages/pricing-tiers";
import WhatsIncluded from "@/components/product-pages/whats-included";
import FaqSection from "@/components/service-pages/faq-section";
import RelatedProducts from "@/components/service-pages/related-products";
import CtaBanner from "@/components/shared/cta-banner";
import { getProductBySlug, toPublicProduct } from "@/lib/products";

const product = getProductBySlug("blog-to-video")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Blog to Video Conversion for Law Firms - Repurpose Legal Content",
  description:
    "Convert your existing legal blog posts into professional videos. Extend reach to YouTube and social, improve dwell time, and maximize ROI from content you have already written. $252 per video, 10-day delivery.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/blog-to-video",
  },
  openGraph: {
    title: "Blog to Video Conversion for Law Firms - Repurpose Legal Content",
    description:
      "Turn existing law firm blog posts into professional videos. YouTube SEO, social media formats, and dwell-time improvement. $252 per video, 10 days.",
    images: [{ url: "/og/blog-to-video.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Blog to Video Conversion for Law Firms",
  description:
    "Convert existing legal blog posts and articles into professional summary videos. Maximize content ROI by extending written content into video format for YouTube, social media, and on-page engagement improvement.",
  brand: {
    "@type": "Organization",
    name: "Attorney Authority",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: pub.tiers[0].ourPrice,
    deliveryLeadTime: {
      "@type": "QuantitativeValue",
      value: pub.tiers[0].ourDelivery,
      unitCode: "DAY",
    },
  },
};

export default function BlogToVideoPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Blog to Video", href: "/products/blog-to-video" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              No new content required
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              10-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              $252 per video
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Blog to Video Conversion for Law Firms
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            Turn your existing legal blog posts into professional videos without writing
            anything new. Extend your content&apos;s reach to YouTube and social media,
            improve dwell time on the original post, and build a video presence from content
            you have already invested in creating.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#pricing"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* What is this product */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Is Blog to Video Conversion for Law Firms?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              Blog to video conversion takes your existing written legal content - a blog post,
              a practice area guide, an FAQ article - and transforms it into a narrated,
              professionally produced video that summarizes the core points. You provide the
              URL or text of your article. We adapt it into a script, record a professional
              voiceover, pair it with motion graphics, and deliver a fully produced video
              ready for YouTube upload and website embedding.
            </p>
            <p>
              This is fundamentally different from producing a new explainer video from scratch.
              The source material already exists. The research, legal accuracy review, and
              content investment have already been made. Blog to video conversion extracts
              additional value from that investment by reaching audiences who prefer consuming
              content in video format rather than reading long-form text.
            </p>
            <p>
              For law firms with existing blog libraries, this is one of the highest-ROI
              content tactics available. A blog post that took hours to produce can generate
              a YouTube video, social media clips, an embedded video that improves on-page
              engagement, and a second ranking opportunity on YouTube search - all from a
              single conversion order.
            </p>
          </div>
        </div>
      </section>

      {/* Why repurposing is high-ROI */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Repurposing Blog Content to Video Is High-ROI for Law Firms
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Most law firm blog content is created once and then left to generate organic
                traffic passively. Blog to video conversion changes that equation by giving
                each piece of content a second life across channels that written content
                cannot reach.
              </p>
              <p>
                YouTube ranks legal how-to and informational content well, and the competition
                for legal video content on YouTube is dramatically lower than for the same
                keywords in Google organic search. A firm that has published 20 blog posts
                targeting informational legal queries can quickly build a YouTube presence by
                converting those same posts to video - reaching an audience that searches for
                legal answers on YouTube rather than Google.
              </p>
              <p>
                Embedding the resulting video on the original blog post also improves the
                page&apos;s on-site engagement metrics. Visitors who would have skimmed the
                text and bounced instead watch the video for 1-3 minutes, extending average
                session duration and reducing the bounce signal Google uses to evaluate page
                quality.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                The content repurposing ROI case
              </h3>
              <ul className="space-y-3">
                {[
                  "Blog post already written - no new content creation cost, just conversion",
                  "Video embedded on original post improves dwell time and behavioral quality signals",
                  "YouTube video opens second ranking opportunity for the same keywords",
                  "Social media clips repurposed from the same video extend reach further",
                  "One blog post becomes: article + YouTube video + social content + on-page engagement boost",
                  "Builds YouTube channel depth rapidly from existing content library",
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

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Blog to Video Conversion Pricing
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Per-video pricing. Script adaptation, voiceover, motion graphics, HD export, and
            YouTube optimization package all included. 10-day delivery. Volume pricing
            available for firms converting multiple articles at once.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order a Conversion" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              How many blog posts should you convert?
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Start with your 5-10 highest-traffic blog posts and any posts targeting
              keywords where YouTube video carousels appear in Google search results. These
              give the most immediate dual-channel benefit. From there, systematically convert
              your archive over time to build YouTube channel depth. A library of 20-30 legal
              videos on a YouTube channel creates a compound content asset that drives traffic
              independently of your website.
            </p>
          </div>
        </div>
      </section>

      {/* How conversion works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Blog to Video Conversion Works
          </h2>
          <p className="text-gray-600 mb-8">
            The conversion process is designed to extract the most engaging elements from your
            written content and translate them into a format optimized for video consumption -
            without losing the accuracy and substance that makes your original article valuable.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Script Adaptation from Your Article",
                desc: "We read your existing blog post and extract the core narrative, key points, and most shareable insights. These are adapted into a video script that works for spoken delivery - tighter than the written version, with clear pacing and a natural speaking cadence.",
              },
              {
                title: "Professional Voiceover Recording",
                desc: "A professional voiceover artist records the adapted script. Tone is calibrated for legal content - authoritative, clear, and trustworthy. Recording quality is reviewed before pairing with the visual elements.",
              },
              {
                title: "Motion Graphics Production",
                desc: "On-screen text, icons, and motion graphics illustrate the key points as the voiceover plays. Visual elements are selected to reinforce comprehension - not just decorate. Your firm's branding is integrated throughout.",
              },
              {
                title: "HD Export and Format Delivery",
                desc: "Delivered as a 1080p MP4 for YouTube upload and website embedding, plus a WebM format for optimized web playback. All files are royalty-free and owned by your firm permanently with no usage restrictions.",
              },
              {
                title: "YouTube SEO Package",
                desc: "Every conversion includes a YouTube-optimized title that targets the same query intent as your original article, a keyword-integrated description, tag recommendations, and thumbnail specifications to maximize click-through on YouTube search results.",
              },
              {
                title: "Multiple Format Delivery",
                desc: "In addition to the full video, we can deliver a shortened version optimized for social media posting. This extends the single conversion into YouTube, LinkedIn, and short-form social content simultaneously.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Order Process</h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Provide your blog URL",
                desc: "Submit the URL of the blog post you want converted. Include your firm name, logo, and brand colors so we can integrate your branding. If you have a preferred YouTube channel, provide that as well.",
              },
              {
                step: "02",
                title: "Script adapted and submitted for review",
                desc: "Our writers read your article and adapt it into a video script within 2-3 days. You receive the script for review and can request adjustments to emphasis, tone, or coverage before production begins.",
              },
              {
                step: "03",
                title: "Voiceover recorded and video produced",
                desc: "Once the script is approved, voiceover recording and motion graphics production run in parallel over 4-5 days. Brand integration, visual pacing, and audio-visual sync are all handled before delivery.",
              },
              {
                step: "04",
                title: "Video and YouTube package delivered",
                desc: "You receive the completed 1080p video files plus the full YouTube SEO package - optimized title, description, tags, and thumbnail specs. Total turnaround: 10 days from order to delivery.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 p-5 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-amber-200 shrink-0 w-8">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog-to-video vs new explainer comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Blog to Video vs. New Explainer Video
          </h2>
          <p className="text-gray-600 mb-6">
            Both produce professional video content for your law firm, but they serve
            different strategic purposes and have different prerequisites.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="py-3 px-4 font-semibold text-amber-700">Blog to Video</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">New Explainer Video</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Source material", "Your existing blog post", "Created from brief + talking points"],
                  ["Cost", "$252", "$378"],
                  ["Delivery", "10 days", "10 days"],
                  ["Content creation required", "None - article already written", "Minimal - talking points provided"],
                  ["Video length", "1-3 minutes (article dependent)", "60-90 seconds (structured)"],
                  ["Best for", "Content repurposing, blog library", "New topics, practice area pages"],
                  ["YouTube strategy", "Converts existing content to video channel", "Builds channel with new content"],
                  ["Ideal use", "Firms with existing blog archives", "Firms building from scratch"],
                ].map(([factor, col1, col2]) => (
                  <tr key={factor as string} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-700">{factor}</td>
                    <td className="py-3 px-4 text-center text-amber-700 font-medium">{col1}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            Most law firms benefit from both. Start with{" "}
            <Link href="/products/explainer-videos" className="text-amber-700 font-semibold hover:underline">
              explainer videos
            </Link>{" "}
            on your primary practice area pages, then systematically convert your blog archive
            to build YouTube channel depth over time.
          </p>
        </div>
      </section>

      {/* Best blog post types */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Best Blog Post Types for Video Conversion
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Not all blog content converts to video equally. These formats work particularly
            well because their structure translates naturally from written to visual narrative.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "How-To Guides",
                desc: "Step-by-step processes like 'what to do after a car accident' or 'how to file a workers comp claim' convert excellently to video. The sequential structure is natural for visual storytelling.",
              },
              {
                label: "FAQ Posts",
                desc: "Articles structured around common client questions are ideal - each question becomes a video segment with a clear answer. These rank well on YouTube for the same informational queries.",
              },
              {
                label: "Listicles",
                desc: "Posts like 'five things insurance companies don't want you to know' convert well because each list item becomes a distinct visual element with on-screen text reinforcement.",
              },
              {
                label: "Case Type Explainers",
                desc: "'What is a premises liability case' or 'how does a mass tort lawsuit work' - posts that explain legal concepts to non-lawyers translate naturally into animated explainer format.",
              },
              {
                label: "Process Timelines",
                desc: "Posts that explain how long a case takes or what happens at each stage of litigation convert well because the timeline structure is inherently visual and video-friendly.",
              },
              {
                label: "Comparison Articles",
                desc: "'Should I settle or go to trial' and similar comparison posts work well because the two-sided structure creates clear visual contrast opportunities in animation.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-amber-900 mb-1">{item.label}</div>
                    <p className="text-xs text-amber-800 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <WhatsIncluded features={pub.features} />

      {/* FAQ */}
      <FaqSection faqs={pub.faqs} />

      {/* Related products */}
      <RelatedProducts slugs={pub.relatedProducts} />

      {/* CTA */}
      <CtaBanner
        headline="Ready to get more from your existing blog content?"
        subheadline="Convert your top legal blog posts to professional video. No new content needed. 10-day delivery, YouTube SEO package included."
        primaryCta={{ label: "View Pricing", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
