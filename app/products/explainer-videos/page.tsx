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

const product = getProductBySlug("explainer-videos")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: "Legal Explainer Videos for Law Firms - Animated, Script Included",
  description:
    "Professional animated explainer videos for law firm practice area pages. 60-90 seconds, custom script, professional voiceover, HD export, YouTube-ready. Improve dwell time, conversion rates, and video SERP visibility. 10-day delivery.",
  alternates: {
    canonical: "https://attorneyauthority.com/products/explainer-videos",
  },
  openGraph: {
    title: "Legal Explainer Videos for Law Firms - Animated, Script Included",
    description:
      "Animated explainer videos that increase dwell time and conversion rates on practice area pages. Script included. HD delivery. 10 days.",
    images: [{ url: "/og/explainer-videos.png", width: 1200, height: 630 }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Legal Explainer Videos for Law Firms",
  description:
    "Professional animated explainer videos for law firm websites. Improves dwell time, conversion rates on practice area pages, and YouTube search visibility. Custom script included, HD export, 10-day delivery.",
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

export default function ExplainerVideosPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Explainer Videos", href: "/products/explainer-videos" },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              Script included
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              10-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              60-90 second animated video
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Legal Explainer Videos for Law Firms
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            Professionally animated explainer videos that increase dwell time on your practice
            area pages, improve conversion rates, and open a YouTube presence that captures
            video-search traffic. Custom script written for your practice area, professional
            voiceover, HD delivery in 10 days.
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

      {/* What are legal explainer videos */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Are Legal Explainer Videos for Law Firms?
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              Legal explainer videos are short, professionally animated productions - typically
              60 to 90 seconds - designed to communicate complex legal processes, practice area
              value propositions, or common client questions in plain language that prospective
              clients can immediately understand. A well-executed explainer video on a personal
              injury practice area page conveys in 90 seconds what would take a first-time
              visitor 5 minutes to read and absorb.
            </p>
            <p>
              Unlike generic stock footage or basic slideshows, these are fully custom animated
              productions. The script is written specifically for your practice area, the
              voiceover is professionally recorded, and the motion graphics are branded to your
              firm. The output is a polished, embed-ready video that performs across your law
              firm website, YouTube channel, and social media simultaneously.
            </p>
            <p>
              Google surfaces video content in standard search results through video carousels
              and featured video snippets. A practice area page with an embedded video has a
              measurable advantage in both organic result appearance and the extended engagement
              time that Google interprets as a user satisfaction signal. YouTube is also the
              second-largest search engine in the world - and legal video content on YouTube
              is significantly underserved relative to demand.
            </p>
          </div>
        </div>
      </section>

      {/* Why videos increase rankings */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Explainer Videos Improve Law Firm Rankings and Conversions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dwell time - the amount of time a visitor spends on your page before returning
                to the search results - is a behavioral quality signal Google monitors
                extensively. When visitors click to your practice area page and immediately
                bounce back, Google interprets this as a relevance failure. When visitors stay
                and engage, the page accumulates positive behavioral signals.
              </p>
              <p>
                A 90-second explainer video embedded above the fold on a practice area page
                creates an automatic engagement mechanism. Visitors who might have skimmed and
                left instead watch the video for 60-90 seconds, dramatically increasing average
                time on page for that URL. This behavioral signal compounds over time as the
                page accumulates data at scale.
              </p>
              <p>
                Beyond the SEO mechanics, video functions as a conversion accelerant. A
                prospective personal injury client watching a clear, professional explanation
                of how the claims process works - narrated in plain language, not legal jargon
                - is significantly more likely to contact your firm than someone who just
                skimmed the same information in text form.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                The video conversion and ranking math
              </h3>
              <ul className="space-y-3">
                {[
                  "Embedded video increases average dwell time 2-3x vs text-only practice area pages",
                  "YouTube is the second-largest search engine - video opens a separate acquisition channel",
                  "Google video carousels appear for legal how-to and process queries",
                  "Practice area pages with video convert at measurably higher rates",
                  "One additional signed PI case covers dozens of explainer video investments",
                  "Video content earns passive backlinks when embedded or shared by third-party sites",
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
            Legal Explainer Video Pricing
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Per-video pricing. Script, voiceover, animation, and HD export all included.
            10-day delivery. Multi-video packages available - contact us for volume pricing
            if you need to cover multiple practice area pages at once.
          </p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order a Video" />
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-2">
              Which pages should get a video first?
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Prioritize your highest-traffic practice area pages and the pages you are
              actively targeting for ranking improvements. For most law firms that means the
              primary practice area landing page and the top 2-3 city-specific variants.
              A personal injury video on your primary practice area page produces more
              measurable impact than one embedded on a secondary service page. Once core
              pages have video, expand to blog content targeting informational legal queries
              where video carousels appear in search results.
            </p>
          </div>
        </div>
      </section>

      {/* How videos are produced */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Legal Explainer Videos Are Produced
          </h2>
          <p className="text-gray-600 mb-8">
            Every video goes through a structured production process with a script review
            step before any animation begins. You approve the script before production starts,
            ensuring the final video aligns with your practice area positioning and firm voice.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Script Writing",
                desc: "A custom script is written for your specific practice area and any talking points you provide. Scripts are written in plain language accessible to non-lawyer audiences, with a clear structure: problem the client has, your firm's process, outcome they can expect, and a clear call to action. You review and approve before production proceeds.",
              },
              {
                title: "Professional Voiceover",
                desc: "A professional voiceover artist records the approved script. Voiceover tone is calibrated for legal content - authoritative and trustworthy, not salesy or alarmist. The recording goes through quality review before being paired with the animation.",
              },
              {
                title: "Animated Motion Graphics",
                desc: "Custom motion graphics illustrate the key points of the script. Animation style is professional and appropriate for legal content - clear iconography, smooth transitions, and visual hierarchy that guides viewer attention through the narrative arc of the video.",
              },
              {
                title: "Brand Integration",
                desc: "Your firm name, logo, brand colors, and contact information are integrated into the video's opening, closing, and at key moments throughout. The final video is recognizable as your firm's content, not generic legal footage that could belong to any practice.",
              },
              {
                title: "HD Export in Multiple Formats",
                desc: "Delivery includes a 1080p MP4 file for website embedding and YouTube upload, plus a WebM format for optimized web performance. All files are royalty-free and fully owned by your firm for perpetual use across all channels with no licensing restrictions.",
              },
              {
                title: "YouTube Optimization Package",
                desc: "Along with the video files, you receive a YouTube-optimized title, description with keyword integration, tags, and thumbnail specifications. This makes immediate YouTube upload and channel building straightforward without additional SEO work on your end.",
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
                title: "Provide your practice area and talking points",
                desc: "Specify your practice area, the URL the video will be embedded on, your firm name and brand assets (logo, colors, contact info), and any specific talking points, process steps, or unique value propositions you want the script to emphasize.",
              },
              {
                step: "02",
                title: "Script drafted and submitted for your approval",
                desc: "Our writers produce a custom script within 3-4 days of your order. You receive the script for review and can request edits before any production work begins. No animation or voiceover recording starts until you have approved the script.",
              },
              {
                step: "03",
                title: "Voiceover recorded and animation produced",
                desc: "Once your script is approved, voiceover recording and animation production run in parallel. This phase takes 4-5 days and includes brand integration, motion graphic production, and audio-visual synchronization and quality review.",
              },
              {
                step: "04",
                title: "Final video delivered with YouTube package",
                desc: "You receive your completed 1080p video in MP4 and WebM formats, plus the YouTube optimization package. Total process runs 10 days from order placement to delivery.",
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

      {/* What types work best */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Types of Explainer Videos Work Best for Law Firms
          </h2>
          <p className="text-gray-600 mb-6">
            Not all video content serves the same strategic purpose. These six formats cover
            the full range of law firm video needs - from practice area education to attorney
            credibility signals and local market positioning.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "Process Explainers",
                desc: "Walk through what happens step-by-step in a personal injury claim, criminal defense case, or family law proceeding. These address the most common pre-consultation anxiety and convert exceptionally well because they answer the question prospective clients are afraid to ask.",
              },
              {
                label: "Practice Area FAQ Videos",
                desc: "Answer the top 3-5 questions your clients ask before hiring. FAQ videos target informational search queries on both Google and YouTube and establish your firm as the transparent, educational choice in a sea of firms that just pitch their credentials.",
              },
              {
                label: "Case Type Summaries",
                desc: "Explain the specifics of a case type - what qualifies, what damages are recoverable, what the process looks like. Ideal for practice area pages targeting specific queries like 'what is a premises liability case' or 'how does a workers comp claim work.'",
              },
              {
                label: "Firm Introduction Videos",
                desc: "Introduce your firm's approach, values, and client commitment. Firm intro videos on the homepage or About page improve trust signals and reduce decision anxiety for prospective clients comparing multiple firms before making contact.",
              },
              {
                label: "Attorney Bio Videos",
                desc: "Short videos on individual attorney bio pages dramatically improve E-E-A-T signals. A speaking attorney is a concrete signal of real-person expertise that Google's quality evaluators look for on YMYL legal pages - and that prospective clients respond to emotionally.",
              },
              {
                label: "Location-Specific Videos",
                desc: "Videos referencing specific cities, counties, or courthouses reinforce geographic relevance for local SEO. A video that mentions serving clients in a specific metro area and references local legal context signals strong local authority to both Google and prospective clients.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-amber-200 p-5">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-gray-900 mb-1">{item.label}</div>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: video vs no video */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Video vs. No Video on Practice Area Pages
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Signal</th>
                  <th className="py-3 px-4 font-semibold text-amber-700">With Explainer Video</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">Text-Only Page</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Average time on page", "2-4 minutes", "45-90 seconds"],
                  ["Bounce rate", "Lower - video creates immediate engagement", "Higher - scan and leave pattern"],
                  ["Conversion rate", "Higher - video builds trust faster than text", "Lower - requires more cognitive effort"],
                  ["SERP appearance", "Video carousel / rich results eligible", "Standard blue link only"],
                  ["YouTube channel", "Yes - opens second acquisition channel", "None"],
                  ["E-E-A-T signals", "Strong - demonstrates expertise visually", "Content-quality dependent"],
                  ["Shareability", "High - video is shared naturally across social", "Low for practice area pages"],
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
            For law firms looking to maximize content investment, pairing a fresh explainer
            video with a{" "}
            <Link href="/products/blog-to-video" className="text-amber-700 font-semibold hover:underline">
              blog-to-video conversion
            </Link>{" "}
            on supporting content is one of the most cost-effective ways to build a YouTube
            channel quickly from existing written assets.
          </p>
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
        headline="Ready to add video to your practice area pages?"
        subheadline="Order a custom animated explainer video. Script included, 10-day delivery, HD export for website, YouTube, and social."
        primaryCta={{ label: "View Pricing", href: "#pricing" }}
        secondaryCta={{ label: "Talk to Us First", href: "/contact" }}
      />
    </>
  );
}
