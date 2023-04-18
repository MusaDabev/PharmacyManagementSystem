import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../../redux/slices/employeesSlice";
import { CiCircleRemove } from "react-icons/ci";
import axios from "axios";

function EmployeesList({ handleSelectedEmployee }) {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

 const handleRemoveEmployee = (id) => {
    axios
      .delete(`http://localhost:8080/users/${id}`)
      .then(() => dispatch(fetchEmployees()))
      .then(() => handleSelectedEmployee({}))
      .catch((error) => console.log(error))
 }

  return (
    <div className="mt-2">
      <h2>Служители</h2>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Име</th>
            <th>Фамилия</th>
            <th>Имейл</th>
            <th>Позиция</th>
            <th>Премахни</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              onClick={() => handleSelectedEmployee(employee)}
            >
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td className="d-flex justify-content-center">
                {" "}
                <CiCircleRemove size="1.5rem" onClick={() => handleRemoveEmployee(employee.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesList;
