<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFavorites } from './composables/useFavorites'

const route   = useRoute()
const router  = useRouter()
const { favorites } = useFavorites()

const isHome       = computed(() => route.path === '/' || route.path.startsWith('/disciplina'))
const isMisPoderes = computed(() => route.path === '/mis-poderes')

// Cerrar el navbar al navegar
watch(() => route.path, () => {
  const nav = document.getElementById('mainNav')
  if (nav && nav.classList.contains('show')) {
    const toggler = document.querySelector('.navbar-toggler') as HTMLElement | null
    toggler?.click()
  }
})
</script>

<template>
  <nav class="navbar navbar-expand-md app-navbar sticky-top">
    <div class="container-fluid px-3 px-sm-4">

      <!-- Brand -->
      <a class="navbar-brand app-navbar-brand font-title" href="#/" @click.prevent="router.push('/')">
        V5 Support Tool
      </a>

      <!-- Toggler -->
      <button class="navbar-toggler app-navbar-toggler" type="button"
              data-bs-toggle="collapse" data-bs-target="#mainNav"
              aria-controls="mainNav" aria-expanded="false" aria-label="Menú">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto gap-1 py-2 py-md-0">

          <li class="nav-item">
            <a class="nav-link app-nav-link" :class="{ active: isHome }"
               href="#/" @click.prevent="router.push('/')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16" class="me-1">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
              </svg>
              Disciplinas
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link app-nav-link" :class="{ active: isMisPoderes }"
               href="#/mis-poderes" @click.prevent="router.push('/mis-poderes')">
              <svg viewBox="0 0 24 24" width="16" height="16" class="me-1"
                   :fill="isMisPoderes ? 'currentColor' : 'none'"
                   stroke="currentColor" stroke-width="1.5">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
              </svg>
              Mis Poderes
              <span v-if="favorites.length" class="app-nav-badge ms-1">{{ favorites.length }}</span>
            </a>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
