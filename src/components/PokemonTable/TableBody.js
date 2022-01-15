import styled from "styled-components"
import PokemonDexNumber from "./PokemonDexNumber"
import PokemonName from "./PokemonName"
import Sprite from "./Sprite"
import Types from "./Types"

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #eeede5;
  }
`
const TableColumn = styled.td`
  border: 1px solid #d6d0d5;
  text-align: center;
`
const TableBody = ({ pokemons }) => {
  return (
    <tbody>
      {pokemons.map((p) => {
        return (
          <TableRow key={p.id}>
            <TableColumn>
              <PokemonDexNumber dexNumber={p.order} />
            </TableColumn>
            <TableColumn>
              <Sprite
                src={p.sprites.front_default}
                alt={p.name}
                image={p.sprites.other["official-artwork"].front_default}
                abilities={p.abilities}
                stats={p.stats}
              />
            </TableColumn>
            <TableColumn>
              <PokemonName name={p.name} url="#" />
            </TableColumn>
            <Types types={p.types} />
            <TableColumn>{p.base_experience}</TableColumn>
            <TableColumn>{p.weight}</TableColumn>
            <TableColumn>{p.height}</TableColumn>
          </TableRow>
        )
      })}
    </tbody>
  )
}

export default TableBody
