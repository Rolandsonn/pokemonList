import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Animation from "../../components/Animation";
import styles from "./PokemonPage.module.css";
import Loader from "../../components/Loader/Loader";
import { fetchPokemon } from "../../api/fetchPokemons";
const PokemonPage = () => {
  const [img, setImg] = useState();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      fetchPokemon(name).then((data) => {
        const img = data.sprites.other.dream_world.front_default;
        setPokemon(data);
        setImg(img);
        setLoading(false);
      });
    }
  }, [name]);

  const springProps = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    config: { duration: 500 },
  });

  return (
    <>
      {!loading ? (
        <>
          <div className="container">
            <div className={styles.wrapper}>
              <span className={styles.id}>#{pokemon.id}</span>
              <div>
                <animated.img
                  src={img}
                  alt=""
                  style={{
                    ...springProps,
                    width: "250px",
                    height: "250px",
                  }}
                />
                <p className={styles.name}>{pokemon.name}</p>
              </div>
              <div className={styles.inner}>
                <p className={styles.text}>
                  Experience:{" "}
                  <span className={styles.text2}>
                    {pokemon.base_experience}
                  </span>
                </p>
                <p className={styles.text}>Height: {pokemon.height} m</p>
                <p className={styles.text}>Weight: {pokemon.weight} lbs</p>
              </div>
            </div>
            <div className={styles.containerStats}>
              <div className={styles.stats}>
                <div className={styles.statGroup}>
                  <span>Hp</span>
                  <div className={styles.progressBar}></div>
                  <span className={styles.counterStat}>
                    {pokemon.stats[0].base_stat}
                  </span>
                </div>
                <div className={styles.statGroup}>
                  <span>Attack</span>
                  <div className={styles.progressBar}></div>
                  <span className={styles.counterStat}>
                    {pokemon.stats[1].base_stat}
                  </span>
                </div>
                <div className={styles.statGroup}>
                  <span>Defense</span>
                  <div className={styles.progressBar}></div>
                  <span className={styles.counterStat}>
                    {pokemon.stats[2].base_stat}
                  </span>
                </div>
                <div className={styles.statGroup}>
                  <span>Special Attack</span>
                  <div className={styles.progressBar}></div>
                  <span className={styles.counterStat}>
                    {pokemon.stats[3].base_stat}
                  </span>
                </div>
                <div className={styles.statGroup}>
                  <span>Special Defense</span>
                  <div className={styles.progressBar}></div>
                  <span className={styles.counterStat}>
                    {pokemon.stats[4].base_stat}
                  </span>
                </div>
                <div className={styles.statGroup}>
                  <span>Speed</span>
                  <div className={styles.progressBar}></div>
                  <span className={styles.counterStat}>
                    {pokemon.stats[5].base_stat}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
    </>
  );
};

export default PokemonPage;
