import { configureStore } from "@reduxjs/toolkit";
import todo from "./todoRedux/todoReducers";


export const store = configureStore({
  reducer: {
    todo,

  },
});
