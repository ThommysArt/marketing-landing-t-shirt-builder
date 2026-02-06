"use client";

import { RouteHub } from "@/components/RouteHub";
import { motion } from "framer-motion";

export default function ConceptFive() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-orange-50 to-sky-50 text-slate-900">
      <RouteHub />
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        <p className="text-sm uppercase tracking-[0.35em] text-rose-500">05 // Creator Playground</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Joyful, colorful, and social-first custom t-shirt builder.
        </h1>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["Drag & Drop Art", "Live 360 Preview", "One-click Publish"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, rotate: -4, y: 30 }}
              animate={{ opacity: 1, rotate: 0, y: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.6 }}
              className="rounded-[2rem] border-2 border-slate-900/10 bg-white/80 p-7 shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
            >
              <h2 className="text-2xl font-semibold">{item}</h2>
              <p className="mt-3 text-slate-700">Perfect for creators turning personal art into wearable merch.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
