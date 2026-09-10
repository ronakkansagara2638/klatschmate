"use client";

import { useEffect, useRef } from "react";
import { CAFE, VIDEOS, VIDEO_POSTERS } from "@/lib/cafe";
import HoverVideo from "./HoverVideo";

/**
 * Scroll-scrubbed hero video (video2.mp4) that plays in rhythm with page
 * scroll, followed by a row of hover-play café reels.
 */
export default function HomeVideos() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let primed = false;
    const prime = () => {
      if (primed) return;
      primed = true;
      try {
        video.currentTime = 0.1;
      } catch {
        /* seeking before data is available is harmless */
      }
      video.pause();
    };
    if (video.readyState >= 1) prime();
    else video.addEventListener("loadedmetadata", prime, { once: true });

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!video.duration || !Number.isFinite(video.duration)) return;
        const rect = hero.getBoundingClientRect();
        const total = Math.max(rect.height - window.innerHeight, 1);
        const progress = Math.min(1, Math.max(0, -rect.top / total));
        const target = progress * (video.duration - 0.05);
        // Only seek when meaningfully off to avoid seek spam
        if (Math.abs(video.currentTime - target) > 0.08) {
          try {
            video.currentTime = target;
          } catch {
            /* ignore transient seek errors */
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section aria-label="Café videos" className="bg-espresso-900 text-cream">
      {/* Scroll-scrub video */}
      <div ref={heroRef} className="relative h-[180vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={VIDEOS.hero}
            poster={VIDEO_POSTERS[VIDEOS.hero]}
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-espresso-950/55" />
          <div className="relative z-10 px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-espresso-300">Experience</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black leading-tight sm:text-6xl">
              Every dish has a <em className="text-espresso-400">story</em> — scroll to press play
            </h2>
          </div>
        </div>
      </div>

      {/* Reels row */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-espresso-400">From the Pass</p>
            <h3 className="mt-3 font-display text-3xl font-black sm:text-4xl">Straight from our kitchen reels</h3>
          </div>
          <a href={CAFE.social.instagram} target="_blank" rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 py-3 text-sm font-bold uppercase tracking-widest text-espresso-300 underline-offset-4 transition hover:text-cream hover:underline">
            More on Instagram <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {VIDEOS.reel.map((src, i) => (
            <Reel key={src} src={src} poster={VIDEO_POSTERS[src]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Reel({ src, poster, index }: { src: string; poster: string; index: number }) {
  return (
    <figure className="group relative overflow-hidden rounded-3xl">
      <HoverVideo
        src={src}
        poster={poster}
        label={`Café reel ${index + 1}`}
        className="aspect-[3/4] w-full cursor-pointer object-cover transition duration-700 group-hover:scale-105"
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-espresso-950/85 to-transparent p-4 text-xs font-bold uppercase tracking-[0.2em] text-cream">
        <span>Reel 0{index + 1}</span>
        <span className="flex items-center gap-1.5 opacity-70 transition group-hover:opacity-100">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
          Hover / tap to play
        </span>
      </figcaption>
    </figure>
  );
}
