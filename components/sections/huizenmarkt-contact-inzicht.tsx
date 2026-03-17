import { Mail, Phone } from "lucide-react";

interface HuizenmarktContactInzichtProps {
  heading: string;
  email: string;
  phone: string;
  ctaLabel: string;
  ctaHref: string;
}

export function HuizenmarktContactInzicht({
  heading,
  email,
  phone,
  ctaLabel,
  ctaHref,
}: HuizenmarktContactInzichtProps) {
  return (
    <section className="py-20 md:py-28 bg-transparent" data-bg="bg-boutique-paper">
      <div className="container mx-auto px-6 max-w-4xl text-center reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-12">{heading}</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 text-boutique-dark hover:text-boutique-orange transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>{email}</span>
          </a>
          <a
            href={`tel:${phone.replace(/\s|–|-/g, "")}`}
            className="flex items-center gap-3 text-boutique-dark hover:text-boutique-orange transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>{phone}</span>
          </a>
        </div>
        <a
          href={ctaHref}
          className="inline-block bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs px-10 py-4 hover:bg-boutique-orange transition-colors"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
