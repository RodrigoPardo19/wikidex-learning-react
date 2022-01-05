import styled from "styled-components"
import PokeballInput from "./PokeballInput"

const Generation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 3rem;
  border: 2px solid transparent;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  cursor: pointer;

  &:hover {
    border: #9e9e9e solid 2px;
  }
`

const Label = styled.label`
  color: #fff;
`

const InputGeneration = ({ generation, color }) => {
  return (
    <Generation color={color}>
      <PokeballInput />
      <Label>{generation}</Label>
    </Generation>
  )
}

export default InputGeneration
