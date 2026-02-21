import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Workers Compensation Law Firm SEO Services | Attorney Authority",
  description:
    "SEO and link building for workers compensation attorneys. Rank for workplace injury, comp claim, and occupational illness keywords in your state and local market.",
  alternates: {
    canonical: "https://attorneyauthority.com/practice-areas/workers-compensation",
  },
};

export default function WorkersCompensationPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Practice Areas", href: "/practice-areas" },
              { label: "Workers Compensation", href: "/practice-areas/workers-compensation" },
            ]}
          />
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Workers Compensation Law Firm SEO Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Link building and SEO for workers compensation attorneys  -  helping employee-side and employer-side firms rank for workplace injury and comp-related keywords.
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
