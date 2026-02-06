import Link from "next/link";

const routes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function RouteHub() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5">
      <p className="rounded-full border border-black/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/90 backdrop-blur">
        T-Shirt Forge Concepts
      </p>
      <div className="flex flex-wrap gap-2">
        {routes.map((id) => (
          <Link
            key={id}
            href={`/${id}`}
            className="rounded-full border border-white/30 bg-black/45 px-4 py-2 text-sm text-white transition hover:border-white/70 hover:bg-black/70"
          >
            /{id}
          </Link>
        ))}
      </div>
    </nav>
  );
}
