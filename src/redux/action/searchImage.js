import { SEARCH_IMAGE } from "../ReduxConstants";

export const searchImage = (payload) => {
  console.log("action call");
  return {
    type: SEARCH_IMAGE,
    payload,
  };
};
