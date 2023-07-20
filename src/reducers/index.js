import { combineReducers } from "@reduxjs/toolkit";
import { loadingReducer } from "../store/loader";

const rootReducer = combineReducers({
  loadingState: loadingReducer,
});

export default rootReducer;
