import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Products {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

const initialState: Products[] = [];

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      if (
        state.findIndex((product) => product.id === action.payload.id) === -1
      ) {
        state.push(action.payload);
      } else {
        state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity++ }
            : item
        );
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter((product) => product.id !== id);
    },
  },
});

export const { addToCart, removeProduct } = slice.actions;
export default slice.reducer;
