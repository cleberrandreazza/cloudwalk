import { People } from '@/interfaces/people'
import { fireEvent, render } from '@testing-library/react'
import Characters from './Characters'

const people: People[] = [
  {
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
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: ['https://swapi.dev/api/species/2/'],
    vehicles: [],
    starships: [],
    created: new Date('2014-12-10T16:16:29.192000Z'),
    edited: new Date('2014-12-10T16:16:29.192000Z'),
    url: 'https://swapi.dev/api/people/2/',
  },
  {
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.dev/api/planets/8/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: ['https://swapi.dev/api/species/2/'],
    vehicles: [],
    starships: [],
    created: new Date('2014-12-10T16:16:29.192000Z'),
    edited: new Date('2014-12-10T16:16:29.192000Z'),
    url: 'https://swapi.dev/api/people/3/',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: [],
    starships: ['https://swapi.dev/api/starships/13/'],
    created: new Date('2014-12-10T16:16:29.192000Z'),
    edited: new Date('2014-12-10T16:16:29.192000Z'),
    url: 'https://swapi.dev/api/people/4/',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
    homeworld: 'https://swapi.dev/api/planets/2/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: ['https://swapi.dev/api/vehicles/30/'],
    starships: [],
    created: new Date('2014-12-10T16:16:29.192000Z'),
    edited: new Date('2014-12-10T16:16:29.192000Z'),
    url: 'https://swapi.dev/api/people/5/',
  },
  {
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: [],
    starships: [],
    created: new Date('2014-12-10T16:16:29.192000Z'),
    edited: new Date('2014-12-10T16:16:29.192000Z'),
    url: 'https://swapi.dev/api/people/6/',
  },
  {
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: [],
    starships: [],
    created: new Date('2014-12-10T16:16:29.192000Z'),
    edited: new Date('2014-12-10T16:16:29.192000Z'),
    url: 'https://swapi.dev/api/people/7/',
  },
  {
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: ['https://swapi.dev/api/films/1/'],
    species: ['https://swapi.dev/api/species/2/'],
    vehicles: [],
    starships: [],
    created: new Date('2014-12-10T16:16:29.192000Z'),
    edited: new Date('2014-12-10T16:16:29.192000Z'),
    url: 'https://swapi.dev/api/people/8/',
  },
  {
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: ['https://swapi.dev/api/films/1/'],
    species: [],
    vehicles: [],
    starships: ['https://swapi.dev/api/starships/12/'],
    created: new Date('2014-12-10T16:16:29.192000Z'),
    edited: new Date('2014-12-10T16:16:29.192000Z'),
    url: 'https://swapi.dev/api/people/9/',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/20/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: ['https://swapi.dev/api/vehicles/38/'],
    starships: [
      'https://swapi.dev/api/starships/48/',
      'https://swapi.dev/api/starships/59/',
      'https://swapi.dev/api/starships/64/',
      'https://swapi.dev/api/starships/65/',
      'https://swapi.dev/api/starships/74/',
    ],
    created: new Date('2014-12-10T16:16:29.192000Z'),
    edited: new Date('2014-12-10T16:16:29.192000Z'),
    url: 'https://swapi.dev/api/people/10/',
  },
]
const peopleEmpty: People[] = []

describe('Characters', () => {
  it('render a character', () => {
    const { getByTestId } = render(<Characters data={people} />)
    expect(getByTestId('https://swapi.dev/api/people/2/')).toBeInTheDocument()
  })

  it('load more', () => {
    const { getByTestId } = render(<Characters data={people} />)
    const incrementBtn = getByTestId('loadMore')
    fireEvent.click(incrementBtn)
    expect(incrementBtn).not.toBeInTheDocument()
  })

  it('empty result', () => {
    const { getByTestId } = render(<Characters data={peopleEmpty} />)
    const searchEmpty = getByTestId('search-empty')
    expect(searchEmpty).toBeInTheDocument()
  })
})
