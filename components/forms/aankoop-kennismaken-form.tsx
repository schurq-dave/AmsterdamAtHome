"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

interface AankoopKennismakenFormProps {
  submitLabel?: string;
}

export function AankoopKennismakenForm({
  submitLabel = "Verstuur",
}: AankoopKennismakenFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white p-10 md:p-14 shadow-xl border-t-4 border-boutique-orange text-center">
        <h3 className="text-2xl font-serif text-boutique-dark mb-4">
          Bedankt voor uw bericht!
        </h3>
        <p className="text-gray-600 font-light leading-relaxed">
          Wij nemen zo snel mogelijk contact met u op voor een vrijblijvend
          kennismakingsgesprek.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 md:p-14 shadow-xl border-t-4 border-boutique-orange space-y-6"
    >
      <div>
        <label
          htmlFor="naam-kennismaken"
          className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2"
        >
          Naam *
        </label>
        <input
          id="naam-kennismaken"
          name="naam"
          type="text"
          required
          className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper"
          placeholder="Uw volledige naam"
        />
      </div>
      <div>
        <label
          htmlFor="email-kennismaken"
          className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2"
        >
          E-mailadres *
        </label>
        <input
          id="email-kennismaken"
          name="email"
          type="email"
          required
          className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper"
          placeholder="uw@email.nl"
        />
      </div>
      <div>
        <label
          htmlFor="telefoon-kennismaken"
          className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2"
        >
          Telefoon
        </label>
        <input
          id="telefoon-kennismaken"
          name="telefoon"
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
          Onderwerp
        </label>
        <input
          id="onderwerp"
          name="onderwerp"
          type="text"
          className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper"
          placeholder="Waar gaat uw vraag over?"
        />
      </div>
      <div>
        <label
          htmlFor="bericht"
          className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2"
        >
          Bericht
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={5}
          className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper resize-none"
          placeholder="Vertel ons over uw zoektocht naar een woning..."
        />
      </div>
      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            required
            className="mt-1 w-4 h-4 border-gray-200 text-boutique-orange focus:ring-boutique-orange"
          />
          <span className="text-sm text-gray-600 font-light">
            Ik ga akkoord met het{" "}
            <a href="/privacy" className="underline hover:text-boutique-orange">
              privacybeleid
            </a>{" "}
            *
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="kwartaalrapport"
            className="mt-1 w-4 h-4 border-gray-200 text-boutique-orange focus:ring-boutique-orange"
          />
          <span className="text-sm text-gray-600 font-light">
            Ik ontvang graag het kwartaalrapport
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="woningen"
            className="mt-1 w-4 h-4 border-gray-200 text-boutique-orange focus:ring-boutique-orange"
          />
          <span className="text-sm text-gray-600 font-light">
            Wanneer Amsterdam at Home unieke woningen te koop aanbiedt ontvang ik
            deze graag
          </span>
        </label>
      </div>
      <div className="bg-gray-100 border border-gray-200 p-4 text-center text-sm text-gray-500 font-light">
        [CAPTCHA placeholder]
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-3 bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs py-4 hover:bg-boutique-orange transition-colors"
      >
        <Send className="w-4 h-4" />
        {submitLabel}
      </button>
    </form>
  );
}
