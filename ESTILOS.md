# Guía de estilos (Tailwind CSS)

Este proyecto usa **Tailwind CSS v4**. La idea: los estilos se ponen como
palabras dentro del atributo `className` de cada elemento, separadas por
espacios. Cada palabra = una propiedad CSS.

**Este maquetado usa solo lo mínimo**, a propósito: no hay colores, no hay
bordes, no hay tamaños de texto. Lo que ves es solamente la **estructura**
(dónde se ubica cada cosa) y **negrita** para títulos. Así es más fácil de
leer y de entender.

> Fuentes: el texto sale de `app/globals.css` (`font-family: Arial...`).
> En `app/layout.tsx` se cargan las fuentes Geist de Next.js pero **no**
> se aplican al `body`. Está documentado, no se toca.

---

## 1. Layout: cómo se distribuyen los elementos

| Clase | Qué hace |
|-------|----------|
| `flex` | El contenedor coloca a sus hijos en fila (uno al lado del otro) |
| `flex-col` | Igual que `flex` pero en columna (uno debajo del otro) |
| `flex-1` | El elemento ocupa todo el espacio que sobra |
| `items-center` | Centra los hijos en el eje vertical |
| `justify-between` | Reparte los hijos: primero a la izquierda, último a la derecha |
| `justify-center` | Centra los hijos en el eje horizontal |
| `grid` | El contenedor pasa a modo grilla |
| `grid-cols-3` | La grilla tiene 3 columnas |
| `text-center` | Centra el texto dentro de su caja |

**Dónde se usa:** `flex` (casi todo), `flex-col` (body, sidebar, secciones),
`flex-1` (el `<main>`), `justify-between` (header, sidebar), `grid-cols-3`
(footer).

## 2. Espaciado: separación y relleno

| Clase | Qué hace |
|-------|----------|
| `gap-1` … `gap-10` | Espacio **entre** los hijos de un `flex`/`grid` |
| `p-4` / `p-6` / `p-10` | Relleno interior por los 4 lados |
| `px-2` … `px-5` | Relleno solo izquierda y derecha |
| `py-1` … `py-24` | Relleno solo arriba y abajo |
| `mt-2` / `mt-12` | Espacio exterior arriba (margen superior) |

**Ejemplo:** `px-4 py-4` = aire a los costados y arriba/abajo (header).
`py-24` = mucha altura centrada (páginas públicas).

## 3. Anchos y alturas

| Clase | Qué hace |
|-------|----------|
| `mx-auto` | Centra el elemento horizontalmente |
| `max-w-xs` … `max-w-6xl` | Ancho máximo (el contenido no pasa de ahí) |
| `w-full` | Ocupa todo el ancho disponible |
| `min-h-screen` | Altura mínima de una pantalla (simula el scroll) |
| `h-full` | Altura 100% (el `<html>`) |
| `min-h-full` | Altura mínima 100% (el `<body>`) |

**Dónde se usa:** `mx-auto max-w-6xl` (header, footer), `min-h-screen` (los
bloques que simulan contenido y generan scroll), `max-w-md/2xl` (párrafos).

## 4. Tipografía

| Clase | Qué hace |
|-------|----------|
| `font-bold` | Texto en negrita |

Solo hay un estilo de texto: **negrita** para títulos, el logo y el enlace
activo de navegación. El resto usa el texto normal del navegador.

---

## Regla para leer cualquier `className`

Se lee de izquierda a derecha en bloques:

1. **Layout**: `flex` / `flex-col` / `grid`
2. **Alineación**: `items-center` / `justify-between` / `justify-center`
3. **Espaciado**: `gap-*` / `p-*` / `px-*` / `py-*`
4. **Ancho**: `max-w-*` / `mx-auto` / `w-full`
5. **Texto**: `font-bold`

**Si una clase no está en esta guía, no se usa en el proyecto.**