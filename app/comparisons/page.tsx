import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Law Firm SEO Comparisons | Attorney Authority",
  description:
    "Data-driven comparisons for law firm marketing decisions. Blogger outreach vs niche edits, SEO vs PPC, and more - with transparent analysis to help you choose the right strategy.",
  alternates: {
    canonical: "https://attorneyauthority.com/comparisons",
  },
};

const comparisons = [
  {
    href: "/comparisons/blogger-outreach-vs-niche-edits",
    title: "Blogger Outreach vs Niche Edits",
    description:
      "Both are editorial backlink strategies - but they work differently. Blogger outreach creates new articles while niche edits insert links into existing aged content. Which is right for your law firm's current DR and goals?",
    tags: ["Link building", "Backlinks", "Strategy"],
  },
  {
    href: "/comparisons/law-firm-seo-vs-ppc",
    title: "Law Firm SEO vs PPC",
    description:
      "SEO compounds over time and stops costing per click. PPC delivers leads immediately but stops the moment the budget stops. A data-driven breakdown of cost per lead, ROI timeline, and the right mix for each firm stage.",
    tags: ["Budget allocation", "ROI analysis", "Lead generation"],
  },
];

export default function ComparisonsIndexPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Comparisons", href: "/comparisons" }]} />
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Law Firm Marketing Comparisons
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Data-driven comparisons to help you make confident decisions about
            where to invest your law firm&apos;s marketing budget.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {comparisons.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-800 transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-700">
                  Read comparison <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Not sure which strategy is right for your firm?"
        subheadline="Browse our full product catalog with transparent pricing, or contact us to discuss your specific practice area and market."
        primaryCta={{ label: "View All Products", href: "/products" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
