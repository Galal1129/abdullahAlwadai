import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./icons";

/* Big Arabic/primary title + small gold English subtitle + ✦ ornament */
export function SectionTitle({
  title,
  subtitle,
  intro,
  light = false,
}: {
  title: string;
  subtitle?: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className={`text-3xl font-extrabold md:text-4xl ${light ? "text-white" : "text-brand-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.25em] text-gold-500">{subtitle}</p>
      )}
      <div className="ornament mt-4 text-lg">✦</div>
      {intro && (
        <p className={`mt-4 leading-relaxed ${light ? "text-white/80" : "text-brand-800/80"}`}>{intro}</p>
      )}
    </div>
  );
}

/* Dark page hero used at the top of every inner page */
export function PageHero({
  title,
  subtitle,
  intro,
  children,
}: {
  title: string;
  subtitle?: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-hero relative overflow-hidden">
      <div className="bg-dots absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center md:py-24">
        <h1 className="text-4xl font-extrabold text-white md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.3em] text-gold-400">{subtitle}</p>
        )}
        <div className="ornament mt-5 text-xl">✦</div>
        {intro && <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/85">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

/* Round dark-green badge with a gold icon (the prototype's signature element) */
export function IconBadge({
  name,
  size = "md",
}: {
  name: string;
  size?: "sm" | "md" | "lg";
}) {
  const box = size === "lg" ? "h-20 w-20" : size === "sm" ? "h-11 w-11" : "h-16 w-16";
  const icon = size === "lg" ? "h-9 w-9" : size === "sm" ? "h-5 w-5" : "h-7 w-7";
  return (
    <span
      className={`inline-flex ${box} items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-gold-400 ring-2 ring-gold-400/70 ring-offset-2 ring-offset-transparent`}
    >
      <Icon name={name} className={icon} />
    </span>
  );
}

/* Gold gradient CTA button */
export function GoldButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`bg-gold-gradient inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-brand-950 shadow-lg shadow-gold-600/25 transition hover:brightness-110 ${className}`}
    >
      {children}
    </Link>
  );
}

/* Outlined button for dark surfaces */
export function GhostButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-gold-400/70 px-6 py-3 text-sm font-bold text-gold-300 transition hover:bg-gold-400/10 ${className}`}
    >
      {children}
    </Link>
  );
}

/* Row of small icon features separated by dividers (bottom strips in the prototype) */
export function FeatureStrip({
  items,
  light = false,
}: {
  items: { title: string; desc?: string; icon: string }[];
  light?: boolean;
}) {
  const colClasses: Record<number, string> = {
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
  };
  const lgCols = colClasses[Math.min(items.length, 6)] ?? "lg:grid-cols-6";
  return (
    <div className={`grid grid-cols-2 gap-6 sm:grid-cols-3 ${lgCols}`}>
      {items.map((f) => (
        <div key={f.title} className="flex flex-col items-center gap-2 text-center">
          <Icon name={f.icon} className={`h-8 w-8 ${light ? "text-gold-400" : "text-gold-500"}`} />
          <p className={`text-sm font-bold ${light ? "text-white" : "text-brand-900"}`}>{f.title}</p>
          {f.desc && (
            <p className={`text-xs leading-relaxed ${light ? "text-white/70" : "text-brand-800/70"}`}>
              {f.desc}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/* Dark banner with gold statement (e.g. "from the idea... to cargo arrival") */
export function CtaBanner({ text, action }: { text: string; action?: ReactNode }) {
  return (
    <div className="bg-hero bg-dots flex flex-col items-center justify-center gap-4 rounded-2xl border border-gold-500/30 px-6 py-8 text-center md:flex-row md:gap-8">
      <p className="text-lg font-extrabold text-gold-300 md:text-xl">{text}</p>
      {action}
    </div>
  );
}
