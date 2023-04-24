import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [],
  totalAmount: 0,
  isShowed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      // Push to cart. When cart is empty
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export default cartSlice;
