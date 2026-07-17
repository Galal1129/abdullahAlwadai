import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { CtaBanner, GhostButton, GoldButton, IconBadge, SectionTitle } from "@/components/ui";
import { getDict } from "@/lib/getDict";
import { isLocale, type Locale } from "@/lib/i18n";
import { categoryImages } from "@/lib/categoryImages";
import { countryFlagImages } from "@/lib/countryFlags";
import { categorySlugByIcon } from "@/lib/catalog";
import { serviceImages } from "@/lib/serviceImages";
import { notFound } from "next/navigation";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale as Locale);
  const t = dict.home;

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="bg-hero relative overflow-hidden">
        <Image
          src="/images/thawq-global-logistics-hero.png"
          alt="سفينة حاويات وشاحنة وطائرة شحن في ميناء دولي"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-[center_30%] ${locale === "ar" ? "-scale-x-100" : ""}`}
        />
        <div
          className={`absolute inset-0 bg-brand-950/65 lg:bg-transparent ${
            locale === "ar"
              ? "lg:bg-[linear-gradient(270deg,rgba(3,36,28,0.98)_0%,rgba(3,36,28,0.9)_38%,rgba(3,36,28,0.25)_70%,rgba(3,36,28,0.08)_100%)]"
              : "lg:bg-[linear-gradient(90deg,rgba(3,36,28,0.98)_0%,rgba(3,36,28,0.9)_38%,rgba(3,36,28,0.25)_70%,rgba(3,36,28,0.08)_100%)]"
          }`}
        />
        <div className="bg-dots absolute inset-0 opacity-20" />
        <div className="relative mx-auto flex min-h-[34rem] max-w-7xl items-center px-4 py-20 md:py-28">
          <div className="max-w-2xl text-center lg:text-start">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">{t.heroKicker}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
              {t.heroTitle} <span className="text-gold-gradient">{t.heroHighlight}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/85 lg:mx-0">{t.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <GoldButton href={`/${locale}/request`}>{t.heroPrimary}</GoldButton>
              <GhostButton href={`/${locale}/services`}>{t.heroSecondary}</GhostButton>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-gold-500/25 bg-brand-950/60">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-gold-400" dir="ltr">{s.value}</p>
                <p className="mt-1 text-sm text-white/75">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About teaser ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle title={t.aboutTitle} subtitle={t.aboutTitleEn} intro={t.aboutText} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.aboutBullets.map((b, i) => (
            <div key={b.title} className="card-gold flex items-start gap-4 p-5">
              <IconBadge name={dict.servicesShort[i]?.icon ?? "globe"} size="sm" />
              <div>
                <h3 className="font-extrabold text-brand-900">{b.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-800/75">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <GoldButton href={`/${locale}/about`}>{dict.common.learnMore}</GoldButton>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="bg-ivory-100 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title={t.servicesTitle} subtitle={t.servicesTitleEn} intro={t.servicesIntro} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dict.servicesShort.map((s) => (
              <div key={s.title} className="card-gold group overflow-hidden text-center transition hover:-translate-y-1">
                <div className="relative aspect-[16/9] overflow-hidden bg-brand-900">
                  <Image
                    src={serviceImages[s.icon]}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-950/70 to-transparent" />
                  <div className="absolute bottom-3 start-4 drop-shadow-lg">
                    <IconBadge name={s.icon} size="sm" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-brand-900">{s.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">{s.titleEn}</p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-800/75">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <GoldButton href={`/${locale}/services`}>{t.servicesCta}</GoldButton>
          </div>
        </div>
      </section>

      {/* ===== Why THAWQ ===== */}
      <section className="bg-hero relative py-20">
        <div className="bg-dots absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4">
          <SectionTitle title={t.whyTitle} subtitle={t.whyTitleEn} intro={t.whyIntro} light />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dict.whyItems.map((w, i) => (
              <div
                key={w.title}
                className="rounded-2xl border border-gold-500/30 bg-white/5 p-6 text-center backdrop-blur transition hover:border-gold-400/60"
              >
                <div className="relative inline-block">
                  <IconBadge name={w.icon} />
                  <span className="bg-gold-gradient absolute -bottom-1 -end-1 flex h-6 w-6 items-center justify-center rounded-full text-[0.65rem] font-extrabold text-brand-950">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Product categories teaser ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle title={t.categoriesTitle} subtitle={t.categoriesTitleEn} />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {dict.categories.map((c) => (
            <Link
              key={c.name}
              href={`/${locale}/products/${categorySlugByIcon[c.icon]}`}
              className="card-gold group overflow-hidden text-center transition hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-900">
                <Image
                  src={categoryImages[c.icon]}
                  alt={c.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute start-3 top-3 drop-shadow-lg">
                  <IconBadge name={c.icon} size="sm" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-950/65 to-transparent" />
              </div>
              <div className="flex flex-col items-center gap-1.5 p-4">
                <span className="text-sm font-extrabold text-brand-900 group-hover:text-brand-700">{c.name}</span>
                <span className="text-xs text-gold-600">
                  {c.count} {dict.common.productsAvailable}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <GoldButton href={`/${locale}/products`}>{dict.common.browseProducts}</GoldButton>
        </div>
      </section>

      {/* ===== Countries strip ===== */}
      <section className="bg-ivory-100 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title={t.countriesTitle} subtitle={t.countriesTitleEn} />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {dict.countries.list.map((c, index) => (
              <Link
                key={c.name}
                href={`/${locale}/countries`}
                className="card-gold flex items-center gap-3 px-5 py-3 transition hover:-translate-y-0.5"
              >
                <span className="relative h-7 w-7 overflow-hidden rounded-full border border-gold-400/70">
                  <Image src={countryFlagImages[index]} alt={c.name} fill sizes="28px" className="object-cover" />
                </span>
                <span className="text-sm font-extrabold text-brand-900">{c.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <GoldButton href={`/${locale}/countries`}>{t.countriesCta}</GoldButton>
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle
          title={dict.services.processTitle}
          subtitle={dict.services.processTitleEn}
          intro={dict.services.processIntro}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.processSteps.map((p, i) => (
            <div key={p.title} className="card-gold relative p-6 pt-8">
              <span className="bg-gold-gradient absolute -top-4 start-6 flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold text-brand-950 shadow">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-start gap-4">
                <IconBadge name={p.icon} size="sm" />
                <div>
                  <h3 className="font-extrabold text-brand-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-800/75">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA banner ===== */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <CtaBanner
          text={t.ctaBanner}
          action={<GoldButton href={`/${locale}/contact`}>{dict.common.contactUs}</GoldButton>}
        />
      </section>
    </>
  );
}
