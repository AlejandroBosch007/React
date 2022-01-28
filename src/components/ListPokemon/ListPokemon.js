import { useState, useEffect, useContext } from "react";
import { listPokemon } from "../../api/api";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { PokemonContext } from "../../context/PokemonContext";

function ListPokemon() {
  const [token] = useLocalStorage("TOKEN", {});

  const [list, setList] = useState([]);

  const { pokemonIiGlobal } = useContext(PokemonContext);

  const newListPokemon = async (token) => {
    const pokelistBak = await listPokemon(token);
    setList(pokelistBak.list[0]);
  };

  useEffect(() => {
    newListPokemon(token.token);
  }, [pokemonIiGlobal]);

  return (
    <div className="card">
      <div className="card-body">
        <h3>Lista de Pokemones:</h3>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>idPokemon</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {list.map((pokemon) => (
              <tr key={pokemon.idPokemon}>
                <td>{pokemon.idPokemon}</td>
                <td>{pokemon.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { ListPokemon };
