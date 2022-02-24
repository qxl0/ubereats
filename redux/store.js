import { createStore } from "redux";
import reducer from "./reducers/index";

export function configureStore(initialState) {
  let store = createStore(reducer, initialState);
  return store;
}

export default configureStore;
