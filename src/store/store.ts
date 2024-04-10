import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuReducer";
import modalSlice from "./modalReducer";

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export const menuActions = menuSlice.actions;
export const modalActions = modalSlice.actions;
export default store;
