import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../features/characterSlice";

export const store = configureStore({
  reducer: {
    characters: characterReducer, 
  },
  
});
export default store;