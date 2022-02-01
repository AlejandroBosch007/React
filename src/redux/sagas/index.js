import { all } from "redux-saga/effects";
import { quotesWacher } from "./quotes";

function* rootSaga() {
    yield all([
        quotesWacher()
    ])
}

export {rootSaga}