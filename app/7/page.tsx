import { RouteHub } from "@/components/RouteHub";
import { ShapeShowcase } from "@/components/ShapeShowcase";

const modules = [
  { title: "Prompt-to-Print", body: "Generate art variants from a short prompt and apply them directly on garment templates." },
  { title: "Creator Presets", body: "Store colorways, logo lockups, and typography stacks for repeatable launches." },
  { title: "Campaign Blocks", body: "Plug in testimonials, social proofs, and urgency bars without breaking visual rhythm." },
];

export default function ConceptSeven() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <RouteHub />
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-300">07 // Signal Grid</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold uppercase leading-[0.9] md:text-8xl">
          Conversion-first storytelling for creator brands.
        </h1>
        <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            {modules.map((mod) => (
              <article key={mod.title} className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md">
                <h2 className="text-2xl font-semibold">{mod.title}</h2>
                <p className="mt-3 text-white/70">{mod.body}</p>
              </article>
            ))}
          </div>
          <ShapeShowcase variant="orb" />
        </div>
      </section>
    </main>
  );
}
