"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { Dict } from "@/lib/dictionaries/ar";
import type { Locale } from "@/lib/i18n";
import { categoryImages } from "@/lib/categoryImages";
import { categorySlugByIcon } from "@/lib/catalog";
import { Icon } from "./icons";
import { IconBadge } from "./ui";

export default function ProductsExplorer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const t = dict.products;
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return dict.categories.filter((c) => {
      const matchQuery =
        !q || c.name.toLowerCase().includes(q) || c.nameEn.toLowerCase().includes(q);
      const matchActive = !active || c.name === active;
      return matchQuery && matchActive;
    });
  }, [query, active, dict.categories]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* ===== Sidebar: categories ===== */}
        <aside className="space-y-6">
          <div className="card-gold overflow-hidden">
            <h2 className="bg-brand-900 px-5 py-3.5 font-extrabold text-gold-300">{t.browseCategories}</h2>
            <ul>
              <li>
                <button
                  onClick={() => setActive(null)}
                  className={`flex w-full items-center justify-between px-5 py-3 text-sm font-semibold transition hover:bg-ivory-100 ${
                    active === null ? "text-gold-600" : "text-brand-900"
                  }`}
                >
                  {t.allCategories}
                  <Icon name="chevron" className="h-4 w-4 rtl:rotate-180" />
                </button>
              </li>
              {dict.categories.map((c) => (
                <li key={c.name} className="border-t border-ivory-200">
                  <button
                    onClick={() => setActive(active === c.name ? null : c.name)}
                    className={`flex w-full items-center justify-between px-5 py-3 text-sm font-semibold transition hover:bg-ivory-100 ${
                      active === c.name ? "text-gold-600" : "text-brand-900"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon name={c.icon} className="h-4.5 w-4.5 text-gold-500" />
                      {c.name}
                    </span>
                    <span className="text-xs text-brand-800/60">({c.count})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* "Can't find it?" box */}
          <div className="bg-hero bg-dots rounded-2xl border border-gold-500/40 p-6 text-center">
            <Icon name="boxOpen" className="mx-auto h-10 w-10 text-gold-400" />
            <h3 className="mt-3 font-extrabold text-white">{t.notFoundTitle}</h3>
            <p className="mt-2 text-sm text-white/75">{t.notFoundDesc}</p>
            <Link
              href={`/${locale}/request`}
              className="bg-gold-gradient mt-4 inline-block rounded-lg px-5 py-2.5 text-sm font-bold text-brand-950"
            >
              {t.notFoundCta}
            </Link>
          </div>
        </aside>

        {/* ===== Main: search + category cards ===== */}
        <div>
          <div className="card-gold flex items-center gap-3 px-5 py-3">
            <Icon name="searchBox" className="h-5 w-5 shrink-0 text-gold-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-transparent text-sm text-brand-900 outline-none placeholder:text-brand-800/50"
            />
          </div>

          {filtered.length === 0 ? (
            <p className="mt-16 text-center text-brand-800/70">{t.noResults}</p>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((c) => (
                <div key={c.name} className="card-gold group overflow-hidden transition hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-900">
                    <Image
                      src={categoryImages[c.icon]}
                      alt={c.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute start-4 top-4 drop-shadow-lg">
                      <IconBadge name={c.icon} size="sm" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-950/70 to-transparent" />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-extrabold text-brand-900">{c.name}</h3>
                    <p className="mt-1 text-sm text-gold-600">
                      {c.count} {t.available}
                    </p>
                    <Link
                      href={`/${locale}/products/${categorySlugByIcon[c.icon]}`}
                      className="mt-4 inline-block rounded-lg bg-brand-900 px-5 py-2 text-xs font-bold text-gold-300 transition group-hover:bg-brand-700"
                    >
                      {t.browse}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
