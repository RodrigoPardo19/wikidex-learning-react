import { useState } from "react"
import styled from "styled-components"
import PokemonTable from "../PokemonTable/PokemonTable"
import HeaderSection from "../Shared/HeaderSection"
import PokemonGenerationMenu from "./PokemonGenerationMenu"

const Main = styled.main`
  background-color: #fdfdfd;
`

const PokemonList = () => {
  const [keywords, setKeywords] = useState({ total: 9, start: 0 })
  const handleKeywords = ({ total, start }) => setKeywords({ total, start })

  return (
    <Main>
      <HeaderSection title="Lista de Pokémon" />
      <PokemonGenerationMenu handleKeywords={handleKeywords} />
      <PokemonTable keywords={keywords} />
    </Main>
  )
}

export default PokemonList
