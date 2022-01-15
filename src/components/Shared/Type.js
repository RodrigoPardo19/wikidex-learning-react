const { default: styled } = require("styled-components")

const A = styled.a`
  text-align: center;
`

const Type = ({ name, url, image }) => {
  return (
    <A href={url} title={name}>
      <img src={image} alt={name} />
    </A>
  )
}

export default Type
