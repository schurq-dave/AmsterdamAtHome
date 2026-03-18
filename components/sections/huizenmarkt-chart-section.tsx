interface ChartSectionProps {
  heading: string;
  chartLabel: string;
  children: React.ReactNode;
}

function ChartPlaceholder({ label }: { label: string }) {
  return (
    <div className="bg-boutique-stone/50 border border-boutique-dark/10 rounded p-8 md:p-12 flex items-center justify-center min-h-[200px]">
      <span className="text-boutique-beige font-sans text-sm uppercase tracking-widest">{label}</span>
    </div>
  );
}

export function HuizenmarktChartSection({ heading, chartLabel, children }: ChartSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-transparent" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6 max-w-5xl reveal">
        <h2 className="text-2xl md:text-4xl font-serif text-boutique-dark mb-10 uppercase">{heading}</h2>
        <div className="mb-8">{children}</div>
        <ChartPlaceholder label={chartLabel} />
      </div>
    </section>
  );
}
