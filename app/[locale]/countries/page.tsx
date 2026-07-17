import Image from "next/image";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { FeatureStrip, GoldButton } from "@/components/ui";
import { getDict } from "@/lib/getDict";
import { isLocale } from "@/lib/i18n";
import { countryFlagImages } from "@/lib/countryFlags";

const nodePositions = [
  { x: 16, y: 17 },
  { x: 37, y: 11 },
  { x: 63, y: 11 },
  { x: 84, y: 18 },
  { x: 10, y: 50 },
  { x: 90, y: 50 },
  { x: 18, y: 82 },
  { x: 39, y: 89 },
  { x: 62, y: 89 },
  { x: 83, y: 82 },
];

export default async function CountriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const t = dict.countries;

  return (
    <>
      {/* ===== Editorial heading ===== */}
      <section className="relative overflow-hidden bg-ivory-50 px-4 pb-10 pt-12 text-center md:pb-12 md:pt-14">
        <div className="bg-dots absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
            {locale === "ar" ? "شبكتنا التجارية العالمية" : "OUR GLOBAL TRADE NETWORK"}
            <span className="mx-3 text-gold-400">|</span>08
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-brand-950 md:text-4xl">{t.pageTitle}</h1>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.24em] text-gold-600">{t.pageTitleEn}</p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-brand-800/75">{t.pageSubtitle}</p>
          <div className="ornament mt-5">◆</div>
        </div>
      </section>

      {/* ===== Logistics image + connected world network ===== */}
      <section className="border-y border-gold-400/35 bg-ivory-100">
        <div className="mx-auto grid max-w-[96rem] lg:grid-cols-[34%_66%]">
          <div className="bg-hero relative min-h-[27rem] overflow-hidden lg:min-h-[40rem]">
            <Image
              src="/images/thawq-global-logistics-hero.png"
              alt={locale === "ar" ? "شبكة THAWQ للشحن والتجارة العالمية" : "THAWQ global shipping and trade network"}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/10 to-transparent" />
            <div className="bg-dots absolute inset-0 opacity-20" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center text-white md:p-8 lg:text-start">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/60 bg-brand-950/75 text-gold-300 backdrop-blur lg:mx-0">
                <Icon name="globe" className="h-7 w-7" />
              </span>
              <h2 className="mt-4 text-2xl font-extrabold">{t.sideTitle}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">{t.sideText}</p>
              <div className="mt-6">
                <GoldButton href={`/${locale}/request`}>{dict.common.requestNow}</GoldButton>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-ivory-50 p-4 sm:p-8 lg:p-10">
            <div className="bg-dots absolute inset-0 opacity-30" />

            {/* Desktop connected layout */}
            <div className="relative hidden h-[35rem] lg:block">
              <div className="absolute inset-x-[4%] top-1/2 h-[28rem] -translate-y-1/2 text-brand-800 opacity-[0.12]">
                <Image src="/images/world-map.svg" alt="" fill sizes="60vw" className="object-contain" />
              </div>
              <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                {nodePositions.map((position, index) => (
                  <g key={index}>
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`${position.x}%`}
                      y2={`${position.y}%`}
                      stroke="rgba(169,133,47,0.52)"
                      strokeWidth="1.5"
                    />
                    <circle cx={`${position.x}%`} cy={`${position.y}%`} r="4" fill="#0a4a39" />
                  </g>
                ))}
              </svg>

              <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold-400 bg-brand-950 p-1 text-center shadow-[0_18px_55px_rgba(3,36,28,0.28)] ring-6 ring-gold-100/70">
                <div className="relative h-28 w-28">
                  <Image src="/images/thawq-logo.png" alt="THAWQ Import & Export" fill sizes="112px" className="object-contain" />
                </div>
              </div>

              {t.list.map((country, index) => {
                const position = nodePositions[index];
                return (
                  <article
                    key={country.name}
                    className="absolute z-20 w-32 -translate-x-1/2 -translate-y-1/2 text-center"
                    style={{ left: `${position.x}%`, top: `${position.y}%` }}
                  >
                    <span className="relative mx-auto block h-12 w-12 overflow-hidden rounded-full border-2 border-gold-400 bg-white shadow-md">
                      <Image src={countryFlagImages[index]} alt={country.name} fill sizes="48px" className="object-cover" />
                    </span>
                    <div className="mt-1.5 rounded-xl border border-gold-400/70 bg-brand-950 px-2 py-1.5 shadow-lg">
                      <h3 className="truncate text-sm font-extrabold text-white">{country.name}</h3>
                      <p className="truncate text-[0.58rem] font-bold uppercase tracking-[0.13em] text-gold-300">{country.nameEn}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Mobile/tablet cards */}
            <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
              {t.list.map((country, index) => (
                <article key={country.name} className="card-gold flex flex-col items-center p-4 text-center">
                  <span className="relative block h-14 w-14 overflow-hidden rounded-full border-2 border-gold-400/70 bg-white shadow-sm">
                    <Image src={countryFlagImages[index]} alt={country.name} fill sizes="56px" className="object-cover" />
                  </span>
                  <h3 className="mt-3 text-sm font-extrabold text-brand-950">{country.name}</h3>
                  <p className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-gold-600">{country.nameEn}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Network advantages ===== */}
      <section className="relative overflow-hidden bg-hero py-16 md:py-20">
        <div className="bg-dots absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-400">GLOBAL NETWORK ADVANTAGES</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white">{t.networkTitle}</h2>
          </div>
          <div className="mt-10 rounded-3xl border border-gold-500/30 bg-white/[0.06] p-6 backdrop-blur-sm md:p-9">
            <FeatureStrip items={t.network} light />
          </div>
        </div>
      </section>
    </>
  );
}
