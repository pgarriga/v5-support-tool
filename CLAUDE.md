# Vampiro: La Mascarada V5 — Disciplinas

Herramienta de consulta rápida para partidas de rol de **Vampiro: La Mascarada 5ª Edición**. Web estática sin backend pensada para tener a mano disciplinas y poderes en mesa.

## Stack

- **Vue 3** via CDN
- **Vue Router 4** con hash history (`#/ruta`)
- **Tailwind CSS v3** — gestión de responsive vía clases utilitarias (`xs:`, `sm:`, `md:`, `lg:`, `2xl:`)
- **PostCSS + Autoprefixer** — proceso de build del CSS
- **Google Fonts**: Cinzel Decorative (títulos) + Cormorant Garamond (cuerpo)

Requiere build de CSS antes de abrir. Ver sección "Ejecutar en local".

## Estructura de archivos

```
V5 Discipline Finder/
├── index.html                   # Shell de la app
├── CLAUDE.md
├── package.json                 # Scripts de build (dev/build)
├── tailwind.config.js           # Config Tailwind: colores, fuentes, breakpoints custom
├── postcss.config.js            # PostCSS con tailwindcss + autoprefixer
├── css/
│   ├── input.css                # FUENTE: @tailwind directives + estilos góticos custom
│   └── style.css                # GENERADO: no editar directamente (npm run build)
└── js/
    ├── data.js                  # Const DISCIPLINES_DATA con las 11 disciplinas y ~96 poderes
    ├── icons.js                 # Const DISCIPLINE_ICONS con SVGs inline por disciplina
    └── app.js                   # App Vue 3 + Router con clases Tailwind responsive
```

## Rutas

| Hash | Vista | Descripción |
|------|-------|-------------|
| `#/` | `HomeView` | Grid de las 11 disciplinas con buscador |
| `#/disciplina/:id` | `DisciplineView` | Baraja de cartas con los poderes de la disciplina |
| `#/disciplina/:id/poder/:powerId` | `PowerView` | Carta detalle de un poder concreto |

## Datos (`js/data.js`)

Fuente: PDF oficial español *Vampiro La Mascarada 5 edición - Disciplinas.pdf*.

`DISCIPLINES_DATA.disciplines` es un array donde cada disciplina tiene:

```js
{
  id: "animalismo",           // slug usado en las rutas
  name: "Animalismo",
  description: "...",         // resumen breve
  tipo: "Mental",             // Mental | Físico | Social
  amenaza: "...",             // amenaza para la Mascarada
  resonancia: "...",          // resonancia de sangre recomendada
  color: "#4a7c3f",           // color temático (usado en gradientes y bordes)
  colorDark: "#2d4a25",       // variante oscura para gradientes
  colorGlow: "rgba(...)",     // color para box-shadow glow
  clanes: ["Gangrel", ...],   // clanes con afinidad
  iconType: "wolf",           // clave en DISCIPLINE_ICONS
  powers: [ ... ]             // array de poderes (ver abajo)
}
```

Cada poder:

```js
{
  id: "sentir-a-la-bestia",   // slug usado en las rutas
  name: "Sentir a la Bestia",
  level: 1,                   // 1–5
  cost: "Ninguno",            // coste en Ansia / Enardecimiento
  dicePool: "Resolución + Animalismo contra ...",
  duration: "Pasiva",
  description: "..."          // resumen conciso, máx ~250 chars
}
```

### Añadir o editar un poder

Editar directamente `js/data.js`. No hay validación de esquema; basta con respetar la estructura de objetos y que el `id` sea único dentro de la disciplina.

## Iconos (`js/icons.js`)

`DISCIPLINE_ICONS` es un objeto `{ [iconType]: svgString }`. Cada SVG usa `currentColor` para heredar el color de la disciplina desde CSS/Vue. ViewBox `0 0 100 100`.

| iconType | Disciplina |
|----------|-----------|
| `wolf`   | Animalismo |
| `eye`    | Auspex |
| `bolt`   | Celeridad |
| `crown`  | Dominación |
| `shield` | Fortaleza |
| `ghost`  | Ofuscación |
| `fist`   | Potencia |
| `rose`   | Presencia |
| `claws`  | Protean |
| `blood`  | Hechicería de Sangre |
| `flask`  | Alquimia de Sangre Débil |

Para añadir un icono: agregar una entrada en `DISCIPLINE_ICONS` y referenciarla con `iconType` en la disciplina correspondiente en `data.js`.

## App (`js/app.js`)

Todo el código Vue está en un único fichero. Sin SFCs (no hay build). Estructura:

- **Helpers** (`levelDots`, `disciplineById`, `powerById`, `shortCost`, `artGradient`) — funciones puras usadas por las vistas.
- **HomeView** — lista de disciplinas con filtro reactivo por nombre/clan/tipo.
- **DisciplineView** — cabecera de disciplina + grid de power cards.
- **PowerView** — carta detalle con stats y descripción completa.
- **Router** — `createWebHashHistory`, scroll to top en cada navegación.
- **App** — componente raíz con `<transition name="page">` para animaciones entre vistas.

Las vistas no usan `<script setup>` ni SFCs; usan `defineComponent` con `template` como string literal y `setup()` / `computed`.

## CSS

**No editar `css/style.css`** — es un archivo generado. Editar siempre `css/input.css`.

`css/input.css` contiene:
- `@tailwind base/components/utilities` — las directivas de Tailwind
- Estilos góticos custom que Tailwind no puede generar: animaciones (blood drip), card styles con CSS vars (`--card-color`, `--card-glow`), level dots, page transitions, scrollbar

Las variables `--card-color` y `--card-glow` se inyectan inline desde Vue para dar el color temático de cada disciplina.

## Responsive (Tailwind)

Breakpoints configurados en `tailwind.config.js`:

| Prefijo | Mínimo | Uso |
|---------|--------|-----|
| `xs:`   | 400px  | Móvil grande / iPhone Plus |
| `sm:`   | 640px  | Tablet pequeña |
| `md:`   | 768px  | Tablet |
| `lg:`   | 1024px | Desktop |
| `2xl:`  | 1400px | Desktop grande |

Los grids usan `grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5` etc., directamente en los templates de `app.js`.

## Ejecutar en local

```bash
# Instalar dependencias (primera vez)
npm install --no-bin-links --ignore-scripts

# Modo desarrollo: regenera CSS al guardar
npm run dev

# Build de producción (CSS minificado)
npm run build

# Servidor estático en paralelo
npx serve .
```
