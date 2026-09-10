"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please tell us your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email";
    if (form.message.trim().length < 10) errs.message = "A few more words, please (10+ characters)";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-espresso-200 bg-white px-4 py-3 text-[15px] text-espresso-800 placeholder:text-espresso-300 outline-none transition focus:border-espresso-500 focus:ring-2 focus:ring-espresso-500/25";
  const labelCls = "mb-1.5 block text-[13px] font-semibold uppercase tracking-wider text-espresso-600";

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-8 rounded-3xl border border-sage/40 bg-white p-8 text-center shadow-lg"
        role="status"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sage text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold text-espresso-900">Message sent!</h3>
        <p className="mt-2 text-espresso-600">
          Thanks, {form.name.split(" ")[0]} — we&apos;ll get back to you at {form.email} within a day.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", subject: "", message: "" }); setSent(false); }}
          className="mt-5 cursor-pointer rounded-full border-2 border-espresso-700 px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-espresso-800 transition hover:bg-espresso-700 hover:text-cream"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-8 space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ct-name" className={labelCls}>Name</label>
          <input id="ct-name" className={inputCls} placeholder="Your name" value={form.name} onChange={(e) => set("name")(e.target.value)} />
          {errors.name && <p className="mt-1 text-xs font-medium text-red-700">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="ct-email" className={labelCls}>Email</label>
          <input id="ct-email" type="email" className={inputCls} placeholder="you@example.com" value={form.email} onChange={(e) => set("email")(e.target.value)} />
          {errors.email && <p className="mt-1 text-xs font-medium text-red-700">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="ct-subject" className={labelCls}>Subject</label>
        <input id="ct-subject" className={inputCls} placeholder="Reservation, event, feedback…" value={form.subject} onChange={(e) => set("subject")(e.target.value)} />
      </div>
      <div>
        <label htmlFor="ct-message" className={labelCls}>Message</label>
        <textarea id="ct-message" rows={5} className={inputCls} placeholder="Tell us everything…" value={form.message} onChange={(e) => set("message")(e.target.value)} />
        {errors.message && <p className="mt-1 text-xs font-medium text-red-700">{errors.message}</p>}
      </div>
      <button type="submit"
        className="w-full cursor-pointer rounded-full bg-espresso-700 py-4 text-[15px] font-bold uppercase tracking-widest text-cream transition hover:bg-espresso-600 active:scale-[0.99] sm:w-auto sm:px-10">
        Send Message
      </button>
    </form>
  );
}
