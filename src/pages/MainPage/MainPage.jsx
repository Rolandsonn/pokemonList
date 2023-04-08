import React, { useState, useEffect } from "react";

import { fetchPokemons } from "../../api/fetchPokemons";
import PokemonList from "../../components/PokemonList";
import Pagination from "../../components/Pagination";

const MainPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [offset, setOffset] = useState(0);

  const limit = 9;

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
      <PokemonList pokemonList={pokemonList} />

      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        pageCount={pageCount}
        page={page}
      />
    </>
  );
};

export default MainPage;
