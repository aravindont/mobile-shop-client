import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const CART_LOCAL_STORAGE_KEY = "cartItems";

// Define a helper function to save the cartItems array in localStorage
const saveCartItemsToLocalStorage = (cartItems) => {
  localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
};

// Define a helper function to retrieve the cartItems array from localStorage
const getCartItemsFromLocalStorage = () => {
  const cartItems = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
  return cartItems ? JSON.parse(cartItems) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: getCartItemsFromLocalStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      // Save the updated cartItems array in localStorage
      saveCartItemsToLocalStorage(state.cartItems);
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity++;
      // Save the updated cartItems array in localStorage
      saveCartItemsToLocalStorage(state.cartItems);
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      // Save the updated cartItems array in localStorage
      saveCartItemsToLocalStorage(state.cartItems);
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = removeItem;
      // Save the updated cartItems array in localStorage
      saveCartItemsToLocalStorage(state.cartItems);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
