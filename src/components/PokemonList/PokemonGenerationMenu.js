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

const PokemonGenerationMenu = () => {
  const generations = [
    { generation: "Primera Generación", color: "#ff8123" },
    { generation: "Segunda Generación", color: "#90ff74" },
    { generation: "Tercera Generación", color: "#ace1fd" },
    { generation: "Cuarta Generación", color: "#f8e58c" },
    { generation: "Quinta Generación", color: "#cf87b9" },
    { generation: "Sexta Generación", color: "#d18647" },
    { generation: "Séptima Generación", color: "#ffb5c5" },
  ]

  return (
    <Container>
      Seleccione la generación:
      <Generations>
        {generations.map((g) => (
          <InputGeneration key={g.generation} {...g} />
        ))}
      </Generations>
    </Container>
  )
}

export default PokemonGenerationMenu
