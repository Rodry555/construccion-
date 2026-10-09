"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { href: string; label: string };

export default function PanelSidebar({
  titulo,
  items,
}: {
  titulo: string;
  items: readonly Item[];
}) {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col justify-between gap-6 p-6">
      <div className="flex flex-col gap-6">
        <Link href="/" className="font-bold">
          STEELFRAME
        </Link>
        <div className="flex flex-col gap-2">
          <span>{titulo}</span>
          <nav className="flex flex-col gap-1">
            {items.map((item) => {
              const activo = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={"px-2 py-1" + (activo ? " font-bold" : "")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <Link href="/ingreso" className="px-2 py-1 font-bold">
        Cerrar sesión
      </Link>
    </aside>
  );
}