export const enlaces = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/faq", label: "FAQ" },
  { href: "/cotizacion", label: "Cotización" },
] as const;

export const enlaceIngreso = { href: "/ingreso", label: "Ingreso" } as const;

export const servicios = [
  "Steel Frame",
  "Tabiqueria Drywall",
  "Cielorrasos",
  "Revestimientos",
  "Aislaciones",
] as const;

export const enlacesAdmin = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/clientes", label: "Clientes" },
  { href: "/admin/cotizaciones", label: "Cotizaciones" },
  { href: "/admin/contratos", label: "Contratos" },
  { href: "/admin/proyectos", label: "Proyectos" },
  { href: "/admin/obras", label: "Obras activas" },
  { href: "/admin/usuarios", label: "Usuarios" },
  { href: "/admin/empleados", label: "Empleados" },
  { href: "/admin/materiales", label: "Materiales" },
  { href: "/admin/herramientas", label: "Herramientas" },
  { href: "/admin/servicios", label: "Servicios" },
  { href: "/admin/faq", label: "FAQ" },
  { href: "/admin/certificaciones", label: "Certificaciones" },
  { href: "/admin/precios", label: "Precios de referencia" },
] as const;

export const enlacesUsuario = [
  { href: "/usuario", label: "Inicio" },
  { href: "/usuario/proyectos", label: "Mis proyectos" },
  { href: "/usuario/obras", label: "Mis obras" },
  { href: "/usuario/cotizacion", label: "Cotización" },
  { href: "/usuario/pagos", label: "Pagos" },
  { href: "/usuario/perfil", label: "Perfil" },
] as const;
