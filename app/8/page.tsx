import { RouteHub } from "@/components/RouteHub";
import { ShapeShowcase } from "@/components/ShapeShowcase";

export default function ConceptEight() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-violet-950 to-black text-slate-100">
      <RouteHub />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 pt-10 md:grid-cols-2 md:items-start">
        <div className="rounded-[2rem] border border-violet-300/30 bg-violet-400/10 p-8 shadow-[0_20px_80px_rgba(139,92,246,0.2)]">
          <p className="text-xs uppercase tracking-[0.4em] text-violet-200">08 // Vapor Motion</p>
          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] md:text-7xl">Design teasers that look like future posters.</h1>
          <p className="mt-5 text-lg text-slate-200/80">
            A sharper evolution of concept 02 with cinematic gradients, oversized typography, and modular blocks that can
            swap between product launch, preorder, and artist collaboration modes.
          </p>
          <button className="mt-8 rounded-full border border-violet-200/50 bg-white/10 px-7 py-3 font-semibold transition hover:bg-white/20">
            Preview Launch Kit
          </button>
        </div>
        <ShapeShowcase variant="crystal" />
      </section>
    </main>
  );
}
