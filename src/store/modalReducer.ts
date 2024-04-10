import { createSlice } from "@reduxjs/toolkit";
import { ModalReducer } from "../types";

const initialState: ModalReducer = {
  display: false,
  element: undefined,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    show(state, { payload }) {
      state.element = payload;
      state.display = true;
    },
    hide(state) {
      state.display = false;
    },
  },
});

export default modalSlice;
