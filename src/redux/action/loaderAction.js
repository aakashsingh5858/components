import { LOADER } from "../ReduxConstants";

export const activeLoader = (payload) => {
  return {
    type: LOADER,
    payload,
  };
};
