import axios from "axios";
import React, { useState } from "react";

const UpdateSupplierForm = ({ supplier }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleUpdateSupplier = (event) => {
    event.preventDefault();
    const supplier = {
      name: name,
      email: email,
      phone: phone,
    };
    axios
      .post("http://localhost:8080/suppliers", supplier)
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
          name="name"
          value={name}
          placeholder={supplier.name}
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
          placeholder={supplier.email}
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
          placeholder={supplier.phone}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-1"
        onClick={handleUpdateSupplier}
      >
        Обнови
      </button>
    </form>
  );
};

export default UpdateSupplierForm;
