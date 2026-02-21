import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/marketing/breadcrumb";
import JsonLd from "@/components/marketing/json-ld";
import PricingTiers from "@/components/product-pages/pricing-tiers";
import WhatsIncluded from "@/components/product-pages/whats-included";
import FaqSection from "@/components/service-pages/faq-section";
import RelatedProducts from "@/components/service-pages/related-products";
import CtaBanner from "@/components/shared/cta-banner";
import { getProductBySlug, toPublicProduct } from "@/lib/products";

const product = getProductBySlug("content-plan")!;
const pub = toPublicProduct(product);

export const metadata: Metadata = {
  title: `${product.name} for Law Firms | Attorney Authority`,
  description: product.description.slice(0, 160),
  alternates: { canonical: `https://attorneyauthority.com/products/content-plan` },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  brand: { "@type": "Organization", name: "Attorney Authority" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: Math.min(...product.tiers.map(t => t.ourPrice)),
    highPrice: Math.max(...product.tiers.map(t => t.ourPrice)),
    offerCount: product.tiers.length,
  },
};

export default function ProductPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb items={[{ label: "Products", href: "/products" }, { label: product.shortName, href: `/products/content-plan` }]} />
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-amber-700/20 border border-amber-600/30 text-amber-400 px-3 py-1 rounded-full font-semibold">Legal niche only</span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              {pub.tiers[0].ourDelivery}-day delivery
            </span>
            <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-semibold">
              From ${Math.min(...pub.tiers.map(t => t.ourPrice)).toLocaleString()}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{product.name} for Law Firms</h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">{product.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#pricing" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">View Pricing</a>
            <Link href="/contact" className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">Ask a Question</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is {product.shortName} for Law Firms?</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
        </div>
      </section>

      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{product.shortName} Pricing</h2>
          <p className="text-gray-600 mb-8">Transparent per-unit pricing with stated delivery guarantee.</p>
          <PricingTiers tiers={pub.tiers} ctaHref="/contact" ctaLabel="Order Now" />
        </div>
      </section>

      <WhatsIncluded features={pub.features} />
      <FaqSection faqs={pub.faqs} />
      <RelatedProducts slugs={pub.relatedProducts} />
      <CtaBanner />
    </>
  );
}
