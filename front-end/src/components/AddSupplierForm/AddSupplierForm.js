import axios from "axios";
import { async } from "q";
import React, { useState } from "react";

const AddSupplierForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/suppliers", {
        name,
        email,
        phone,
        website
      });
      if (response.status === 200) {
        setSuccessMsg(true);
        setName("");
        setEmail("");
        setPhone("");
        setWebsite("");
      } else {
        setErrorMsg(true);
      }
    } catch (error) {
      console.error("Failed to add supplier", error);
      setErrorMsg(true);
    }
  }

  return (
    <>
    <div className="mx-auto" style={{width: "fit-content"}}>
    {successMsg && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Доставчикът беше добавен усепшно!
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
          Доставчикът не може да бъде добавен!
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

      <form onSubmit={onSubmit} className="d-sm-flex align-items-center mx-auto">
        <div className="ms-3">
          <label htmlFor="name" className="form-label">
            Име:
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="ms-3">
          <label htmlFor="email" className="form-label">
            Имейл:
          </label>
          <input
            type="email"
            required
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="ms-3">
          <label htmlFor="phone" className="form-label">
            Телефон:
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="ms-3">
          <label htmlFor="website" className="form-label">
            Уебсайт:
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="ms-3 mt-4 pt-2">
          <button type="submit" className="btn btn-primary">
            Запази
          </button>
        </div>
      </form>
    </>
  );
};

export default AddSupplierForm;
