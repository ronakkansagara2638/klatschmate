"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/cafe";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  const item = TESTIMONIALS[index];

  return (
    <div
      className="relative mt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[300px] sm:min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-espresso-200/70 bg-white p-8 shadow-xl sm:p-12"
          >
            <div className="flex gap-1 text-espresso-500" aria-label={`${item.rating} out of 5 stars`}>
              {Array.from({ length: item.rating }).map((_, s) => (
                <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.5 14.9 8.6l6.6.9-4.8 4.7 1.1 6.6L12 17.7l-5.8 3.1 1.1-6.6L2.5 9.5l6.6-.9L12 2.5Z" />
                </svg>
              ))}
            </div>
            <p className="mt-5 font-display text-xl italic leading-relaxed text-espresso-800 sm:text-2xl">
              “{item.quote}”
            </p>
            <footer className="mt-6 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-espresso-700 font-display text-lg font-bold text-cream">
                {item.name.charAt(0)}
              </span>
              <div>
                <p className="font-bold text-espresso-900">{item.name}</p>
                <p className="text-sm text-espresso-500">{item.role}</p>
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={() => go(-1)} aria-label="Previous testimonial"
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-espresso-300 text-espresso-700 transition hover:bg-espresso-700 hover:text-cream">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <div className="flex gap-1">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Go to testimonial ${i + 1}`}
              className="grid h-8 w-8 cursor-pointer place-items-center">
              <span className={`rounded-full transition-all duration-300 ${i === index ? "h-2 w-7 bg-espresso-700" : "h-2 w-2 bg-espresso-300 hover:bg-espresso-400"}`} />
            </button>
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next testimonial"
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-espresso-300 text-espresso-700 transition hover:bg-espresso-700 hover:text-cream">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}
