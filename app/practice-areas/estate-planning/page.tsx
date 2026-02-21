import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Estate Planning Law Firm SEO Services | Attorney Authority",
  description:
    "SEO and link building for estate planning attorneys. Build authority for will drafting, trust formation, probate, and estate administration keywords in your local market.",
  alternates: {
    canonical: "https://attorneyauthority.com/practice-areas/estate-planning",
  },
};

export default function EstatePlanningPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Practice Areas", href: "/practice-areas" },
              { label: "Estate Planning", href: "/practice-areas/estate-planning" },
            ]}
          />
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Estate Planning Law Firm SEO Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Link building and SEO strategy for estate planning attorneys  -  covering wills, trusts, probate, and power of attorney keywords in competitive local markets.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-amber-900 mb-2">Full content coming soon</h2>
            <p className="text-amber-800 mb-4">
              This page is currently being developed. In the meantime, browse our pricing or contact us directly.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                View Pricing
              </Link>
              <Link
                href="/contact"
                className="border border-amber-700 text-amber-700 font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-amber-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
