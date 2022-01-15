import { useEffect, useState } from "react"
import styled from "styled-components"
import fetchPokemons from "../../services/PokemonFetcher"
import Spinner from "../Shared/Spinner"
import TableBody from "./TableBody"
import TableHeader from "./TableHeader"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #d6d0d5;
  box-shadow: 0 6px 10px 0 rgba(30, 12, 27, 0.1);
  gap: 0.7rem;
  z-index: 1;
`

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #d6d0d5;
  box-shadow: 0 6px 10px 0 rgba(30, 12, 27, 0.1);
  margin: 0 auto;
`

const PokemonTable = ({ keywords }) => {
  const [pokemons, setPokemons] = useState([])
  const { total, start } = keywords

  useEffect(() => {
    fetchPokemons(total, start).then((pokes) => {
      setPokemons([...pokes])
    })
  }, [total, start])

  if (pokemons.length === 0)
    return <Spinner src="./images/pokeball-spinner.png" alt="loading" />

  return (
    <Container>
      <Table>
        <TableHeader
          headers={[
            "#",
            "Sprite",
            "Nombre",
            "Tipo 1",
            "Tipo 2",
            "Experiencia Base",
            "Peso",
            "Altura",
          ]}
        />
        <TableBody pokemons={pokemons} />
      </Table>
    </Container>
  )
}

export default PokemonTable
