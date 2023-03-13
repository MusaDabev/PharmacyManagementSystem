import { Routes, Route } from "react-router-dom";
import AddEmployee from "./Pages/Employee/NewEmployee/AddEmployee";
import Home from "./Pages/Home/Home";
import AddMedicine from "./Pages/Medicine/AddMedicine";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/add-medicine" element={<AddMedicine />} />
      </Routes>
    </>
  );
}

export default App;
