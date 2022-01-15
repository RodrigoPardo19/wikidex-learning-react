import { useState } from "react"
import Card from "../Shared/Card"

const { default: styled } = require("styled-components")

const Image = styled.img`
  width: 65px;
  height: 65px;
  cursor: pointer;
`

const Sprite = ({ src, alt, image, abilities, stats }) => {
  const [isOnHover, setOnHover] = useState(false)

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        onMouseOver={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      />
      {isOnHover ? (
        <Card image={image} name={alt} abilities={abilities} stats={stats} />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Sprite
