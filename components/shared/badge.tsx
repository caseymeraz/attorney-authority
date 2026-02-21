import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "gold" | "dark" | "light";
}

export default function Badge({ children, variant = "gold" }: BadgeProps) {
  const variants = {
    gold: "bg-amber-100 text-amber-800 border border-amber-200",
    dark: "bg-gray-900 text-white border border-gray-700",
    light: "bg-gray-100 text-gray-700 border border-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
