import { ref } from 'vue'

const STORAGE_KEY = 'v5-mis-poderes'

// Singleton: compartido entre todos los componentes
const favorites = ref<string[]>(loadFromStorage())

function loadFromStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
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

  return { favorites, toggle, isFavorite }
}
