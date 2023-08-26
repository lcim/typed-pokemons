import { PokemonSchema } from "../../types/PokemonSchema";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.css";
// import React from 'react'

interface PokelistProps {
  searchedPokemons: PokemonSchema[];
  onSelectedPokemonClick: (pokemonName: string) => void;
}

const PokeList = ({
  searchedPokemons,
  onSelectedPokemonClick,
}: PokelistProps) => {
  return (
    <div className="pokemon__list">
      {
        // searchedPokemons.map(pokemon => {
        //   return (
        //     pokemon.name && (
        //     <PokeCard
        //       key={pokemon.id}
        //       name={pokemon.name}
        //       spriteUrl={pokemon.sprites?.normal}
        //     />
        //   ))
        // })

        // By destructuring we have:
        searchedPokemons.map(({ id, name, sprites }) => {
          return (
            name && (
              <PokeCard
                onSelectedPokemonClick={onSelectedPokemonClick}
                key={id}
                name={name}
                spriteUrl={sprites?.normal}
              />
            )
          );
        })
      }
    </div>
  );
};

export default PokeList;
