/* eslint-disable @next/next/no-img-element */

import type { TeamMember } from "@/lib/types";

interface TeamSectionProps {
  headingPrefix: string;
  headingAccent: string;
  headingSuffix: string;
  members: TeamMember[];
}

export function TeamSection({ headingPrefix, headingAccent, headingSuffix, members }: TeamSectionProps) {
  return (
    <section className="py-32 md:py-40 overflow-hidden bg-transparent" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark text-center mb-24 reveal">
          {headingPrefix}{" "}
          <span className="italic lowercase font-light text-boutique-beige mx-2">{headingAccent}</span>{" "}
          {headingSuffix}
        </h2>

        {members.map((member, i) => {
          const isReversed = i % 2 !== 0;
          return (
            <div
              key={member.name}
              className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-center ${i < members.length - 1 ? "mb-32" : ""} relative reveal`}
            >
              <div className="w-full md:w-[45%] relative z-10">
                <div className="aspect-[3/4] overflow-hidden shadow-2xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover hover-zoom-img" />
                </div>
              </div>
              <div
                className={`w-full md:w-[45%] ${isReversed ? "md:-mr-20 text-right md:text-left" : "md:-ml-20"} relative z-20 mt-8 md:mt-0`}
              >
                <div
                  className={`bg-boutique-paper p-10 md:p-14 shadow-xl ${isReversed ? "border-r-4 md:border-r-0 md:border-l-4" : "border-l-4"} border-boutique-stone`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-boutique-beige mb-4 block font-sans">
                    {member.specialty}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-widest text-boutique-dark mb-6">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed text-lg mb-8 italic font-serif">
                    &quot;{member.quote}&quot;
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-block border-b-2 border-boutique-dark pb-1 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-boutique-orange hover:border-boutique-orange transition-all font-sans"
                  >
                    Contact {member.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
