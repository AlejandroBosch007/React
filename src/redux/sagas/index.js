import { all } from "redux-saga/effects";
import { quotesWacher } from "./quotes";
import { pokemonWacher } from "./pokemon";

function* rootSaga() {
    yield all([
        quotesWacher(),
        pokemonWacher()
    ])
}

export {rootSaga}