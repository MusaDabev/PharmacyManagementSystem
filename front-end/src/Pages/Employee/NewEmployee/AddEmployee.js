import React from "react";
import AddEmployeeForm from "../../../components/AddEmployeeForm/AddEmployeeForm";
import SideBar from "../../../components/SideBar/SideBar";
import addEmployeeImg from "../../../assets/pictures/addEmployee.png";

function AddEmployee() {
  return (
    <>
      <div className="d-flex">
        <SideBar />
        <div className="w-100 d-flex flex-column m-2" style={{backgroundColor: "#89cde1"}}>
          <AddEmployeeForm />
          <img src={addEmployeeImg} width="80%" className="ms-auto"></img>
        </div>
      </div>
    </>
  );
}

export default AddEmployee;
