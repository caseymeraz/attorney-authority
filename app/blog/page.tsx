import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Law Firm SEO Blog | Attorney Authority",
  description:
    "Law firm SEO insights, link building case studies, and legal marketing strategy  -  from the team at Attorney Authority.",
  alternates: {
    canonical: "https://attorneyauthority.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
            ]}
          />
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Law Firm SEO Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Strategy, case studies, and insights on law firm link building, legal content, and attorney SEO.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">No posts yet  -  coming soon</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We are actively publishing guides and case studies on law firm SEO and link building. Check back soon, or browse our existing resources below.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/guides/law-firm-link-building-guide"
                className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                Read Our Link Building Guide
              </Link>
              <Link
                href="/pricing"
                className="border border-gray-400 text-gray-700 font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
