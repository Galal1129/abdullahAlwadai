import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { FeatureStrip, IconBadge, PageHero, SectionTitle } from "@/components/ui";
import { getDict } from "@/lib/getDict";
import { isLocale } from "@/lib/i18n";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const t = dict.about;

  return (
    <>
      <PageHero title={t.pageTitle} subtitle={t.pageTitleEn} intro={t.pageSubtitle} />

      {/* ===== Who we are ===== */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="space-y-5 text-lg leading-loose text-brand-800/90">
          {t.intro.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>
      </section>

      {/* ===== Chairman message ===== */}
      <section className="bg-ivory-100 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle title={t.chairmanTitle} subtitle={t.chairmanTitleEn} />
          <div className="card-gold relative mt-12 p-8 md:p-12">
            <span className="absolute -top-6 start-8 text-gold-400">
              <Icon name="quote" className="h-12 w-12" strokeWidth={1.2} />
            </span>
            <p className="font-extrabold text-brand-900">{t.chairmanGreeting}</p>
            <div className="mt-4 space-y-4 leading-loose text-brand-800/85">
              {t.chairmanParagraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-semibold text-gold-600">{t.chairmanRegards}</p>
            <div className="mt-4 border-t border-gold-300/50 pt-4">
              <p className="text-lg font-extrabold text-brand-900">{t.chairmanName}</p>
              <p className="mt-1 text-sm text-brand-800/70">{t.chairmanRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Vision / Mission ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle title={t.vmvTitle} subtitle={t.vmvTitleEn} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card-gold p-8 text-center">
            <IconBadge name="eye" size="lg" />
            <h3 className="mt-4 text-2xl font-extrabold text-brand-900">{t.visionTitle}</h3>
            <p className="mt-4 leading-relaxed text-brand-800/80">{t.visionText}</p>
          </div>
          <div className="card-gold p-8 text-center">
            <IconBadge name="target" size="lg" />
            <h3 className="mt-4 text-2xl font-extrabold text-brand-900">{t.missionTitle}</h3>
            <p className="mt-4 leading-relaxed text-brand-800/80">{t.missionText}</p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <SectionTitle title={t.valuesTitle} subtitle={t.valuesTitleEn} />
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {t.values.map((v) => (
              <div key={v.title} className="card-gold flex flex-col items-center p-5 text-center">
                <IconBadge name={v.icon} size="sm" />
                <h4 className="mt-3 font-extrabold text-brand-900">{v.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-brand-800/70">{v.desc}</p>
              </div>
            ))}
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
                className="rounded-2xl border border-gold-500/30 bg-white/5 p-6 text-center backdrop-blur"
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

          {/* Commitment strip */}
          <div className="mt-14 rounded-2xl border border-gold-500/30 bg-brand-950/50 p-8">
            <h3 className="mb-8 text-center text-xl font-extrabold text-gold-300">{t.commitTitle}</h3>
            <FeatureStrip items={t.commitments} light />
          </div>
        </div>
      </section>
    </>
  );
}
