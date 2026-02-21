import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

interface RelatedProductsProps {
  slugs: string[];
  headline?: string;
}

export default function RelatedProducts({
  slugs,
  headline = "Related Services",
}: RelatedProductsProps) {
  const products = slugs
    .map((slug) => PRODUCTS.find((p) => p.slug === slug))
    .filter(Boolean);

  if (products.length === 0) return null;

  return (
    <section className="py-12 px-4 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{headline}</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {products.map((p) => (
            <Link
              key={p!.slug}
              href={`/products/${p!.slug}`}
              className="group block border border-gray-200 rounded-xl p-5 hover:border-amber-400 hover:shadow-sm transition-all"
            >
              <div className="text-xs font-semibold text-amber-700 mb-1">
                From ${Math.min(...p!.tiers.map((t) => t.ourPrice)).toLocaleString()}
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-amber-800 transition-colors">
                {p!.name}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">{p!.tagline}</p>
              <div className="flex items-center gap-1 text-xs font-semibold text-amber-700">
                View details <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
