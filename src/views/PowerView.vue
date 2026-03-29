<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DISCIPLINE_ICONS } from '../icons'
import { powerById, levelDots, artGradient } from '../helpers'
import { useI18n } from '../composables/useI18n'
import { useData } from '../composables/useData'

const route  = useRoute()
const router = useRouter()
const { t } = useI18n()
const { disciplineById } = useData()

const discipline = computed(() => disciplineById(route.params['id'] as string))
const power      = computed(() => powerById(discipline.value, route.params['powerId'] as string))

function goBack(): void { router.push(`/disciplina/${route.params['id']}`) }
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
        {{ discipline.name }}
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
             :style="{ background: artGradient(discipline) }">

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

          <!-- Amalgama note -->
          <div class="amalgama-note mt-4" v-if="power.amalgama">
            <strong>{{ t.power.amalgam }}:</strong> {{ power.amalgama }}
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
