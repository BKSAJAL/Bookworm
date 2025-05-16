import { createSlice } from "@reduxjs/toolkit";
import bookData from "../../utils/booksData.json";

const initialState = {
  books: bookData,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload); // add new book to the list
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
