import { SIBEBAR } from "../ReduxConstands";

export const sideBarReducer = (state = false, action) => {
  switch (action.type) {
    case SIBEBAR:
      return action.payload;
    default:
      return state;
  }
};
