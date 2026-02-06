import { GsapHeadline } from "@/components/GsapHeadline";
import { HeroCanvas } from "@/components/HeroCanvas";
import { RouteHub } from "@/components/RouteHub";

export default function ConceptOne() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#4f46e580,transparent_40%),radial-gradient(circle_at_80%_50%,#0ea5e980,transparent_45%),#02030a] text-white">
      <RouteHub />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-8 md:grid-cols-2 md:items-center">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">01 // Nebula Studio</p>
          <GsapHeadline text="Turn a selfie into an out-of-this-world custom tee in seconds." />
          <p className="max-w-xl text-lg text-white/70">
            Upload artwork, generate live mockups on a rotating 3D t-shirt, and launch checkout in one cinematic flow.
          </p>
          <button className="rounded-full bg-white px-7 py-3 font-semibold text-slate-950 transition hover:scale-105">
            Start Designing
          </button>
        </div>
        <HeroCanvas />
      </section>
    </main>
  );
}
