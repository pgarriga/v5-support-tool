// ══════════════════════════════════════════════
// VAMPIRO V5 · DISCIPLINAS — Vue 3 + Vue Router
// ══════════════════════════════════════════════

const { createApp, ref, computed, defineComponent } = Vue;
const { createRouter, createWebHashHistory, useRoute, useRouter } = VueRouter;

// ─── Helpers ────────────────────────────────────────────
function levelDots(level, max = 5) {
  return Array.from({ length: max }, (_, i) => i < level);
}

function disciplineById(id) {
  return DISCIPLINES_DATA.disciplines.find(d => d.id === id);
}

function powerById(disc, powerId) {
  return disc?.powers.find(p => p.id === powerId);
}

function shortCost(cost) {
  if (!cost || cost === 'Ninguno') return 'Ninguno';
  if (cost.toLowerCase().includes('ninguno')) return 'Ninguno';
  if (cost.toLowerCase().includes('dos controles')) return '2× Enardecimiento';
  if (cost.toLowerCase().includes('un control')) return '1× Enardecimiento';
  if (cost.toLowerCase().includes('uno o más')) return '1+ Enardecimiento';
  return cost.length > 60 ? cost.substring(0, 58) + '…' : cost;
}

function shortDuration(dur) {
  if (!dur || dur === 'N/A') return null;
  const d = dur.toLowerCase();
  if (d.startsWith('pasiva')) return 'Pasiva';
  if (d === 'indefinida') return 'Indefinida';
  if (d.startsWith('una escena') || d.startsWith('no más de una escena') || d.startsWith('una sola escena')) return 'Una escena';
  if (d.startsWith('el veneno')) return 'Una escena';
  if (d.startsWith('hasta que concluye la escena') || d.startsWith('hasta fin de')) return 'Hasta fin de escena';
  if (d.startsWith('un turno, a menos')) return 'Un turno (+sostenido)';
  if (d.startsWith('un turno')) return 'Un turno';
  if (d.startsWith('un uso')) return 'Un uso';
  if (d.startsWith('un solo ataque')) return 'Un ataque';
  if (d.startsWith('aproximadamente una acción')) return 'Una acción';
  if (d.startsWith('aproximadamente un minuto')) return '1 min / Enardecimiento';
  if (d.startsWith('una alimentación') || d.startsWith('una alimentacion')) return 'Una alimentación';
  if (d.startsWith('una hora')) return 'Una hora (+margen)';
  if (d.startsWith('una noche')) return 'Una noche';
  if (d.startsWith('unos minutos')) return 'Minutos / hasta una noche';
  if (d.startsWith('un día') || d.startsWith('un dia')) return 'Un día o más';
  if (d.includes('muerte')) return 'Hasta la muerte';
  if (d.startsWith('el tiempo')) return 'A voluntad';
  if (d.startsWith('como el poder')) return 'Como el poder base';
  if (d.startsWith('según') || d.startsWith('segun')) return 'Según el poder';
  if (d.startsWith('la duración') || d.startsWith('la duracion')) return 'Duración del Frenesí';
  if (d.startsWith('hasta que se desactive')) return 'Hasta que se desactive';
  if (d.startsWith('hasta que se resista')) return 'Hasta que se resista';
  if (d.startsWith('hasta que se ejecuta')) return 'Hasta ejecutarse';
  if (d.startsWith('hasta que termine')) return 'Hasta que termine';
  if (d.startsWith('permanente')) return 'Permanente (reversible)';
  return dur.length > 28 ? dur.substring(0, 26) + '…' : dur;
}

function artGradient(discipline) {
  const c = discipline.color || '#4a2a6a';
  const cd = discipline.colorDark || '#1a0a2a';
  return `linear-gradient(145deg, ${cd} 0%, ${c}55 50%, ${cd} 100%)`;
}

