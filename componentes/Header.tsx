"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { enlaceIngreso, enlaces } from "./enlaces";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          STEELFRAME
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {enlaces.map((enlace) => {
            const activo = pathname === enlace.href;
            return (
              <Link
                key={enlace.href}
                href={enlace.href}
                className={
                  activo
                    ? "font-medium text-black underline underline-offset-4"
                    : "text-zinc-500 hover:text-black"
                }
              >
                {enlace.label}
              </Link>
            );
          })}
          <Link
            href={enlaceIngreso.href}
            className={
              pathname === enlaceIngreso.href
                ? "rounded border border-black bg-black px-3 py-1 text-white"
                : "rounded border border-black/20 px-3 py-1 text-zinc-700 hover:border-black hover:text-black"
            }
          >
            {enlaceIngreso.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
