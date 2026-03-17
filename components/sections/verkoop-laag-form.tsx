"use client";

import { useState, type FormEvent } from "react";
import { Send, MapPin, Mail, Clock } from "lucide-react";

interface VerkoopLaagFormProps {
  heading: string;
  contact: {
    office: { title: string; lines: string[] };
    contact: { title: string; email: string; phone: string };
    hours: { title: string; schedule: { day: string; time: string }[] };
  };
}

export function VerkoopLaagForm({ heading, contact }: VerkoopLaagFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClasses =
    "w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper";
  const labelClasses =
    "block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2";

  return (
    <section
      id="kennismaken"
      className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-16 text-center reveal">
          {heading}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 reveal">
            {submitted ? (
              <div className="bg-white p-10 md:p-14 shadow-xl border-t-4 border-boutique-orange text-center">
                <h3 className="text-2xl font-serif text-boutique-dark mb-4">
                  Bedankt voor uw aanmelding!
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Wij nemen zo snel mogelijk contact met u op voor een
                  vrijblijvend kennismakingsgesprek.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-10 md:p-14 shadow-xl border-t-4 border-boutique-orange space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="vl-voornaam" className={labelClasses}>
                      Voornaam *
                    </label>
                    <input
                      id="vl-voornaam"
                      type="text"
                      required
                      className={inputClasses}
                      placeholder="Voornaam"
                    />
                  </div>
                  <div>
                    <label htmlFor="vl-achternaam" className={labelClasses}>
                      Achternaam *
                    </label>
                    <input
                      id="vl-achternaam"
                      type="text"
                      required
                      className={inputClasses}
                      placeholder="Achternaam"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="vl-email" className={labelClasses}>
                    E-mailadres *
                  </label>
                  <input
                    id="vl-email"
                    type="email"
                    required
                    className={inputClasses}
                    placeholder="uw@email.nl"
                  />
                </div>

                <div>
                  <label htmlFor="vl-telefoon" className={labelClasses}>
                    Telefoon
                  </label>
                  <input
                    id="vl-telefoon"
                    type="tel"
                    className={inputClasses}
                    placeholder="06 – 12345678"
                  />
                </div>

                <div>
                  <label htmlFor="vl-onderwerp" className={labelClasses}>
                    Onderwerp
                  </label>
                  <input
                    id="vl-onderwerp"
                    type="text"
                    className={inputClasses}
                    placeholder="Bijv. Vrijblijvend kennismakingsgesprek"
                  />
                </div>

                <div>
                  <label htmlFor="vl-bericht" className={labelClasses}>
                    Bericht
                  </label>
                  <textarea
                    id="vl-bericht"
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    placeholder="Vertel ons over uw woning en uw plannen..."
                  />
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 border-gray-200 text-boutique-orange focus:ring-boutique-orange"
                    />
                    <span className="text-sm font-light text-gray-600">
                      Ik ga akkoord met het{" "}
                      <a
                        href="/privacy"
                        className="text-boutique-orange underline hover:text-boutique-dark"
                      >
                        privacybeleid
                      </a>{" "}
                      *
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 border-gray-200 text-boutique-orange focus:ring-boutique-orange"
                    />
                    <span className="text-sm font-light text-gray-600">
                      Ik wil de kwartaal update ontvangen
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 border-gray-200 text-boutique-orange focus:ring-boutique-orange"
                    />
                    <span className="text-sm font-light text-gray-600">
                      Ik wil op de hoogte blijven van nieuwe woningen
                    </span>
                  </label>
                </div>

                <div
                  className="py-4 px-4 bg-gray-100 border border-gray-200 text-center text-sm text-gray-500"
                  aria-label="CAPTCHA veld"
                >
                  [CAPTCHA placeholder – integreer reCAPTCHA of hCaptcha]
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs py-4 hover:bg-boutique-orange transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Aanmelden
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-1 reveal">
            <div className="bg-boutique-paper p-8 md:p-10 shadow-sm space-y-8 border-t-4 border-boutique-stone">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-boutique-orange" />
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] font-sans text-boutique-dark">
                    {contact.office.title}
                  </h4>
                </div>
                {contact.office.lines.map((line) => (
                  <p
                    key={line}
                    className="text-gray-600 font-light text-sm leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="border-t border-boutique-dark/10 pt-8">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-boutique-orange" />
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] font-sans text-boutique-dark">
                    {contact.contact.title}
                  </h4>
                </div>
                <a
                  href={`mailto:${contact.contact.email}`}
                  className="block text-gray-600 font-light text-sm hover:text-boutique-orange transition-colors mb-1"
                >
                  {contact.contact.email}
                </a>
                <a
                  href={`tel:${contact.contact.phone.replace(/\s|–/g, "")}`}
                  className="block text-gray-600 font-light text-sm hover:text-boutique-orange transition-colors"
                >
                  {contact.contact.phone}
                </a>
              </div>

              <div className="border-t border-boutique-dark/10 pt-8">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-boutique-orange" />
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] font-sans text-boutique-dark">
                    {contact.hours.title}
                  </h4>
                </div>
                <div className="space-y-1.5">
                  {contact.hours.schedule.map((s) => (
                    <div
                      key={s.day}
                      className="flex justify-between text-sm font-light"
                    >
                      <span className="text-gray-600">{s.day}</span>
                      <span
                        className={
                          s.time === "Gesloten"
                            ? "text-gray-400"
                            : "text-boutique-dark font-medium"
                        }
                      >
                        {s.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
