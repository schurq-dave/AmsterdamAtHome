"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const BG_CLASSES = [
  "bg-white",
  "bg-boutique-offwhite",
  "bg-boutique-stone",
  "bg-boutique-sand",
  "bg-boutique-khaki",
  "bg-boutique-paper",
];

export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure DOM is fully painted after route change
    const timeoutId = setTimeout(() => {
      const revealEls = document.querySelectorAll(".reveal");
      const slideEls = document.querySelectorAll(".slide-in-subtle");

      const revealObs = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("active");
          }),
        { threshold: 0.1 },
      );
      const slideObs = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("active");
          }),
        { threshold: 0.2 },
      );

      revealEls.forEach((el) => revealObs.observe(el));
      slideEls.forEach((el) => slideObs.observe(el));
      
      return () => {
        revealObs.disconnect();
        slideObs.disconnect();
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll<HTMLElement>("[data-bg]");

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const bg = (entry.target as HTMLElement).dataset.bg;
              if (bg) {
                BG_CLASSES.forEach((c) => document.body.classList.remove(c));
                document.body.classList.add(bg);
              }
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px" },
      );

      sections.forEach((s) => obs.observe(s));
      return () => obs.disconnect();
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
