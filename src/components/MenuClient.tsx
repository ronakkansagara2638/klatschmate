"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { MenuCategory } from "@/lib/cafe";

export default function MenuClient({ menu }: { menu: MenuCategory[] }) {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id={current.id} className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Category tabs */}
      <div className="sticky top-[72px] z-30 -mx-4 mb-12 overflow-x-auto bg-cream/90 px-4 py-3 backdrop-blur-lg sm:mx-0 sm:rounded-full sm:shadow-[0_10px_40px_-18px_rgba(36,17,5,0.4)]" role="tablist" aria-label="Menu categories">
        <div className="flex gap-2">
          {menu.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative shrink-0 cursor-pointer rounded-full px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                active === cat.id ? "text-cream" : "text-espresso-600 hover:text-espresso-900"
              }`}
            >
              {active === cat.id && (
                <motion.span
                  layoutId="menu-tab"
                  className="absolute inset-0 -z-10 rounded-full bg-espresso-700"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <h2 className="font-display text-4xl font-black text-espresso-900">{current.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-espresso-600">{current.blurb}</p>
            <div className="divider-diamond mx-auto mt-6 max-w-xs">
              <span />
            </div>
          </div>

          <ul className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {current.items.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="flex items-baseline">
                  <h3 className="font-display text-xl font-bold text-espresso-900 transition-colors group-hover:text-espresso-600">
                    {item.name}
                  </h3>
                  <span className="price-leader" aria-hidden="true" />
                  {item.price != null ? (
                    <span className="whitespace-nowrap font-display text-lg font-bold text-espresso-700">
                      ₹{item.price}
                    </span>
                  ) : (
                    <span className="whitespace-nowrap rounded-full bg-espresso-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-espresso-600">
                      Ask at counter
                    </span>
                  )}
                </div>
                <p className="mt-1 pr-10 text-[15px] leading-relaxed text-espresso-600">{item.desc}</p>
                {item.tag && (
                  <span className="mt-2 inline-block rounded-full bg-espresso-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-espresso-700">
                    {item.tag}
                  </span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
