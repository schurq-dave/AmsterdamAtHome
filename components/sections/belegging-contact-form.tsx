"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

interface BeleggingFormData {
  heading: string;
  fields: {
    naam: { label: string; required: boolean };
    email: { label: string; required: boolean };
    telefoon: { label: string; required: boolean };
    onderwerp: { label: string; required: boolean };
    bericht: { label: string; required: boolean };
    privacy: { label: string; required: boolean };
    kwartaal: { label: string; required: boolean };
    woningen: { label: string; required: boolean };
  };
  submitLabel: string;
}

interface BeleggingContactFormProps {
  formData: BeleggingFormData;
}

export function BeleggingContactForm({ formData }: BeleggingContactFormProps) {
  const { heading } = formData;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const { fields, submitLabel } = formData;

  return (
    <section
      id="kennismakingsgesprek"
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark text-center mb-16 reveal">
          {heading}
        </h2>

        {submitted ? (
          <div className="bg-white p-10 md:p-14 shadow-xl border-t-4 border-boutique-orange text-center reveal">
            <h3 className="text-2xl font-serif text-boutique-dark mb-4">
              Bedankt voor uw aanvraag!
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Wij nemen zo snel mogelijk contact met u op.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 md:p-14 shadow-xl border-t-4 border-boutique-orange space-y-6 reveal"
          >
            <div>
              <label
                htmlFor="naam"
                className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2"
              >
                {fields.naam.label} *
              </label>
              <input
                id="naam"
                type="text"
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper"
                placeholder="Uw volledige naam"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2"
              >
                {fields.email.label} *
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper"
                placeholder="uw@email.nl"
              />
            </div>

            <div>
              <label
                htmlFor="telefoon"
                className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2"
              >
                {fields.telefoon.label}
              </label>
              <input
                id="telefoon"
                type="tel"
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper"
                placeholder="06 - 12345678"
              />
            </div>

            <div>
              <label
                htmlFor="onderwerp"
                className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2"
              >
                {fields.onderwerp.label}
              </label>
              <input
                id="onderwerp"
                type="text"
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper"
                placeholder="Onderwerp van uw bericht"
              />
            </div>

            <div>
              <label
                htmlFor="bericht"
                className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2"
              >
                {fields.bericht.label}
              </label>
              <textarea
                id="bericht"
                rows={5}
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper resize-none"
                placeholder="Uw bericht..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="privacy"
                type="checkbox"
                required
                className="mt-1 w-4 h-4 border border-gray-200 focus:ring-boutique-orange text-boutique-orange"
              />
              <label
                htmlFor="privacy"
                className="text-sm font-sans text-gray-600 leading-relaxed"
              >
                {fields.privacy.label} *
              </label>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="kwartaal"
                type="checkbox"
                className="mt-1 w-4 h-4 border border-gray-200 focus:ring-boutique-orange text-boutique-orange"
              />
              <label
                htmlFor="kwartaal"
                className="text-sm font-sans text-gray-600 leading-relaxed"
              >
                {fields.kwartaal.label}
              </label>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="woningen"
                type="checkbox"
                className="mt-1 w-4 h-4 border border-gray-200 focus:ring-boutique-orange text-boutique-orange"
              />
              <label
                htmlFor="woningen"
                className="text-sm font-sans text-gray-600 leading-relaxed"
              >
                {fields.woningen.label}
              </label>
            </div>

            <div className="pt-4">
              <p className="text-xs text-gray-400 mb-4">
                CAPTCHA placeholder (vormgeving)
              </p>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs py-4 hover:bg-boutique-orange transition-colors"
            >
              <Send className="w-4 h-4" />
              {submitLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
