import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../../types";

const initialState: Book[] = [];

export const slice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Book>) => {
      const index = state.findIndex((book) => book.id === action.payload.id);

      if (index === -1) {
        state.push({ ...action.payload, quantity: 1 });
      } else {
        state[index].quantity += 1;
      }
    },
    removeBook: (state, action: PayloadAction<number>) => {
      const mainBook = state.find((book) => book.id === action.payload);

      if (mainBook!.quantity === 1) {
        return state.filter((book) => book.id !== action.payload);
      } else {
        return state.map((book) =>
          book.id === action.payload
            ? { ...book, quantity: book.quantity - 1 }
            : book
        );
      }
    },
    setBooks: (state, action: PayloadAction<Book[]>) => {
      let newState: Book[] = [...state];
      newState = action.payload;
      return newState;
    },
  },
});

export const { addToCart, removeBook, setBooks } = slice.actions;
export default slice.reducer;
