import { takeLatest, put } from "redux-saga/effects";
import {
  GET_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_ERROR,
} from "../actions/const";
import axios from "axios";

function* pokemonWorker() {
  try {
    let payload = yield axios("https://pokeapi.co/api/v2/pokemon/ditto");
    yield put({ type: GET_POKEMON_SUCCESS, payload: payload.data });
  } catch (error) {
    yield put({ type: GET_POKEMON_ERROR });
  }
}

function* pokemonWacher() {
  yield takeLatest(GET_POKEMON, pokemonWorker);
}

export { pokemonWacher };
