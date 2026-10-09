"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { enlaceIngreso, enlaces } from "./enlaces";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-bold">
          STEELFRAME
        </Link>
        <nav className="flex items-center gap-6">
          {enlaces.map((enlace) => {
            const activo = pathname === enlace.href;
            return (
              <Link
                key={enlace.href}
                href={enlace.href}
                className={activo ? "font-bold" : undefined}
              >
                {enlace.label}
              </Link>
            );
          })}
          <Link
            href={enlaceIngreso.href}
            className="px-3 py-1 font-bold"
          >
            {enlaceIngreso.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}