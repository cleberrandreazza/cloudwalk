import { People, PeopleResponse } from "@/interfaces/people";
import { useState } from "react";
import Character from "../character/Character";
import { CharactersStyle } from "./CharactersStyle"
interface PeopleInterface {
    data: People[]
}
function Characters({ data }: PeopleInterface) {
    const [pageNumber, setPageNumber] = useState(1);
    const loadMore = () => {
        setPageNumber(pageNumber + 1)
    }
    return (
        <>
            <CharactersStyle>
                <div className="container container-characters">
                    <h2>All Characters</h2>
                    <div className="contents">
                        {data.slice(0, pageNumber * 8).map(item => (
                            <Character key={item.url} item={item} />
                        ))}
                    </div>
                    {pageNumber * 8 < data.length && <div className="load-more">
                        <button onClick={loadMore}>LOAD MORE</button>
                    </div>}
                </div>
            </CharactersStyle>
        </>
    )
}

export default Characters
