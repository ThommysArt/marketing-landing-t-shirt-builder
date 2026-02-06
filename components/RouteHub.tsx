import Link from "next/link";

const routes = [1, 2, 3, 4, 5];

export function RouteHub() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5">
      <p className="text-sm uppercase tracking-[0.3em] text-white/60">T-Shirt Forge Concepts</p>
      <div className="flex gap-2">
        {routes.map((id) => (
          <Link
            key={id}
            href={`/${id}`}
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white/60 hover:text-white"
          >
            /{id}
          </Link>
        ))}
      </div>
    </nav>
  );
}
