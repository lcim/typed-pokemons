import "./PokeCard.css";
import React from "react";

interface PokecardProps {
  spriteUrl?: string;
  name: string;
  onSelectedPokemonClick: (pokemonName: string) => void; 
}

const PokeCard = ({ spriteUrl, name, onSelectedPokemonClick }: PokecardProps) => {
  return (
    <div className="pokecard" onClick={() => onSelectedPokemonClick(name)}>
      {/* Poke card image */}
      <img src={spriteUrl} alt="sprite image" className="pokemon-sprite" />
      {name}
    </div>
  );
};

export default PokeCard;
