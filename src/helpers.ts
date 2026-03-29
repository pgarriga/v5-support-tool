import type { Discipline, Power } from './types'
import { DISCIPLINES_DATA } from './data'

export function levelDots(level: number, max = 5): boolean[] {
  return Array.from({ length: max }, (_, i) => i < level)
}

export function disciplineById(id: string): Discipline | undefined {
  return DISCIPLINES_DATA.disciplines.find(d => d.id === id)
}

export function powerById(disc: Discipline | undefined, powerId: string): Power | undefined {
  return disc?.powers.find(p => p.id === powerId)
}

export function shortCost(cost: string): string {
  if (!cost || cost === 'Ninguno') return 'Ninguno'
  if (cost.toLowerCase().includes('ninguno')) return 'Ninguno'
  if (cost.toLowerCase().includes('dos controles')) return '2× Enardecimiento'
  if (cost.toLowerCase().includes('un control')) return '1× Enardecimiento'
  if (cost.toLowerCase().includes('uno o más')) return '1+ Enardecimiento'
  return cost.length > 60 ? cost.substring(0, 58) + '…' : cost
}

export function shortDuration(dur: string): string | null {
  if (!dur || dur === 'N/A') return null
  const d = dur.toLowerCase()
  if (d.startsWith('pasiva')) return 'Pasiva'
  if (d === 'indefinida') return 'Indefinida'
  if (d.startsWith('una escena') || d.startsWith('no más de una escena') || d.startsWith('una sola escena')) return 'Una escena'
  if (d.startsWith('el veneno')) return 'Una escena'
  if (d.startsWith('hasta que concluye la escena') || d.startsWith('hasta fin de')) return 'Hasta fin de escena'
  if (d.startsWith('un turno, a menos')) return 'Un turno (+sostenido)'
  if (d.startsWith('un turno')) return 'Un turno'
  if (d.startsWith('un uso')) return 'Un uso'
  if (d.startsWith('un solo ataque')) return 'Un ataque'
  if (d.startsWith('aproximadamente una acción')) return 'Una acción'
  if (d.startsWith('aproximadamente un minuto')) return '1 min / Enardecimiento'
  if (d.startsWith('una alimentación') || d.startsWith('una alimentacion')) return 'Una alimentación'
  if (d.startsWith('una hora')) return 'Una hora (+margen)'
  if (d.startsWith('una noche')) return 'Una noche'
  if (d.startsWith('unos minutos')) return 'Minutos / hasta una noche'
  if (d.startsWith('un día') || d.startsWith('un dia')) return 'Un día o más'
  if (d.includes('muerte')) return 'Hasta la muerte'
  if (d.startsWith('el tiempo')) return 'A voluntad'
  if (d.startsWith('como el poder')) return 'Como el poder base'
  if (d.startsWith('según') || d.startsWith('segun')) return 'Según el poder'
  if (d.startsWith('la duración') || d.startsWith('la duracion')) return 'Duración del Frenesí'
  if (d.startsWith('hasta que se desactive')) return 'Hasta que se desactive'
  if (d.startsWith('hasta que se resista')) return 'Hasta que se resista'
  if (d.startsWith('hasta que se ejecuta')) return 'Hasta ejecutarse'
  if (d.startsWith('hasta que termine')) return 'Hasta que termine'
  if (d.startsWith('permanente')) return 'Permanente (reversible)'
  return dur.length > 28 ? dur.substring(0, 26) + '…' : dur
}

export function artGradient(discipline: Discipline): string {
  const c = discipline.color || '#4a2a6a'
  const cd = discipline.colorDark || '#1a0a2a'
  return `linear-gradient(145deg, ${cd} 0%, ${c}55 50%, ${cd} 100%)`
}
