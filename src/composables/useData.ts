import { computed } from 'vue'
import { DISCIPLINES_DATA } from '../data'
import { EN, type DisciplineTranslation } from '../translations-en'
import { useSettings } from './useSettings'
import type { Discipline } from '../types'

function applyEnglish(disciplines: Discipline[]): Discipline[] {
  return disciplines.map(d => {
    const tr: DisciplineTranslation | undefined = EN[d.id as keyof typeof EN]
    if (!tr) return d
    return {
      ...d,
      name: tr.name,
      description: tr.description,
      tipo: tr.tipo,
      amenaza: tr.amenaza,
      resonancia: tr.resonancia,
      clanes: tr.clanes ?? d.clanes,
      powers: d.powers.map(p => {
        const pt = tr.powers[p.id]
        return pt ? { ...p, ...pt } : p
      }),
    }
  })
}

export function useData() {
  const { resolvedLang } = useSettings()

  const disciplines = computed<Discipline[]>(() =>
    resolvedLang.value === 'en'
      ? applyEnglish(DISCIPLINES_DATA.disciplines)
      : DISCIPLINES_DATA.disciplines
  )

  function disciplineById(id: string): Discipline | undefined {
    return disciplines.value.find(d => d.id === id)
  }

  return { disciplines, disciplineById }
}
