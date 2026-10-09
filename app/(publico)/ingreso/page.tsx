import Link from "next/link";

export default function Ingreso() {
  return (
    <>
      <h1 className="font-bold">Ingreso</h1>
      <p className="max-w-md">Acceso para clientes y administradores.</p>
      <div className="mt-2 flex flex-col gap-3">
        <Link href="/usuario" className="px-5 py-2 font-bold">
          Ingresar como cliente
        </Link>
        <Link href="/admin" className="px-5 py-2 font-bold">
          Ingresar como administrador
        </Link>
      </div>
    </>
  );
}