import {createContext,useState} from "react";
const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [pokemonIiGlobal, setpokemonIiGlobal] = useState();
    return (
      <PokemonContext.Provider value={{ pokemonIiGlobal, setpokemonIiGlobal }}>
        {children}
      </PokemonContext.Provider>
    );
  };
  

export {PokemonContext,PokemonProvider}