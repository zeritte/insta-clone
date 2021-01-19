import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import MainReducer from "./MainReducer";

export default combineReducers({
  auth: AuthReducer,
  main: MainReducer
});
