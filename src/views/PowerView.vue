<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DISCIPLINE_ICONS } from '../icons'
import { powerById, levelDots, artGradient, parseAmalgama } from '../helpers'
import { useI18n } from '../composables/useI18n'
import { useData } from '../composables/useData'
import { useNotes } from '../composables/useNotes'
import { useFavorites } from '../composables/useFavorites'

const route  = useRoute()
const router = useRouter()
const { t } = useI18n()
const { disciplineById, disciplines } = useData()
const { getNote, setNote } = useNotes()
const { isFavorite, toggle } = useFavorites()

const discipline = computed(() => disciplineById(route.params['id'] as string))
const power      = computed(() => powerById(discipline.value, route.params['powerId'] as string))

const noteText = ref('')

watch(
  [discipline, power],
  ([disc, pow]) => {
    if (disc && pow) noteText.value = getNote(disc.id, pow.id)
  },
  { immediate: true },
)

function onNoteInput(e: Event) {
  const text = (e.target as HTMLTextAreaElement).value
  noteText.value = text
  if (discipline.value && power.value) {
    setNote(discipline.value.id, power.value.id, text)
  }
}

const amalgamaSegments = computed(() => {
  const text = power.value?.amalgama
  if (!text) return []
  return parseAmalgama(text, disciplines.value)
})

function goBack(): void {
  if (route.query['from'] === 'my-powers') router.push('/my-powers')
  else router.push(`/discipline/${route.params['id']}`)
}
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment" v-if="discipline && power">

    <!-- ── Nav ── -->
    <nav class="d-flex align-items-center flex-wrap gap-2 px-3 px-sm-4 py-3 border-bottom border-void-border"
         style="font-size:.9rem;">
      <button class="back-btn" @click="goBack">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        {{ route.query['from'] === 'my-powers' ? t.myPowers.title : discipline.name }}
      </button>
      <span class="text-parchment-faint">›</span>
      <span class="text-parchment text-truncate">{{ power.name }}</span>
    </nav>

    <!-- ── Card ── -->
    <div class="mx-auto px-3 px-sm-4 py-4 pb-5" style="max-width: 42rem;">
      <div class="power-detail-card"
           :style="{ '--card-color': discipline.color, '--card-glow': discipline.colorGlow, border: '1px solid ' + discipline.color + '55' }">

        <!-- Art header -->
        <div class="power-detail-art"
             :style="{ background: artGradient(discipline) }"
             aria-hidden="true">

          <div class="power-detail-level-dots">
            <span v-for="(filled, i) in levelDots(power.level)" :key="i"
                  class="power-dot" :class="{ filled }"
                  style="width:13px;height:13px;"></span>
          </div>

          <div v-html="DISCIPLINE_ICONS[discipline.iconType]"
               :style="{ color: discipline.color }"
               class="power-detail-icon"></div>

          <div class="power-detail-discipline-tag">
            <span>{{ discipline.name }}</span>
            <span style="opacity:.4;">·</span>
            <span>{{ t.power.level }} {{ power.level }}</span>
          </div>

          <div class="power-detail-art-overlay"></div>
        </div>

        <button class="star-btn star-btn--detail"
                :class="{ 'star-btn--filled': isFavorite(discipline.id, power.id) }"
                @click="toggle(discipline.id, power.id)"
                :title="isFavorite(discipline.id, power.id) ? t.discipline.removeFromFav : t.discipline.addToFav"
                :aria-label="isFavorite(discipline.id, power.id) ? t.discipline.removeFromFav : t.discipline.addToFav">★</button>

        <!-- Content -->
        <div class="px-3 px-sm-4 px-md-5 py-4 py-sm-5">

          <h1 class="font-title fw-bold text-white text-center tracking-wide mb-4"
              style="font-size: clamp(1.3rem,4vw,2rem);"
              :style="{ textShadow: '0 0 20px ' + discipline.colorGlow }">
            {{ power.name }}
          </h1>

          <!-- Stats table -->
          <div class="pst">
            <div v-if="power.cost" class="pst-row">
              <div class="pst-key">{{ t.power.cost }}</div>
              <div class="pst-val">{{ power.cost }}</div>
            </div>
            <div v-if="power.dicePool && power.dicePool !== 'N/A'" class="pst-row">
              <div class="pst-key">{{ t.power.dicePool }}</div>
              <div class="pst-val">{{ power.dicePool }}</div>
            </div>
            <div v-if="power.duration && power.duration !== 'N/A' && power.duration !== 'Pasiva'" class="pst-row">
              <div class="pst-key">{{ t.power.duration }}</div>
              <div class="pst-val">{{ power.duration }}</div>
            </div>
            <div v-if="discipline.tipo" class="pst-row">
              <div class="pst-key">{{ t.power.type }}</div>
              <div class="pst-val">{{ discipline.tipo }}</div>
            </div>
          </div>

          <!-- Ornament divider -->
          <div class="ornament-divider my-4">✦ ✦ ✦</div>

          <!-- Description -->
          <p class="text-parchment leading-relaxed mb-0" style="font-size:1.1rem; font-weight:300;"
             v-if="power.description">
            {{ power.description }}
          </p>

          <!-- Amalgama note with links -->
          <div class="amalgama-note mt-4" v-if="power.amalgama">
            <strong>{{ t.power.amalgam }}:</strong>
            <template v-for="(seg, i) in amalgamaSegments" :key="i">
              <router-link
                v-if="seg.disciplineId"
                :to="`/discipline/${seg.disciplineId}`"
                class="amalgama-link"
              >{{ seg.text }}</router-link>
              <span v-else>{{ seg.text }}</span>
            </template>
          </div>

          <!-- Notes -->
          <div class="power-notes">
            <div class="power-notes-label">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              {{ t.power.notes }}
              <span class="power-notes-hint">{{ t.power.notesHint }}</span>
            </div>
            <textarea
              class="power-notes-textarea"
              :placeholder="t.power.notesPlaceholder"
              :value="noteText"
              @input="onNoteInput"
              rows="3"
            ></textarea>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div v-else class="min-vh-100 bg-void text-parchment-dim d-flex flex-column align-items-center justify-content-center gap-3 p-5">
    <div class="fs-1" style="opacity:.4;">⚰️</div>
    <p>{{ t.power.notFound }}</p>
    <button class="back-btn" @click="$router.push('/')">{{ t.power.backHome }}</button>
  </div>
</template>
