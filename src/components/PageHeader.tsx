import Image from "next/image";
import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  accent,
  copy,
  image,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  copy: string;
  image: string;
}) {
  return (
    <section className="grain relative overflow-hidden bg-espresso-950 pb-16 pt-36 text-cream sm:pb-20 sm:pt-44">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/70 via-espresso-950/60 to-espresso-950" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-400">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[1.05] sm:text-6xl">
            {title} <em className="text-espresso-400">{accent}</em>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-espresso-200">{copy}</p>
        </Reveal>
      </div>
    </section>
  );
}
