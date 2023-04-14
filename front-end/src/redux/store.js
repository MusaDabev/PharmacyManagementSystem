import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slices/cartSlice";
import employeesReducer from "../redux/slices/employeesSlice";
import companiesReducer from "./slices/companiesSlice";
import stockReducer from "./slices/stockSlice";
import invoiceReducer from "./slices/invoiceSlice";
import suppliersReducer from "./slices/suppliersSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    employees: employeesReducer,
    companies: companiesReducer,
    stock: stockReducer,
    invoices: invoiceReducer,
    suppliers: suppliersReducer,
  },
});
