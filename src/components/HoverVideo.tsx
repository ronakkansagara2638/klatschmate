"use client";

/**
 * Lightweight inline video: shows its poster until hovered (desktop) or
 * tapped (mobile), so pages never auto-download every reel.
 */
export default function HoverVideo({
  src,
  poster,
  className = "",
  label,
}: {
  src: string;
  poster?: string;
  className?: string;
  label?: string;
}) {
  return (
    <video
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      className={className}
      aria-label={label}
      onMouseEnter={(e) => void e.currentTarget.play().catch(() => {})}
      onMouseLeave={(e) => {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
      }}
      // Tap toggles playback on touch devices
      onClick={(e) => {
        const v = e.currentTarget;
        if (v.paused) void v.play().catch(() => {});
        else v.pause();
      }}
    />
  );
}
