"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Page = { src: string; page: number };

export default function MenuPagesGrid({ pages }: { pages: Page[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const step = (dir: number) =>
    setLightbox((i) => (i === null ? null : (i + dir + pages.length) % pages.length));

  return (
    <>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {pages.map((p, i) => (
          <motion.button
            key={p.src}
            onClick={() => setLightbox(i)}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 5) * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
            className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl shadow-lg shadow-black/30 focus-visible:ring-2 focus-visible:ring-espresso-400"
            aria-label={`Open menu page ${p.page}`}
          >
            <Image
              src={p.src}
              alt={`Klatsch Mate printed menu page ${p.page}`}
              fill
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
              className="object-cover transition duration-500 group-hover:brightness-110"
            />
            <span className="absolute bottom-2 right-2 rounded-full bg-espresso-950/70 px-2.5 py-0.5 text-[11px] font-bold text-cream backdrop-blur">
              {p.page}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-espresso-950/95 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`Menu page ${pages[lightbox].page}`}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[88vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={pages[lightbox].src}
                alt={`Klatsch Mate printed menu page ${pages[lightbox].page}`}
                width={900}
                height={1200}
                className="mx-auto max-h-[88vh] w-auto rounded-xl object-contain shadow-2xl"
                priority
              />
              <p className="mt-3 text-center text-sm font-semibold text-espresso-300">
                Page {pages[lightbox].page} of {pages.length}
              </p>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label="Previous page"
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/10 text-cream backdrop-blur transition hover:bg-white/25"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Next page"
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/10 text-cream backdrop-blur transition hover:bg-white/25"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close menu viewer"
              className="absolute right-4 top-4 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white/10 text-cream backdrop-blur transition hover:bg-white/25"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
