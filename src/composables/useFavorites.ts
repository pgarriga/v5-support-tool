import { ref, computed } from 'vue'
import { DISCIPLINES_DATA } from '../data'

const STORAGE_KEY_OLD = 'v5-mis-poderes'
const STORAGE_KEY     = 'v5-my-powers'

const VALID_KEYS = new Set<string>(
  DISCIPLINES_DATA.disciplines.flatMap(d => d.powers.map(p => `${d.id}:${p.id}`))
)

// Migrate old localStorage key if present
const oldRaw = localStorage.getItem(STORAGE_KEY_OLD)
if (oldRaw !== null) {
  if (!localStorage.getItem(STORAGE_KEY)) localStorage.setItem(STORAGE_KEY, oldRaw)
  localStorage.removeItem(STORAGE_KEY_OLD)
}

// Singleton: shared across all components
const favorites = ref<string[]>(loadFromStorage().filter(k => VALID_KEYS.has(k)))

function loadFromStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed: string[] = raw ? JSON.parse(raw) : []
    const valid = parsed.filter(k => VALID_KEYS.has(k))
    if (valid.length !== parsed.length) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(valid)) } catch { /* unavailable */ }
    }
    return valid
  } catch {
    return []
  }
}

function save(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
  } catch { /* unavailable */ }
}

export function useFavorites() {
  function toggle(disciplineId: string, powerId: string) {
    const key = `${disciplineId}:${powerId}`
    const idx = favorites.value.indexOf(key)
    if (idx >= 0) {
      favorites.value.splice(idx, 1)
    } else {
      favorites.value.push(key)
    }
    save()
  }

  function isFavorite(disciplineId: string, powerId: string): boolean {
    return favorites.value.includes(`${disciplineId}:${powerId}`)
  }

  function clearAll(): void {
    favorites.value = []
    save()
  }

  const favoriteCount = computed(() => favorites.value.filter(k => VALID_KEYS.has(k)).length)

  return { favorites, favoriteCount, toggle, isFavorite, clearAll }
}
