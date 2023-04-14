import { useState, useEffect } from "react";
import { Routes, Route, json } from "react-router-dom";
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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/manage-employees" element={<ManageEmployees />} />
        <Route path="/add-medicine" element={<AddMedicine />} />
        <Route path="/add-company" element={<AddCompany />} />
        <Route path="/manage-companies" element={<ManageCompanies />} />
        <Route path="/add-supplier" element={<AddSupplier />} />
        <Route path="/manage-suppliers" element={<ManageSuppliers />} />
        <Route
          path="/sell-medicine"
          element={
            <SellMedicine
              jsonData={jsonData}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setInvoices={setInvoices}
            />
          }
        />
        <Route
          path="/invoice"
          element={
            <Invoice
              invoiceNumber={123}
              items={cartItems}
              date={date}
              total={444}
            />
          }
        />
        <Route
          path="/medicines-in-stock"
          element={<MedicinesInStock medicines={jsonData} />}
        />
        <Route path="/stock" element={<Stock />} />
        <Route path="/discounts" element={<Discount />} />
        <Route path="/today-report" element={<TodayReport />} />
      </Routes>
    </>
  );
}

export default App;
