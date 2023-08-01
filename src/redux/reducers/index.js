import { combineReducers } from "@reduxjs/toolkit";
import { sideBarReducer } from "./sidebarReducer";
import { loaderState } from "./loaderReducer";

const rootReducer = combineReducers({
  sideBarReducer: sideBarReducer,
  loaderState: loaderState,
});

export default rootReducer;
