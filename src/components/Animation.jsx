import React, { useEffect, useState } from "react";

const Animation = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isMovesVisible, setIsMovesVisible] = useState(false);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Failed to fetch Pokemon data:", error);
      }
    };
    fetchPokemonData();
  }, [pokemonName]);

  const toggleMovesVisibility = () => {
    setIsMovesVisible(!isMovesVisible);
  };

  return (
    <div>
      <h1>{pokemonName.toUpperCase()}</h1>
      <h2 onClick={toggleMovesVisibility} style={{ cursor: "pointer" }}>
        Moves:
      </h2>
      {isMovesVisible && (
        <ul
          style={{
            maxHeight: isMovesVisible ? "500px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
          }}
        >
          {pokemonData?.moves.map((move) => (
            <li key={move.move.name}>{move.move.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Animation;
