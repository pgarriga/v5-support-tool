export type IconType =
  | 'wolf' | 'eye' | 'bolt' | 'crown' | 'shield'
  | 'ghost' | 'fist' | 'rose' | 'claws' | 'blood' | 'flask'

export interface Power {
  id: string
  name: string
  level: number
  cost: string
  dicePool: string
  duration: string
  description: string
  amalgama?: string
}

export interface Discipline {
  id: string
  name: string
  description: string
  tipo: string
  amenaza: string
  resonancia: string
  color: string
  colorDark: string
  colorGlow: string
  clanes: string[]
  iconType: IconType
  powers: Power[]
}

export interface DisciplinesData {
  disciplines: Discipline[]
}
