import { createStore } from "redux";
import combineReducer from "./reducer/index";

const store = createStore(combineReducer);

export default store;
