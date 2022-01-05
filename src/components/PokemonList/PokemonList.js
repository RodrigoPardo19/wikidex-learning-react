import styled from "styled-components"
import HeaderSection from "../Shared/HeaderSection"
import PokemonGenerationMenu from "./PokemonGenerationMenu"

const Main = styled.main`
  background-color: #fdfdfd;
`

const PokemonList = () => {
  return (
    <Main>
      <HeaderSection title="Lista de Pokémon" />
      <PokemonGenerationMenu />
    </Main>
  )
}

export default PokemonList
