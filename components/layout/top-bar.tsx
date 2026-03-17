import { Star } from "lucide-react";

interface TopBarProps {
  rating: string;
  phone: string;
}

export function TopBar({ rating, phone }: TopBarProps) {
  return (
    <div className="bg-boutique-stone text-boutique-dark py-2 text-[11px] uppercase tracking-[0.2em] font-bold border-b border-boutique-dark/5 relative z-50 font-sans">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <Star className="w-3 h-3 text-boutique-dark" fill="currentColor" /> {rating}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`tel:${phone.replace(/-/g, "")}`}
            className="hover:text-boutique-orange transition-colors"
          >
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
}
