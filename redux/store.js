import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slices/blogSlice";
import contactReducer from "./slices/contactSlice";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    contact: contactReducer,
  },
});
