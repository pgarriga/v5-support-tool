export const DISCIPLINE_ICONS: Record<string, string> =

{

  // ── ANIMALISMO — Cráneo de bestia / cabeza de lobo gótica ──────────────
  wolf: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Orejas puntiagudas tipo murciélago -->
    <polygon points="18,50 8,6 36,38" fill="currentColor"/>
    <polygon points="18,50 10,8 38,40" fill="rgba(0,0,0,0.35)"/>
    <polygon points="82,50 92,6 64,38" fill="currentColor"/>
    <polygon points="82,50 90,8 62,40" fill="rgba(0,0,0,0.35)"/>
    <!-- Cráneo principal: forma angular, frente plana -->
    <path d="M50,14 L78,28 L84,52 L78,62 L22,62 L16,52 L22,28 Z" fill="currentColor"/>
    <!-- Pómulos angulares y mandíbula -->
    <path d="M22,62 L18,74 L26,80 L36,78 L42,88 L50,92 L58,88 L64,78 L74,80 L82,74 L78,62 Z" fill="currentColor"/>
    <!-- Sombreado mandíbula inferior -->
    <path d="M26,80 L36,78 L42,88 L50,92 L58,88 L64,78 L74,80" fill="rgba(0,0,0,0.3)" stroke="rgba(0,0,0,0.4)" stroke-width="1"/>
    <!-- Cuencas oculares vacías y profundas -->
    <ellipse cx="34" cy="43" rx="11" ry="12" fill="#0d0b14"/>
    <ellipse cx="66" cy="43" rx="11" ry="12" fill="#0d0b14"/>
    <!-- Borde de cuenca: relieve óseo -->
    <ellipse cx="34" cy="43" rx="11" ry="12" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    <ellipse cx="66" cy="43" rx="11" ry="12" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    <!-- Pupilas verticales que brillan en la oscuridad -->
    <ellipse cx="34" cy="43" rx="3" ry="8" fill="currentColor" opacity="0.7"/>
    <ellipse cx="66" cy="43" rx="3" ry="8" fill="currentColor" opacity="0.7"/>
    <!-- Reflejos oculares -->
    <ellipse cx="32" cy="39" rx="1" ry="2.5" fill="rgba(255,255,255,0.25)"/>
    <ellipse cx="64" cy="39" rx="1" ry="2.5" fill="rgba(255,255,255,0.25)"/>
    <!-- Fisura nasal -->
    <path d="M46,57 L50,52 L54,57 L52,60 L48,60 Z" fill="#0d0b14"/>
    <!-- Colmillos inferiores prominentes que sobresalen -->
    <path d="M38,78 L34,96 L40,96 L42,78 Z" fill="currentColor"/>
    <path d="M62,78 L58,96 L64,96 L60,78 Z" fill="currentColor"/>
    <!-- Sombra de colmillos -->
    <path d="M38,78 L34,96 L36,96 L40,78 Z" fill="rgba(0,0,0,0.4)"/>
    <path d="M62,78 L58,96 L60,96 L64,78 Z" fill="rgba(0,0,0,0.4)"/>
    <!-- Líneas de tensión del cráneo: aspecto grabado -->
    <line x1="50" y1="14" x2="50" y2="28" stroke="rgba(0,0,0,0.35)" stroke-width="1.5"/>
    <line x1="50" y1="28" x2="50" y2="62" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
    <!-- Highlight sutil en frente -->
    <path d="M38,18 Q50,14 62,18 Q62,24 50,22 Q38,24 38,18 Z" fill="rgba(255,255,255,0.08)"/>
  </svg>`,

  // ── AUSPEX — Ojo todo-vidente oculto bajo arco gótico ────────────────
  eye: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Marco de arco gótico apuntado -->
    <path d="M20,95 L20,45 Q20,8 50,5 Q80,8 80,45 L80,95 Z" fill="currentColor" opacity="0.18"/>
    <path d="M20,95 L20,45 Q20,8 50,5 Q80,8 80,45 L80,95 Z" fill="none" stroke="currentColor" stroke-width="3"/>
    <!-- Marco interior del arco (doble borde gótico) -->
    <path d="M26,95 L26,46 Q26,15 50,12 Q74,15 74,46 L74,95" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <!-- Ojo almendrado dentro del arco -->
    <path d="M14,50 Q32,28 50,28 Q68,28 86,50 Q68,72 50,72 Q32,72 14,50 Z" fill="currentColor" opacity="0.22"/>
    <path d="M14,50 Q32,28 50,28 Q68,28 86,50 Q68,72 50,72 Q32,72 14,50 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <!-- Iris -->
    <circle cx="50" cy="50" r="16" fill="currentColor" opacity="0.85"/>
    <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/>
    <!-- Pupila vertical de vampiro -->
    <ellipse cx="50" cy="50" rx="5" ry="13" fill="#0d0b14"/>
    <!-- Reflejos del iris -->
    <circle cx="43" cy="44" rx="3" ry="3" r="3" fill="rgba(255,255,255,0.15)"/>
    <!-- Líneas de pestañas radiantes (grabado ocultista) -->
    <line x1="50" y1="5"  x2="50" y2="16" stroke="currentColor" stroke-width="2" opacity="0.7"/>
    <line x1="50" y1="84" x2="50" y2="95" stroke="currentColor" stroke-width="2" opacity="0.5"/>
    <line x1="14" y1="50" x2="23" y2="50" stroke="currentColor" stroke-width="2" opacity="0.6"/>
    <line x1="77" y1="50" x2="86" y2="50" stroke="currentColor" stroke-width="2" opacity="0.6"/>
    <line x1="21" y1="21" x2="28" y2="28" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    <line x1="72" y1="28" x2="79" y2="21" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    <line x1="21" y1="79" x2="28" y2="72" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
    <line x1="72" y1="72" x2="79" y2="79" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
    <line x1="29" y1="13" x2="34" y2="22" stroke="currentColor" stroke-width="1" opacity="0.35"/>
    <line x1="66" y1="22" x2="71" y2="13" stroke="currentColor" stroke-width="1" opacity="0.35"/>
    <!-- Cruz en la base (marca ocultista) -->
    <line x1="50" y1="84" x2="50" y2="95" stroke="currentColor" stroke-width="2.5" opacity="0.7"/>
    <line x1="44" y1="89" x2="56" y2="89" stroke="currentColor" stroke-width="2.5" opacity="0.7"/>
    <!-- Sombra interior del arco -->
    <path d="M30,95 L30,47 Q30,20 50,18 Q70,20 70,47 L70,95" fill="rgba(0,0,0,0.25)"/>
  </svg>`,

  // ── CELERIDAD — Rayo con fantasmas de velocidad ───────────────────────
  bolt: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Fantasmas de velocidad offset detrás (el más lejano primero) -->
    <polygon points="63,6 43,48 58,48 41,94 76,40 57,40 72,6" fill="currentColor" opacity="0.12" transform="translate(-14,0)"/>
    <polygon points="63,6 43,48 58,48 41,94 76,40 57,40 72,6" fill="currentColor" opacity="0.22" transform="translate(-8,0)"/>
    <!-- Rayo principal -->
    <polygon points="63,6 43,48 58,48 41,94 76,40 57,40 72,6" fill="currentColor"/>
    <!-- Sombra interna del rayo para dar volumen -->
    <polygon points="63,6 43,48 52,48 41,94 60,60 57,40 72,6" fill="rgba(0,0,0,0.28)"/>
    <!-- Highlight del filo izquierdo del rayo -->
    <path d="M63,6 L43,48 L48,48 L66,10 Z" fill="rgba(255,255,255,0.1)"/>
    <!-- Líneas de velocidad en el lado izquierdo (estelas) -->
    <line x1="5"  y1="26" x2="37" y2="26" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.65"/>
    <line x1="5"  y1="38" x2="33" y2="38" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.45"/>
    <line x1="5"  y1="50" x2="37" y2="50" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.55"/>
    <line x1="5"  y1="62" x2="31" y2="62" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
    <line x1="5"  y1="72" x2="29" y2="72" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
    <!-- Destello en la punta superior -->
    <circle cx="66" cy="10" r="5" fill="currentColor" opacity="0.3"/>
    <circle cx="66" cy="10" r="2.5" fill="rgba(255,255,255,0.2)"/>
  </svg>`,

  // ── DOMINACIÓN — Corona de hierro gótica ─────────────────────────────
  crown: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Banda base de la corona -->
    <rect x="10" y="62" width="80" height="24" rx="2" fill="currentColor"/>
    <!-- Sombra superior de la banda -->
    <rect x="10" y="62" width="80" height="6" rx="2" fill="rgba(0,0,0,0.3)"/>
    <!-- Reborde inferior de la banda -->
    <rect x="10" y="82" width="80" height="4" rx="1" fill="rgba(0,0,0,0.25)"/>
    <!-- Cuerpo de la corona con 5 espiras puntiagudas -->
    <path d="M10,62 L10,46 L22,58 L32,22 L44,52 L50,10 L56,52 L68,22 L78,58 L90,46 L90,62 Z" fill="currentColor"/>
    <!-- Sombra interna de las espiras -->
    <path d="M10,62 L10,46 L22,58 L32,22 L44,52 L50,10 L56,52 L68,22 L78,58 L90,46 L90,62 Z" fill="rgba(0,0,0,0.2)" transform="translate(1.5,1.5)"/>
    <!-- Detalle grabado: nervaduras en espiras -->
    <line x1="32" y1="22" x2="38" y2="54" stroke="rgba(0,0,0,0.3)" stroke-width="1"/>
    <line x1="50" y1="10" x2="50" y2="56" stroke="rgba(0,0,0,0.3)" stroke-width="1"/>
    <line x1="68" y1="22" x2="62" y2="54" stroke="rgba(0,0,0,0.3)" stroke-width="1"/>
    <!-- Gotas de sangre cayendo de las espiras -->
    <path d="M32,22 Q30,30 28,34 Q26,38 30,40 Q34,38 32,34 Q32,30 32,22 Z" fill="rgba(139,0,0,0.85)"/>
    <path d="M50,10 Q48,19 46,24 Q44,29 50,31 Q56,29 54,24 Q52,19 50,10 Z" fill="rgba(139,0,0,0.85)"/>
    <path d="M68,22 Q70,30 72,34 Q74,38 70,40 Q66,38 68,34 Q68,30 68,22 Z" fill="rgba(139,0,0,0.85)"/>
    <path d="M22,58 Q20,64 19,67 Q18,70 22,71 Q26,70 25,67 Q23,64 22,58 Z" fill="rgba(139,0,0,0.7)"/>
    <path d="M78,58 Q80,64 81,67 Q82,70 78,71 Q74,70 75,67 Q77,64 78,58 Z" fill="rgba(139,0,0,0.7)"/>
    <!-- Joya central sangrienta en la banda -->
    <ellipse cx="50" cy="72" rx="9" ry="7" fill="rgba(139,0,0,0.9)"/>
    <ellipse cx="50" cy="72" rx="9" ry="7" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
    <ellipse cx="47" cy="69" rx="3" ry="2.5" fill="rgba(255,255,255,0.2)"/>
    <!-- Joyas menores en la banda -->
    <ellipse cx="25" cy="72" rx="5" ry="4" fill="rgba(0,0,0,0.5)"/>
    <ellipse cx="25" cy="72" rx="5" ry="4" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <ellipse cx="75" cy="72" rx="5" ry="4" fill="rgba(0,0,0,0.5)"/>
    <ellipse cx="75" cy="72" rx="5" ry="4" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <!-- Highlight en el filo superior de las espiras -->
    <path d="M32,22 L44,52 L46,50 L34,24 Z" fill="rgba(255,255,255,0.07)"/>
    <path d="M50,10 L56,52 L58,50 L52,12 Z" fill="rgba(255,255,255,0.07)"/>
    <path d="M68,22 L56,52 L54,50 L66,24 Z" fill="rgba(255,255,255,0.07)"/>
  </svg>`,

  // ── FORTALEZA — Escudo de guerra gótico con cruz patée ───────────────
  shield: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Forma heater del escudo -->
    <path d="M50,5 L92,20 L92,56 Q92,82 50,97 Q8,82 8,56 L8,20 Z" fill="currentColor"/>
    <!-- Borde grabado del escudo (relieve exterior) -->
    <path d="M50,5 L92,20 L92,56 Q92,82 50,97 Q8,82 8,56 L8,20 Z" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <!-- Sombra interna del escudo -->
    <path d="M50,12 L86,25 L86,56 Q86,78 50,90 Q14,78 14,56 L14,25 Z" fill="rgba(0,0,0,0.3)"/>
    <!-- Borde interior ornamental -->
    <path d="M50,12 L86,25 L86,56 Q86,78 50,90 Q14,78 14,56 L14,25 Z" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.45"/>
    <!-- Cruz patée: brazos con extremos acampanados (grabado heráldico) -->
    <!-- Brazo vertical superior -->
    <path d="M44,18 L44,46 L46,48 L54,48 L56,46 L56,18 Q53,14 50,14 Q47,14 44,18 Z" fill="#0d0b14"/>
    <!-- Brazo vertical inferior -->
    <path d="M44,52 L44,82 Q47,88 50,88 Q53,88 56,82 L56,52 L54,50 L46,50 Z" fill="#0d0b14"/>
    <!-- Brazo horizontal izquierdo -->
    <path d="M18,44 L46,44 L48,46 L48,54 L46,56 L18,56 Q14,53 14,50 Q14,47 18,44 Z" fill="#0d0b14"/>
    <!-- Brazo horizontal derecho -->
    <path d="M54,44 L82,44 Q86,47 86,50 Q86,53 82,56 L54,56 L52,54 L52,46 Z" fill="#0d0b14"/>
    <!-- Umbón central (boss) -->
    <circle cx="50" cy="50" r="9" fill="currentColor"/>
    <circle cx="50" cy="50" r="9" fill="rgba(0,0,0,0.3)"/>
    <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.8"/>
    <circle cx="50" cy="50" r="3" fill="#0d0b14"/>
    <circle cx="48" cy="48" r="1.5" fill="rgba(255,255,255,0.2)"/>
    <!-- Remaches en las esquinas del borde interior -->
    <circle cx="28" cy="28" r="2.5" fill="currentColor" opacity="0.6"/>
    <circle cx="72" cy="28" r="2.5" fill="currentColor" opacity="0.6"/>
    <circle cx="20" cy="55" r="2" fill="currentColor" opacity="0.5"/>
    <circle cx="80" cy="55" r="2" fill="currentColor" opacity="0.5"/>
    <!-- Highlight en filo izquierdo del escudo -->
    <path d="M50,5 L8,20 L8,38 L12,36 L12,24 L50,10 Z" fill="rgba(255,255,255,0.07)"/>
  </svg>`,

  // ── OFUSCACIÓN — Figura encapuchada espectral ─────────────────────────
  ghost: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Aura exterior difusa -->
    <ellipse cx="50" cy="52" rx="34" ry="42" fill="currentColor" opacity="0.08"/>
    <!-- Cuerpo de la figura: manto largo con borde inferior desgarrado -->
    <path d="M28,42 L28,72 L22,80 L30,76 L34,88 L40,76 L46,92 L50,78 L54,92 L60,76 L66,88 L70,76 L78,80 L72,72 L72,42 Z" fill="currentColor" opacity="0.92"/>
    <!-- Capucha: arco alto y oscuro -->
    <path d="M28,42 Q28,8 50,6 Q72,8 72,42 Z" fill="currentColor"/>
    <!-- Oscuridad absoluta dentro de la capucha (el rostro no existe) -->
    <path d="M32,42 Q32,14 50,12 Q68,14 68,42 Z" fill="#0d0b14"/>
    <!-- Profundidad adicional de la capucha -->
    <path d="M36,42 Q36,18 50,16 Q64,18 64,42 Z" fill="rgba(0,0,0,0.6)"/>
    <!-- Ojos: apenas un destello en la oscuridad -->
    <ellipse cx="40" cy="36" rx="4" ry="5" fill="currentColor" opacity="0.55"/>
    <ellipse cx="60" cy="36" rx="4" ry="5" fill="currentColor" opacity="0.55"/>
    <!-- Pupila vertical en los ojos -->
    <ellipse cx="40" cy="36" rx="1.5" ry="4" fill="#0d0b14"/>
    <ellipse cx="60" cy="36" rx="1.5" ry="4" fill="#0d0b14"/>
    <!-- Sombra interior del manto (pliegues) -->
    <line x1="38" y1="42" x2="36" y2="72" stroke="rgba(0,0,0,0.3)" stroke-width="2"/>
    <line x1="50" y1="42" x2="50" y2="75" stroke="rgba(0,0,0,0.2)" stroke-width="1.5"/>
    <line x1="62" y1="42" x2="64" y2="72" stroke="rgba(0,0,0,0.3)" stroke-width="2"/>
    <!-- Borde interior del manto -->
    <path d="M32,42 L32,70 L36,78" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
    <path d="M68,42 L68,70 L64,78" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
    <!-- Hebilla o broche en el pecho -->
    <circle cx="50" cy="50" r="3" fill="rgba(0,0,0,0.6)"/>
    <circle cx="50" cy="50" r="3" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  </svg>`,

  // ── POTENCIA — Puño monstruoso alzado ────────────────────────────────
  fist: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Muñeca y antebrazo -->
    <path d="M34,72 L34,92 Q34,96 40,96 L60,96 Q66,96 66,92 L66,72 Z" fill="currentColor"/>
    <!-- Sombra lateral del antebrazo -->
    <path d="M60,72 L60,96 L66,96 L66,72 Z" fill="rgba(0,0,0,0.3)"/>
    <!-- Palma -->
    <path d="M24,46 L24,72 Q24,78 30,78 L70,78 Q76,78 76,72 L76,46 Q76,40 70,40 L30,40 Q24,40 24,46 Z" fill="currentColor"/>
    <!-- Nudillos: tres prominentes crestas en la parte superior -->
    <path d="M24,40 L26,28 Q28,22 36,22 Q40,22 42,28 L44,40 Z" fill="currentColor"/>
    <path d="M40,40 L41,26 Q43,18 50,18 Q57,18 59,26 L60,40 Z" fill="currentColor"/>
    <path d="M56,40 L58,28 Q60,22 68,22 Q74,22 76,28 L76,40 Z" fill="currentColor"/>
    <!-- Líneas de articulación de nudillos (el grabado de los huesos) -->
    <path d="M26,40 Q36,37 44,40" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="1.5"/>
    <path d="M41,40 Q50,36 60,40" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="1.5"/>
    <path d="M58,40 Q67,37 76,40" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="1.5"/>
    <!-- Sombra de los nudillos -->
    <path d="M26,28 Q28,22 36,22 Q40,22 42,28" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>
    <path d="M41,26 Q43,18 50,18 Q57,18 59,26" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>
    <path d="M58,28 Q60,22 68,22 Q74,22 76,28" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>
    <!-- Pulgar en el lado izquierdo -->
    <path d="M10,54 L10,66 Q10,72 16,72 L28,72 L28,46 L20,46 Q10,46 10,54 Z" fill="currentColor"/>
    <path d="M10,54 L10,66 Q10,72 16,72 L22,72 L22,46 L18,46 Q10,46 10,54 Z" fill="rgba(0,0,0,0.25)"/>
    <!-- Líneas de impacto/energía que irradian desde la parte superior derecha -->
    <line x1="80" y1="28" x2="94" y2="18" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
    <line x1="83" y1="38" x2="98" y2="32" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
    <line x1="79" y1="18" x2="90" y2="8"  stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
    <line x1="84" y1="46" x2="97" y2="44" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
    <!-- Grieta/fisura de impacto -->
    <path d="M76,30 L84,24 L80,26 L86,18" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-linecap="round"/>
    <!-- Runa/marca en el nudillo central -->
    <line x1="50" y1="24" x2="50" y2="34" stroke="#0d0b14" stroke-width="1.5" opacity="0.7"/>
    <line x1="46" y1="28" x2="54" y2="28" stroke="#0d0b14" stroke-width="1.5" opacity="0.7"/>
    <!-- Highlight en el filo del puño -->
    <path d="M24,46 L24,60 L26,60 L26,46 Z" fill="rgba(255,255,255,0.08)"/>
  </svg>`,

  // ── PRESENCIA — Rosa gótica negra con espinas ─────────────────────────
  rose: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Tallo curvado con espinas -->
    <path d="M50,70 Q44,82 42,97" stroke="currentColor" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <!-- Espina izquierda 1 -->
    <path d="M46,80 L36,77 L44,82 Z" fill="currentColor"/>
    <!-- Espina derecha 1 -->
    <path d="M44,88 L54,92 L46,86 Z" fill="currentColor"/>
    <!-- Espina izquierda 2 -->
    <path d="M43,93 L33,94 L43,96 Z" fill="currentColor" opacity="0.8"/>
    <!-- Hoja izquierda -->
    <path d="M46,80 Q34,74 30,64 Q38,63 46,74 Z" fill="currentColor" opacity="0.75"/>
    <!-- Detalle nervio de la hoja -->
    <path d="M46,80 Q38,73 34,66" stroke="rgba(0,0,0,0.3)" stroke-width="1" fill="none"/>
    <!-- Hoja derecha pequeña -->
    <path d="M48,87 Q58,86 60,78 Q54,80 48,87 Z" fill="currentColor" opacity="0.65"/>
    <!-- Sépalos bajo la flor -->
    <path d="M38,58 Q42,52 50,50 Q58,52 62,58 Q56,56 50,55 Q44,56 38,58 Z" fill="currentColor" opacity="0.7"/>
    <!-- Pétalos exteriores: oscuros y superpuestos -->
    <path d="M50,55 Q34,54 30,44 Q34,36 50,36 Q66,36 70,44 Q66,54 50,55 Z" fill="currentColor" opacity="0.7"/>
    <path d="M50,55 Q36,60 34,50 Q36,38 50,36 Q60,42 58,55 Z" fill="currentColor" opacity="0.6"/>
    <path d="M50,55 Q64,60 66,50 Q64,38 50,36 Q40,42 42,55 Z" fill="currentColor" opacity="0.6"/>
    <path d="M50,36 Q46,28 50,22 Q58,24 62,34 Q60,42 50,36 Z" fill="currentColor" opacity="0.65"/>
    <path d="M50,36 Q42,30 38,22 Q46,18 54,22 Q56,30 50,36 Z" fill="currentColor" opacity="0.6"/>
    <!-- Pétalos interiores más oscuros -->
    <path d="M50,50 Q40,50 37,43 Q40,36 50,36 Q60,36 63,43 Q60,50 50,50 Z" fill="currentColor" opacity="0.85"/>
    <path d="M50,50 Q42,53 40,47 Q42,38 50,36 Q55,42 50,50 Z" fill="currentColor" opacity="0.8"/>
    <path d="M50,50 Q58,53 60,47 Q58,38 50,36 Q45,42 50,50 Z" fill="currentColor" opacity="0.8"/>
    <!-- Centro muy oscuro de la rosa -->
    <circle cx="50" cy="43" r="9" fill="rgba(0,0,0,0.7)"/>
    <circle cx="50" cy="43" r="6" fill="rgba(0,0,0,0.85)"/>
    <circle cx="48" cy="41" r="1.5" fill="rgba(255,255,255,0.12)"/>
    <!-- Gota de sangre que cae de un pétalo inferior -->
    <path d="M36,50 Q34,55 33,58 Q32,62 36,63 Q40,62 39,58 Q37,55 36,50 Z" fill="rgba(139,0,0,0.85)"/>
    <!-- Reflejo de la gota -->
    <path d="M35,53 Q34,56 34,58 Q35,56 36,54 Z" fill="rgba(255,255,255,0.15)"/>
  </svg>`,

  // ── PROTEAN — Garras de bestia curvas ────────────────────────────────
  claws: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Círculo de transformación/energía (línea discontinua ocultista) -->
    <circle cx="50" cy="58" r="38" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.35"/>
    <circle cx="50" cy="58" r="32" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,5" opacity="0.2"/>
    <!-- Base de la garra izquierda (ancha) -->
    <path d="M22,80 Q16,68 22,40 Q26,20 30,8 Q34,20 36,40 Q40,60 36,80 Z" fill="currentColor"/>
    <!-- Sombra interior garra izquierda -->
    <path d="M28,80 Q24,68 28,40 Q30,28 32,16 Q34,28 34,40 Q36,58 34,80 Z" fill="rgba(0,0,0,0.35)"/>
    <!-- Punta afilada garra izquierda -->
    <path d="M26,8 Q30,2 34,8 Q32,16 30,16 Q28,16 26,8 Z" fill="currentColor"/>
    <!-- Base de la garra central (la más larga) -->
    <path d="M38,84 Q36,70 40,42 Q44,18 50,4 Q56,18 60,42 Q64,70 62,84 Z" fill="currentColor"/>
    <!-- Sombra interior garra central -->
    <path d="M44,84 Q42,70 44,42 Q47,24 50,12 Q53,24 56,42 Q58,68 56,84 Z" fill="rgba(0,0,0,0.35)"/>
    <!-- Punta afilada garra central -->
    <path d="M46,4 Q50,0 54,4 Q52,14 50,14 Q48,14 46,4 Z" fill="currentColor"/>
    <!-- Base de la garra derecha (ancha) -->
    <path d="M78,80 Q84,68 78,40 Q74,20 70,8 Q66,20 64,40 Q60,60 64,80 Z" fill="currentColor"/>
    <!-- Sombra interior garra derecha -->
    <path d="M72,80 Q76,68 72,40 Q70,28 68,16 Q66,28 66,40 Q64,58 66,80 Z" fill="rgba(0,0,0,0.35)"/>
    <!-- Punta afilada garra derecha -->
    <path d="M74,8 Q70,2 66,8 Q68,16 70,16 Q72,16 74,8 Z" fill="currentColor"/>
    <!-- Highlight en el filo delantero de cada garra -->
    <path d="M22,80 L22,40 L24,40 L24,78 Z" fill="rgba(255,255,255,0.1)"/>
    <path d="M38,84 L40,42 L42,42 L40,82 Z" fill="rgba(255,255,255,0.1)"/>
    <path d="M78,80 L78,40 L76,40 L76,78 Z" fill="rgba(255,255,255,0.1)"/>
    <!-- Energía de transformación entre las garras -->
    <path d="M36,80 Q42,85 50,84 Q58,85 64,80" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3" stroke-dasharray="3,3"/>
  </svg>`,

  // ── HECHICERÍA DE SANGRE — Círculo oculto con gota pentagramada ───────
  blood: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Círculo ocultista exterior con marcas cardinales -->
    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6" stroke-dasharray="5,4"/>
    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"/>
    <!-- Marcas cardinales en el círculo externo -->
    <line x1="50" y1="4"  x2="50" y2="12" stroke="currentColor" stroke-width="2.5" opacity="0.7"/>
    <line x1="50" y1="88" x2="50" y2="96" stroke="currentColor" stroke-width="2.5" opacity="0.7"/>
    <line x1="4"  y1="50" x2="12" y2="50" stroke="currentColor" stroke-width="2.5" opacity="0.7"/>
    <line x1="88" y1="50" x2="96" y2="50" stroke="currentColor" stroke-width="2.5" opacity="0.7"/>
    <!-- Marcas diagonales secundarias -->
    <line x1="17" y1="17" x2="22" y2="22" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    <line x1="78" y1="22" x2="83" y2="17" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    <line x1="17" y1="83" x2="22" y2="78" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    <line x1="78" y1="78" x2="83" y2="83" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    <!-- Gota de sangre central: grande y amenazante -->
    <path d="M50,90 Q18,74 18,50 Q18,20 50,10 Q82,20 82,50 Q82,74 50,90 Z" fill="rgba(139,0,0,0.85)"/>
    <!-- Sombra lateral de la gota -->
    <path d="M50,90 Q18,74 18,50 Q18,30 34,18 Q18,32 18,50 Q18,74 50,90 Z" fill="rgba(0,0,0,0.35)"/>
    <!-- Reflejos en la gota -->
    <path d="M36,22 Q44,14 54,14 Q46,16 40,24 Z" fill="rgba(255,255,255,0.15)"/>
    <ellipse cx="37" cy="26" rx="4" ry="6" fill="rgba(255,255,255,0.1)" transform="rotate(-20 37 26)"/>
    <!-- Pentagrama invertido dentro de la gota -->
    <polygon points="50,20 58,44 38,30 62,30 42,44" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.75"/>
    <!-- Brillo ocultista del pentagrama -->
    <polygon points="50,20 58,44 38,30 62,30 42,44" fill="currentColor" opacity="0.08"/>
    <!-- Punto central de poder -->
    <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.7"/>
    <circle cx="50" cy="50" r="2.5" fill="rgba(255,255,255,0.3)"/>
  </svg>`,

  // ── ALQUIMIA DE SANGRE DÉBIL — Matraz hermético con símbolos ─────────
  flask: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Tapón de corcho con cruz hermética -->
    <rect x="36" y="4" width="28" height="10" rx="3" fill="currentColor"/>
    <rect x="36" y="4" width="28" height="10" rx="3" fill="rgba(0,0,0,0.25)"/>
    <!-- Cruz hermética en el tapón -->
    <line x1="50" y1="5" x2="50" y2="13" stroke="#0d0b14" stroke-width="2" opacity="0.8"/>
    <line x1="42" y1="9" x2="58" y2="9" stroke="#0d0b14" stroke-width="2" opacity="0.8"/>
    <!-- Cuello estrecho del matraz -->
    <path d="M40,14 L40,36 Q38,38 36,40 L40,14 Z" fill="rgba(0,0,0,0.15)"/>
    <rect x="40" y="13" width="20" height="26" rx="2" fill="currentColor" opacity="0.7"/>
    <!-- Sombra lateral del cuello -->
    <rect x="56" y="13" width="4" height="26" rx="1" fill="rgba(0,0,0,0.3)"/>
    <!-- Cuerpo esférico del matraz: forma de frasco alquímico -->
    <path d="M40,38 Q14,58 14,72 Q14,96 50,96 Q86,96 86,72 Q86,58 60,38 Z" fill="currentColor" opacity="0.32"/>
    <path d="M40,38 Q14,58 14,72 Q14,96 50,96 Q86,96 86,72 Q86,58 60,38 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <!-- Sombra lateral del matraz -->
    <path d="M60,38 Q86,58 86,72 Q86,92 68,95 Q86,90 86,72 Q86,56 62,38 Z" fill="rgba(0,0,0,0.22)"/>
    <!-- Nivel de líquido con gradiente oscuro -->
    <path d="M18,74 Q22,90 50,93 Q78,90 82,74 Q78,68 50,66 Q22,68 18,74 Z" fill="currentColor" opacity="0.55"/>
    <path d="M20,78 Q24,92 50,94 Q76,92 80,78" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <!-- Triángulo de fuego (△) dentro del matraz: arriba apuntando -->
    <polygon points="50,48 38,66 62,66" fill="none" stroke="currentColor" stroke-width="2" opacity="0.7"/>
    <!-- Triángulo de agua (▽): invertido, superpuesto -->
    <polygon points="50,70 38,52 62,52" fill="none" stroke="currentColor" stroke-width="2" opacity="0.7"/>
    <!-- Hexagrama resultante (los dos triángulos superpuestos) — relleno muy sutil -->
    <polygon points="50,48 38,66 62,66" fill="currentColor" opacity="0.1"/>
    <polygon points="50,70 38,52 62,52" fill="currentColor" opacity="0.1"/>
    <!-- Burbujas alquímicas -->
    <circle cx="36" cy="78" r="5.5" fill="rgba(255,255,255,0.12)" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <circle cx="64" cy="72" r="4" fill="rgba(255,255,255,0.1)" stroke="currentColor" stroke-width="1" opacity="0.4"/>
    <circle cx="44" cy="86" r="3" fill="rgba(255,255,255,0.08)"/>
    <!-- Highlight en el vidrio del matraz (luz refractada) -->
    <path d="M20,60 Q18,67 18,72 Q22,62 30,54 Z" fill="rgba(255,255,255,0.1)"/>
    <ellipse cx="28" cy="52" rx="4" ry="7" fill="rgba(255,255,255,0.07)" transform="rotate(-30 28 52)"/>
    <!-- Reflejo en el cuello del matraz -->
    <path d="M41,15 L41,36 L43,36 L43,15 Z" fill="rgba(255,255,255,0.1)"/>
  </svg>`,
};
