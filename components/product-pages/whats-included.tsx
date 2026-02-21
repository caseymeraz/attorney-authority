import { CheckCircle } from "lucide-react";

interface WhatsIncludedProps {
  features: string[];
  headline?: string;
}

export default function WhatsIncluded({
  features,
  headline = "What's included with every order",
}: WhatsIncludedProps) {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{headline}</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {features.map((f) => (
            <div key={f} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
              <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
