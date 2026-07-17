"use client";

import { useState } from "react";
import type { Dict } from "@/lib/dictionaries/ar";
import { Icon } from "./icons";

const inputCls =
  "w-full rounded-lg border border-ivory-200 bg-ivory-50 px-4 py-3 text-sm text-brand-900 outline-none transition placeholder:text-brand-800/40 focus:border-gold-400 focus:ring-2 focus:ring-gold-300/40";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-brand-900">
        {label} {required && <span className="text-gold-600">*</span>}
      </span>
      {children}
    </label>
  );
}

export default function RequestForm({ dict }: { dict: Dict }) {
  const f = dict.request.form;
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="card-gold flex flex-col items-center p-12 text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-900 text-gold-400 ring-2 ring-gold-400">
          <Icon name="check" className="h-10 w-10" strokeWidth={2.5} />
        </span>
        <h2 className="mt-6 text-2xl font-extrabold text-brand-900">{f.successTitle}</h2>
        <p className="mt-3 max-w-md leading-relaxed text-brand-800/75">{f.successDesc}</p>
      </div>
    );
  }

  return (
    <form
      className="card-gold p-8 md:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        /* TODO: wire to an email service / backend endpoint */
        setSent(true);
      }}
    >
      <h2 className="mb-8 text-center text-2xl font-extrabold text-brand-900">{f.title}</h2>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={f.name} required>
          <input required className={inputCls} placeholder={f.namePh} name="name" />
        </Field>
        <Field label={f.company}>
          <input className={inputCls} placeholder={f.companyPh} name="company" />
        </Field>
        <Field label={f.email} required>
          <input required type="email" className={inputCls} placeholder={f.emailPh} name="email" dir="ltr" />
        </Field>
        <Field label={f.phone} required>
          <input required className={inputCls} placeholder={f.phonePh} name="phone" dir="ltr" />
        </Field>
        <Field label={f.country} required>
          <input required className={inputCls} placeholder={f.countryPh} name="country" />
        </Field>
        <Field label={f.category} required>
          <select required className={inputCls} name="category" defaultValue="">
            <option value="" disabled>
              {f.categoryPh}
            </option>
            {dict.categories.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label={f.product} required>
          <input required className={inputCls} placeholder={f.productPh} name="product" />
        </Field>
        <Field label={f.quantity} required>
          <input required className={inputCls} placeholder={f.quantityPh} name="quantity" />
        </Field>
        <div className="md:col-span-2">
          <Field label={f.budget}>
            <input className={inputCls} placeholder={f.budgetPh} name="budget" />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label={f.details}>
            <textarea rows={5} className={inputCls} placeholder={f.detailsPh} name="details" />
          </Field>
        </div>
      </div>
      <button
        type="submit"
        className="bg-gold-gradient mt-8 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-extrabold text-brand-950 shadow-lg shadow-gold-600/25 transition hover:brightness-110"
      >
        <Icon name="send" className="h-5 w-5" />
        {f.submit}
      </button>
    </form>
  );
}
