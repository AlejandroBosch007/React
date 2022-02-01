import { takeLatest, call, put } from "redux-saga/effects";
import { SAVE_QUOTE, SAVED_QUOTE, SAVE_QUOTE_ERROR } from "../actions/const";

export function* quotesWacher() {
  yield takeLatest(SAVE_QUOTE, quotesWorker);
}

const fetchQuotes = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res) =>
    res.json()
  );
};

function* quotesWorker() {
  try {
    const response = yield call(fetchQuotes);
    const quote = response;
    yield put({ type: SAVED_QUOTE, quote });
  } catch (error) {
    yield put({ type: SAVE_QUOTE_ERROR, error });
  }
}
