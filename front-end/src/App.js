import { useState, useEffect } from "react";
import { Routes, Route, json, Navigate } from "react-router-dom";
import Invoice from "./components/Invoice/Invoice";
import NavBar from "./components/NavBar/NavBar";
import TodayReport from "./Pages/TodayReport/TodayReport";
import AddCompany from "./Pages/Company/AddCompany/AddCompany";
import ManageCompanies from "./Pages/Company/ManageCompanies/ManageCompanies";
import Discount from "./Pages/Discount/Discount";
import ManageEmployees from "./Pages/Employee/ManageEmployees/ManageEmployees";
import AddEmployee from "./Pages/Employee/NewEmployee/AddEmployee";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import AddMedicine from "./Pages/Medicine/AddMedicine";
import MedicinesInStock from "./Pages/Medicine/MedicinesInStock";
import SellMedicine from "./Pages/Medicine/SellMedicine";
import Stock from "./Pages/Stock/Stock";
import AddSupplier from "./Pages/AddSupplier/AddSupplier";
import ManageSuppliers from "./Pages/ManageSuppliers/ManageSuppliers";
import ManageInvoices from "./Pages/Invoices/ManageInvoices";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [jsonData, setJsonData] = useState([]);
  const [user, setUser] = useState(null);
  const [invoices, setInvoices] = useState([]);

  const date = new Date().toString();

  useEffect(() => {
    fetch("http://localhost:5000/medicines")
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/manage-employees" element={<ManageEmployees />} />
        <Route
          path="/add-medicine"
          element={
            <ProtectedRoute>
              <AddMedicine />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-company"
          element={
            <ProtectedRoute>
              <AddCompany />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-companies"
          element={
            <ProtectedRoute>
              <ManageCompanies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-supplier"
          element={
            <ProtectedRoute>
              <AddSupplier />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-suppliers"
          element={
            <ProtectedRoute>
              <ManageSuppliers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-invoices"
          element={
            <ProtectedRoute>
              <ManageInvoices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sell-medicine"
          element={
            <ProtectedRoute>
              <SellMedicine
                jsonData={jsonData}
                cartItems={cartItems}
                setCartItems={setCartItems}
                setInvoices={setInvoices}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/invoice"
          element={
            <ProtectedRoute>
              <Invoice
                invoiceNumber={123}
                items={cartItems}
                date={date}
                total={444}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/medicines-in-stock"
          element={
            <ProtectedRoute>
              <MedicinesInStock medicines={jsonData} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stock"
          element={
            <ProtectedRoute>
              <Stock />
            </ProtectedRoute>
          }
        />
        <Route
          path="/discounts"
          element={
            <ProtectedRoute>
              <Discount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/today-report"
          element={
            <ProtectedRoute>
              <TodayReport />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
