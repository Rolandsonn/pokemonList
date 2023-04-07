import React, { useEffect, useState } from "react";
import styles from "./PokemonCard.module.css";
import axios from "axios";
import Loader from "../Loader/Loader";

const PokemonCard = ({ name, url }) => {
  const [imgPokemon, setImagePokemon] = useState();
  const fetchPokemon = async () => {
    try {
      const { data } = await axios(url);
      const img = data.sprites.other.dream_world.front_default;
      setImagePokemon(img);
    } catch (error) {
      console.log(error + "FetchingPokemon failed PokemonCard");
    } 
  };

  useEffect(() => {
    if (url) {
      fetchPokemon();
    }
  }, [url]);

  return (
    <>
      {imgPokemon ? (
        <li className={styles.card}>
          <img className={styles.img} src={imgPokemon} alt="pokemon" />
          <p className={styles.text}>{name}</p>
        </li>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PokemonCard;
