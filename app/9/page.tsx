import { RouteHub } from "@/components/RouteHub";
import { ShapeShowcase } from "@/components/ShapeShowcase";

export default function ConceptNine() {
  return (
    <main className="min-h-screen bg-[#f8f405] text-black">
      <RouteHub />
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        <p className="inline-block border-4 border-black bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.3em]">09 // Neo Brutalist Drop Lab</p>
        <h1 className="mt-5 max-w-4xl border-4 border-black bg-[#ff6b00] px-4 py-3 text-5xl font-black uppercase leading-[0.9] shadow-[10px_10px_0_0_#000] md:text-8xl">
          Loud blocks. Hard shadows. Zero subtlety.
        </h1>
        <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <article className="border-4 border-black bg-white p-5 shadow-[8px_8px_0_0_#000]">
              <h2 className="text-2xl font-extrabold uppercase">Template Smash</h2>
              <p className="mt-2 font-medium">Drag art, wreck alignment, and embrace expressive imbalance like a poster wall.</p>
            </article>
            <article className="border-4 border-black bg-cyan-300 p-5 shadow-[8px_8px_0_0_#000]">
              <h2 className="text-2xl font-extrabold uppercase">Instant Variants</h2>
              <p className="mt-2 font-medium">Generate multiple brutalist treatments in one click and ship your favorite.</p>
            </article>
            <article className="border-4 border-black bg-pink-300 p-5 shadow-[8px_8px_0_0_#000]">
              <h2 className="text-2xl font-extrabold uppercase">Shock CTA</h2>
              <p className="mt-2 font-medium">Buttons and tags are built to feel tactile, loud, and impossible to ignore.</p>
            </article>
          </div>
          <div className="border-4 border-black bg-white p-3 shadow-[10px_10px_0_0_#000]">
            <ShapeShowcase variant="stack" />
          </div>
        </div>
      </section>
    </main>
  );
}
