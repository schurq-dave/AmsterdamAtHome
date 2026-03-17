"use client";

/* eslint-disable @next/next/no-img-element */

import { useState, useMemo } from "react";
import { Search, FileSearch } from "lucide-react";
import type { BlogArticle, FilterOption } from "@/lib/types";

interface BlogGridProps {
  articles: BlogArticle[];
  categories: FilterOption[];
}

function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <article className="group cursor-pointer reveal">
      <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden relative shadow-sm">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-boutique-paper px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-boutique-dark shadow-sm">
          {article.date}
        </div>
        <div className="absolute bottom-4 right-4 bg-boutique-orange text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest font-sans z-10">
          {article.categoryLabel}
        </div>
      </div>
      <h3 className="font-serif font-bold uppercase tracking-wide text-lg leading-relaxed text-boutique-dark group-hover:text-boutique-orange transition-colors mb-3">
        {article.title}
      </h3>
      <p className="text-gray-500 font-light text-sm line-clamp-3 mb-4 leading-relaxed">
        {article.excerpt}
      </p>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans flex items-center gap-2">
        <span className="w-6 h-px bg-boutique-orange" /> Door {article.author}
      </p>
    </article>
  );
}

export function BlogGrid({ articles, categories }: BlogGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("alle");

  const filteredArticles = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return articles.filter((a) => {
      const categoryMatch = selectedCategory === "alle" || a.category === selectedCategory;
      const searchMatch =
        !term || a.title.toLowerCase().includes(term) || a.excerpt.toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });
  }, [articles, searchTerm, selectedCategory]);

  return (
    <>
      {/* Sticky Filter Bar */}
      <section className="py-8 bg-white border-y border-boutique-dark/10 sticky top-[73px] md:top-[81px] z-40 shadow-sm">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Zoek op trefwoord..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-boutique-paper border border-gray-200 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-boutique-orange font-sans transition-colors text-boutique-dark placeholder:text-gray-400"
                aria-label="Zoek blog artikelen"
              />
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-auto bg-boutique-paper border border-gray-200 text-boutique-dark px-6 py-3 font-sans text-sm focus:outline-none focus:border-boutique-orange transition-colors rounded-none shadow-sm min-w-[200px]"
                aria-label="Filter op categorie"
              >
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-24 md:py-32 bg-transparent" data-bg="bg-boutique-paper">
        <div className="container mx-auto px-6 max-w-7xl">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {filteredArticles.map((article) => (
                <BlogCard key={article.title} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 reveal">
              <FileSearch className="w-12 h-12 text-boutique-stone mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-boutique-dark mb-2">Geen artikelen gevonden</h3>
              <p className="text-gray-500 font-light text-sm">
                Er zijn geen artikelen die voldoen aan uw huidige zoekopdracht of filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
