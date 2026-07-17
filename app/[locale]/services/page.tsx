import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { CtaBanner, FeatureStrip, GoldButton, IconBadge, PageHero, SectionTitle } from "@/components/ui";
import { getDict } from "@/lib/getDict";
import { isLocale } from "@/lib/i18n";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const t = dict.services;

  return (
    <>
      <PageHero title={t.pageTitle} subtitle={t.pageTitleEn} intro={t.pageIntro}>
        <p className="mt-3 text-lg font-bold text-gold-300">{t.pageSubtitle}</p>
      </PageHero>

      {/* ===== 8 services grid ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.list.map((s) => (
            <div key={s.title} className="card-gold p-6 text-center transition hover:-translate-y-1">
              <IconBadge name={s.icon} />
              <h3 className="mt-4 font-extrabold text-brand-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-800/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Quality control ===== */}
      <section className="bg-ivory-100 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title={t.qualityTitle} subtitle={t.qualityTitleEn} intro={t.qualityIntro} />

          {/* 5-step pipeline */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {t.qualitySteps.map((q, i) => (
              <div key={q.title} className="card-gold relative flex flex-col items-center p-6 pt-9 text-center">
                <span className="bg-gold-gradient absolute -top-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold text-brand-950 shadow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <IconBadge name={q.icon} size="sm" />
                <h3 className="mt-3 font-extrabold text-brand-900">{q.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-800/75">{q.desc}</p>
              </div>
            ))}
          </div>

          {/* Quality features */}
          <div className="card-gold mt-14 p-8">
            <h3 className="mb-8 text-center text-xl font-extrabold text-brand-900">{t.qualityFeaturesTitle}</h3>
            <FeatureStrip items={t.qualityFeatures} />
          </div>
        </div>
      </section>

      {/* ===== Shipping & logistics ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle title={t.logisticsTitle} subtitle={t.logisticsTitleEn} intro={t.logisticsIntro} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.logistics.map((l) => (
            <div key={l.title} className="card-gold p-6">
              <div className="flex items-center gap-4">
                <IconBadge name={l.icon} size="sm" />
                <div>
                  <h3 className="font-extrabold text-brand-900">{l.title}</h3>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-500">{l.titleEn}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2.5">
                {l.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-brand-800/85">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-gold-500" strokeWidth={2.5} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="bg-hero relative py-20">
        <div className="bg-dots absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4">
          <SectionTitle title={t.processTitle} subtitle={t.processTitleEn} intro={t.processIntro} light />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dict.processSteps.map((p, i) => (
              <div
                key={p.title}
                className="relative rounded-2xl border border-gold-500/30 bg-white/5 p-6 pt-8 backdrop-blur"
              >
                <span className="bg-gold-gradient absolute -top-4 start-6 flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold text-brand-950 shadow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-4">
                  <IconBadge name={p.icon} size="sm" />
                  <div>
                    <h3 className="font-extrabold text-white">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/75">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <CtaBanner
          text={t.ctaBanner}
          action={<GoldButton href={`/${locale}/request`}>{dict.common.requestNow}</GoldButton>}
        />
      </section>
    </>
  );
}
