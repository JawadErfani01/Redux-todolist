import counterReducers from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";
const allReducers = combineReducers({
  counter: counterReducers,
  login: loggedReducer,
});
export default allReducers;
