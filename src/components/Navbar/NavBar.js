import { useState } from "react"
import styled from "styled-components"
import HomeButton from "./HomeButton"
import SearchButton from "./SearchButton"
import UserButton from "./UserButton"

const Nav = styled.nav`
  display: flex;
  padding: 10px;
  background-color: #ffc733;
  justify-content: space-between;
`

const RightSide = styled.div`
  display: flex;
  gap: 0.5rem;
`

const NavBar = () => {
  const [homeButtonImage] = useState("./images/wikidex-fandom-logo.svg")
  return (
    <Nav>
      <HomeButton image={homeButtonImage} />
      <RightSide>
        <SearchButton />
        <UserButton />
      </RightSide>
    </Nav>
  )
}

export default NavBar
