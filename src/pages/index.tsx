
import Filter from '@/components/filter/Filter';
import Header from '@/components/header/Header';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { FilterItem, PlanetResponse } from '@/interfaces/planets';
import { PeopleResponse } from '@/interfaces/people';
import Characters from '@/components/characters/Characters';
import { useState } from 'react';
interface HomeProps {
  planets: PlanetResponse,
  characters: PeopleResponse
}

export default function Home({ planets, characters }: HomeProps) {
  const [itens, setItens] = useState<FilterItem[]>(planets.results.map(x => ({
    name: x.name,
    homeWorld: x.url,
    checked: true
  })));
  const filterPlanets = itens.filter(x => x.checked).map(planet => planet.homeWorld)
  const filteredCharacters = characters.results.filter(person => filterPlanets.includes(person.homeworld))

  return (
    <>
      <Head>
        <title>Cloudwalk Test</title>
        <meta name="description" content="Cloudwalk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Filter itens={itens} setItens={setItens} />
      <Characters data={filterPlanets.length ? filteredCharacters : characters.results} />
    </>
  )
}

const getAllPlanets = async () => {
  let hasMorePages = true;
  let page = 1;
  let newPlanets = {} as PlanetResponse;

  while (hasMorePages) {
    const resPlanets = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
    const planets = await resPlanets.json();
    hasMorePages = planets.next;
    newPlanets = {
      ...planets,
      results: newPlanets.results ? newPlanets.results.concat(planets.results) : planets.results
    }
    page++;
  }
  return newPlanets;
}

const getAllPeople = async () => {
  let hasMorePages = true;
  let page = 1;
  let newPeople = {} as PeopleResponse;

  while (hasMorePages) {
    const resPeople = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const people = await resPeople.json();
    hasMorePages = people.next;
    newPeople = {
      ...people,
      results: newPeople.results ? newPeople.results.concat(people.results) : people.results
    }
    page++;
  }
  return newPeople;
}


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const planets = await getAllPlanets();
  const people = await getAllPeople()

  people.results.map(x => {
    x.homeworld_string = planets.results.filter(i => i.url === x.homeworld)[0].name
  })

  return {
    props: {
      planets: planets,
      characters: people
    },
    revalidate: 60
  }
}
