import { GET_POKEMON } from "./const";

const getPokemon = (payload) => {
  return {
    type: GET_POKEMON,
    loading: true,
    pokemon: {},
    payload: payload
  };
};

export { getPokemon };
