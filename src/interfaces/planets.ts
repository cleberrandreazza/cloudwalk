export interface Planet {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
  created: Date
  edited: Date
  url: string
  checked?: boolean
}

export interface PlanetResponse {
  count: number
  next: boolean
  previous: boolean
  results: Planet[]
}

export interface FilterItem {
  name: string
  homeWorld: string
  checked: boolean
}
