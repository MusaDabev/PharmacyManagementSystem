import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If the item exists, increase its quantity
        existingItem.units += 1;
      } else {
        // If the item doesn't exist, add it to the cart
        state.push({ ...action.payload });
      }
    },
    removeItem: (state, action) => {
      // Find the item in the cart
      const index = state.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        // If the item exists, remove it from the cart
        state.splice(index, 1);
      }
    },
    emptyCart: (state, action) => {
      state.splice(0, state.length);
     }
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
