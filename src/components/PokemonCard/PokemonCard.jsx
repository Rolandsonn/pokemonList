import React, { useEffect, useState } from "react";
import styles from "./PokemonCard.module.css";
import axios from "axios";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, url }) => {
  const [imgPokemon, setImagePokemon] = useState();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchPokemon = async () => {
    try {
      const { data } = await axios(url);
      const img = data.sprites.other.dream_world.front_default;
      setImagePokemon(img);
      setPokemon(data);
      setLoading(false);
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
      {!loading ? (
        <Link to={name}>
          <li className={styles.card}>
            <img className={styles.img} src={imgPokemon} alt="pokemon" />
            <p className={styles.pokemonId}>№ {pokemon.id}</p>
            <p className={styles.text}>{name}</p>

            <div className={styles.cardTypes}>
              {pokemon.types.map((item) => (
                <span key={item.type.name} className={item.type.name}>
                  {item.type.name}
                </span>
              ))}
            </div>
          </li>
        </Link>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PokemonCard;
