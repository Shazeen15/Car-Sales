import { combineReducers } from "redux";

import carReducer from "./carReducer";

const reducer = combineReducers({
  car: carReducer,
});

export default reducer;
