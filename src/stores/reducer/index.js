import { combineReducers } from "redux";
import manageMovie from "./manageMovie";
import schedule from "./schedule";
import booking from "./booking";
import user from "./user";

export default combineReducers({
  manageMovie,
  schedule,
  booking,
  user,
});
