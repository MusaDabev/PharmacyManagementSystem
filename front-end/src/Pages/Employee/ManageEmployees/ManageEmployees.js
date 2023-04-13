import React, { useState } from "react";
import UpdateEmployeeForm from "../../../components/Employee/UpdateEmployeeForm";
import EmployeesList from "../../../components/EmployeesList/EmployeesList";

function ManageEmployees() {
  const [selectedEmployee, setSelectedEmployee] = useState({});

  const handleSelectedEmployee = (employee) => {
    setSelectedEmployee(employee);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <EmployeesList handleSelectedEmployee={handleSelectedEmployee} />
          </div>
          <div className="col">
            <UpdateEmployeeForm employee={selectedEmployee} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageEmployees;
