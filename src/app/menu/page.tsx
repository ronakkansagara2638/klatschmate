import type { Metadata } from "next";
import { CAFE, MENU, MENU_PAGES } from "@/lib/cafe";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import MenuClient from "@/components/MenuClient";
import MenuPagesGrid from "@/components/MenuPagesGrid";
import BookButton from "@/components/BookButton";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Klatsch Mate menu — authentic Neapolitan pizza, fresh in-house pasta, global bowls, specialty coffee, matcha & desserts in Chandkheda, Ahmedabad.",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Menu"
        title="Crafted in-house,"
        accent="served with love"
        copy="From 48-hour Neapolitan dough to ceremonial-grade matcha — Jain & Swaminarayan options available throughout. Browse dishes or flip through the full printed menu below."
        image="/assets/photo1.jpeg"
      />

      {/* Dietary note */}
      <section className="border-b border-espresso-100 bg-espresso-100/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 text-[13px] font-semibold uppercase tracking-wider text-espresso-600 sm:px-6">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
            Jain options
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
            Swaminarayan options
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
            Fresh in-house daily
          </span>
          <span className="text-espresso-500">Dishes transcribed from our printed card · tax as applicable</span>
        </div>
      </section>

      {/* Interactive menu */}
      <MenuClient menu={MENU} />

      {/* Printed menu pages */}
      <section className="grain bg-espresso-950 py-20 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-400">The Full Card</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-black sm:text-5xl">
              Flip through our <em className="text-espresso-400">printed menu</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-espresso-300">
              All {MENU_PAGES.length} pages of the actual café card, exactly as printed — click any page to view it full-size.
            </p>
          </Reveal>
          <MenuPagesGrid pages={MENU_PAGES} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <Reveal className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-4xl font-black text-espresso-900">Hungry already?</h2>
          <p className="mt-3 text-lg text-espresso-600">
            {CAFE.hoursShort} · {CAFE.phone}
          </p>
          <BookButton className="mt-8 cursor-pointer rounded-full bg-espresso-700 px-9 py-4 text-[15px] font-bold uppercase tracking-widest text-cream transition hover:bg-espresso-600" />
        </Reveal>
      </section>
    </>
  );
}
