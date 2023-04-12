import React, { Component } from "react";

export default class Filter extends Component {
  state = {
    pokemonName: "",
  };

  handleChange = (e) => {
    this.setState({
      pokemonName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.pokemonName);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.pokemonName}
            onChange={this.handleChange}
          />
        </form>
      </>
    );
  }
}
