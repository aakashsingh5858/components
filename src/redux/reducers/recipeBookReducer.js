import { SET_RECIPE_BOOK_LIST } from "../ReduxConstants";

export const recipeBookReducer = (data = [], action) => {
  switch (action.type) {
    case SET_RECIPE_BOOK_LIST:
      console.log(data, "reducer");
      return [...action.data];
    default:
      return data;
  }
};
