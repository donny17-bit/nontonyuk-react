import { combineReducers } from "redux";
import manageMovie from "./manageMovie";
import schedule from "./schedule";
import booking from "./booking";

export default combineReducers({
  manageMovie,
  schedule,
  booking,
});
