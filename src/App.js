import { Route, Routes } from "react-router-dom"
import PokemonPage from "./pages/PokemonPage"
import PokemonsListPage from "./pages/PokemonsListPage"
import TypePage from "./pages/TypePage"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonsListPage />}>
          <Route path="/pokemons" element={<PokemonPage />} />
          <Route path="/types" element={<TypePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
