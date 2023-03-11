import { Routes, Route } from "react-router-dom";
import AddEmployee from "./Pages/Employee/NewEmployee/AddEmployee";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes>
    </>
  );
}

export default App;
