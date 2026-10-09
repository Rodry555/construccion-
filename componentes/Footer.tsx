import Link from "next/link";
import { servicios } from "./enlaces";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-4 py-12">
        <div className="flex flex-col gap-3">
          <span className="font-bold">STEELFRAME</span>
          <p className="max-w-xs">
            Construcción en seco. Steel frame, drywall, cielorrasos,
            revestimientos y aislaciones.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-bold">Servicios</span>
          <nav className="flex flex-col gap-2">
            {servicios.map((servicio) => (
              <Link key={servicio} href="/servicios">
                {servicio}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-bold">Contacto</span>
          <ul className="flex flex-col gap-2">
            <li>WhatsApp: +54 11 5555-0000</li>
            <li>Email: info@steelframe.com.ar</li>
            <li>Zona norte GBA y CABA</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 text-center">
        © 2026 Steel Frame — Todos los derechos reservados
      </div>
    </footer>
  );
}