import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInvoices = createAsyncThunk(
  'invoices/fetchInvoices',
  async () => {
    const response = await axios.get('http://localhost:8080/invoices');
    return response.data;
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        console.error(action.error.message);
      });
  },
});

export const { addInvoice, removeInvoice } = invoicesSlice.actions;
export default invoicesSlice.reducer;
