import { People } from '@/interfaces/people'
import { render } from '@testing-library/react'
import Character from './Character'

const people: People = {
  name: 'Luke Skywalker',
  height: 172,
  mass: 77,
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/',
  ],
  species: [],
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/',
  ],
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/',
  ],
  created: new Date('2014-12-10T16:16:29.192000Z'),
  edited: new Date('2014-12-10T16:16:29.192000Z'),
  url: 'https://swapi.dev/api/people/1/',
}

describe('Character', () => {
  it('renders a component', () => {
    const { container } = render(<Character item={people} />)
    expect(container).toBeVisible()
  })
})
