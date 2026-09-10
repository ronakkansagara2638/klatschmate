"use client";

import { useCafe } from "./CafeContext";

/** Thin client wrapper so server components can trigger the booking modal. */
export default function BookButton({
  className,
  children = "Book a Table",
  label,
}: {
  className?: string;
  children?: React.ReactNode;
  label?: string;
}) {
  const { openBooking } = useCafe();
  return (
    <button onClick={openBooking} className={className} aria-label={label}>
      {children}
    </button>
  );
}
