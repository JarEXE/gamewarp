import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      // console.log({ ...action.payload, selectedPlatforms: ["PC"] });
      state.cart.push({
        ...action.payload,
        selectedPlatforms: [action.payload.platforms[0].platform.name],
      });
    },
    deleteItem(state, action) {
      // payload = ID
      state.cart = state.cart.filter((item) => item.gameId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = gameId
      const item = state.cart.find((item) => item.gameId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
      item.selectedPlatforms.push(item.platforms[0].platform.name);
    },
    decreaseItemQuantity(state, action) {
      // payload = gameId
      const item = state.cart.find((item) => item.gameId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      item.selectedPlatforms.pop();

      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    updateSelectedPlatforms(state, action) {
      const { gameId, updatedValues } = action.payload;
      const item = state.cart.find((item) => item.gameId == gameId);
      item.selectedPlatforms = updatedValues;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  updateSelectedPlatforms,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getUser = (state) => state.user.username;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  // eslint-disable-next-line
  state.cart.cart.find((item) => item.gameId === id)?.quantity ?? 0;
