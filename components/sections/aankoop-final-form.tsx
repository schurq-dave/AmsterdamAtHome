import { AankoopKennismakenForm } from "@/components/forms/aankoop-kennismaken-form";

interface AankoopFinalFormProps {
  heading: string;
  subheading: string;
}

export function AankoopFinalForm({ heading, subheading }: AankoopFinalFormProps) {
  return (
    <section
      id="kennismaken"
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6">
            {heading}
          </h2>
          <p className="text-xl font-light text-gray-700">{subheading}</p>
        </div>
        <div className="reveal">
          <AankoopKennismakenForm submitLabel="Verstuur aanvraag" />
        </div>
      </div>
    </section>
  );
}
