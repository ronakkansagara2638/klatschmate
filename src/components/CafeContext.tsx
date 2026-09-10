"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { motion } from "framer-motion";

export type Reservation = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  notes: string;
};

type CafeContextValue = {
  bookingOpen: boolean;
  /** Increments each time the modal opens so the form remounts fresh. */
  bookingNonce: number;
  bookingSuccess: Reservation | null;
  openBooking: () => void;
  closeBooking: () => void;
  confirmBooking: (r: Reservation) => void;
};

const CafeContext = createContext<CafeContextValue | null>(null);

export function CafeProvider({ children }: { children: ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingNonce, setBookingNonce] = useState(0);
  const [bookingSuccess, setBookingSuccess] = useState<Reservation | null>(null);

  const openBooking = useCallback(() => {
    setBookingNonce((n) => n + 1);
    setBookingOpen(true);
  }, []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  const confirmBooking = useCallback((r: Reservation) => {
    setBookingSuccess(r);
    setBookingOpen(false);
  }, []);

  // Lock body scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = bookingOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [bookingOpen]);

  return (
    <CafeContext.Provider
      value={{ bookingOpen, bookingNonce, bookingSuccess, openBooking, closeBooking, confirmBooking }}
    >
      {children}
      <BookingModal />
      <BookingToast />
    </CafeContext.Provider>
  );
}

export function useCafe() {
  const ctx = useContext(CafeContext);
  if (!ctx) throw new Error("useCafe must be used within CafeProvider");
  return ctx;
}

/* ─── Booking modal ─────────────────────────────────────────────────────── */

const TIMES = [
  "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM",
  "11:00 PM", "12:00 AM",
];

const OCCASIONS = ["Just coffee", "Birthday", "Date night", "Work & wifi", "Family dinner", "Board games"];

function BookingModal() {
  const { bookingOpen, bookingNonce } = useCafe();
  if (!bookingOpen) return null;
  // key={bookingNonce} remounts the form fresh on every open
  return <BookingForm key={bookingNonce} />;
}

function BookingForm() {
  const { closeBooking, confirmBooking } = useCafe();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<Reservation>({
    name: "", phone: "", email: "", date: "", time: "7:00 PM",
    guests: 2, occasion: OCCASIONS[0], notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeBooking();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeBooking]);

  const set = (k: keyof Reservation) => (v: string | number) =>
    setForm((f) => ({ ...f, [k]: v }));

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!form.date) e.date = "Please pick a date";
    if (!form.time) e.time = "Please pick a time";
    if (form.guests < 1 || form.guests > 20) e.guests = "1–20 guests";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please tell us your name";
    if (!/^[0-9+\-\s()]{8,15}$/.test(form.phone.trim()))
      e.phone = "Enter a valid phone number";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const inputCls =
    "w-full rounded-xl border border-espresso-200 bg-white/80 px-4 py-3 text-[15px] text-espresso-800 placeholder:text-espresso-300 outline-none transition focus:border-espresso-500 focus:ring-2 focus:ring-espresso-500/25";
  const labelCls = "mb-1.5 block text-[13px] font-semibold uppercase tracking-wider text-espresso-600";

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label="Book a table">
      <motion.button
        aria-label="Close booking form"
        onClick={closeBooking}
        className="absolute inset-0 cursor-pointer bg-espresso-950/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-cream shadow-2xl sm:rounded-3xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-espresso-100 bg-cream/95 px-6 py-4 backdrop-blur">
          <div>
            <p className="font-display text-lg font-bold text-espresso-800">Book a Table</p>
            <p className="text-xs text-espresso-500">Klatsch Mate · Chandkheda</p>
          </div>
          <button
            onClick={closeBooking}
            aria-label="Close"
            className="grid h-9 w-9 cursor-pointer place-items-center rounded-full text-espresso-500 transition hover:bg-espresso-100 hover:text-espresso-800"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Progress */}
        <div className="flex gap-2 px-6 pt-5">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step >= s ? "bg-espresso-600" : "bg-espresso-200"}`} />
          ))}
        </div>

        <form
          className="px-6 pb-6 pt-5"
          onSubmit={(e) => {
            e.preventDefault();
            if (step === 1 && validateStep1()) setStep(2);
            else if (step === 2 && validateStep2()) setStep(3);
            else if (step === 3) confirmBooking(form);
          }}
        >
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="space-y-4">
              <p className="font-display text-2xl font-bold text-espresso-900">When are you joining us?</p>
              <div>
                <label htmlFor="bk-date" className={labelCls}>Date</label>
                <input id="bk-date" type="date" required min={new Date().toISOString().split("T")[0]}
                  className={inputCls} value={form.date} onChange={(e) => set("date")(e.target.value)} />
                {errors.date && <p className="mt-1 text-xs font-medium text-red-700">{errors.date}</p>}
              </div>
              <div>
                <label htmlFor="bk-time" className={labelCls}>Time</label>
                <select id="bk-time" className={inputCls} value={form.time} onChange={(e) => set("time")(e.target.value)}>
                  {TIMES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <span className={labelCls}>Guests</span>
                <div className="flex items-center gap-3">
                  <button type="button" aria-label="Fewer guests" onClick={() => set("guests")(Math.max(1, form.guests - 1))}
                    className="h-11 w-11 cursor-pointer rounded-full border border-espresso-300 text-xl font-bold text-espresso-700 transition hover:bg-espresso-100">−</button>
                  <span className="w-10 text-center font-display text-2xl font-bold">{form.guests}</span>
                  <button type="button" aria-label="More guests" onClick={() => set("guests")(Math.min(20, form.guests + 1))}
                    className="h-11 w-11 cursor-pointer rounded-full border border-espresso-300 text-xl font-bold text-espresso-700 transition hover:bg-espresso-100">+</button>
                  <span className="text-sm text-espresso-500">larger groups? WhatsApp us</span>
                </div>
              </div>
              <button type="submit" className="mt-2 w-full cursor-pointer rounded-full bg-espresso-700 py-3.5 text-[15px] font-bold uppercase tracking-widest text-cream transition hover:bg-espresso-600 active:scale-[0.99]">
                Continue →
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="space-y-4">
              <p className="font-display text-2xl font-bold text-espresso-900">Who&apos;s coming?</p>
              <div>
                <label htmlFor="bk-name" className={labelCls}>Name</label>
                <input id="bk-name" className={inputCls} placeholder="Your name" value={form.name}
                  onChange={(e) => set("name")(e.target.value)} />
                {errors.name && <p className="mt-1 text-xs font-medium text-red-700">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="bk-phone" className={labelCls}>Phone</label>
                <input id="bk-phone" type="tel" className={inputCls} placeholder="+91 98XXX XXXXX" value={form.phone}
                  onChange={(e) => set("phone")(e.target.value)} />
                {errors.phone && <p className="mt-1 text-xs font-medium text-red-700">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="bk-email" className={labelCls}>Email (optional)</label>
                <input id="bk-email" type="email" className={inputCls} placeholder="you@example.com" value={form.email}
                  onChange={(e) => set("email")(e.target.value)} />
                {errors.email && <p className="mt-1 text-xs font-medium text-red-700">{errors.email}</p>}
              </div>
              <div>
                <span className={labelCls}>Occasion</span>
                <div className="flex flex-wrap gap-2">
                  {OCCASIONS.map((o) => (
                    <button key={o} type="button" onClick={() => set("occasion")(o)}
                      className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition ${form.occasion === o ? "border-espresso-700 bg-espresso-700 text-cream" : "border-espresso-200 bg-white/70 text-espresso-700 hover:border-espresso-400"}`}>
                      {o}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-1">
                <button type="button" onClick={() => setStep(1)}
                  className="cursor-pointer rounded-full border border-espresso-300 px-6 py-3 text-sm font-bold uppercase tracking-widest text-espresso-700 transition hover:bg-espresso-100">
                  ← Back
                </button>
                <button type="submit" className="flex-1 cursor-pointer rounded-full bg-espresso-700 py-3.5 text-[15px] font-bold uppercase tracking-widest text-cream transition hover:bg-espresso-600 active:scale-[0.99]">
                  Review →
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="space-y-4">
              <p className="font-display text-2xl font-bold text-espresso-900">One last look</p>
              <dl className="space-y-2 rounded-2xl border border-espresso-200 bg-white/70 p-5 text-[15px]">
                <div className="flex justify-between gap-4"><dt className="text-espresso-500">Date</dt><dd className="font-semibold">{form.date}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-espresso-500">Time</dt><dd className="font-semibold">{form.time}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-espresso-500">Guests</dt><dd className="font-semibold">{form.guests}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-espresso-500">Name</dt><dd className="font-semibold">{form.name}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-espresso-500">Phone</dt><dd className="font-semibold">{form.phone}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-espresso-500">Occasion</dt><dd className="font-semibold">{form.occasion}</dd></div>
              </dl>
              <div>
                <label htmlFor="bk-notes" className={labelCls}>Notes for the kitchen (optional)</label>
                <textarea id="bk-notes" rows={2} className={inputCls} placeholder="Jain prep, birthday cake, window seat…"
                  value={form.notes} onChange={(e) => set("notes")(e.target.value)} />
              </div>
              <div className="flex gap-3 pt-1">
                <button type="button" onClick={() => setStep(2)}
                  className="cursor-pointer rounded-full border border-espresso-300 px-6 py-3 text-sm font-bold uppercase tracking-widest text-espresso-700 transition hover:bg-espresso-100">
                  ← Back
                </button>
                <button type="submit" className="flex-1 cursor-pointer rounded-full bg-espresso-700 py-3.5 text-[15px] font-bold uppercase tracking-widest text-cream transition hover:bg-espresso-600 active:scale-[0.99]">
                  Confirm booking
                </button>
              </div>
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
}

