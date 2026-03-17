interface StatSingleProps {
  value: string;
  comparison: string;
  comparisonLabel: string;
}

export function HuizenmarktStatSingle({ value, comparison, comparisonLabel }: StatSingleProps) {
  return (
    <div className="flex flex-wrap items-baseline gap-4 mb-6">
      <span className="text-4xl md:text-5xl font-serif font-bold text-boutique-dark">{value}</span>
      <span className="text-boutique-orange font-sans text-sm uppercase tracking-wider">
        {comparison} {comparisonLabel}
      </span>
    </div>
  );
}

interface StatCompareProps {
  valueThisYear: string;
  valueLastYear: string;
  labelThis: string;
  labelLast: string;
  unit?: string;
}

export function HuizenmarktStatCompare({
  valueThisYear,
  valueLastYear,
  labelThis,
  labelLast,
  unit = "",
}: StatCompareProps) {
  return (
    <div className="grid grid-cols-2 gap-8 md:gap-12 mb-6">
      <div>
        <p className="text-3xl md:text-4xl font-serif font-bold text-boutique-dark">
          {valueThisYear} {unit}
        </p>
        <p className="text-sm text-gray-500 font-sans uppercase tracking-wider mt-1">{labelThis}</p>
      </div>
      <div>
        <p className="text-3xl md:text-4xl font-serif font-bold text-boutique-beige">
          {valueLastYear} {unit}
        </p>
        <p className="text-sm text-gray-500 font-sans uppercase tracking-wider mt-1">{labelLast}</p>
      </div>
    </div>
  );
}
