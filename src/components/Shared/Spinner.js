import styled, { keyframes } from "styled-components"

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Image = styled.img`
  width: 7rem;
  height: 7rem;
  animation: ${spin} 1s linear infinite;
`

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  width: 100%;
`
const Spinner = ({ src, alt }) => {
  return (
    <SpinnerContainer>
      <Image src={src} alt={alt} />
    </SpinnerContainer>
  )
}

export default Spinner
