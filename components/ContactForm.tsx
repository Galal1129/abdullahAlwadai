"use client";

import { useState } from "react";
import type { Dict } from "@/lib/dictionaries/ar";
import { Icon } from "./icons";

const inputCls =
  "w-full rounded-lg border border-ivory-200 bg-ivory-50 px-4 py-3 text-sm text-brand-900 outline-none transition placeholder:text-brand-800/40 focus:border-gold-400 focus:ring-2 focus:ring-gold-300/40";

export default function ContactForm({ dict }: { dict: Dict }) {
  const f = dict.contact.form;
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
      className="card-gold p-8"
      onSubmit={(e) => {
        e.preventDefault();
        /* TODO: wire to an email service / backend endpoint */
        setSent(true);
      }}
    >
      <h2 className="mb-6 text-xl font-extrabold text-brand-900">{f.title}</h2>
      <div className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <input required className={inputCls} placeholder={f.namePh} name="name" aria-label={f.name} />
          <input
            required
            type="email"
            className={inputCls}
            placeholder={f.emailPh}
            name="email"
            aria-label={f.email}
            dir="ltr"
          />
        </div>
        <input required className={inputCls} placeholder={f.subjectPh} name="subject" aria-label={f.subject} />
        <textarea
          required
          rows={6}
          className={inputCls}
          placeholder={f.messagePh}
          name="message"
          aria-label={f.message}
        />
      </div>
      <button
        type="submit"
        className="bg-gold-gradient mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-extrabold text-brand-950 shadow-lg shadow-gold-600/25 transition hover:brightness-110"
      >
        <Icon name="send" className="h-5 w-5" />
        {f.submit}
      </button>
    </form>
  );
}
