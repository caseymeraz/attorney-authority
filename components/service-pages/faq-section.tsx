"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import JsonLd from "@/components/marketing/json-ld";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  headline?: string;
}

export default function FaqSection({
  faqs,
  headline = "Frequently Asked Questions",
}: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <JsonLd data={schema} />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{headline}</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-6 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-sm leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 shrink-0 mt-0.5 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
