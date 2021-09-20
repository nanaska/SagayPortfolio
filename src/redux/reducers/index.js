import { combineReducers } from "redux";

import filterRed from "./filters";
import pizzasRed from "./pizzas";

const rootReducer = combineReducers({
  filters: filterRed,
  pizzas: pizzasRed,
});

export default rootReducer;
