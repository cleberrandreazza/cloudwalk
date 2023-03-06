import { FilterItem } from '@/interfaces/planets'
import { fireEvent, render, screen } from '@testing-library/react'
import Filter from './Filter'
import userEvent from '@testing-library/user-event'

const itens: FilterItem[] = [
  {
    name: 'Tatooine',
    homeWorld: 'https://swapi.dev/api/planets/1/',
    checked: true,
  },
  {
    name: 'Alderaan',
    homeWorld: 'https://swapi.dev/api/planets/2/',
    checked: true,
  },
  {
    name: 'Yavin IV',
    homeWorld: 'https://swapi.dev/api/planets/3/',
    checked: true,
  },
  {
    name: 'Hoth',
    homeWorld: 'https://swapi.dev/api/planets/4/',
    checked: true,
  },
  {
    name: 'Dagobah',
    homeWorld: 'https://swapi.dev/api/planets/5/',
    checked: true,
  },
  {
    name: 'Bespin',
    homeWorld: 'https://swapi.dev/api/planets/6/',
    checked: true,
  },
  {
    name: 'Endor',
    homeWorld: 'https://swapi.dev/api/planets/7/',
    checked: true,
  },
  {
    name: 'Naboo',
    homeWorld: 'https://swapi.dev/api/planets/8/',
    checked: true,
  },
  {
    name: 'Coruscant',
    homeWorld: 'https://swapi.dev/api/planets/9/',
    checked: true,
  },
  {
    name: 'Kamino',
    homeWorld: 'https://swapi.dev/api/planets/10/',
    checked: true,
  },
  {
    name: 'Geonosis',
    homeWorld: 'https://swapi.dev/api/planets/11/',
    checked: true,
  },
  {
    name: 'Utapau',
    homeWorld: 'https://swapi.dev/api/planets/12/',
    checked: true,
  },
  {
    name: 'Mustafar',
    homeWorld: 'https://swapi.dev/api/planets/13/',
    checked: true,
  },
  {
    name: 'Kashyyyk',
    homeWorld: 'https://swapi.dev/api/planets/14/',
    checked: true,
  },
  {
    name: 'Polis Massa',
    homeWorld: 'https://swapi.dev/api/planets/15/',
    checked: true,
  },
  {
    name: 'Mygeeto',
    homeWorld: 'https://swapi.dev/api/planets/16/',
    checked: true,
  },
  {
    name: 'Felucia',
    homeWorld: 'https://swapi.dev/api/planets/17/',
    checked: true,
  },
  {
    name: 'Cato Neimoidia',
    homeWorld: 'https://swapi.dev/api/planets/18/',
    checked: true,
  },
  {
    name: 'Saleucami',
    homeWorld: 'https://swapi.dev/api/planets/19/',
    checked: true,
  },
  {
    name: 'Stewjon',
    homeWorld: 'https://swapi.dev/api/planets/20/',
    checked: true,
  },
  {
    name: 'Eriadu',
    homeWorld: 'https://swapi.dev/api/planets/21/',
    checked: true,
  },
  {
    name: 'Corellia',
    homeWorld: 'https://swapi.dev/api/planets/22/',
    checked: true,
  },
  {
    name: 'Rodia',
    homeWorld: 'https://swapi.dev/api/planets/23/',
    checked: true,
  },
  {
    name: 'Nal Hutta',
    homeWorld: 'https://swapi.dev/api/planets/24/',
    checked: true,
  },
  {
    name: 'Dantooine',
    homeWorld: 'https://swapi.dev/api/planets/25/',
    checked: true,
  },
  {
    name: 'Bestine IV',
    homeWorld: 'https://swapi.dev/api/planets/26/',
    checked: true,
  },
  {
    name: 'Ord Mantell',
    homeWorld: 'https://swapi.dev/api/planets/27/',
    checked: true,
  },
  {
    name: 'unknown',
    homeWorld: 'https://swapi.dev/api/planets/28/',
    checked: true,
  },
  {
    name: 'Trandosha',
    homeWorld: 'https://swapi.dev/api/planets/29/',
    checked: true,
  },
  {
    name: 'Socorro',
    homeWorld: 'https://swapi.dev/api/planets/30/',
    checked: true,
  },
  {
    name: 'Mon Cala',
    homeWorld: 'https://swapi.dev/api/planets/31/',
    checked: true,
  },
  {
    name: 'Chandrila',
    homeWorld: 'https://swapi.dev/api/planets/32/',
    checked: true,
  },
  {
    name: 'Sullust',
    homeWorld: 'https://swapi.dev/api/planets/33/',
    checked: true,
  },
  {
    name: 'Toydaria',
    homeWorld: 'https://swapi.dev/api/planets/34/',
    checked: true,
  },
  {
    name: 'Malastare',
    homeWorld: 'https://swapi.dev/api/planets/35/',
    checked: true,
  },
  {
    name: 'Dathomir',
    homeWorld: 'https://swapi.dev/api/planets/36/',
    checked: true,
  },
  {
    name: 'Ryloth',
    homeWorld: 'https://swapi.dev/api/planets/37/',
    checked: true,
  },
  {
    name: 'Aleen Minor',
    homeWorld: 'https://swapi.dev/api/planets/38/',
    checked: true,
  },
  {
    name: 'Vulpter',
    homeWorld: 'https://swapi.dev/api/planets/39/',
    checked: true,
  },
  {
    name: 'Troiken',
    homeWorld: 'https://swapi.dev/api/planets/40/',
    checked: true,
  },
  {
    name: 'Tund',
    homeWorld: 'https://swapi.dev/api/planets/41/',
    checked: true,
  },
  {
    name: 'Haruun Kal',
    homeWorld: 'https://swapi.dev/api/planets/42/',
    checked: true,
  },
  {
    name: 'Cerea',
    homeWorld: 'https://swapi.dev/api/planets/43/',
    checked: true,
  },
  {
    name: 'Glee Anselm',
    homeWorld: 'https://swapi.dev/api/planets/44/',
    checked: true,
  },
  {
    name: 'Iridonia',
    homeWorld: 'https://swapi.dev/api/planets/45/',
    checked: true,
  },
  {
    name: 'Tholoth',
    homeWorld: 'https://swapi.dev/api/planets/46/',
    checked: true,
  },
  {
    name: 'Iktotch',
    homeWorld: 'https://swapi.dev/api/planets/47/',
    checked: true,
  },
  {
    name: 'Quermia',
    homeWorld: 'https://swapi.dev/api/planets/48/',
    checked: true,
  },
  {
    name: 'Dorin',
    homeWorld: 'https://swapi.dev/api/planets/49/',
    checked: true,
  },
  {
    name: 'Champala',
    homeWorld: 'https://swapi.dev/api/planets/50/',
    checked: true,
  },
  {
    name: 'Mirial',
    homeWorld: 'https://swapi.dev/api/planets/51/',
    checked: true,
  },
  {
    name: 'Serenno',
    homeWorld: 'https://swapi.dev/api/planets/52/',
    checked: true,
  },
  {
    name: 'Concord Dawn',
    homeWorld: 'https://swapi.dev/api/planets/53/',
    checked: true,
  },
  {
    name: 'Zolan',
    homeWorld: 'https://swapi.dev/api/planets/54/',
    checked: true,
  },
  {
    name: 'Ojom',
    homeWorld: 'https://swapi.dev/api/planets/55/',
    checked: true,
  },
  {
    name: 'Skako',
    homeWorld: 'https://swapi.dev/api/planets/56/',
    checked: true,
  },
  {
    name: 'Muunilinst',
    homeWorld: 'https://swapi.dev/api/planets/57/',
    checked: true,
  },
  {
    name: 'Shili',
    homeWorld: 'https://swapi.dev/api/planets/58/',
    checked: true,
  },
  {
    name: 'Kalee',
    homeWorld: 'https://swapi.dev/api/planets/59/',
    checked: true,
  },
  {
    name: 'Umbara',
    homeWorld: 'https://swapi.dev/api/planets/60/',
    checked: true,
  },
]
const setItens = jest.fn()

