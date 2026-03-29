# 🩸 Disciplinas · Vampiro: La Mascarada V5

Herramienta de consulta rápida para partidas de rol de **Vampiro: La Mascarada 5ª Edición**. Permite consultar las 11 disciplinas y sus ~96 poderes de forma rápida durante las sesiones de juego.

---

![Version](https://img.shields.io/badge/version-1.1.0-8b0000?style=flat-square)
![Vue](https://img.shields.io/badge/Vue-3.5.13-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.1-646CFF?style=flat-square&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-4.5.0-4FC08D?style=flat-square)

---

## Características

- **11 disciplinas** con iconografía gótica SVG
- **~96 poderes** con reserva de dados, coste, duración y descripción
- **Búsqueda** por nombre de disciplina, clan o tipo
- **3 vistas**: listado → disciplina → detalle de poder
- **Totalmente responsive** con Bootstrap 5 (2 → 5 columnas según pantalla)
- **Sin backend** — web estática pura, funciona offline
- Accesible: navegación por teclado, ARIA labels, contraste WCAG AA

## Stack técnico

| Tecnología | Versión | Rol |
|------------|---------|-----|
| Vue 3 | 3.5.13 | Framework reactivo (SFCs + Composition API + TypeScript) |
| Vue Router | 4.5.0 | Navegación hash (`#/ruta`) |
| Bootstrap | 5.3.3 | Grid responsive y utilidades CSS |
| Vite | 6.3.1 | Bundler y servidor de desarrollo |
| TypeScript | 5.7.3 | Tipado estático |

## Estructura del proyecto

```
V5 Discipline Finder/
├── index.html                 # Entrada Vite
├── vite.config.ts             # Configuración Vite
├── tsconfig.json              # Configuración TypeScript
├── package.json
├── src/
│   ├── main.ts                # Bootstrap CSS + Vue app
│   ├── App.vue                # Componente raíz (transiciones de página)
│   ├── router.ts              # Rutas hash
│   ├── types.ts               # Interfaces TypeScript (Discipline, Power)
│   ├── data.ts                # Las 11 disciplinas y ~96 poderes
│   ├── icons.ts               # SVGs góticos por disciplina
│   ├── helpers.ts             # Funciones puras (shortCost, artGradient…)
│   ├── css/
│   │   └── main.css           # Estilos góticos custom + overrides Bootstrap
│   └── views/
│       ├── HomeView.vue       # Grid de disciplinas con buscador
│       ├── DisciplineView.vue # Baraja de poderes de una disciplina
│       └── PowerView.vue      # Carta detalle de un poder
└── dist/                      # Build de producción (generado)
```

## Rutas

| Hash | Vista | Descripción |
|------|-------|-------------|
| `#/` | HomeView | Grid de las 11 disciplinas con buscador |
| `#/disciplina/:id` | DisciplineView | Baraja de poderes |
| `#/disciplina/:id/poder/:powerId` | PowerView | Carta detalle de un poder |

## Instalación y uso

```bash
# Instalar dependencias (WSL2 sobre Windows)
npm install --no-bin-links --ignore-scripts

# Servidor de desarrollo
npm run dev
# → http://localhost:5173

# Build de producción
npm run build
# → dist/

# Previsualizar build
npm run preview
```

> **Nota WSL2:** Los scripts usan `node node_modules/vite/bin/vite.js` en lugar del binario `vite` para evitar problemas de permisos en el sistema de archivos de Windows.

## Datos

Fuente: PDF oficial español *Vampiro La Mascarada 5ª Edición — Disciplinas*.

Los datos se encuentran en `src/data.ts`. Para añadir o editar un poder, edita directamente ese archivo manteniendo la estructura de tipos definida en `src/types.ts`.

## Iconografía

Los iconos SVG están en `src/icons.ts`. Cada icono usa `currentColor` para heredar el color temático de la disciplina. ViewBox `0 0 100 100`.

| Clave | Disciplina |
|-------|-----------|
| `wolf` | Animalismo |
| `eye` | Auspex |
| `bolt` | Celeridad |
| `crown` | Dominación |
| `shield` | Fortaleza |
| `ghost` | Ofuscación |
| `fist` | Potencia |
| `rose` | Presencia |
| `claws` | Protean |
| `blood` | Hechicería de Sangre |
| `flask` | Alquimia de Sangre Débil |
