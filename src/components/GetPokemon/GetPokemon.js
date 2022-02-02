import "./GetPokemon.css";
import { getPokemon } from "../../redux/actions/pokemon";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemonReducer.pokemon,
    loading: state.pokemonReducer.loading,
    error: state.pokemonReducer.error,
    idPokemon: state.pokemonReducer.idPokemon,
  };
};

function GetPokemon({ pokemon, loading, error, idPokemon }) {
  const printPokemon = (event) => {
    event.preventDefault();
    getPokemon(event.target.value)
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3>Trae un Pokémon:</h3>
        <input
          className="form-control"
          type="number"
          onChange={printPokemon}
          placeholder="Ingresa ID del Pokémon"
        />
        <br />

        {loading && (
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
        )}

        {idPokemon > 0 && (
          <div>
            <h3>{pokemon}</h3>
            <img
              className="img-fluid"
              src={pokemon.pokemonImage}
              alt="Pokémon"
            />
          </div>
        )}

        <br />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, { getPokemon })(GetPokemon);
