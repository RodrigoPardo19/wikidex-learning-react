import { useState } from "react"
import styled from "styled-components"
import InputGeneration from "./InputGeneration"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #d6d0d5;
  box-shadow: 0 6px 10px 0 rgba(30, 12, 27, 0.1);
  gap: 0.7rem;
`

const Generations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`
const INITIAL_GENERATIONS = [
  {
    generation: "Primera Generación",
    number: "gen-1",
    isChecked: false,
    pokemons: 9,
    start: 0,
  },
  {
    generation: "Segunda Generación",
    number: "gen-2",
    isChecked: false,
    pokemons: 9,
    start: 151,
  },
  {
    generation: "Tercera Generación",
    number: "gen-3",
    isChecked: false,
    pokemons: 9,
    start: 251,
  },
  {
    generation: "Cuarta Generación",
    number: "gen-4",
    isChecked: false,
    pokemons: 9,
    start: 386,
  },
  {
    generation: "Quinta Generación",
    number: "gen-5",
    isChecked: false,
    pokemons: 9,
    start: 494,
  },
  {
    generation: "Sexta Generación",
    number: "gen-6",
    isChecked: false,
    pokemons: 9,
    start: 649,
  },
  {
    generation: "Séptima Generación",
    number: "gen-7",
    isChecked: false,
    pokemons: 9,
    start: 721,
  },
]

const PokemonGenerationMenu = ({ handleKeywords }) => {
  const [generations, setGenerations] = useState(INITIAL_GENERATIONS)

  const handleIsChecked = (value) => {
    const gens = [...INITIAL_GENERATIONS]
    const generationsUpdated = gens.map((g) => {
      if (value === g.generation) {
        handleKeywords({ total: g.pokemons, start: g.start })
        return { ...g, isChecked: true }
      } else {
        return g
      }
    })
    setGenerations(generationsUpdated)
  }

  return (
    <Container>
      Selecciona la generación:
      <Generations>
        {generations.map((g) => (
          <InputGeneration
            key={g.generation}
            {...g}
            handleChecked={handleIsChecked}
          />
        ))}
      </Generations>
    </Container>
  )
}

export default PokemonGenerationMenu
