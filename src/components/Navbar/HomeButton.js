import styled from "styled-components"

const A = styled.a`
  background: url(${(props) => props.path}) no-repeat center;
  width: 117px;
  height: 30px;
`

const Div = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`

const HomeButton = ({ image }) => {
  return (
    <Div>
      <A path={image} href="https://google.cl"></A>
    </Div>
  )
}

export default HomeButton
