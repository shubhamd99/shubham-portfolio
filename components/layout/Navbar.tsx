import Link from "next/link";

export function Navbar() {
  return (
    <header className="relative z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between border-b border-black/10 bg-transparent">
          <div className="text-lg font-medium">Shubham D</div>

          <nav className="flex items-center gap-8 text-sm text-black/70">
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-black transition">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
