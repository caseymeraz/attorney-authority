import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/marketing/breadcrumb";

export const metadata: Metadata = {
  title: "About Attorney Authority  -  Legal SEO Specialists",
  description: "Attorney Authority is the only SEO platform built exclusively for law firms. Learn about our approach, values, and why we focus solely on the legal industry.",
  alternates: { canonical: "https://attorneyauthority.com/about" },
};

export default function AboutPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Breadcrumb items={[{ label: "About", href: "/about" }]} />
        <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">About Attorney Authority</h1>
        <div className="prose space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg text-gray-800 font-medium">
            Attorney Authority is the only SEO platform built exclusively for law firms.
          </p>
          <p>
            We built this platform because we saw a clear gap in the market: law firms
            were being served by generic SEO agencies that applied the same playbook to
            legal websites as they did to e-commerce stores and SaaS products. Legal
            content is YMYL. Legal keywords are among the most competitive in organic
            search. Legal SEO requires a fundamentally different approach  -  and no
            existing platform was built around that reality.
          </p>
          <p>
            Attorney Authority provides transparent, a-la-carte pricing on DR-tiered link
            building, legal content writing, press releases, digital PR, and more  -  all
            purpose-built for law firm websites. Every service is calibrated for YMYL
            standards, E-E-A-T requirements, and the competitive dynamics of legal keyword
            clusters.
          </p>
          <p>
            We do not work with general businesses, e-commerce stores, or SaaS companies.
            Our exclusive focus on law firms means our publisher network, our content
            writers, and our strategy frameworks are all built specifically for the legal
            industry  -  not adapted from something generic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/pricing" className="inline-flex items-center justify-center bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
              View Pricing
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
