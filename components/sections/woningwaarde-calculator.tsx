"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

interface CalculatorField {
  label: string;
  placeholder: string;
  required: boolean;
}

interface WoningwaardeCalculatorProps {
  fields: {
    postcode: CalculatorField;
    huisnummer: CalculatorField;
    oppervlakte: CalculatorField;
  };
  submitLabel: string;
  resultPrefix: string;
  resultSuffix: string;
}

export function WoningwaardeCalculator({
  fields,
  submitLabel,
  resultPrefix,
  resultSuffix,
}: WoningwaardeCalculatorProps) {
  const [result, setResult] = useState<string | null>(null);
  const [postcode, setPostcode] = useState("");
  const [huisnummer, setHuisnummer] = useState("");
  const [oppervlakte, setOppervlakte] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const m2 = parseFloat(oppervlakte);
    if (isNaN(m2) || m2 <= 0) return;

    const basePrice = 7250;
    const postcodeHash = postcode
      .split("")
      .reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const variation = 0.85 + (postcodeHash % 30) / 100;
    const estimated =
      Math.round((m2 * basePrice * variation) / 1000) * 1000;

    const formatted = new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(estimated);

    setResult(formatted);
  }

  const inputClasses =
    "w-full border-b border-boutique-dark/20 bg-transparent px-0 py-4 text-lg font-serif focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-300";
  const labelClasses =
    "block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-1";

  return (
    <section
      id="calculator"
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-6xl font-serif text-boutique-dark leading-[1.1] mb-6">
              Bereken uw waarde
            </h2>
            <p className="text-gray-600 font-light text-lg italic max-w-2xl mx-auto">
              Vul de onderstaande gegevens in en ontvang direct een indicatie van de huidige marktwaarde van uw woning.
            </p>
          </div>

          <div className="bg-white p-10 md:p-20 shadow-2xl reveal" style={{ transitionDelay: "150ms" }}>
            {result ? (
              <div className="text-center py-12">
                <p className="text-gray-500 font-sans text-xs uppercase tracking-[0.2em] font-bold mb-8">
                  Indicatieve Marktwaarde
                </p>
                <div className="text-6xl md:text-8xl font-serif text-boutique-dark mb-12">
                  {result}
                </div>
                
                <div className="bg-boutique-stone/20 p-8 border-l-2 border-boutique-orange mb-12 max-w-2xl mx-auto">
                  <p className="text-gray-700 font-light leading-relaxed">
                    {resultPrefix} {result}. {resultSuffix}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setResult(null)}
                  className="inline-flex items-center gap-4 text-boutique-dark font-sans font-bold uppercase tracking-[0.2em] text-xs hover:text-boutique-orange transition-colors"
                >
                  Nieuwe berekening maken
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="space-y-10 mb-12">
                  <div>
                    <label htmlFor="postcode" className={labelClasses}>
                      {fields.postcode.label}
                    </label>
                    <input
                      id="postcode"
                      type="text"
                      required={fields.postcode.required}
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      className={inputClasses}
                      placeholder={fields.postcode.placeholder}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label htmlFor="huisnummer" className={labelClasses}>
                        {fields.huisnummer.label}
                      </label>
                      <input
                        id="huisnummer"
                        type="text"
                        required={fields.huisnummer.required}
                        value={huisnummer}
                        onChange={(e) => setHuisnummer(e.target.value)}
                        className={inputClasses}
                        placeholder={fields.huisnummer.placeholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="oppervlakte" className={labelClasses}>
                        {fields.oppervlakte.label}
                      </label>
                      <input
                        id="oppervlakte"
                        type="number"
                        min="1"
                        required={fields.oppervlakte.required}
                        value={oppervlakte}
                        onChange={(e) => setOppervlakte(e.target.value)}
                        className={inputClasses}
                        placeholder={fields.oppervlakte.placeholder}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center pt-8">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-4 bg-boutique-dark text-white px-12 py-5 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange transition-colors"
                  >
                    {submitLabel}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
