import React, { useState } from "react";
import axios from "axios";

function AddCompanyForm() {
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/companies",
        formState
      );
      if (response.status === 200) {
        setFormState({
          name: "",
          address: "",
          phoneNumber: "",
          email: "",
        }); // reset the form state after successful submission
        setSuccessMsg(true);
      } else {
        setErrorMsg(true);
      }
    } catch (error) {
      setErrorMsg(true);
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
    <div className="mx-auto" style={{width: "fit-content"}}>
    {successMsg && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Компанията беше добавена усепшно!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setSuccessMsg(false)}
          ></button>
        </div>
      )}
      {errorMsg && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Грешка при добавяне на компанията!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setErrorMsg(false)}
          ></button>
        </div>
      )}
    </div>
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <div className="form-group ms-1">
          <label htmlFor="name">Име:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group ms-2">
          <label htmlFor="address">Адрес:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formState.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group ms-2">
          <label htmlFor="phoneNumber">Тел. номер:</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formState.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group ms-2">
          <label htmlFor="email">Имейл:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3 ms-2" >
          Добави компания
        </button>
      </form>
    </>
  );
}

export default AddCompanyForm;
