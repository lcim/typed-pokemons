import { PokemonSchema } from "../../types/PokemonSchema";
import "./PokedSearchResult.css";

interface PokedSearchResultProps {
  selectedPokemon: PokemonSchema | undefined;
}

const PokedSearchResult = ({
  selectedPokemon,
}: PokedSearchResultProps) => {
  const { name, id, height, weight, base_experience, sprites } =
    selectedPokemon || {};

  return (
    <div className="poke__result-container">
      {selectedPokemon ? (
        <div>
          {/* Pokemon images here */}
          <img className="pokemon-animated-sprite" src={sprites?.animated || sprites?.normal} alt="Animated pokedex image"/>
          <p>Name: {name}</p>
          <p>id: {id}</p>
          <p>height: {height}</p>
          <p>weight: {weight}</p>
          <p>Base Exp: {base_experience}</p>
        </div>
      ) : (
        <h2>Welcome to the pokedex!</h2>
      )}
    </div>
  );
};

export default PokedSearchResult;
