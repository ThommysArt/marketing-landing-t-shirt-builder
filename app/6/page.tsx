import { RouteHub } from "@/components/RouteHub";
import { ShapeShowcase } from "@/components/ShapeShowcase";

export default function ConceptSix() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_10%_20%,#4c1d95_0,transparent_35%),radial-gradient(circle_at_85%_15%,#0f766e_0,transparent_30%),#050816] text-white">
      <RouteHub />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 pt-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">06 // Hype Reactor</p>
          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.88] md:text-7xl">
            Build louder merch pages with kinetic product energy.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Inspired by concept 02, but with tighter hierarchy, stronger color contrast, and a hero block designed to
            hold drop countdowns and live stock updates.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Live Drop Timer', 'Auto Mockup Reel', 'Checkout in 2 Taps'].map((item) => (
              <span key={item} className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
        <ShapeShowcase variant="ring" />
      </section>
    </main>
  );
}
