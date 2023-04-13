import React from "react";
import AddEmployeeForm from "../../../components/AddEmployeeForm/AddEmployeeForm";
import SideBar from "../../../components/SideBar/SideBar";
import addEmployeeImg from "../../../assets/pictures/addEmployee.png";

function AddEmployee() {
  return (
    <>
      <div className="d-flex">
        <SideBar />
        <div className="w-100 d-flex flex-column align-items-center mt-2">
          <img src={addEmployeeImg}></img>
          <AddEmployeeForm />
        </div>
      </div>
    </>
  );
}

export default AddEmployee;
