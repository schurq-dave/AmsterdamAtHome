"use client";

import { useState, useRef, useCallback } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/types";

interface FaqSectionProps {
  heading: string;
  faqs: FaqItem[];
}

export function FaqSection({ heading, faqs }: FaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFaq = useCallback(
    (i: number) => setOpenFaq((p) => (p === i ? null : i)),
    [],
  );

  const half = Math.ceil(faqs.length / 2);

  const renderItem = (faq: FaqItem, idx: number) => {
    const isOpen = openFaq === idx;
    return (
      <div key={idx} className="border-b border-gray-200 pb-2 group">
        <button
          className="w-full flex justify-between items-center text-left py-3 hover:text-boutique-beige transition-colors"
          onClick={() => toggleFaq(idx)}
          aria-expanded={isOpen}
        >
          <span className="font-sans font-semibold text-sm uppercase tracking-wide pr-6">
            {faq.question}
          </span>
          <Plus
            className={`w-4 h-4 text-boutique-beige transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-45" : ""}`}
          />
        </button>
        <div
          ref={(el) => {
            faqRefs.current[idx] = el;
          }}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? (faqRefs.current[idx]?.scrollHeight ?? 0) : 0 }}
        >
          <p className="text-gray-500 font-light text-sm leading-relaxed pt-2 pb-6">{faq.answer}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-32 text-boutique-dark bg-transparent" data-bg="bg-boutique-paper">
      <div className="container mx-auto px-6 max-w-7xl reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 md:mb-20">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 items-start">
          <div className="space-y-4">
            {faqs.slice(0, half).map((faq, i) => renderItem(faq, i))}
          </div>
          <div className="space-y-4">
            {faqs.slice(half).map((faq, i) => renderItem(faq, half + i))}
          </div>
        </div>
      </div>
    </section>
  );
}
