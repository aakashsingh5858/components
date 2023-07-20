import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const toast = createSlice({
  name: "Loader",
  initialState,
  reducers: {
    loadingAction: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const loadingReducer = toast.reducer;
export const { loadingAction } = toast.actions;
