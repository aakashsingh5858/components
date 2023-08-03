import { SET_RECIPE_BOOK_LIST } from "../ReduxConstants";

export const recipeBookReducer = (data = [], action) => {
  switch (action.type) {
    case SET_RECIPE_BOOK_LIST:
      return action.data;
    default:
      return data;
  }
};
