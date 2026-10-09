import Header from "@/componentes/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Maquetado de construcción
        </h1>
        <p className="max-w-md text-zinc-600">
          Base lista para empezar a armar las secciones.
        </p>
      </main>
    </>
  );
}
