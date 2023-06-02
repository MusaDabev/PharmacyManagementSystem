import axios from "axios";
import React, { useState } from "react";
import { fetchSuppliers } from "../../redux/slices/suppliersSlice";
import { useDispatch } from "react-redux";

const UpdateSupplierForm = ({ supplier }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const dispatch = useDispatch();

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
      case "website":
        setWebsite(value);
        break;
      default:
        break;
    }
  };

  const handleUpdateSupplier = (event) => {
    event.preventDefault();
    const updatedData = {
      name: name,
      email: email,
      phone: phone,
      website,
    };
    axios
      .put(`http://localhost:8080/suppliers/${supplier.id}`, updatedData)
      .then(() => (
        dispatch(fetchSuppliers(),
        setEmail(""),
        setPhone(""),
        setWebsite(""),
        setName("")
        ))
      );
  };

  return (
    <form className="d-flex flex-column">
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
      <div className="form-group">
        <label htmlFor="website">Уебсайт:</label>
        <input
          type="text"
          className="form-control"
          name="website"
          value={website}
          placeholder={supplier.website}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        disabled={Object.keys(supplier).length === 0}
        className="btn btn-primary mt-1"
        onClick={handleUpdateSupplier}
      >
        Обнови
      </button>
    </form>
  );
};

export default UpdateSupplierForm;
