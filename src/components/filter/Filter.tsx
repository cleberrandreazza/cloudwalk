import { FilterItem } from '@/interfaces/planets';
import { Dispatch, SetStateAction, useState } from 'react';
import { FilterStyle } from './FilterStyle';
import { useDetectClickOutside } from 'react-detect-click-outside';

interface PlanetsInterface {
    itens: FilterItem[],
    setItens: Dispatch<SetStateAction<FilterItem[]>>
}

function Filter({ itens, setItens }: PlanetsInterface) {
    const [isActive, setIsActive] = useState(false);
    const [query, setQuery] = useState("");
    const ref = useDetectClickOutside({ onTriggered: () => closeDropdown() });
    const [checkAll, setCheckAll] = useState(false);


    const closeDropdown = () => {
        setIsActive(false)
    }
    const handleClick = () => {
        setIsActive(current => !current);
    };

    const emptySearch = () => {
        setQuery("");
        setIsActive(true);
    };

    const checkItem = (planetName: string) => {
        const newItens = itens.map((planet) => {
            planet.checked = false;
            if (planet.name === planetName)
                planet.checked = !planet.checked;
            return planet
        })
        setCheckAll(true)
        setItens(newItens)

        if (newItens.filter(x => x.checked).length == newItens.length)
            setCheckAll(false)
    };

    const checkAllFetch = () => {
        if (checkAll) {

            setCheckAll(current => !current);
            const newItens = itens.map((planet) => {
                planet.checked = checkAll;
                return planet
            })

            setItens(newItens)
        }

    };


    const unCheckAll = (mobile = false) => {
        const newItens = itens.map((planet) => {
            planet.checked = true;
            return planet
        })

        setItens(newItens)
        setCheckAll(false)
        if (!mobile)
            setIsActive(false)
    };


    return (
        <>
            <FilterStyle>
                <div className="container_filter">
                    <div className="container">
                        <div className="filter">
                            <div className={`label ${isActive ? 'active' : ''}`} ref={ref}>Filter By:
                                <span>
                                    <p onClick={handleClick}>
                                        {itens.filter(x => x.checked).length > 0 && itens.filter(x => x.checked).length != itens.length
                                            ? itens.filter(x => x.checked).map(x => x.name)
                                            : 'All'
                                        }
                                    </p>
                                    <div className="box-itens" >
                                        <div className="content-mobile">
                                            <div className="content-top">
                                                Filter By
                                                <div className="close" onClick={handleClick}></div>
                                            </div>
                                            <div className="buttons">
                                                <button className="clear" onClick={() => unCheckAll(true)}>CLEAR ALL</button>
                                                <button className="apply" onClick={handleClick}>APPLY</button>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="search">
                                                <input type="text" placeholder='Search by name' onChange={event => setQuery(event.target.value)} value={query} />
                                                <div className={`close-search ${query ? 'open' : ''}  `} onClick={emptySearch} >
                                                    x
                                                </div>
                                            </div>
                                        </div>
                                        {!query && <div className={`item ${!checkAll ? 'active' : ''}`} onClick={checkAllFetch}>
                                            <div className="check"></div>
                                            All
                                        </div>}
                                        {itens.filter(filter => {
                                            if (query === "") {
                                                return filter;
                                            } else if (filter.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
                                                return filter;
                                            }
                                        }).map((item) => (
                                            <div className={`item ${item.checked ? 'active' : ''}`} key={item.name} onClick={() => checkItem(item.name)}>
                                                <div className="check" ></div>
                                                {item.name}
                                            </div>
                                        ))}
                                    </div>
                                </span>
                            </div>
                        </div>
                        <button className={itens.filter(x => x.checked).length > 0 && checkAll ? 'active clear-all' : 'clear-all'} onClick={() => unCheckAll()}>clear all</button>
                    </div>
                </div>
            </FilterStyle >
        </>
    )
}

export default Filter
