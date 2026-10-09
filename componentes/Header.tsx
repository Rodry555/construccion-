export default function Header() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <span className="text-lg font-semibold">Construcción</span>
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">
            Inicio
          </a>
          <a href="#" className="hover:underline">
            Servicios
          </a>
          <a href="#" className="hover:underline">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
