"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dict } from "@/lib/dictionaries/ar";
import { otherLocale, type Locale } from "@/lib/i18n";
import Logo from "./Logo";
import { Icon } from "./icons";

export default function Navbar({ locale, dict }: { locale: Locale; dict: Dict }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/products`, label: dict.nav.products },
    { href: `/${locale}/countries`, label: dict.nav.countries },
    { href: `/${locale}/request`, label: dict.nav.request },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href : pathname.startsWith(href);

  /* Switch language while staying on the same page */
  const other = otherLocale(locale);
  const switchHref = pathname.replace(new RegExp(`^/${locale}`), `/${other}`) || `/${other}`;

  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/25 bg-brand-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href={`/${locale}`} aria-label="THAWQ Import & Export">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                isActive(l.href)
                  ? "text-gold-400 underline decoration-gold-500 decoration-2 underline-offset-8"
                  : "text-white/85 hover:text-gold-300"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={switchHref}
            className="flex items-center gap-2 rounded-lg border border-white/25 px-3 py-2 text-sm font-semibold text-white/90 transition hover:border-gold-400 hover:text-gold-300"
          >
            <Icon name="globe" className="h-4 w-4" />
            {dict.nav.langSwitch}
          </Link>
          <Link
            href={`/${locale}/request`}
            className="bg-gold-gradient rounded-lg px-5 py-2.5 text-sm font-bold text-brand-950 shadow-md shadow-gold-600/30 transition hover:brightness-110"
          >
            {dict.nav.cta}
          </Link>
        </div>

        <button
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold-500/20 bg-brand-950 px-4 pb-5 pt-2 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2.5 text-sm font-semibold ${
                isActive(l.href) ? "text-gold-400" : "text-white/85"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3 px-3">
            <Link
              href={switchHref}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg border border-white/25 px-3 py-2 text-sm font-semibold text-white/90"
            >
              <Icon name="globe" className="h-4 w-4" />
              {dict.nav.langSwitch}
            </Link>
            <Link
              href={`/${locale}/request`}
              onClick={() => setOpen(false)}
              className="bg-gold-gradient rounded-lg px-5 py-2 text-sm font-bold text-brand-950"
            >
              {dict.nav.cta}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
