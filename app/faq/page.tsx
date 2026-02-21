import type { Metadata } from "next";
import Breadcrumb from "@/components/marketing/breadcrumb";
import FaqSection from "@/components/service-pages/faq-section";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "FAQ  -  Law Firm SEO Questions Answered",
  description: "Answers to common questions about law firm link building, content writing, pricing, delivery timelines, and how Attorney Authority works.",
  alternates: { canonical: "https://attorneyauthority.com/faq" },
};

const faqs = [
  { q: "Do you work with all types of law firms?", a: "Yes. We work with solo practitioners, boutique firms, and large multi-practice firms across all practice areas. Every service is purpose-built for legal websites, but the right products and tiers vary based on your market, current authority, and target keywords." },
  { q: "Do I need a retainer to work with Attorney Authority?", a: "No. All services are a-la-carte with transparent per-unit pricing. You order what you need, when you need it  -  no minimum commitment, no recurring fees unless you choose them." },
  { q: "Will you ever mention any third-party suppliers in your reports?", a: "No. All reports are branded under Attorney Authority. We are your SEO services provider  -  supplier relationships are completely invisible to you." },
  { q: "How do I verify the backlinks I receive?", a: "Every placement report includes the live URL of the published content and the anchor text used. You can verify independently using Ahrefs, SEMrush, Moz, or any other backlink tracking tool." },
  { q: "Do you guarantee specific ranking improvements?", a: "No. No legitimate SEO service can guarantee specific rankings  -  Google's algorithm is complex and rankings depend on many factors including your competition, website quality, and the competitive landscape. What we guarantee is delivery of the stated service within the stated timeframe, with placement reports you can independently verify." },
  { q: "What information do I need to provide to place a link building order?", a: "For link building orders (blogger outreach or niche edits), you need to provide: your target URL (the page you want the link to point to), your preferred anchor text or anchor text notes, your primary practice area, and any contextual preferences. We advise on anchor text strategy if you are unsure." },
  { q: "Can I order multiple services simultaneously?", a: "Yes. Many law firms run concurrent link building and content writing campaigns. There is no limit on concurrent orders." },
  { q: "How is blogger outreach different from buying links?", a: "Buying links means paying a website directly for a link without any editorial involvement. Blogger outreach means our team reaches out to publishers, pitches content concepts, and earns editorial placement through a genuine content arrangement. The distinction matters for Google's guidelines  -  editorial placements are the standard Google endorses; direct link buying violates their guidelines." },
  { q: "Do you work with law firms outside the United States?", a: "Our core services are optimized for US-based law firms targeting English-language keywords. Our multilingual links service specifically supports firms targeting Spanish-speaking audiences in the US. For international law firms targeting non-US markets, contact us to discuss whether our current offerings are a fit." },
  { q: "What is your refund policy?", a: "If a deliverable is not completed within the stated delivery window or the placement does not match the stated DR tier at delivery, we will either redeliver or issue a credit. Contact our team with your order details and we will resolve it within one business day." },
];

export default function FaqPage() {
  return (
    <>
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb items={[{ label: "FAQ", href: "/faq" }]} />
          <h1 className="text-4xl font-bold mt-6 mb-3">Frequently Asked Questions</h1>
          <p className="text-gray-400">
            Common questions about our law firm SEO services, ordering process, and delivery.
          </p>
        </div>
      </section>
      <FaqSection faqs={faqs} headline="All Questions" />
      <CtaBanner />
    </>
  );
}
