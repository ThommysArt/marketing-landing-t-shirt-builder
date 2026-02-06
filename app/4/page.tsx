"use client";

import { RouteHub } from "@/components/RouteHub";
import { motion } from "framer-motion";

export default function ConceptFour() {
  return (
    <main className="min-h-screen bg-black text-emerald-200">
      <RouteHub />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 pt-10 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-400/70">04 // Cyber Terminal</p>
          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">Command your next best-selling t-shirt.</h1>
          <p className="mt-6 max-w-xl text-emerald-100/70">
            Futuristic dashboard aesthetic with scanlines, metric blocks, and CTA buttons that feel like a control panel.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="grid gap-4 rounded-3xl border border-emerald-400/20 bg-emerald-950/30 p-6"
        >
          {[
            ["Uploads Today", "1,284"],
            ["Conversion Lift", "+38%"],
            ["Avg. Design Time", "02:10"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-emerald-300/20 bg-black/40 p-4">
              <p className="text-sm uppercase tracking-wider text-emerald-200/60">{label}</p>
              <p className="mt-2 text-4xl font-semibold text-emerald-200">{value}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
