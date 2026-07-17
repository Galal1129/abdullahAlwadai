import { notFound } from "next/navigation";
import ProductsExplorer from "@/components/ProductsExplorer";
import { CtaBanner, FeatureStrip, PageHero } from "@/components/ui";
import { getDict } from "@/lib/getDict";
import { isLocale } from "@/lib/i18n";

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const t = dict.products;

  return (
    <>
      <PageHero title={t.pageTitle} subtitle={t.pageTitleEn} intro={t.pageSubtitle} />

      <ProductsExplorer locale={locale} dict={dict} />

      {/* Commitment banner + guarantees strip */}
      <section className="mx-auto max-w-7xl space-y-10 px-4 pb-20">
        <CtaBanner text={t.commitBanner} />
        <div className="card-gold p-8">
          <FeatureStrip items={t.guarantees} />
        </div>
      </section>
    </>
  );
}
