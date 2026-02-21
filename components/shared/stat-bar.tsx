const DEFAULT_STATS = [
  { value: "500+", label: "Links Placed for Law Firms" },
  { value: "DR10–60", label: "Tiered Domain Ratings" },
  { value: "17-day", label: "Max Link Delivery" },
  { value: "0", label: "Hidden Fees" },
];

export default function StatBar({
  stats = DEFAULT_STATS,
}: {
  stats?: { value: string; label: string }[];
}) {
  return (
    <div className="bg-amber-700 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-amber-100 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
