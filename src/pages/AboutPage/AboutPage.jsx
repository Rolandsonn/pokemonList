import React, { Component } from "react";
import Filter from "../../components/Filter/Filter";
import axios from "axios";
import PokemonList from "../../components/PokemonList/PokemonList";

export default class AboutPage extends Component {
  state = {
    pokemonName: "",
  };

  render() {
    return <div>This project about pokemons</div>;
  }
}
