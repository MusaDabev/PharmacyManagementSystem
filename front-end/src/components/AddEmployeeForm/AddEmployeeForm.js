import React, { useState } from "react";
import styles from "./AddEmployeeForm.module.css";
import axios from "axios";

function AddEmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState(null);
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

  function handleDateOfBirthChange(e) {
    setDateOfBirth(e.target.value);
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

  function handleRoleChange(e) {
    setRoleId(e.target.value);
  }

  function handleGenderChange(e) {
    setGender(e.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newEmployee = {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      email,
      password,
      position,
      roleId,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/users",
        newEmployee
      );
      if (response.status === 200) {
        setSuccessMsg(true);
        setFirstName("");
        setLastName("");
        setDateOfBirth(null);
        setGender("");
        setPosition("");
        setEmail("");
        setPassword("");
        setRoleId(null);
      } else {
        setErrorMsg(true);
      }
    } catch (error) {
      setErrorMsg(true);
      console.error("Failed to add employee", error);
    }
  }

  return (
    <>
      <div className="mx-auto mt-2" style={{width: "fit-content"}}>
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
            className="alert alert-danger alert-dismissible fade show"
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
      </div>
      <form className="d-flex" onSubmit={handleSubmit}>
        <div className="me-3">
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
          <div className="d-flex">
            <div className="me-1">
              <label htmlFor="startDate">Дата на раждане:</label>
              <input
                id="startDate"
                value={dateOfBirth}
                className="form-control"
                type="date"
                onChange={handleDateOfBirthChange}
              />
            </div>
            <div className="ms-1">
              <label htmlFor="gender">Пол:</label>
              <select
                id="gender"
                className="form-select mb-2"
                value={gender}
                onChange={handleGenderChange}
              >
                <option value="">--Моля изберете пол--</option>
                <option value="мъж">Мъж</option>
                <option value="жена">Жена</option>
              </select>
            </div>
          </div>
          <label htmlFor="position">Позиция:</label>
          <select
            id="position"
            className="form-select mb-2"
            value={position}
            onChange={handlePositionChange}
          >
            <option value="">--Моля изберете позиция--</option>
            <option value="управител">Управител</option>
            <option value="магистър фармацевт">Магистър фармацевт</option>
            <option value="помощник фармцевт">Помощник фармацевт</option>
            <option value="продавач консултант">Продавач консултант</option>
            <option value="оператор">Оператор</option>
            <option value="стоковед">Стоковед</option>
          </select>
        </div>
        <div>
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
          <label htmlFor="roles">Роля:</label>
          <select
            id="roles"
            className="form-select mb-2"
            value={roleId}
            onChange={handleRoleChange}
          >
            <option value="">--Моля изберете роля--</option>
            <option value="1">Admin</option>
            <option value="2">User</option>
          </select>
          <button
            type="submit"
            className={styles.button}
            disabled={emailError || passwordError}
          >
            Добави служител
          </button>
        </div>
      </form>
    </>
  );
}

export default AddEmployeeForm;
