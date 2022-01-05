import CommunityBar from "./components/CommunityBar/CommunityBar"
import NavBar from "./components/Navbar/NavBar"
import PokemonList from "./components/PokemonList/PokemonList"

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <CommunityBar />
      <PokemonList />
    </div>
  )
}

export default App
