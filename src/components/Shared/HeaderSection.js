import styled from "styled-components"

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeaderSection = ({ title }) => {
  return (
    <Header>
      <h2>{title}</h2>
    </Header>
  )
}

export default HeaderSection
