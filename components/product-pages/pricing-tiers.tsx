import Link from "next/link";
import type { PublicProductTier } from "@/lib/products";

interface PricingTiersProps {
  tiers: PublicProductTier[];
  ctaHref?: string;
  ctaLabel?: string;
}

export default function PricingTiers({
  tiers,
  ctaHref = "/contact",
  ctaLabel = "Get Started",
}: PricingTiersProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tiers.map((tier, i) => {
        const isPopular = tiers.length > 3 && i === Math.floor(tiers.length / 2);
        return (
          <div
            key={tier.name}
            className={`relative rounded-xl border p-6 ${
              isPopular
                ? "border-amber-600 bg-amber-50 shadow-lg"
                : "border-gray-200 bg-white"
            }`}
          >
            {isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-sm font-semibold text-gray-500 mb-1">{tier.name}</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              ${tier.ourPrice.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 mb-4">
              Delivered in {tier.ourDelivery} days
            </div>
            <Link
              href={ctaHref}
              className={`block w-full text-center text-sm font-semibold py-2.5 rounded-lg transition-colors ${
                isPopular
                  ? "bg-amber-700 hover:bg-amber-800 text-white"
                  : "border border-amber-700 text-amber-700 hover:bg-amber-50"
              }`}
            >
              {ctaLabel}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
