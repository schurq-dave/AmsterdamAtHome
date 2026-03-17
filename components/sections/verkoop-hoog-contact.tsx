import { Mail, Phone } from "lucide-react";

interface VerkoopHoogContactProps {
  heading: string;
  description: string;
  email: string;
  phone: string;
}

export function VerkoopHoogContact({
  heading,
  description,
  email,
  phone,
}: VerkoopHoogContactProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-3xl text-center reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6">
          {heading}
        </h2>
        <p className="text-gray-700 font-light text-lg leading-relaxed mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 bg-white border border-boutique-dark/10 px-8 py-4 font-sans text-sm text-boutique-dark hover:border-boutique-orange hover:text-boutique-orange transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4" />
            {email}
          </a>
          <a
            href={`tel:${phone.replace(/[\s–-]/g, "")}`}
            className="inline-flex items-center gap-3 bg-white border border-boutique-dark/10 px-8 py-4 font-sans text-sm text-boutique-dark hover:border-boutique-orange hover:text-boutique-orange transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
