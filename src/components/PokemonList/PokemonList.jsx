import React from "react";
import PokemonCard from "../PokemonCard";
import styles from "./PokemonList.module.css";

const PokemonList = ({ pokemonList }) => {
  const pokemonElem = pokemonList.map((item) => {
    if (item.pokemon) {
      return <PokemonCard key={item.pokemon.name} {...item.pokemon} />;
    }
    return <PokemonCard key={item.name} {...item} />;
  });
  return <ul className={styles.list}>{pokemonElem}</ul>;
};

export default PokemonList;
