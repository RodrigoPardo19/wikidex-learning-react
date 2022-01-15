const fetchPokemons = (total, start) => {
  const pokemons = fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${total}&offset=${start}`
  )
    .then((response) => response.json())
    .then((json) => {
      return Promise.all(
        json.results.map((p) =>
          fetch(p.url).then((response) => response.json())
        )
      )
    })
  return pokemons
}

export default fetchPokemons
