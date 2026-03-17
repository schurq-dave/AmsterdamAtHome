"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import { Menu as MenuIcon, X, Search, MapPin } from "lucide-react";
import type { NavLink, MenuGroup } from "@/lib/types";

interface HeaderProps {
  logo: { src: string; alt: string };
  desktopLinks: NavLink[];
  menuGroups: MenuGroup[];
  menuNeighborhoods: { label: string; href: string }[];
  menuExtraNeighborhoods: { label: string; href: string }[];
}

export function Header({
  logo,
  desktopLinks,
  menuGroups,
  menuNeighborhoods,
  menuExtraNeighborhoods,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-boutique-paper/95 backdrop-blur border-b border-boutique-stone/30 transition-all duration-300"
        role="navigation"
        aria-label="Hoofdnavigatie"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="block w-48 md:w-56 h-10 md:h-12 relative z-50 overflow-hidden">
            <img src={logo.src} alt={logo.alt} className="w-full h-full object-cover object-center" />
          </a>
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="hidden lg:flex items-center gap-6">
              {desktopLinks.map((link) =>
                link.variant === "primary" ? (
                  <a key={link.label} href={link.href} className="text-xs font-bold uppercase tracking-[0.15em] text-white bg-boutique-dark px-6 py-3 hover:bg-boutique-orange transition-colors font-sans">
                    {link.label}
                  </a>
                ) : (
                  <a key={link.label} href={link.href} className="text-xs font-bold uppercase tracking-[0.15em] text-boutique-dark hover:text-boutique-orange transition-colors font-sans">
                    {link.label}
                  </a>
                ),
              )}
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-3 relative z-50"
              aria-label="Open menu"
            >
              <div className="w-10 h-10 border border-boutique-stone flex items-center justify-center group-hover:border-boutique-orange group-hover:bg-boutique-orange transition-all">
                <MenuIcon className="w-5 h-5 text-boutique-dark group-hover:text-white transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-boutique-paper z-[60] overflow-hidden transition-all duration-500 ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigatiemenu"
      >
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-boutique-beige/5 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-boutique-stone/20 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="absolute top-6 right-6 md:top-8 md:right-12 z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label="Sluit menu"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-boutique-dark font-sans hidden md:block group-hover:text-boutique-orange transition-colors">
              Sluiten
            </span>
            <div className="w-10 h-10 border border-boutique-stone rounded-full flex items-center justify-center group-hover:border-boutique-orange group-hover:bg-boutique-orange transition-all">
              <X className="w-5 h-5 text-boutique-dark group-hover:text-white transition-colors" />
            </div>
          </button>
        </div>

        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10 pt-12 md:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 h-[85vh] content-center">
            <div
              className={`lg:col-span-4 flex flex-col justify-center space-y-10 border-r border-boutique-stone/60 pr-10 transition-all duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="relative border-b border-boutique-dark/20 pb-2 mb-4">
                <input
                  type="text"
                  placeholder="Zoeken..."
                  className="w-full bg-transparent text-boutique-dark font-serif text-2xl placeholder-boutique-beige/60 focus:outline-none"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-boutique-dark hover:text-boutique-orange transition-colors" aria-label="Zoeken">
                  <Search className="w-5 h-5" />
                </button>
              </div>
              {menuGroups.map((group) => (
                <div key={group.title}>
                  {group.title === "Huizenmarkt Amsterdam" ? (
                    <a href="/huizenmarkt" className="block w-fit group/title">
                      <h3 className="font-serif text-2xl text-boutique-beige mb-3 italic group-hover/title:text-boutique-orange transition-colors">
                        {group.title}
                      </h3>
                    </a>
                  ) : group.title === "Over ons" ? (
                    <a href="/over-ons" className="block w-fit group/title">
                      <h3 className="font-serif text-2xl text-boutique-beige mb-3 italic group-hover/title:text-boutique-orange transition-colors">
                        {group.title}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="font-serif text-2xl text-boutique-beige mb-3 italic">
                      {group.title}
                    </h3>
                  )}
                  <ul className="space-y-1.5 font-sans text-[13px] font-medium tracking-wide text-boutique-dark/80">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="hover:text-boutique-orange transition-colors block w-fit"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div
              className={`lg:col-span-8 flex flex-col h-full py-4 transition-all duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8">
                  <MapPin className="w-5 h-5 text-boutique-orange" />
                  <h3 className="font-sans font-bold text-sm uppercase tracking-[0.25em] text-boutique-beige">Alle Buurten</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 font-sans text-sm text-gray-600 font-medium leading-relaxed">
                  {menuNeighborhoods.map((n) => (
                    <a key={n.label} href={n.href} className="hover:text-boutique-orange transition-colors">{n.label}</a>
                  ))}
                  <div className="col-span-2 md:col-span-4 mt-2">
                    {menuExtraNeighborhoods.map((n) => (
                      <a key={n.label} href={n.href} className="hover:text-boutique-orange transition-colors mr-6">{n.label}</a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end items-end border-t border-boutique-stone/50 pt-8">
                <div className="w-full max-w-lg h-20 md:h-24 overflow-hidden relative">
                  <img src={logo.src} alt={logo.alt} className="w-full h-full object-cover object-center opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
