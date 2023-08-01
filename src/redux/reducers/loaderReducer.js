import { LOADER } from "../ReduxConstants";

export const loaderState = (state = false, action) => {
  switch (action.type) {
    case LOADER:
      return action.payload;
    default:
      return state;
  }
};
