/* eslint-disable @next/next/no-img-element */

import type { AboutTeamMember } from "@/lib/types";

interface AboutTeamProps {
  heading: string;
  description: string;
  members: AboutTeamMember[];
}

export function AboutTeam({ heading, description, members }: AboutTeamProps) {
  return (
    <section className="py-32 md:py-40 bg-transparent" data-bg="bg-boutique-paper">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24 reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6">{heading}</h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed">{description}</p>
        </div>

        {members.map((member, index) => {
          const isReversed = member.layout === "image-right";
          const isLast = index === members.length - 1;

          return (
            <div
              key={member.name}
              className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-center ${isLast ? "" : "mb-32"} relative reveal`}
            >
              <div className="w-full md:w-[45%] relative z-10">
                <div className="aspect-[3/4] overflow-hidden shadow-2xl">
                  <img
                    src={member.image.src}
                    alt={member.image.alt}
                    className="w-full h-full object-cover hover-zoom-img"
                  />
                </div>
              </div>
              <div
                className={`w-full md:w-[45%] ${isReversed ? "md:-mr-20 text-right md:text-left" : "md:-ml-20"} relative z-20 mt-8 md:mt-0`}
              >
                <div
                  className={`bg-boutique-stone p-10 md:p-14 shadow-xl ${
                    isReversed
                      ? "border-r-4 md:border-r-0 md:border-l-4"
                      : "border-l-4"
                  } border-boutique-beige`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-boutique-orange mb-4 block font-sans">
                    {member.role}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-widest text-boutique-dark mb-6">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed text-lg mb-8">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-block border-b-2 border-boutique-dark pb-1 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-boutique-orange hover:border-boutique-orange transition-all font-sans"
                  >
                    {member.email}
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
