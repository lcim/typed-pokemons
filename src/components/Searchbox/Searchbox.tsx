import "./Searchbox.css";
// import React from "react";

interface SearchboxProps {
  onInputChange: (input: string) => void;
  clearSearchbox: () => void;
  searchField: string;
}

const Searchbox = ({ onInputChange, clearSearchbox, searchField }: SearchboxProps) => {
  return (
    <div className="searchbox__container">
      <input
        value={searchField}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        className="searchbox"
        placeholder="Search pokemons"
        type="search"
        id="searchbox"
      />
      {/* {searchField !== "" && (<p onClick={() => clearSearchbox()} className="clear__search">X</p>)} */}
    </div>
  );
};

export default Searchbox;
