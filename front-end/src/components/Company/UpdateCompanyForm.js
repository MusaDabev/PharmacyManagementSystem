import React, { useState } from "react";
import axios from "axios";
import styles from "./UpdateCompanyForm.module.css";

function UpdateCompanyForm({ selectedCompany }) {
  // initialize form state with existing company data
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  // handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/companies/${selectedCompany.id}`, formState); // make a PUT request to the server
      // onUpdate(); // trigger the parent component to update the company list
    } catch (error) {
      console.error(error);
    }
  };

  // handle form input changes
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className={`${styles.form} p-3 mt-3`} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Име:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={selectedCompany.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Адрес:</label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          value={selectedCompany.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Тел. номер:</label>
        <input
          type="tel"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          value={selectedCompany.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Имейл:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={selectedCompany.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2" disabled={Object.keys(selectedCompany).length === 0}>
        Обнови компания
      </button>
    </form>
  );
}

export default UpdateCompanyForm;
