import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { bankReducer } from "../reducers/bank";
import { quotesReducer } from "../reducers/quotes";
import { pokemonReducer } from "../reducers/pokemon";

import { rootSaga } from "../sagas/";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  bankReducer,
  quotesReducer,
  pokemonReducer,
});

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatchig", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger),
    reduxDevTools
  )
);

sagaMiddleware.run(rootSaga);

export { store };
