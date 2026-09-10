import type { Metadata } from "next";
import { CAFE, FAQS } from "@/lib/cafe";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Find Klatsch Mate — G-3, Akshar 111 Commercial Hub, Tapovan Circle, Chandkheda, Ahmedabad. Call, WhatsApp or write to us. Open daily 11 AM – 1 AM.",
};

const CARDS = [
  {
    title: "Call / WhatsApp",
    lines: [CAFE.phone, `Alt: ${CAFE.altPhone}`],
    href: CAFE.social.whatsapp,
    cta: "Message us",
    icon: "M12 2a10 10 0 0 0-8.7 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 0 1 12 4Z",
  },
  {
    title: "Email",
    lines: [CAFE.email, "Replies within a day"],
    href: `mailto:${CAFE.email}`,
    cta: "Write to us",
    icon: "M4 20h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Zm0-3.2 6.4-4.4a3 3 0 0 1 3.2 0L20 16.8",
  },
  {
    title: "Visit",
    lines: [
      CAFE.address.line1,
      `${CAFE.address.line2},`,
      `${CAFE.address.line3}, ${CAFE.address.city}`,
    ],
    href: CAFE.address.mapUrl,
    cta: "Get directions",
    icon: "M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's klatsch"
        accent="over coffee"
        copy="Reservations, events, feedback or a simple hello — we'd love to hear from you."
        image="/assets/photo2.jpeg"
      />

      {/* Contact cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-3xl border border-espresso-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-espresso-700 text-cream transition group-hover:rotate-6 group-hover:bg-espresso-600">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={c.icon} /></svg>
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-espresso-900">{c.title}</h2>
                <div className="mt-2 flex-1 space-y-0.5 text-[15px] leading-relaxed text-espresso-600">
                  {c.lines.map((l) => <p key={l}>{l}</p>)}
                </div>
                <a href={c.href} target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-espresso-600 underline-offset-4 transition hover:gap-3 hover:text-espresso-900 hover:underline">
                  {c.cta} <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-espresso-100/60 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-500">Send a Message</p>
            <h2 className="mt-4 font-display text-4xl font-black text-espresso-900">Drop us a line</h2>
            <p className="mt-3 max-w-md text-espresso-600">
              For tables tonight, the fastest way is still the Book a Table button — but for everything else, this form reaches us directly.
            </p>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <iframe
                  title="Klatsch Mate location map"
                  src={`https://www.google.com/maps?q=${CAFE.address.embedQuery}&output=embed`}
                  width="600" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] w-full border-0 lg:flex-1"
                  allowFullScreen
                />
              </div>
              <div className="rounded-[2rem] bg-espresso-950 p-8 text-cream">
                <p className="font-display text-2xl font-bold">Opening Hours</p>
                <ul className="mt-4 space-y-2.5">
                  {CAFE.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4 border-b border-white/10 pb-2.5 text-espresso-200">
                      <span>{h.days}</span>
                      <span className="font-bold text-cream">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-sage">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-sage" /> Kitchen opens at 11 AM sharp
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Community strip */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-espresso-950 px-8 py-12 text-center text-cream sm:px-12">
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-400">Join The Mate Club</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-black sm:text-4xl">
                Brunches, board games & first dibs on new dishes
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href={CAFE.social.whatsappChannel} target="_blank" rel="noopener noreferrer"
                  className="rounded-full bg-espresso-600 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-espresso-500">
                  WhatsApp Channel
                </a>
                <a href={CAFE.social.instagram} target="_blank" rel="noopener noreferrer"
                  className="rounded-full border border-cream/40 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition hover:bg-cream hover:text-espresso-900">
                  {CAFE.social.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-espresso-100/60 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-500">Good to Know</p>
            <h2 className="mt-4 font-display text-4xl font-black text-espresso-900">Frequently asked</h2>
          </Reveal>
          <Faq items={FAQS} />
        </div>
      </section>
    </>
  );
}
