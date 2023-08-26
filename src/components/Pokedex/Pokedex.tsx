import { PokemonSchema } from "../../types/PokemonSchema";
import PokeList from "../PokeList/PokeList";
import PokedSearchResult from "../PokedSearchResult/PokedSearchResult";
import Searchbox from "../Searchbox/Searchbox";
import "./Pokedex.css";
// import React from "react";

interface PokedexProps {
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
  onInputChange: (input: string) => void;
  onSelectedPokemonClick: (pokemonName: string) => void;
  // clearSearchbox: () => void;
  searchField: string;
}

const Pokedex = ({
  searchedPokemons,
  selectedPokemon,
  onSelectedPokemonClick,
  onInputChange,
  // clearSearchbox,
  searchField,
}: PokedexProps) => {
  return (
    <div className="pokedex__container">
      <div className="pokedex__result-container">
        <div>
          <PokedSearchResult selectedPokemon={selectedPokemon} />
        </div>
      </div>
      <div className="pokedex__list-container">
        <Searchbox
          onInputChange={onInputChange}
          // clearSearchbox={clearSearchbox}
          searchField={searchField}
        />
        <PokeList
          searchedPokemons={searchedPokemons}
          onSelectedPokemonClick={onSelectedPokemonClick}
        />
      </div>
    </div>
  );
};

export default Pokedex;
