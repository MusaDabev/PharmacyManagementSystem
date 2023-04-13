import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 400,
  }

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    addStock: (state, action) => {
      state.value += action.payload;
    },
    decreaseStock: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { addStock, decreaseStock } = stockSlice.actions;
export default stockSlice.reducer;