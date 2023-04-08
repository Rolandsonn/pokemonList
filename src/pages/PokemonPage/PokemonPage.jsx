import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSpring, animated, useTrail } from "react-spring";

import styles from "./PokemonPage.module.css";
const PokemonPage = () => {
  const [img, setImg] = useState();
  const [pokemon, setPokemon] = useState({});
  const [abilities, setAbilities] = useState();
  const { name } = useParams();
  const BASE_URL = "https://pokeapi.co/api/v2/";

  const fetchPokemon = async () => {
    try {
      const { data } = await axios(BASE_URL + `pokemon/${name}`);
      const img = data.sprites.other.dream_world.front_default;
      setImg(img);
      setPokemon(data);
    } catch (error) {
      console.log(error + "FetchPokemon failed in PokemonPage");
    }
  };

  useEffect(() => {
    if (name) {
      fetchPokemon();
    }
  }, [name]);

  const springProps = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    config: { duration: 500 },
  });

  return (
    <>
      <div className="container">
        <div className={styles.wrapper}>
          <animated.img
            src={img}
            alt=""
            style={{
              ...springProps,
              width: "300px",
              height: "300px",
            }}
          />
          <div className={styles.inner}>
            <p className={styles.text}>{pokemon.name}</p>
            <p className={styles.text}>Experience: {pokemon.base_experience}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
