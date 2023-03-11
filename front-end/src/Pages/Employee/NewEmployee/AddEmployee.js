import React from "react";
import AddEmployeeForm from "../../../components/AddEmployeeForm/AddEmployeeForm";
import NavBar from "../../../components/NavBar/NavBar";
import SideBar from "../../../components/SideBar/SideBar";

function AddEmployee() {
  return (
    <>
      <NavBar />
      <div className="d-flex">
        <SideBar />
        <AddEmployeeForm />
      </div>
    </>
  );
}

export default AddEmployee;
