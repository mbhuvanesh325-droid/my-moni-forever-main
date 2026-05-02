type NavProps = { active: "home" | "feelings" | "moments" | "foryou" };

const items = [
  { id: "home", label: "Home", href: "#page1" },
  { id: "feelings", label: "My Feelings", href: "#page2" },
  { id: "moments", label: "Our Moments", href: "#page2" },
  { id: "foryou", label: "For You", href: "#page2" },
] as const;

export function Nav({ active }: NavProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 md:px-14 py-6">
      <div className="font-script text-2xl text-violet-deep">
        For You <span className="text-violet-mid">💜</span>
      </div>
      <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-violet-deep">
        {items.map((it) => (
          <a
            key={it.id}
            href={it.href}
            className={`nav-link hover:text-violet-mid ${active === it.id ? "active" : ""}`}
          >
            {it.label}
          </a>
        ))}
      </nav>
      <button className="rounded-full border border-[oklch(0.55_0.2_295)] px-5 py-2 text-sm text-violet-deep hover:bg-white/40 transition">
        For My Love 💜
      </button>
    </header>
  );
}
