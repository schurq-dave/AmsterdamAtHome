import { CheckCircle, AlertTriangle } from "lucide-react";

interface ListItem {
  title: string;
  description: string;
}

interface StilleVerkoopListSectionProps {
  heading: string;
  items: ListItem[];
  variant: "voordeel" | "nadeel";
}

export function StilleVerkoopListSection({
  heading,
  items,
  variant,
}: StilleVerkoopListSectionProps) {
  const isVoordeel = variant === "voordeel";
  const Icon = isVoordeel ? CheckCircle : AlertTriangle;
  const borderColor = isVoordeel ? "border-boutique-orange" : "border-boutique-beige";
  const iconColor = isVoordeel ? "text-boutique-orange" : "text-boutique-beige";
  const bgData = isVoordeel ? "bg-boutique-paper" : "bg-boutique-stone";

  return (
    <section
      className="py-24 md:py-32 bg-transparent"
      data-bg={bgData}
    >
      <div className="container mx-auto px-6 max-w-5xl reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-16 text-center">
          {heading}
        </h2>
        <div className={`grid grid-cols-1 ${isVoordeel ? "md:grid-cols-2" : "md:grid-cols-1 max-w-3xl mx-auto"} gap-6`}>
          {items.map((item) => (
            <div
              key={item.title}
              className={`flex gap-5 items-start p-8 bg-white border-l-4 ${borderColor} shadow-sm hover:shadow-md transition-shadow group`}
            >
              <Icon
                className={`w-6 h-6 ${iconColor} shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}
              />
              <div>
                <h3 className="text-lg font-serif font-bold text-boutique-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
