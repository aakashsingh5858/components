import { GET_SEARCH_IMAGE } from "../ReduxConstants";

export const getSearchImageReducer = (data = [], action) => {
  switch (action.type) {
    case GET_SEARCH_IMAGE:
      return action.data;
    default:
      return data;
  }
};
