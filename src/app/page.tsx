import Link from "next/link";
import Image from "next/image";
import { CAFE, VIDEOS, MENU, GALLERY, STATS, FAQS } from "@/lib/cafe";
import BookButton from "@/components/BookButton";
import Reveal from "@/components/Reveal";
import HomeVideos from "@/components/HomeVideos";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Faq from "@/components/Faq";
import HoverVideo from "@/components/HoverVideo";
import { VIDEO_POSTERS } from "@/lib/cafe";

/** Which categories to feature on the home menu preview. */
const FEATURED_IDS = ["pizza", "pasta", "bowls", "coffee"] as const;

export default function HomePage() {
  const featured = FEATURED_IDS.map((id) => MENU.find((c) => c.id === id)!);

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-espresso-950 text-cream">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src={VIDEOS.hero}
          poster="/assets/hero-still.jpeg"
          autoPlay muted loop playsInline preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/95 via-espresso-950/70 to-espresso-950/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
              {CAFE.hoursShort} · Chandkheda
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-black leading-[1.02] sm:text-7xl lg:text-8xl">
              Konnect.
              <span className="block italic text-espresso-400">Klatsch.</span>
              Kreate.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-espresso-200 sm:text-xl">
              Best European cuisine in Ahmedabad — authentic Neapolitan pizza, fresh in-house Italian pasta & specialty coffee, brewed till 1 AM.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <BookButton className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-espresso-600 px-8 py-4 text-[15px] font-bold uppercase tracking-widest text-white shadow-xl shadow-black/30 transition hover:bg-espresso-500 active:scale-95">
                Book a Table
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </BookButton>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-8 py-4 text-[15px] font-bold uppercase tracking-widest text-cream backdrop-blur transition hover:bg-cream hover:text-espresso-900"
              >
                Explore Menu
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-espresso-300"><path d="M12 5v14m0 0 6-6m-6 6-6-6" /></svg>
        </div>
      </section>

      {/* ─── Stats band ───────────────────────────────────────────────── */}
      <section className="border-b border-espresso-100 bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl font-black text-espresso-700 sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-[13px] font-medium uppercase tracking-wider text-espresso-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
        <div className="divider-diamond mx-auto max-w-7xl px-8 pb-10">
          <span />
        </div>
      </section>

      {/* ─── About teaser ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image src="/assets/photo1.jpeg" alt="Barista crafting specialty coffee at Klatsch Mate" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden w-52 rotate-3 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block">
              <Image src="/assets/photo2.jpeg" alt="Fresh dish served at Klatsch Mate" width={416} height={312} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -left-4 -top-4 -z-10 h-40 w-40 animate-spin-slow rounded-full border-2 border-dashed border-espresso-300" aria-hidden="true" />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-500">Our Story</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight text-espresso-900 sm:text-5xl">
              A little Europe in <em className="text-espresso-600">Chandkheda</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-espresso-700">
              Klatsch Mate is Chandkheda–Motera&apos;s must-visit European café — where 48-hour fermented dough meets a 450°C oven, matcha is whisked from ceremonial-grade leaves, and coffee is roasted light, medium and dark for V60, French press and AeroPress rituals.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-espresso-700">
              “Klatsch” is German for friendly gossip over coffee — and that&apos;s exactly what we serve: global flavours, board games, brunches and a community we call the <strong>Mate Club</strong>. Jain & Swaminarayan options, always.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-espresso-900 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition hover:bg-espresso-700">
                Our Story <span aria-hidden="true">→</span>
              </Link>
              <BookButton className="cursor-pointer rounded-full border-2 border-espresso-700 px-7 py-3 text-sm font-bold uppercase tracking-widest text-espresso-800 transition hover:bg-espresso-700 hover:text-cream" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Menu preview ─────────────────────────────────────────────── */}
      <section className="grain relative bg-espresso-950 py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-400">From the Kitchen</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-black sm:text-5xl">
              Crafted in-house, <em className="text-espresso-400">every single day</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 0.08}>
                <Link href={`/menu#${cat.id}`} className="group block h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-espresso-500/50 hover:bg-white/10">
                  <span className="font-display text-5xl font-black text-espresso-500/60 transition group-hover:text-espresso-400">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-cream">{cat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso-300">{cat.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.2em] text-espresso-400 transition group-hover:gap-3">
                    View dishes <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Videos ───────────────────────────────────────────────────── */}
      <HomeVideos />

      {/* ─── Gallery ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-500">Gallery</p>
            <h2 className="mt-4 font-display text-4xl font-black text-espresso-900 sm:text-5xl">
              Moments over <em className="text-espresso-600">coffee</em>
            </h2>
          </div>
          <Link href="/about#gallery" className="inline-flex min-h-[44px] items-center py-3 text-sm font-bold uppercase tracking-widest text-espresso-600 underline-offset-4 hover:underline">
            View all →
          </Link>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.slice(0, 4).map((g, i) => (
            <Reveal key={g.src} delay={i * 0.06}>
              <div className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "aspect-[3/4] md:row-span-2 md:aspect-auto" : "aspect-square"}`}>
                {g.type === "video" ? (
                  <HoverVideo src={g.src} poster={VIDEO_POSTERS[g.src]} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" label={g.alt} />
                ) : (
                  <Image src={g.src} alt={g.alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-110" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────────── */}
      <section className="bg-espresso-100/60 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-500">Mate Club Love</p>
            <h2 className="mt-4 font-display text-4xl font-black text-espresso-900 sm:text-5xl">What our mates say</h2>
          </Reveal>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ─── Visit us ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-500">Visit Us</p>
            <h2 className="mt-4 font-display text-4xl font-black text-espresso-900 sm:text-5xl">
              Find us in <em className="text-espresso-600">Chandkheda</em>
            </h2>
            <address className="mt-6 space-y-1 text-lg not-italic leading-relaxed text-espresso-700">
              <p className="font-semibold text-espresso-900">{CAFE.name}</p>
              <p>{CAFE.address.line1}</p>
              <p>{CAFE.address.line2}</p>
              <p>{CAFE.address.line3}, {CAFE.address.city}</p>
            </address>
            <dl className="mt-6 space-y-2 text-espresso-700">
              <div className="flex items-center gap-3">
                <dt className="w-16 text-[12px] font-bold uppercase tracking-wider text-espresso-500">Phone</dt>
                <dd><a href={CAFE.phoneHref} className="inline-flex min-h-[44px] items-center font-semibold underline-offset-4 hover:underline">{CAFE.phone}</a></dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="w-16 text-[12px] font-bold uppercase tracking-wider text-espresso-500">Email</dt>
                <dd><a href={`mailto:${CAFE.email}`} className="inline-flex min-h-[44px] items-center font-semibold underline-offset-4 hover:underline">{CAFE.email}</a></dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="w-16 text-[12px] font-bold uppercase tracking-wider text-espresso-500">Hours</dt>
                <dd className="font-semibold">{CAFE.hoursShort}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={CAFE.address.mapUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-espresso-700 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition hover:bg-espresso-600">
                Get Directions <span aria-hidden="true">→</span>
              </a>
              <BookButton className="cursor-pointer rounded-full border-2 border-espresso-700 px-7 py-3 text-sm font-bold uppercase tracking-widest text-espresso-800 transition hover:bg-espresso-700 hover:text-cream" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <iframe
                title="Klatsch Mate location map"
                src={`https://www.google.com/maps?q=${CAFE.address.embedQuery}&output=embed`}
                width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full border-0 sm:h-[460px]"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-espresso-100/60 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-500">Good to Know</p>
            <h2 className="mt-4 font-display text-4xl font-black text-espresso-900">Questions, answered</h2>
          </Reveal>
          <Faq items={FAQS} />
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-espresso-950 py-24 text-center text-cream">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-espresso-600/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sage/20 blur-3xl" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-3xl px-4">
          <p className="font-display text-2xl italic text-espresso-400">Your table is waiting</p>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-6xl">
            Tonight, klatsch <em className="text-espresso-400">with us</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-espresso-200">
            Walk-ins welcome, bookings recommended — especially on board-game nights.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <BookButton className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-espresso-600 px-9 py-4 text-[15px] font-bold uppercase tracking-widest text-white shadow-xl shadow-black/30 transition hover:bg-espresso-500 active:scale-95" />
            <a href={CAFE.social.whatsapp} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-9 py-4 text-[15px] font-bold uppercase tracking-widest text-cream transition hover:bg-cream hover:text-espresso-900">
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
