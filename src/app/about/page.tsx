import type { Metadata } from "next";
import Image from "next/image";
import { CAFE, GALLERY, STATS } from "@/lib/cafe";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import HoverVideo from "@/components/HoverVideo";
import { VIDEO_POSTERS } from "@/lib/cafe";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Klatsch Mate — Chandkheda's European café serving authentic Neapolitan pizza, fresh pasta, specialty coffee and a community called the Mate Club.",
};

const VALUES = [
  {
    title: "Craft first",
    copy: "48-hour fermented dough, pasta rolled in-house every morning, ceremonial-grade matcha whisked to order. No shortcuts, ever.",
    icon: "M12 2 14.9 8.6l6.6.9-4.8 4.7 1.1 6.6L12 17.7l-5.8 3.1 1.1-6.6L2.5 9.5l6.6-.9L12 2Z",
  },
  {
    title: "Community",
    copy: "“Klatsch” means friendly gossip over coffee. The Mate Club — brunches, board games, late-night conversations — is our reason to exist.",
    icon: "M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm5 9a7 7 0 0 0-14 0M21 20a7 7 0 0 0-4-6.3",
  },
  {
    title: "For every table",
    copy: "Jain and Swaminarayan preparations across the menu, healthy bowls that never taste boring, and something decaf-friendly till 1 AM.",
    icon: "M4 20h16M6 20V9a6 6 0 0 1 12 0v11M9 4v5m6-5v5",
  },
];

const TIMELINE = [
  {
    year: "The idea",
    title: "Three words on a whiteboard",
    copy: "Konnect. Klatsch. Kreate. A café where Ahmedabad could slow down, log off, and talk over great European food.",
  },
  {
    year: "The craft",
    title: "Oven, roller & roaster",
    copy: "A 450°C pizza oven, a pasta bench rolling fresh sheets daily, and a brew bar with V60, French press and AeroPress for light, medium and dark roasts.",
  },
  {
    year: "The bowls",
    title: "Paris lands in Chandkheda",
    copy: "Signature international bowls — Bol Provençal à la Ratatouille, ramen, Mexican hotpot — bring global flavours to GIDC Bhat.",
  },
  {
    year: "Today",
    title: "The Mate Club",
    copy: "1,300+ members strong: brunch registrations, board-game meetups, and a WhatsApp community that never sleeps before we do.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="A little Europe in"
        accent="Chandkheda"
        copy="Konnect · Klatsch · Kreate — the story behind Ahmedabad's most talked-about European café."
        image="/assets/hero-still.jpeg"
      />

      {/* Intro + values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-500">Who we are</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight text-espresso-900">
              More than a café — a <em className="text-espresso-600">living room</em> for the city
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-espresso-700">
              Klatsch Mate began with a simple observation: Chandkheda, Motera and Sabarmati had plenty of cafés, but very few places where European craft food met genuine warmth. So we built one — serving authentic Neapolitan pizza, fresh in-house pasta and specialty coffee from 11 AM until 1 AM, every single day.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-espresso-700">
              Healthy food doesn&apos;t have to be boring — that&apos;s our kitchen mantra. Jain and Swaminarayan options sit comfortably next to whiskey-barrel cold brews and pistachio cheesecakes, because everyone deserves a seat at this table.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image src="/assets/photo2.jpeg" alt="Inside Klatsch Mate café" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-espresso-950 px-6 py-4 text-cream shadow-xl">
              <p className="font-display text-3xl font-black text-espresso-400">14 hrs</p>
              <p className="text-xs font-bold uppercase tracking-widest">open every day</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-espresso-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-espresso-700 text-cream transition group-hover:rotate-6 group-hover:bg-espresso-600">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={v.icon} /></svg>
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-espresso-900">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-espresso-600">{v.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="grain bg-espresso-950 py-16 text-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="text-center">
              <p className="font-display text-4xl font-black text-espresso-400 sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-[13px] font-medium uppercase tracking-wider text-espresso-300">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-500">The Journey</p>
          <h2 className="mt-4 font-display text-4xl font-black text-espresso-900">From idea to Mate Club</h2>
        </Reveal>
        <ol className="relative mt-14 space-y-12 border-l-2 border-espresso-200 pl-8 sm:pl-12">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <li className="relative">
                <span className="absolute -left-[42px] top-1 grid h-6 w-6 place-items-center rounded-full border-2 border-espresso-600 bg-cream sm:-left-[58px]" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-espresso-600" />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-espresso-500">{t.year}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-espresso-900">{t.title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-espresso-600">{t.copy}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-espresso-100/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-500">Gallery</p>
            <h2 className="mt-4 font-display text-4xl font-black text-espresso-900">Life at Klatsch Mate</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src} delay={i * 0.05}>
                <div className={`group relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "aspect-[3/4] md:row-span-2 md:aspect-auto" : "aspect-square"}`}>
                  {g.type === "video" ? (
                    <HoverVideo src={g.src} poster={VIDEO_POSTERS[g.src]} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" label={g.alt} />
                  ) : (
                    <Image src={g.src} alt={g.alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-110" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain relative overflow-hidden bg-espresso-950 py-24 text-center text-cream">
        <Reveal className="relative mx-auto max-w-2xl px-4">
          <h2 className="font-display text-4xl font-black sm:text-5xl">
            Come for the coffee, <em className="text-espresso-400">stay for the klatsch</em>
          </h2>
          <p className="mt-4 text-lg text-espresso-200">
            {CAFE.address.line1}, {CAFE.address.city} · {CAFE.hoursShort}
          </p>
          <BookButton className="mt-8 cursor-pointer rounded-full bg-espresso-600 px-9 py-4 text-[15px] font-bold uppercase tracking-widest text-white transition hover:bg-espresso-500" />
        </Reveal>
      </section>
    </>
  );
}
