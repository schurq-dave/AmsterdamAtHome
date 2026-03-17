interface StatItem {
  value: string;
  label: string;
}

interface NeighborhoodStatsProps {
  stats: StatItem[];
}

export function NeighborhoodStats({ stats }: NeighborhoodStatsProps) {
  return (
    <section className="py-12 bg-boutique-beige text-white">
      <div className="container mx-auto px-6 max-w-6xl reveal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0">
              <span className="text-5xl md:text-6xl font-serif text-white mb-2 drop-shadow-sm">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-white/90">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
