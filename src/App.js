import { useEffect, useState } from "react";
import "./App.css";

import { fetchPokemons } from "./api/fetchPokemons";
import PokemonList from "./components/PokemonList/PokemonList";
import Pagination from "./components/Pagination";

import sun from "./assets/img/sun.png";
import moon from "./assets/img/moon.png";
import Loader from "./components/Loader/Loader";

function App() {
  const [theme, setTheme] = useState("light");
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [offset, setOffset] = useState(0);

  const limit = 9;

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    fetchPokemons(limit, offset).then((pokeList) => {
      setPokemonList(pokeList.results);
      const count = Math.ceil(pokeList.count / limit);
      setPageCount(count);
    });
  }, [offset]);

  const handleNext = () => {
    if (page === pageCount) return;
    setPage((prevState) => (prevState += 1));
    setOffset((prevState) => (prevState += limit));
  };

  const handlePrev = () => {
    if (page === 1) return;
    setPage((prevState) => (prevState -= 1));
    setOffset((prevState) => (prevState -= limit));
  };

  return (
    <>
      <div className={`app ${theme}`}>
        <button className="lightBtn" onClick={toggleTheme}>
          {theme === "dark" ? (
            <img className="img" src={moon} alt="moon" />
          ) : (
            <img className="img" src={sun} alt="" />
          )}
        </button>

        <PokemonList pokemonList={pokemonList} />

        <Pagination
          handleNext={handleNext}
          handlePrev={handlePrev}
          pageCount={pageCount}
          page={page}
        />
      </div>
    </>
  );
}

export default App;
