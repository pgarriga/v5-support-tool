import { ref } from 'vue'

const NOTES_KEY = 'v5-notes'

function loadNotes(): Record<string, string> {
  try {
    const raw = localStorage.getItem(NOTES_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch { return {} }
}

const notes = ref<Record<string, string>>(loadNotes())

function saveNotes(): void {
  try { localStorage.setItem(NOTES_KEY, JSON.stringify(notes.value)) } catch { /* unavailable */ }
}

export function useNotes() {
  function getNote(disciplineId: string, powerId: string): string {
    return notes.value[`${disciplineId}:${powerId}`] ?? ''
  }

  function setNote(disciplineId: string, powerId: string, text: string): void {
    const key = `${disciplineId}:${powerId}`
    if (text.trim()) {
      notes.value[key] = text
    } else {
      delete notes.value[key]
    }
    saveNotes()
  }

  return { getNote, setNote }
}
