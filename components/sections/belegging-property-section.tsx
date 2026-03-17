import type { AanbodProperty, FilterOption } from "@/lib/types";
import { AanbodPropertyList } from "./aanbod-property-list";

interface BeleggingPropertySectionProps {
  title: string;
  properties: AanbodProperty[];
  buurtFilters: FilterOption[];
  prijsFilters: FilterOption[];
}

export function BeleggingPropertySection({
  title,
  properties,
  buurtFilters,
  prijsFilters,
}: BeleggingPropertySectionProps) {
  return (
    <section className="border-t border-boutique-dark/10">
      <div className="container mx-auto px-6 pt-16 pb-8 reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark text-center max-w-3xl mx-auto">
          {title}
        </h2>
      </div>
      <AanbodPropertyList
        properties={properties}
        buurtFilters={buurtFilters}
        prijsFilters={prijsFilters}
      />
    </section>
  );
}
