import styled from "styled-components"

import ComentaryButton from "./CommentaryButton"
import TopBarNavigationButton from "./TopBarNavigationButton"

const Div = styled.nav`
  display: flex;
  padding: 10px;
  background-color: #fefefe;
  justify-content: space-between;
  border-bottom: 1px solid #c4ced8;
`
const A = styled.a`
  font-weight: 500;
`

const RightSide = styled.div`
  display: flex;
  gap: 0.5rem;
`

const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
const CommunityBar = () => {
  return (
    <Div>
      <LeftSide>
        <A>WIKIDEX</A>
      </LeftSide>
      <RightSide>
        <ComentaryButton />
        <TopBarNavigationButton />
      </RightSide>
    </Div>
  )
}

export default CommunityBar
