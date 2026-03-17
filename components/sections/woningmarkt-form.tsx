"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

interface FormOption {
  value: string;
  label: string;
}

interface WoningmarktFormProps {
  heading: string;
  buurtOptions: FormOption[];
  verhuizenOptions: FormOption[];
  aankoopVerkoopOptions: FormOption[];
  submitLabel: string;
  privacyLabel: string;
  kwartaalrapportLabel: string;
  woningenLabel: string;
  languageEnLabel: string;
  languageNlLabel: string;
}

export function WoningmarktForm({
  heading,
  buurtOptions,
  verhuizenOptions,
  aankoopVerkoopOptions,
  submitLabel,
  privacyLabel,
  kwartaalrapportLabel,
  woningenLabel,
  languageEnLabel,
  languageNlLabel,
}: WoningmarktFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper";
  const labelClass =
    "block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2";

  return (
    <section
      id="woningmarkt-form"
      className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-2xl reveal">
        <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-12 text-center">
          {heading}
        </h2>

        {submitted ? (
          <div className="bg-white p-10 md:p-14 shadow-xl border-t-4 border-boutique-orange text-center">
            <h3 className="text-2xl font-serif text-boutique-dark mb-4">
              Bedankt voor uw aanvraag!
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              We nemen zo snel mogelijk contact met u op met uw
              woningmarktrapport.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-boutique-orange space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="wm-voornaam" className={labelClass}>
                  Voornaam *
                </label>
                <input
                  id="wm-voornaam"
                  name="voornaam"
                  type="text"
                  required
                  className={inputClass}
                  placeholder="Voornaam"
                />
              </div>
              <div>
                <label htmlFor="wm-achternaam" className={labelClass}>
                  Achternaam *
                </label>
                <input
                  id="wm-achternaam"
                  name="achternaam"
                  type="text"
                  required
                  className={inputClass}
                  placeholder="Achternaam"
                />
              </div>
            </div>

            <div>
              <label htmlFor="wm-email" className={labelClass}>
                E-mailadres *
              </label>
              <input
                id="wm-email"
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="uw@email.nl"
              />
            </div>

            <div>
              <label htmlFor="wm-telefoon" className={labelClass}>
                Telefoonnummer *
              </label>
              <input
                id="wm-telefoon"
                name="telefoon"
                type="tel"
                required
                className={inputClass}
                placeholder="06 12345678"
              />
            </div>

            <div>
              <label htmlFor="wm-postcode" className={labelClass}>
                Postcode *
              </label>
              <input
                id="wm-postcode"
                name="postcode"
                type="text"
                required
                className={inputClass}
                placeholder="1017 SE"
              />
            </div>

            <div>
              <label htmlFor="wm-buurt" className={labelClass}>
                Buurt *
              </label>
              <select
                id="wm-buurt"
                name="buurt"
                required
                className={inputClass}
              >
                {buurtOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="wm-verhuizen" className={labelClass}>
                Ben je van plan te verhuizen? *
              </label>
              <select
                id="wm-verhuizen"
                name="verhuizen"
                required
                className={inputClass}
              >
                {verhuizenOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="wm-aankoop-verkoop" className={labelClass}>
                Aankoop / Verkoop *
              </label>
              <select
                id="wm-aankoop-verkoop"
                name="aankoopVerkoop"
                required
                className={inputClass}
              >
                {aankoopVerkoopOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="wm-opmerkingen" className={labelClass}>
                Opmerkingen
              </label>
              <textarea
                id="wm-opmerkingen"
                name="opmerkingen"
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Extra vragen of opmerkingen..."
              />
            </div>

            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">
                  {privacyLabel} *
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="kwartaalrapport"
                  required
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">
                  {kwartaalrapportLabel} *
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="woningen"
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">{woningenLabel}</span>
              </label>
            </div>

            <div>
              <span className={labelClass}>Taal / Language</span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-1">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="language_en"
                    className="mt-0.5"
                  />
                  <span className="text-sm text-gray-600">
                    {languageEnLabel}
                  </span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="language_nl"
                    defaultChecked
                    className="mt-0.5"
                  />
                  <span className="text-sm text-gray-600">
                    {languageNlLabel}
                  </span>
                </label>
              </div>
            </div>

            <div className="pt-2">
              <div className="mb-4 py-4 px-4 bg-boutique-stone/50 border border-boutique-dark/10 flex items-center justify-center min-h-[60px]">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  CAPTCHA
                </span>
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
