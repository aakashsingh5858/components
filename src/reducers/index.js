import { combineReducers } from "@reduxjs/toolkit";
import { loadingReducer } from "../store/loader";
import { sidebarReducer } from "../store/sidebar";

const rootReducer = combineReducers({
  loadingState: loadingReducer,
  sideBar: sidebarReducer,
});

export default rootReducer;
