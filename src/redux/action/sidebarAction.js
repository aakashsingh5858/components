import { SIBEBAR } from "../ReduxConstants";

export const activeSideBar = (payload) => {
  return {
    type: SIBEBAR,
    payload,
  };
};
