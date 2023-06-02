import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    const response = await axios.get('http://localhost:8080/users');
    return response.data;
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        console.error(action.error.message);
      });
  },
});

export default employeesSlice.reducer;
