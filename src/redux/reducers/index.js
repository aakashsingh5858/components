import { combineReducers } from "@reduxjs/toolkit";
import { sideBarReducer } from "./sidebarReducer";
import { loaderState } from "./loaderReducer";
import { recipeBookReducer } from "./recipeBookReducer";
import { getSearchImageReducer } from "./searchImageReducer";

const rootReducer = combineReducers({
  sideBarReducer: sideBarReducer,
  loaderState: loaderState,
  recipeBookReducer: recipeBookReducer,
  getSearchImageReducer: getSearchImageReducer,
});

export default rootReducer;
