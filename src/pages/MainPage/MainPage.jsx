import React, { useState, useEffect } from "react";

import { fetchPokemons } from "../../api/fetchPokemons";
import PokemonList from "../../components/PokemonList";
import Pagination from "../../components/Pagination";

import Select from "../../components/Select";
import { useSearchParams } from "react-router-dom";
const MainPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [offset, setOffset] = useState(0);
  const [selectedType, setSelectedType] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = +searchParams.get("page");
  const currentType = searchParams.get("type");
  const types = [
    "all",
    "grass",
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ];
  const limit = 8;

  useEffect(() => {
    fetchPokemons(limit, offset, selectedType).then((pokeList) => {
      setPokemonList(pokeList.results);
      const count = Math.ceil(pokeList.count / limit);
      setPageCount(count);
    });
  }, [offset, selectedType]);

  useEffect(() => {
    currentPage ? setPage(currentPage) : setPage(1);
  }, [currentPage]);

  useEffect(() => {
    currentType && setSelectedType(currentType);
  }, [currentType]);

  const handleNext = () => {
    if (page === pageCount) return;
    setPage((prevState) => prevState + 1);
    setOffset((prevState) => prevState + limit);
  };

  const handlePrev = () => {
    if (page === 1) return;
    setPage((prevState) => prevState - 1);
    setOffset((prevState) => prevState - limit);
  };

  return (
    <>
      <div className="container">
        <Select
          label="Types"
          value={selectedType}
          types={types}
          onChange={(e) => {
            setSearchParams({ type: e.target.value });
            setSelectedType(e.target.value);
          }}
        />

        {pokemonList.length > 0 && <PokemonList pokemonList={pokemonList} />}
        <Pagination
          handleNext={handleNext}
          handlePrev={handlePrev}
          pageCount={pageCount}
          page={page}
          type={selectedType}
        />
      </div>
    </>
  );
};

export default MainPage;
