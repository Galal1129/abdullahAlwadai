import { notFound } from "next/navigation";
import Link from "next/link";
import { IconBadge, PageHero } from "@/components/ui";
import { getDict } from "@/lib/getDict";
import { isLocale } from "@/lib/i18n";

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const t = dict.blog;

  return (
    <>
      <PageHero title={t.pageTitle} subtitle={t.pageTitleEn} intro={t.pageSubtitle} />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {t.posts.map((p) => (
            <article key={p.title} className="card-gold group overflow-hidden transition hover:-translate-y-1">
              {/* decorative header instead of a stock photo */}
              <div className="bg-hero bg-dots relative flex h-44 items-center justify-center">
                <IconBadge name={p.icon} size="lg" />
                <span className="absolute start-4 top-4 rounded-full bg-gold-500/90 px-3 py-1 text-xs font-extrabold text-brand-950">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-gold-600">{p.date}</p>
                <h2 className="mt-2 text-xl font-extrabold leading-snug text-brand-900 group-hover:text-brand-700">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-800/75">{p.excerpt}</p>
                <Link
                  href={`/${locale}/contact`}
                  className="mt-5 inline-block text-sm font-extrabold text-gold-600 underline decoration-gold-400 underline-offset-4 transition hover:text-gold-500"
                >
                  {dict.common.readMore}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
