import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/features/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
