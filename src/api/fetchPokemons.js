import axios from "axios";
const BASE_URL = `https://pokeapi.co/api/v2`;

export const fetchPokemons = async (limit, offset) => {
  try {
    const { data } = await axios.get(
      BASE_URL + `/pokemon?limit=${limit}&offset=${offset}`
    );

    return data;
  } catch (error) {
    console.log(error + "Fetch Pokemon");
  }
};