// ─── VISTA: Home ────────────────────────────────────────
const HomeView = defineComponent({
  setup() {
    const search = ref('');
    const router = useRouter();

    const disciplines = computed(() => {
      const q = search.value.toLowerCase().trim();
      if (!q) return DISCIPLINES_DATA.disciplines;
      return DISCIPLINES_DATA.disciplines.filter(d =>
        d.name.toLowerCase().includes(q) ||
        (d.clanes || []).some(c => c.toLowerCase().includes(q)) ||
        (d.tipo || '').toLowerCase().includes(q)
      );
    });

    function goTo(id) { router.push(`/disciplina/${id}`); }

    return { search, disciplines, goTo, artGradient, DISCIPLINE_ICONS };
  },
  template: `
    <div class="min-h-screen bg-void text-parchment font-body">

      <!-- ── Header ── -->
      <header class="relative text-center px-4 pt-12 pb-8 overflow-hidden"
              style="background: linear-gradient(180deg,#1a0808 0%,#0d0b14 100%); border-bottom: 1px solid #3a1010;">
        <div class="absolute inset-0 pointer-events-none"
             style="background: radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,0,0,0.15) 0%, transparent 70%);"></div>

        <h1 class="font-title font-black tracking-widest uppercase leading-tight"
            style="font-size: clamp(1.8rem,5vw,3.2rem); color:#fff; text-shadow: 0 0 30px rgba(139,0,0,0.8), 0 2px 4px rgba(0,0,0,0.8);">
          Disciplinas
        </h1>
        <p class="text-parchment-dim tracking-widest uppercase text-sm mt-2">
          Vampiro: La Mascarada · 5ª Edición
        </p>

        <!-- Blood drips -->
        <div class="flex justify-center gap-10 mt-4">
          <div class="blood-drip"></div>
          <div class="blood-drip"></div>
          <div class="blood-drip"></div>
          <div class="blood-drip"></div>
          <div class="blood-drip"></div>
        </div>
      </header>

      <!-- ── Search ── -->
      <div class="max-w-sm sm:max-w-md mx-auto px-4 pt-5 pb-1">
        <input
          v-model="search"
          class="search-input"
          type="text"
          placeholder="Buscar disciplina o clan…"
          autocomplete="off"
          aria-label="Buscar disciplina o clan"
        />
      </div>

      <!-- ── Disciplines grid ── -->
      <main v-if="disciplines.length"
            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5
                   gap-3 sm:gap-5
                   px-3 sm:px-5 md:px-6
                   py-5 pb-16
                   max-w-content mx-auto">

        <article
          v-for="d in disciplines"
          :key="d.id"
          class="discipline-card flex flex-col"
          :style="{ '--card-color': d.color, '--card-glow': d.colorGlow }"
          @click="goTo(d.id)"
          @keydown.enter.prevent="goTo(d.id)"
          @keydown.space.prevent="goTo(d.id)"
          tabindex="0"
          role="button"
          :aria-label="d.name + ' — ' + (d.tipo || 'Disciplina') + ', ' + d.powers.length + ' poderes'"
        >
          <!-- Art -->
          <div class="discipline-card-art h-36 xs:h-44 sm:h-48"
               :style="{ background: artGradient(d) }" aria-hidden="true">
            <div v-html="DISCIPLINE_ICONS[d.iconType]"
                 :style="{ color: d.color }"
                 class="relative z-10 w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 flex items-center justify-center"></div>
            <div class="art-overlay"></div>
          </div>

          <!-- Body -->
          <div class="flex flex-col gap-1 p-2.5 xs:p-3 sm:p-4 flex-1">
            <h2 class="font-title font-bold tracking-wide text-white leading-tight
                       text-sm xs:text-sm sm:text-base">
              {{ d.name }}
            </h2>

            <div class="flex flex-wrap gap-1 mt-0.5">
              <span class="badge badge-tipo">{{ d.tipo || 'Disciplina' }}</span>
              <span class="badge badge-clanes hidden xs:inline-block" v-if="d.clanes && d.clanes.length">
                {{ d.clanes.join(' · ') }}
              </span>
            </div>

            <p class="text-parchment-dim italic leading-snug mt-1 hidden sm:block"
               style="font-size:0.85rem;">
              <strong class="text-gold not-italic">Resonancia:</strong>
              {{ d.resonancia }}
            </p>

            <div class="mt-auto pt-1 text-sm opacity-80"
                 :style="{ color: d.color }">
              {{ d.powers.length }} poderes
            </div>
          </div>
        </article>
      </main>

      <!-- Empty state -->
      <div v-else class="text-center py-20 px-4 text-parchment-dim">
        <div class="text-5xl mb-4 opacity-40">🩸</div>
        <p>No se encontraron disciplinas para «{{ search }}»</p>
      </div>
    </div>
  `
});

