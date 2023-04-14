import axios from "./axios";

const fetchPokemons = async (limit, offset, type) => {
  try {
    if (type === "all") {
      const { data } = await axios.get(
        `/pokemon?limit=${limit}&offset=${offset}`
      );

      return data;
    } else {
      const { data } = await axios.get(`/type/${type}/`);
      const filteredPokemons = data.pokemon.filter(
        (item, index) => offset <= index && index < limit
      );

      const results = filteredPokemons.map(({ pokemon }) => pokemon);

      return { results, count: data.pokemon.length };
    }
  } catch (error) {
    console.log(error + "Fetch Pokemon");
  }
};

const fetchPokemon = async (name) => {
  try {
    const { data } = await axios(`pokemon/${name}`);
    const img = data.sprites.other.dream_world.front_default;

    return { ...data, img };
  } catch (error) {
    console.log(error + "FetchPokemon failed");
  }
};

export { fetchPokemons, fetchPokemon };
