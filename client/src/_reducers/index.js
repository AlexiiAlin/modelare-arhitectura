import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { classes } from "./classes.reducer";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  classes
});

export default rootReducer;
