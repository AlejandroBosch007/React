import { createStore, combineReducers } from "redux";
import {bankReducer} from "../reducers/bank";

const reducers = combineReducers({
  bankReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
