"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CAFE } from "@/lib/cafe";
import { useCafe } from "./CafeContext";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking } = useCafe();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on navigation (handled via link onClick below)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 shadow-[0_1px_0_rgba(120,53,15,0.12),0_12px_32px_-16px_rgba(36,17,5,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Top micro-bar */}
      <div
        className={`overflow-hidden bg-espresso-950 text-center text-[11px] tracking-wide text-espresso-200 transition-all duration-500 ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <p className="py-1.5 px-4">
          {CAFE.hoursShort} · {CAFE.address.line1}, {CAFE.address.city}
        </p>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8" aria-label="Main">
        <Link href="/" className="group flex items-center gap-3" aria-label="Klatsch Mate — home">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-espresso-600/60 transition group-hover:ring-espresso-500">
            <Image src="/assets/logo.jpeg" alt="Klatsch Mate logo" fill sizes="44px" className="object-cover" />
          </span>
          <span className="leading-tight">
            <span className={`block font-display text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-espresso-900" : "text-cream drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"}`}>
              Klatsch Mate
            </span>
            <span className={`block text-[10px] font-semibold uppercase tracking-[0.28em] transition-colors ${scrolled ? "text-espresso-500" : "text-espresso-200"}`}>
              {CAFE.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
                  scrolled
                    ? active
                      ? "text-espresso-900"
                      : "text-espresso-600 hover:text-espresso-900"
                    : active
                      ? "text-white"
                      : "text-cream/85 hover:text-white"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 -z-10 rounded-full ${scrolled ? "bg-espresso-100" : "bg-white/15 backdrop-blur-sm"}`}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
          <button
            onClick={openBooking}
            className="ml-3 cursor-pointer rounded-full bg-espresso-600 px-5 py-2.5 text-[14px] font-bold uppercase tracking-wider text-white shadow-lg shadow-espresso-600/25 transition hover:bg-espresso-500 hover:shadow-espresso-500/30 active:scale-95"
          >
            Book a Table
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={openBooking}
            className="cursor-pointer rounded-full bg-espresso-600 px-4 py-2 text-[13px] font-bold uppercase tracking-wider text-white transition hover:bg-espresso-500"
          >
            Book
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`grid h-11 w-11 cursor-pointer place-items-center rounded-full transition ${
              scrolled ? "text-espresso-800 hover:bg-espresso-100" : "text-cream hover:bg-white/10"
            }`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-espresso-100 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-lg font-semibold ${
                      pathname === l.href ? "bg-espresso-100 text-espresso-900" : "text-espresso-700 hover:bg-espresso-50"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <button
                onClick={() => { setOpen(false); openBooking(); }}
                className="mt-2 w-full cursor-pointer rounded-xl bg-espresso-700 py-3.5 text-[15px] font-bold uppercase tracking-widest text-cream"
              >
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
