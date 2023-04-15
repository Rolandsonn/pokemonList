import React, { Component } from "react";
import Filter from "../../components/Filter/Filter";
import axios from "axios";
import PokemonList from "../../components/PokemonList/PokemonList";
import pikachu from "../../assets/img/pikachu.png";
export default class AboutPage extends Component {
  state = {
    pokemonName: "",
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <img src={pikachu} alt="pikachu" />
          <h1>About Pokemon</h1>
          <p>
            Welcome to our Pokemon world! We are a group of Pokemon enthusiasts
            who love to explore the world of Pokemon and learn more about these
            amazing creatures.
          </p>
          <p>
            Our mission is to provide information about Pokemon, their
            abilities, and their characteristics to help trainers become more
            knowledgeable about their favorite Pokemon.
          </p>
          <p>
            Currently, there are known Pokemon species in the PokeAPI. We strive
            to keep our database up-to-date with the latest information about
            these creatures.
          </p>
          <p>
            We hope that our website will be a valuable resource for all Pokemon
            trainers, whether you're just starting your journey or you're a
            seasoned trainer looking to learn more about your favorite Pokemon.
          </p>
        </div>
      </div>
    );
  }
}
