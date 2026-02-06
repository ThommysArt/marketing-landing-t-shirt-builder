"use client";

import { RouteHub } from "@/components/RouteHub";
import { motion } from "framer-motion";

const cards = ["AI Background Remover", "HD Fabric Mapping", "Real-time Price Estimate"];

export default function ConceptTwo() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030014] text-white">
      <RouteHub />
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-5xl font-black uppercase leading-[0.9] md:text-8xl"
        >
          Streetwear Lab
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Bold typography, kinetic motion, and high-contrast storytelling built for hype drops.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article
              key={card}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 + 0.2, duration: 0.6 }}
              className="rounded-3xl border border-fuchsia-400/30 bg-gradient-to-b from-fuchsia-400/20 to-transparent p-6 backdrop-blur"
            >
              <h2 className="text-2xl font-semibold">{card}</h2>
              <p className="mt-3 text-white/70">Built for creators who sell identity, not just fabric.</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