// ─── VISTA: Discipline ───────────────────────────────────
const DisciplineView = defineComponent({
  setup() {
    const route  = useRoute();
    const router = useRouter();

    const discipline = computed(() => disciplineById(route.params.id));

    function goBack()     { router.push('/'); }
    function goPower(pid) { router.push(`/disciplina/${route.params.id}/poder/${pid}`); }

    return { discipline, goBack, goPower, levelDots, shortCost, shortDuration, artGradient, DISCIPLINE_ICONS };
  },
  template: `
    <div class="min-h-screen bg-void text-parchment font-body" v-if="discipline">

      <!-- ── Nav ── -->
      <nav class="flex items-center gap-2 flex-wrap
                  px-3 sm:px-5 py-3
                  text-sm text-parchment-dim
                  border-b border-void-border">
        <button class="back-btn" @click="goBack">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Disciplinas
        </button>
        <span class="text-parchment-faint">›</span>
        <span class="text-parchment">{{ discipline.name }}</span>
      </nav>

      <!-- ── Discipline header ── -->
      <header class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start
                     px-4 sm:px-6 py-6 sm:py-8
                     max-w-content mx-auto
                     border-b border-void-border"
              :style="{ '--card-color': discipline.color, '--card-glow': discipline.colorGlow }">

        <!-- Icon -->
        <div class="discipline-page-icon w-24 h-24 sm:w-32 sm:h-32 shrink-0"
             :style="{ background: artGradient(discipline) }">
          <div v-html="DISCIPLINE_ICONS[discipline.iconType]"
               :style="{ color: discipline.color }"
               class="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center"></div>
        </div>

        <!-- Info -->
        <div class="text-center sm:text-left w-full">
          <h1 class="font-title font-bold tracking-wide text-white mb-2"
              style="font-size: clamp(1.5rem,4vw,2.4rem);"
              :style="{ textShadow: '0 0 20px ' + discipline.colorGlow }">
            {{ discipline.name }}
          </h1>
          <p class="text-parchment-dim italic mb-4 max-w-2xl text-base sm:text-lg leading-relaxed">
            {{ discipline.description }}
          </p>

          <!-- Stats -->
          <div class="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-sm">
            <div v-if="discipline.tipo" class="flex flex-col gap-0.5">
              <span class="text-gold uppercase tracking-widest text-sm font-semibold">Tipo</span>
              <span class="text-parchment">{{ discipline.tipo }}</span>
            </div>
            <div v-if="discipline.amenaza" class="flex flex-col gap-0.5">
              <span class="text-gold uppercase tracking-widest text-sm font-semibold">Amenaza</span>
              <span class="text-parchment">{{ discipline.amenaza }}</span>
            </div>
            <div v-if="discipline.resonancia" class="flex flex-col gap-0.5">
              <span class="text-gold uppercase tracking-widest text-sm font-semibold">Resonancia</span>
              <span class="text-parchment">{{ discipline.resonancia }}</span>
            </div>
            <div v-if="discipline.clanes && discipline.clanes.length" class="flex flex-col gap-0.5">
              <span class="text-gold uppercase tracking-widest text-sm font-semibold">Clanes</span>
              <span class="text-parchment">{{ discipline.clanes.join(', ') }}</span>
            </div>
          </div>
        </div>
      </header>

      <!-- ── Powers grid ── -->
      <section class="px-3 sm:px-5 md:px-6 py-5 pb-16 max-w-content mx-auto">
        <div class="text-parchment-dim uppercase tracking-widest text-sm font-semibold mb-4">
          Poderes · {{ discipline.powers.length }} disponibles
        </div>

        <div class="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
                    gap-3 sm:gap-4">
          <article
            v-for="power in discipline.powers"
            :key="power.id"
            class="power-card flex flex-col"
            :style="{ '--card-color': discipline.color, '--card-glow': discipline.colorGlow }"
            @click="goPower(power.id)"
            @keydown.enter.prevent="goPower(power.id)"
            @keydown.space.prevent="goPower(power.id)"
            tabindex="0"
            role="button"
            :aria-label="power.name + ', Nivel ' + power.level + (power.cost && power.cost !== 'Ninguno' ? ', Coste: ' + power.cost : '')"
          >
            <!-- Card art -->
            <div class="power-card-art h-28 xs:h-36 sm:h-40"
                 :style="{ background: artGradient(discipline) }" aria-hidden="true">
              <div v-html="DISCIPLINE_ICONS[discipline.iconType]"
                   :style="{ color: discipline.color }"
                   class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative z-10 opacity-85"></div>

              <div class="power-level-badge">Nivel {{ power.level }}</div>

              <div class="power-level-dots-card">
                <span v-for="(filled, i) in levelDots(power.level)" :key="i"
                      class="power-dot" :class="{ filled }"></span>
              </div>

              <div class="art-overlay" style="background: linear-gradient(180deg, transparent 30%, #13101e 100%);"></div>
            </div>

            <!-- Card body -->
            <div class="flex flex-col gap-1 p-2 xs:p-2.5 sm:p-3 flex-1">
              <h3 class="font-title font-bold text-white leading-tight
                         text-sm xs:text-sm">
                {{ power.name }}
              </h3>
              <p class="text-sm text-parchment-dim">
                <strong class="text-gold">Coste:</strong> {{ shortCost(power.cost) }}
              </p>
              <p class="text-sm text-parchment-dim" v-if="shortDuration(power.duration)">
                <strong class="text-gold">Duración:</strong> {{ shortDuration(power.duration) }}
              </p>
              <p class="text-sm text-parchment-dim italic leading-snug mt-auto
                        hidden xs:line-clamp-3 xs:block">
                {{ power.description }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>

    <!-- Not found -->
    <div v-else class="min-h-screen bg-void text-parchment-dim flex flex-col items-center justify-center gap-4 p-8">
      <div class="text-5xl opacity-40">⚰️</div>
      <p>Disciplina no encontrada.</p>
      <button class="back-btn" @click="$router.push('/')">Volver al inicio</button>
    </div>
  `
});

