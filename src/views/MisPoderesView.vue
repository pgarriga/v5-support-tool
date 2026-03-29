<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { DISCIPLINES_DATA } from '../data'
import { DISCIPLINE_ICONS } from '../icons'
import { useFavorites } from '../composables/useFavorites'
import { artGradient, levelDots, shortCost } from '../helpers'

const router = useRouter()
const { isFavorite, toggle } = useFavorites()

const groupedPowers = computed(() => {
  return DISCIPLINES_DATA.disciplines
    .map(disc => ({
      discipline: disc,
      powers: disc.powers
        .filter(p => isFavorite(disc.id, p.id))
        .sort((a, b) => a.level - b.level),
    }))
    .filter(g => g.powers.length > 0)
})

const totalCount = computed(() =>
  groupedPowers.value.reduce((sum, g) => sum + g.powers.length, 0)
)

function goPower(discId: string, powerId: string) {
  router.push(`/disciplina/${discId}/poder/${powerId}`)
}
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment">

    <!-- ── Header ── -->
    <header class="text-center px-4 pt-5 pb-4 position-relative overflow-hidden"
            style="background: linear-gradient(180deg,#1a0808 0%,#0d0b14 100%); border-bottom: 1px solid #3a1010;">
      <div class="position-absolute top-0 start-0 w-100 h-100 pe-none"
           style="background: radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,0,0,0.15) 0%, transparent 70%);"></div>
      <h1 class="font-title fw-black tracking-widest text-uppercase lh-sm position-relative"
          style="font-size: clamp(1.4rem,4vw,2.4rem); color:#fff; text-shadow: 0 0 30px rgba(139,0,0,0.8), 0 2px 4px rgba(0,0,0,0.8);">
        Mis Poderes
      </h1>
    </header>

    <!-- ── Empty state ── -->
    <div v-if="!groupedPowers.length"
         class="d-flex flex-column align-items-center justify-content-center gap-3 p-5 text-center"
         style="min-height: 50vh;">
      <div class="star-empty-icon">★</div>
      <p class="text-parchment-dim mb-1">No tienes poderes guardados aún.</p>
      <p class="text-parchment-faint small mb-0">Usa la estrella en las cartas de poder para añadirlos aquí.</p>
    </div>

    <!-- ── Poderes agrupados por disciplina ── -->
    <div v-else class="px-3 px-sm-4 py-4 pb-5 max-content mx-auto">
      <div v-for="group in groupedPowers" :key="group.discipline.id" class="mb-5">

        <!-- Cabecera de disciplina -->
        <div class="d-flex align-items-center gap-3 mb-3 pb-2"
             :style="{ borderBottom: '1px solid ' + group.discipline.color + '55' }">
          <div class="disc-group-icon"
               :style="{ background: artGradient(group.discipline), border: '1px solid ' + group.discipline.color + '66' }">
            <div v-html="DISCIPLINE_ICONS[group.discipline.iconType]"
                 :style="{ color: group.discipline.color }"
                 style="width:1.4rem;height:1.4rem;display:flex;align-items:center;justify-content:center;"></div>
          </div>
          <h2 class="font-title fw-bold text-white mb-0"
              style="font-size:1.05rem;"
              :style="{ textShadow: '0 0 10px ' + group.discipline.colorGlow }">
            {{ group.discipline.name }}
          </h2>
          <span class="text-parchment-faint small ms-auto">
            {{ group.powers.length }} poder{{ group.powers.length !== 1 ? 'es' : '' }}
          </span>
        </div>

        <!-- Grid de cartas -->
        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-sm-3">
          <div class="col" v-for="power in group.powers" :key="power.id">
            <article
              class="power-card d-flex flex-column h-100"
              :style="{ '--card-color': group.discipline.color, '--card-glow': group.discipline.colorGlow }"
              @click="goPower(group.discipline.id, power.id)"
              @keydown.enter.prevent="goPower(group.discipline.id, power.id)"
              @keydown.space.prevent="goPower(group.discipline.id, power.id)"
              tabindex="0"
              role="button"
            >
              <!-- Art -->
              <div class="power-card-art"
                   :style="{ background: artGradient(group.discipline) }">
                <div v-html="DISCIPLINE_ICONS[group.discipline.iconType]"
                     :style="{ color: group.discipline.color }"
                     class="power-art-icon"></div>
                <div class="power-level-badge">Nivel {{ power.level }}</div>
                <div class="power-level-dots-card">
                  <span v-for="(filled, i) in levelDots(power.level)" :key="i"
                        class="power-dot" :class="{ filled }"></span>
                </div>
                <div class="art-overlay" style="background: linear-gradient(180deg, transparent 30%, #13101e 100%);"></div>
                <button class="star-btn star-btn--filled"
                        @click.stop="toggle(group.discipline.id, power.id)"
                        title="Quitar de Mis Poderes"
                        aria-label="Quitar de Mis Poderes">★</button>
              </div>
              <!-- Body -->
              <div class="d-flex flex-column gap-1 p-2 p-sm-3 flex-fill">
                <h3 class="font-title fw-bold text-white leading-tight mb-0" style="font-size:0.88rem;">
                  {{ power.name }}
                </h3>
                <p class="small text-parchment-dim mb-0">
                  <strong class="text-gold">Coste:</strong> {{ shortCost(power.cost) }}
                </p>
                <p class="small text-parchment-dim fst-italic leading-snug mt-auto mb-0 d-none d-sm-block line-clamp-3">
                  {{ power.description }}
                </p>
              </div>
            </article>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
