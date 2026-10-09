import Link from "next/link";
import { enlaces } from "./enlaces";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm sm:flex-row">
        <span className="font-semibold tracking-tight">STEELFRAME</span>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="text-zinc-500 hover:text-black"
            >
              {enlace.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
