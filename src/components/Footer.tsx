import Link from "next/link";
import Image from "next/image";
import { CAFE } from "@/lib/cafe";
import BookButton from "./BookButton";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grain relative overflow-hidden bg-espresso-950 text-espresso-200">
      {/* Marquee ribbon */}
      <div className="border-b border-white/10 py-4" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8">
              {["Neapolitan Pizza", "Fresh Pasta", "Specialty Coffee", "Raspberry Matcha", "Whiskey Barrel Cold Brew", "Open till 1 AM", "Chandkheda · Motera · Sabarmati"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-8 font-display text-lg italic text-espresso-300">
                    {t}
                    <span className="h-1.5 w-1.5 rotate-45 bg-espresso-500" />
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <Image src="/assets/logo.jpeg" alt="Klatsch Mate logo" width={52} height={52} className="rounded-full ring-2 ring-espresso-600/50" />
            <div>
              <p className="font-display text-2xl font-bold text-cream">Klatsch Mate</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-espresso-400">{CAFE.tagline}</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-espresso-300">
            Best European cuisine in Ahmedabad — authentic Neapolitan pizza, fresh in-house Italian pasta & specialty coffee.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { href: CAFE.social.instagram, label: "Instagram", icon: "M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 16.6 2.2 16.2 2.2 12s0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2Zm0 3.1a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4Zm0 2.4a4.3 4.3 0 1 1 0 8.6 4.3 4.3 0 0 1 0-8.6Zm6.9-2.9a1.6 1.6 0 1 1-3.1 0 1.6 1.6 0 0 1 3.1 0Z" },
              { href: CAFE.social.whatsapp, label: "WhatsApp", icon: "M12 2a10 10 0 0 0-8.7 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 0 1 12 4Zm-3.1 4.2c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.3.2-.6.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.3.1-.5l-.8-1.9c-.2-.4-.4-.4-.5-.4h-.6Z" },
              { href: `mailto:${CAFE.email}`, label: "Email", icon: "M4 20h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Zm0-3.2 6.4-4.4a3 3 0 0 1 3.2 0L20 16.8M4 6.5l7.1 4.9a1.6 1.6 0 0 0 1.8 0L20 6.5" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-espresso-300 transition hover:border-espresso-500 hover:bg-espresso-600 hover:text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.icon} /></svg>
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer">
          <p className="font-display text-lg font-bold text-cream">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/menu", label: "Menu" },
              { href: "/contact", label: "Contact & Location" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-[44px] items-center gap-2 text-espresso-300 transition hover:text-cream">
                  <span className="h-1 w-1 rotate-45 bg-espresso-500" /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visit */}
        <div>
          <p className="font-display text-lg font-bold text-cream">Visit Us</p>
          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-espresso-300">
            <p>{CAFE.address.line1}</p>
            <p>{CAFE.address.line2}</p>
            <p>{CAFE.address.line3}, {CAFE.address.city}</p>
          </address>
          <a href={CAFE.address.mapUrl} target="_blank" rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-espresso-300 underline-offset-4 transition hover:text-cream hover:underline">
            Get Directions
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
          </a>
        </div>

        {/* Hours + CTA */}
        <div>
          <p className="font-display text-lg font-bold text-cream">Hours</p>
          <ul className="mt-4 space-y-2 text-sm text-espresso-300">
            {CAFE.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-3">
                <span>{h.days}</span>
                <span className="font-semibold text-espresso-200">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-sage">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sage" /> {CAFE.hoursShort}
          </p>
          <div className="mt-5">
            <BookButton className="w-full cursor-pointer rounded-full bg-espresso-600 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-espresso-500" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-espresso-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Klatsch Mate · Chandkheda, Ahmedabad. All rights reserved.</p>
          <p>Crafted with ♥ & 48-hour dough.</p>
        </div>
      </div>
    </footer>
  );
}
