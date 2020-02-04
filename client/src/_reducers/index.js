import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { classes } from "./classes.reducer";
import { subjects } from "./subjects.reducer";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  classes,
  subjects
});

export default rootReducer;
