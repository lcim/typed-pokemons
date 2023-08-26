import React, { Component } from "react";
import { pokemonData } from "../../data/PokemonData";
import {
  PokemonSchema,
  PokemonSpritesSchema,
  UnpatchedPokemonSchema,
} from "../../types/PokemonSchema";
import Pokedex from "../Pokedex/Pokedex";
import "./App.css";

interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
}

export default class App extends Component<never, AppState> {
  state = {
    searchField: "",
    allPokemons: [],
    searchedPokemons: [],
    selectedPokemon: undefined,
  };

  patchPokemonData = (
    pokemonUnpatchedSample: UnpatchedPokemonSchema[]
  ): PokemonSchema[] => {
    const patchedPokemons = pokemonUnpatchedSample.map((pokemon) => {
      let parsedSprite: PokemonSpritesSchema = {
        normal: undefined,
        animated: undefined,
      };
      try {
        parsedSprite = pokemon.sprites && JSON.parse(pokemon.sprites);
      } catch (e) {
        console.log("Exception while parsing the sprites", e);
      }

      const patchedPokemon: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprite,
      };

      return patchedPokemon;
    });

    return patchedPokemons;
  };

  componentDidMount() {
    // Load patched pokemons as component mounts
    const patchedPokemons: PokemonSchema[] = this.patchPokemonData(pokemonData);

    // Set initial states
    this.setState({
      allPokemons: patchedPokemons,
      searchedPokemons: patchedPokemons,
    });
  }

  handleInputChange = (input: string) => {
    // filter the searched pokemons
    const { allPokemons } = this.state; // NOTE: The initial state is changed once the component is mounted. So allpokemons, are now patched and are destructured from state object

    const searchedPokemons: PokemonSchema[] = allPokemons.filter(
      (pokemon: PokemonSchema) => {
        return (
          pokemon.name &&
          pokemon.name.toLowerCase().includes(input.toLowerCase())
        );
      }
    );

    this.setState({
      searchField: input,
      searchedPokemons: searchedPokemons,
    });
  };

  handleClick = (pokemonName: string) => {
    // destructure searchedPokemon from state
    const { searchedPokemons } = this.state;

    // find the selectedPokemon
    const selectedPokemon = searchedPokemons.find(
      (pokemon: PokemonSchema) => pokemon.name === pokemonName
    );

    this.setState({selectedPokemon , });
    // this.setState({selectedPokemon: selectedPokemon})
  };

  clearSearchbox = () => {
    const patchedPokemons: PokemonSchema[] = this.patchPokemonData(pokemonData);
    this.setState({
      searchField: "",
      searchedPokemons: patchedPokemons,
      allPokemons: patchedPokemons,
    })
  }

  render() {
    return (
      <div className="app">
        <h1 className="title">Pokedex</h1>
        <Pokedex
          searchedPokemons={this.state.searchedPokemons}
          selectedPokemon={this.state.selectedPokemon}
          onInputChange={this.handleInputChange}
          onSelectedPokemonClick={this.handleClick}
          clearSearchbox={this.clearSearchbox}
          searchField={this.state.searchField}
        />
      </div>
    );
  }
}