// ─── VISTA: Power Detail ─────────────────────────────────
const PowerView = defineComponent({
  setup() {
    const route  = useRoute();
    const router = useRouter();

    const discipline = computed(() => disciplineById(route.params.id));
    const power      = computed(() => powerById(discipline.value, route.params.powerId));

    function goBack() { router.push(`/disciplina/${route.params.id}`); }

    return { discipline, power, goBack, levelDots, artGradient, DISCIPLINE_ICONS };
  },
  template: `
    <div class="min-h-screen bg-void text-parchment font-body" v-if="discipline && power">

      <!-- ── Nav ── -->
      <nav class="flex items-center gap-2 flex-wrap
                  px-3 sm:px-5 py-3
                  text-sm text-parchment-dim
                  border-b border-void-border">
        <button class="back-btn" @click="goBack">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          {{ discipline.name }}
        </button>
        <span class="text-parchment-faint">›</span>
        <span class="text-parchment truncate">{{ power.name }}</span>
      </nav>

      <!-- ── Card ── -->
      <div class="max-w-2xl mx-auto px-3 sm:px-5 py-5 pb-20">
        <div class="power-detail-card"
             :style="{ '--card-color': discipline.color, '--card-glow': discipline.colorGlow, border: '1px solid ' + discipline.color + '55' }">

          <!-- Art header -->
          <div class="power-detail-art h-52 sm:h-64 md:h-72"
               :style="{ background: artGradient(discipline) }">

            <div class="power-detail-level-dots">
              <span v-for="(filled, i) in levelDots(power.level)" :key="i"
                    class="power-dot" :class="{ filled }"
                    style="width:13px;height:13px;"></span>
            </div>

            <div v-html="DISCIPLINE_ICONS[discipline.iconType]"
                 :style="{ color: discipline.color }"
                 class="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center relative z-10"></div>

            <div class="power-detail-discipline-tag">
              <span>{{ discipline.name }}</span>
              <span class="opacity-40">·</span>
              <span>Nivel {{ power.level }}</span>
            </div>

            <div class="power-detail-art-overlay"></div>
          </div>

          <!-- Content -->
          <div class="px-4 sm:px-8 py-6 sm:py-8">

            <h1 class="font-title font-bold text-white text-center tracking-wide mb-6"
                style="font-size: clamp(1.3rem,4vw,2rem);"
                :style="{ textShadow: '0 0 20px ' + discipline.colorGlow }">
              {{ power.name }}
            </h1>

            <!-- Stats -->
            <div class="rounded-md overflow-hidden border border-void-border mb-6">
              <div class="power-stat-row" v-if="power.cost">
                <span class="text-gold uppercase tracking-widest text-sm font-semibold pt-0.5">Coste</span>
                <span class="text-parchment text-sm sm:text-base leading-snug">{{ power.cost }}</span>
              </div>
              <div class="power-stat-row" v-if="power.dicePool && power.dicePool !== 'N/A'">
                <span class="text-gold uppercase tracking-widest text-sm font-semibold pt-0.5">Reserva de dados</span>
                <span class="text-parchment text-sm sm:text-base leading-snug">{{ power.dicePool }}</span>
              </div>
              <div class="power-stat-row" v-if="power.duration && power.duration !== 'N/A' && power.duration !== 'Pasiva'">
                <span class="text-gold uppercase tracking-widest text-sm font-semibold pt-0.5">Duración</span>
                <span class="text-parchment text-sm sm:text-base leading-snug">{{ power.duration }}</span>
              </div>
              <div class="power-stat-row" v-if="discipline.tipo">
                <span class="text-gold uppercase tracking-widest text-sm font-semibold pt-0.5">Tipo</span>
                <span class="text-parchment text-sm sm:text-base">{{ discipline.tipo }}</span>
              </div>
            </div>

            <!-- Divider -->
            <div class="ornament-divider my-5">✦ ✦ ✦</div>

            <!-- Description -->
            <p class="text-parchment leading-relaxed text-base sm:text-lg font-light"
               v-if="power.description">
              {{ power.description }}
            </p>

            <!-- Amalgama note -->
            <div class="amalgama-note mt-5" v-if="power.amalgama">
              <strong>Poder Amalgama:</strong> {{ power.amalgama }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Not found -->
    <div v-else class="min-h-screen bg-void text-parchment-dim flex flex-col items-center justify-center gap-4 p-8">
      <div class="text-5xl opacity-40">⚰️</div>
      <p>Poder no encontrado.</p>
      <button class="back-btn" @click="$router.push('/')">Volver al inicio</button>
    </div>
  `
});

// ─── ROUTER ──────────────────────────────────────────────
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',                                component: HomeView       },
    { path: '/disciplina/:id',                  component: DisciplineView },
    { path: '/disciplina/:id/poder/:powerId',   component: PowerView      },
    { path: '/:pathMatch(.*)*',                 redirect: '/'             },
  ],
  scrollBehavior() { return { top: 0 }; }
});

// ─── APP ─────────────────────────────────────────────────
const app = createApp({
  template: `
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  `
});

app.use(router);
app.mount('#app');
