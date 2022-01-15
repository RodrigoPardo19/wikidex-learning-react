import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  display: flex;
  background-color: #fefefe;
  flex-direction: column;
  padding: 1rem;
  width: 250px;
  border: 1px solid #d6d0d5;
  border-radius: 10px;
  box-shadow: 0 6px 10px 0 rgba(30, 12, 27, 0.1);
  gap: 0.2rem;
  z-index: 1;
`
const Abilities = styled.div`
  display: flex;
  gap: 1rem;
`

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`

const Title = styled.h5`
  margin: 2px;
`

const List = styled.ul`
  margin: 8px;
  padding-left: 20px;
`

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`
const Stat = styled.div`
  display: flex;
  border: 1px solid #d6d0d5;
  border-radius: 10px;
`

const StatTitle = styled.div`
  text-align: center;
  font-size: 14px;
  padding: 2px;
  background-color: #9acae4;
  flex-basis: 40%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
const StatValue = styled.div`
  text-align: end;
  background-color: #ace1fd;
  padding-right: 10px;
  flex-basis: 60%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`
const Card = ({ image, name, abilities, stats }) => {
  return (
    <Container>
      <Abilities>
        <PokemonImage src={image} alt={name} />
        <div>
          <Title>Habilidades</Title>
          <List>
            {abilities.map((a) =>
              a.is_hidden === false ? (
                <li key={a.ability.name}>{a.ability.name}</li>
              ) : (
                <></>
              )
            )}
          </List>
          <Title>Habilidad Oculta</Title>
          <List>
            {abilities.map((a) =>
              a.is_hidden ? (
                <li key={a.ability.name}>{a.ability.name}</li>
              ) : (
                <></>
              )
            )}
          </List>
        </div>
      </Abilities>
      <Stats>
        {stats.map((s) => {
          return (
            <Stat key={s.stat.name}>
              <StatTitle>{s.stat.name}</StatTitle>
              <StatValue>{s.base_stat}</StatValue>
            </Stat>
          )
        })}
        <div style={{ alignSelf: "center" }}>
          {`Total ${stats.reduce((acc, el) => acc + el.base_stat, 0)}`}
        </div>
      </Stats>
    </Container>
  )
}

export default Card
