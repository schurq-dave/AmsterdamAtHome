/* eslint-disable @next/next/no-img-element */

import { ArrowRight, BarChart2, Star } from "lucide-react";
import { HeroChatWidget } from "@/components/chat/hero-chat-widget";
import type { ChatMarketData } from "@/lib/types";

interface HeroSectionProps {
  backgroundImage: string;
  headline: { prefix: string; accent: string; connector: string; suffix: string };
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustLogos: { src: string; alt: string; className: string }[];
  chatPreview: { title: string; subtitle: string; badge: string };
  chatWelcomeHtml: string;
  chatQuickReplies: { label: string; query: string }[];
  chatMarketData: ChatMarketData;
}

export function HeroSection({
  backgroundImage,
  headline,
  description,
  primaryCta,
  secondaryCta,
  trustLogos,
  chatPreview,
  chatWelcomeHtml,
  chatQuickReplies,
  chatMarketData,
}: HeroSectionProps) {
  return (
    <section
      className="relative bg-transparent pb-6 pt-4 px-4 h-[85vh] md:h-[90vh] flex flex-col"
      data-bg="bg-boutique-stone"
    >
      <div className="relative w-full h-full overflow-hidden shadow-2xl group">
        <div
          className="absolute inset-0 bg-cover bg-[center_70%] transition-transform duration-[3s] ease-out scale-105 group-hover:scale-100"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#3a2e24]/70 via-[#3a2e24]/20 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center md:items-end justify-center pb-8 md:pb-10 lg:pb-12">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-16">
              <div className="lg:w-7/12 space-y-5 md:space-y-6 mb-2 reveal">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-white leading-[1.0] md:leading-[0.9] tracking-tight drop-shadow-lg">
                  {headline.prefix}{" "}
                  <span className="text-white">{headline.accent}</span>
                  <br />
                  <span className="italic text-white font-normal mx-1 md:mx-2">
                    {headline.connector}
                  </span>{" "}
                  <span className="text-[#C2B596]">{headline.suffix}</span>
                </h1>
                <p className="text-white font-normal max-w-xl text-base md:text-lg leading-relaxed pt-2 drop-shadow-md">
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href={primaryCta.href}
                    className="group/btn relative px-8 py-4 bg-boutique-paper text-boutique-dark font-sans font-bold uppercase tracking-[0.2em] text-xs overflow-hidden transition-all hover:bg-boutique-stone shadow-lg"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {primaryCta.label}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </a>
                  <a
                    href={secondaryCta.href}
                    className="group/btn px-8 py-4 border border-white/40 backdrop-blur-sm text-white font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all flex items-center gap-3 shadow-lg"
                  >
                    <BarChart2 className="w-4 h-4 text-boutique-stone" />
                    {secondaryCta.label}
                  </a>
                </div>
                <div className="flex items-center gap-8 pt-4 opacity-90 hover:opacity-100 transition-all duration-500 drop-shadow-md">
                  {trustLogos.map((logo) => (
                    <img key={logo.alt} src={logo.src} alt={logo.alt} className={logo.className} />
                  ))}
                </div>
              </div>

              <div
                className="lg:w-5/12 w-full reveal flex flex-col items-end gap-5 lg:mb-16"
                style={{ animationDelay: "300ms" }}
              >
                <HeroChatWidget
                  previewTitle={chatPreview.title}
                  previewSubtitle={chatPreview.subtitle}
                  badge={chatPreview.badge}
                  welcomeHtml={chatWelcomeHtml}
                  quickReplies={chatQuickReplies}
                  marketData={chatMarketData}
                />
                <div className="flex items-center justify-end gap-4 font-sans w-full max-w-sm">
                  <span className="bg-black/40 backdrop-blur-md px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-bold border border-white/10 shadow-sm text-white rounded-sm">
                    Est. 2005
                  </span>
                  <span className="flex items-center gap-1 text-[12px] font-bold uppercase tracking-widest drop-shadow-md text-white">
                    <Star className="w-3 h-3 text-[#C2B596]" fill="currentColor" /> 9.6 op Funda
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
