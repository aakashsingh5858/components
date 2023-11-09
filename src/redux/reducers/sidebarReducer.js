import { SIBEBAR } from "../ReduxConstants";

export const sideBarReducer = (state = true, action) => {
  switch (action.type) {
    case SIBEBAR:
      return action.payload;
    default:
      return state;
  }
};
