import styled from "styled-components"
import Type from "../Shared/Type"

const TableColumn = styled.td`
  border: 1px solid #d6d0d5;
  text-align: center;
`

// Refactorizar a un if-else
const Types = ({ types }) => {
  const SINGLE_TYPE_POKEMON = 1

  return (
    <>
      {types.length === SINGLE_TYPE_POKEMON ? (
        <>
          <TableColumn key="1">
            <Type
              url="#"
              name={types[0].type.name}
              image={`./images/types/${types[0].type.name}.gif`}
            />
          </TableColumn>
          <TableColumn key="2">-</TableColumn>
        </>
      ) : (
        types.map((t) => (
          <TableColumn key={t.slot}>
            <Type
              url="#"
              name={t.type.name}
              image={`./images/types/${t.type.name}.gif`}
            />
          </TableColumn>
        ))
      )}
    </>
  )
}

export default Types
