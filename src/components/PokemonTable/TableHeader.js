import { memo } from "react"
import { isEqual } from "lodash"
import styled from "styled-components"

const TableHead = styled.th`
  font-weight: 300;
  background-color: #3b3b3b;
  color: #fefefe;
  padding: 0.8rem;
  border: 1px solid #333;
`

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #eeede5;
  }
`

const TableHeader = ({ headers }) => {
  return (
    <thead>
      <TableRow>
        {headers.map((h, index) => (
          <TableHead key={index}>{h}</TableHead>
        ))}
      </TableRow>
    </thead>
  )
}

export default memo(TableHeader, isEqual)
