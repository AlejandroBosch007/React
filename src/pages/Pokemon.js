import { GetPokemon } from "../components/GetPokemon/GetPokemon";
import { ListPokemon } from "../components/ListPokemon/ListPokemon";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PokemonProvider } from "../context/PokemonContext";

function Pokemon() {

  const [token] = useLocalStorage("TOKEN", {});
  const navigate = useNavigate();

  useEffect(() => {
    if (!token.token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="container text-center">
      <PokemonProvider>
        <GetPokemon />
        <ListPokemon />
      </PokemonProvider>

    </div>
  );
}

export { Pokemon };
