import { createSlice } from "@reduxjs/toolkit";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload);
    },
    removeInvoice: (state, action) => {
      // Find the invoice
      const index = state.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        // If the item exists, remove it
        state.splice(index, 1);
      }
    },
  },
});

export const { addInvoice, removeInvoice } = invoicesSlice.actions;
export default invoicesSlice.reducer;
