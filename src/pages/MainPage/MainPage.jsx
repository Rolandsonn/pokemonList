import React, { useState, useEffect } from "react";

import { fetchPokemons } from "../../api/fetchPokemons";
import PokemonList from "../../components/PokemonList";
import Pagination from "../../components/Pagination";
import axios from "axios";
import Select from "../../components/Select/Select";
const MainPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [offset, setOffset] = useState(0);
  const [selectedType, setSelectedType] = useState(null);
  const limit = 9;

  //Filter

  const fetchFilteredPokemon = async (type) => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/type/${type}`
      );
      // Фильтрация по поколениям
      const filtered = data.pokemon.filter(
        (pokemon) => parseInt(pokemon.pokemon.url.split("/")[6]) <= 50
      );
      setPokemonList(filtered);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedType) {
      fetchFilteredPokemon(selectedType);
    } else {
      fetchPokemons(limit, offset).then((pokeList) => {
        setPokemonList(pokeList.results);
        const count = Math.ceil(pokeList.count / limit);
        setPageCount(count);
      });
    }
  }, [selectedType, limit, offset]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

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
      <div className="container">
        <Select
          selectedType={selectedType}
          handleTypeChange={handleTypeChange}
        />
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
};

export default MainPage;
