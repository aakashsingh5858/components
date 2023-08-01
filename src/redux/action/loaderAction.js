import { LOADER } from "../ReduxConstands";

export const activeLoader = (payload) => {
  return {
    type: LOADER,
    payload,
  };
};
