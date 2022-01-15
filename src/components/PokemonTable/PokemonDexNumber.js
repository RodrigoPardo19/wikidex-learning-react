const changeToThreeDigits = (dexNumber) => {
  const digits = dexNumber.toString().length
  if (digits === 1) return `00${dexNumber}`
  if (digits === 2) return `0${dexNumber}`
  return dexNumber.toString()
}

const PokemonDexNumber = ({ dexNumber }) => {
  return changeToThreeDigits(dexNumber)
}

export default PokemonDexNumber
