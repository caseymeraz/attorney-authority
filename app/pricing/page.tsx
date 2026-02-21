import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/marketing/breadcrumb";
import JsonLd from "@/components/marketing/json-ld";
import CtaBanner from "@/components/shared/cta-banner";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Law Firm SEO Pricing  -  All Services, Transparent Rates",
  description:
    "Complete pricing for all law firm SEO services: link building, content writing, press releases, digital PR, and more. DR-tiered options from $40 to $8,816. No retainers.",
  alternates: {
    canonical: "https://attorneyauthority.com/pricing",
  },
  openGraph: {
    title: "Law Firm SEO Pricing  -  All Services, Transparent Rates",
    description:
      "A-la-carte pricing on all law firm SEO services. DR10+ to DR60+ link building, content writing, PR, and more. No hidden fees.",
    images: [{ url: "/og/pricing.png", width: 1200, height: 630 }],
  },
};

const catalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Attorney Authority  -  Law Firm SEO Services Pricing",
  provider: {
    "@type": "Organization",
    name: "Attorney Authority",
    url: "https://attorneyauthority.com",
  },
  itemListElement: PRODUCTS.flatMap((p) =>
    p.tiers.map((tier) => ({
      "@type": "Offer",
      name: `${p.name}  -  ${tier.name}`,
      price: tier.ourPrice,
      priceCurrency: "USD",
      description: `${p.description.slice(0, 100)}...`,
      deliveryLeadTime: {
        "@type": "QuantitativeValue",
        value: tier.ourDelivery,
        unitCode: "DAY",
      },
    }))
  ),
};

const categories = [
  {
    label: "Link Building",
    id: "link-building",
    description:
      "DR-tiered backlinks from editorially vetted websites. Choose the authority level that matches your competitive landscape.",
    products: PRODUCTS.filter((p) => p.category === "link-building"),
  },
  {
    label: "Content & Strategy",
    id: "content",
    description:
      "Human-written legal content, keyword research, and content planning built for law firm topical authority.",
    products: PRODUCTS.filter((p) => p.category === "content"),
  },
  {
    label: "PR & Authority",
    id: "pr",
    description:
      "Press releases, brand mentions, digital PR, and community mentions that build E-E-A-T signals for legal sites.",
    products: PRODUCTS.filter((p) => p.category === "pr"),
  },
  {
    label: "Local SEO",
    id: "local-seo",
    description:
      "Citation building for local map pack rankings. Foundational Name, Address, and Phone (NAP) consistency across legal and local directories.",
    products: PRODUCTS.filter((p) => p.category === "local-seo"),
  },
  {
    label: "Design & Video",
    id: "video-design",
    description:
      "Explainer videos, blog-to-video conversion, and infographic design for law firm content marketing.",
    products: PRODUCTS.filter((p) => p.category === "video-design"),
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={catalogSchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb items={[{ label: "Pricing", href: "/pricing" }]} />
          <div className="mt-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Law Firm SEO Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl">
              Complete pricing for every service we offer. No bundles, no retainers, no
              discovery calls before you can see a price. Order what you need, when you
              need it.
            </p>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <div className="bg-amber-50 border-b border-amber-200 py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-amber-800">
            <strong>All prices are per unit.</strong> Delivery windows are stated
            per-service. Contact us for volume pricing on bulk orders.
          </p>
        </div>
      </div>

      {/* Category sections */}
      {categories.map((cat) => (
        <section
          key={cat.id}
          id={cat.id}
          className="py-16 px-4 even:bg-gray-50 odd:bg-white"
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {cat.label}
              </h2>
              <p className="text-gray-600 max-w-2xl">{cat.description}</p>
            </div>

            {cat.id === "link-building" && (
              <div className="mb-8 bg-amber-50 border border-amber-200 rounded-xl px-6 py-4">
                <p className="font-semibold text-amber-900 mb-1">Not sure where to start?</p>
                <p className="text-sm text-amber-800">
                  Most law firms begin with Blogger Outreach at DR20+ or DR30+. DR20+ is right for newer sites and local keywords. DR30+ is the most popular starting point for established firms in competitive markets.
                </p>
              </div>
            )}

            <div className="space-y-6">
              {cat.products.map((p) => (
                <div
                  key={p.slug}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  {/* Product header */}
                  <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{p.name}</h3>
                      <p className="text-sm text-gray-600 mt-0.5">{p.tagline}</p>
                    </div>
                    <Link
                      href={`/products/${p.slug}`}
                      className="shrink-0 flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      Full details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Tier table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                          <th className="text-left px-6 py-3 font-semibold text-gray-700">Tier</th>
                          <th className="px-6 py-3 font-semibold text-gray-700">Price</th>
                          <th className="px-6 py-3 font-semibold text-gray-700">Delivery</th>
                          <th className="px-6 py-3 font-semibold text-gray-700"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {p.tiers.map((tier, i) => (
                          <tr
                            key={tier.name}
                            className={`border-b border-gray-100 last:border-0 ${
                              i % 2 === 0 ? "" : "bg-gray-50/50"
                            }`}
                          >
                            <td className="px-6 py-3.5">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-medium text-gray-800">{tier.name}</span>
                                {tier.mostPopular && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-800">
                                    Most Popular
                                  </span>
                                )}
                              </div>
                              {tier.note && (
                                <p className="text-xs text-gray-500 mt-0.5">{tier.note}</p>
                              )}
                            </td>
                            <td className="px-6 py-3.5 font-bold text-amber-700">
                              ${tier.ourPrice.toLocaleString()}
                              {p.slug === "content-writing" && (
                                <span className="text-gray-500 font-normal"> /article</span>
                              )}
                            </td>
                            <td className="px-6 py-3.5 text-gray-600">
                              {tier.ourDelivery} days
                            </td>
                            <td className="px-6 py-3.5">
                              <Link
                                href="/contact"
                                className="text-xs font-semibold text-amber-700 hover:text-amber-800 hover:underline"
                              >
                                Order
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Volume note */}
      <section className="py-12 px-4 bg-amber-50 border-t border-amber-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-amber-900 mb-3">
            Ordering multiple units or running a sustained campaign?
          </h2>
          <p className="text-amber-800 mb-6">
            Volume pricing is available for recurring monthly orders and multi-unit purchases.
            Contact us to discuss a pricing structure for your law firm&apos;s ongoing SEO strategy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Contact Us for Volume Pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CtaBanner
        headline="Ready to place your first order?"
        subheadline="Browse product pages for full details on each service, then reach out to place your order."
        primaryCta={{ label: "Browse Products", href: "/products" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
