import { combineReducers } from "redux";
import manageMovie from "./manageMovie";
import schedule from "./schedule";

export default combineReducers({
  manageMovie,
  schedule,
});
