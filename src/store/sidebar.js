import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const sidebar = createSlice({
  name: "Loader",
  initialState,
  reducers: {
    toggleOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const sidebarReducer = sidebar.reducer;
export const { toggleOpen } = sidebar.actions;
