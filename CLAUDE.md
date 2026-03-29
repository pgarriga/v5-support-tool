# V5 Support Tool — Vampiro: La Mascarada 5ª Edición

Herramienta de soporte para partidas de rol de **Vampiro: La Mascarada 5ª Edición**. Web estática sin backend pensada para consultar disciplinas, poderes y gestionar los poderes del personaje en mesa.

## Stack

- **Vue 3** + **TypeScript** — SFCs con Composition API (`<script setup>`)
- **Vue Router 4** con hash history (`#/ruta`)
- **Bootstrap 5** — navbar, grid responsive y utilidades CSS (CSS + JS bundle)
- **Vite 6** — bundler y servidor de desarrollo
- **Google Fonts**: Cinzel Decorative (títulos) + Cormorant Garamond (cuerpo)

## Estructura de archivos

```
V5 Support Tool/
├── index.html                   # Entrada Vite
├── vite.config.ts               # base: './', plugin vue
├── tsconfig.json
├── package.json                 # Scripts: dev / build / preview
└── src/
    ├── main.ts                  # Importa Bootstrap CSS+JS, main.css, monta app
    ├── App.vue                  # Navbar Bootstrap plegable + <router-view> con transición
    ├── router.ts                # Rutas hash: /, /disciplina/:id, /poder/:id, /mis-poderes
    ├── types.ts                 # Interfaces: Discipline, Power, DisciplinesData
    ├── data.ts                  # DISCIPLINES_DATA: 11 disciplinas y ~96 poderes
    ├── icons.ts                 # DISCIPLINE_ICONS: SVGs inline por disciplina
    ├── helpers.ts               # levelDots, disciplineById, powerById, shortCost, shortDuration, artGradient
    ├── composables/
    │   └── useFavorites.ts      # Estado singleton de Mis Poderes — persiste en localStorage
    ├── css/
    │   └── main.css             # Estilos góticos custom + overrides Bootstrap
    └── views/
        ├── HomeView.vue         # Grid de disciplinas con buscador
        ├── DisciplineView.vue   # Baraja de poderes + estrella para guardar en Mis Poderes
        ├── PowerView.vue        # Carta detalle de un poder
        └── MisPoderesView.vue   # Poderes guardados, agrupados por disciplina y ordenados por nivel
```

## Rutas

| Hash | Vista | Descripción |
|------|-------|-------------|
| `#/` | `HomeView` | Grid de las 11 disciplinas con buscador |
| `#/disciplina/:id` | `DisciplineView` | Baraja de poderes de la disciplina |
| `#/disciplina/:id/poder/:powerId` | `PowerView` | Carta detalle de un poder concreto |
| `#/mis-poderes` | `MisPoderesView` | Poderes guardados por el usuario |

## Navegación (`App.vue`)

Navbar Bootstrap sticky arriba con `navbar-expand-md`:
- En móvil se pliega con hamburguesa
- Se cierra automáticamente al navegar (watch sobre `route.path`)
- Badge rojo en "Mis Poderes" con el número de poderes guardados
- Brand: "V5 Support Tool"

## Mis Poderes (`composables/useFavorites.ts`)

Singleton reactivo con `ref<string[]>`. Cada favorito se almacena como `"disciplineId:powerId"` en `localStorage` bajo la clave `v5-mis-poderes`. Expone `toggle`, `isFavorite` y la ref `favorites`.

En `DisciplineView.vue` cada power card tiene una estrella (`.star-btn`) en la esquina superior derecha que llama a `toggle`. En `MisPoderesView.vue` los poderes se agrupan por disciplina (en el orden de `data.ts`) y se ordenan por nivel dentro de cada grupo.

## Datos (`src/data.ts`)

Fuente: PDF oficial español *Vampiro La Mascarada 5 edición - Disciplinas.pdf*.

`DISCIPLINES_DATA.disciplines` es un array donde cada disciplina tiene:

```ts
{
  id: "animalismo",           // slug usado en las rutas
  name: "Animalismo",
  description: "...",
  tipo: "Mental",             // Mental | Físico | Social
  amenaza: "...",
  resonancia: "...",
  color: "#4a7c3f",           // color temático (gradientes y bordes)
  colorDark: "#2d4a25",       // variante oscura para gradientes
  colorGlow: "rgba(...)",     // color para box-shadow glow
  clanes: ["Gangrel", ...],
  iconType: "wolf",           // clave en DISCIPLINE_ICONS
  powers: [ ... ]
}
```

Cada poder:

```ts
{
  id: "sentir-a-la-bestia",
  name: "Sentir a la Bestia",
  level: 1,                   // 1–5
  cost: "Ninguno",
  dicePool: "Resolución + Animalismo contra ...",
  duration: "Pasiva",
  description: "...",
  amalgama?: "..."            // opcional
}
```

Para añadir o editar un poder, editar directamente `src/data.ts` respetando los tipos de `src/types.ts`.

## Iconos (`src/icons.ts`)

`DISCIPLINE_ICONS` es un objeto `{ [iconType]: svgString }`. Cada SVG usa `currentColor`. ViewBox `0 0 100 100`.

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

## CSS (`src/css/main.css`)

Estilos góticos custom sobre Bootstrap. Clases relevantes:

- `.app-navbar` / `.app-nav-link` / `.app-nav-badge` — navbar custom
- `.discipline-card` / `.power-card` — tarjetas con CSS vars `--card-color` y `--card-glow`
- `.star-btn` / `.star-btn--filled` — botón estrella de favoritos
- `.disc-group-icon` — icono de disciplina en MisPoderesView
- `.power-detail-card` / `.pst` — vista detalle de poder

Las variables `--card-color` y `--card-glow` se inyectan inline desde Vue.

## Ejecutar en local

```bash
# Instalar dependencias (primera vez)
npm install --no-bin-links --ignore-scripts

# Modo desarrollo
npm run dev
# → http://localhost:5173

# Build de producción
npm run build
# → dist/

# Previsualizar build
npm run preview
```
