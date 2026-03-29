<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { DISCIPLINE_ICONS } from '../icons'
import { useFavorites } from '../composables/useFavorites'
import { useI18n } from '../composables/useI18n'
import { useData } from '../composables/useData'
import { artGradient, levelDots, shortCost } from '../helpers'

const router = useRouter()
const { isFavorite, toggle } = useFavorites()
const { t } = useI18n()
const { disciplines } = useData()

const groupedPowers = computed(() => {
  return disciplines.value
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

function powerCountLabel(n: number): string {
  return `${n} ${n !== 1 ? t.value.myPowers.powers : t.value.myPowers.power}`
}
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment">

    <!-- ── Header ── -->
    <header class="page-header text-center px-4 pt-5 pb-4 position-relative overflow-hidden">
      <div class="position-absolute top-0 start-0 w-100 h-100 pe-none"
           style="background: radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,0,0,0.15) 0%, transparent 70%);"></div>
      <h1 class="font-title fw-black tracking-widest text-uppercase lh-sm position-relative page-title-main"
          style="font-size: clamp(1.4rem,4vw,2.4rem);">
        {{ t.myPowers.title }}
      </h1>
    </header>

    <!-- ── Empty state ── -->
    <div v-if="!groupedPowers.length"
         class="d-flex flex-column align-items-center justify-content-center gap-3 p-5 text-center"
         style="min-height: 50vh;">
      <div class="star-empty-icon">★</div>
      <p class="text-parchment-dim mb-1">{{ t.myPowers.empty }}</p>
      <p class="text-parchment-faint small mb-0">{{ t.myPowers.emptyHint }}</p>
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
            {{ powerCountLabel(group.powers.length) }}
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
                <div class="power-level-badge">{{ t.discipline.level }} {{ power.level }}</div>
                <div class="power-level-dots-card">
                  <span v-for="(filled, i) in levelDots(power.level)" :key="i"
                        class="power-dot" :class="{ filled }"></span>
                </div>
                <div class="art-overlay" :style="{ background: 'linear-gradient(180deg, transparent 30%, var(--void-card) 100%)' }"></div>
                <button class="star-btn star-btn--filled"
                        @click.stop="toggle(group.discipline.id, power.id)"
                        :title="t.myPowers.removeFromFav"
                        :aria-label="t.myPowers.removeFromFav">★</button>
              </div>
              <!-- Body -->
              <div class="d-flex flex-column gap-1 p-2 p-sm-3 flex-fill">
                <h3 class="font-title fw-bold text-white leading-tight mb-0" style="font-size:0.88rem;">
                  {{ power.name }}
                </h3>
                <p class="small text-parchment-dim mb-0">
                  <strong class="text-gold">{{ t.myPowers.cost }}:</strong> {{ shortCost(power.cost) }}
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
