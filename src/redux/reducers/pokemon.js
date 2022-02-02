import {GET_POKEMON,GET_POKEMON_SUCCESS,GET_POKEMON_ERROR} from "../actions/const";

const initialState = {
  pokemon: {},
  loading: false,
  error: false,
  idPokemon: 0,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return { ...state, loading: true, idPokemon: action.payload };
    case GET_POKEMON_SUCCESS:
      return { ...state, loading: false, pokemon: action.payload };
    case GET_POKEMON_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export { pokemonReducer };
