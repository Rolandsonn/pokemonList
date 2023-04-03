import React from "react";
import PokemonCard from "../PokemonCard";
import styles from "./PokemonList.module.css";

const PokemonList = ({ pokemonList }) => {
  const pokemonElem = pokemonList.map((item) => (
    <PokemonCard key={item.id} {...item} />
  ));
  return <ul className={styles.list}>{pokemonElem}</ul>;
};

export default PokemonList;
