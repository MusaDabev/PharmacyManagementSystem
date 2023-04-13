import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async () => {
    const response = await axios.get('http://localhost:8080/companies');
    return response.data;
  }
);

const companiesSlice = createSlice({
  name: 'companies',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        console.error(action.error.message);
      });
  },
});

export default companiesSlice.reducer;
