import { useEffect, useState } from "react";
import "./App.css";
import fecthPokemons from "./api/fecthPokemons";
import PokemonList from "./components/PokemonList/PokemonList";
import sun from "./assets/img/sun.png";
import moon from "./assets/img/moon.png";
function App() {
  const [theme, setTheme] = useState("light");
  const [pokemonList, setPokemonList] = useState([]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    fecthPokemons().then((pokeList) => setPokemonList(pokeList.results));
  }, []);

  return (
    <div className={`app ${theme}`}>
      <button className="lightBtn" onClick={toggleTheme}>
        {theme === "dark" ? (
          <img className="img" src={moon} alt="moon" />
        ) : (
          <img className="img" src={sun} alt="" />
        )}
      </button>
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}

export default App;
