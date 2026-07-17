import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GoldButton, IconBadge } from "@/components/ui";
import { catalog } from "@/lib/catalog";
import { categoryImages } from "@/lib/categoryImages";
import { getDict } from "@/lib/getDict";
import { isLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return catalog.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category: categorySlug } = await params;
  if (!isLocale(locale)) notFound();

  const category = catalog.find((item) => item.slug === categorySlug);
  if (!category) notFound();

  const dict = getDict(locale);
  const categoryText = dict.categories.find((item) => item.icon === category.icon);
  if (!categoryText) notFound();

  const isArabic = locale === "ar";

  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <Image
          src={categoryImages[category.icon]}
          alt={categoryText.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 to-brand-950" />
        <div className="bg-dots absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <IconBadge name={category.icon} />
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            {isArabic ? categoryText.nameEn : categoryText.nameEn}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-white">{categoryText.name}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75">
            {isArabic
              ? "مجموعة تجريبية من المنتجات المتاحة ضمن هذه الفئة. يمكن طلب المواصفات والكميات المناسبة لمشروعك."
              : "A sample selection of products available in this category. Request the specifications and quantities that suit your business."}
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-14 md:py-18">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link href={`/${locale}/products`} className="text-sm font-bold text-brand-800 transition hover:text-gold-600">
            {isArabic ? "← العودة إلى جميع الكاتوجري" : "← Back to all categories"}
          </Link>
          <p className="rounded-full bg-gold-100 px-4 py-2 text-xs font-bold text-gold-600">
            {isArabic ? "الأسعار المعروضة تجريبية" : "Displayed prices are samples"}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.products.map((product, index) => (
            <article key={product.id} className="card-gold group overflow-hidden transition hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden bg-brand-900">
                <Image
                  src={categoryImages[category.icon]}
                  alt={isArabic ? product.nameAr : product.nameEn}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition duration-500 group-hover:scale-105 ${
                    index === 1 ? "object-left" : index === 2 ? "object-right" : "object-center"
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-950/75 to-transparent" />
                <span className="absolute end-4 top-4 rounded-full bg-brand-950/85 px-3 py-1.5 text-xs font-bold text-gold-300 backdrop-blur">
                  {isArabic ? "منتج تجريبي" : "Sample product"}
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-extrabold text-brand-950">
                  {isArabic ? product.nameAr : product.nameEn}
                </h2>
                <p className="mt-1 text-sm text-brand-800/60">
                  {isArabic ? product.unitAr : product.unitEn}
                </p>
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-ivory-200 pt-4">
                  <strong className="text-xl text-gold-600" dir="ltr">${product.price.toFixed(2)}</strong>
                  <GoldButton href={`/${locale}/request`}>{isArabic ? "اطلب المنتج" : "Request product"}</GoldButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
