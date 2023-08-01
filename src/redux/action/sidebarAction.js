import { SIBEBAR } from "../ReduxConstands";

export const activeSideBar = (payload) => {
  return {
    type: SIBEBAR,
    payload,
  };
};