/* ─── Success toast ─────────────────────────────────────────────────────── */

function BookingToast() {
  const { bookingSuccess } = useCafe();
  // Track which reservation was dismissed so a new booking shows a fresh toast.
  const [dismissed, setDismissed] = useState<Reservation | null>(null);
  const visible = Boolean(bookingSuccess) && bookingSuccess !== dismissed;

  // Auto-dismiss after 8s (setState inside the timeout callback, not the effect body)
  useEffect(() => {
    if (!bookingSuccess || bookingSuccess === dismissed) return;
    const t = setTimeout(() => setDismissed(bookingSuccess), 8000);
    return () => clearTimeout(t);
  }, [bookingSuccess, dismissed]);

  if (!bookingSuccess || !visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-1/2 z-[110] w-[min(92vw,420px)] -translate-x-1/2"
      role="status"
    >
      <div className="flex items-start gap-3 rounded-2xl border border-sage/40 bg-white p-4 shadow-2xl">
        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sage text-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </span>
        <div className="flex-1">
          <p className="font-display font-bold text-espresso-900">Table requested, {bookingSuccess.name.split(" ")[0]}!</p>
          <p className="text-sm text-espresso-600">
            {bookingSuccess.guests} guests · {bookingSuccess.date} at {bookingSuccess.time}. We&apos;ll confirm on WhatsApp shortly.
          </p>
        </div>
        <button onClick={() => setDismissed(bookingSuccess)} aria-label="Dismiss"
          className="cursor-pointer text-espresso-400 transition hover:text-espresso-700">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      </div>
    </motion.div>
  );
}
