import { ref, computed, watch } from 'vue'

export type Theme = 'auto' | 'dark' | 'light'
export type Lang  = 'auto' | 'es'  | 'en'

const IBERIAN = /^(es|ca|gl|eu|pt)/i

// ── Singleton ─────────────────────────────────────────────
const theme = ref<Theme>((localStorage.getItem('v5-theme') as Theme) || 'auto')
const lang  = ref<Lang> ((localStorage.getItem('v5-lang')  as Lang)  || 'auto')

const resolvedLang = computed<'es' | 'en'>(() =>
  lang.value !== 'auto'
    ? lang.value
    : IBERIAN.test(navigator.language) ? 'es' : 'en'
)

function applyTheme(t: Theme) {
  const resolved = t === 'auto'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : t
  document.documentElement.setAttribute('data-theme', resolved)
}

watch(theme, (t) => { applyTheme(t); localStorage.setItem('v5-theme', t) }, { immediate: true })
watch(lang,  (l) => { localStorage.setItem('v5-lang', l) })

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (theme.value === 'auto') applyTheme('auto')
})

export function useSettings() {
  return { theme, lang, resolvedLang }
}
