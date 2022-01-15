import styled from "styled-components"

const A = styled.a`
  color: #006cb0;
`

const upperFirstLetter = (name) => {
  return name[0].toUpperCase().concat(name.slice(1))
}

const PokemonName = ({ name, url }) => {
  return <A href={url}>{upperFirstLetter(name)}</A>
}

export default PokemonName
