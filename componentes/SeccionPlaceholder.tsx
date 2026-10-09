export default function SeccionPlaceholder({
  titulo,
  descripcion,
}: {
  titulo: string;
  descripcion: string;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="font-bold">{titulo}</h1>
      <p className="max-w-2xl">{descripcion}</p>
    </section>
  );
}