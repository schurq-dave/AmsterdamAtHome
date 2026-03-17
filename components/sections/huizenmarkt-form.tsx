"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

interface FormOption {
  value: string;
  label: string;
}

interface HuizenmarktFormProps {
  heading: string;
  buurtOptions: FormOption[];
  verhuizenOptions: FormOption[];
  aankoopVerkoopOptions: FormOption[];
  languageOptions: FormOption[];
  submitLabel: string;
  privacyLabel: string;
  kwartaalrapportLabel: string;
  woningenLabel: string;
}

export function HuizenmarktForm({
  heading,
  buurtOptions,
  verhuizenOptions,
  aankoopVerkoopOptions,
  languageOptions,
  submitLabel,
  privacyLabel,
  kwartaalrapportLabel,
  woningenLabel,
}: HuizenmarktFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kwartaalrapport-form" className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6 max-w-2xl reveal">
        <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-12 text-center">{heading}</h2>

        {submitted ? (
          <div className="bg-white p-10 md:p-14 shadow-xl border-t-4 border-boutique-orange text-center">
            <h3 className="text-2xl font-serif text-boutique-dark mb-4">Bedankt voor uw aanvraag!</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              We nemen zo snel mogelijk contact met u op met uw kwartaalrapport.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-boutique-orange space-y-6">
            {/* Naam - Voornaam, Achternaam */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="voornaam" className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2">
                  Voornaam *
                </label>
                <input
                  id="voornaam"
                  name="voornaam"
                  type="text"
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper"
                  placeholder="Voornaam"
                />
              </div>
              <div>
                <label htmlFor="achternaam" className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2">
                  Achternaam *
                </label>
                <input
                  id="achternaam"
                  name="achternaam"
                  type="text"
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper"
                  placeholder="Achternaam"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2">
                E-mailadres *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper"
                placeholder="uw@email.nl"
              />
            </div>

            <div>
              <label htmlFor="telefoon" className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2">
                Telefoonnummer *
              </label>
              <input
                id="telefoon"
                name="telefoon"
                type="tel"
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper"
                placeholder="06 - 12345678"
              />
            </div>

            <div>
              <label htmlFor="postcode" className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2">
                Postcode *
              </label>
              <input
                id="postcode"
                name="postcode"
                type="text"
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper"
                placeholder="1017 SE"
              />
            </div>

            <div>
              <label htmlFor="buurt" className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2">
                Buurt *
              </label>
              <select
                id="buurt"
                name="buurt"
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark bg-boutique-paper"
              >
                {buurtOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="verhuizen" className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2">
                Ben je van plan te verhuizen?
              </label>
              <select
                id="verhuizen"
                name="verhuizen"
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark bg-boutique-paper"
              >
                {verhuizenOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="aankoop-verkoop" className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2">
                Aankoop/Verkoop
              </label>
              <select
                id="aankoop-verkoop"
                name="aankoop_verkoop"
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark bg-boutique-paper"
              >
                {aankoopVerkoopOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="opmerkingen" className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2">
                Opmerkingen
              </label>
              <textarea
                id="opmerkingen"
                name="opmerkingen"
                rows={4}
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper resize-none"
                placeholder="Extra vragen of opmerkingen..."
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="privacy" required className="mt-1" />
                <span className="text-sm text-gray-600">{privacyLabel} *</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="kwartaalrapport" defaultChecked className="mt-1" />
                <span className="text-sm text-gray-600">{kwartaalrapportLabel} *</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="woningen" className="mt-1" />
                <span className="text-sm text-gray-600">{woningenLabel}</span>
              </label>
            </div>

            <div>
              <label htmlFor="language" className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2">
                Taal / Language
              </label>
              <select
                id="language"
                name="language"
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark bg-boutique-paper"
              >
                {languageOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2">
              <div className="mb-4 py-4 px-4 bg-boutique-stone/50 border border-boutique-dark/10 flex items-center justify-center min-h-[60px]">
                <span className="text-xs text-gray-500 uppercase tracking-wider">CAPTCHA</span>
              </div>
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
