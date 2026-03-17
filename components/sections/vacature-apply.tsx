"use client";

import { useState, type FormEvent } from "react";
import { Send, MapPin, Mail, Phone, Clock } from "lucide-react";

interface VacatureApplyProps {
  contact: {
    office: { title: string; lines: string[] };
    contact: { title: string; email: string; phone: string };
    hours: { title: string; schedule: { day: string; time: string }[] };
  };
}

export function VacatureApply({ contact }: VacatureApplyProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="solliciteren"
      className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2 reveal">
            {submitted ? (
              <div className="bg-white p-10 md:p-14 shadow-xl border-t-4 border-boutique-orange text-center">
                <h3 className="text-2xl font-serif text-boutique-dark mb-4">
                  Bedankt voor je sollicitatie!
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  We nemen zo snel mogelijk contact met je op.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-10 md:p-14 shadow-xl border-t-4 border-boutique-orange space-y-6"
              >
                <div>
                  <label
                    htmlFor="naam"
                    className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2"
                  >
                    Naam *
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
                    E-mail *
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
                    Telefoon
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
                    htmlFor="motivatie"
                    className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2"
                  >
                    Motivatie
                  </label>
                  <textarea
                    id="motivatie"
                    rows={5}
                    className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark placeholder:text-gray-400 bg-boutique-paper resize-none"
                    placeholder="Vertel ons waarom je bij Amsterdam at Home wilt werken..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs py-4 hover:bg-boutique-orange transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Verstuur sollicitatie
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
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
                  <p key={line} className="text-gray-600 font-light text-sm leading-relaxed">
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
                    <div key={s.day} className="flex justify-between text-sm font-light">
                      <span className="text-gray-600">{s.day}</span>
                      <span
                        className={
                          s.time === "Gesloten" ? "text-gray-400" : "text-boutique-dark font-medium"
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
