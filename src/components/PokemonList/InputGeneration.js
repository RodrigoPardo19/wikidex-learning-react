import styled from "styled-components"
import PokeballIcon from "./PokeballIcon"

const Generation = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 96%;
  height: 3rem;
  padding-left: 0.5rem;
  border: 2px solid #ff055b;
  border-radius: 1rem;
  background-color: ${(props) => (props.checked ? "#ff055b" : "#fefefe")};
  color: ${(props) => (props.checked ? "#fefefe" : "#ff055b")};
  cursor: pointer;

  &:hover {
    border: #7f33a1 solid 2px;
  }
`
const Input = styled.input``

const InputGeneration = ({ generation, number, isChecked, handleChecked }) => {
  return (
    <Generation htmlFor={number} checked={isChecked}>
      <PokeballIcon checked={isChecked} />
      <Input
        type="radio"
        id={number}
        name="generations"
        value={generation}
        onChange={(e) => handleChecked(e.target.value)}
        hidden={true}
      />
      {generation}
    </Generation>
  )
}

export default InputGeneration
