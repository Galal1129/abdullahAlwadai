import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/ui";
import { getDict } from "@/lib/getDict";
import { isLocale } from "@/lib/i18n";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const t = dict.contact;

  const infoItems = [
    { icon: "pin", label: t.addressLabel, value: t.address, ltr: false },
    { icon: "mail", label: t.emailLabel, value: dict.footer.email, ltr: true },
    { icon: "globe", label: t.websiteLabel, value: dict.footer.website, ltr: true },
    { icon: "clock", label: t.hoursLabel, value: t.hours, ltr: false },
  ];

  return (
    <>
      <PageHero title={t.pageTitle} subtitle={t.pageTitleEn} intro={t.pageSubtitle} />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact info panel */}
          <div className="bg-hero bg-dots h-fit rounded-2xl border border-gold-500/40 p-8">
            <h2 className="text-xl font-extrabold text-gold-300">{t.infoTitle}</h2>
            <ul className="mt-8 space-y-6">
              {infoItems.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-700/60 text-gold-400 ring-1 ring-gold-500/50">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gold-400">{item.label}</p>
                    <p className="mt-1 text-white/85" dir={item.ltr ? "ltr" : undefined}>
                      {item.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-10 border-t border-gold-500/25 pt-5 text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
              {dict.common.taglineEn}
            </p>
          </div>

          {/* Form */}
          <ContactForm dict={dict} />
        </div>
      </section>
    </>
  );
}
