import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slices/blogSlice";
import contactReducer from "./slices/contactSlice";
import reviewReducer from "./slices/reviewSlice";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    contact: contactReducer,
    reviews: reviewReducer,
  },
});
