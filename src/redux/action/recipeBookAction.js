import { RECIPE_BOOK_LIST } from "../ReduxConstants";

export const recipeBook = () => {
  console.log("action call");
  return {
    type: RECIPE_BOOK_LIST,
  };
};
