import { createSlice } from "@reduxjs/toolkit";
import { MenuReducer } from "../types";

const initialState: MenuReducer = {
  display: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    show(state) {
      state.display = true;
    },
    hide(state) {
      state.display = false;
    },
  },
});

export default menuSlice;
