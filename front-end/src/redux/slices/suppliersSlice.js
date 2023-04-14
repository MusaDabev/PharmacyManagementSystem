import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSuppliers = createAsyncThunk(
  'suppliers/fetchSuppliers',
  async () => {
    const response = await axios.get('http://localhost:8080/suppliers');
    return response.data;
  }
);

const suppliersSlice = createSlice({
  name: 'suppliers',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuppliers.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchSuppliers.rejected, (state, action) => {
        console.error(action.error.message);
      });
  },
});

export default suppliersSlice.reducer;