describe('Filter', () => {
  it('renders a component', () => {
    const { container } = render(<Filter itens={itens} setItens={setItens} />)
    expect(container).toBeVisible()
  })

  it('open menu', () => {
    const { getByTestId } = render(<Filter itens={itens} setItens={setItens} />)
    const openMenu = getByTestId('handleClick')
    fireEvent.click(openMenu)
    expect(getByTestId('label')).toHaveClass('active')
  })
  it('checkItem ', () => {
    const { getByTestId } = render(<Filter itens={itens} setItens={setItens} />)
    const checkItem = getByTestId('Tatooine')
    fireEvent.click(checkItem)
    expect(checkItem).toHaveClass('active')
  })
  it('uncheckAll ', () => {
    const { getByTestId } = render(<Filter itens={itens} setItens={setItens} />)
    const unCheck = getByTestId('uncheckAll')

    const checkItem = getByTestId('Tatooine')
    fireEvent.click(checkItem)

    fireEvent.click(unCheck)
    expect(unCheck).not.toHaveClass('active')
  })
  it('checkAllFetch ', () => {
    const { getByTestId } = render(<Filter itens={itens} setItens={setItens} />)
    const checkAllFetch = getByTestId('checkAllFetch')

    const checkItem = getByTestId('Tatooine')
    fireEvent.click(checkItem)

    fireEvent.click(checkAllFetch)

    const isTrue = itens.every((item) => item.checked)
    expect(isTrue).toBe(true)
  })

  it('emptySearch', () => {
    const { getByTestId } = render(<Filter itens={itens} setItens={setItens} />)
    const openMenu = getByTestId('handleClick')
    const emptySearch = getByTestId('emptySearch')
    const inputSearch = screen.getByTestId('inputSearch')

    fireEvent.click(openMenu)
    userEvent.type(inputSearch, 'test')
    fireEvent.click(emptySearch)
    expect(inputSearch).toHaveValue('')
  })
})
