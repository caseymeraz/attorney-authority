"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Law Firm Link Building", href: "/services/law-firm-link-building" },
  { label: "Legal Content Writing", href: "/services/legal-content-writing" },
  { label: "Law Firm Digital PR", href: "/services/law-firm-digital-pr" },
  { label: "SEO Strategy Tools", href: "/services/law-firm-seo-tools" },
  { label: "Design & Video", href: "/services/legal-design-video" },
];

const products = [
  { label: "Blogger Outreach", href: "/products/blogger-outreach" },
  { label: "Niche Edits", href: "/products/niche-edits" },
  { label: "Content Writing", href: "/products/content-writing" },
  { label: "Keyword Research", href: "/products/keyword-research" },
  { label: "Content Plan", href: "/products/content-plan" },
  { label: "Citation Building", href: "/products/citation-building" },
  { label: "Press Release", href: "/products/press-release" },
  { label: "Brand Mentions", href: "/products/brand-mentions" },
  { label: "Digital PR Campaign", href: "/products/digital-pr-campaign" },
  { label: "Community Mentions", href: "/products/community-mentions" },
  { label: "Explainer Videos", href: "/products/explainer-videos" },
  { label: "Blog to Video", href: "/products/blog-to-video" },
  { label: "Infographic Design", href: "/products/infographic-design" },
  { label: "Multilingual Links", href: "/products/multilingual-links" },
];

const practiceAreas = [
  { label: "Personal Injury", href: "/practice-areas/personal-injury" },
  { label: "Criminal Defense", href: "/practice-areas/criminal-defense" },
  { label: "Family Law", href: "/practice-areas/family-law" },
  { label: "Estate Planning", href: "/practice-areas/estate-planning" },
  { label: "Business Law", href: "/practice-areas/business-law" },
  { label: "Immigration Law", href: "/practice-areas/immigration-law" },
  { label: "Workers Compensation", href: "/practice-areas/workers-compensation" },
  { label: "DUI Defense", href: "/practice-areas/dui-defense" },
];

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function Dropdown({ label, items, isOpen, onToggle, onClose }: DropdownProps) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 py-2 transition-colors"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={onClose}
            aria-hidden="true"
          />
          <div className="absolute top-full left-0 mt-1 z-20 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px]">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-800 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-amber-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">AA</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">
              Attorney<span className="text-amber-700">Authority</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Dropdown
              label="Services"
              items={services}
              isOpen={openMenu === "services"}
              onToggle={() => toggleMenu("services")}
              onClose={() => setOpenMenu(null)}
            />
            <Dropdown
              label="Products"
              items={products}
              isOpen={openMenu === "products"}
              onToggle={() => toggleMenu("products")}
              onClose={() => setOpenMenu(null)}
            />
            <Dropdown
              label="Practice Areas"
              items={practiceAreas}
              isOpen={openMenu === "practice-areas"}
              onToggle={() => toggleMenu("practice-areas")}
              onClose={() => setOpenMenu(null)}
            />
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/guides/law-firm-link-building-guide"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Guides
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/pricing"
              className="bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              View Pricing
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {[
              { name: "services", label: "Services", items: services },
              { name: "products", label: "Products", items: products },
              { name: "practice-areas", label: "Practice Areas", items: practiceAreas },
            ].map(({ name, label, items }) => (
              <div key={name}>
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === name ? null : name)
                  }
                  className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700"
                >
                  {label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === name && (
                  <div className="ml-4 space-y-1 pb-2">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-gray-600 hover:text-amber-800"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700"
            >
              Pricing
            </Link>
            <Link
              href="/guides/law-firm-link-building-guide"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700"
            >
              Guides
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700"
            >
              Contact
            </Link>

            <div className="pt-2 pb-1">
              <Link
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
