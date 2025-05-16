import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../feature/books/booksSilce";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
