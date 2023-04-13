import axios from "axios";
import React, { useState } from "react";

const UpdateEmployeeForm = ({ employee }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "position":
        setPosition(value);
        break;
      default:
        break;
    }
  };

  const handleUpdateEmployee = (event) => {
    event.preventDefault();
    const employee = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      position: position,
    };
    axios
      .post("http://localhost:8080/employees", employee)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="firstName">Име:</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={firstName}
          placeholder={employee.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Фамилия:</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={lastName}
          placeholder={employee.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Имейл:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          placeholder={employee.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Телефон:</label>
        <input
          type="tel"
          className="form-control"
          name="phone"
          value={phone}
          //   placeholder={employee.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="position">Позиция:</label>
        <input
          type="text"
          className="form-control"
          name="position"
          value={position}
          placeholder={employee.position}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-1"
        onClick={handleUpdateEmployee}
      >
        Обнови
      </button>
    </form>
  );
};

export default UpdateEmployeeForm;
