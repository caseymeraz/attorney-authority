import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import CtaBanner from "@/components/shared/cta-banner";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "All Law Firm SEO Products  -  Transparent Pricing",
  description: "Browse all 14 law firm SEO services with transparent pricing. DR-tiered link building, legal content writing, press releases, digital PR, and more.",
  alternates: { canonical: "https://attorneyauthority.com/products" },
};

const categoryLabels: Record<string, string> = {
  "link-building": "Link Building",
  "content": "Content & Strategy",
  "pr": "PR & Authority",
  "local-seo": "Local SEO",
  "video-design": "Design & Video",
};

export default function ProductsPage() {
  const grouped = PRODUCTS.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {} as Record<string, typeof PRODUCTS>);

  return (
    <>
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb items={[{ label: "Products", href: "/products" }]} />
          <h1 className="text-4xl font-bold mt-6 mb-4">All Law Firm SEO Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            14 services with transparent pricing and stated delivery timelines. All
            purpose-built for law firm websites.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-14">
          {Object.entries(grouped).map(([category, products]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {categoryLabels[category]}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {products.map((p) => {
                  const minPrice = Math.min(...p.tiers.map((t) => t.ourPrice));
                  return (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="group block border border-gray-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-md transition-all"
                    >
                      <div className="text-xs font-semibold text-amber-700 mb-1">
                        From ${minPrice.toLocaleString()}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-amber-800 transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{p.tagline}</p>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-700">
                        View details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
