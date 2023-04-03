import axios from "axios";
const fetchPokemons = async () => {
  const BASE_URL = `https://pokeapi.co/api/v2/`;

  try {
    const { data } = await axios.get(BASE_URL + "pokemon?limit=9&offset=30");

    return data;
  } catch (error) {
    console.log(error + "Fetch Pokemon");
  }
};
export default fetchPokemons;
