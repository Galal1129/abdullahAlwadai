import { notFound } from "next/navigation";
import RequestForm from "@/components/RequestForm";
import { IconBadge, PageHero } from "@/components/ui";
import { getDict } from "@/lib/getDict";
import { isLocale } from "@/lib/i18n";

export default async function RequestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const t = dict.request;
  const stepIcons = ["fileEdit", "searchBox", "medal"];

  return (
    <>
      <PageHero title={t.pageTitle} subtitle={t.pageTitleEn} intro={t.pageSubtitle} />

      {/* How it works — 3 quick steps */}
      <section className="mx-auto max-w-5xl px-4 pt-16">
        <div className="grid gap-6 md:grid-cols-3">
          {t.steps.map((s, i) => (
            <div key={s.title} className="card-gold relative flex flex-col items-center p-6 pt-9 text-center">
              <span className="bg-gold-gradient absolute -top-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold text-brand-950 shadow">
                {String(i + 1).padStart(2, "0")}
              </span>
              <IconBadge name={stepIcons[i]} size="sm" />
              <h3 className="mt-3 font-extrabold text-brand-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-800/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The form */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <RequestForm dict={dict} />
      </section>
    </>
  );
}
