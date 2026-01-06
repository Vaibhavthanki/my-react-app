import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import combineReducer from "./reducer/index";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(combineReducer, applyMiddleware(thunk));
const store = createStore(combineReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
