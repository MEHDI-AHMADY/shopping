import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../../types";

const initialState: Book[] = [];

export const slice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Book>) => {
      if (state.findIndex((book) => book.id === action.payload.id) === -1) {
        state.push(action.payload);
      } else {
        state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity++ }
            : item
        );
      }
    },
    removeBook: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter((book) => book.id !== id);
    },
    setBooks: (state, action: PayloadAction<Book[]>) => {
      let newState:Book[] = [...state];
      newState = action.payload;
      return newState;
    },
  },
});

export const { addToCart, removeBook, setBooks } = slice.actions;
export default slice.reducer;
