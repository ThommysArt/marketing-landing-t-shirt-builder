import { RouteHub } from "@/components/RouteHub";

export default function ConceptThree() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] text-zinc-900">
      <RouteHub />
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-10">
        <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">03 // Editorial Mode</p>
        <h1 className="mt-5 max-w-3xl text-6xl font-light leading-[1.05] md:text-8xl">
          A premium atelier for made-to-order graphic tees.
        </h1>
        <div className="mt-14 grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-zinc-300 bg-white p-8 shadow-2xl shadow-zinc-400/20">
            <p className="text-lg leading-relaxed text-zinc-700">
              Designed as a fashion editorial with oversized whitespace and tactile paneling. Every product preview feels
              intentional and high value.
            </p>
          </div>
          <div className="rounded-3xl bg-zinc-900 p-8 text-zinc-100">
            <h2 className="text-3xl font-semibold">Fast Studio Flow</h2>
            <ul className="mt-5 space-y-3 text-zinc-300">
              <li>Upload image + optional prompt</li>
              <li>Render directly on 3D t-shirt</li>
              <li>Export mockup for social launch</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
