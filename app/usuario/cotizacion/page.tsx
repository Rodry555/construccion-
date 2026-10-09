import { servicios } from "@/componentes/enlaces";

export default function UsuarioCotizacion() {
  return (
    <section className="flex max-w-xl flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold">Cotización</h1>
        <p>Solicitá una cotización completando los siguientes datos.</p>
      </div>

      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="servicio" className="font-bold">
            Tipo de servicio
          </label>
          <select id="servicio" name="servicio" className="px-3 py-2">
            {servicios.map((servicio) => (
              <option key={servicio}>{servicio}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="metros" className="font-bold">
            Metros cuadrados
          </label>
          <input
            id="metros"
            name="metros"
            type="number"
            placeholder="Ej: 80"
            className="px-3 py-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descripcion" className="font-bold">
            Descripción del trabajo
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows={4}
            placeholder="Contanos qué necesitás"
            className="px-3 py-2"
          />
        </div>

        <button type="button" className="px-5 py-2 font-bold">
          Enviar
        </button>
      </form>
    </section>
  );
}