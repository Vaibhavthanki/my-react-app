import { combineReducers } from "redux";
import counterReducer from "./reducer";
import userReducer from "./userReducer";

export default combineReducers({
  count: counterReducer,
  user: userReducer,
});
