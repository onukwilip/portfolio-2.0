import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuReducer";

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
  },
});

export const menuActions = menuSlice.actions;
export default store;
