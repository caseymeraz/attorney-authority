import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Law Firm Link Building", href: "/services/law-firm-link-building" },
    { label: "Legal Content Writing", href: "/services/legal-content-writing" },
    { label: "Law Firm Digital PR", href: "/services/law-firm-digital-pr" },
    { label: "SEO Strategy Tools", href: "/services/law-firm-seo-tools" },
    { label: "Design & Video", href: "/services/legal-design-video" },
  ],
  Products: [
    { label: "Blogger Outreach", href: "/products/blogger-outreach" },
    { label: "Niche Edits", href: "/products/niche-edits" },
    { label: "Content Writing", href: "/products/content-writing" },
    { label: "Press Releases", href: "/products/press-release" },
    { label: "Digital PR Campaign", href: "/products/digital-pr-campaign" },
    { label: "Brand Mentions", href: "/products/brand-mentions" },
    { label: "Keyword Research", href: "/products/keyword-research" },
    { label: "Citation Building", href: "/products/citation-building" },
  ],
  "Practice Areas": [
    { label: "Personal Injury SEO", href: "/practice-areas/personal-injury" },
    { label: "Criminal Defense SEO", href: "/practice-areas/criminal-defense" },
    { label: "Family Law SEO", href: "/practice-areas/family-law" },
    { label: "Estate Planning SEO", href: "/practice-areas/estate-planning" },
    { label: "Business Law SEO", href: "/practice-areas/business-law" },
    { label: "Immigration Law SEO", href: "/practice-areas/immigration-law" },
    { label: "Workers Comp SEO", href: "/practice-areas/workers-compensation" },
    { label: "DUI Defense SEO", href: "/practice-areas/dui-defense" },
  ],
  Resources: [
    { label: "Law Firm Link Building Guide", href: "/guides/law-firm-link-building-guide" },
    { label: "Legal Content Strategy", href: "/guides/legal-content-strategy" },
    { label: "Law Firm SEO Checklist", href: "/guides/law-firm-seo-checklist" },
    { label: "Domain Rating Guide", href: "/guides/domain-rating-guide-lawyers" },
    { label: "Blogger Outreach vs Niche Edits", href: "/comparisons/blogger-outreach-vs-niche-edits" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top row */}
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">AA</span>
            </div>
            <span className="font-bold text-white text-lg">
              Attorney<span className="text-amber-400">Authority</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 max-w-md leading-relaxed">
            The only SEO platform built exclusively for law firms. Transparent pricing on
            DR-tiered link building, legal content writing, press releases, and digital PR.
            No retainers. Order by service.
          </p>
          <p className="text-xs text-gray-500 mt-3">
            <strong className="text-amber-400">Build Your Law Firm&apos;s Authority</strong>
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Attorney Authority. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
