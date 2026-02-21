import Link from "next/link";

interface CtaBannerProps {
  headline?: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CtaBanner({
  headline = "Ready to Build Your Law Firm's Authority?",
  subheadline = "Browse transparent, a-la-carte pricing on every service  -  no retainers, no hidden fees.",
  primaryCta = { label: "View All Pricing", href: "/pricing" },
  secondaryCta = { label: "Talk to Us First", href: "/contact" },
}: CtaBannerProps) {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{headline}</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">{subheadline}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-sm"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors text-sm"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
