import { combineReducers } from "@reduxjs/toolkit";
import { sideBarReducer } from "./sidebarReducer";
import { loaderState } from "./loaderReducer";
import { recipeBookReducer } from "./recipeBookReducer";

const rootReducer = combineReducers({
  sideBarReducer: sideBarReducer,
  loaderState: loaderState,
  recipeBookReducer: recipeBookReducer,
});

export default rootReducer;
