import Link from "next/link";
import type { Dict } from "@/lib/dictionaries/ar";
import type { Locale } from "@/lib/i18n";
import Logo from "./Logo";
import { Icon } from "./icons";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const quickLinks = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/products`, label: dict.nav.products },
    { href: `/${locale}/countries`, label: dict.nav.countries },
    { href: `/${locale}/request`, label: dict.nav.request },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-hero relative text-white">
      <div className="bg-dots absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-white/75">{dict.footer.about}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
              {dict.common.taglineEn}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-extrabold text-gold-400">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/80 transition hover:text-gold-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-extrabold text-gold-400">{dict.footer.ourServices}</h3>
            <ul className="space-y-2.5">
              {dict.servicesShort.map((s) => (
                <li key={s.title}>
                  <Link
                    href={`/${locale}/services`}
                    className="text-sm text-white/80 transition hover:text-gold-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-extrabold text-gold-400">{dict.footer.contactInfo}</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <Icon name="pin" className="h-4.5 w-4.5 shrink-0 text-gold-400" />
                {dict.footer.address}
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="h-4.5 w-4.5 shrink-0 text-gold-400" />
                <a href={`mailto:${dict.footer.email}`} className="transition hover:text-gold-300" dir="ltr">
                  {dict.footer.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="globe" className="h-4.5 w-4.5 shrink-0 text-gold-400" />
                <span dir="ltr">{dict.footer.website}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold-500/20 pt-5 text-center md:flex-row">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} — {dict.footer.rights}
          </p>
          <p className="text-xs font-semibold text-gold-400">{dict.common.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
