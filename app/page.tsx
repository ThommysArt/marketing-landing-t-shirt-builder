import Link from "next/link";
import { RouteHub } from "@/components/RouteHub";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-black text-white">
      <RouteHub />
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 pb-20">
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-indigo-300">Nine Distinct Design Directions</p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Explore bold landing concepts for your custom tee builder. New variants 6-9 push the high-energy style even further.
        </h1>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
            <Link
              key={id}
              href={`/${id}`}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center text-xl font-medium transition hover:-translate-y-1 hover:border-indigo-300/70 hover:bg-indigo-400/10"
            >
              Concept {id}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
