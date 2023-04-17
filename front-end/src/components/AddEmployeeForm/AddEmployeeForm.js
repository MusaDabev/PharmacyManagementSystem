import React, { useState } from "react";
import styles from "./AddEmployeeForm.module.css";
import axios from "axios";

function AddEmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handlePositionChange(event) {
    setPosition(event.target.value);
  }

  function handleEmailChange(event) {
    const emailValue = event.target.value;
    setEmail(emailValue);
  }

  function validateEmail() {
    if (email === "") {
      setEmailError("");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Невалиден имейл адрес!");
    } else {
      setEmailError("");
    }
  }

  function validatePassword() {
    if (password === "") {
      setPasswordError("");
    } else if (password.length < 6) {
      setPasswordError("Паролата трябва да бъде с дължина поне 6 символа!");
    } else {
      setPasswordError("");
    }
  }

  function handlePasswordChange(event) {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newEmployee = { firstName, lastName, email, password, position };
    try {
      const response = await axios.post(
        "http://localhost:8080/users",
        newEmployee
      );
      if (response.status === 200) {
        setSuccessMsg(true);
        setFirstName("");
        setLastName("");
        setPosition("");
        setEmail("");
        setPassword("");
      } else {
        setErrorMsg(true);
      }
    } catch (error) {
      console.error("Failed to add employee", error);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {successMsg && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Служителят беше добавен усепшно!
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
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Служителят не може да бъде добавен!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setErrorMsg(false)}
          ></button>
        </div>
      )}
      <label>
        Име:
        <input
          type="text"
          required
          value={firstName}
          onChange={handleFirstNameChange}
          className={styles.input}
        />
      </label>
      <label>
        Фамилия:
        <input
          type="text"
          required
          value={lastName}
          onChange={handleLastNameChange}
          className={styles.input}
        />
      </label>
      <label>
        Позиция:
        <input
          type="text"
          value={position}
          onChange={handlePositionChange}
          className={styles.input}
        />
      </label>
      <label>
        Имейл:
        <input
          type="email"
          required
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail}
          className={styles.input}
        />
        <span className="text-danger">{emailError}</span>
      </label>
      <label>
        Парола:
        <input
          type="password"
          required
          value={password}
          onChange={handlePasswordChange}
          onBlur={validatePassword}
          className={styles.input}
        />
        <span className="text-danger">{passwordError}</span>
      </label>
      <button
        type="submit"
        className={styles.button}
        disabled={emailError || passwordError}
      >
        Добави служител
      </button>
    </form>
  );
}

export default AddEmployeeForm;
