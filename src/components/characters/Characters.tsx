import { People } from '@/interfaces/people'
import { useState } from 'react'
import Character from '../character/Character'
import { CharactersStyle } from './CharactersStyle'
interface PeopleInterface {
  data: People[]
}
function Characters({ data }: PeopleInterface) {
  const [pageNumber, setPageNumber] = useState(1)
  const loadMore = () => {
    setPageNumber(pageNumber + 1)
  }
  return (
    <>
      <CharactersStyle>
        <section className="container container-characters">
          <h2>All Characters</h2>
          <div className="contents">
            {data.slice(0, pageNumber * 8).map((item) => (
              <div data-testid={item.url} key={item.url}>
                <Character item={item} />
              </div>
            ))}
          </div>
          {pageNumber * 8 < data.length && (
            <div className="load-more">
              <button onClick={loadMore} data-testid="loadMore">
                LOAD MORE
              </button>
            </div>
          )}
          {data.length === 0 && (
            <div className="search-empty" data-testid="search-empty">
              <span>Sorry, Nothing found </span>
              <br />
              Try resetting the filters
            </div>
          )}
        </section>
      </CharactersStyle>
    </>
  )
}

export default Characters
